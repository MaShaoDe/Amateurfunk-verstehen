# Lektion 11: Diode und Gleichrichtung

!!! abstract "Das lernst du in dieser Lektion"
    - Den Unterschied zwischen Leiter, Halbleiter und Isolator
    - Wie eine Diode funktioniert
    - Wie Wechselstrom in Gleichstrom umgewandelt wird

*Dauer: etwa 25 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 10](10-spule.md).*

## Leiter, Halbleiter, Isolator

- **Leiter:** lassen Strom gut durch, zum Beispiel Kupfer, Silber, Aluminium
- **Isolatoren:** lassen praktisch keinen Strom durch, zum Beispiel Kunststoff, Glas, Luft
- **Halbleiter:** liegen dazwischen, zum Beispiel Silizium und Germanium. Ihre Leitfähigkeit lässt sich gezielt steuern. Daraus werden Dioden und Transistoren gebaut.

## Die Diode

Eine **Diode** lässt den Strom nur in eine Richtung fliessen, wie ein Rückschlagventil.

<div class="grafik" markdown="0"><svg style="width:300px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schaltzeichen Diode mit Anode links und Kathode rechts"><line stroke="currentColor" stroke-width="2" x1="10" x2="100" y1="45" y2="45"></line><polygon fill="none" points="100,25 100,65 140,45" stroke="currentColor" stroke-width="2"></polygon><line stroke="currentColor" stroke-width="3" x1="140" x2="140" y1="25" y2="65"></line><line stroke="currentColor" stroke-width="2" x1="140" x2="230" y1="45" y2="45"></line><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="700" x="30" y="35">A</text><text fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="700" x="215" y="35">K</text><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="60" y="88">Anode</text><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="middle" x="190" y="88">Kathode</text></svg></div>

- **Durchlassrichtung:** Plus an der Anode, Minus an der Kathode. Die Diode leitet, sobald die Schwellenspannung erreicht ist.
- **Sperrrichtung:** Plus an der Kathode. Die Diode sperrt.
- Auf dem Bauteil markiert ein **Ring** die Kathode.

Die Schwellenspannung hängt vom Material ab:

| Diode | Schwellenspannung |
| --- | --- |
| Silizium | etwa 0,7 V |
| Germanium | etwa 0,3 V |
| Schottky | etwa 0,3 V |
| LED | etwa 2 V und mehr, je nach Farbe |

Wichtige Sonderformen:

- **LED:** leuchtet in Durchlassrichtung, braucht einen Vorwiderstand (Lektion 8)
- **Z-Diode:** wird in Sperrrichtung betrieben und hält eine Spannung konstant

## Gleichrichtung

Ein Netzgerät braucht Gleichspannung, die Steckdose liefert aber Wechselspannung. Die Diode schneidet eine Hälfte der Schwingung ab.

- **Einweggleichrichter:** 1 Diode, nur eine Halbwelle wird genutzt
- **Brückengleichrichter:** 4 Dioden, beide Halbwellen werden genutzt

Die Spannung nach dem Gleichrichter pulsiert noch. Ein Kondensator (Elko) glättet sie, mehr dazu in Lektion 13.

!!! note "Merksatz"
    Eine Diode leitet nur von der Anode zur Kathode. Damit wird Wechselstrom gleichgerichtet.

!!! tip "Prüfungstipp"
    Der Ring auf der Diode ist die Kathode. Der Pfeil im Schaltzeichen zeigt von der Anode zur Kathode, in die Durchlassrichtung.

## Mini-Übung

1. Nenne einen Leiter, einen Halbleiter und einen Isolator.
2. Wie gross ist die Schwellenspannung einer Siliziumdiode?
3. Wo liegt bei einer Diode die Kathode?
4. Wie viele Dioden hat ein Brückengleichrichter?
5. Wozu braucht eine LED einen Vorwiderstand?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | zum Beispiel Kupfer, Silizium, Glas |
    | 2 | etwa 0,7 V |
    | 3 | am Ring, am Strich im Schaltzeichen |
    | 4 | 4 |
    | 5 | er begrenzt den Strom, sonst wird die LED zerstört |

## Das Wichtigste in 3 Sätzen

- Halbleiter wie Silizium liegen zwischen Leiter und Isolator.
- Die Diode leitet nur von der Anode zur Kathode.
- Gleichrichter wandeln Wechselstrom in pulsierenden Gleichstrom um.

**Weiter:** [Lektion 12: Der Transistor](12-transistor.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
