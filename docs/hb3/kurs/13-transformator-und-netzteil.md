# Lektion 13: Transformator und Netzteil

!!! abstract "Das lernst du in dieser Lektion"
    - Wie ein Transformator Spannung und Strom umsetzt
    - Aus welchen Stufen ein Netzteil besteht
    - Den Unterschied zwischen konventionellem und Schaltnetzteil

*Dauer: etwa 30 Minuten. Du brauchst einen Taschenrechner. Voraussetzung: [Lektion 12](12-transistor.md).*

## Der Transformator

Ein **Transformator** (Trafo) besteht aus zwei Spulen auf einem gemeinsamen Eisenkern. Die **Primärwicklung** liegt an der Quelle, die **Sekundärwicklung** liefert die umgewandelte Spannung.

<div class="grafik" markdown="0"><svg style="width:300px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schaltzeichen Transformator mit Primärwicklung und Sekundärwicklung"><line stroke="currentColor" stroke-width="2" x1="20" x2="50" y1="35" y2="35"></line><path d="M50,35 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0" fill="none" stroke="currentColor" stroke-width="2"></path><line stroke="currentColor" stroke-width="2" x1="130" x2="160" y1="35" y2="35"></line><line stroke="currentColor" stroke-width="3" x1="50" x2="130" y1="55" y2="55"></line><line stroke="currentColor" stroke-width="3" x1="50" x2="130" y1="62" y2="62"></line><line stroke="currentColor" stroke-width="2" x1="20" x2="50" y1="100" y2="100"></line><path d="M50,100 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0" fill="none" stroke="currentColor" stroke-width="2"></path><line stroke="currentColor" stroke-width="2" x1="130" x2="160" y1="100" y2="100"></line><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="start" x="180" y="40">Primär (Np)</text><text fill="currentColor" font-family="sans-serif" font-size="13" text-anchor="start" x="180" y="105">Sekundär (Ns)</text></svg></div>

- Er funktioniert nur mit **Wechselspannung**. Bei Gleichspannung passiert nichts.
- Das Magnetfeld im Kern überträgt die Energie von der Primär- zur Sekundärseite.

## Übersetzungsverhältnis

Die Spannungen verhalten sich wie die Windungszahlen:

$$\frac{U_s}{U_p} = \frac{N_s}{N_p}$$

Die Ströme verhalten sich umgekehrt:

$$\frac{I_s}{I_p} = \frac{N_p}{N_s}$$

Ein idealer Trafo gibt gleich viel Leistung ab, wie er aufnimmt. Wird die Spannung kleiner, wird der Strom grösser.

!!! example "Beispiel"
    Ein Trafo hat primär 1 000 Windungen und sekundär 50 Windungen. Primär liegen 230 V an.

    U<sub>s</sub> = 230 · 50 / 1 000 = **11,5 V**

!!! example "Beispiel Strom"
    Sekundär fliessen 2 A bei 50 zu 1 000 Windungen.

    I<sub>p</sub> = 2 · 50 / 1 000 = **0,1 A**

## Das Netzteil

Ein **konventionelles Netzteil** wandelt die 230 V der Steckdose in die Gleichspannung um, die das Funkgerät braucht (oft 13,8 V):

<div class="grafik" markdown="0"><svg style="width:540px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blockschaltbild Netzteil: Transformator, Gleichrichter, Siebung, Regler"><rect x="5" y="10" width="105" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="57" y="35">Trafo</text><rect x="135" y="10" width="105" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="187" y="35">Gleichrichter</text><rect x="265" y="10" width="105" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="317" y="35">Siebung</text><rect x="395" y="10" width="105" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="447" y="35">Regler</text><line stroke="currentColor" stroke-width="2" x1="110" x2="135" y1="30" y2="30"></line><polygon fill="currentColor" points="135,30 128,26 128,34"></polygon><line stroke="currentColor" stroke-width="2" x1="240" x2="265" y1="30" y2="30"></line><polygon fill="currentColor" points="265,30 258,26 258,34"></polygon><line stroke="currentColor" stroke-width="2" x1="370" x2="395" y1="30" y2="30"></line><polygon fill="currentColor" points="395,30 388,26 388,34"></polygon><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="57" y="70">tiefe</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="57" y="84">Wechsel-</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="57" y="98">spannung</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="187" y="70">pulsierende</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="187" y="84">Gleich-</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="187" y="98">spannung</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="317" y="70">geglättete</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="317" y="84">Gleich-</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="317" y="98">spannung</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="447" y="70">stabile</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="447" y="84">Gleich-</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="447" y="98">spannung</text></svg></div>

1. **Trafo:** setzt 230 V auf eine tiefe Wechselspannung herunter und trennt vom Netz
2. **Gleichrichter:** macht daraus pulsierende Gleichspannung (Lektion 11)
3. **Siebung:** ein grosser Elko glättet die Spannung (Lektion 9)
4. **Regler:** hält die Spannung konstant, auch wenn die Last wechselt

Ein **Schaltnetzteil** arbeitet mit einer hohen Schaltfrequenz. Es ist viel kleiner und leichter und hat einen guten Wirkungsgrad. Es kann aber Störungen im Funkempfang erzeugen.

!!! warning "Vorsicht"
    Am Eingang des Netzteils liegen 230 V. Das ist lebensgefährlich. Nie am geöffneten Netzteil arbeiten, solange es am Netz hängt.

!!! note "Merksatz"
    Der Trafo setzt Wechselspannung um: mehr Windungen bedeuten mehr Spannung, aber weniger Strom.

## Mini-Übung

1. Primär 1 000 Windungen, sekundär 100 Windungen, 230 V primär. Wie gross ist die Sekundärspannung?
2. Funktioniert ein Trafo an einer Batterie?
3. Wie lautet die Reihenfolge im konventionellen Netzteil?
4. Der Trafo gibt 5 A bei 10 : 1 Windungsverhältnis (primär zu sekundär) ab. Wie gross ist der Primärstrom?
5. Welchen Vorteil hat ein Schaltnetzteil, welchen Nachteil?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | U<sub>s</sub> = 230 · 100 / 1 000 = 23 V |
    | 2 | Nein, er braucht Wechselspannung |
    | 3 | Trafo, Gleichrichter, Siebung, Regler |
    | 4 | I<sub>p</sub> = 5 / 10 = 0,5 A |
    | 5 | klein und leicht, kann aber Störungen verursachen |

## Das Wichtigste in 3 Sätzen

- Ein Trafo setzt Wechselspannung nach dem Windungsverhältnis um.
- Das konventionelle Netzteil: Trafo, Gleichrichter, Siebung, Regler.
- Das Schaltnetzteil ist klein und leicht, kann aber stören.

**Weiter:** [Lektion 14: Schwingkreis und Filter](14-schwingkreis-und-filter.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
