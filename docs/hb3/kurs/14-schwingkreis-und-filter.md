# Lektion 14: Schwingkreis und Filter

!!! abstract "Das lernst du in dieser Lektion"
    - Wie ein Schwingkreis aus Spule und Kondensator funktioniert
    - Was Resonanz ist
    - Die vier Filterarten und wofür man sie braucht

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 13](13-transformator-und-netzteil.md).*

## Der Schwingkreis

Ein **Schwingkreis** besteht aus einer Spule (L) und einem Kondensator (C). Die Energie pendelt hin und her: einmal steckt sie im elektrischen Feld des Kondensators, dann im Magnetfeld der Spule. Wie bei einer Schaukel geht das mit einer bestimmten Frequenz.

Diese Frequenz heisst **Resonanzfrequenz**:

$$f_0 = \frac{1}{2\pi\sqrt{L \cdot C}}$$

Du musst für HB3 vor allem wissen:

- Grösseres L oder grösseres C ergibt eine **tiefere** Resonanzfrequenz
- Kleineres L oder kleineres C ergibt eine **höhere** Resonanzfrequenz

!!! example "Beispiel"
    L = 10 µH und C = 100 pF.

    f<sub>0</sub> = 1 / (2π · √(10 · 10<sup>-6</sup> · 100 · 10<sup>-12</sup>)) ≈ 5,03 MHz

## Resonanz

Bei der Resonanzfrequenz reagiert der Schwingkreis besonders stark.

- **Reihenschwingkreis:** bei Resonanz ist sein Widerstand sehr klein, der Strom ist am grössten
- **Parallelschwingkreis:** bei Resonanz ist sein Widerstand sehr gross, der Strom durch die Zuleitung ist am kleinsten

Die **Güte** sagt, wie schmal und scharf die Resonanz ist. Ein Kreis mit hoher Güte wählt ein schmales Band aus.

## Filter

Mit Spulen und Kondensatoren lassen sich Frequenzen durchlassen oder sperren. Es gibt vier Arten:

<div class="grafik" markdown="0"><svg style="width:340px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frequenzgang von Tiefpass, Hochpass, Bandpass und Bandsperre"><g transform="translate(15,10)"><line stroke="currentColor" stroke-width="1" x1="0" x2="130" y1="65" y2="65"></line><line stroke="currentColor" stroke-width="1" x1="0" x2="0" y1="0" y2="65"></line><path d="M0,15 H60 C80,15 85,60 105,60 H130" fill="none" stroke="currentColor" stroke-width="2.5"></path><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="65" y="90">Tiefpass</text></g><g transform="translate(195,10)"><line stroke="currentColor" stroke-width="1" x1="0" x2="130" y1="65" y2="65"></line><line stroke="currentColor" stroke-width="1" x1="0" x2="0" y1="0" y2="65"></line><path d="M0,60 H25 C45,60 50,15 70,15 H130" fill="none" stroke="currentColor" stroke-width="2.5"></path><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="65" y="90">Hochpass</text></g><g transform="translate(15,125)"><line stroke="currentColor" stroke-width="1" x1="0" x2="130" y1="65" y2="65"></line><line stroke="currentColor" stroke-width="1" x1="0" x2="0" y1="0" y2="65"></line><path d="M0,60 H35 C50,60 52,15 65,15 C78,15 80,60 95,60 H130" fill="none" stroke="currentColor" stroke-width="2.5"></path><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="65" y="90">Bandpass</text></g><g transform="translate(195,125)"><line stroke="currentColor" stroke-width="1" x1="0" x2="130" y1="65" y2="65"></line><line stroke="currentColor" stroke-width="1" x1="0" x2="0" y1="0" y2="65"></line><path d="M0,15 H35 C50,15 52,60 65,60 C78,60 80,15 95,15 H130" fill="none" stroke="currentColor" stroke-width="2.5"></path><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="65" y="90">Bandsperre</text></g></svg></div>

| Filter | Wirkung | Beispiel |
| --- | --- | --- |
| Tiefpass | lässt tiefe Frequenzen durch, sperrt hohe | Oberwellenfilter am Sender |
| Hochpass | lässt hohe Frequenzen durch, sperrt tiefe | Filter gegen Netzbrummen |
| Bandpass | lässt nur ein Band durch | Abstimmung im Empfänger |
| Bandsperre | sperrt nur ein Band | Sperrkreis gegen eine Störung |

!!! note "Merksatz"
    Ein Schwingkreis wählt seine Resonanzfrequenz aus. Filter lassen Frequenzbereiche durch oder sperren sie.

!!! tip "Prüfungstipp"
    Beim Tiefpass ist der Name das Programm: er lässt Tiefes durch. Bei der Bandsperre fehlt in der Kurve ein Stück in der Mitte.

## Mini-Übung

1. Aus welchen Bauteilen besteht ein Schwingkreis?
2. Was passiert mit der Resonanzfrequenz, wenn die Kapazität grösser wird?
3. Welcher Filter lässt nur Frequenzen unterhalb einer Grenze durch?
4. Welcher Filter gehört an den Senderausgang, um Oberwellen zu dämpfen?
5. Welchen Widerstand hat ein Reihenschwingkreis bei Resonanz?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | aus einer Spule und einem Kondensator |
    | 2 | Sie wird tiefer |
    | 3 | der Tiefpass |
    | 4 | der Tiefpass |
    | 5 | einen sehr kleinen |

## Das Wichtigste in 3 Sätzen

- Ein Schwingkreis aus L und C hat eine Resonanzfrequenz.
- Mehr L oder C ergibt eine tiefere Frequenz.
- Es gibt Tiefpass, Hochpass, Bandpass und Bandsperre.

**Weiter:** [Lektion 15: Verstärker und Dezibel](15-verstaerker-und-dezibel.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
