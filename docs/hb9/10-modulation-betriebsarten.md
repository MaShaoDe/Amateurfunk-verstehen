---
description: "Modulation und Betriebsarten für HB9: AM, FM, SSB, CW und digitale Verfahren mit Bandbreite, Modulationsgrad und Hub."
---

# Kapitel 10: Modulation und Betriebsarten

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, weshalb ein Hochfrequenzträger moduliert wird
- AM, SSB und FM unterscheiden können
- erklären können, was bei den verschiedenen Modulationsarten verändert wird
- Träger und Seitenbänder unterscheiden können
- USB und LSB erklären können
- den Modulationsgrad bei AM verstehen
- Frequenzhub und Modulationsindex bei FM erklären können
- die ungefähre Bandbreite von AM, SSB und FM berechnen können
- CW als Betriebsart erklären können
- grundlegende digitale Modulationsverfahren einordnen können
- Baud und bit/s unterscheiden können
- die wichtigsten Aussendungsbezeichnungen wie A1A, A3E, J3E und F3E verstehen

> **Hinweis zu HB3 und HB9:**
> Modulationsverfahren sowie analoge und digitale Signale gehören gemäss BAKOM zum Prüfungsstoff. Für HB3 sind die technischen und rechnerischen Aufgaben weniger komplex. Die Kennzeichnung **HB9 Vertiefung** dient in diesem Lehrwerk als Lernhilfe.

## Formelzeichen und Symbole

<table>
<thead>
<tr>
<th>Zeichen</th>
<th>Bedeutung</th>
<th>Einheit</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="arithmatex">\(f_T\)</span></td>
<td>Trägerfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_\mathrm{NF}\)</span></td>
<td>Niederfrequenz beziehungsweise Modulationsfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_\mathrm{NFmax}\)</span></td>
<td>höchste Modulationsfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_\mathrm{NFmin}\)</span></td>
<td>tiefste Modulationsfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(B\)</span></td>
<td>Bandbreite</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(m_\mathrm{AM}\)</span></td>
<td>AM Modulationsgrad</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U_\mathrm{mod}\)</span></td>
<td>Amplitude der Modulationsspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U_T\)</span></td>
<td>Amplitude der Trägerspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(\Delta f_T\)</span></td>
<td>Frequenzhub</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(m_\mathrm{FM}\)</span></td>
<td>FM Modulationsindex</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_D\)</span></td>
<td>Datenübertragungsrate</td>
<td>bit/s</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_S\)</span></td>
<td>Symbolrate</td>
<td>Baud</td>
</tr>
<tr>
<td><span class="arithmatex">\(n\)</span></td>
<td>Anzahl Bits pro Symbol</td>
<td>keine</td>
</tr>
</tbody>
</table>

## Der rote Faden

Ein unmodulierter Hochfrequenzträger enthält zunächst keine Sprache, Musik oder Daten.

Damit Information übertragen werden kann, wird eine Eigenschaft dieses Trägers gezielt verändert.

Das nennt man:

**Modulation**

Je nachdem, welche Eigenschaft verändert wird, entstehen unterschiedliche Modulationsarten.

| Verfahren | Was wird verändert? |
| --- | --- |
| AM | Amplitude |
| FM | Frequenz |
| PM | Phase |
| SSB | ein Seitenband eines amplitudenmodulierten Signals wird übertragen |
| CW | Träger wird ein und ausgeschaltet |
| digitale Verfahren | Amplitude, Frequenz oder Phase werden nach definierten Zuständen verändert |

## Träger und Nutzinformation

Ein Sender erzeugt eine Hochfrequenz:

**Trägerfrequenz**

Beispielsweise:

\[
f_T = 7{,}1\ \mathrm{MHz}
\]

Die Sprache aus dem Mikrofon liegt dagegen im Niederfrequenzbereich.

Typische Sprachfrequenzen eines Amateurfunkgerätes liegen ungefähr zwischen:

\[
300\ \mathrm{Hz}
\]

und:

\[
3,000\ \mathrm{Hz}
\]

