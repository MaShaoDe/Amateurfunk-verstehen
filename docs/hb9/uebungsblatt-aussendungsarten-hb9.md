# Übungsblatt: Aussendungsarten und Kürzel (HB9)

Die dreistellige Bezeichnung einer Aussendungsart setzt sich aus Modulationsart, Signalart und Informationsart zusammen. HB9 verlangt gegenüber HB3 einen deutlich grösseren Umfang an Zeichen und Kombinationen. Dieses Merkblatt ordnet den Stoff nach Prüfungspriorität. Die HB3-Version steht separat unter [Übungsblatt: Aussendungsarten und Kürzel (HB3)](../hb3/uebungsblatt-aussendungsarten-hb3.md).

## 1. Erstes Zeichen: Modulationsart des Hauptträgers

<table class="uebungsblatt-table">
<thead><tr><th>Zeichen</th><th>Bedeutung</th><th>Merkhilfe</th></tr></thead>
<tbody>
<tr><td><code>N</code></td><td>unmodulierter Träger</td><td>keine Modulation</td></tr>
<tr><td><code>A</code></td><td>Amplitudenmodulation, Zweiseitenband</td><td>AM</td></tr>
<tr><td><code>B</code></td><td>Amplitudenmodulation mit unabhängigen Seitenbändern</td><td>Independent Sidebands</td></tr>
<tr><td><code>C</code></td><td>Restseitenband</td><td>Vestigial Sideband</td></tr>
<tr><td><code>H</code></td><td>Einseitenband mit vollem Träger</td><td>SSB + voller Träger</td></tr>
<tr><td><code>R</code></td><td>Einseitenband mit reduziertem Träger</td><td>Reduced Carrier</td></tr>
<tr><td><code>J</code></td><td>Einseitenband mit unterdrücktem Träger</td><td>normales SSB</td></tr>
<tr><td><code>F</code></td><td>Frequenzmodulation</td><td>FM</td></tr>
<tr><td><code>G</code></td><td>Phasenmodulation</td><td>PM</td></tr>
</tbody>
</table>

## 2. Zweites Zeichen: Art des Informationssignals

<table class="uebungsblatt-table">
<thead><tr><th>Zeichen</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td><code>0</code></td><td>kein modulierendes Signal</td></tr>
<tr><td><code>1</code></td><td>ein digitaler Kanal ohne modulierenden Hilfsträger</td></tr>
<tr><td><code>2</code></td><td>ein digitaler Kanal mit modulierendem Hilfsträger</td></tr>
<tr><td><code>3</code></td><td>ein Kanal mit analogen Informationen</td></tr>
<tr><td><code>7</code></td><td>zwei oder mehr digitale Kanäle</td></tr>
<tr><td><code>8</code></td><td>zwei oder mehr analoge Kanäle</td></tr>
<tr><td><code>9</code></td><td>Kombination aus digitalen und analogen Kanälen</td></tr>
</tbody>
</table>

Für die HB9-Prüfung besonders wichtig: `1` = digital ohne Hilfsträger, `2` = digital mit Hilfsträger, `3` = analog.

## 3. Drittes Zeichen: Art der übertragenen Information

<table class="uebungsblatt-table">
<thead><tr><th>Zeichen</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td><code>N</code></td><td>keine Information</td></tr>
<tr><td><code>A</code></td><td>Morsetelegrafie für Hörempfang</td></tr>
<tr><td><code>B</code></td><td>Fernschreibtelegrafie für automatische Aufnahme</td></tr>
<tr><td><code>C</code></td><td>Faksimile</td></tr>
<tr><td><code>D</code></td><td>Datenübertragung, Fernmessen oder Fernsteuern</td></tr>
<tr><td><code>E</code></td><td>Telefonie, Sprache</td></tr>
<tr><td><code>F</code></td><td>Fernsehen, Video</td></tr>
<tr><td><code>W</code></td><td>Kombination verschiedener Informationsarten</td></tr>
<tr><td><code>X</code></td><td>andere Informationsart</td></tr>
</tbody>
</table>

---

## Besonders wichtige Aussendungsarten für HB9

