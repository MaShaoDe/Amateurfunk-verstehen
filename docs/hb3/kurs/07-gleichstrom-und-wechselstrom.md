# Lektion 7: Gleichstrom und Wechselstrom

!!! abstract "Das lernst du in dieser Lektion"
    - Den Unterschied zwischen Gleichstrom und Wechselstrom
    - Was Scheitelwert, Spitze-Spitze-Wert und Effektivwert bedeuten
    - Wie du zwischen diesen Werten umrechnest

*Dauer: etwa 25 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 6](06-reihen-und-parallelschaltung.md).*

## Gleichstrom

Bei **Gleichstrom** fliesst der Strom immer in dieselbe Richtung. Plus und Minus bleiben, wo sie sind. Die Spannung ändert sich nicht oder nur langsam.

Quellen sind zum Beispiel Batterien, Akkus und Netzgeräte. Auch in deinem Funkgerät arbeitet fast alles mit Gleichstrom. Kurzzeichen: **DC** (englisch direct current).

## Wechselstrom

Bei **Wechselstrom** wechselt die Richtung ständig. Plus und Minus tauschen laufend die Plätze. Die Spannung steigt, fällt auf null, wird negativ und kehrt zurück. Das gibt eine Wellenform, die **Sinuskurve**. Kurzzeichen: **AC** (englisch alternating current).

<div class="grafik" markdown="0"><svg style="width:340px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wechselspannung als Sinuskurve mit Scheitelwert, Spitze-Spitze-Wert und Periodendauer"><line stroke="currentColor" stroke-width="1.5" x1="10" x2="262" y1="80" y2="80"></line><line stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" x1="10" x2="285" y1="25" y2="25"></line><line stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" x1="10" x2="285" y1="135" y2="135"></line><polyline fill="none" points="20.0,80.0 24.0,68.6 28.0,57.6 32.0,47.7 36.0,39.1 40.0,32.4 44.0,27.7 48.0,25.3 52.0,25.3 56.0,27.7 60.0,32.4 64.0,39.1 68.0,47.7 72.0,57.6 76.0,68.6 80.0,80.0 84.0,91.4 88.0,102.4 92.0,112.3 96.0,120.9 100.0,127.6 104.0,132.3 108.0,134.7 112.0,134.7 116.0,132.3 120.0,127.6 124.0,120.9 128.0,112.3 132.0,102.4 136.0,91.4 140.0,80.0 144.0,68.6 148.0,57.6 152.0,47.7 156.0,39.1 160.0,32.4 164.0,27.7 168.0,25.3 172.0,25.3 176.0,27.7 180.0,32.4 184.0,39.1 188.0,47.7 192.0,57.6 196.0,68.6 200.0,80.0 204.0,91.4 208.0,102.4 212.0,112.3 216.0,120.9 220.0,127.6 224.0,132.3 228.0,134.7 232.0,134.7 236.0,132.3 240.0,127.6 244.0,120.9 248.0,112.3 252.0,102.4 256.0,91.4 260.0,80.0" stroke="currentColor" stroke-width="2.5"></polyline><line stroke="currentColor" stroke-width="1.5" x1="50" x2="50" y1="80" y2="26"></line><text fill="currentColor" font-family="sans-serif" font-size="14" font-weight="700" x="54" y="62">Û</text><line stroke="currentColor" stroke-width="1.5" x1="290" x2="290" y1="26" y2="134"></line><text fill="currentColor" font-family="sans-serif" font-size="14" font-weight="700" x="295" y="84">U<tspan font-size="10" dy="3">ss</tspan></text><line stroke="currentColor" stroke-width="1.5" x1="20" x2="140" y1="152" y2="152"></line><line stroke="currentColor" stroke-width="1.5" x1="20" x2="20" y1="146" y2="158"></line><line stroke="currentColor" stroke-width="1.5" x1="140" x2="140" y1="146" y2="158"></line><text fill="currentColor" font-family="sans-serif" font-size="14" font-weight="700" text-anchor="middle" x="80" y="171">T</text><text fill="currentColor" font-family="sans-serif" font-size="12" x="264" y="84">t</text></svg></div>

