# Lektion 21: Antennen

!!! abstract "Das lernst du in dieser Lektion"
    - Was eine Antenne macht und wie Frequenz und Länge zusammenhängen
    - Dipol, Vertikalantenne und Richtantenne zu erkennen
    - Was Polarisation bedeutet

*Dauer: etwa 40 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 20](20-sdr.md).*

## Was macht eine Antenne?

Eine **Antenne** wandelt elektrischen Strom in eine elektromagnetische Welle um und umgekehrt. Beim Senden strahlt sie die Welle ab, beim Empfangen fängt sie sie auf. Dieselbe Antenne funktioniert für beide Richtungen.

## Frequenz und Antennenlänge

Die Länge einer Antenne hängt von der **Wellenlänge** ab. Du kennst die Formel aus Lektion 3:

$$\lambda = \frac{300}{f}$$

mit λ in Metern und f in Megahertz. Je höher die Frequenz, desto kürzer die Welle und desto kürzer die Antenne.

Weil die Welle im Draht etwas langsamer ist, muss eine Antenne etwa **5 % kürzer** gebaut werden als die rechnerische Länge. Dafür multiplizierst du mit 0,95. Das ist eine Faustregel für Drahtantennen, der genaue Wert hängt von Draht und Umgebung ab.

## Der Halbwellendipol

Der **Dipol** ist die wichtigste Grundantenne. Er besteht aus zwei gleich langen Stäben oder Drähten. Zusammen sind sie eine halbe Wellenlänge lang. Das Kabel wird in der Mitte angeschlossen.

<div class="grafik" markdown="0"><svg style="width:340px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Halbwellendipol: zwei Stäbe mit Einspeisung in der Mitte, Gesamtlänge halbe Wellenlänge"><line stroke="currentColor" stroke-width="4" x1="20" x2="160" y1="40" y2="40"></line><line stroke="currentColor" stroke-width="4" x1="180" x2="320" y1="40" y2="40"></line><line stroke="currentColor" stroke-width="2" x1="160" x2="160" y1="40" y2="40"></line><line stroke="currentColor" stroke-width="2" x1="165" x2="165" y1="40" y2="95"></line><line stroke="currentColor" stroke-width="2" x1="175" x2="175" y1="40" y2="95"></line><rect x="160" y="36" width="20" height="8" fill="currentColor"></rect><line stroke="currentColor" stroke-width="1" x1="20" x2="320" y1="125" y2="125"></line><line stroke="currentColor" stroke-width="1" x1="20" x2="20" y1="118" y2="132"></line><line stroke="currentColor" stroke-width="1" x1="320" x2="320" y1="118" y2="132"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="700" x="170" y="118">λ/2</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="170" y="148">Dipol, Speisung in der Mitte</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="170" y="70"></text></svg></div>

!!! example "Beispiel: Dipol für 3,7 MHz"
    λ = 300 / 3,7 = 81 m. Halbwelle: 81 / 2 = 40,5 m. Mit Verkürzung: 40,5 · 0,95 = **etwa 38,5 m** Gesamtlänge.

Ein waagrecht gespannter Dipol strahlt am stärksten **senkrecht zum Draht**. Das Strahlungsdiagramm sieht von oben wie eine Acht aus. In Richtung der Drahtenden strahlt er kaum.

### Strom, Spannung und Speisepunkt

Beim mittengespeisten Halbwellendipol liegt in der **Mitte das Strommaximum**. An den **Enden** liegt das **Spannungsmaximum**. Der Speisepunktwiderstand in der Mitte beträgt etwa **73 Ω**, oft werden 75 Ω angegeben. Das passt grob zu einem 50-Ω-System.

Ein **Faltdipol** besteht aus zwei parallelen Leitern, die an den Enden verbunden sind. Sein Speisepunktwiderstand beträgt etwa **300 Ω**. Man findet ihn oft als gespeistes Element in VHF- und UHF-Yagis.

## Die Vertikalantenne

Die **Groundplane** ist ein senkrechter Stab von einer Viertelwellenlänge. Dazu kommen **Radiale**, das sind waagrechte oder schräg nach unten laufende Drähte, die das Gegengewicht bilden. Ohne Radiale funktioniert sie schlecht.

<div class="grafik" markdown="0"><svg style="width:300px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vertikalantenne mit Radialen: Viertelwellenstrahler über Gegengewicht"><line stroke="currentColor" stroke-width="4" x1="150" x2="150" y1="20" y2="100"></line><line stroke="currentColor" stroke-width="2" x1="150" x2="80" y1="100" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="150" x2="220" y1="100" y2="140"></line><line stroke="currentColor" stroke-width="2" x1="150" x2="60" y1="100" y2="115"></line><line stroke="currentColor" stroke-width="2" x1="150" x2="240" y1="100" y2="115"></line><line stroke="currentColor" stroke-width="1" x1="100" x2="100" y1="20" y2="100"></line><line stroke="currentColor" stroke-width="1" x1="95" x2="105" y1="20" y2="20"></line><line stroke="currentColor" stroke-width="1" x1="95" x2="105" y1="100" y2="100"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="700" x="80" y="64">λ/4</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="150" y="162">Radiale</text></svg></div>

