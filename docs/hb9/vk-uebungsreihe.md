# UE1-Übungsreihe. HB9 Mathematik-Vorkurs

Wer auf die HB3-NOVICE-Prüfung vorbereitet, findet in [UE2](../hb3/vk-uebungsreihe-hb3.md) die kürzere, auf den HB3-Umfang zugeschnittene Übungsreihe.

Ablauf pro Lektion: kurze Erklärung, ein vorgerechnetes Beispiel, ein Achtung-Hinweis zu einem typischen Fehler, dann die eigenen Aufgaben. Am Ende jedes Moduls folgt eine gemischte Übung, die mehrere Lektionen kombiniert, so wie es in echten Prüfungsaufgaben vorkommt. Reihenfolge einhalten, jede Lektion erst abhaken, wenn die Aufgaben ohne Nachdenken gelingen. Am Ende steht ein grosser gemischter Abschlusstest über alle 19 Lektionen. Die Resultate stehen separat in UE1-Resultate, nummeriert nach Lektion und Aufgabe.

## Weiterführende Ressourcen

- BAKOM, offizielle Formelsammlung (gültig ab 01.01.2025): https://www.bakom.admin.ch/dam/de/sd-web/ooOLDCmCmEmX/formelsammlung.pdf
- YouTube-Kanal "Mathe by Daniel Jung", kurze Erklärvideos zu Prozentrechnung, Logarithmen, Potenzen und Bruchrechnen: https://www.youtube.com/@MathebyDanielJung
- Mathebibel.de, Nachschlagewerk mit Schritt-für-Schritt-Erklärungen, unter anderem zu Prozentrechnung und Logarithmus: https://www.mathebibel.de/prozentrechnung und https://www.mathebibel.de/logarithmus
- YouTube-Kanal "Elektrotechnik einfach erklärt", Grundlagen Schritt für Schritt: https://www.youtube.com/@Elektrotechnik-einfach

## Roter Faden: Suchbegriffe für YouTube

Dieselbe Reihenfolge wie die Lektionen unten. Suchbegriff einfach so auf YouTube eingeben, meist liefert "Mathe by Daniel Jung" das passende kurze Video.

| Lektion | Thema | YouTube-Suchbegriff |
| --- | --- | --- |
| 1 | Grundrechenarten mit Dezimalzahlen | Rechnen mit Dezimalzahlen |
| 2 | Klammern und Rechenreihenfolge | Punkt vor Strich Klammerregel |
| 3 | Positive und negative Zahlen | Rechnen mit negativen Zahlen |
| 4 | Brüche | Bruchrechnen Grundlagen |
| 5 | Verhältnisrechnung | Verhältnisrechnung Mathematik |
| 6 | Prozentrechnung | Prozentrechnung Grundlagen |
| 7 | Elektrische Einheiten erkennen | SI-Einheiten Elektrotechnik |
| 8 | Einheiten umrechnen und SI-Vorsätze | SI-Vorsätze umrechnen |
| 9 | Zehnerpotenzen und wissenschaftliche Schreibweise | Zehnerpotenzen wissenschaftliche Schreibweise |
| 10 | Formeln lesen | Formel lesen Variablen |
| 11 | Formeln umstellen | Gleichung nach Variable umstellen |
| 12 | Quadrat und Quadratwurzel | Quadratwurzel berechnen |
| 13 | Pi und Kreisfläche | Kreisfläche berechnen Pi |
| 14 | Kehrwert und verschachtelte Brüche | Kehrwert Bruch |
| 15 | Zehnerlogarithmus lg | Logarithmus Grundlagen |
| 16 | Natürlicher Logarithmus ln | natürlicher Logarithmus ln |
| 17 | Zehn hoch x, Rückrechnung aus dB | Zehnerpotenz berechnen Taschenrechner |
| 18 | Sinus | Sinus Grundlagen Trigonometrie |
| 19 | Betrag, Proportionalität, Runden | proportional umgekehrt proportional |

---

## Modul A: Grundrechenarten und Rechenlogik

Warum das zählt: fast jede Prüfungsaufgabe endet in einer einfachen Rechnung mit Dezimalzahlen. Wer hier sicher ist, verliert an der Prüfung keine Zeit.