Diese Niederfrequenz wird verwendet, um den Hochfrequenzträger zu modulieren.

Damit wird die Information auf ein Funksignal übertragen.

## Amplitudenmodulation AM

Bei der **Amplitudenmodulation** wird die Amplitude des Hochfrequenzträgers entsprechend dem Niederfrequenzsignal verändert.

Die Trägerfrequenz selbst bleibt dabei konstant.

Vereinfacht:

**Sprache lauter**

→ grössere Trägeramplitude

**Sprache leiser**

→ kleinere Trägeramplitude

Die Information befindet sich in der Veränderung der Hüllkurve.

## Modulationsgrad bei AM

Der Modulationsgrad beschreibt, wie stark der Träger moduliert wird.

Die BAKOM Formelsammlung verwendet:

\[
m_\mathrm{AM} = \frac{\hat U_\mathrm{mod}}{\hat U_T}
\]

Bei:

\[
m_\mathrm{AM} = 1
\]

entspricht dies:

**100 Prozent Modulation**

## Übermodulation

Wird der Modulationsgrad bei klassischer AM grösser als 100 Prozent, kann die Hüllkurve verzerrt werden.

Man spricht von:

**Übermodulation**

Die Folge können sein:

- starke Verzerrungen
- zusätzliche unerwünschte Frequenzanteile
- grössere belegte Bandbreite
- Störungen benachbarter Kanäle

Deshalb soll ein AM Sender nicht übermoduliert werden.

## Warum entstehen bei AM Seitenbänder?

Wird ein Träger mit einer Niederfrequenz moduliert, entstehen neue Frequenzanteile.

Bei einer einzelnen Modulationsfrequenz \(f_\mathrm{NF}\) entstehen:

\[
f_T + f_\mathrm{NF}
\]

und:

\[
f_T - f_\mathrm{NF}
\]

Diese nennt man:

- oberes Seitenband
- unteres Seitenband

Ein klassisches AM Signal besteht deshalb aus:

**unterem Seitenband + Träger + oberem Seitenband**

## Bandbreite von AM

Die höchste Niederfrequenz bestimmt die benötigte Bandbreite.

Die BAKOM Formelsammlung gibt an:

\[
B_\mathrm{AM} = 2 \cdot f_\mathrm{NFmax}
\]

### Beispiel

Ein Sprachsignal reicht bis:

\[
f_\mathrm{NFmax} = 3\ \mathrm{kHz}
\]

Dann:

\[
B_\mathrm{AM} = 2 \cdot 3\ \mathrm{kHz}
\]

\[
B_\mathrm{AM} = 6\ \mathrm{kHz}
\]

Eine solche AM Aussendung benötigt also ungefähr:

**6 kHz Bandbreite**

## Warum ist AM vergleichsweise ineffizient?

Beim klassischen AM Signal wird ständig Trägerleistung ausgesendet.

Zusätzlich werden zwei Seitenbänder übertragen.

Beide Seitenbänder enthalten bei normaler Sprachübertragung im Wesentlichen dieselbe Information.

Das bedeutet:

Ein grosser Teil der Sendeleistung und Bandbreite wird für Bestandteile verwendet, die nicht zwingend notwendig sind.

Daraus entstand die Einseitenbandtechnik.

## SSB, Single Sideband

SSB bedeutet:

**Single Sideband**

auf Deutsch:

**Einseitenband**

Bei SSB wird nur eines der beiden Seitenbänder übertragen.

Der Träger wird normalerweise weitgehend unterdrückt.

Dadurch benötigt SSB:

- weniger Bandbreite als AM
- weniger unnötige Trägerleistung
- keine Leistung für ein zweites redundantes Seitenband

SSB ist deshalb besonders für Kurzwellen Sprechfunk sehr geeignet.

## USB und LSB

Es gibt zwei mögliche Seitenbänder:

**USB**

Upper Sideband

oberes Seitenband

und:

**LSB**

Lower Sideband

unteres Seitenband.

Bei USB liegen die übertragenen Sprachfrequenzanteile oberhalb der unterdrückten Trägerfrequenz.

