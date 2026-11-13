---
description: "Die Spule: Induktivität, Blindwiderstand und Verhalten bei hohen Frequenzen, einfach erklärt, mit Formeln und Übungen für die Prüfung HB3."
---

# Lektion 10: Die Spule

!!! abstract "Das lernst du in dieser Lektion"
    - Wie eine Spule aufgebaut ist und was sie speichert
    - Wie sie sich bei Gleich- und Wechselstrom verhält
    - Den Unterschied zum Kondensator

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 9](09-kondensator.md).*

## Aufbau und Aufgabe

Eine **Spule** ist ein aufgewickelter Draht. Fliesst Strom, entsteht um sie ein **Magnetfeld**. Die Spule speichert Energie in diesem Magnetfeld.

<div class="grafik" markdown="0"><svg style="width:300px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 300 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schaltzeichen Spule"><line stroke="currentColor" stroke-width="2" x1="10" x2="70" y1="50" y2="50"></line><path d="M70,50 a15,15 0 0 1 30,0 a15,15 0 0 1 30,0 a15,15 0 0 1 30,0 a15,15 0 0 1 30,0" fill="none" stroke="currentColor" stroke-width="2"></path><line stroke="currentColor" stroke-width="2" x1="190" x2="250" y1="50" y2="50"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="130" y="82">Spule (L)</text></svg></div>

Die **Induktivität** gibt an, wie stark die Spule wirkt. Das Zeichen ist **L**, die Einheit **Henry (H)**. Üblich sind kleine Werte:

| Einheit | Zeichen | Umrechnung |
| --- | --- | --- |
| Millihenry | mH | 1 H = 1 000 mH |
| Mikrohenry | µH | 1 mH = 1 000 µH |
| Nanohenry | nH | 1 µH = 1 000 nH |

Die Induktivität wird grösser mit mehr Windungen, mit grösserem Durchmesser und mit einem Kern aus Ferrit oder Eisen. Ohne Kern spricht man von einer **Luftspule**.

!!! example "Beispiel"
    2,5 mH in µH: 2,5 · 1 000 = **2 500 µH**

## Verhalten bei Gleich- und Wechselstrom

- **Gleichstrom:** Die Spule hat nur den kleinen Widerstand ihres Drahtes. Der Strom fliesst fast ungehindert.
- **Wechselstrom:** Die Spule bremst den Strom, weil das sich ändernde Magnetfeld eine Gegenspannung erzeugt (Induktion). Dieser Widerstand heisst Blindwiderstand.
- Je höher die Frequenz, desto stärker bremst die Spule.

### Der Blindwiderstand

Der Widerstand einer Spule für Wechselstrom heisst **Blindwiderstand** (induktive Reaktanz) X<sub>L</sub>:

$$X_L = 2\pi \cdot f \cdot L$$

Je höher die Frequenz f oder die Induktivität L, desto grösser ist X<sub>L</sub>. Das ist das Gegenteil vom Kondensator.

!!! example "Beispiel"
    Eine Spule mit 10 µH bei 10 MHz: X<sub>L</sub> = 2π · 10 · 10<sup>6</sup> · 10 · 10<sup>-6</sup> = **etwa 628 Ω**. Bei 1 MHz sind es nur etwa 63 Ω.

## Kondensator und Spule im Vergleich

| | Kondensator | Spule |
| --- | --- | --- |
| Speichert Energie im | elektrischen Feld | magnetischen Feld |
| Gleichstrom | sperrt | lässt durch |
| Hohe Frequenzen | kommen leicht durch | werden gebremst |
| Einheit | Farad (F) | Henry (H) |

!!! note "Merksatz"
    Die Spule lässt Gleichstrom durch und bremst Wechselstrom, hohe Frequenzen stärker als tiefe. Beim Kondensator ist es genau umgekehrt.

## Einsatz im Funkgerät

- **Drossel:** hält HF fern, lässt Gleichstrom durch
- **Schwingkreis und Filter:** zusammen mit einem Kondensator (Lektion 14)
- **Antennenverlängerung:** eine Spule macht eine kurze Antenne elektrisch länger
- **Transformator:** zwei Spulen auf einem Kern (Lektion 13)

!!! tip "Prüfungstipp"
    Merke dir das Gegensatzpaar: Spule lässt tiefe Frequenzen und Gleichstrom durch, Kondensator lässt hohe Frequenzen durch.

## Mini-Übung

1. Rechne 10 µH in nH um.
2. Rechne 0,5 mH in µH um.
3. Wie verhält sich eine Spule bei Gleichstrom?
4. Welches Bauteil bremst hohe Frequenzen: Spule oder Kondensator?
5. In welchem Feld speichert die Spule Energie?
6. Wie gross ist der Blindwiderstand einer Spule mit 1 mH bei 1 kHz?
7. Was entsteht in einem Leiter, wenn sich das Magnetfeld ändert?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | 10 · 1 000 = 10 000 nH |
    | 2 | 0,5 · 1 000 = 500 µH |
    | 3 | Sie lässt ihn fast ungehindert durch, nur der Drahtwiderstand bremst |
    | 4 | die Spule |
    | 5 | im magnetischen Feld |
    | 6 | X<sub>L</sub> = 2π · 1 000 · 0,001 = etwa 6,3 Ω |
    | 7 | eine Spannung (Induktion) |

## Das Wichtigste in 3 Sätzen

- Die Spule speichert Energie im Magnetfeld, die Einheit ist Henry.
- Sie lässt Gleichstrom durch und bremst Wechselstrom, hohe Frequenzen stärker.
- Spule und Kondensator verhalten sich genau gegensätzlich.

**Weiter:** [Lektion 11: Diode und Gleichrichtung](11-diode-und-gleichrichtung.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
