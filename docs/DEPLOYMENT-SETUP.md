# 🚀 GitHub Actions FTP Deployment Setup

## Was wurde erstellt:

✅ **Projektstruktur reorganisiert**
- Alle Website-Dateien sind jetzt in `website/` folder
- GitHub Actions Workflow erstellt: `.github/workflows/deploy.yml`

✅ **Automatisches Deployment konfiguriert**
- Trigger: Push zu `main` branch
- Ziel: `alfa3031.alfahosting-server.de/html/hackspace/`
- Nur Dateien aus `website/` folder werden deployed

## 🔐 Nächster Schritt (WICHTIG)

Du musst die FTP-Credentials als GitHub Secrets hinzufügen:

1. Gehe zu deinem GitHub Repository
2. Klicke auf `Settings` (oben rechts)
3. Gehe zu `Secrets and variables` → `Actions` (links im Menü)
4. Füge diese 3 Secrets hinzu (klicke jeweils auf `New repository secret`):

   **Secret 1:**
   - Name: `FTP_HOST`
   - Value: `alfa3031.alfahosting-server.de`

   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: `web1093`

   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Dein FTP-Passwort für den User

5. Klicke jeweils `Add secret`

## 🎯 So funktioniert es:

1. **Lokale Änderungen** an Dateien in `website/` folder
2. **Commit und Push** zu GitHub
3. **Automatisches Deployment** startet
4. **Website ist live** in ~30 Sekunden

## 🔍 Deployment überwachen:

- Gehe zu `Actions` tab in deinem GitHub Repository
- Sieh dir die Deployment-Logs an
- Bei Problemen: Check die Fehlermeldungen dort

Die Website wird dann unter deiner Domain erreichbar sein: `/hackspace/`