# Hackspace Bützow Website

Eine moderne, DSGVO-konforme One-Page-Website für den Hackspace Bützow mit automatischem Deployment und vollständiger Datenschutzkonformität.

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
│   ├── fonts/              # 🔤 Selbst gehostete Schriftarten
│   │   ├── Inter-*.woff2   # Inter Familie (4 Gewichte)
│   │   └── RobotoMono-Regular.woff2  # Monospace für Logo
│   ├── index.html          # Haupt-Website
│   ├── impressum.html      # 📜 Rechtliches Impressum
│   ├── datenschutz.html    # 🛡️ DSGVO Datenschutzerklärung
│   ├── styles.css          # Styling (dark theme + legal pages)
│   ├── script.js           # Interaktivität & CSV-Datenlader
│   ├── dates.csv           # 📅 Dynamische Termindaten
│   └── hackspace-1.jpg     # Hero-Bild (KI generiert)
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

## 🛡️ DSGVO Compliance

### ✅ Vollständig datenschutzkonform

- **🚫 Keine Cookies:** Website funktioniert komplett ohne Cookies
- **🏠 Selbst gehostete Schriftarten:** Keine IP-Übertragung an Google Fonts
- **📜 Impressum:** Vollständiges rechtliches Impressum (TMG konform)
- **🔒 Datenschutzerklärung:** Umfassende DSGVO-konforme Datenschutzerklärung
- **🎯 Keine Tracking-Tools:** Keine Analytics, keine externen Dienste
- **⚡ Lokale Ressourcen:** Alle CSS, JS und Fonts vom eigenen Server

### 📋 Rechtliche Seiten

- **`/impressum.html`** - Gesetzlich vorgeschriebenes Impressum
- **`/datenschutz.html`** - DSGVO-konforme Datenschutzerklärung
- **Footer-Links** - Barrierefreier Zugang zu beiden Seiten
- **E-Mail-Hinweis** - Datenschutznotiz bei Kontaktaufnahme

## ✨ Features

### 🎨 Design
- **Dark Theme:** Modernes dunkles Design mit CI-Farben
- **Responsive:** Optimiert für Desktop, Tablet und Mobile
- **Monospace Logo:** Authentische Hacker-Ästhetik mit Roboto Mono
- **Animationen:** Sanfte Scroll-Effekte und Hover-Animationen

### 📅 Dynamische Inhalte
- **CSV-basierte Termine:** Automatische Aktualisierung aus `dates.csv`
- **Nächster Termin:** Hervorgehobene Anzeige des kommenden Treffens
- **Fehlerbehandlung:** Graceful Fallback bei Datenproblemen

### 🔤 Typografie
- **Inter:** Selbst gehostete Sans-Serif für Fließtext (4 Gewichte)
- **Roboto Mono:** Selbst gehostete Monospace für das Logo
- **GDPR-sicher:** Alle Fonts lokal, keine Google Fonts CDN

### 🖼️ Medien
- **KI-Transparenz:** Gekennzeichnete AI-generierte Bilder
- **Bildattribution:** Sichtbarer "KI generiert" Badge

## 🎨 CI-Farben

```css
--primary-color: #303235;    /* Dark Grey */
--secondary-color: #023c67;  /* Dark Blue */
--accent-color: #fad91e;     /* Yellow */
```

## 📝 Termine verwalten

Termine werden über die `dates.csv` Datei verwaltet:

```csv
date,time,description
30.10.2025,19:00,Hackspace Treffen Oktober
27.11.2025,19:00,Hackspace Treffen November
```

- **Format:** DD.MM.YYYY,HH:MM,Beschreibung
- **Automatisch:** JavaScript lädt und filtert zukünftige Termine
- **Fehlerbehandlung:** Zeigt Fallback-Meldung bei Problemen
