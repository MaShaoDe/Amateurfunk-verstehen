# HB9 Mathematik-Vorkurs

Wer auf die HB3-NOVICE-Prüfung vorbereitet, findet in der [HB3-Fassung dieses Vorkurses](../hb3/vk-mathematik-vorkurs-hb3.md) die kürzere, auf den HB3-Umfang zugeschnittene Version.

## Ziel

Diese Checkliste umfasst die mathematischen Grundlagen, die für die Vorbereitung auf die Schweizer HB9-Amateurfunkprüfung benötigt werden.

Ziel ist **nicht**, die gesamte Schulmathematik nachzuholen.

Am Ende sollte eine technische Aufgabe gelesen und verstanden werden können. Gegebene Werte müssen erkannt, Einheiten korrekt umgerechnet, die passende Formel ausgewählt und bei Bedarf einfach umgestellt werden können.

Die eigentliche Mathematik wird danach innerhalb der Elektronik und Funktechnik weiter geübt.

**Bemerkung zu HB3**

Die mathematischen Grundfertigkeiten gelten grundsätzlich auch für die HB3-NOVICE-Prüfung.

Bei HB3 liegt die technische und rechnerische Anwendung jedoch auf einem tieferen Niveau. Viele Prüfungsfragen sind im offiziellen Fragenmaterial mit **HB3/HB9** gekennzeichnet, während anspruchsvollere technische Aufgaben ausschliesslich für **HB9** vorgesehen sind.

Für eine HB3-Vorbereitung sollten deshalb insbesondere sicher sitzen:

- Grundrechenarten
- Brüche und Verhältnisse
- Prozentrechnung
- Einheiten und SI-Vorsätze
- Zehnerpotenzen
- Ohmsches Gesetz
- elektrische Leistung
- einfache Formeln
- grundlegende dB-Verhältnisse

Diese reduzierte Fassung steht eigenständig als [HB3 Mathematik-Vorkurs](../hb3/vk-mathematik-vorkurs-hb3.md) zur Verfügung.

Wer direkt HB9 anstrebt, sollte die vollständige folgende Liste beherrschen.

# Hilfsmittel an der Prüfung

Für die Vorbereitung sollte von Anfang an möglichst mit den gleichen Hilfsmitteln gearbeitet werden wie später an der Prüfung:

- nicht programmierbarer wissenschaftlicher Taschenrechner
- offizielle BAKOM-Formelsammlung
- offizielle BAKOM-Hilfstabellen
- Notizpapier

Die Formelsammlung und die Hilfstabellen werden an der Prüfung zur Verfügung gestellt.

Wichtig ist deshalb nicht, Formeln auswendig zu lernen, sondern:

> **Eine Formel finden, verstehen und richtig anwenden können.**

# Lerncheckliste

## A. Mathematische Grundfertigkeiten

### 1. Grundrechenarten

- [ ] Addition
- [ ] Subtraktion
- [ ] Multiplikation
- [ ] Division
- [ ] ganze Zahlen
- [ ] Dezimalzahlen

**Funkbeispiel:**

Ein Funkgerät benötigt bei 13,8 V einen Strom von 4 A.

`P = U × I`

`P = 13,8 × 4 = 55,2 W`

---

### 2. Klammern und Rechenreihenfolge

- [ ] Klammern richtig behandeln
- [ ] Multiplikation und Division vor Addition und Subtraktion

Beispiel:

`2 × (5 + 3) = 16`

Technisches Beispiel:

`R = 1 / (1/R1 + 1/R2)`

---

### 3. Positive und negative Zahlen

- [ ] Vorzeichen verstehen
- [ ] Differenzen berechnen
- [ ] negative Werte korrekt in den Taschenrechner eingeben
- [ ] negative dB-Werte verstehen

Beispiel:

Eine Kabeldämpfung von `-3 dB` bedeutet eine Verringerung des Pegels.

---

### 4. Brüche

- [ ] Bruch als Division verstehen
- [ ] Brüche lesen
- [ ] einfache Brüche berechnen
- [ ] Brüche in Formeln erkennen

Beispiele:

`1/2`

`3/4`

`1 / (2 × π × f × C)`

---

