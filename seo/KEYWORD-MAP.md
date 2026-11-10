# FreeDevTool keyword map (November 2026)

Source: OpenSEO (DataForSEO, US) search volume and keyword difficulty, plus 16 months of Search Console queries.
Each page targets **one** primary keyword so pages don't compete with each other. Edit `seo/keyword-map.py` and run `python3 seo/apply_keyword_map.py` to re-apply.

| Page | Primary keyword | US volume/mo | KD | Title |
|---|---|---:|---:|---|
| `/char-counter` | character counter | 246,000 | 41 | Character Counter — Word Count, Bytes & Tweet Limit |
| `/json-formatter` | json formatter | 110,000 | 57 | JSON Formatter & Validator Online — Beautify JSON |
| `/base64-encoder` | base64 decode | 60,500 | 23 | Base64 Decode & Encode Online — Free Base64 Decoder |
| `/byte-converter` | mb to gb | 49,500 | 3 | Byte Converter — MB to GB, KB, TB & GiB Calculator |
| `/ip-lookup` | subnet calculator | 49,500 | 27 | Subnet Calculator & IP Lookup — IPv4/IPv6 CIDR |
| `/unix-timestamp-converter` | epoch converter | 40,500 | 17 | Epoch Converter — Unix Timestamp to Date & Back |
| `/text-diff` | diff checker | 27,100 | 9 | Diff Checker — Compare Two Texts Online (Text Compare) |
| `/number-base` | hex to decimal | 27,100 | 18 | Number Base Converter — Binary, Hex to Decimal, Octal |
| `/case-converter` | case converter | 27,100 | 19 | Case Converter — camelCase, snake_case, kebab-case Online |
| `/uuid-generator` | uuid generator | 18,100 | 15 | UUID Generator Online — v4, v7, v1, v5 (Bulk) |
| `/xml-formatter` | xml formatter | 18,100 | 6 | XML Formatter & Validator Online — Beautify XML |
| `/jwt-decoder` | jwt decoder | 14,800 | 36 | JWT Decoder — Decode JWT Tokens Online |
| `/regex-tester` | regex tester | 14,800 | 34 | Regex Tester Online — JavaScript Regular Expressions |
| `/timestamp-diff` | date difference calculator | 9,900 | 36 | Date & Time Difference Calculator — Timestamp Diff |
| `/sql-formatter` | sql formatter | 9,900 | 34 | SQL Formatter & Beautifier Online — MySQL, PostgreSQL |
| `/hex-to-rgb` | hex to rgb | 8,100 | 12 | Hex to RGB Converter — HSL, OKLCH Color Converter |
| `/http-status` | http status codes | 8,100 | 62 | HTTP Status Codes — Complete List 1xx to 5xx |
| `/json-to-csv` | json to csv | 5,400 | 7 | JSON to CSV Converter Online — Excel-Ready Download |
| `/color-name` | color name finder | 3,600 | 23 | Color Name Finder — Hex Color Name Lookup |
| `/px-to-rem` | px to rem | 2,900 | 3 | PX to REM Converter — CSS Pixels to rem & em |
| `/js-minifier` | javascript minifier | 2,400 | 33 | JavaScript Minifier & Beautifier Online — JS Minify |
| `/git-cheatsheet` | git commands cheat sheet | 1,900 | 14 | Git Commands Cheat Sheet — 60+ Commands with Examples |
| `/chmod-calculator` | chmod calculator | 1,900 | 6 | (unchanged) |
| `/base64-image` | image to base64 | 1,900 | 10 | Image to Base64 Converter — Data URI Online |
| `/html-minifier` | html minifier | 1,600 | 12 | HTML Minifier & Beautifier Online — Compress HTML |
| `/hash-generator` | md5 hash generator | 1,600 | 42 | Hash Generator — MD5, SHA-256, SHA-512 Online |
| `/cron-parser` | cron expression generator | 1,300 | 19 | Cron Expression Generator & Parser — Next 10 Run Times |
| `/yaml-to-json` | yaml to json | 1,300 | 2 | YAML to JSON Converter Online — JSON to YAML Too |
| `/word-to-markdown` | word to markdown | 1,000 | 14 | Word to Markdown Converter — DOCX & Google Docs to MD |
| `/string-escape` | string escape | 720 | 16 | String Escape & Unescape — JSON Escape, HTML, URL |
| `/css-minifier` | css minifier | 720 | 10 | CSS Minifier & Beautifier Online — Minify CSS |
| `/css-box-shadow` | box shadow generator | 720 | 29 | CSS Box Shadow Generator — Live Preview & Presets |
| `/ai-token-counter` | claude token counter | 390 | 7 | AI Token Counter — GPT & Claude Tokens and Cost |
| `/slug-generator` | slug generator | 320 | 0 | URL Slug Generator — SEO-Friendly Slugs, 80+ Languages |

## Pages left as they were

Already well targeted or low search demand: `chmod-calculator`, `dns-lookup`, `password-generator`, `qr-generator`, `color-picker`, `css-gradient`, `wcag-contrast`, `lorem-ipsum`, `markdown-preview`, `meta-tag-generator`, `og-preview`, `html-entity`, `http-request-builder`, `jwt-generator`, `regex-explainer`, `relative-time` (description only), category pages and guides.

## Skipped on purpose

- **crontab guru** (6,600/mo): another site's brand name. Targeting it breaks Google's spam policies.
- **what is my ip** (550k, KD 92) and **qr code generator** (823k, KD 79): too competitive for a new domain.
- **word counter** (1.2M, KD 65): used only as a secondary term on `/char-counter`.
