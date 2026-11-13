---
description: "Messen im Amateurfunk: Multimeter, Messfehler, Oszilloskop und Spektrumanalysator, einfach erklärt, mit Übungen für HB3."
---

# Lektion 24: Messen

!!! abstract "Das lernst du in dieser Lektion"
    - Spannung, Strom und Widerstand richtig zu messen
    - Die wichtigsten Messgeräte im Funkbetrieb zu kennen
    - Typische Fehler zu vermeiden

*Dauer: etwa 30 Minuten. Voraussetzung: [Lektion 23](23-ausbreitung.md).*

## Das Multimeter

Das **Multimeter** misst Spannung, Strom und Widerstand. Es hat einen Wahlschalter für Grösse und **Messbereich** und zwei Buchsen für die Messleitungen.

<div class="grafik" markdown="0"><svg style="width:320px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Strommesser in Reihe, Spannungsmesser parallel zum Widerstand"><line stroke="currentColor" stroke-width="2" x1="30" x2="136" y1="30" y2="30"></line><line stroke="currentColor" stroke-width="2" x1="164" x2="270" y1="30" y2="30"></line><circle cx="150" cy="30" r="14" fill="none" stroke="currentColor" stroke-width="2"></circle><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="700" x="150" y="35">A</text><line stroke="currentColor" stroke-width="2" x1="30" x2="30" y1="30" y2="70"></line><line stroke="currentColor" stroke-width="3" x1="20" x2="40" y1="70" y2="70"></line><line stroke="currentColor" stroke-width="3" x1="24" x2="36" y1="80" y2="80"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="30" y1="80" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="30" x2="270" y1="140" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="270" x2="270" y1="30" y2="60"></line><rect x="262" y="60" width="16" height="50" fill="none" stroke="currentColor" stroke-width="2"></rect><line stroke="currentColor" stroke-width="2" x1="270" x2="270" y1="110" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="270" x2="295" y1="40" y2="40"></line><line stroke="currentColor" stroke-width="2" x1="295" x2="295" y1="40" y2="72"></line><circle cx="295" cy="85" r="13" fill="none" stroke="currentColor" stroke-width="2"></circle><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="700" x="295" y="90">V</text><line stroke="currentColor" stroke-width="2" x1="295" x2="295" y1="98" y2="130"></line><line stroke="currentColor" stroke-width="2" x1="295" x2="270" y1="130" y2="130"></line><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="80" y="22">Strom: in Reihe</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="150" y="162">Spannung: parallel</text></svg></div>

- **Spannung** misst du **parallel** zum Bauteil. Das Voltmeter hat einen sehr hohen Innenwiderstand und stört die Schaltung kaum.
- **Strom** misst du **in Reihe**: du öffnest den Stromkreis und schaltest das Amperemeter dazwischen. Es hat einen sehr kleinen Innenwiderstand.
- **Widerstand** misst du nur an einem **spannungsfreien** Bauteil, am besten ausgebaut.

!!! warning "Wichtig"
    Ein Amperemeter darf nie parallel zu einer Spannungsquelle geschaltet werden. Es wirkt wie ein Kurzschluss, die Sicherung brennt durch oder das Gerät wird zerstört.

## Gut messen

- Zuerst die **Grösse** wählen: Gleichspannung (DC) oder Wechselspannung (AC)
- Den **Messbereich** zu gross wählen und dann herunterschalten
- Bei Wechselspannung zeigt das Multimeter meist den **Effektivwert** an (Lektion 7)
- Die Messleitungen in die richtigen Buchsen stecken

## Messfehler und Signalform

- Ein Messgerät **beeinflusst** immer die Schaltung ein wenig. Darum soll ein Voltmeter hochohmig und ein Amperemeter niederohmig sein.
- Die **Signalform** spielt eine Rolle. Die Umrechnung Û = U<sub>eff</sub> · √2 gilt nur für **sinusförmige** Signale. Einfache Multimeter zeigen bei anderen Formen falsche Werte. **True-RMS-Geräte** messen den Effektivwert auch bei anderen Formen richtig.
- Auflösung und Genauigkeit sind nicht dasselbe: Eine Anzeige mit vielen Stellen ist nicht automatisch genau.

## Weitere Messgeräte

- **HF-Wattmeter:** misst die Sendeleistung
- **SWR-Meter:** misst das Stehwellenverhältnis zwischen Sender und Antenne (Lektion 22)
- **Kunstantenne (Dummy Load):** ein Widerstand mit 50 Ω, der die Leistung in Wärme umsetzt. Du kannst damit senden und testen, ohne etwas abzustrahlen.
- **Frequenzzähler:** misst die Frequenz genau
- **Oszilloskop:** zeigt den Spannungsverlauf über der Zeit als Kurve. Damit siehst du Form, Höhe und Periodendauer eines Signals.
- **Spektrumanalysator:** zeigt ein Signal über der Frequenz. Damit erkennst du Oberwellen und Nachbarsignale.

!!! note "Merksatz"
    Spannung parallel, Strom in Reihe. Widerstand nur spannungsfrei.

!!! tip "Prüfungstipp"
    Beim Strom wird das Messgerät in die Leitung eingefügt, bei der Spannung wird es angelegt.

## Mini-Übung

1. Wie wird Spannung gemessen: parallel oder in Reihe?
2. Wie wird Strom gemessen?
3. Wann darf man einen Widerstand messen?
4. Wozu dient eine Kunstantenne?
5. Welche Grösse zeigt ein Multimeter bei Wechselspannung meist an?
6. Wie soll der Innenwiderstand eines Voltmeters sein?
7. Wie soll der Innenwiderstand eines Amperemeters sein?
8. Was zeigt ein Spektrumanalysator?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | parallel |
    | 2 | in Reihe, der Stromkreis wird aufgetrennt |
    | 3 | nur spannungsfrei, am besten ausgebaut |
    | 4 | zum Testen und Senden ohne Abstrahlung, die Leistung wird zu Wärme |
    | 5 | den Effektivwert |
    | 6 | möglichst hoch |
    | 7 | möglichst klein |
    | 8 | das Signal über der Frequenz |

## Das Wichtigste in 3 Sätzen

- Spannung misst du parallel, Strom in Reihe, Widerstand spannungsfrei.
- Ein Amperemeter nie parallel zu einer Spannungsquelle schalten.
- Wattmeter, SWR-Meter und Kunstantenne gehören zur Station.

**Weiter:** [Lektion 25: Störungen und EMV](25-stoerungen-emv.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
