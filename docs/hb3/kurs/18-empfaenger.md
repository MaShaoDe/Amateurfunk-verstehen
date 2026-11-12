# Lektion 18: Der Empfänger

!!! abstract "Das lernst du in dieser Lektion"
    - Den Aufbau eines Überlagerungsempfängers
    - Was Mischer und Zwischenfrequenz tun
    - Was Empfindlichkeit und Selektivität bedeuten

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 17](17-modulation.md).*

## Das Blockschaltbild

Fast jeder Funkempfänger arbeitet als **Überlagerungsempfänger**, kurz **Superhet**.

<div class="grafik" markdown="0"><svg style="width:560px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blockschaltbild Überlagerungsempfänger von der Antenne bis zum Lautsprecher"><rect x="10" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="47.0">HF-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="61.0">Vorstufe</text><line stroke="currentColor" stroke-width="2" x1="100" x2="114" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="120,50.0 112,46.0 112,54.0"></polygon><rect x="120" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="165.0" y="54.0">Mischer</text><line stroke="currentColor" stroke-width="2" x1="210" x2="224" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="230,50.0 222,46.0 222,54.0"></polygon><rect x="230" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="275.0" y="47.0">ZF-Filter</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="275.0" y="61.0">und -Verst.</text><line stroke="currentColor" stroke-width="2" x1="320" x2="334" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="340,50.0 332,46.0 332,54.0"></polygon><rect x="340" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="385.0" y="54.0">Demodulator</text><line stroke="currentColor" stroke-width="2" x1="430" x2="444" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="450,50.0 442,46.0 442,54.0"></polygon><rect x="450" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="495.0" y="47.0">NF-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="495.0" y="61.0">Verstärker</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55" y="12">Antenne</text><line stroke="currentColor" stroke-width="2" x1="55" x2="55" y1="16" y2="30"></line><line stroke="currentColor" stroke-width="2" x1="495" x2="495" y1="70" y2="86"></line><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="495" y="100">Lautsprecher</text><rect x="120" y="82" width="90" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="165" y="102">Oszillator</text><line stroke="currentColor" stroke-width="2" x1="165" x2="165" y1="82" y2="70"></line></svg></div>

1. **HF-Vorstufe:** filtert und verstärkt das schwache Signal von der Antenne
2. **Mischer:** setzt die Empfangsfrequenz mithilfe des Oszillators auf eine feste Frequenz um
3. **ZF-Filter und Verstärker:** hier wird das Signal gefiltert und stark verstärkt
4. **Demodulator:** holt die NF aus dem Signal (Gegenstück zur Modulation)
5. **NF-Verstärker:** treibt den Lautsprecher

## Mischer und Zwischenfrequenz

Der Mischer überlagert zwei Frequenzen: die Empfangsfrequenz und die des Oszillators. Heraus kommen unter anderem die **Summe** und die **Differenz**. Die Differenz ist die **Zwischenfrequenz (ZF)**.

Die ZF ist **immer gleich**, egal auf welcher Frequenz du empfängst. Darum lassen sich Filter und Verstärker dafür sehr gut bauen. Übliche Werte sind zum Beispiel 455 kHz oder 10,7 MHz.

!!! example "Beispiel"
    Empfang auf 14,2 MHz, ZF = 9 MHz.

    Der Oszillator läuft auf 14,2 + 9 = **23,2 MHz**. Die Differenz 23,2 − 14,2 gibt wieder die ZF 9 MHz.

Beim Abstimmen ändert sich nur die Oszillatorfrequenz, die ZF bleibt gleich.

Es gibt aber eine zweite Frequenz, die dieselbe ZF ergibt: die **Spiegelfrequenz**. Sie liegt um die doppelte ZF über der Empfangsfrequenz, im Beispiel bei 14,2 + 18 = 32,2 MHz. Sie muss schon in der Vorstufe durch Filter unterdrückt werden.

## Empfindlichkeit und Selektivität

- **Empfindlichkeit:** wie schwach darf ein Signal sein, damit du es noch hörst? Je schwächer, desto besser.
- **Selektivität (Trennschärfe):** wie gut trennt der Empfänger ein gewünschtes Signal von Nachbarsignalen? Sie wird vor allem durch die ZF-Filter bestimmt.

Beides ist wichtig: Ein Empfänger kann sehr empfindlich sein und trotzdem im Bandsalat untergehen, wenn die Selektivität fehlt.

!!! note "Merksatz"
    Der Mischer setzt jede Empfangsfrequenz auf dieselbe Zwischenfrequenz um. Dort wird gefiltert und verstärkt.

!!! tip "Prüfungstipp"
    Die Reihenfolge im Blockschaltbild: Antenne, HF-Vorstufe, Mischer, ZF, Demodulator, NF-Verstärker, Lautsprecher.

## Mini-Übung

1. Wie lautet die Reihenfolge der Stufen im Superhet?
2. Was macht der Mischer?
3. Wie hoch läuft der Oszillator bei Empfang auf 7 MHz und ZF 9 MHz (obere Variante)?
4. Welche Eigenschaft bestimmt, wie schwache Signale noch hörbar sind?
5. Welche Eigenschaft trennt Nachbarsender?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | HF-Vorstufe, Mischer, ZF, Demodulator, NF-Verstärker |
    | 2 | Er setzt die Empfangsfrequenz auf die feste ZF um |
    | 3 | 7 + 9 = 16 MHz |
    | 4 | die Empfindlichkeit |
    | 5 | die Selektivität (Trennschärfe) |

## Das Wichtigste in 3 Sätzen

- Der Superhet mischt jede Empfangsfrequenz auf eine feste ZF.
- Die ZF-Filter geben die Selektivität.
- Empfindlichkeit heisst schwache Signale hören, Selektivität heisst Nachbarn trennen.

**Weiter:** [Lektion 19: Der Sender](19-sender.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
