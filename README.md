# hack:space Bützow Website

Modern, GDPR-compliant website for hack:space Bützow with neon cyberpunk theme and automatic deployment.

## 🚀 Quick Start

1. Open `website/index.html` in browser
2. Make changes
3. Push to GitHub → Auto-deployment to `https://hackspace-buetzow.de/`

## 📁 Project Structure

```text
hackspace-buetzow/
├── docs/                   # Documentation
├── src/design/            # Source files (PSD, etc.)
├── website/               # Production website
│   ├── assets/           # Images, fonts, icons
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript
│   ├── data/             # CSV data files
│   ├── pages/            # Legal pages
│   └── index.html        # Main page
└── .github/              # Deployment workflows
```

## 🎨 Theme

**Neon Cyberpunk:** Deep blue, anthracite, violet with glowing cyan/magenta accents

- Custom background image
- Neon glow effects on logo and interactive elements
- Self-hosted Inter & Roboto Mono fonts

## 🍪 GDPR Compliance

- ✅ No cookies or tracking
- ✅ Self-hosted fonts (no Google Fonts)
- ✅ Complete Impressum & Datenschutz pages
- ✅ All resources served locally

## 📅 Dynamic Content

Meetings managed via `website/data/dates.csv`:

```csv
date,time,description
30.10.2025,19:00,Hackspace Treffen Oktober
```

## 🚀 Deployment

Auto-deploys on push to `main` branch via GitHub Actions.
Setup: Add FTP credentials to repository secrets.
