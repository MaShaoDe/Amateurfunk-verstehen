---
description: "Der Kondensator: Aufbau, Kapazität, Blindwiderstand und Verhalten bei Gleich- und Wechselstrom. Mit Formeln und Übungen für HB3."
---

# Lektion 9: Der Kondensator

!!! abstract "Das lernst du in dieser Lektion"
    - Wie ein Kondensator aufgebaut ist und was er speichert
    - Wie er sich bei Gleich- und Wechselstrom verhält
    - Wie du Kapazitäten umrechnest und zusammenschaltest

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 8](08-widerstand.md).*

## Aufbau und Aufgabe

Ein **Kondensator** besteht aus zwei Metallplatten, die durch einen Isolator getrennt sind. Der Isolator heisst **Dielektrikum**. Legst du eine Spannung an, laden sich die Platten auf: Der Kondensator speichert elektrische Ladung und Energie im **elektrischen Feld** zwischen den Platten.

<div class="grafik" markdown="0"><svg style="width:300px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schaltzeichen Kondensator und Elektrolytkondensator"><line stroke="currentColor" stroke-width="2" x1="10" x2="60" y1="40" y2="40"></line><line stroke="currentColor" stroke-width="3" x1="60" x2="60" y1="20" y2="60"></line><line stroke="currentColor" stroke-width="3" x1="76" x2="76" y1="20" y2="60"></line><line stroke="currentColor" stroke-width="2" x1="76" x2="126" y1="40" y2="40"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="68" y="85">Kondensator</text><line stroke="currentColor" stroke-width="2" x1="170" x2="220" y1="40" y2="40"></line><line stroke="currentColor" stroke-width="3" x1="220" x2="220" y1="20" y2="60"></line><path d="M240,20 Q230,40 240,60" fill="none" stroke="currentColor" stroke-width="3"></path><line stroke="currentColor" stroke-width="2" x1="238" x2="290" y1="40" y2="40"></line><text fill="currentColor" font-family="sans-serif" font-size="16" text-anchor="middle" font-weight="700" x="205" y="30">+</text><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="240" y="85">Elko (gepolt)</text></svg></div>

Die **Kapazität** gibt an, wie viel Ladung er speichern kann. Das Zeichen ist **C**, die Einheit **Farad (F)**. Ein Farad ist sehr gross, darum rechnest du mit Vorsilben:

| Einheit | Zeichen | Umrechnung |
| --- | --- | --- |
| Mikrofarad | µF | 1 F = 1 000 000 µF |
| Nanofarad | nF | 1 µF = 1 000 nF |
| Picofarad | pF | 1 nF = 1 000 pF |

!!! example "Beispiel"
    470 nF in µF: 470 / 1 000 = **0,47 µF**

## Verhalten bei Gleich- und Wechselstrom

- **Gleichstrom:** Der Kondensator lädt sich auf, danach fliesst kein Strom mehr. Er **sperrt** Gleichstrom.
- **Wechselstrom:** Er wird dauernd geladen und entladen, es fliesst ein Wechselstrom. Er **lässt Wechselstrom durch**.
- Je höher die Frequenz, desto leichter kommt der Strom durch. Der Widerstand des Kondensators (Blindwiderstand) sinkt mit steigender Frequenz.

!!! note "Merksatz"
    Der Kondensator sperrt Gleichstrom und lässt Wechselstrom durch, hohe Frequenzen besser als tiefe.

### Der Blindwiderstand

Der Widerstand eines Kondensators für Wechselstrom heisst **Blindwiderstand** (kapazitive Reaktanz) X<sub>C</sub>:

$$X_C = \frac{1}{2\pi \cdot f \cdot C}$$

Je höher die Frequenz f oder die Kapazität C, desto kleiner ist X<sub>C</sub>.

!!! example "Beispiel"
    Ein Kondensator mit 100 nF bei 1 kHz: X<sub>C</sub> = 1 / (2π · 1 000 · 100 · 10<sup>-9</sup>) = **etwa 1 590 Ω**. Bei 10 kHz sind es nur noch etwa 159 Ω.

## Einsatz im Funkgerät

- **Siebung und Glättung:** ein grosser Kondensator glättet die Gleichspannung im Netzteil
- **Kopplung:** er überträgt das Signal und trennt die Gleichspannung ab
- **Abblocken:** er leitet Störungen und HF nach Masse ab
- **Schwingkreis:** zusammen mit einer Spule bestimmt er die Frequenz (Lektion 14)

## Bauformen

- **Keramik- und Folienkondensator:** für kleine und mittlere Werte, nicht gepolt
- **Elektrolytkondensator (Elko):** für grosse Werte, **gepolt**. Plus und Minus dürfen nicht vertauscht werden, sonst kann er zerstört werden.
- **Drehkondensator und Trimmer:** einstellbare Kapazität
- Jeder Kondensator hat eine **Spannungsfestigkeit**. Sie darf nicht überschritten werden.

## Zusammenschalten

Beim Kondensator ist es umgekehrt wie beim Widerstand:

- **Parallel** addieren sich die Kapazitäten: C = C1 + C2
- **In Reihe** wird die Gesamtkapazität kleiner als die kleinste Einzelkapazität

!!! example "Beispiel"
    10 nF und 22 nF parallel: C = 10 + 22 = **32 nF**

!!! tip "Prüfungstipp"
    Elko in der Aufgabe heisst: grosse Kapazität, gepolt. Die Umrechnung zwischen µF, nF und pF ist eine häufige Aufgabe. Immer in Schritten von 1 000.

## Mini-Übung

1. Rechne 2,2 µF in nF um.
2. Rechne 100 pF in nF um.
3. Zwei Kondensatoren mit 10 nF und 22 nF liegen parallel. Wie gross ist die Gesamtkapazität?
4. Was passiert mit einem Kondensator an Gleichspannung, wenn er voll geladen ist?
5. Welcher Kondensatortyp ist gepolt?
6. Wie gross ist der Blindwiderstand eines Kondensators mit 1 µF bei 1 kHz?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | 2,2 · 1 000 = 2 200 nF |
    | 2 | 100 / 1 000 = 0,1 nF |
    | 3 | 10 + 22 = 32 nF |
    | 4 | Es fliesst kein Strom mehr, er sperrt |
    | 5 | der Elektrolytkondensator (Elko) |
    | 6 | X<sub>C</sub> = 1 / (2π · 1 000 · 10<sup>-6</sup>) = etwa 159 Ω |

## Das Wichtigste in 3 Sätzen

- Der Kondensator speichert Ladung im elektrischen Feld, die Einheit ist Farad.
- Er sperrt Gleichstrom und lässt Wechselstrom durch.
- Parallel addieren sich die Kapazitäten, der Elko ist gepolt.

**Weiter:** [Lektion 10: Die Spule](10-spule.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
