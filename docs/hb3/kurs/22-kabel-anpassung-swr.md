# Lektion 22: Kabel, Anpassung und SWR

!!! abstract "Das lernst du in dieser Lektion"
    - Warum Funkgerät, Kabel und Antenne zusammenpassen müssen
    - Was 50 Ω und SWR bedeuten
    - Wie Kabeldämpfung wirkt

*Dauer: etwa 40 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 21](21-antennen.md).*

## Das Koaxialkabel

Zwischen Funkgerät und Antenne liegt meist ein **Koaxialkabel** (kurz Koax). Es besteht aus einem Innenleiter, einem Isolator, einem Geflecht als Abschirmung und einem Mantel. Das Geflecht schirmt ab, das Kabel strahlt selbst kaum.

Jedes Kabel hat einen **Wellenwiderstand**. Für Amateurfunk gilt als Standard:

!!! note "Merksatz"
    Das System hat 50 Ω: Funkgerät 50 Ω, Koaxkabel 50 Ω, Antenne 50 Ω.

Der Wellenwiderstand ist unabhängig von der Kabellänge.

## Kabeldämpfung

Jedes Kabel schluckt einen Teil der Leistung. Das heisst **Dämpfung** und wird in dB angegeben (Lektion 15).

- Die Dämpfung wächst mit der **Länge**
- Sie wächst mit der **Frequenz**: auf UKW ist sie viel höher als auf Kurzwelle
- Dünne Kabel dämpfen mehr als dicke

!!! example "Beispiel"
    Ein Kabel dämpft 3 dB. Der Sender gibt 100 W ab. An der Antenne kommen nur **50 W** an.

Darum nimmt man auf UKW kurze Kabel mit guter Qualität.

## Verkürzungsfaktor

In einem Kabel breitet sich die Welle **langsamer** aus als im freien Raum. Das Verhältnis heisst **Verkürzungsfaktor** k<sub>v</sub>. Für Koaxkabel mit Polyethylen-Isolation ist er etwa **0,66**. Die Wellenlänge im Kabel ist darum kürzer.

!!! example "Beispiel"
    Bei 14,2 MHz ist die Wellenlänge im freien Raum 300 / 14,2 = 21,1 m. Im Kabel sind es 21,1 · 0,66 = **etwa 13,9 m**.

## Symmetrisch und unsymmetrisch

- **Koaxkabel** sind **unsymmetrische** Leitungen: Innenleiter und Geflecht haben unterschiedliche Rollen.
- **Zweidrahtleitungen** (offene Leitungen) sind **symmetrisch**: Beide Leiter sind gleichwertig.

Zwischen beiden vermittelt ein **Balun**. Fehlt er, kann HF als **Mantelwelle** aussen auf dem Koaxkabel fliessen. Das Kabel strahlt dann mit und kann Störungen verursachen.

Für sehr hohe Frequenzen (Mikrowellen, GHz) gibt es **Hohlleiter**, das sind Metallrohre, in denen die Welle geführt wird.

## Anpassung

Wenn Sender, Kabel und Antenne alle 50 Ω haben, sind sie **angepasst**. Die Leistung fliesst ungehindert zur Antenne.

Hat die Antenne einen anderen Widerstand, ist sie **fehlangepasst**. Dann wird ein Teil der Leistung an der Antenne zurückgeworfen und läuft im Kabel zurück zum Sender. Das nennt man **reflektierte Leistung**.

<div class="grafik" markdown="0"><svg style="width:540px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 580 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sender, Koaxkabel mit 50 Ohm und Antenne, vorlaufende und reflektierte Leistung"><rect x="40" y="20" width="130" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="105.0" y="46.0">Sender</text><line stroke="currentColor" stroke-width="2" x1="170" x2="224" y1="42.0" y2="42.0"></line><polygon fill="currentColor" points="230,42.0 222,38.0 222,46.0"></polygon><rect x="230" y="20" width="130" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="295.0" y="39.0">Koaxkabel</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="295.0" y="53.0">50 Ω</text><line stroke="currentColor" stroke-width="2" x1="360" x2="414" y1="42.0" y2="42.0"></line><polygon fill="currentColor" points="420,42.0 412,38.0 412,46.0"></polygon><rect x="420" y="20" width="130" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="485.0" y="46.0">Antenne</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="110" y="100">vorwärts: gute Anpassung</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="380" y="100">Rest wird zurückgeworfen (reflektiert)</text></svg></div>

