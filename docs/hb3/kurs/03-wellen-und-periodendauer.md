# Lektion 3: Elektromagnetische Wellen und Periodendauer

!!! abstract "Das lernst du in dieser Lektion"
    - Was eine elektromagnetische Welle ist
    - Was die Periodendauer bedeutet
    - Wie du Frequenz und Periodendauer ineinander umrechnest

*Dauer: etwa 25 Minuten. Du brauchst nur einen Taschenrechner. Voraussetzung: [Lektion 2](02-frequenz-und-baender.md).*

## Wie entsteht eine Funkwelle?

Fliesst Strom durch einen Draht, entsteht um den Draht ein **Magnetfeld**. Wo Spannung anliegt, gibt es ein **elektrisches Feld**. Beide Felder gehören zusammen.

Wenn der Strom im Draht schnell hin und her schwingt, ändern sich beide Felder dauernd. Sie lösen sich vom Draht ab und laufen als Welle in den Raum. Das ist eine **elektromagnetische Welle**. Der Draht ist dabei die Antenne.

Du kannst dir eine Schaukel vorstellen: Sie schwingt hin und her, immer im gleichen Takt. Bei der Funkwelle schwingen die Felder.

!!! note "Merksatz"
    Ein schwingender Strom in einer Antenne erzeugt eine elektromagnetische Welle. Sie läuft mit Lichtgeschwindigkeit.

## Felder und Induktion

- **Elektrisches Feld:** Es umgibt elektrische Ladungen und besteht zwischen zwei Punkten mit unterschiedlicher Spannung. Je grösser die Spannung und je kleiner der Abstand, desto stärker ist es. Zwischen zwei Kondensatorplatten gilt: $E = U / d$ (Einheit V/m).
- **Magnetisches Feld:** Es umgibt jeden stromdurchflossenen Leiter. Die **Rechte-Hand-Regel** zeigt die Richtung: Der Daumen zeigt in die technische Stromrichtung (von Plus nach Minus), die gekrümmten Finger zeigen die Richtung des Magnetfelds.
- **Induktion:** Ändert sich ein Magnetfeld, entsteht in einem Leiter eine Spannung. Darauf beruhen Spule, Transformator und Antenne.

Ein ruhendes Feld ist noch keine Funkwelle. Erst wenn sich beide Felder ändern und sich ablösen, entsteht eine Welle. In ihr stehen das elektrische Feld, das magnetische Feld und die Ausbreitungsrichtung **senkrecht aufeinander**. Funkwellen und Licht sind beide elektromagnetische Wellen.

Nahe an der Antenne ist das Feld kompliziert (**Nahfeld**). Erst weiter weg verhält es sich wie eine regelmässige Welle (**Fernfeld**).

!!! example "Beispiel"
    Zwischen zwei Platten im Abstand von 2 cm liegen 100 V.

    E = U / d = 100 / 0,02 = **5 000 V/m**

## Die Periodendauer

Eine **Periode** ist ein einziges vollständiges Hin und Her der Schwingung. Die **Periodendauer** (Zeichen **T**) ist die Zeit, die dafür nötig ist. Sie wird in **Sekunden (s)** angegeben.

Bei der Schaukel ist das die Zeit von ganz links über ganz rechts zurück nach ganz links.

Frequenz und Periodendauer sind zwei Seiten derselben Sache:

- Die Frequenz sagt: Wie viele Schwingungen pro Sekunde?
- Die Periodendauer sagt: Wie lange dauert eine Schwingung?

Sie sind **Kehrwerte** voneinander:

$$T = \frac{1}{f} \qquad\qquad f = \frac{1}{T}$$

- T: Periodendauer in Sekunden
- f: Frequenz in Hertz

!!! example "Beispiel"
    Der Strom aus der Steckdose schwingt mit 50 Hz.

    T = 1 / 50 = 0,02 s = **20 ms**

    Eine Schwingung dauert also 20 Millisekunden.

## Kleine Zeiten schreiben

Bei Funkfrequenzen sind die Zeiten winzig. Darum gibt es wieder Vorsilben:

| Einheit | Zeichen | Wert in Sekunden |
| --- | --- | --- |
| Millisekunde | ms | 0,001 |
| Mikrosekunde | µs | 0,000 001 |
| Nanosekunde | ns | 0,000 000 001 |

!!! example "Beispiel"
    Eine Welle mit 1 MHz (also 1 000 000 Hz):

    T = 1 / 1 000 000 = 0,000 001 s = **1 µs**

## Was in einer Periode passiert

In genau einer Periode läuft die Welle **eine Wellenlänge** weit. So hängen alle drei Grössen zusammen:

- hohe Frequenz: kurze Periodendauer, kurze Wellenlänge
- tiefe Frequenz: lange Periodendauer, lange Wellenlänge

Die Wellenlänge kennst du aus Lektion 2: λ = 300 / f (f in MHz, λ in Metern).

!!! tip "Prüfungstipp"
    Verdoppelt sich die Frequenz, halbiert sich die Periodendauer und die Wellenlänge. Bei Fragen mit "grösser" oder "kleiner" brauchst du dafür oft keinen Taschenrechner.

## Mini-Übung

1. Wie lang ist die Periodendauer bei 1 000 Hz?
2. Wie lang ist die Periodendauer bei 100 kHz? Gib sie in µs an.
3. Eine Schwingung dauert 2 µs. Welche Frequenz ist das in kHz?
4. Die Frequenz steigt von 7 MHz auf 14 MHz. Was passiert mit der Periodendauer?
5. Zwischen zwei Platten im Abstand von 5 cm liegen 200 V. Wie stark ist das elektrische Feld?
6. Welche Regel verbindet die Stromrichtung mit der Richtung des Magnetfelds?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | 1 / 1 000 = 0,001 s = 1 ms |
    | 2 | 1 / 100 000 = 0,000 01 s = 10 µs |
    | 3 | 1 / 0,000 002 = 500 000 Hz = 500 kHz |
    | 4 | Sie halbiert sich. |
    | 5 | E = 200 / 0,05 = 4 000 V/m |
    | 6 | die Rechte-Hand-Regel |

## Das Wichtigste in 3 Sätzen

- Ein schwingender Strom in einer Antenne erzeugt eine elektromagnetische Welle.
- Die Periodendauer ist die Zeit für eine Schwingung: T = 1 / f.
- In einer Periode läuft die Welle genau eine Wellenlänge weit.

**Weiter:** [Lektion 4: Spannung, Strom und Widerstand](04-spannung-strom-widerstand.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