- Sie strahlt **rundum** in alle Himmelsrichtungen gleich
- Praktisch für Mobilbetrieb und Relaisverkehr
- Bei Fahrzeugantennen übernimmt die Karosserie die Rolle der Radiale

!!! example "Beispiel: Viertelwelle für 145 MHz"
    λ = 300 / 145 = 2,07 m. Viertelwelle: 2,07 / 4 = 0,52 m. Mit 0,95: **etwa 49 cm**.

## Die Richtantenne

Eine **Yagi-Antenne** hat mehrere Stäbe: einen **Reflektor** hinten, den **Strahler** in der Mitte und **Direktoren** vorn. Sie bündelt die Energie in eine Richtung. Das bringt **Gewinn** in dieser Richtung, sie muss dafür auf die Gegenstation ausgerichtet werden.

Die Hauptstrahlrichtung zeigt zu den Direktoren.

Das **Strahlungsdiagramm** zeigt, in welche Richtung eine Antenne wie stark abstrahlt:

- **Hauptkeule:** die Richtung mit der stärksten Strahlung
- **Nebenkeulen** und **Rückkeule:** unerwünschte Strahlung in andere Richtungen
- **Vor-Rück-Verhältnis:** Vergleich von Vorwärts- und Rückwärtsrichtung
- **Öffnungswinkel:** Breite der Hauptkeule zwischen den Punkten, an denen die Leistung um 3 dB gesunken ist

Weitere Richtantennen, die du kennen solltest: **HB9CV** (zwei gekoppelte Elemente), **Quad**, **Parabol- und Hornantennen** (bei sehr hohen Frequenzen) und die **Helix**. Eine **Magnetic Loop** ist eine Schleife, die mit einem Kondensator einen Schwingkreis bildet.

Der Gewinn wird in dB angegeben (Lektion 15). Bezug ist entweder der Dipol (dBd) oder ein gedachter Kugelstrahler (dBi). Es gilt: dBi = dBd + 2,15 dB.

## Polarisation

Die **Polarisation** ist die Richtung des elektrischen Feldes der Welle. Sie entspricht der Lage der Antenne: waagrecht ist **horizontal**, senkrecht ist **vertikal**.

Sende- und Empfangsantenne sollten **gleich polarisiert** sein. Sind sie um 90 Grad verdreht, kommt viel weniger Signal an. Auf UKW mit FM ist vertikale Polarisation üblich, bei SSB auf UKW eher horizontale. Neben horizontal und vertikal gibt es die **zirkulare Polarisation**, bei der sich das Feld dreht. Eine axial betriebene Helix kann zirkular polarisiert sein, das ist bei Satelliten nützlich.

!!! note "Merksatz"
    Eine halbe Welle ergibt den Dipol, eine Viertelwelle mit Radialen die Groundplane. Höhere Frequenz bedeutet kürzere Antenne.

!!! tip "Prüfungstipp"
    Rechne zuerst λ = 300 / f. Dann halbiere oder viertle. Wenn die Aufgabe eine Verkürzung nennt, multipliziere mit 0,95.

## Mini-Übung

1. Wie lang ist die Wellenlänge bei 28 MHz?
2. Wie lang ist ein Halbwellendipol (ohne Verkürzung) bei 28 MHz?
3. Welche Antenne strahlt rundum: Dipol (waagrecht) oder Groundplane?
4. Wozu dienen die Radiale an der Groundplane?
5. Was bringt eine Richtantenne?
6. Wo liegt beim Halbwellendipol das Strommaximum, wo das Spannungsmaximum?
7. Wie gross ist der Speisepunktwiderstand eines Faltdipols ungefähr?
8. Was beschreibt das Vor-Rück-Verhältnis?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | λ = 300 / 28 = 10,7 m |
    | 2 | 10,7 / 2 = 5,36 m |
    | 3 | die Groundplane |
    | 4 | sie bilden das Gegengewicht zum Stab |
    | 5 | Gewinn in einer Hauptrichtung, muss dafür ausgerichtet werden |
    | 6 | Strom in der Mitte, Spannung an den Enden |
    | 7 | etwa 300 Ω |
    | 8 | den Vergleich von Vorwärts- und Rückwärtsrichtung |

## Das Wichtigste in 3 Sätzen

- Antennenlänge hängt von der Wellenlänge ab: λ = 300 / f.
- Der Dipol ist eine halbe Welle lang, die Groundplane eine Viertelwelle mit Radialen.
- Sender und Empfänger brauchen dieselbe Polarisation.

**Weiter:** [Lektion 22: Kabel, Anpassung und SWR](22-kabel-anpassung-swr.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
