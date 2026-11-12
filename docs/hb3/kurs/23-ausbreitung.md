# Lektion 23: Wie sich Funkwellen ausbreiten

!!! abstract "Das lernst du in dieser Lektion"
    - Bodenwelle und Raumwelle zu unterscheiden
    - Zu wissen, was die Ionosphäre macht
    - Zu beurteilen, welches Band wann geeignet ist

*Dauer: etwa 35 Minuten. Voraussetzung: [Lektion 22](22-kabel-anpassung-swr.md).*

## Die Wege einer Funkwelle

Eine Funkwelle kann auf verschiedenen Wegen vom Sender zum Empfänger kommen.

<div class="grafik" markdown="0"><svg style="width:400px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bodenwelle am Boden und Raumwelle über die Ionosphäre"><path d="M20,150 Q200,110 380,150" fill="none" stroke="currentColor" stroke-width="2.5"></path><path d="M20,62 Q200,22 380,62" fill="none" stroke="currentColor" stroke-width="1.5"></path><polyline fill="none" points="50,144 200,40 350,144" stroke="currentColor" stroke-width="2"></polyline><polyline fill="none" points="50,150 200,128 350,150" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"></polyline><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="200" y="14">Ionosphäre</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="200" y="30"></text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="200" y="100">Raumwelle</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="200" y="172">Bodenwelle (gestrichelt)</text></svg></div>

- **Bodenwelle:** folgt der Erdoberfläche. Sie reicht nur begrenzt weit, am besten bei tiefen Frequenzen (zum Beispiel 160 m und 80 m).
- **Raumwelle:** geht schräg nach oben, wird in der **Ionosphäre** zur Erde zurückgeworfen und kommt weit entfernt wieder an. Das ist der Weg der Kurzwelle.
- **Sichtverbindung (direkte Welle):** Sender und Empfänger "sehen" sich. So breiten sich VHF und UHF aus.

## Die Ionosphäre

Die **Ionosphäre** ist eine Schicht in grosser Höhe. Sie besteht aus elektrisch geladenen Teilchen, die die Sonne erzeugt. Sie wirft Kurzwellen zur Erde zurück.

- **D-Schicht:** tief, gibt es nur am Tag, sie **dämpft** tiefe Frequenzen
- **F-Schicht:** hoch, sie **reflektiert** Kurzwellen und sorgt für die grossen Entfernungen

Ob ein Band offen ist, hängt von Tageszeit, Jahreszeit und Sonnenaktivität ab. Die Sonnenaktivität schwankt in einem Zyklus von rund 11 Jahren. Bei hoher Aktivität sind die hohen Kurzwellenbänder (zum Beispiel 10 m) offen, bei niedriger eher nicht.

Zwischen dem Ende der Bodenwelle und der Stelle, wo die Raumwelle landet, liegt eine **tote Zone** ohne Empfang.

## E-Schicht und Sporadic E

Über der D-Schicht liegt die **E-Schicht**. Sie kann Kurzwellen zur Erde zurückführen. Gelegentlich bilden sich örtlich begrenzte, stark ionisierte Bereiche, die **Sporadic E** (Es) heissen. Auf 10 m ergeben sich dadurch oft überraschend starke Verbindungen über mittlere Distanzen (**Short Skip**, meist unter etwa 1 000 km). Auch im VHF-Bereich sind dadurch ungewöhnliche Reichweiten möglich.

## Abstrahlwinkel

- **Flacher Abstrahlwinkel:** die Welle geht weit weg, gut für **DX**
- **Steiler Abstrahlwinkel:** die Welle kommt nach kurzer Strecke zurück, gut für kürzere Verbindungen

## MUF und LUF

- **MUF** (maximal nutzbare Frequenz): die höchste Frequenz, die auf einem Funkweg noch von der Ionosphäre zurückgeführt wird. Darüber geht die Welle hindurch in den Weltraum. Die MUF hängt **nicht von der Sendeleistung** ab.
- **LUF** (niedrigste nutzbare Frequenz): darunter ist die Absorption zu stark oder das Signal zu schwach.