Bei LSB liegen sie unterhalb.

Beide Verfahren können dieselbe Sprachinformation übertragen.

## Bandbreite von SSB

Für SSB gibt die BAKOM Formelsammlung an:

\[
B_\mathrm{SSB} = # f_\mathrm{NFmax} = f_\mathrm{NFmin}
\]

### Beispiel

Sprachbereich:

\[
300\ \mathrm{Hz}
\]

bis:

\[
3,000\ \mathrm{Hz}
\]

Dann:

\[
B_\mathrm{SSB} = 3,000 - 300
\]

\[
B_\mathrm{SSB} = 2,700\ \mathrm{Hz}
\]

also:

**2,7 kHz**

Damit benötigt dieselbe Sprachinformation bei SSB deutlich weniger Bandbreite als bei klassischer AM.

## AM und SSB im direkten Vergleich

| Eigenschaft | AM | SSB |
| --- | --- | --- |
| Träger | vorhanden | unterdrückt |
| Seitenbänder | zwei | eines |
| Sprachbandbreite im Beispiel | 6 kHz | 2,7 kHz |
| Leistungsausnutzung | geringer | besser |
| typische Anwendung im Amateurfunk | heute eher Spezialbetrieb | besonders Kurzwelle |

## Warum klingt SSB falsch, wenn der Empfänger verstimmt ist?

Bei SSB wird der ursprüngliche Träger nicht mitgesendet.

Der Empfänger muss deshalb einen eigenen Träger zur Demodulation erzeugen.

Ist dessen Frequenz nicht korrekt eingestellt, werden auch die zurückgewonnenen Sprachfrequenzen verschoben.

Die Stimme klingt dann beispielsweise:

- zu hoch
- zu tief
- unnatürlich

Bereits einige hundert Hertz Verstimmung können deutlich hörbar sein.

## Frequenzmodulation FM

Bei der **Frequenzmodulation** bleibt die Amplitude des Trägers idealerweise konstant.

Stattdessen wird seine momentane Frequenz verändert.

Die Trägerfrequenz bewegt sich dabei um eine Mittenfrequenz herum.

Diese Frequenzänderung nennt man:

**Frequenzhub**

und schreibt:

\[
\Delta f_T
\]

## Frequenzhub

Nehmen wir eine Mittenfrequenz von:

\[
145{,}500\ \mathrm{MHz}
\]

und einen Frequenzhub von:

\[
\pm 2{,}5\ \mathrm{kHz}
\]

Dann bewegt sich die momentane Trägerfrequenz während der Modulation ungefähr zwischen:

\[
145{,}4975\ \mathrm{MHz}
\]

und:

\[
145{,}5025\ \mathrm{MHz}
\]

Die Modulationsfrequenz bestimmt dabei, **wie schnell** diese Änderung erfolgt.

Der Frequenzhub bestimmt, **wie weit** die Trägerfrequenz ausgelenkt wird.

## Drei Dinge, die man bei FM nicht verwechseln darf

| Begriff | Bedeutung |
| --- | --- |
| Trägerfrequenz | Mittenfrequenz der Aussendung |
| Modulationsfrequenz | Frequenz des übertragenen NF Signals |
| Frequenzhub | maximale Frequenzabweichung des Trägers |

## HB9 Vertiefung: FM Modulationsindex

Die BAKOM Formelsammlung verwendet:

\[
m_\mathrm{FM} = \frac{\Delta f_T}{f_\mathrm{mod}}
\]

Dabei gilt:

- \(\Delta f_T\) = Frequenzhub
- \(f_\mathrm{mod}\) = Modulationsfrequenz

Der FM Modulationsindex beschreibt somit das Verhältnis von Frequenzhub zu Modulationsfrequenz.

## FM Bandbreite nach Carson

Eine FM Aussendung erzeugt mehrere Seitenbänder.

Für die praktisch benötigte Bandbreite verwendet man näherungsweise die Carson Regel:

\[
B_\mathrm{FM} = 2 \cdot = \left( = \Delta f_T = + = f_\mathrm{NFmax} = \right)
\]

