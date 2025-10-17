# Hackspace Bützow Website

Eine moderne One-Page-Website für den Hackspace Bützow mit automatischem Deployment.

## 🚀 Quick Start

### Lokal entwickeln

1. `website/index.html` im Browser öffnen
2. Änderungen machen
3. Zu GitHub pushen → Automatisches Deployment!

### Live Website

Die Website wird automatisch deployed nach: `https://your-domain.com/hackspace/`

## 📁 Projektstruktur

```plain
hackspace-buetzow/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions Deployment
├── website/                # 🌐 Website Dateien
│   ├── index.html          # Haupt-Website
│   ├── styles.css          # Styling (dark theme)
│   ├── script.js           # Interaktivität
│   └── hackspace-1.jpg     # Hero-Bild
└── README.md               # Diese Dokumentation
```

## 🚀 Deployment

### Automatisch

- **Trigger:** Push zu `main` branch
- **Ziel:** `./html/hackspace/`
- **Dauer:** ~30 Sekunden

### Setup (einmalig)

1. GitHub Repository Secrets hinzufügen:
   - Gehe zu: `Settings` → `Secrets and variables` → `Actions`
   - Füge hinzu:
     - `FTP_HOST`
     - `FTP_USERNAME`
     - `FTP_PASSWORD`

## 🎨 CI-Farben

```css
--primary-color: #303235;    /* Dark Grey */
--secondary-color: #023c67;  /* Dark Blue */
--accent-color: #fad91e;     /* Yellow */
```
