# Hackspace Bützow Website

Eine moderne, responsive One-Page-Website für den Hackspace Bützow - ein Ort für technikbegeisterte Menschen zum Austausch über Programmierung, Technologie und gesellschaftliche Phänomene.

## 🎯 Über das Projekt

Diese Website dient als zentrale Anlaufstelle für alle Informationen rund um den Hackspace Bützow. Sie bietet:

- **Informationen** über den Hackspace und seine Ziele
- **Terminübersicht** mit automatisch berechneten Terminen
- **Kontaktmöglichkeiten** für Interessierte
- **Responsive Design** für alle Geräte

## 🚀 Features

### Design & Benutzerfreundlichkeit

- ✅ Modernes, sauberes Design mit professioneller Farbpalette
- ✅ Vollständig responsive (Desktop, Tablet, Mobile)
- ✅ Smooth Scrolling Navigation
- ✅ Animationen beim Scrollen
- ✅ Interaktive Hover-Effekte

### Technische Features

- ✅ Automatische Berechnung der nächsten Termine (letzter Mittwoch im Monat)
- ✅ Vanilla JavaScript (keine externen Frameworks)
- ✅ Semantic HTML5
- ✅ Modern CSS mit CSS Grid und Flexbox
- ✅ Optimiert für Performance und Accessibility

### Inhalte

- ✅ Über uns - Was ist der Hackspace?
- ✅ Aktivitäten - Wissensaustausch, Diskussionen, geplante Workshops
- ✅ Termine - Regelmäßige Treffen jeden letzten Mittwoch im Monat
- ✅ Kontakt - Standort und Kontaktmöglichkeiten

## 📁 Projektstruktur

```text
hackspace-bützow/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Stylesheet mit allen Styles
├── script.js           # JavaScript für Interaktivität
└── README.md           # Diese Dokumentation
```

## 🛠 Installation & Verwendung

### Lokale Entwicklung

1. Repository klonen oder Dateien herunterladen
2. `index.html` in einem modernen Webbrowser öffnen
3. Fertig! Die Website läuft lokal.

### Deployment

Die Website kann auf jeder beliebigen Hosting-Plattform deployed werden:

#### GitHub Pages

1. Repository auf GitHub hochladen
2. In den Repository-Einstellungen GitHub Pages aktivieren
3. `main` Branch als Quelle wählen

#### Netlify

1. Projektordner auf [Netlify](https://netlify.com) ziehen
2. Automatisches Deployment startet

#### Andere Hosting-Anbieter

- Alle Dateien in das Root-Verzeichnis des Webservers hochladen
- Keine serverseitige Konfiguration erforderlich

## 🎨 Anpassungen

### Farben ändern

Die Farbpalette ist in CSS-Variablen definiert (`styles.css`, Zeilen 20-30):

```css
:root {
    --primary-color: #2563eb;        /* Blau */
    --secondary-color: #10b981;      /* Grün */
    --accent-color: #f59e0b;         /* Orange */
    /* ... weitere Farben */
}
```

### Inhalte aktualisieren

- **Termine**: Werden automatisch berechnet, können aber in `script.js` angepasst werden
- **Kontaktdaten**: In `index.html` im Contact-Bereich
- **Aktivitäten**: Im Activities-Bereich der `index.html`

### Bilder hinzufügen

Placeholder-Bereiche in der Hero-Section können durch echte Bilder ersetzt werden:

```html
<div class="hero-image">
    <img src="path/to/your/image.jpg" alt="Hackspace Bützow">
</div>
```

## 📱 Browser-Unterstützung

- ✅ Chrome (letzten 2 Versionen)
- ✅ Firefox (letzten 2 Versionen)
- ✅ Safari (letzten 2 Versionen)
- ✅ Edge (letzten 2 Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 🔧 Technologie-Stack

- **HTML5** - Semantic Markup
- **CSS3** - Modern CSS mit Grid, Flexbox, Custom Properties
- **Vanilla JavaScript** - Für Interaktivität ohne externe Dependencies
- **Google Fonts** - Inter Font Family

## 📅 Termine

Die Website berechnet automatisch die nächsten drei Termine (jeweils letzter Mittwoch im Monat um 19:00 Uhr). Diese Berechnung erfolgt clientseitig in JavaScript.

## 📍 Kontakt & Standort

### Hackspace Bützow

- 📍 Kama Café, Lange Straße, Bützow
- 🕐 Jeden letzten Mittwoch im Monat, 19:00 Uhr
- 💰 Kostenlos und offen für alle Erwachsenen
- 📧 [info@hackspace-buetzow.de](mailto:info@hackspace-buetzow.de) (Platzhalter)

## 🤝 Beitragen

Das Projekt ist offen für Verbesserungen:

1. Fork das Repository
2. Erstelle einen Feature Branch
3. Mache deine Änderungen
4. Teste die Website in verschiedenen Browsern
5. Erstelle einen Pull Request

## 📜 Lizenz

Dieses Projekt steht unter der MIT Lizenz - siehe die [LICENSE](LICENSE) Datei für Details.

## 🎉 Über den Hackspace Bützow

Der Hackspace Bützow ist ein offener Raum für alle technikinteressierten Menschen in und um Bützow. Wir treffen uns regelmäßig zum Austausch über:

- 💻 Programmierung und neue Technologien
- 🤖 Künstliche Intelligenz und ihre gesellschaftlichen Auswirkungen
- 📱 Social Media und digitale Transformation
- 🔧 Technische Projekte und Basteleien
- 🧠 Wissensaustausch und Lernen in der Gemeinschaft

Komm einfach vorbei - wir freuen uns auf dich!