### Lektion 1: Grundrechenarten mit Dezimalzahlen

`P = U × I`

**Vorgerechnetes Beispiel**

U = 14,4 V, I = 2 A.

P = 14,4 × 2 = 28,8 W

**Achtung:** Dezimalkomma nicht mit Tausendertrennzeichen verwechseln. 14,4 ist vierzehn Komma vier, nicht vierzehntausendvierhundert.

**Aufgaben**
1.1 U = 12 V, I = 3 A. P?
1.2 U = 13,8 V, I = 2,5 A. P?
1.3 Differenz: 24,5 - 13,8 = ?
1.4 U = 9,6 V, I = 4 A. P?
1.5 U = 27 V, I = 1,5 A. P?
1.6 Summe: 8,9 + 16,4 = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion1"

---

### Lektion 2: Klammern und Rechenreihenfolge

Regel: Punkt vor Strich, Klammern zuerst.

`R = 1 / (1/R1 + 1/R2)`

**Vorgerechnetes Beispiel**

R1 = 20 Ω, R2 = 20 Ω.

1/20 + 1/20 = 0,1

R = 1 / 0,1 = 10 Ω

**Achtung:** zuerst beide Kehrwerte einzeln berechnen und addieren, erst danach den Kehrwert der Summe bilden. Nicht direkt 1/(R1+R2) rechnen, das ist eine andere Formel.

**Aufgaben**
2.1 2 × (5 + 3) = ?
2.2 R1 = 100 Ω, R2 = 100 Ω. R = ?
2.3 R1 = 50 Ω, R2 = 200 Ω. R = ?
2.4 3 × (4 + 2) = ?
2.5 R1 = 60 Ω, R2 = 40 Ω. R = ?
2.6 R1 = 1.000 Ω, R2 = 1.000 Ω. R = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion2"

---

### Lektion 3: Positive und negative Zahlen

Negative dB-Werte bedeuten Verlust (Dämpfung), positive bedeuten Gewinn (Verstärkung).

**Vorgerechnetes Beispiel**

Ein Kabel dämpft mit -2 dB, ein Vorverstärker liefert +15 dB.

-2 + 15 = 13 dB

**Achtung:** Minus mal Minus ergibt Plus, aber Minus plus Minus bleibt Minus. Bei Additionen und Subtraktionen mit negativen Zahlen genau hinschauen, welches Zeichen zwischen den Werten steht.

**Aufgaben**
3.1 Ein Kabel dämpft mit -3 dB, ein Verstärker liefert +10 dB. Gesamtbilanz?
3.2 -7 - (-4) = ?
3.3 Eingabe von -5 dB in den Taschenrechner: welche Taste zuerst?
3.4 Ein Kabel dämpft mit -6 dB, ein Verstärker liefert +20 dB. Gesamtbilanz?
3.5 -12 - (-5) = ?
3.6 -2 + (-3) = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion3"

---

### Gemischte Übung Modul A

GA.1 Berechne (12,5 - 3,2) × (2 + 1) = ?

GA.2 Ein Signal durchläuft nacheinander -4 dB, +9 dB und -3 dB. Gesamtbilanz?

GA.3 Zwei Geräte hängen an derselben Quelle mit 13,8 V. Gerät 1 zieht 4 A, Gerät 2 zieht 1,5 A. Gesamtleistung mit `P = U × (I1 + I2)`?

GA.4 Berechne (20 - 8) × (3 + 2) = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:modula"

---

## Modul B: Brüche, Verhältnisse, Prozente

Warum das zählt: Wirkungsgrad, Windungsverhältnis und Dämpfung werden in Funkaufgaben praktisch immer als Bruch, Verhältnis oder Prozent angegeben.

### Lektion 4: Brüche

Ein Bruch ist eine Division. `1/(2πfC)` bedeutet: 1 geteilt durch (2 × π × f × C).

**Vorgerechnetes Beispiel**

3/4 als Dezimalzahl: 3 : 4 = 0,75

**Achtung:** Bruchstrich ist eine Division, der obere Wert (Zähler) wird durch den unteren (Nenner) geteilt, nicht umgekehrt.

