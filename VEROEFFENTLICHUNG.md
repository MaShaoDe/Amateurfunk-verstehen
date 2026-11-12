# Checkliste vor der Veröffentlichung

Diese Datei gehört nicht zur Webseite. Sie ist die interne Liste, was vor dem Start erledigt sein muss.

## Rechtliches und Angaben
- [x] Impressum: Anschrift, E-Mail, Hoster eingetragen (`docs/allgemein/impressum.md`)
- [x] Impressum nennt das Open-Source-Projekt mit Link zu GitHub und zur Ticketliste. Die Links laufen ins Leere, solange das Repository privat ist
- [ ] Hinweis "Entwurf" im Impressum entfernen
- [ ] Prüfen, ob die Abbildungen selbst erstellt sind (Lizenz CC BY 4.0 nur dann möglich)
- [ ] Fremdtexte nur paraphrasiert, BAKOM-Material nur verlinkt
- [ ] Keine persönlichen Daten in Dateien (Zugangsdaten nur als GitHub-Secrets)

## Datenschutz und Technik
- [x] Schriften lokal eingebunden (Inter, Lizenz in `LICENSES/Inter-OFL-1.1.txt`)
- [x] MathJax lokal (wird beim Aufbau auf GitHub geholt, `deploy-v2.yml`). Beim Umzug auf `main` denselben Schritt in `deploy.yml` übernehmen
- [ ] Meta-Tag "noindex" entfernen (`overrides/main.html`), sobald die Seite gefunden werden soll
- [ ] `robots.txt` anpassen

## Inhalt
- [ ] Alle Prüfungsangaben gegen BAKOM-Seiten prüfen (Stand und Datum nennen)
- [ ] Alle Resultate und Formeln im Browser kontrollieren (MathJax)
- [ ] Links prüfen, `mkdocs build --strict` ohne Warnungen
- [ ] Alte Kurs-Seiten unter `lizkurs/` durch v2 ersetzen

## GitHub
- [ ] Ticketliste (Issues) im Repository aktivieren, damit der Link im Impressum funktioniert
- [ ] Repository auf öffentlich stellen (nur Marcel Sauder)
- [ ] Branch-Schutz für `main` prüfen (Löschen und Force-Push sperren)
- [ ] README, Mitmachen-Anleitung (CONTRIBUTING) und Lizenzdatei prüfen
- [ ] Tag und Release setzt Marcel Sauder selbst

## Bildrechte der Entstehungsseite (`docs/allgemein/entstehung.md`)
- [x] 4 Bilder stammen aus dem Internet (CP/M-Bildschirm, CP/M-Plus-Handbuch, WordStar-Werbung, WordStar-Prospekt). Bewusst behalten, mit Vermerk "Quelle: Internet, Urheber unbekannt" und Löschhinweis im Impressum. Wird auf Hinweis eines Rechteinhabers sofort entfernt
- [ ] Foto des CP/M-Handbuchs bei Gelegenheit durch ein eigenes ersetzen
- [x] 3 Bilder (ELZET-K, CPU-Karte, ELZET-P) hat Marcel Sauder oder sein Vater fotografiert, Vermerk "Foto: Familie Sauder"