- **T:** die Periodendauer, eine volle Schwingung
- **Û:** der Scheitelwert (Spitzenwert), der höchste Wert vom Nullpunkt aus
- **U<sub>ss</sub>:** der Spitze-Spitze-Wert, vom tiefsten zum höchsten Punkt

Die Anzahl Schwingungen pro Sekunde ist die Frequenz in Hertz (Hz). Du kennst den Zusammenhang aus [Lektion 3](03-wellen-und-periodendauer.md):

$$f = \frac{1}{T} \qquad\qquad T = \frac{1}{f}$$

!!! example "Beispiel: das Stromnetz"
    Die Steckdose liefert 230 V bei 50 Hz.

    T = 1 / 50 = 0,02 s = **20 ms**

Auch Funksignale sind Wechselspannungen, nur mit viel höherer Frequenz.

## Die drei Spannungswerte

Eine Wechselspannung hat keinen festen Wert. Darum gibt es drei Angaben:

| Wert | Zeichen | Bedeutung |
| --- | --- | --- |
| Scheitelwert | Û | höchster Wert vom Nullpunkt aus |
| Spitze-Spitze-Wert | U<sub>ss</sub> | doppelter Scheitelwert: U<sub>ss</sub> = 2 · Û |
| Effektivwert | U<sub>eff</sub> | Gleichspannung, die gleich viel Leistung bringt |

Der **Effektivwert** ist der wichtigste. Wenn von "230 V" im Netz die Rede ist, meint man den Effektivwert. Bei der Sinuskurve gilt:

$$U_{eff} = \frac{\hat{U}}{\sqrt{2}} \approx 0{,}707 \cdot \hat{U} \qquad\qquad \hat{U} = U_{eff} \cdot \sqrt{2} \approx 1{,}414 \cdot U_{eff}$$

!!! example "Beispiel 1"
    Eine Wechselspannung hat einen Scheitelwert von 10 V.

    U<sub>eff</sub> = 0,707 · 10 = **7,07 V**. U<sub>ss</sub> = 2 · 10 = **20 V**.

!!! example "Beispiel 2"
    Die Netzspannung hat 230 V effektiv. Wie hoch ist der Scheitelwert?

    Û = 230 · 1,414 = **325 V**. Die Spitze-Spitze-Spannung beträgt rund 650 V.

!!! note "Merksatz"
    Gleichstrom hat eine feste Richtung, Wechselstrom wechselt sie. Der Effektivwert ist etwa 0,7 mal der Scheitelwert.

!!! tip "Prüfungstipp"
    Lies in der Aufgabe genau, welcher Wert gegeben ist: Scheitelwert, Spitze-Spitze oder Effektivwert. Rechne zuerst auf den Scheitelwert um, dann weiter. Ein Oszilloskop zeigt meist Spitze-Spitze an.

## Mini-Übung

1. Wie gross ist die Periodendauer bei 50 Hz?
2. Eine Wechselspannung hat einen Scheitelwert von 12 V. Wie gross ist der Effektivwert?
3. Der Effektivwert beträgt 230 V. Wie gross ist der Scheitelwert?
4. Ein Oszilloskop zeigt 20 V Spitze-Spitze. Wie gross ist der Scheitelwert?
5. Welche Stromart liefert eine Batterie?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | T = 1 / 50 = 0,02 s = 20 ms |
    | 2 | U<sub>eff</sub> = 0,707 · 12 = 8,5 V |
    | 3 | Û = 1,414 · 230 = 325 V |
    | 4 | Û = 20 / 2 = 10 V |
    | 5 | Gleichstrom |

## Das Wichtigste in 3 Sätzen

- Gleichstrom fliesst immer in eine Richtung, Wechselstrom wechselt sie ständig.
- Wechselspannung hat Scheitelwert, Spitze-Spitze-Wert und Effektivwert.
- Effektivwert = 0,707 · Scheitelwert, Spitze-Spitze = 2 · Scheitelwert.

**Weiter:** Lektion 8 (folgt).

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