**Aufgaben**
4.1 3/4 als Dezimalzahl?
4.2 1/(2 × π × 1000 × 0,000001) = ? (f in Hz, C in F)
4.3 In welcher Reihenfolge in den Taschenrechner eingeben: erst Nenner berechnen, dann teilen, oder direkt als Bruch?
4.4 5/8 als Dezimalzahl?
4.5 1/(2 × π × 500 × 0,00000002) = ? (f in Hz, C in F)
4.6 7/8 als Dezimalzahl?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion4"

---

### Lektion 5: Verhältnisrechnung

**Vorgerechnetes Beispiel**

Trafo mit 30 Windungen primär, 15 Windungen sekundär.

30:15 = 2:1

**Achtung:** ein Verhältnis wird immer gekürzt, bis die kleinste ganze Zahl auf einer Seite steht. 30:15 stehen lassen ist unvollständig.

**Aufgaben**
5.1 Trafo mit 40 Windungen primär, 10 sekundär. Verhältnis?
5.2 Ein Signal ist 8-mal stärker als ein anderes. Verhältnis als x:1?
5.3 Wie oft grösser ist 1:20 im Vergleich zu 1:5?
5.4 Trafo mit 60 Windungen primär, 20 sekundär. Verhältnis?
5.5 Ein Signal ist 12-mal stärker als ein anderes. Verhältnis als x:1?
5.6 Wie oft grösser ist 1:50 im Vergleich zu 1:10?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion5"

---

### Lektion 6: Prozentrechnung

**Vorgerechnetes Beispiel**

Sender nimmt 200 W auf, gibt 140 W ab.

140 / 200 × 100 % = 70 %

**Achtung:** Wirkungsgrad ist immer abgegebene Leistung geteilt durch aufgenommene Leistung, nicht umgekehrt. Das Ergebnis ist sonst grösser als 100 %, was physikalisch nicht sein kann.

**Aufgaben**
6.1 Sender nimmt 150 W auf, gibt 90 W ab. Wirkungsgrad?
6.2 Ein Widerstand hat 220 Ω, Toleranz 10 %. Bereich?
6.3 Ein Wert steigt von 50 auf 65. Zunahme in %?
6.4 Sender nimmt 100 W auf, gibt 65 W ab. Wirkungsgrad?
6.5 Ein Widerstand hat 470 Ω, Toleranz 5 %. Bereich?
6.6 Ein Wert steigt von 80 auf 100. Zunahme in %?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion6"

---

### Gemischte Übung Modul B

GB.1 Trafo mit 30 Windungen primär, 6 sekundär, Wirkungsgrad 90 %. Bei 60 W Primärleistung: wie viel Leistung kommt sekundär abzüglich Verlust ungefähr an?

GB.2 Ein Wert wird auf 3/4 seines ursprünglichen Werts reduziert. Wie viel Prozent Abnahme entspricht das?

GB.3 Ein Verhältnis von 5:1, als Bruch und als Prozentwert des kleineren zum grösseren Wert ausgedrückt?

GB.4 Trafo mit 50 Windungen primär, 10 sekundär, Wirkungsgrad 85 %. Bei 40 W Primärleistung: wie viel Leistung kommt sekundär abzüglich Verlust ungefähr an?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:modulb"

---

## Modul C: Einheiten und Grössenordnungen

Warum das zählt: falsch umgerechnete Einheiten sind der häufigste Fehler in Prüfungsaufgaben, obwohl die eigentliche Formel richtig angewendet wird.

### Lektion 7: Elektrische Einheiten erkennen

Diese Einheiten müssen sofort erkannt und ihrer Grösse zugeordnet werden: Volt (V), Ampere (A), Watt (W), Ohm (Ω), Hertz (Hz), Farad (F), Henry (H), Sekunde (s).

**Vorgerechnetes Beispiel**

Gegeben: 7,1 MHz.

Die Einheit Hz zeigt: es handelt sich um eine Frequenz, keine Spannung oder Leistung.

**Achtung:** Ω und Hz beginnen im Kopf leicht zu verschwimmen, wenn eine Aufgabe unter Zeitdruck gelesen wird. Immer zuerst die Einheit notieren, bevor gerechnet wird.