<table class="uebungsblatt-table">
<thead><tr><th>Kürzel</th><th>Bedeutung</th><th>Typische Anwendung</th></tr></thead>
<tbody>
<tr><td>N0N</td><td>unmodulierter Träger</td><td>Prüfsignal</td></tr>
<tr><td><strong>A1A</strong></td><td>AM, digital ohne Hilfsträger, Hörempfang</td><td><strong>CW, Morse</strong></td></tr>
<tr><td>A1B</td><td>AM, digital ohne Hilfsträger, automatische Aufnahme</td><td>Fernschreiben</td></tr>
<tr><td>A1C</td><td>AM, digital ohne Hilfsträger</td><td>Faksimile</td></tr>
<tr><td>A1D</td><td>AM, digital ohne Hilfsträger</td><td>Daten</td></tr>
<tr><td>A2A</td><td>AM, digital mit Hilfsträger</td><td>Morse</td></tr>
<tr><td>A2B</td><td>AM, digital mit Hilfsträger</td><td>Fernschreiben</td></tr>
<tr><td>A2C</td><td>AM, digital mit Hilfsträger</td><td>Faksimile</td></tr>
<tr><td>A2D</td><td>AM, digital mit Hilfsträger</td><td>Daten</td></tr>
<tr><td><strong>A3E</strong></td><td>AM, analog, Sprache</td><td><strong>AM-Sprechfunk</strong></td></tr>
<tr><td>J2A</td><td>SSB, Träger unterdrückt, digital mit Hilfsträger</td><td>Morse</td></tr>
<tr><td>J2B</td><td>SSB, Träger unterdrückt, digital mit Hilfsträger</td><td>Fernschreiben</td></tr>
<tr><td>J2C</td><td>SSB, Träger unterdrückt, digital mit Hilfsträger</td><td>Faksimile</td></tr>
<tr><td>J2D</td><td>SSB, Träger unterdrückt, digital mit Hilfsträger</td><td>Daten</td></tr>
<tr><td><strong>J3E</strong></td><td>SSB, Träger unterdrückt, analog, Sprache</td><td><strong>SSB-Sprechfunk</strong></td></tr>
<tr><td>R3E</td><td>SSB, reduzierter Träger, analog, Sprache</td><td>SSB mit reduziertem Träger</td></tr>
<tr><td>F1A</td><td>FM, digital ohne Hilfsträger</td><td>Morse</td></tr>
<tr><td><strong>F1B</strong></td><td>FM, digital ohne Hilfsträger</td><td><strong>RTTY / FSK</strong></td></tr>
<tr><td>F1C</td><td>FM, digital ohne Hilfsträger</td><td>Faksimile</td></tr>
<tr><td>F1D</td><td>FM, digital ohne Hilfsträger</td><td>Daten</td></tr>
<tr><td>F2A</td><td>FM, digital mit Hilfsträger</td><td>Morse</td></tr>
<tr><td>F2B</td><td>FM, digital mit Hilfsträger</td><td>Fernschreiben / AFSK</td></tr>
<tr><td>F2C</td><td>FM, digital mit Hilfsträger</td><td>Faksimile</td></tr>
<tr><td>F2D</td><td>FM, digital mit Hilfsträger</td><td>Daten</td></tr>
<tr><td>F3C</td><td>FM, analog</td><td>Faksimile</td></tr>
<tr><td><strong>F3E</strong></td><td>FM, analog, Sprache</td><td><strong>FM-Sprechfunk</strong></td></tr>
<tr><td>F3F</td><td>FM, analog, Video</td><td>Fernsehen / ATV</td></tr>
<tr><td>C3F</td><td>Restseitenband, analog, Video</td><td>Fernsehen</td></tr>
</tbody>
</table>

## Die wichtigsten Kürzel zum Auswendiglernen

<table class="uebungsblatt-table">
<thead><tr><th>Kürzel</th><th>Sofort wissen</th></tr></thead>
<tbody>
<tr><td><code>A1A</code></td><td>CW / Morse</td></tr>
<tr><td><code>A1B</code></td><td>Fernschreiben ohne Hilfsträger</td></tr>
<tr><td><code>A3E</code></td><td>AM-Sprechfunk</td></tr>
<tr><td><code>J3E</code></td><td>SSB-Sprechfunk, Träger unterdrückt</td></tr>
<tr><td><code>R3E</code></td><td>SSB-Sprechfunk, Träger reduziert</td></tr>
<tr><td><code>F1B</code></td><td>RTTY / FSK</td></tr>
<tr><td><code>F2B</code></td><td>Fernschreiben mit Hilfsträger</td></tr>
<tr><td><code>F3E</code></td><td>FM-Sprechfunk</td></tr>
<tr><td><code>F3F</code></td><td>FM-Fernsehen / ATV</td></tr>
<tr><td><code>C3F</code></td><td>Restseitenband-Fernsehen</td></tr>
</tbody>
</table>

## Merksystem

### Erstes Zeichen

- `A` = AM, Zweiseitenband
- `B` = unabhängige Seitenbänder
- `C` = Restseitenband
- `H` = SSB mit vollem Träger
- `R` = SSB, Träger reduziert
- `J` = SSB, Träger unterdrückt
- `F` = FM
- `G` = Phasenmodulation

### Zweites Zeichen

- `1` = digital ohne Hilfsträger
- `2` = digital mit Hilfsträger
- `3` = analog

### Drittes Zeichen

- `A` = Morse
- `B` = Fernschreiben
- `C` = Faksimile
- `D` = Daten / Fernmessen / Fernsteuern
- `E` = Sprache
- `F` = Video

## Typische HB9-Prüfungsbeispiele

### F1B

- `F` = Frequenzmodulation
- `1` = digital ohne Hilfsträger
- `B` = Fernschreibtelegrafie

**F1B = RTTY mit direkter Frequenzumtastung, FSK**

### F2B

- `F` = Frequenzmodulation
- `2` = digital mit Hilfsträger
- `B` = Fernschreibtelegrafie

**F2B = Fernschreiben mit modulierendem Hilfsträger**

### J3E

- `J` = Einseitenband mit unterdrücktem Träger
- `3` = analog
- `E` = Sprache

**J3E = normaler SSB-Sprechfunk**

### A1A

- `A` = Amplitudenmodulation
- `1` = digital ohne Hilfsträger
- `A` = Telegrafie für Hörempfang

**A1A = CW / Morse**

## HB9-Prüfungspriorität

### Priorität 1: unbedingt auswendig

`A1A, A1B, A3E, J3E, R3E, F1B, F2B, F3E`

### Priorität 2: erkennen können

`A1C, A1D, A2A, A2B, A2C, A2D, F1A, F1C, F1D, F2A, F2C, F2D, F3C, F3F, C3F`

### Priorität 3: Systematik verstehen

`B, C, H, G sowie 7, 8, 9, W, X`