Diese Bandbreite enthält ungefähr 99 Prozent der Gesamtleistung des FM Signals.

### Beispiel

Gegeben:

\[
\Delta f_T = 2{,}5\ \mathrm{kHz}
\]

und:

\[
f_\mathrm{NFmax} = 3\ \mathrm{kHz}
\]

Dann:

\[
B_\mathrm{FM} = 2 \cdot = (2{,}5 + 3)
\]

\[
B_\mathrm{FM} = 11\ \mathrm{kHz}
\]

## Warum ist FM beliebt?

FM besitzt für Sprachfunk einige praktische Vorteile.

Insbesondere können Amplitudenstörungen im Empfänger weitgehend unterdrückt werden.

Das ist ein Grund, weshalb FM besonders verbreitet ist bei:

- VHF
- UHF
- Mobilfunkbetrieb
- Handfunkgeräten
- Relaisbetrieb

FM benötigt jedoch typischerweise mehr Bandbreite als SSB Sprachfunk.

## Capture Effekt

Bei FM kann ein deutlich stärkeres Signal ein gleichzeitig vorhandenes schwächeres Signal weitgehend verdrängen.

Dieser Effekt wird als:

**Capture Effekt**

bezeichnet.

Der Empfänger folgt dann hauptsächlich dem stärkeren Signal.

Das kann im praktischen Funkbetrieb hilfreich sein, hat aber auch zur Folge, dass ein schwächeres gleichzeitig sendendes Signal möglicherweise kaum wahrgenommen wird.

## Phasenmodulation PM

Bei der **Phasenmodulation** wird die momentane Phase des Trägers entsprechend dem Modulationssignal verändert.

FM und PM gehören beide zur Gruppe der:

**Winkelmodulation**

Sie sind mathematisch eng miteinander verwandt.

Für das grundlegende Prüfungsverständnis genügt zunächst:

**FM verändert die Frequenz.**

**PM verändert die Phase.**

## CW

CW bedeutet:

**Continuous Wave**

Im Amateurfunk bezeichnet CW üblicherweise Morsetelegrafie mit einem ein und ausgeschalteten Hochfrequenzträger.

Beim Drücken der Taste wird der Träger ausgesendet.

Beim Loslassen wird er abgeschaltet.

Die Information entsteht aus den zeitlichen Folgen von:

- Punkten
- Strichen
- Pausen

CW benötigt eine sehr geringe Bandbreite.

Deshalb kann CW auch bei sehr schwachen Signalen noch wirkungsvoll eingesetzt werden.

## Warum hört man CW als Ton?

Der ausgesendete CW Träger selbst enthält keinen hörbaren Ton.

Im Empfänger wird deshalb eine zusätzliche Frequenz erzeugt.

Durch Überlagerung entsteht im NF Bereich ein hörbarer Ton.

Dazu dient bei klassischen Empfängern der:

**BFO**

Beat Frequency Oscillator.

## Digitale Betriebsarten

Bei digitalen Betriebsarten wird die Information als diskrete Zustände übertragen.

Dabei können unterschiedliche Eigenschaften des Trägers verändert werden.

Beispiele:

- Frequenz
- Phase
- Amplitude
- Kombination mehrerer Grössen

Typische Verfahren sind:

- FSK
- AFSK
- PSK
- QAM

Im Amateurfunk werden daraus zahlreiche konkrete Betriebsarten und Protokolle gebildet.

## FSK

FSK bedeutet:

**Frequency Shift Keying**

Dabei wird zwischen verschiedenen Frequenzen umgeschaltet.

Bei einfacher binärer FSK repräsentiert beispielsweise:

- Frequenz 1 eine logische 0
- Frequenz 2 eine logische 1

RTTY kann beispielsweise mit FSK übertragen werden.

## AFSK

AFSK bedeutet:

**Audio Frequency Shift Keying**

Dabei werden zunächst verschiedene NF Töne erzeugt.

Diese modulieren anschliessend einen normalen Funkträger.

AFSK und direkte FSK können auf dem Funkkanal ähnlich erscheinen, entstehen im Sender jedoch auf unterschiedliche Weise.

