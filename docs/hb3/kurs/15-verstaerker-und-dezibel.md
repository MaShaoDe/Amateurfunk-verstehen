# Lektion 15: Verstärker und Dezibel

!!! abstract "Das lernst du in dieser Lektion"
    - Was ein Verstärker macht
    - Wie du Verstärkung und Dämpfung in dB angibst
    - Was Übersteuerung ist und was sie anrichtet

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 14](14-schwingkreis-und-filter.md).*

## Der Verstärker

Ein **Verstärker** macht ein schwaches Signal grösser. Er braucht dazu Energie aus einer Stromversorgung. Aufbauen kann man ihn mit Transistoren (Lektion 12). Die Verstärkung ist das Verhältnis von Ausgang zu Eingang:

$$v = \frac{P_{aus}}{P_{ein}}$$

## Das Dezibel (dB)

Verhältnisse können riesig werden. Darum gibt man sie in **Dezibel (dB)** an. Das ist ein logarithmisches Mass:

$$a = 10 \cdot \log\frac{P_{aus}}{P_{ein}} \qquad\qquad a = 20 \cdot \log\frac{U_{aus}}{U_{ein}}$$

Die erste Formel gilt für **Leistungen**, die zweite für **Spannungen**. Ein positiver Wert ist eine Verstärkung, ein negativer eine **Dämpfung**.

Diese Werte solltest du auswendig kennen:

| dB | Leistungsfaktor | Spannungsfaktor |
| --- | --- | --- |
| 0 dB | 1 | 1 |
| 3 dB | 2 | etwa 1,4 |
| 6 dB | 4 | 2 |
| 10 dB | 10 | etwa 3,2 |
| 20 dB | 100 | 10 |
| 30 dB | 1 000 | etwa 32 |

Bei Dämpfung gelten dieselben Werte mit Minus: -3 dB halbiert die Leistung, -10 dB gibt ein Zehntel. Dezibel werden einfach **addiert**, wenn du Stufen hintereinander schaltest.

!!! example "Beispiel 1"
    Ein Verstärker macht aus 5 W am Eingang 50 W am Ausgang. Das ist Faktor 10, also **10 dB**.

!!! example "Beispiel 2"
    Ein Sender gibt 100 W ab. Ein Kabel dämpft um 3 dB. Am Ende kommen **50 W** an.

!!! example "Beispiel 3"
    Zwei Verstärkerstufen mit 10 dB und 6 dB: zusammen **16 dB**.

## Übersteuerung

Jeder Verstärker hat eine Grenze. Wird das Eingangssignal zu gross, kann der Ausgang nicht mehr mitfolgen. Das Signal wird abgeschnitten, es entstehen **Verzerrungen** und **Oberwellen**.

- Auf Sendung: das Signal wird breiter und stört Nachbarfrequenzen, ausserdem können Oberwellen auf andere Bänder gelangen
- Im Empfänger: ein starkes Signal übersteuert die Eingangsstufe, man hört Pfeifen, Brummen oder Geisterstationen

Gegenmittel: Eingangspegel oder Mikrofonverstärkung zurücknehmen und die Leistung nur so hoch wählen wie nötig.

!!! note "Merksatz"
    Verstärkung in dB: 3 dB ist doppelte Leistung, 10 dB ist zehnfache Leistung. Dezibel werden addiert.

!!! tip "Prüfungstipp"
    Achte, ob nach Leistung oder Spannung gefragt ist. 6 dB bedeuten vierfache Leistung, aber nur doppelte Spannung.

## Mini-Übung

1. Ein Verstärker macht aus 1 W am Eingang 100 W am Ausgang. Wie viele dB sind das?
2. Wie viel Leistung bleibt von 100 W nach 3 dB Dämpfung?
3. Wie viele dB entsprechen einer Spannungsverdopplung?
4. Zwei Stufen verstärken um 12 dB und 8 dB. Wie viele dB sind es zusammen?
5. Was passiert bei Übersteuerung eines Senders?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | Faktor 100, also 20 dB |
    | 2 | 50 W |
    | 3 | 6 dB |
    | 4 | 20 dB |
    | 5 | Das Signal wird verzerrt, es entstehen Oberwellen, das Signal wird breiter und kann stören |

## Das Wichtigste in 3 Sätzen

- Ein Verstärker macht ein Signal grösser, die Verstärkung wird in dB angegeben.
- 3 dB sind doppelte, 10 dB zehnfache Leistung, die dB werden addiert.
- Übersteuerung verzerrt das Signal und erzeugt Oberwellen.

**Weiter:** Lektion 16 (folgt).

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
