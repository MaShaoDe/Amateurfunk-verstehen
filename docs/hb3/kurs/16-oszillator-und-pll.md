---
description: "Oszillator und PLL: wie ein Funkgerät seine Frequenz erzeugt und stabil hält. Grundidee ohne Mathematik, mit Übungen für HB3."
---

# Lektion 16: Oszillator und PLL

!!! abstract "Das lernst du in dieser Lektion"
    - Was ein Oszillator macht
    - Warum Quarze für stabile Frequenzen sorgen
    - Das Grundprinzip der PLL in einem Satz

*Dauer: etwa 25 Minuten. Voraussetzung: [Lektion 15](15-verstaerker-und-dezibel.md).*

## Der Oszillator

Ein **Oszillator** erzeugt eine Wechselspannung selbst, ohne dass ein Signal hineingeht. Jeder Sender und jeder Empfänger braucht einen. Er liefert die Frequenz, auf der gesendet oder empfangen wird.

Ein Oszillator besteht aus drei Teilen:

- einem **Verstärker**
- einer **Rückkopplung**: ein Teil des Ausgangs geht zurück an den Eingang
- einem **frequenzbestimmenden Bauteil**: ein Schwingkreis aus Spule und Kondensator (Lektion 14) oder ein Quarz

## LC-Oszillator (VFO)

Beim LC-Oszillator bestimmen Spule und Kondensator die Frequenz. Mit einem Drehkondensator lässt sich die Frequenz verstellen, deshalb heisst er auch **VFO** (variable frequency oscillator, frei abstimmbarer Oszillator).

Der Nachteil: Die Frequenz **driftet**. Temperatur und Spannung verändern die Werte von L und C, und die Frequenz wandert.

## Quarzoszillator

Ein **Quarz** ist ein dünnes Plättchen aus Quarzkristall. Legt man eine Spannung an, schwingt es mechanisch, und zwar mit einer sehr genau festen Frequenz. Das nennt man den piezoelektrischen Effekt.

- Sehr **stabile** Frequenz, kaum Drift
- Die Frequenz ist **fest**, sie lässt sich nur wenig verändern
- Die Frequenz steht auf dem Gehäuse, zum Beispiel 10,000 MHz

## Die PLL

Wir wollen beides: stabile Frequenz **und** frei einstellbar. Dafür gibt es die **PLL** (phase locked loop, Phasenregelschleife).

<div class="grafik" markdown="0"><svg style="width:560px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blockschaltbild PLL: Quarz, Phasenvergleicher, Tiefpass, VCO und Teiler im Rückweg"><rect x="5" y="30" width="100" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="47.0">Quarz</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="61.0">(Referenz)</text><line stroke="currentColor" stroke-width="2" x1="105" x2="119" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="125,50.0 117,46.0 117,54.0"></polygon><rect x="125" y="30" width="100" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="175.0" y="47.0">Phasen-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="175.0" y="61.0">vergleicher</text><line stroke="currentColor" stroke-width="2" x1="225" x2="239" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="245,50.0 237,46.0 237,54.0"></polygon><rect x="245" y="30" width="100" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="295.0" y="54.0">Tiefpass</text><line stroke="currentColor" stroke-width="2" x1="345" x2="359" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="365,50.0 357,46.0 357,54.0"></polygon><rect x="365" y="30" width="100" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="415.0" y="54.0">VCO</text><line stroke="currentColor" stroke-width="2" x1="445" x2="480" y1="50" y2="50"></line><polygon fill="currentColor" points="485,50 477,46 477,54"></polygon><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="520" y="54">Ausgang</text><line stroke="currentColor" stroke-width="2" x1="415" x2="415" y1="70" y2="105"></line><line stroke="currentColor" stroke-width="2" x1="415" x2="290" y1="105" y2="105"></line><rect x="190" y="88" width="100" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="240" y="110">Teiler : N</text><line stroke="currentColor" stroke-width="2" x1="190" x2="175" y1="105" y2="105"></line><line stroke="currentColor" stroke-width="2" x1="175" x2="175" y1="105" y2="76"></line><polygon fill="currentColor" points="175,70 171,78 179,78"></polygon></svg></div>

Ein Satz zum Merken:

!!! note "Merksatz"
    Eine PLL regelt einen abstimmbaren Oszillator (VCO) so nach, dass seine Frequenz genau zur Frequenz eines Quarzes passt.

So geht das:

1. Der **VCO** ist ein Oszillator, dessen Frequenz von einer Spannung abhängt
2. Der **Teiler** teilt die VCO-Frequenz durch eine einstellbare Zahl N
3. Der **Phasenvergleicher** vergleicht dieses Signal mit dem Quarz und erzeugt eine Korrekturspannung
4. Der **Tiefpass** glättet sie, und sie steuert den VCO nach

Stellst du am Funkgerät eine neue Frequenz ein, ändert die PLL die Zahl N. Fast alle modernen Funkgeräte arbeiten so.

!!! tip "Prüfungstipp"
    Quarz bedeutet Stabilität. VFO bedeutet abstimmbar, aber mit Drift. PLL verbindet beides.

## Mini-Übung

1. Welche drei Teile hat ein Oszillator?
2. Warum driftet ein LC-Oszillator?
3. Was ist der Vorteil eines Quarzes?
4. Wofür steht die Abkürzung VCO?
5. Was erreicht eine PLL?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | Verstärker, Rückkopplung, frequenzbestimmendes Bauteil |
    | 2 | Temperatur und Spannung verändern L und C |
    | 3 | sehr stabile, genaue Frequenz |
    | 4 | spannungsgesteuerter Oszillator (voltage controlled oscillator) |
    | 5 | Sie hält einen abstimmbaren Oszillator genau auf einer Frequenz, die zum Quarz passt |

## Das Wichtigste in 3 Sätzen

- Ein Oszillator erzeugt die Frequenz selbst.
- Der Quarz ist stabil, der LC-Oszillator abstimmbar, aber driftend.
- Die PLL kombiniert beides: stabil und frei einstellbar.

**Weiter:** [Lektion 17: Modulation (AM, FM, SSB)](17-modulation.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