## PSK

PSK bedeutet:

**Phase Shift Keying**

Hier wird die Phase des Trägers zwischen definierten Zuständen umgeschaltet.

Ein bekanntes Amateurfunkbeispiel ist PSK31.

Durch geeignete Phasenmodulation lassen sich digitale Informationen mit geringer Bandbreite übertragen.

## Bits und Symbole

Bei digitaler Übertragung muss zwischen:

**Bitrate**

und:

**Symbolrate**

unterschieden werden.

Die BAKOM Formelsammlung verwendet:

\[
R_D = R_S \cdot n
\]

Dabei gilt:

- \(R_D\) = Datenübertragungsrate in bit/s
- \(R_S\) = Symbolrate in Baud
- \(n\) = Bits pro Symbol

## Beispiel

Werden pro Symbol zwei Bits übertragen und beträgt die Symbolrate:

\[
1,200\ \mathrm{Baud}
\]

dann:

\[
R_D = 1,200 \cdot 2
\]

\[
R_D = 2,400\ \mathrm{bit/s}
\]

**Baud und bit/s sind also nicht grundsätzlich dasselbe.**

## HB9 Vertiefung: Abtasttheorem

Wird ein analoges Signal digitalisiert, muss es häufig abgetastet werden.

Die BAKOM Formelsammlung gibt das Nyquist Abtasttheorem an:

\[
f_\mathrm{abtast} = > = 2 \cdot f_\mathrm{max}
\]

Die Abtastrate muss also grösser als das Doppelte der höchsten im Signal enthaltenen Frequenz sein.

Enthält ein Signal beispielsweise Frequenzen bis:

\[
3\ \mathrm{kHz}
\]

muss die Abtastrate grösser sein als:

\[
6\ \mathrm{kHz}
\]

## Betriebsart und Modulationsart sind nicht dasselbe

Diese Begriffe werden im Alltag manchmal vermischt.

**Modulationsart**

beschreibt technisch, wie der Träger verändert wird.

Beispiele:

- AM
- FM
- PM

**Betriebsart**

beschreibt stärker die Art der Kommunikation beziehungsweise Anwendung.

Beispiele:

- SSB Sprechfunk
- CW
- RTTY
- digitale Datenübertragung
- Bildübertragung

Ein bestimmtes Kommunikationsverfahren kann technisch mit unterschiedlichen Modulationsmethoden realisiert werden.

## Aussendungsbezeichnungen

Funktechnische Aussendungen werden international mit einer standardisierten Kennzeichnung beschrieben.

Drei Zeichen beschreiben dabei wichtige Eigenschaften der Aussendung.

Das erste Zeichen bezeichnet die Modulationsart des Hauptträgers.

Beispiele:

| Zeichen | Bedeutung |
| --- | --- |
| A | Zweiseitenband AM |
| J | Einseitenband mit unterdrücktem Träger |
| F | Frequenzmodulation |
| G | Phasenmodulation |

Das zweite Zeichen beschreibt die Art des modulierenden Signals.

Das dritte Zeichen beschreibt die Art der übertragenen Information.

## Wichtige Aussendungsbezeichnungen

Für den Amateurfunk besonders hilfreich sind:

| Bezeichnung | Bedeutung |
| --- | --- |
| A1A | Morsetelegrafie mit getastetem Träger |
| A3E | AM Telefonie |
| J3E | SSB Telefonie mit unterdrücktem Träger |
| F3E | FM Telefonie |
| F1B | digitale Telegrafie mit Frequenzumtastung |
| J2B | digitale Telegrafie über SSB mit modulierendem Hilfsträger |

Die schweizerischen Prüfungsunterlagen verwenden diese Bezeichnungen ausdrücklich.

## Beispiel: J3E

Wir zerlegen:

**J**

Einseitenband, unterdrückter Träger

**3**

ein Kanal mit analoger Information

**E**

Telefonie beziehungsweise Sprache

Damit bedeutet:

**J3E = SSB Sprechfunk mit unterdrücktem Träger**

## Beispiel: F3E

