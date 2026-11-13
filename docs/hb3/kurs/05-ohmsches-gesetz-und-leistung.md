---
description: "Das Ohmsche Gesetz und die elektrische Leistung: Formeln, Formeldreieck, Arbeit und Energie. Mit Rechenbeispielen und Übungen für HB3."
---

# Lektion 5: Das Ohmsche Gesetz und die Leistung

!!! abstract "Das lernst du in dieser Lektion"
    - Wie Spannung, Strom und Widerstand zusammenhängen (Ohmsches Gesetz)
    - Was elektrische Leistung ist und wie du sie berechnest
    - Wie du Formeln mit dem Formeldreieck umstellst

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 4](04-spannung-strom-widerstand.md).*

## Das Ohmsche Gesetz

In Lektion 4 hast du gesehen: Die Spannung treibt den Strom an, der Widerstand bremst ihn. Das Ohmsche Gesetz sagt genau, wie stark:

$$U = R \cdot I$$

- U: Spannung in Volt (V)
- R: Widerstand in Ohm (Ω)
- I: Strom in Ampere (A)

Man kann die Formel umstellen:

$$I = \frac{U}{R} \qquad\qquad R = \frac{U}{I}$$

!!! example "Beispiel"
    An einem Widerstand von 4 Ω liegen 12 V. Wie gross ist der Strom?

    I = U / R = 12 / 4 = **3 A**

## Das Formeldreieck

So musst du die Formel nicht auswendig umstellen. Zeichne ein Dreieck. Oben steht U, unten stehen R und I nebeneinander:

<div class="grafik" markdown="0"><svg style="width:180px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Formeldreieck: oben U, unten links R, unten rechts I"><polygon fill="none" points="100,10 10,170 190,170" stroke="currentColor" stroke-width="2.5"></polygon><line stroke="currentColor" stroke-width="2" x1="10" x2="190" y1="110" y2="110"></line><line stroke="currentColor" stroke-width="2" x1="100" x2="100" y1="110" y2="170"></line><text fill="currentColor" font-family="sans-serif" font-size="30" font-weight="700" text-anchor="middle" x="100" y="80">U</text><text fill="currentColor" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="55" y="150">R</text><text fill="currentColor" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="145" y="150">I</text></svg></div>

Decke die Grösse ab, die du suchst:

- U abdecken: übrig bleibt R · I
- R abdecken: übrig bleibt U / I
- I abdecken: übrig bleibt U / R

## Die Leistung

Die **Leistung** sagt, wie viel Energie pro Sekunde umgesetzt wird. Das Zeichen ist **P**, die Einheit **Watt (W)**.

$$P = U \cdot I$$

!!! example "Beispiel"
    Ein Funkgerät nimmt bei 12 V einen Strom von 3 A auf.

    P = U · I = 12 · 3 = **36 W**

Auch diese Formel kannst du umstellen:

$$I = \frac{P}{U} \qquad\qquad U = \frac{P}{I}$$

Bei grossen und kleinen Leistungen helfen wieder die Vorsilben:

- 1 kW = 1 000 W
- 1 W = 1 000 mW

!!! note "Merksatz"
    Spannung mal Strom ergibt die Leistung: P = U · I. Spannung gleich Widerstand mal Strom: U = R · I.

!!! tip "Prüfungstipp"
    In der Prüfung darfst du die Formelsammlung benutzen. Das Umstellen und das Einsetzen musst du aber selbst können. Schreib immer zuerst die Formel hin, dann die Zahlen mit Einheit. Rechne vorher in V, A und Ω um (siehe Lektion 4).

## Leistung mit Strom oder Spannung allein

Mit dem Ohmschen Gesetz lässt sich die Leistung auch so berechnen:

$$P = I^2 \cdot R \qquad\qquad P = \frac{U^2}{R}$$

!!! example "Beispiel"
    An einem Widerstand von 100 Ω liegen 12 V: P = 12² / 100 = 144 / 100 = **1,44 W**

## Arbeit und Energie

Die **Arbeit** (Energie) ist Leistung mal Zeit:

$$W = P \cdot t$$

Die Einheit ist die **Wattsekunde (Ws)**, auch Joule genannt. Im Alltag nimmt man die **Wattstunde (Wh)** oder die **Kilowattstunde (kWh)**.

- 1 Wh = 3 600 Ws
- 1 kWh = 1 000 Wh

!!! example "Beispiel"
    Ein Funkgerät nimmt 60 W auf und läuft 2 Stunden.

    W = 60 · 2 = **120 Wh**

## Mini-Übung

1. An einem Widerstand von 6 Ω liegen 12 V. Wie gross ist der Strom?
2. Durch einen Widerstand von 100 Ω fliesst 0,5 A. Wie gross ist die Spannung?
3. An einem Gerät liegen 230 V, es fliessen 2 A. Wie gross ist der Widerstand?
4. Ein Gerät nimmt bei 12 V einen Strom von 2 A auf. Wie gross ist die Leistung?
5. Ein Gerät mit 60 W läuft an 12 V. Wie gross ist der Strom?
6. Durch einen Widerstand von 50 Ω fliessen 2 A. Wie gross ist die Leistung?
7. Ein Gerät nimmt 60 W auf und läuft 3 Stunden. Wie viel Energie ist das?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | I = 12 / 6 = 2 A |
    | 2 | U = 100 · 0,5 = 50 V |
    | 3 | R = 230 / 2 = 115 Ω |
    | 4 | P = 12 · 2 = 24 W |
    | 5 | I = 60 / 12 = 5 A |
    | 6 | P = 2² · 50 = 200 W |
    | 7 | W = 60 · 3 = 180 Wh |

## Das Wichtigste in 3 Sätzen

- Ohmsches Gesetz: U = R · I, umgestellt I = U / R und R = U / I.
- Leistung: P = U · I, die Einheit ist Watt.
- Mit dem Formeldreieck stellst du Formeln sicher um.

Zum Üben gibt es das [Übungsblatt zu Spannung, Strom, Widerstand und Leistung](../../technik/uebungsblatt-spannung-strom-widerstand-leistung.md).

**Weiter:** [Lektion 6: Reihen- und Parallelschaltung](06-reihen-und-parallelschaltung.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
