# Lektion 19: Der Sender

!!! abstract "Das lernst du in dieser Lektion"
    - Den Aufbau eines Senders
    - Wozu Endstufe und Ausgangsfilter da sind
    - Was Ausgangsleistung und Wirkungsgrad bedeuten

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 18](18-empfaenger.md).*

## Das Blockschaltbild

Der Sender macht den Weg des Empfängers rückwärts.

<div class="grafik" markdown="0"><svg style="width:560px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 560 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blockschaltbild Sender vom Mikrofon bis zur Antenne"><rect x="10" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="47.0">NF-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55.0" y="61.0">Verstärker</text><line stroke="currentColor" stroke-width="2" x1="100" x2="114" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="120,50.0 112,46.0 112,54.0"></polygon><rect x="120" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="165.0" y="54.0">Modulator</text><line stroke="currentColor" stroke-width="2" x1="210" x2="224" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="230,50.0 222,46.0 222,54.0"></polygon><rect x="230" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="275.0" y="54.0">Treiber</text><line stroke="currentColor" stroke-width="2" x1="320" x2="334" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="340,50.0 332,46.0 332,54.0"></polygon><rect x="340" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="385.0" y="54.0">Endstufe</text><line stroke="currentColor" stroke-width="2" x1="430" x2="444" y1="50.0" y2="50.0"></line><polygon fill="currentColor" points="450,50.0 442,46.0 442,54.0"></polygon><rect x="450" y="30" width="90" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="495.0" y="47.0">Tiefpass-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="495.0" y="61.0">filter</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="55" y="12">Mikrofon</text><line stroke="currentColor" stroke-width="2" x1="55" x2="55" y1="16" y2="30"></line><line stroke="currentColor" stroke-width="2" x1="495" x2="495" y1="70" y2="86"></line><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="495" y="100">Antenne</text><rect x="120" y="82" width="90" height="26" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="165" y="100">Oszillator</text><line stroke="currentColor" stroke-width="2" x1="165" x2="165" y1="82" y2="70"></line></svg></div>

1. **NF-Verstärker:** verstärkt das schwache Mikrofonsignal
2. **Oszillator:** erzeugt den Träger (meist über eine PLL, Lektion 16)
3. **Modulator:** prägt dem Träger die Sprache auf (Lektion 17)
4. **Treiber:** verstärkt das Signal auf mittlere Leistung
5. **Endstufe (PA, power amplifier):** bringt die Sendeleistung auf den gewünschten Wert
6. **Tiefpassfilter:** dämpft Oberwellen, bevor das Signal zur Antenne geht

## Die Endstufe

In der Endstufe wird nicht alle zugeführte Energie zu Sendeleistung. Der Rest wird zu **Wärme**. Das Verhältnis heisst **Wirkungsgrad**:

$$\eta = \frac{P_{HF}}{P_{zu}}$$

!!! example "Beispiel"
    Eine Endstufe gibt 50 W HF ab und nimmt 100 W aus der Stromversorgung auf.

    η = 50 / 100 = 0,5 = **50 %**. Die anderen 50 W werden zu Wärme und müssen abgeführt werden.

Darum haben Endstufen Kühlkörper und oft einen Lüfter.

## Ausgangsleistung

Die Ausgangsleistung wird in Watt angegeben. Bei SSB schwankt sie mit der Sprache. Darum nennt man die **Spitzenleistung der Hüllkurve** (PEP, peak envelope power).

Wie viel Leistung du senden darfst, hängt von deiner Zulassung ab (Lektion 28).

## Oberwellen und Übersteuerung

Eine nicht ganz saubere Endstufe erzeugt **Oberwellen**. Das sind Vielfache der Sendefrequenz. Sie stören andere Funkdienste. Das **Tiefpassfilter** am Ausgang soll sie dämpfen.

Auch Übersteuerung (Lektion 15) erzeugt Verzerrungen und Oberwellen. Darum beim Sprechen die Mikrofonverstärkung nicht zu hoch einstellen.

!!! note "Merksatz"
    Der Sender erzeugt den Träger, moduliert ihn, verstärkt ihn in der Endstufe und filtert Oberwellen am Ausgang weg.

!!! tip "Prüfungstipp"
    Das Filter am Senderausgang ist ein Tiefpass. Es lässt die Sendefrequenz durch und dämpft die höheren Oberwellen.

## Mini-Übung

1. Wie lautet die Reihenfolge der Stufen im Sender?
2. Wozu dient das Filter am Senderausgang?
3. Eine Endstufe nimmt 200 W auf und gibt 100 W HF ab. Wie gross ist der Wirkungsgrad?
4. Wohin geht die nicht abgestrahlte Energie?
5. Wofür steht PEP?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | NF-Verstärker, Modulator, Treiber, Endstufe, Tiefpass (mit Oszillator als Trägerquelle) |
    | 2 | Es dämpft Oberwellen (Tiefpass) |
    | 3 | 100 / 200 = 50 % |
    | 4 | in Wärme |
    | 5 | Spitzenleistung der Hüllkurve (peak envelope power) |

## Das Wichtigste in 3 Sätzen

- Der Sender erzeugt den Träger, moduliert und verstärkt ihn.
- Die Endstufe verliert einen Teil als Wärme (Wirkungsgrad).
- Das Tiefpassfilter dämpft Oberwellen.

**Weiter:** [Lektion 20: SDR, die Grundidee](20-sdr.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
