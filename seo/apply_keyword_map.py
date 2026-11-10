"""Apply seo/keyword-map.py to page <head> tags and H1s. Idempotent."""
import re, sys, html, importlib.util, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("km", root / "seo" / "keyword-map.py")
km = importlib.util.module_from_spec(spec); spec.loader.exec_module(km)
TODAY_ISO, TODAY_TXT = "2026-11-10", "November 2026"

def esc(s): return html.escape(s, quote=True)

def sub1(pat, repl, s, f, what):
    n = len(re.findall(pat, s))
    if n == 0: print(f"  ! {f}: no {what}"); return s
    return re.sub(pat, repl, s, count=1)

changed = []
for f, (kw, vol, kd, title, desc, h1) in km.MAP.items():
    p = root / f; s = orig = p.read_text()
    if title:
        s = sub1(r"<title>.*?</title>", lambda m: f"<title>{esc(title)} | FreeDevTool</title>", s, f, "title")
        for attr in (r'property="og:title"', r'name="twitter:title"'):
            s = re.sub(rf'(<meta {attr} content=")[^"]*(")', lambda m: m.group(1)+esc(title)+m.group(2), s)
    if desc:
        assert len(desc) <= 160, (f, len(desc))
        s = sub1(r'(<meta name="description" content=")[^"]*(")', lambda m: m.group(1)+esc(desc)+m.group(2), s, f, "description")
        for attr in (r'property="og:description"', r'name="twitter:description"'):
            s = re.sub(rf'(<meta {attr} content=")[^"]*(")', lambda m: m.group(1)+esc(desc)+m.group(2), s)
    if h1:
        s = sub1(r"(\n\s*<h1>)[^<]*(</h1>)", lambda m: m.group(1)+h1+m.group(2), s, f, "h1")
    if s != orig:
        s = re.sub(r'"dateModified":"\d{4}-\d{2}-\d{2}"', f'"dateModified":"{TODAY_ISO}"', s)
        s = re.sub(r"Last updated: [A-Z][a-z]+ \d{4}", f"Last updated: {TODAY_TXT}", s)
        p.write_text(s); changed.append(f)

# sitemap lastmod for changed pages
sm = root / "sitemap.xml"; x = sm.read_text()
for f in changed:
    slug = f[:-5]
    x = re.sub(rf"(<loc>https://freedevtool\.org/{re.escape(slug)}</loc>\s*<lastmod>)[^<]*", rf"\g<1>{TODAY_ISO}", x)
sm.write_text(x)
print(f"updated {len(changed)} pages:", " ".join(changed))