Nutzbar ist der Bereich zwischen LUF und MUF. Tagsüber und bei hoher Sonnenaktivität liegt die MUF höher, die hohen Bänder wie 15 m und 10 m werden offen. Nachts und bei niedriger Aktivität sind die tiefen Bänder besser.

Bei einer starken Sonneneruption kann die D-Schicht plötzlich stark absorbieren, und die Kurzwelle fällt für kurze Zeit aus. Das heisst **Mögel-Dellinger-Effekt**.

## Fading

**Fading** (Schwund) ist das Schwanken der Signalstärke, obwohl sich Sender und Empfänger nicht bewegen. Ursache ist meist, dass das Signal auf mehreren Wegen mit unterschiedlicher Länge ankommt und sich die Wellen verstärken oder auslöschen.

## Besonderes auf VHF und UHF

Auf 2 m und 70 cm herrscht die direkte Ausbreitung vor. Es gibt aber besondere Erscheinungen:

- **Inversion und Tropo:** Bei einer Temperaturinversion wird die Welle zur Erde zurückgebogen. Das gibt **Überreichweiten** von mehreren hundert Kilometern.
- **Aurora:** Bei starker geomagnetischer Aktivität streuen ionisierte Bereiche VHF-Signale. Sie klingen rau und verzerrt. Das ist vor allem im Norden interessant.
- **Meteor Scatter:** Meteore hinterlassen kurzzeitig ionisierte Spuren, an denen VHF-Signale gestreut werden.
- **Scatter** allgemein heisst Streuung: ein Teil der Energie wird in eine andere Richtung gelenkt.

## Ausbreitung nach Band

| Band | Typische Ausbreitung |
| --- | --- |
| 160 m und 80 m | Tags Bodenwelle und kurze Distanzen, nachts weite Verbindungen über die Raumwelle |
| 15 m und 10 m | je nach Sonnenaktivität weltweit, sonst nur bei offenem Band |
| 2 m und 70 cm | Sichtverbindung, Reichweite etwas über den Horizont |

Auf VHF und UHF kommen **Überreichweiten** vor, zum Beispiel bei besonderen Wetterlagen. Berge, Gebäude und Wald behindern die Sichtverbindung.

!!! note "Merksatz"
    Kurzwelle geht über die Ionosphäre um die Welt. UKW braucht Sichtverbindung.

!!! tip "Prüfungstipp"
    Frage dich: ist die Frequenz hoch oder tief, Tag oder Nacht, wie weit ist die Distanz? Daraus ergibt sich meist die richtige Antwort.

## Mini-Übung

1. Welche Welle folgt der Erdoberfläche?
2. Welche Schicht reflektiert Kurzwellen zur Erde zurück?
3. Wie breiten sich 2 m und 70 cm normalerweise aus?
4. Welche Schicht gibt es nur am Tag und dämpft tiefe Frequenzen?
5. Wie lange dauert ein Sonnenzyklus ungefähr?
6. Wovon hängt die MUF nicht ab?
7. Was bringt ein flacher Abstrahlwinkel?
8. Was ist Sporadic E?
9. Was kann auf 2 m bei besonderen Wetterlagen Überreichweiten verursachen?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | die Bodenwelle |
    | 2 | die Ionosphäre, genauer die F-Schicht |
    | 3 | als Sichtverbindung |
    | 4 | die D-Schicht |
    | 5 | etwa 11 Jahre |
    | 6 | von der Sendeleistung |
    | 7 | weite Verbindungen (DX) |
    | 8 | örtlich stark ionisierte Bereiche in der E-Schicht, die Short-Skip-Verbindungen ermöglichen |
    | 9 | eine Temperaturinversion (Tropo) |

## Das Wichtigste in 3 Sätzen

- Es gibt Bodenwelle, Raumwelle und Sichtverbindung.
- Die Ionosphäre wirft Kurzwellen zur Erde zurück.
- UKW braucht Sichtverbindung, Kurzwelle kann weltweit gehen.

**Weiter:** [Lektion 24: Messen](24-messen.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