### 5. Verhältnisrechnung

- [ ] Verhältnisse wie `2:1`, `1:4` oder `10:1` verstehen
- [ ] erkennen, wie vielmal grösser oder kleiner eine Grösse ist

**Funkbeispiel:**

Ein Transformator besitzt 20 Windungen primär und 10 Windungen sekundär.

Windungsverhältnis:

`20:10 = 2:1`

---

### 6. Prozentrechnung

- [ ] Prozentwerte verstehen
- [ ] Prozentanteile berechnen
- [ ] Zu- und Abnahmen berechnen
- [ ] Wirkungsgrad verstehen

**Beispiel:**

Ein Sender nimmt 100 W auf und gibt 70 W HF-Leistung ab.

Wirkungsgrad:

`70 / 100 × 100 % = 70 %`

---

## B. Einheiten und Grössenordnungen

### 7. Elektrische Einheiten sicher erkennen

- [ ] Volt `V`
- [ ] Ampere `A`
- [ ] Watt `W`
- [ ] Ohm `Ω`
- [ ] Hertz `Hz`
- [ ] Farad `F`
- [ ] Henry `H`
- [ ] Sekunde `s`

---

### 8. Einheiten umrechnen

Besonders wichtig:

- [ ] A und mA
- [ ] V und mV
- [ ] W und mW
- [ ] Hz, kHz und MHz
- [ ] Ω, kΩ und MΩ
- [ ] F, µF, nF und pF
- [ ] H, mH und µH

**Beispiele:**

`2,5 A = 2500 mA`

`7,1 MHz = 7 100 000 Hz`

`100 nF = 0,1 µF`

`4700 Ω = 4,7 kΩ`

`22 µH = 0,000022 H`

---

### 9. SI-Vorsätze

Diese sollten sicher erkannt werden:

| Vorsatz | Zeichen | Faktor |
| --- | ---: | ---: |
| pico | p | `10⁻¹²` |
| nano | n | `10⁻⁹` |
| mikro | µ | `10⁻⁶` |
| milli | m | `10⁻³` |
| kilo | k | `10³` |
| Mega | M | `10⁶` |
| Giga | G | `10⁹` |

Die Grössenordnung sollte verstanden werden. Die Tabelle muss nicht mechanisch auswendig gelernt werden.

---

### 10. Zehnerpotenzen

- [ ] `10³`
- [ ] `10⁶`
- [ ] `10⁹`
- [ ] `10⁻³`
- [ ] `10⁻⁶`
- [ ] `10⁻⁹`
- [ ] `10⁻¹²`

**Beispiel:**

`3 × 10⁸ m/s`

ist die ungefähre Lichtgeschwindigkeit.

---

### 11. Wissenschaftliche Schreibweise

- [ ] Zahlen wie `3 × 10⁸` lesen
- [ ] Zahlen wie `4,7 × 10⁻⁶` verstehen
- [ ] EXP- oder EE-Taste des Taschenrechners verwenden

Beispiel:

`4,7 µF = 4,7 × 10⁻⁶ F`

---

## C. Arbeiten mit Formeln

### 12. Formeln lesen

- [ ] Variablen erkennen
- [ ] Gleichheitszeichen verstehen
- [ ] Bruchstriche richtig lesen
- [ ] Klammern erkennen
- [ ] Hochzahlen erkennen
- [ ] Wurzeln erkennen

**Beispiel:**

`P = U² / R`

muss als

> Spannung zum Quadrat, geteilt durch Widerstand

gelesen werden können.

---

### 13. Einfache Formeln umstellen

Grundbeispiel:

`U = R × I`

daraus:

`I = U / R`

und:

`R = U / I`

**Funkbeispiel:**

Ein Funkgerät nimmt bei 13,8 V einen Strom von 5 A auf.

`P = U × I`

`P = 13,8 × 5 = 69 W`

---

### 14. Formeln mit Quadrat

- [ ] Bedeutung von `x²` verstehen
- [ ] Quadrat mit dem Taschenrechner berechnen

**Beispiel:**

`P = I² × R`

Bei:

`I = 2 A`

`R = 50 Ω`

ergibt sich:

`P = 2² × 50 = 200 W`

---

