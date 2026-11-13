---
description: "Was Frequenz bedeutet, wie Frequenzbänder eingeteilt sind und welche Bänder Funkamateure nutzen. Mit Beispielen und Übungen zur Prüfung HB3."
---

# Lektion 2: Frequenz und Bänder

!!! abstract "Das lernst du in dieser Lektion"
    - Wie du kHz, MHz und GHz ineinander umrechnest
    - Was ein Frequenzband ist und woher sein Name kommt
    - Wie du aus der Frequenz den Bandnamen herausfindest

*Dauer: etwa 20 Minuten. Du brauchst nur einen Taschenrechner. Voraussetzung: [Lektion 1](01-was-ist-funk.md).*

## Eine Strasse für jeden Zweck

Stell dir das Funkspektrum wie eine lange Strasse vor. Jede Frequenz ist eine Hausnummer. Damit sich niemand in die Quere kommt, hat jeder Dienst seinen eigenen Abschnitt: Radio, Flugfunk, Handy, Wetterdienst und auch der Amateurfunk.

Ein Abschnitt für den Amateurfunk heisst **Frequenzband**, kurz **Band**. Wir Funkamateure dürfen nur in diesen Bändern senden.

!!! note "Merksatz"
    Ein Band ist ein Frequenzbereich, der für einen bestimmten Zweck reserviert ist.

## Die Einheiten umrechnen

Frequenzen sind oft sehr grosse Zahlen. Darum gibt es Vorsilben, wie bei Metern und Kilometern:

| Einheit | Zeichen | Wert in Hz |
| --- | --- | --- |
| Kilohertz | kHz | 1 000 |
| Megahertz | MHz | 1 000 000 |
| Gigahertz | GHz | 1 000 000 000 |

Zwischen den Einheiten liegt immer der Faktor **1 000**:

- Von kHz nach MHz: durch 1 000 teilen
- Von MHz nach kHz: mal 1 000 nehmen
- Von GHz nach MHz: mal 1 000 nehmen

!!! example "Beispiele"
    - 3 500 kHz = 3 500 / 1 000 = **3,5 MHz**
    - 0,145 GHz = 0,145 · 1 000 = **145 MHz**

## Woher kommt der Bandname?

Die Bänder heissen nach ihrer ungefähren **Wellenlänge**. Die Formel aus Lektion 1 kennst du schon:

$$\lambda = \frac{300}{f}$$

!!! example "Beispiele"
    - 7 MHz: 300 / 7 ≈ 43 m. Das Band heisst gerundet **"40-m-Band"**.
    - 145 MHz: 300 / 145 ≈ 2,1 m. Das Band heisst **"2-m-Band"**.
    - 435 MHz: 300 / 435 ≈ 0,69 m. Das Band heisst **"70-cm-Band"**.

Die Namen sind also gerundet. Die genauen Frequenzen eines Bands stehen in der [Frequenztabelle](../../technik/uebungsblatt-frequenztabelle.md). Dort siehst du auch, welche Bänder du mit HB3 nutzen darfst.

!!! tip "Prüfungstipp"
    Rechne zuerst alles in **MHz** um, bevor du die Formel einsetzt. So passt die Zahl 300 und du bekommst die Wellenlänge direkt in Metern.

## Mini-Übung

1. 7 000 kHz sind wie viele MHz?
2. 2,4 GHz sind wie viele MHz?
3. Wellenlänge bei 14 MHz in Metern (1 Nachkommastelle)?
4. Wellenlänge bei 435 MHz in Zentimetern (ganze Zahl)?
5. Bei etwa 30 MHz: Wie heisst das Band ungefähr?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | 7 000 / 1 000 = 7 MHz |
    | 2 | 2,4 · 1 000 = 2 400 MHz |
    | 3 | 300 / 14 ≈ 21,4 m |
    | 4 | 300 / 435 ≈ 0,69 m = 69 cm |
    | 5 | 300 / 30 = 10 m, also das 10-m-Band |

## Das Wichtigste in 3 Sätzen

- Ein Band ist ein Frequenzbereich, der für einen Zweck reserviert ist.
- Zwischen kHz, MHz und GHz liegt immer der Faktor 1 000.
- Der Bandname ist die gerundete Wellenlänge: λ = 300 / f (in MHz).

**Weiter:** [Lektion 3: Elektromagnetische Wellen und Periodendauer](03-wellen-und-periodendauer.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