**F**

Frequenzmodulation

**3**

ein analoger Informationskanal

**E**

Telefonie

Also:

**F3E = FM Sprechfunk**

## Notwendige Bandbreite in der Aussendungsbezeichnung

Vor den drei Zeichen kann zusätzlich die notwendige Bandbreite angegeben werden.

Beispielsweise:

**16K0F3E**

Dabei bedeutet:

**16K0**

notwendige Bandbreite 16,0 kHz

und:

**F3E**

FM Telefonie.

Die Bandbreitenangabe und die Modulationsbezeichnung sind also zwei unterschiedliche Informationen.

## Drei Dinge, die man nicht verwechseln darf

| Begriff | Bedeutung |
| --- | --- |
| Modulationsfrequenz | Frequenz des Nutzsignals |
| Frequenzhub | Auslenkung eines FM Trägers |
| Bandbreite | belegter Frequenzbereich der Aussendung |

Und:

| Begriff | Bedeutung |
| --- | --- |
| Modulationsart | technische Veränderung des Trägers |
| Betriebsart | Art der Funkkommunikation |
| Aussendungsbezeichnung | internationale technische Kennzeichnung |

## Welche Betriebsart braucht wie viel Bandbreite?

Eine vereinfachte Reihenfolge:

**CW**

sehr schmal

**digitale Schmalbandverfahren**

meist sehr schmal

**SSB Sprache**

ungefähr 2,7 kHz bei 300 bis 3'000 Hz NF

**AM Sprache**

ungefähr 6 kHz bei 3 kHz höchster NF

**FM Sprache**

abhängig von Frequenzhub und Modulationsfrequenz, typischerweise breiter als SSB

Damit wird klar:

> **Die Wahl der Betriebsart beeinflusst, wie viel Frequenzspektrum eine Funkverbindung benötigt.**

## Warum Bandbreite wichtig ist

Das Funkfrequenzspektrum ist begrenzt.

Je breiter ein Signal ist, desto mehr Raum benötigt es im Band.

Unnötig grosse Bandbreite kann:

- Nachbarstationen stören
- die Zahl gleichzeitig möglicher Verbindungen verringern
- unerwünschte Aussendungen verursachen

Ein technisch sauber eingestellter Sender soll deshalb nur die für seine Betriebsart notwendige Bandbreite belegen.

## Lernschema

Bei einer Prüfungsfrage zur Modulation gehe in dieser Reihenfolge vor:

1. **Welche Modulationsart ist genannt?**
2. **Was wird verändert: Amplitude, Frequenz oder Phase?**
3. **Welche NF Frequenzen sind gegeben?**
4. **Wird eine Bandbreite gesucht?**
5. **Bei FM: Ist ein Frequenzhub angegeben?**
6. **Bei AM: Wird der Modulationsgrad gesucht?**
7. **Geht es um eine Aussendungsbezeichnung wie J3E oder F3E?**
8. **Geht es um Bitrate oder Symbolrate?**

## Die wichtigsten Formeln auf einen Blick

AM Modulationsgrad:

\[
m_\mathrm{AM} = \frac{\hat U_\mathrm{mod}}{\hat U_T}
\]

AM Bandbreite:

\[
B_\mathrm{AM} = 2 \cdot f_\mathrm{NFmax}
\]

SSB Bandbreite:

\[
B_\mathrm{SSB} = # f_\mathrm{NFmax} = f_\mathrm{NFmin}
\]

FM Modulationsindex:

\[
m_\mathrm{FM} = \frac{\Delta f_T}{f_\mathrm{mod}}
\]

Carson Bandbreite:

\[
B_\mathrm{FM} = 2 \cdot = \left( = \Delta f_T = + = f_\mathrm{NFmax} = \right)
\]

Datenrate:

\[
R_D = R_S \cdot n
\]

Abtasttheorem:

\[
f_\mathrm{abtast} = > = 2 \cdot f_\mathrm{max}
\]

## Merksätze

**Modulation überträgt Information auf einen Hochfrequenzträger.**

**Bei AM wird die Amplitude verändert.**