### 15. Quadratwurzel

- [ ] Bedeutung von `√x` verstehen
- [ ] Quadratwurzel berechnen
- [ ] Wurzeln innerhalb einer Formel erkennen

Beispiel aus der Funktechnik:

`U = √(P × R)`

Bei:

`P = 100 W`

`R = 50 Ω`

ergibt sich:

`U = √5000 ≈ 70,7 V`

---

### 16. Pi

- [ ] wissen, was `π` bedeutet
- [ ] π-Taste des Taschenrechners verwenden
- [ ] π innerhalb einer Formel erkennen

Der Zahlenwert muss nicht auswendig gelernt werden.

Beispiel:

`XC = 1 / (2 × π × f × C)`

---

### 17. Kreisfläche, Radius und Durchmesser

- [ ] Radius und Durchmesser unterscheiden
- [ ] `d = 2r` verstehen
- [ ] Kreisfläche erkennen

Formel:

`A = π × r²`

Dies kommt beispielsweise bei der Berechnung des Querschnitts eines runden Leiters vor.

---

## D. Kehrwerte und zusammengesetzte Formeln

### 18. Kehrwert

- [ ] Bedeutung von `1/x` verstehen
- [ ] Kehrwerttaste des Taschenrechners bedienen

Beispiel:

`T = 1/f`

Bei:

`f = 1000 Hz`

ergibt sich:

`T = 0,001 s`

---

### 19. Verschachtelte Brüche

Formeln wie diese müssen gelesen und korrekt eingegeben werden können:

`R = 1 / (1/R1 + 1/R2)`

**Beispiel:**

`R1 = 100 Ω`

`R2 = 100 Ω`

ergibt:

`R = 50 Ω`

---

## E. Logarithmen und dB

### 20. Zehnerlogarithmus `lg`

- [ ] wissen, dass `lg` bei dB-Berechnungen verwendet wird
- [ ] LOG-Taste des Taschenrechners verwenden
- [ ] Logarithmen nicht von Hand berechnen

Beispiel:

`g = 10 × lg(P2/P1)`

Eine Verzehnfachung der Leistung entspricht:

`10 dB`

---

### 21. Natürlicher Logarithmus `ln`

- [ ] Symbol `ln` erkennen
- [ ] LN-Taste des Taschenrechners bedienen
- [ ] Formel korrekt eingeben

Keine Logarithmentheorie notwendig.

`ln` kommt beispielsweise in Formeln zum Wellenwiderstand von HF-Leitungen vor.

---

### 22. Zehn hoch x

- [ ] `10²`
- [ ] `10⁻³`
- [ ] `10^0,3`
- [ ] entsprechende Taschenrechnerfunktion bedienen

Dies wird unter anderem benötigt, um dB-Werte wieder in Leistungsverhältnisse umzurechnen.

---

## F. Einfache Trigonometrie

### 23. Sinus

- [ ] wissen, was `sin(α)` bedeutet
- [ ] Winkel in Grad erkennen
- [ ] Taschenrechner auf Gradmodus `DEG` einstellen
- [ ] Sinuswert berechnen

Beispiel:

`sin(30°) = 0,5`

Der Sinus kommt unter anderem in der BAKOM-Formelsammlung bei Berechnungen zur höchsten brauchbaren Frequenz vor.

Eine allgemeine Trigonometrieausbildung ist nicht erforderlich.

---

## G. Weitere mathematische Grundlagen

### 24. Betrag

- [ ] Bedeutung von `|x|` verstehen
- [ ] wissen, dass das Resultat als positive Grösse betrachtet wird

Beispiel:

`|-5| = 5`

Betragszeichen kommen beispielsweise bei Zwischenfrequenz- und HF-Leitungsberechnungen vor.

---

### 25. Direkte und umgekehrte Proportionalität

**Direkt proportional:**

Wird A doppelt so gross, wird B ebenfalls doppelt so gross.

Beispiel:

`P = U × I`

Bei gleicher Spannung führt doppelter Strom zu doppelter Leistung.

**Umgekehrt proportional:**

Wird A doppelt so gross, wird B halb so gross.

Beispiel:

`T = 1/f`

Je höher die Frequenz, desto kürzer die Periodendauer.

