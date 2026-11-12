# Lektion 6: Reihen- und Parallelschaltung

!!! abstract "Das lernst du in dieser Lektion"
    - Wie sich Strom und Spannung in der Reihenschaltung verhalten
    - Wie sich Strom und Spannung in der Parallelschaltung verhalten
    - Wie du den Gesamtwiderstand berechnest

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 5](05-ohmsches-gesetz-und-leistung.md).*

## Die Reihenschaltung

Die Widerstände hängen hintereinander. Der Strom hat nur einen Weg und muss durch alle.

<div class="grafik" markdown="0"><svg role="img" aria-label="Reihenschaltung: Batterie mit den Widerständen R1 und R2 hintereinander" style="width:260px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><!-- battery --><line stroke="currentColor" stroke-width="3" x1="20" x2="20" y1="60" y2="100"></line><line stroke="currentColor" stroke-width="3" x1="30" x2="30" y1="70" y2="90"></line><text fill="currentColor" font-family="sans-serif" font-size="13" x="8" y="55">+</text><!-- wires --><line stroke="currentColor" stroke-width="2" x1="20" x2="20" y1="60" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="20" x2="240" y1="20" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="30" y1="100" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="240" y1="140" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="240" x2="240" y1="20" y2="140"></line><!-- R1 zigzag --><polyline fill="none" points="90,20 96,8 104,32 112,8 120,32 128,8 136,20" stroke="currentColor" stroke-width="2"></polyline><text fill="currentColor" font-family="sans-serif" font-size="15" text-anchor="middle" x="113" y="55">R1</text><!-- R2 zigzag --><polyline fill="none" points="160,20 166,8 174,32 182,8 190,32 198,8 206,20" stroke="currentColor" stroke-width="2"></polyline><text fill="currentColor" font-family="sans-serif" font-size="15" text-anchor="middle" x="183" y="55">R2</text><text fill="currentColor" font-family="sans-serif" font-size="15" x="0" y="85">V</text></svg></div>

- Der Strom ist überall gleich gross: I = I1 = I2
- Die Spannung teilt sich auf: U = U1 + U2
- Die Widerstände werden addiert:

$$R_{ges} = R_1 + R_2 + R_3 + \dots$$

!!! example "Beispiel"
    Drei Widerstände mit 10 Ω, 20 Ω und 30 Ω liegen in Reihe.

    R = 10 + 20 + 30 = **60 Ω**

!!! example "Beispiel: Spannungsteiler"
    An 12 V liegen 100 Ω und 200 Ω in Reihe.

    R = 100 + 200 = 300 Ω, I = 12 / 300 = **0,04 A** (40 mA)

    U1 = 100 · 0,04 = **4 V**, U2 = 200 · 0,04 = **8 V**. Zusammen ergibt das wieder die 12 V.

!!! note "Merksatz"
    In Reihe wird der Gesamtwiderstand immer **grösser** als jeder Einzelwiderstand.

## Die Parallelschaltung

Die Widerstände liegen nebeneinander. Der Strom kann sich auf mehrere Wege verteilen.

<div class="grafik" markdown="0"><svg role="img" aria-label="Parallelschaltung: Batterie mit den Widerständen R1 und R2 nebeneinander" style="width:220px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><!-- battery --><line stroke="currentColor" stroke-width="3" x1="20" x2="20" y1="65" y2="95"></line><line stroke="currentColor" stroke-width="3" x1="30" x2="30" y1="72" y2="88"></line><!-- top / bottom rails --><line stroke="currentColor" stroke-width="2" x1="20" x2="20" y1="65" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="20" x2="210" y1="20" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="30" y1="95" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="210" y1="140" y2="140"></line><!-- branch R1 --><line stroke="currentColor" stroke-width="2" x1="90" x2="90" y1="20" y2="55"></line><polyline fill="none" points="90,55 78,61 102,69 78,77 102,85 78,93 90,99" stroke="currentColor" stroke-width="2"></polyline><line stroke="currentColor" stroke-width="2" x1="90" x2="90" y1="99" y2="140"></line><text fill="currentColor" font-family="sans-serif" font-size="15" text-anchor="middle" x="65" y="80">R1</text><!-- branch R2 --><line stroke="currentColor" stroke-width="2" x1="150" x2="150" y1="20" y2="55"></line><polyline fill="none" points="150,55 138,61 162,69 138,77 162,85 138,93 150,99" stroke="currentColor" stroke-width="2"></polyline><line stroke="currentColor" stroke-width="2" x1="150" x2="150" y1="99" y2="140"></line><text fill="currentColor" font-family="sans-serif" font-size="15" text-anchor="middle" x="180" y="80">R2</text><line stroke="currentColor" stroke-width="2" x1="150" x2="210" y1="20" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="150" x2="210" y1="140" y2="140"></line><text fill="currentColor" font-family="sans-serif" font-size="15" x="0" y="85">V</text></svg></div>

- Die Spannung ist an allen gleich: U = U1 = U2
- Der Strom teilt sich auf: I = I1 + I2. Durch den kleineren Widerstand fliesst mehr Strom.
- Für zwei Widerstände gilt:

$$R_{ges} = \frac{R_1 \cdot R_2}{R_1 + R_2}$$

!!! example "Beispiel"
    Zwei Widerstände mit 30 Ω und 60 Ω liegen parallel.

    R = (30 · 60) / (30 + 60) = 1 800 / 90 = **20 Ω**

