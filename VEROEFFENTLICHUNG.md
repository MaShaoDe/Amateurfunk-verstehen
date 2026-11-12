# Checkliste vor der Veröffentlichung

Diese Datei gehört nicht zur Webseite. Sie ist die interne Liste, was vor dem Start erledigt sein muss.

## Rechtliches und Angaben
- [x] Impressum: Anschrift, E-Mail, Hoster eingetragen (`docs/allgemein/impressum.md`)
- [ ] Impressum: Hinweis auf GitHub-Ticketliste ergänzen, sobald das Projekt öffentlich ist
- [ ] Hinweis "Entwurf" im Impressum entfernen
- [ ] Prüfen, ob die Abbildungen selbst erstellt sind (Lizenz CC BY 4.0 nur dann möglich)
- [ ] Fremdtexte nur paraphrasiert, BAKOM-Material nur verlinkt
- [ ] Keine persönlichen Daten in Dateien (Zugangsdaten nur als GitHub-Secrets)

## Datenschutz und Technik
- [x] Schriften lokal eingebunden (Inter, Lizenz in `LICENSES/Inter-OFL-1.1.txt`)
- [ ] MathJax lokal einbinden statt von cdnjs
- [ ] Meta-Tag "noindex" entfernen (`overrides/main.html`), sobald die Seite gefunden werden soll
- [ ] `robots.txt` anpassen

## Inhalt
- [ ] Alle Prüfungsangaben gegen BAKOM-Seiten prüfen (Stand und Datum nennen)
- [ ] Alle Resultate und Formeln im Browser kontrollieren (MathJax)
- [ ] Links prüfen, `mkdocs build --strict` ohne Warnungen
- [ ] Alte Kurs-Seiten unter `lizkurs/` durch v2 ersetzen

## GitHub
- [ ] Repository auf öffentlich stellen (nur Marcel Sauder)
- [ ] Branch-Schutz für `main` prüfen (Löschen und Force-Push sperren)
- [ ] README, Mitmachen-Anleitung (CONTRIBUTING) und Lizenzdatei prüfen
- [ ] Tag und Release setzt Marcel Sauder selbst