---

### 26. Genauigkeit, Toleranz und Runden

- [ ] Angaben wie `±5 %` verstehen
- [ ] Messwerte sinnvoll runden
- [ ] unnötige Nachkommastellen vermeiden

Beispiel:

Ein Widerstand von

`100 Ω ±5 %`

kann ungefähr zwischen

`95 Ω` und `105 Ω`

liegen.

---

# Was wirklich sitzen sollte

Diese Punkte sollten ohne langes Überlegen verstanden werden:

- [ ] Grundrechenarten
- [ ] Klammern
- [ ] positive und negative Zahlen
- [ ] einfache Brüche
- [ ] Verhältnisrechnung
- [ ] Prozentrechnung
- [ ] Einheiten umrechnen
- [ ] SI-Vorsätze
- [ ] Zehnerpotenzen
- [ ] wissenschaftliche Schreibweise
- [ ] Formeln lesen
- [ ] einfache Formeln umstellen
- [ ] Quadrat und Quadratwurzel erkennen
- [ ] Kehrwerte verstehen
- [ ] direkte und umgekehrte Proportionalität

# Was mit dem Taschenrechner erledigt werden darf

Hier ist Verständnis wichtiger als Kopfrechnen:

- [ ] Quadrat
- [ ] Quadratwurzel
- [ ] π
- [ ] `lg`
- [ ] `ln`
- [ ] `10^x`
- [ ] `sin`

Entscheidend ist, die entsprechende Taste auf dem eigenen Taschenrechner sicher bedienen zu können.

# Was nicht als eigenes Mathematikthema gelernt werden muss

Für diesen HB9-Vorkurs kann weggelassen werden:

- [ ] höhere Algebra
- [ ] Gleichungssysteme
- [ ] quadratische Gleichungen
- [ ] Funktionenlehre
- [ ] Kurvendiskussion
- [ ] Differentialrechnung
- [ ] Integralrechnung
- [ ] Matrizen
- [ ] Vektorrechnung
- [ ] Statistik
- [ ] Wahrscheinlichkeitsrechnung
- [ ] Kombinatorik
- [ ] allgemeine Trigonometrie
- [ ] mathematische Beweise
- [ ] Logarithmentheorie
- [ ] komplexe Zahlen als eigenständiges Mathematikthema

# Abschlusskontrolle

Der Mathematik-Vorkurs ist abgeschlossen, wenn beispielsweise folgende Aufgaben ohne grundsätzliche Schwierigkeiten gelöst werden können:

### Aufgabe 1: Ohmsches Gesetz

Gegeben:

`U = 12 V`

`R = 6 Ω`

Gesucht:

`I`

Lösung:

`I = U/R = 12/6 = 2 A`

### Aufgabe 2: Leistung

Gegeben:

`U = 13,8 V`

`I = 5 A`

Gesucht:

`P`

Lösung:

`P = U × I = 69 W`

### Aufgabe 3: Frequenz umrechnen

`14,2 MHz`

muss als

`14 200 000 Hz`

erkannt werden können.

### Aufgabe 4: Kondensator

`100 nF`

muss als

`100 × 10⁻⁹ F`

oder

`0,1 µF`

erkannt werden können.

### Aufgabe 5: Formel anwenden

Eine technische Aufgabe lesen, die gegebenen Werte erkennen, die Einheiten kontrollieren und gegebenenfalls umrechnen, die passende Formel aus der BAKOM-Formelsammlung auswählen, die Formel bei Bedarf einfach umstellen und das Resultat korrekt mit dem Taschenrechner berechnen.

## Ziel erreicht

Wenn dies zuverlässig funktioniert, sollte **keine weitere allgemeine Mathematik mehr gelernt werden**.

Danach wird gerechnet, wo es tatsächlich gebraucht wird:

- Gleichstromtechnik
- Wechselstromtechnik
- Widerstände
- Kondensatoren
- Spulen
- Schwingkreise
- Transformatoren
- dB
- Sender und Empfänger
- Antennen
- HF-Leitungen

So wird die Mathematik nicht abstrakt gelernt, sondern unmittelbar mit Amateurfunktechnik verknüpft.

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
