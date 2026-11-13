---
description: "Der Widerstand als Bauteil: Aufbau, Farbcode, E-Reihe, Belastbarkeit sowie NTC, PTC und LDR. Mit Übungen zur HB3-Prüfung."
---

# Lektion 8: Der Widerstand

!!! abstract "Das lernst du in dieser Lektion"
    - Wozu es Widerstände als Bauteil gibt
    - Wie du den Wert am Farbcode abliest
    - Warum die Belastbarkeit wichtig ist

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 7](07-gleichstrom-und-wechselstrom.md).*

## Wozu ein Widerstand?

In den Lektionen 4 bis 6 hast du mit Widerständen gerechnet. Jetzt lernst du das Bauteil kennen. Ein Widerstand begrenzt den Strom oder teilt eine Spannung auf. Die Energie, die er "vernichtet", wird zu Wärme.

<div class="grafik" markdown="0"><svg style="width:340px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Widerstand mit vier Farbringen (braun, schwarz, rot, gold) und daneben das Schaltzeichen"><line stroke="currentColor" stroke-width="2" x1="10" x2="70" y1="40" y2="40"></line><rect x="70" y="20" width="110" height="40" rx="10" fill="#e8d5a8" stroke="currentColor" stroke-width="2"></rect><rect x="92" y="22" width="9" height="36" fill="#8B4513"></rect><rect x="112" y="22" width="9" height="36" fill="#111"></rect><rect x="132" y="22" width="9" height="36" fill="#d32f2f"></rect><rect x="160" y="22" width="9" height="36" fill="#d4af37"></rect><line stroke="currentColor" stroke-width="2" x1="180" x2="240" y1="40" y2="40"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="125" y="85">Bauteil</text><line stroke="currentColor" stroke-width="2" x1="250" x2="270" y1="40" y2="40"></line><rect x="270" y="28" width="46" height="24" fill="none" stroke="currentColor" stroke-width="2"></rect><line stroke="currentColor" stroke-width="2" x1="316" x2="336" y1="40" y2="40"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="293" y="85">Schaltzeichen</text></svg></div>

Typische Einsätze:

- **Vorwiderstand:** schützt zum Beispiel eine LED vor zu viel Strom
- **Spannungsteiler:** erzeugt aus einer Spannung eine kleinere
- **Abschluss und Last:** bremst oder belastet eine Schaltung gezielt

## Bauformen

- **Festwiderstand:** hat einen festen Wert, zum Beispiel 220 Ω
- **Potentiometer (Poti):** einstellbarer Widerstand mit Drehknopf, zum Beispiel die Lautstärke
- **Trimmer:** wie ein Poti, wird aber nur einmal eingestellt
- **NTC und PTC:** der Widerstand ändert sich mit der Temperatur. Beim NTC sinkt er bei Wärme, beim PTC steigt er.
- **LDR:** der Widerstand ändert sich mit dem Licht. Im Hellen sinkt er.

## Der Farbcode

Kleine Widerstände sind zu klein für eine Beschriftung. Darum tragen sie farbige Ringe. Bei 4 Ringen gilt:

1. Ring: erste Ziffer
2. Ring: zweite Ziffer
3. Ring: Multiplikator (mit dieser Zahl multiplizierst du)
4. Ring: Toleranz

| Farbe | Ziffer | Multiplikator | Toleranz |
| --- | --- | --- | --- |
| schwarz | 0 | · 1 | |
| braun | 1 | · 10 | 1 % |
| rot | 2 | · 100 | 2 % |
| orange | 3 | · 1 000 | |
| gelb | 4 | · 10 000 | |
| grün | 5 | · 100 000 | |
| blau | 6 | · 1 000 000 | |
| violett | 7 | | |
| grau | 8 | | |
| weiss | 9 | | |
| gold | | · 0,1 | 5 % |
| silber | | · 0,01 | 10 % |

!!! example "Beispiel 1"
    braun, schwarz, rot, gold: 1, 0, mal 100, 5 %

    10 · 100 = 1 000 Ω = **1 kΩ, Toleranz 5 %**

!!! example "Beispiel 2"
    gelb, violett, rot, gold: 4, 7, mal 100, 5 %

    47 · 100 = 4 700 Ω = **4,7 kΩ, Toleranz 5 %**

Die **Toleranz** sagt, wie stark der echte Wert abweichen darf. Ein Widerstand mit 1 kΩ und 5 % liegt zwischen 950 Ω und 1 050 Ω (5 % von 1 000 sind 50).

## Normreihen

Nicht jeder Wert wird gebaut. Es gibt Normreihen. Die verbreitete **E12-Reihe** hat diese Grundwerte, die mit 10, 100, 1 000 und so weiter multipliziert werden:

10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82

Brauchst du einen Wert, den es nicht gibt, nimmst du den nächsten verfügbaren.

!!! example "Beispiel: LED-Vorwiderstand"
    Eine LED braucht 2 V und 20 mA. Die Batterie liefert 9 V. Am Widerstand müssen 7 V abfallen.

    R = U / I = 7 / 0,02 = 350 Ω

    350 Ω gibt es nicht. Du nimmst **390 Ω**. Der Strom ist dann etwas kleiner als 20 mA, die LED ist sicher.

## Die Belastbarkeit

Jeder Widerstand wird warm. Auf dem Gehäuse steht nicht, wie viel er aushält, aber du kennst die Bauform: kleine Widerstände vertragen oft 0,25 W, grössere 0,5 W, 1 W oder mehr. Die Leistung im Widerstand rechnest du mit P = U · I.

!!! example "Beispiel"
    An einem Widerstand von 100 Ω liegen 12 V.

    I = 12 / 100 = 0,12 A, P = 12 · 0,12 = **1,44 W**

    Ein Widerstand mit 0,25 W würde überhitzen und durchbrennen. Du brauchst einen mit mindestens 2 W.

!!! note "Merksatz"
    Ein Widerstand hat einen Wert in Ω, eine Toleranz in % und eine Belastbarkeit in W. Alle drei müssen zur Schaltung passen.

!!! tip "Prüfungstipp"
    Beim Farbcode zählst du die Ziffern der ersten beiden Ringe zusammen und hängst so viele Nullen an, wie der dritte Ring sagt. Der Goldring steht immer am Ende.

## Mini-Übung

1. Ein Widerstand hat die Ringe braun, schwarz, orange, gold. Welchen Wert und welche Toleranz hat er?
2. Ringe rot, violett, gelb, gold. Welchen Wert hat er?
3. Welche drei ersten Ringe hat ein Widerstand mit 330 Ω?
4. Ein Widerstand hat 1 kΩ und 10 % Toleranz. In welchem Bereich liegt der Wert?
5. Ein Widerstand mit 100 Ω und 0,25 W liegt an 12 V. Hält er das aus?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | 10 · 1 000 = 10 kΩ, 5 % |
    | 2 | 27 · 10 000 = 270 kΩ |
    | 3 | orange, orange, braun (33 · 10) |
    | 4 | 900 Ω bis 1 100 Ω |
    | 5 | Nein. P = 12 · 0,12 = 1,44 W, das ist viel mehr als 0,25 W |

## Das Wichtigste in 3 Sätzen

- Ein Widerstand begrenzt den Strom oder teilt Spannung, die Energie wird zu Wärme.
- Den Wert liest du am Farbcode ab: 2 Ziffern, Multiplikator, Toleranz.
- Die Belastbarkeit in Watt muss grösser sein als die Leistung P = U · I.

**Weiter:** [Lektion 9: Der Kondensator](09-kondensator.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
