---
description: "Der Transistor als Schalter und Verstärker: Aufbau, Stromverstärkung β und Grundschaltungen, einfach erklärt, mit Übungen für HB3."
---

# Lektion 12: Der Transistor

!!! abstract "Das lernst du in dieser Lektion"
    - Wie ein Transistor aufgebaut ist und wie er heisst
    - Wie er als Schalter funktioniert
    - Wie er als Verstärker funktioniert

*Dauer: etwa 25 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 11](11-diode-und-gleichrichtung.md).*

## Das Bauteil

Der **Transistor** ist ein Halbleiterbauteil mit 3 Anschlüssen. Ein kleiner Strom oder eine kleine Spannung steuert einen viel grösseren Strom.

Es gibt zwei Familien:

- **Bipolartransistor:** Anschlüsse **Basis (B)**, **Kollektor (C)** und **Emitter (E)**. Er wird durch einen kleinen **Strom** an der Basis gesteuert. Es gibt NPN und PNP.
- **Feldeffekttransistor (FET):** Anschlüsse **Gate (G)**, **Drain (D)** und **Source (S)**. Er wird durch eine **Spannung** am Gate gesteuert, praktisch ohne Strom.

<div class="grafik" markdown="0"><svg style="width:260px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schaltzeichen NPN-Transistor mit Basis, Kollektor und Emitter"><circle cx="110" cy="60" r="42" fill="none" stroke="currentColor" stroke-width="1.5"></circle><line stroke="currentColor" stroke-width="2" x1="30" x2="90" y1="60" y2="60"></line><line stroke="currentColor" stroke-width="3" x1="90" x2="90" y1="38" y2="82"></line><line stroke="currentColor" stroke-width="2" x1="90" x2="125" y1="50" y2="30"></line><line stroke="currentColor" stroke-width="2" x1="125" x2="125" y1="30" y2="5"></line><line stroke="currentColor" stroke-width="2" x1="90" x2="125" y1="70" y2="90"></line><line stroke="currentColor" stroke-width="2" x1="125" x2="125" y1="90" y2="115"></line><polygon fill="currentColor" points="120,87.5 110.5,87 114.5,80.5"></polygon><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="end" font-weight="700" x="25" y="52">B</text><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="start" font-weight="700" x="140" y="22">C</text><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="start" font-weight="700" x="140" y="110">E</text></svg></div>

## Der Transistor als Schalter

- Kein Strom an der Basis: der Transistor sperrt, zwischen Kollektor und Emitter fliesst nichts (Schalter aus).
- Genügend Strom an der Basis: der Transistor leitet voll (Schalter ein).

So schaltet ein winziger Strom ein grosses Relais oder eine Lampe.

## Der Transistor als Verstärker

Im Bereich dazwischen folgt der Kollektorstrom dem Basisstrom, aber viel grösser. Das Verhältnis ist die **Stromverstärkung** β (auch h<sub>FE</sub> genannt):

$$\beta = \frac{I_C}{I_B}$$

!!! example "Beispiel"
    Ein Transistor hat β = 100. Der Basisstrom beträgt 1 mA.

    I<sub>C</sub> = β · I<sub>B</sub> = 100 · 1 = **100 mA**

Ein schwaches Signal an der Basis erscheint so verstärkt am Kollektor. Damit arbeiten Verstärker in Empfängern und Sendern.

!!! note "Merksatz"
    Ein kleiner Basisstrom steuert einen grossen Kollektorstrom. Als Schalter ist der Transistor aus oder ein, als Verstärker liegt er dazwischen.

!!! tip "Prüfungstipp"
    Die drei Anschlüsse: Basis steuert, Kollektor und Emitter sind der Weg des grossen Stroms. Beim FET steuert das Gate, Drain und Source führen den Strom.

## Mini-Übung

1. Wie heissen die 3 Anschlüsse eines Bipolartransistors?
2. Wie heissen die 3 Anschlüsse eines FET?
3. Der Basisstrom beträgt 0,5 mA, die Stromverstärkung 200. Wie gross ist der Kollektorstrom?
4. Was macht der Transistor ohne Basisstrom?
5. Wodurch wird ein FET gesteuert?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | Basis, Kollektor, Emitter |
    | 2 | Gate, Drain, Source |
    | 3 | I<sub>C</sub> = 200 · 0,5 = 100 mA |
    | 4 | Er sperrt (Schalter aus) |
    | 5 | durch eine Spannung am Gate |

## Das Wichtigste in 3 Sätzen

- Der Transistor hat 3 Anschlüsse: Basis, Kollektor, Emitter (FET: Gate, Drain, Source).
- Als Schalter ist er aus oder ein.
- Als Verstärker steuert ein kleiner Strom einen grossen.

**Weiter:** [Lektion 13: Transformator und Netzteil](13-transformator-und-netzteil.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