## Das SWR

Das **Stehwellenverhältnis (SWR)** gibt an, wie gut die Anpassung ist. Es wird als Verhältnis geschrieben, zum Beispiel 1,5 : 1.

- **SWR 1 : 1:** perfekt angepasst, keine Reflexion
- Je grösser die Zahl, desto schlechter die Anpassung

Bei einer Antenne mit reinem Wirkwiderstand lässt sich das SWR einfach berechnen. Du teilst den grösseren durch den kleineren Widerstand:

$$SWR = \frac{Z_{gross}}{Z_{klein}}$$

!!! example "Beispiel 1"
    Antenne mit 75 Ω an einem 50-Ω-System: SWR = 75 / 50 = **1,5 : 1**

!!! example "Beispiel 2"
    Antenne mit 25 Ω an einem 50-Ω-System: SWR = 50 / 25 = **2 : 1**

Aus dem SWR s folgt der **Reflexionsfaktor** r = (s − 1) / (s + 1). Die reflektierte Leistung ist r². Beide Formeln stehen in der BAKOM-Formelsammlung.

!!! example "Beispiel"
    SWR 2 : 1: r = 1 / 3. Reflektiert werden r² = 1 / 9, also **etwa 11 %** der Leistung. Bei 3 : 1 sind es etwa 25 %.

## Folgen schlechter Anpassung

- Ein Teil der Leistung erreicht die Antenne nicht
- Moderne Sender regeln die Leistung bei hohem SWR herunter, um die Endstufe zu schützen
- Das Kabel erwärmt sich zusätzlich

Bei einem SWR bis etwa 1,5 : 1 ist meist alles in Ordnung. Wichtig ist, dass du die Ursache kennst: falsche Antennenlänge, defektes Kabel oder lose Steckverbindung.

## Antennentuner und Balun

- Ein **Antennentuner** passt das System an, damit der Sender 50 Ω sieht. Er verändert aber die Antenne selbst nicht.
- Ein **Balun** verbindet eine symmetrische Antenne (zum Beispiel einen Dipol) mit einem unsymmetrischen Koaxkabel.

!!! tip "Prüfungstipp"
    Ein SWR von 1 : 1 heisst nicht automatisch, dass die Antenne gut strahlt. Es heisst nur, dass die Anpassung stimmt.

## Mini-Übung

1. Welchen Wellenwiderstand hat das übliche Amateurfunk-Koaxkabel?
2. Wie gross ist das SWR bei 100 Ω an einem 50-Ω-System?
3. Was bedeutet SWR 1 : 1?
4. Ein Kabel dämpft 3 dB. Der Sender gibt 20 W ab. Wie viel kommt an?
5. Wie wirkt sich eine höhere Frequenz auf die Kabeldämpfung aus?
6. Ein Koaxkabel hat k<sub>v</sub> = 0,66. Wie lang ist eine Wellenlänge im Kabel bei einer Wellenlänge von 10 m im freien Raum?
7. Ist ein Koaxkabel symmetrisch oder unsymmetrisch?
8. Wie viel Prozent der Leistung werden bei SWR 2 : 1 reflektiert?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | 50 Ω |
    | 2 | 100 / 50 = 2 : 1 |
    | 3 | perfekte Anpassung, keine Reflexion |
    | 4 | 10 W (3 dB halbieren die Leistung) |
    | 5 | Die Dämpfung wird grösser |
    | 6 | 10 · 0,66 = 6,6 m |
    | 7 | unsymmetrisch |
    | 8 | etwa 11 % |

## Das Wichtigste in 3 Sätzen

- Sender, Kabel und Antenne haben im Amateurfunk 50 Ω.
- Das SWR zeigt, wie gut die Anpassung ist, 1 : 1 ist ideal.
- Kabel dämpfen, mehr bei hoher Frequenz und grosser Länge.

**Weiter:** [Lektion 23: Wie sich Funkwellen ausbreiten](23-ausbreitung.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