**Aufgaben**
7.1 Welche Einheit gehört zu Spannung, welche zu Strom?
7.2 Welche Einheit gehört zu Kapazität, welche zu Induktivität?
7.3 Ordne zu: 14,2 MHz, 4,7 µF, 22 mH, 13,8 V. Welche physikalische Grösse steckt jeweils dahinter?
7.4 Ordne zu: 3,5 GHz, 100 nF, 47 Ω, 5 mH. Welche physikalische Grösse steckt jeweils dahinter?
7.5 Welche Einheit hat die elektrische Leistung?
7.6 Welche Einheit hat die Zeit?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion7"

---

### Lektion 8: Einheiten umrechnen und SI-Vorsätze

*Hinweis: die BAKOM-Formelsammlung (siehe Ressourcen oben) zeigt alle SI-Vorsätze auf einen Blick.*

Merke: nach oben (k, M, G) wird die Zahl kleiner, nach unten (m, µ, n, p) wird die Zahl grösser, wenn man in die Basiseinheit umrechnet.

**Vorgerechnetes Beispiel**

7,1 MHz in Hz: M steht für 10⁶.

7,1 × 1 000 000 = 7 100 000 Hz

**Achtung:** beim Umrechnen wird oft eine Zehnerpotenz vergessen oder eine zu viel eingefügt. Nach der Umrechnung Grössenordnung gegenprüfen: MHz-Werte im Kurzwellenbereich liegen im einstelligen bis niedrigen zweistelligen Bereich, in Hz sind das siebenstellige Zahlen.

**Aufgaben**
8.1 3,3 A = ? mA
8.2 21,3 MHz = ? Hz
8.3 470 pF = ? µF
8.4 2,2 kΩ = ? Ω
8.5 0,5 µF = ? nF
8.6 145 MHz = ? kHz
8.7 68 nF = ? pF

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion8"

---

### Lektion 9: Zehnerpotenzen und wissenschaftliche Schreibweise

**Vorgerechnetes Beispiel**

68 000 als Zehnerpotenz: 6,8 × 10⁴

**Achtung:** die erste Ziffer vor dem Komma muss zwischen 1 und 9 liegen. 68 × 10³ ist keine korrekte wissenschaftliche Schreibweise, auch wenn der Wert stimmt.

**Aufgaben**
9.1 4700 als Zehnerpotenz-Schreibweise?
9.2 0,000015 als Zehnerpotenz-Schreibweise?
9.3 3 × 10⁸ ausgeschrieben?
9.4 82 000 als Zehnerpotenz-Schreibweise?
9.5 0,0000068 als Zehnerpotenz-Schreibweise?
9.6 5 × 10⁻³ ausgeschrieben?

Taschenrechner-Tipp: EXP- oder EE-Taste verwenden, nicht "× 10 ^" manuell eintippen.

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion9"

---

### Gemischte Übung Modul C

GC.1 0,000033 F in µF und danach in wissenschaftlicher Schreibweise ausdrücken.

GC.2 Ein Kondensator mit C = 100 pF und ein Widerstand mit R = 4,7 kΩ. Beide Werte in ihre jeweilige Basiseinheit (F, Ω) umrechnen.

GC.3 3,6 MHz und 360 kHz, welche Frequenz ist grösser, und um welchen Faktor als Zehnerpotenz?

GC.4 0,0022 µF in wissenschaftlicher Schreibweise ausdrücken.

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:modulc"

---

## Modul D: Formeln lesen und umstellen

Warum das zählt: an der Prüfung liegt die Formelsammlung vor. Entscheidend ist, die passende Formel zu erkennen, richtig zu lesen und bei Bedarf umzustellen.

### Lektion 10: Formeln lesen

`P = U² / R` heisst: Spannung im Quadrat, geteilt durch Widerstand.

**Vorgerechnetes Beispiel**

`I = U / R` heisst: Spannung geteilt durch Widerstand, das Ergebnis ist der Strom.

**Achtung:** Reihenfolge beim Vorlesen entspricht nicht immer der Schreibrichtung. Bei einem Bruch wird zuerst der Zähler benannt, dann "geteilt durch", dann der Nenner.