!!! example "Sonderfall: gleiche Widerstände"
    Zwei Widerstände mit je 100 Ω parallel ergeben die Hälfte: **50 Ω**. Bei drei gleichen ist es ein Drittel.

!!! note "Merksatz"
    Parallel wird der Gesamtwiderstand immer **kleiner** als der kleinste Einzelwiderstand.

## Die gemischte Schaltung

Oft kommen Reihe und parallel zusammen.

<div class="grafik" markdown="0"><svg role="img" aria-label="Gemischte Schaltung: R1 in Reihe zu R2 parallel R3, danach R4" style="width:300px;height:auto;display:block;margin:1rem auto;" viewbox="0 -14 320 174" xmlns="http://www.w3.org/2000/svg"><!-- battery --><line stroke="currentColor" stroke-width="3" x1="20" x2="20" y1="65" y2="95"></line><line stroke="currentColor" stroke-width="3" x1="30" x2="30" y1="72" y2="88"></line><line stroke="currentColor" stroke-width="2" x1="20" x2="20" y1="65" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="20" x2="80" y1="20" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="30" y1="95" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="290" y1="140" y2="140"></line><!-- R1 in series (top left) --><polyline fill="none" points="80,20 86,8 94,32 102,8 110,32 118,8 126,20" stroke="currentColor" stroke-width="2"></polyline><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" x="103" y="4">R1</text><line stroke="currentColor" stroke-width="2" x1="126" x2="150" y1="20" y2="20"></line><!-- parallel block R2 / R3 --><line stroke="currentColor" stroke-width="2" x1="150" x2="150" y1="20" y2="55"></line><polyline fill="none" points="150,55 138,61 162,69 138,77 162,85 138,93 150,99" stroke="currentColor" stroke-width="2"></polyline><line stroke="currentColor" stroke-width="2" x1="150" x2="150" y1="99" y2="140"></line><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" x="122" y="80">R2</text><line stroke="currentColor" stroke-width="2" x1="210" x2="210" y1="20" y2="55"></line><polyline fill="none" points="210,55 198,61 222,69 198,77 222,85 198,93 210,99" stroke="currentColor" stroke-width="2"></polyline><line stroke="currentColor" stroke-width="2" x1="210" x2="210" y1="99" y2="140"></line><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" x="238" y="80">R3</text><line stroke="currentColor" stroke-width="2" x1="150" x2="210" y1="20" y2="20"></line><!-- R4 in series after the parallel block --><line stroke="currentColor" stroke-width="2" x1="210" x2="234" y1="20" y2="20"></line><polyline fill="none" points="234,20 240,8 248,32 256,8 264,32 272,8 280,20" stroke="currentColor" stroke-width="2"></polyline><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" x="257" y="4">R4</text><line stroke="currentColor" stroke-width="2" x1="280" x2="290" y1="20" y2="20"></line><line stroke="currentColor" stroke-width="2" x1="290" x2="290" y1="20" y2="140"></line><text fill="currentColor" font-family="sans-serif" font-size="15" x="0" y="85">V</text></svg></div>

So gehst du vor:

1. Suche eine Gruppe, die rein parallel oder rein in Reihe liegt
2. Berechne ihren Ersatzwiderstand
3. Ersetze die Gruppe gedanklich durch diesen einen Wert
4. Wiederhole, bis nur noch ein Widerstand übrig bleibt

!!! example "Beispiel"
    R1 = 10 Ω liegt in Reihe zu R2 und R3 mit je 20 Ω parallel.

    Parallelteil: 20 Ω parallel 20 Ω = 10 Ω. Gesamt: 10 + 10 = **20 Ω**

!!! tip "Prüfungstipp"
    Schätze zuerst: Parallel muss das Ergebnis kleiner sein als der kleinste Widerstand. Wenn dein Resultat grösser ist, hast du dich verrechnet.

## Mini-Übung

1. Widerstände mit 47 Ω, 100 Ω und 220 Ω liegen in Reihe. Wie gross ist der Gesamtwiderstand?
2. An 12 V liegen 10 Ω und 20 Ω in Reihe. Wie gross ist der Strom?
3. Zwei Widerstände mit je 100 Ω liegen parallel. Wie gross ist der Gesamtwiderstand?
4. 12 Ω und 4 Ω liegen parallel. Wie gross ist der Gesamtwiderstand?
5. An 12 V liegen zwei Widerstände mit je 12 Ω parallel. Wie gross ist der Gesamtstrom?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | R = 47 + 100 + 220 = 367 Ω |
    | 2 | R = 30 Ω, I = 12 / 30 = 0,4 A |
    | 3 | R = 100 / 2 = 50 Ω |
    | 4 | R = (12 · 4) / (12 + 4) = 48 / 16 = 3 Ω |
    | 5 | Jeder Zweig: 12 / 12 = 1 A, gesamt 2 A |

## Das Wichtigste in 3 Sätzen

- In Reihe ist der Strom gleich, die Spannung teilt sich auf, die Widerstände addieren sich.
- Parallel ist die Spannung gleich, der Strom teilt sich auf, der Gesamtwiderstand wird kleiner.
- Gemischte Schaltungen löst du Schritt für Schritt von innen nach aussen.

Zum Üben gibt es das [Übungsblatt zu Spannung, Strom, Widerstand und Leistung](../../technik/uebungsblatt-spannung-strom-widerstand-leistung.md).

**Weiter:** Lektion 7 (folgt).

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