**Bei FM wird die Frequenz verändert.**

**Bei PM wird die Phase verändert.**

**Ein klassisches AM Signal besitzt Träger und zwei Seitenbänder.**

**SSB überträgt nur ein Seitenband und unterdrückt den Träger.**

**SSB benötigt für Sprache deutlich weniger Bandbreite als AM.**

**Der Frequenzhub ist nicht dasselbe wie die Modulationsfrequenz.**

**CW benötigt sehr wenig Bandbreite.**

**Baud und bit/s sind nicht grundsätzlich dasselbe.**

**A1A bezeichnet CW, A3E AM Telefonie, J3E SSB Telefonie und F3E FM Telefonie.**

**Bandbreite und Kanalabstand sind nicht dasselbe.**

## Selbstkontrolle

Versuche die Fragen zuerst ohne Nachschlagen zu beantworten.

1. Welche Eigenschaft des Trägers verändert sich bei AM?
2. Welche Eigenschaft verändert sich bei FM?
3. Aus welchen drei Hauptbestandteilen besteht ein klassisches AM Signal?
4. Warum ist SSB effizienter als klassische AM?
5. Wie gross ist die AM Bandbreite bei einer höchsten Modulationsfrequenz von 3 kHz?
6. Wie gross ist die SSB Bandbreite bei einem Sprachbereich von 300 Hz bis 3 kHz?
7. Was bedeutet Frequenzhub?
8. Was bedeutet J3E?
9. Was bedeutet F3E?
10. Was unterscheidet Baud von bit/s?
11. Was geschieht bei CW mit dem Hochfrequenzträger?
12. Warum klingt ein SSB Signal bei falscher Empfängereinstellung verzerrt beziehungsweise zu hoch oder zu tief?

### Antworten

1. Die **Amplitude**.
2. Die **Frequenz**.
3. Unteres Seitenband, Träger und oberes Seitenband.
4. Weil nur ein Seitenband übertragen und der Träger unterdrückt wird.
5. \(B_\mathrm{AM} = 2 \cdot 3\ \mathrm{kHz} = 6\ \mathrm{kHz}\)
6. \(B_\mathrm{SSB} = 3,000 - 300 = 2,700\ \mathrm{Hz}\), also **2,7 kHz**.
7. Die maximale Frequenzabweichung des FM Trägers von seiner Mittenfrequenz.
8. SSB Telefonie mit unterdrücktem Träger.
9. FM Telefonie.
10. Baud bezeichnet Symbole pro Sekunde, bit/s die übertragenen Bits pro Sekunde.
11. Er wird entsprechend dem Morsecode ein und ausgeschaltet.
12. Weil der unterdrückte Träger im Empfänger rekonstruiert werden muss. Eine Frequenzabweichung verschiebt dadurch die wiedergewonnenen NF Frequenzen.

## Prüfungsbezug HB3 und HB9

Modulationsverfahren sowie analoge und digitale Signale gehören gemäss BAKOM ausdrücklich zu den Grundlagen der Elektro und Funktechnik.

Für HB3 und HB9 sind insbesondere wichtig:

- AM
- SSB
- FM
- CW
- Träger und Seitenbänder
- Bandbreite
- Modulationsgrad
- Frequenzhub
- USB und LSB
- grundlegende digitale Modulationsverfahren
- Aussendungsbezeichnungen

In den schweizerischen Prüfungsunterlagen finden sich für HB3 und HB9 beispielsweise Aufgaben zu:

- SSB Bandbreite
- AM Bandbreite
- Modulationsgrad
- Betriebsarten und Bandbreitenvergleich
- Frequenzabweichungen bei FM und SSB
- Aussendungsbezeichnungen wie A1A, J3E und F3E

Für HB9 kommen insbesondere die rechnerischen Zusammenhänge zu AM, FM, Datenübertragung und Abtastung vertieft hinzu.

## Navigation

[← Kapitel 9: Sender und Empfänger](09-sender-empfaenger.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 11: Elektronische Bauteile und Schaltungen →](11-elektronische-bauteile-schaltungen.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