**Aufgaben**
10.1 Lies `XC = 1 / (2πfC)` in Worten.
10.2 Lies `U = √(P × R)` in Worten.
10.3 Was bedeutet das Quadrat in `I² × R`?
10.4 Lies `R = U/I` in Worten.
10.5 Lies `C = Q/U` in Worten.

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion10"

---

### Lektion 11: Formeln umstellen

Aus `U = R × I` folgt `I = U/R` und `R = U/I`.

**Vorgerechnetes Beispiel**

Aus `P = U × I` nach U umstellen: U = P/I

Bei P = 55 W, I = 4 A: U = 55/4 = 13,75 V

**Achtung:** beim Umstellen wandert eine Grösse, die multipliziert wird, beim Umstellen als Division auf die andere Seite, und umgekehrt. Nie einfach "hinüberschreiben" ohne die Operation zu ändern.

**Aufgaben**
11.1 Aus `P = U × I`: I = ?
11.2 U = 24 V, I = 3 A. R?
11.3 P = 60 W, U = 12 V. I?
11.4 U = 18 V, I = 2 A. R?
11.5 P = 45 W, I = 3 A. U?
11.6 Aus `U = R × I`: R = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion11"

---

### Lektion 12: Quadrat und Quadratwurzel

**Vorgerechnetes Beispiel**

I = 4 A, R = 10 Ω.

P = I² × R = 16 × 10 = 160 W

**Achtung:** I² bedeutet I mal I, nicht I mal 2. Ein häufiger Tippfehler am Taschenrechner ist, die x²-Taste zu übersehen und stattdessen zu verdoppeln.

**Aufgaben**
12.1 I = 3 A, R = 20 Ω. P = I² × R = ?
12.2 P = 200 W, R = 50 Ω. U = √(P×R) = ?
12.3 Kreisfläche mit r = 4 mm: A = π × r² = ?
12.4 I = 5 A, R = 8 Ω. P = I² × R = ?
12.5 P = 98 W, R = 2 Ω. U = √(P×R) = ?
12.6 Kreisfläche mit r = 6 mm: A = π × r² = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion12"

---

### Lektion 13: Pi und Kreisfläche

Radius und Durchmesser: `d = 2r`. Der Zahlenwert von π muss nicht auswendig gelernt werden, die π-Taste des Taschenrechners genügt.

**Vorgerechnetes Beispiel**

Leiterdurchmesser d = 3 mm, also r = 1,5 mm.

A = π × r² = π × 2,25 ≈ 7,07 mm²

**Achtung:** in Aufgaben wird oft der Durchmesser angegeben, die Formel verlangt aber den Radius. Vor dem Einsetzen immer prüfen, ob halbiert werden muss.

**Aufgaben**
13.1 Ein Leiter hat einen Durchmesser von 2 mm. Wie gross ist der Radius?
13.2 π-Taste am eigenen Taschenrechner finden und π × 2 testen.
13.3 Leiterquerschnitt bei r = 1 mm: A = π × r² = ?
13.4 Ein Leiter hat einen Durchmesser von 5 mm. Wie gross ist der Radius?
13.5 Leiterquerschnitt bei r = 3 mm: A = π × r² = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion13"

---

### Lektion 14: Kehrwert und verschachtelte Brüche

**Vorgerechnetes Beispiel**

f = 250 Hz.

T = 1/f = 1/250 = 0,004 s

**Achtung:** bei verschachtelten Brüchen wie `1/(1/R1 + 1/R2)` zuerst den Ausdruck in der inneren Klammer fertig berechnen, erst danach den äusseren Kehrwert bilden.

**Aufgaben**
14.1 f = 500 Hz. T = 1/f = ?
14.2 R1 = 60 Ω, R2 = 30 Ω. R = 1/(1/R1 + 1/R2) = ?
14.3 Kehrwerttaste (1/x) am eigenen Taschenrechner finden und für 4 testen.
14.4 f = 250 Hz. T = 1/f = ?
14.5 R1 = 120 Ω, R2 = 80 Ω. R = 1/(1/R1 + 1/R2) = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion14"

---

### Gemischte Übung Modul D

GD.1 P = 60 W soll bei R = 15 Ω anliegen. Berechne zuerst U mit `U = √(P × R)`, danach I mit `I = U/R`.

