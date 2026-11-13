---
description: "SDR, Software Defined Radio: die Grundidee, wie ein digitaler Empfänger arbeitet und worin er sich von klassischen Geräten unterscheidet."
---

# Lektion 20: SDR, die Grundidee

!!! abstract "Das lernst du in dieser Lektion"
    - Was SDR bedeutet
    - Wie sich ein SDR vom klassischen Empfänger unterscheidet
    - Welche Vor- und Nachteile SDR hat

*Dauer: etwa 20 Minuten. Voraussetzung: [Lektion 19](19-sender.md).*

## Was ist SDR?

**SDR** heisst Software Defined Radio, zu Deutsch softwaredefiniertes Funkgerät. Die Grundidee: Das Signal wird so früh wie möglich in Zahlen umgewandelt. Alles Weitere, also Filtern und Demodulieren, erledigt eine **Software**.

<div class="grafik" markdown="0"><svg style="width:500px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blockschaltbild SDR: Antenne, Wandler, Software, Lautsprecher"><rect x="5" y="25" width="100" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="54.0">Antenne</text><line stroke="currentColor" stroke-width="2" x1="105" x2="129" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="135,50.0 127,46.0 127,54.0"></polygon><rect x="135" y="25" width="100" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="185.0" y="40.0">Analog-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="185.0" y="54.0">Digital-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="185.0" y="68.0">Wandler</text><line stroke="currentColor" stroke-width="2" x1="235" x2="259" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="265,50.0 257,46.0 257,54.0"></polygon><rect x="265" y="25" width="100" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="315.0" y="47.0">Software</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="315.0" y="61.0">(Computer)</text><line stroke="currentColor" stroke-width="2" x1="365" x2="389" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="395,50.0 387,46.0 387,54.0"></polygon><rect x="395" y="25" width="100" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="445.0" y="47.0">Laut-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="445.0" y="61.0">sprecher</text></svg></div>

- Ein **Analog-Digital-Wandler** (ADC) macht aus dem Funksignal Zahlen
- Ein **Computer**, ein Prozessor oder ein programmierbarer Baustein rechnet damit
- Beim Senden geht es umgekehrt: Die Software erzeugt Zahlen, ein Digital-Analog-Wandler macht daraus das Signal

## Analog und digital im Vergleich

| | Klassischer Empfänger | SDR |
| --- | --- | --- |
| Filter | Bauteile (Spulen, Kondensatoren, Quarze) | Rechnen in der Software |
| Neue Betriebsart | andere Bauteile nötig | neue Software genügt |
| Anzeige | Skala oder Zahl | Spektrum und Wasserfall |
| Änderungen | Umbau | Softwareupdate |

## Vor- und Nachteile

Vorteile:

- sehr **flexibel**, viele Betriebsarten mit derselben Hardware
- Du siehst ein ganzes Band auf einmal (**Spektrumanzeige**)
- Filter lassen sich frei einstellen
- Updates bringen neue Funktionen

Nachteile:

- braucht Rechenleistung und oft mehr Strom
- ein sehr starkes Signal kann den Wandler übersteuern (Lektion 15)
- Software und Rechner müssen laufen

SDR gibt es als einfachen Empfangs-Stick für den Computer und als Teil moderner Funkgeräte. Wie ein ADC genau funktioniert, ist erst im HB9-Kurs ein Thema.

!!! note "Merksatz"
    Beim SDR wird das Signal früh digitalisiert, den Rest macht die Software.

!!! tip "Prüfungstipp"
    Für HB3 genügt ein Satz: SDR digitalisiert das Signal und verarbeitet es per Software statt mit Bauteilen.

## Mini-Übung

1. Wofür steht die Abkürzung SDR?
2. Welches Bauteil macht aus dem Funksignal Zahlen?
3. Wo geschieht beim SDR die Filterung?
4. Nenne einen Vorteil von SDR.
5. Nenne einen Nachteil von SDR.

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | Software Defined Radio |
    | 2 | der Analog-Digital-Wandler (ADC) |
    | 3 | in der Software |
    | 4 | zum Beispiel flexible Betriebsarten oder Spektrumanzeige |
    | 5 | zum Beispiel höherer Stromverbrauch oder Übersteuerung des Wandlers |

## Das Wichtigste in 3 Sätzen

- SDR digitalisiert das Signal und verarbeitet es per Software.
- Das bringt Flexibilität und eine Spektrumanzeige.
- Nachteile sind Rechenleistung, Stromverbrauch und Übersteuerung.

**Weiter:** [Lektion 21: Antennen](21-antennen.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
