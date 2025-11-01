# 📅 Termine verwalten

## Einfache Terminverwaltung

Die Termine werden jetzt aus der Datei `dates.csv` gelesen. Du kannst die Termine einfach bearbeiten, ohne den HTML- oder JavaScript-Code zu ändern.

## 📝 Datei bearbeiten: `website/dates.csv`

### Format:
```csv
date,time,description
30.10.2024,19:00,Monatliches Treffen
27.11.2024,19:00,Monatliches Treffen
18.12.2024,19:00,Jahresabschluss-Treffen
```

### Regeln:
- **Datum:** Format `DD.MM.YYYY` (z.B. `30.10.2024`)
- **Zeit:** Format `HH:MM` (z.B. `19:00`)
- **Beschreibung:** Beliebiger Text (z.B. `Monatliches Treffen`)
- **Reihenfolge:** Älteste Termine zuerst
- **Kommas:** Keine Kommas in den Feldern verwenden

## 🔄 Was passiert automatisch:

- ✅ **Vergangene Termine** werden automatisch ausgeblendet
- ✅ **Nächste 3 Termine** werden angezeigt
- ✅ **Deutsche Formatierung** (z.B. "30. Oktober 2024")

## 📋 Beispiel für neue Termine:

```csv
date,time,description
15.01.2025,19:00,Neujahrs-Treffen
19.02.2025,19:00,Monatliches Treffen
19.03.2025,19:00,Frühlings-Treffen
23.04.2025,19:00,Monatliches Treffen
21.05.2025,19:00,Monatliches Treffen
25.06.2025,19:00,Sommer-Treffen
```

## 🚀 Änderungen veröffentlichen:

1. Bearbeite `website/dates.csv`
2. Commit und push zu GitHub
3. Automatisches Deployment startet
4. Neue Termine sind live! ✨