GD.2 f = 2,5 kHz, C = 10 nF. Berechne `XC = 1/(2πfC)`.

GD.3 Ein Draht hat d = 2,5 mm. Berechne die Querschnittsfläche, danach den Kehrwert des Ergebnisses (reine Rechenübung).

GD.4 f = 1 kHz, C = 100 nF. Berechne `XC = 1/(2πfC)`.

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:moduld"

---

## Modul E: Logarithmen und dB

Warum das zählt: Pegel- und Verstärkungsangaben in dB kommen in fast jeder Aufgabe zu Sendern, Antennen und Leitungen vor.

### Lektion 15: Zehnerlogarithmus lg

*Hinweis: dB-Rechnungen mit dem Taschenrechner sind auf dem YouTube-Kanal "Elektrotechnik einfach erklärt" (siehe Ressourcen oben) mit Beispielen erklärt.*

`g = 10 × lg(P2/P1)`

**Vorgerechnetes Beispiel**

P1 = 1 W, P2 = 10 W.

g = 10 × lg(10) = 10 × 1 = 10 dB

**Achtung:** lg bezieht sich immer auf ein Verhältnis P2/P1, nie auf eine einzelne Leistung allein. Ohne Bezugswert P1 lässt sich kein dB-Wert berechnen.

**Aufgaben**
15.1 P1 = 10 W, P2 = 100 W. g in dB?
15.2 P1 = 5 W, P2 = 5 W. g in dB?
15.3 LOG-Taste am eigenen Taschenrechner finden und lg(100) testen.
15.4 P1 = 2 W, P2 = 200 W. g in dB?
15.5 P1 = 8 W, P2 = 8 W. g in dB?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion15"

---

### Lektion 16: Natürlicher Logarithmus ln

Keine Logarithmentheorie notwendig, nur die Taste sicher bedienen können. `ln` kommt zum Beispiel bei Formeln zum Wellenwiderstand von HF-Leitungen vor.

**Vorgerechnetes Beispiel**

ln(1) = 0, da e hoch 0 gleich 1 ist.

**Achtung:** `ln` und `lg` sind zwei verschiedene Tasten mit unterschiedlichen Ergebnissen für denselben Wert. In der Formelsammlung genau lesen, welches der beiden Symbole verlangt wird.

**Aufgaben**
16.1 LN-Taste am eigenen Taschenrechner finden und ln(1) testen.
16.2 ln(10) berechnen.
16.3 Symbol `ln` in einer Formel erkennen: was unterscheidet es optisch von `lg`?
16.4 ln(100) berechnen.
16.5 ln(e) berechnen. (e ist eine feste Taschenrechner-Taste, ungefähr 2,718)

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion16"

---

### Lektion 17: Zehn hoch x, Rückrechnung aus dB

**Vorgerechnetes Beispiel**

g = 10 dB. Verhältnis = 10^(10/10) = 10^1 = 10:1

**Achtung:** die Formel für die Rückrechnung nutzt g/10 im Exponenten, nicht g allein. Wird durch 10 zu teilen vergessen, ist das Ergebnis um Zehnerpotenzen zu gross.

**Aufgaben**
17.1 Verstärkung 20 dB entspricht welchem Leistungsverhältnis? (P2/P1 = 10^(g/10))
17.2 -10 dB entspricht welchem Verhältnis?
17.3 10^x-Taste am eigenen Taschenrechner finden.
17.4 Verstärkung 30 dB entspricht welchem Leistungsverhältnis?
17.5 -3 dB entspricht ungefähr welchem Verhältnis?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion17"

---

### Gemischte Übung Modul E

GE.1 P1 = 1 W, P2 = 1000 W. Berechne g in dB, danach mit `10^(g/10)` das Verhältnis zurückrechnen und mit dem Ausgangswert vergleichen.

GE.2 lg(50) und ln(50) berechnen. Wie gross ist die Differenz der beiden Werte?

GE.3 Eine Verstärkung von 6 dB soll als Leistungsverhältnis dargestellt werden. Rückrechnung mit `10^(g/10)`.

GE.4 P1 = 1 W, P2 = 4 W. Berechne g in dB.

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:module"

---

## Modul F: Trigonometrie und weitere Grundlagen

Warum das zählt: Sinus, Betrag und Rundung tauchen einzeln selten, aber in fast jeder Prüfung mindestens einmal auf, meist kombiniert mit einer anderen Formel.

### Lektion 18: Sinus

Taschenrechner vorher auf DEG (Grad) stellen.

**Vorgerechnetes Beispiel**

sin(45°) ≈ 0,707

**Achtung:** steht der Taschenrechner auf RAD statt DEG, kommt für denselben Winkel ein völlig anderes Ergebnis heraus. Modus vor jeder trigonometrischen Rechnung prüfen.

**Aufgaben**
18.1 sin(30°) = ?
18.2 sin(90°) = ?
18.3 Taschenrechner-Modus prüfen: steht DEG oder RAD?
18.4 sin(0°) = ?
18.5 sin(60°) = ?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion18"

---

### Lektion 19: Betrag, Proportionalität, Runden

**Vorgerechnetes Beispiel**

|-12| = 12

f verdoppelt sich, also wird T = 1/f halb so gross: umgekehrt proportional.

**Achtung:** direkt und umgekehrt proportional werden leicht verwechselt. Bei direkter Proportionalität wachsen beide Grössen gemeinsam, bei umgekehrter wächst die eine, während die andere schrumpft.

**Aufgaben**
19.1 |-8| = ?
19.2 Frequenz verdoppelt sich, was passiert mit der Periodendauer T = 1/f?
19.3 Widerstand 330 Ω, Toleranz ±5 %. Bereich, sinnvoll gerundet?
19.4 |-15| = ?
19.5 Frequenz verdreifacht sich, was passiert mit der Periodendauer T = 1/f?

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:lektion19"

---

### Gemischte Übung Modul F

GF.1 sin(60°) berechnen, danach den Betrag von -sin(60°) bilden.

GF.2 f verdreifacht sich. Was passiert mit T = 1/f, und wie gross ist T bei f = 300 Hz, gerundet auf 3 Nachkommastellen?

GF.3 Widerstand 1 kΩ, Toleranz ±10 %. Bereich bestimmen und sinnvoll runden.

GF.4 Widerstand 680 Ω, Toleranz ±5 %. Bereich bestimmen und sinnvoll runden.

??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:modulf"

---

## Abschlusstest

Alle 19 Lektionen gemischt, ohne Hinweis auf die passende Lektion, so wie es an der echten Prüfung vorkommt. Erst lösen, dann mit den Resultaten vergleichen.

AT.1 U = 15 V, I = 4 A. P?

AT.2 U = 9 V, R = 3 Ω. I?

AT.3 R1 = 40 Ω, R2 = 40 Ω. R (parallel)?

AT.4 Ein Kabel dämpft mit -5 dB, ein Verstärker liefert +18 dB. Gesamtbilanz?

AT.5 3/8 als Dezimalzahl?

AT.6 Trafo mit 100 Windungen primär, 25 sekundär. Verhältnis?

AT.7 Sender nimmt 250 W auf, gibt 180 W ab. Wirkungsgrad?

AT.8 Welche Einheit hat die Induktivität?

AT.9 5,6 mA in A umrechnen.

AT.10 39.000 als Zehnerpotenz-Schreibweise?

AT.11 Lies `P = I² × R` in Worten.

AT.12 Aus `U = R × I`: I = ?

AT.13 I = 6 A, R = 4 Ω. P = I² × R?

AT.14 Kreisfläche mit r = 5 mm: A = π × r²?

AT.15 f = 1000 Hz. T = 1/f?

AT.16 P1 = 1 W, P2 = 50 W. g in dB?

AT.17 Verstärkung 40 dB entspricht welchem Leistungsverhältnis?

AT.18 sin(45°) = ?

AT.19 |-20| = ?

AT.20 Widerstand 560 Ω, Toleranz ±10 %. Bereich?

Bestanden, wenn alle 20 Aufgaben ohne Nachschlagen gelöst werden. Danach direkt weiter mit Elektronik- und Funktechnik-Themen, nicht mit weiterer abstrakter Mathematik.


??? success "Resultate anzeigen"

    --8<-- "hb9-resultate.md:at"

---

*© 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
