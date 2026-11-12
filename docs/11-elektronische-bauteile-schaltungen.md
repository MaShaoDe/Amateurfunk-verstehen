# Kapitel 11: Elektronische Bauteile und Schaltungen

## Lernziele

Nach diesem Kapitel solltest du:

- die wichtigsten elektronischen Bauteile erkennen und ihre Aufgabe erklären können
- verstehen, wie Kondensatoren und Spulen auf Gleichstrom und Wechselstrom reagieren
- kapazitiven und induktiven Blindwiderstand berechnen können
- Reihen- und Parallelschaltungen von Kondensatoren und Spulen verstehen
- das Grundprinzip eines Transformators erklären können
- die Funktion einer Diode verstehen
- Gleichrichtung und Glättung in einem Netzgerät erklären können
- Transistoren als Verstärker und Schalter einordnen können
- die Grundfunktion eines Operationsverstärkers verstehen
- Resonanz und Schwingkreise erklären können
- Tiefpass, Hochpass, Bandpass und Sperrfilter unterscheiden können
- das Prinzip eines Oszillators erklären können
- die Grundfunktion einer PLL verstehen
- einfache digitale Logikschaltungen einordnen können
- den Unterschied zwischen analogen und digitalen Filtern grundsätzlich verstehen

> **Hinweis zu HB3 und HB9:**
> Das BAKOM verlangt Kenntnisse über elektronische Bauteile und Schaltungen für beide Ausbildungsstufen. Für HB3 sind die technischen und rechnerischen Fragestellungen weniger komplex. Abschnitte mit **HB9-Vertiefung** dienen deshalb als Lernhilfe.

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
<td><span class="arithmatex">\(R\)</span></td>
<td>Widerstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(C\)</span></td>
<td>Kapazität</td>
<td>F</td>
</tr>
<tr>
<td><span class="arithmatex">\(L\)</span></td>
<td>Induktivität</td>
<td>H</td>
</tr>
<tr>
<td><span class="arithmatex">\(X_C\)</span></td>
<td>kapazitiver Blindwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(X_L\)</span></td>
<td>induktiver Blindwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(f\)</span></td>
<td>Frequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_0\)</span></td>
<td>Resonanzfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_g\)</span></td>
<td>Grenzfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(Q\)</span></td>
<td>Güte eines Schwingkreises</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(B\)</span></td>
<td>Bandbreite</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(N_P\)</span></td>
<td>Windungszahl Primärwicklung</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(N_S\)</span></td>
<td>Windungszahl Sekundärwicklung</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_P\)</span></td>
<td>Primärspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_S\)</span></td>
<td>Sekundärspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(I_P\)</span></td>
<td>Primärstrom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(I_S\)</span></td>
<td>Sekundärstrom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(I_B\)</span></td>
<td>Basisstrom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(I_C\)</span></td>
<td>Kollektorstrom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(I_E\)</span></td>
<td>Emitterstrom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(\beta\)</span></td>
<td>Stromverstärkung eines Transistors</td>
<td>keine</td>
</tr>
</tbody>
</table>

## Der rote Faden

Elektronische Schaltungen bestehen aus wenigen Grundbausteinen, die immer wieder miteinander kombiniert werden.

Man kann ihre Aufgaben vereinfacht in fünf Gruppen einteilen:

**Widerstände**

→ begrenzen und verteilen Ströme und Spannungen

**Kondensatoren und Spulen**

→ speichern Energie und reagieren abhängig von der Frequenz

**Dioden**

→ lassen Strom bevorzugt in einer Richtung fliessen

**Transistoren und Operationsverstärker**

→ verstärken oder schalten Signale

**Kombinationen dieser Bauteile**

→ bilden Filter, Schwingkreise, Oszillatoren, Netzgeräte und andere Funktionsgruppen

Wer diese Grundbausteine versteht, kann einen grossen Teil einer Funkgeräteschaltung bereits funktionell lesen.

## Widerstände

Widerstände wurden bereits in Kapitel 1 ausführlich behandelt.

Im Zusammenhang mit elektronischen Schaltungen sind besonders wichtig:

- Strombegrenzung
- Spannungsteilung
- Arbeitspunkteinstellung
- Gegenkopplung
- Belastung einer Schaltung
- Umwandlung elektrischer Leistung in Wärme

Ein Widerstand besitzt grundsätzlich keine absichtliche Energiespeicherung.

Er unterscheidet sich damit wesentlich von Kondensator und Spule.

## Kondensator

Ein Kondensator besteht grundsätzlich aus zwei leitenden Flächen, die durch einen Isolator voneinander getrennt sind.

Dieser Isolator wird als:

**Dielektrikum**

bezeichnet.

Wird eine Spannung angelegt, sammeln sich auf den beiden Elektroden entgegengesetzte Ladungen.

Im elektrischen Feld zwischen den Elektroden wird Energie gespeichert.

Die Fähigkeit eines Kondensators, elektrische Ladung zu speichern, bezeichnet man als:

**Kapazität**

Das Formelzeichen ist:

\[
C
\]

Die Einheit ist:

\[
\mathrm{F}
\]

Farad.

In elektronischen Schaltungen kommen meist wesentlich kleinere Werte vor:

- \(\mathrm{\mu F}\) Mikrofarad
- \(\mathrm{nF}\) Nanofarad
- \(\mathrm{pF}\) Pikofarad

## Kondensator bei Gleichspannung

Wird ein ungeladener Kondensator an eine Gleichspannungsquelle angeschlossen, fliesst zunächst ein Ladestrom.

Während der Kondensator geladen wird, steigt seine Spannung.

Ist der ideale Kondensator vollständig geladen, fliesst kein dauernder Gleichstrom mehr.

Deshalb lautet eine wichtige Lernregel:

> **Ein Kondensator sperrt im eingeschwungenen Zustand Gleichstrom.**

In realen Kondensatoren existieren allerdings geringe Leckströme.

## Kondensator bei Wechselspannung

Bei Wechselspannung ändern sich Spannung und Ladungszustand ständig.

Der Kondensator wird fortlaufend geladen und entladen.

Dadurch kann ein Wechselstrom im Stromkreis fliessen.

Wie stark der Kondensator den Wechselstrom behindert, beschreibt der:

**kapazitive Blindwiderstand**

\[
X_C
\]

## Kapazitiver Blindwiderstand

Es gilt:

\[
X_C = \frac{1}{2 \cdot \pi \cdot f \cdot C}
\]

Daraus folgt:

**Je höher die Frequenz, desto kleiner \(X_C\).**

Und:

**Je grösser die Kapazität, desto kleiner \(X_C\).**

Ein Kondensator lässt hohe Frequenzen deshalb leichter passieren als tiefe Frequenzen.

## Beispiel Kondensator

Gegeben:

\[
C = 100\ \mathrm{nF}
\]

und:

\[
f = 1\ \mathrm{kHz}
\]

Dann:

\[
X_C = \frac{1}{2 \cdot \pi \cdot 1,000 \cdot 100 \times 10^{-9}}
\]

\[
X_C
\approx
1,590\ \Omega
\]

Bei 10 kHz wäre der Blindwiderstand nur noch ungefähr:

\[
159\ \Omega
\]

Die Frequenz wurde verzehnfacht, der Blindwiderstand wurde auf ein Zehntel reduziert.

## Anwendungen von Kondensatoren

Kondensatoren werden beispielsweise verwendet für:

- Kopplung von Wechselspannung zwischen Verstärkerstufen
- Unterdrückung beziehungsweise Ableitung unerwünschter Hochfrequenz
- Glättung von Gleichspannungen
- Zeitglieder
- Filter
- Schwingkreise
- Abstimmung von Empfängern und Sendern

Ein **Drehkondensator** besitzt eine veränderbare Kapazität und kann beispielsweise zur Abstimmung eines Schwingkreises verwendet werden.

## Reihen- und Parallelschaltung von Kondensatoren

Bei Parallelschaltung addieren sich die Kapazitäten:

\[
C_G = C_1 + C_2 + C_3 + \ldots
\]

Bei Reihenschaltung gilt:

\[
C_G = \frac{1} = { = \frac{1}{C_1} = + = \frac{1}{C_2} = + = \frac{1}{C_3} = + = \ldots = }
\]

Das Verhalten ist damit genau umgekehrt zur Reihen- und Parallelschaltung von Widerständen.

## Merkhilfe Kondensator

**Parallel**

→ mehr wirksame Plattenfläche

→ grössere Kapazität

**Serie**

→ elektrisch grösserer wirksamer Abstand

→ kleinere Kapazität

## Elektrolytkondensatoren

Elektrolytkondensatoren ermöglichen grosse Kapazitäten auf relativ kleinem Raum.

Viele Bauformen sind polarisiert.

Das bedeutet:

- Plusanschluss beachten
- Minusanschluss beachten

Eine falsche Polung kann den Kondensator beschädigen.

Elektrolytkondensatoren werden häufig verwendet für:

- Netzteilglättung
- Energiespeicherung
- Entkopplung

Für Hochfrequenz sind je nach Frequenz und Anwendung andere Kondensatorbauarten besser geeignet.

## Die Spule

Eine Spule besteht aus einem Leiter, der in mehreren Windungen angeordnet ist.

Fliesst Strom durch die Spule, entsteht ein Magnetfeld.

In diesem Magnetfeld wird Energie gespeichert.

Die Fähigkeit einer Spule, Änderungen des Stromes entgegenzuwirken, bezeichnet man als:

**Induktivität**

Das Formelzeichen ist:

\[
L
\]

Die Einheit ist:

\[
\mathrm{H}
\]

Henry.

Typische Werte in der Funktechnik liegen häufig im Bereich:

- mH
- µH
- nH

## Spule bei Gleichstrom

Bei einem idealen Gleichstrom, der sich nicht mehr verändert, besitzt eine ideale Spule keinen induktiven Blindwiderstand.

In einer realen Spule verbleibt der ohmsche Widerstand des Wicklungsdrahtes.

Bei einer Stromänderung entsteht dagegen eine Selbstinduktionsspannung, die der Stromänderung entgegenwirkt.

Die Spule versucht damit vereinfacht gesagt, eine schnelle Änderung des Stromes zu verhindern.

## Spule bei Wechselstrom

Bei Wechselstrom ändert sich der Strom ständig.

Dadurch entsteht fortlaufend Selbstinduktion.

Die Spule stellt dem Wechselstrom einen:

**induktiven Blindwiderstand**

entgegen.

Er wird mit:

\[
X_L
\]

bezeichnet.

## Induktiver Blindwiderstand

Es gilt:

\[
X_L = 2 \cdot \pi \cdot f \cdot L
\]

Daraus folgt:

**Je höher die Frequenz, desto grösser \(X_L\).**

Und:

**Je grösser die Induktivität, desto grösser \(X_L\).**

Die Spule verhält sich damit bezüglich der Frequenz genau entgegengesetzt zum Kondensator.

## Kondensator und Spule im Vergleich

| Frequenz steigt | Kondensator | Spule |
| --- | --- | --- |
| Blindwiderstand | wird kleiner | wird grösser |
| hohe Frequenzen | werden leichter durchgelassen | werden stärker behindert |
| gespeicherte Energie | elektrisches Feld | magnetisches Feld |

Das ist eine der wichtigsten Grundlagen für Filter und Schwingkreise.

## Anwendungen von Spulen

Spulen werden unter anderem verwendet als:

- Drosseln
- Filter
- Schwingkreisspulen
- Transformatoren
- HF-Übertrager
- Entstördrosseln
- Antennenverlängerungsspulen

Eine Drossel soll bestimmte Wechselstromanteile behindern, während Gleichstrom beziehungsweise tiefere Frequenzen passieren können.

## Reihen- und Parallelschaltung von Spulen

Für nicht magnetisch miteinander gekoppelte Spulen gilt in Serie:

\[
L_G = L_1 + L_2 + L_3 + \ldots
\]

Bei Parallelschaltung gilt:

\[
L_G = \frac{1} = { = \frac{1}{L_1} = + = \frac{1}{L_2} = + = \frac{1}{L_3} = + = \ldots = }
\]

Damit verhalten sich ungekoppelte Spulen bei der Kombination ähnlich wie Widerstände.

## Drei Dinge, die man nicht verwechseln darf

<table>
<thead>
<tr>
<th>Bauteil</th>
<th>speichert Energie im</th>
<th>Verhalten bei steigender Frequenz</th>
</tr>
</thead>
<tbody>
<tr>
<td>Widerstand</td>
<td>nicht gezielt</td>
<td>grundsätzlich frequenzunabhängig im Idealmodell</td>
</tr>
<tr>
<td>Kondensator</td>
<td>elektrischen Feld</td>
<td><span class="arithmatex">\(X_C\)</span> sinkt</td>
</tr>
<tr>
<td>Spule</td>
<td>magnetischen Feld</td>
<td><span class="arithmatex">\(X_L\)</span> steigt</td>
</tr>
</tbody>
</table>

## Transformator

Ein Transformator besteht grundsätzlich aus mindestens zwei magnetisch gekoppelten Wicklungen.

Diese bezeichnet man als:

- Primärwicklung
- Sekundärwicklung

Ein Wechselstrom in der Primärwicklung erzeugt ein sich veränderndes Magnetfeld.

Dieses Magnetfeld induziert in der Sekundärwicklung eine Spannung.

Damit kann elektrische Energie übertragen werden, ohne dass zwischen den Wicklungen zwingend eine direkte elektrische Verbindung bestehen muss.

## Übersetzungsverhältnis

Für den idealisierten Transformator gilt:

\[
\frac{N_P}{N_S} = \frac{U_P}{U_S} = \frac{I_S}{I_P}
\]

Damit bestimmt das Verhältnis der Windungszahlen das Spannungsverhältnis.

Hat die Primärwicklung beispielsweise doppelt so viele Windungen wie die Sekundärwicklung:

\[
N_P:N_S = 2:1
\]

dann gilt idealisiert:

\[
U_P:U_S = 2:1
\]

Die Sekundärspannung beträgt also die Hälfte der Primärspannung.

## Strom beim Transformator

Wird die Spannung heruntertransformiert, steigt bei idealer Leistungsübertragung entsprechend der mögliche Strom.

Deshalb ist das Stromverhältnis umgekehrt zum Spannungsverhältnis:

\[
\frac{I_S}{I_P} = \frac{N_P}{N_S}
\]

Ein Transformator erzeugt keine zusätzliche Energie.

## Transformator und Impedanz

Ein Transformator kann auch Impedanzen transformieren.

Es gilt:

\[
\frac{N_P}{N_S} = \sqrt{\frac{Z_P}{Z_S}}
\]

Das kennen wir bereits aus Kapitel 6 bei Balun und Unun.

## Netztransformator und HF-Transformator

Transformatoren können je nach Frequenz sehr unterschiedlich aufgebaut sein.

Bei 50 Hz werden häufig Eisenkerne verwendet.

In HF-Schaltungen kommen beispielsweise vor:

- Ferritkerne
- Ringkerne
- Luftübertrager
- Breitbandübertrager

Material und Bauform müssen zur verwendeten Frequenz passen.

## Diode

Eine Halbleiterdiode besitzt zwei Anschlüsse:

- Anode
- Kathode

Sie lässt Strom hauptsächlich in einer Richtung fliessen.

In:

**Durchlassrichtung**

kann Strom fliessen.

In:

**Sperrrichtung**

wird der Strom weitgehend blockiert.

Eine Diode kann deshalb als elektrisches Ventil betrachtet werden.

## Siliziumdiode

Bei einer klassischen Siliziumdiode entsteht in Durchlassrichtung typischerweise ein Spannungsabfall in der Grössenordnung von ungefähr:

\[
0{,}6\ \mathrm{V}
\]

bis:

\[
0{,}7\ \mathrm{V}
\]

Dieser Wert ist eine praktische Näherung und hängt unter anderem von Strom und Temperatur ab.

## Gleichrichtung

Eine wichtige Anwendung der Diode ist die:

**Gleichrichtung**

Eine Wechselspannung wechselt ihre Polarität.

Mit Dioden kann erreicht werden, dass der Strom durch eine Last nur noch in einer Richtung fliesst.

Man unterscheidet beispielsweise:

- Einweggleichrichtung
- Zweiweggleichrichtung
- Brückengleichrichtung

## Brückengleichrichter

Ein Brückengleichrichter verwendet vier Dioden.

Während jeder Halbwelle leiten jeweils zwei Dioden.

Dadurch wird sowohl die positive als auch die negative Halbwelle der Wechselspannung genutzt.

Am Ausgang entsteht eine pulsierende Gleichspannung.

## Glättung

Die pulsierende Gleichspannung eines Gleichrichters ist noch keine saubere Gleichspannung.

Ein grosser Kondensator kann zwischen den Spannungsspitzen Energie speichern.

Er wird deshalb als:

**Glättungskondensator**

eingesetzt.

Die Spannung wird dadurch gleichmässiger.

Die verbleibende periodische Schwankung wird als:

- Restwelligkeit
- Ripple

bezeichnet.

## Zenerdiode

Eine Zenerdiode wird gezielt in Sperrrichtung betrieben.

Ab einer definierten Zenerspannung beginnt sie zu leiten.

Dadurch kann sie beispielsweise verwendet werden für:

- Spannungsbegrenzung
- einfache Spannungsstabilisierung
- Überspannungsschutz

## Weitere Diodenarten

In der Funktechnik begegnen uns unter anderem:

**LED**

→ erzeugt Licht

**Kapazitätsdiode**

→ besitzt eine spannungsabhängige Kapazität und kann zur elektronischen Abstimmung verwendet werden

**Schottky-Diode**

→ geringe Durchlassspannung und schnelles Schaltverhalten

Für die Prüfung ist vor allem das Grundprinzip der Diode wichtig.

## Netzgeräte

Ein klassisches lineares Netzgerät kann vereinfacht aus folgenden Stufen bestehen:

**Netztransformator → Gleichrichter → Glättung → Spannungsregelung**

Der Transformator verändert die Netzspannung und sorgt bei entsprechender Bauform für galvanische Trennung.

Der Gleichrichter erzeugt eine pulsierende Gleichspannung.

Der Kondensator glättet diese Spannung.

Eine Regelschaltung stabilisiert die Ausgangsspannung.

## Linearregler

Ein linearer Spannungsregler regelt die Ausgangsspannung, indem die überschüssige elektrische Leistung im Regelbauteil weitgehend als Wärme umgesetzt wird.

Ist beispielsweise:

\[
U_E = 15\ \mathrm{V}
\]

und:

\[
U_A = 12\ \mathrm{V}
\]

bei:

\[
I = 2\ \mathrm{A}
\]

dann entstehen im Regelbauteil ungefähr:

\[
P_V = (15 - 12) \cdot 2
\]

\[
P_V = 6\ \mathrm{W}
\]

Verlustleistung.

Diese Wärme muss abgeführt werden.

## Schaltnetzteil

Ein Schaltnetzteil arbeitet anders.

Die Eingangsspannung wird mit elektronischen Schaltern schnell ein- und ausgeschaltet beziehungsweise in eine hochfrequente Signalform umgewandelt.

Dadurch können kleinere Transformatoren, Spulen und Kondensatoren verwendet werden.

Vereinfacht:

**Gleichrichtung → schnelles Schalten → Energieübertragung → erneute Gleichrichtung und Filterung → Regelung**

Schaltnetzteile können einen hohen Wirkungsgrad erreichen.

Ihre schnellen Schaltvorgänge können jedoch unerwünschte Hochfrequenzstörungen erzeugen, wenn die Filterung oder Abschirmung unzureichend ist.

Darauf gehen wir im Kapitel über EMV näher ein.

## Transistor

Ein Transistor ist ein Halbleiterbauelement, mit dem elektrische Signale:

- verstärkt
- geschaltet
- gesteuert

werden können.

Zwei grosse Transistorfamilien sind:

- Bipolartransistoren
- Feldeffekttransistoren

## Bipolartransistor

Ein Bipolartransistor besitzt drei Anschlüsse:

- Basis \(B\)
- Kollektor \(C\)
- Emitter \(E\)

Ein kleiner Basisstrom kann einen wesentlich grösseren Kollektorstrom steuern.

Damit kann der Transistor als Verstärker arbeiten.

## Strombeziehungen

Für den Gleichstromfall gilt:

\[
I_E = I_C + I_B
\]

Die Gleichstromverstärkung kann vereinfacht geschrieben werden als:

\[
B_T = \frac{I_C}{I_B}
\]

Beispielsweise:

\[
I_B = 1\ \mathrm{mA}
\]

und:

\[
I_C = 100\ \mathrm{mA}
\]

ergibt:

\[
B_T = 100
\]

## Transistor als Verstärker

Wird der Transistor in einem geeigneten Arbeitspunkt betrieben, führen kleine Änderungen am Eingang zu grösseren Änderungen am Ausgang.

Damit können beispielsweise verstärkt werden:

- Audiosignale
- Zwischenfrequenzsignale
- Hochfrequenzsignale

Der Transistor erzeugt dabei nicht selbst die zusätzliche Energie.

Die zusätzliche Ausgangsleistung stammt aus der Stromversorgung.

## Transistor als Schalter

Ein Transistor kann auch zwischen zwei Zuständen betrieben werden:

- gesperrt
- leitend

Damit eignet er sich als elektronischer Schalter.

Diese Betriebsart ist unter anderem wichtig bei:

- digitalen Schaltungen
- Schaltnetzteilen
- Senderendstufen bestimmter Bauarten
- Steuerungen

## Feldeffekttransistor

Ein Feldeffekttransistor wird über eine elektrische Spannung am:

**Gate**

gesteuert.

Weitere Anschlüsse heissen typischerweise:

- Drain
- Source

FETs besitzen im Vergleich zu Bipolartransistoren grundsätzlich eine andere Art der Ansteuerung.

Für das grundlegende Verständnis genügt:

> **Beim Bipolartransistor wird der Ausgangsstrom wesentlich durch einen Eingangsstrom gesteuert. Beim FET erfolgt die Steuerung hauptsächlich durch eine Eingangsspannung.**

## Thermische Verluste

Kein reales elektronisches Bauteil arbeitet vollkommen verlustfrei.

Verlustleistung wird häufig in Wärme umgesetzt.

Es gilt beispielsweise:

\[
P = U \cdot I
\]

Wird ein Bauteil zu heiss, können sich seine Eigenschaften verändern oder es kann zerstört werden.

Deshalb werden bei Leistungshalbleitern häufig:

- Kühlkörper
- Lüfter
- grosse Gehäuseflächen

eingesetzt.

## Wirkungsgrad

Der Wirkungsgrad beschreibt das Verhältnis zwischen nutzbarer Ausgangsleistung und zugeführter Leistung, dasselbe Grundprinzip wie beim [Antennenwirkungsgrad in Kapitel 4](04-antennen-grundlagen.html#wirkungsgrad), hier jedoch auf eine Verstärkerstufe bezogen.

Es gilt:

\[
\eta = \frac{P_A}{P_E}
\]

beziehungsweise in Prozent:

\[
\eta = \frac{P_A}{P_E} \cdot 100%
\]

Die Differenz zwischen Eingangs- und Ausgangsleistung wird überwiegend in Verlustleistung umgesetzt.

## Elektronenröhre

Vor der allgemeinen Verbreitung von Halbleitern wurden Verstärker und Sender hauptsächlich mit Elektronenröhren aufgebaut.

Auch heute werden Röhren noch in bestimmten Hochleistungs-HF-Verstärkern verwendet.

Das Grundprinzip beruht auf:

**Elektronenemission**

Eine erhitzte Kathode kann Elektronen freisetzen.

Eine positiv geladene Anode zieht diese Elektronen an.

Dadurch entsteht ein Elektronenstrom im Vakuum.

## Triode

Eine Triode besitzt zusätzlich zwischen Kathode und Anode ein:

**Steuergitter**

Mit einer kleinen Änderung der Gitterspannung kann der wesentlich grössere Anodenstrom beeinflusst werden.

Damit kann die Röhre verstärken.

Das Grundprinzip ähnelt funktionell der Steuerwirkung eines Transistors, obwohl die physikalische Arbeitsweise eine andere ist.

## Verstärker

Ein Verstärker soll ein Eingangssignal vergrössern.

Dabei kann je nach Anwendung hauptsächlich verstärkt werden:

- Spannung
- Strom
- Leistung

Ein idealer linearer Verstärker verändert die Form des Eingangssignals nicht, sondern nur dessen Grösse.

## Übersteuerung

Ein Verstärker besitzt einen begrenzten Arbeitsbereich.

Wird das Eingangssignal zu gross, kann der Ausgang dem Signal nicht mehr linear folgen.

Es entsteht:

**Übersteuerung**

Die Signalform wird verzerrt.

Bei Sendern können dadurch unerwünschte Frequenzanteile entstehen.

Deshalb ist ausreichende Linearität besonders bei SSB und anderen amplitudenabhängigen Modulationsarten wichtig.

## Gegenkopplung

Ein Teil des Ausgangssignals kann so auf den Eingang zurückgeführt werden, dass er der Eingangsspannung entgegenwirkt.

Man spricht von:

**Gegenkopplung**

Dadurch kann beispielsweise:

- die Verstärkung stabilisiert
- die Linearität verbessert
- die Bandbreite verändert

werden.

## Operationsverstärker

Ein Operationsverstärker, kurz:

**OpAmp**

ist ein sehr hoch verstärkender Differenzverstärker.

Er besitzt typischerweise:

- nichtinvertierenden Eingang \(+\)
- invertierenden Eingang \(-\)
- Ausgang

Entscheidend ist die Spannungsdifferenz zwischen den beiden Eingängen.

## Gegenkopplung beim Operationsverstärker

Operationsverstärker werden normalerweise mit äusseren Widerständen beschaltet.

Dadurch kann die Gesamtverstärkung sehr präzise eingestellt werden.

### Invertierender Verstärker

Für die idealisierte Schaltung gilt:

\[
v_U = -\frac{R_2}{R_1}
\]

Das Minuszeichen bedeutet, dass das Ausgangssignal gegenüber dem Eingangssignal um 180° phasenverschoben ist.

### Nichtinvertierender Verstärker

Hier gilt:

\[
v_U = 1 = + = \frac{R_2}{R_1}
\]

Das Ausgangssignal besitzt dieselbe Polarität beziehungsweise Phasenlage wie das Eingangssignal.

## Filter

Ein Filter lässt bestimmte Frequenzen passieren und dämpft andere.

Die vier grundlegenden Filtertypen sind:

| Filter | Wirkung |
| --- | --- |
| Tiefpass | tiefe Frequenzen passieren |
| Hochpass | hohe Frequenzen passieren |
| Bandpass | ein Frequenzbereich passiert |
| Bandsperre | ein Frequenzbereich wird unterdrückt |

Ein besonders schmaler Sperrfilter wird häufig als:

**Notchfilter**

oder:

**Kerbfilter**

bezeichnet.

## RC-Tiefpass

Ein einfacher Tiefpass kann aus einem Widerstand und einem Kondensator aufgebaut werden.

Die Grenzfrequenz beträgt:

\[
f_g = \frac{1}{2 \cdot \pi \cdot R \cdot C}
\]

Am Grenzpunkt ist die Leistung gegenüber dem Durchlassbereich auf die Hälfte gefallen.

Dies entspricht:

\[
-3\ \mathrm{dB}
\]

## RC-Hochpass

Auch ein Hochpass kann aus einem Widerstand und einem Kondensator bestehen.

Die Bauteile werden anders angeordnet.

Die Grenzfrequenz wird mit derselben Beziehung bestimmt:

\[
f_g = \frac{1}{2 \cdot \pi \cdot R \cdot C}
\]

Entscheidend ist die Schaltungsanordnung.

## RL-Filter

Auch Widerstand und Spule können zu Tiefpass oder Hochpass kombiniert werden.

Die Grenzfrequenz lautet:

\[
f_g = \frac{R}{2 \cdot \pi \cdot L}
\]

## Schwingkreis

Eine besonders wichtige Kombination in der Funktechnik besteht aus:

- Kondensator
- Spule

Beide speichern Energie.

Der Kondensator speichert Energie im elektrischen Feld.

Die Spule speichert Energie im magnetischen Feld.

In einem idealen Schwingkreis wird die Energie fortlaufend zwischen beiden Speicherformen ausgetauscht.

## Resonanzfrequenz

Bei einer bestimmten Frequenz gilt:

\[
X_L = X_C
\]

Diese Frequenz bezeichnet man als:

**Resonanzfrequenz**

Sie beträgt:

\[
f_0 = \frac{1} = { = 2 \cdot \pi \cdot \sqrt{L \cdot C} = }
\]

Diese Formel gehört zu den wichtigsten Formeln der Funktechnik.

## Beispiel Schwingkreis

Gegeben:

\[
L = 10\ \mathrm{\mu H}
\]

und:

\[
C = 100\ \mathrm{pF}
\]

Dann:

\[
f_0 = \frac{1} = { = 2 \cdot \pi \cdot = \sqrt{ = 10 \times 10^{-6} \cdot 100 \times 10^{-12} = } = }
\]

Das ergibt ungefähr:

\[
f_0
\approx
5{,}03\ \mathrm{MHz}
\]

## Serienschwingkreis

Bei einem idealen Serienschwingkreis heben sich bei Resonanz die induktiven und kapazitiven Blindanteile gegenseitig auf.

Die Impedanz wird klein und wird hauptsächlich durch die vorhandenen Wirkwiderstände bestimmt.

Ein Serienschwingkreis lässt seine Resonanzfrequenz deshalb besonders gut passieren.

## Parallelschwingkreis

Beim idealisierten Parallelschwingkreis ist die Impedanz bei Resonanz dagegen besonders hoch.

Er kann seine Resonanzfrequenz gegenüber anderen Frequenzen bevorzugen beziehungsweise sperren, abhängig davon, wie er in die Schaltung eingebaut wird.

## Güte und Bandbreite

Ein Schwingkreis besitzt keine unendlich scharfe Resonanz.

Die Schärfe wird durch die:

**Güte \(Q\)**

beschrieben.

Es gilt:

\[
Q = \frac{f_0}{B}
\]

Damit gilt:

**hohe Güte**

→ kleine Bandbreite

**kleine Güte**

→ grosse Bandbreite

## Beispiel Güte

Ein Schwingkreis besitzt:

\[
f_0 = 10\ \mathrm{MHz}
\]

und:

\[
B = 200\ \mathrm{kHz}
\]

Dann:

\[
Q = \frac{10,000,000}{200,000}
\]

\[
Q = 50
\]

## Oszillator

Ein Oszillator erzeugt selbstständig ein periodisches elektrisches Signal.

Dafür benötigt er keine periodische Eingangsschwingung.

Ein Oszillator besteht vereinfacht aus:

- Verstärker
- frequenzbestimmendem Netzwerk
- Rückkopplung

Ein Teil des Ausgangssignals wird so zum Eingang zurückgeführt, dass die Schwingung erhalten bleibt.

## Frequenzbestimmung

Die Oszillatorfrequenz kann beispielsweise bestimmt werden durch:

- LC-Schwingkreis
- Quarz
- RC-Netzwerk
- digitale Frequenzsynthese

In Funkgeräten müssen Oszillatoren häufig sehr frequenzstabil arbeiten.

## Quarzoszillator

Ein Schwingquarz besitzt eine sehr ausgeprägte mechanische Resonanz.

Durch den piezoelektrischen Effekt kann diese Resonanz elektrisch genutzt werden.

Quarzoszillatoren erreichen deshalb eine wesentlich höhere Frequenzstabilität als viele einfache frei schwingende LC-Oszillatoren.

## PLL

PLL bedeutet:

**Phase Locked Loop**

auf Deutsch:

**Phasenregelkreis**

Eine PLL vergleicht die Phase eines erzeugten Signals mit einer Referenz.

Aus dem Unterschied entsteht eine Regelspannung.

Diese verändert die Frequenz des gesteuerten Oszillators so lange, bis eine feste Phasenbeziehung zur Referenz erreicht ist.

## PLL als Regelkreis

Vereinfacht besteht eine PLL aus:

**Phasenvergleich → Schleifenfilter → steuerbarer Oszillator → Rückführung**

Ist die PLL eingerastet, spricht man von:

**Lock**

PLL-Schaltungen werden beispielsweise verwendet für:

- Frequenzsynthesizer
- stabile Lokaloszillatoren
- Frequenzaufbereitung
- Demodulation bestimmter Signale

## Modulator und Demodulator

Diese Funktionsgruppen kennen wir aus Kapitel 10.

Ein:

**Modulator**

überträgt Information auf einen Träger.

Ein:

**Demodulator**

gewinnt die Information aus einem modulierten Signal zurück.

Elektronisch können dafür je nach Modulationsart unterschiedliche Schaltungen verwendet werden.

Hier ist vor allem die Funktion innerhalb einer Gesamtschaltung wichtig.

## Analoge und digitale Filter

Bisher haben wir Filter als analoge Schaltungen mit:

- Widerständen
- Kondensatoren
- Spulen
- Verstärkern

betrachtet.

In modernen Funkgeräten werden viele Filterfunktionen digital berechnet.

Dazu wird das Signal zunächst digitalisiert.

Anschliessend verarbeitet ein Prozessor die Abtastwerte mathematisch.

## FIR-Filter

FIR bedeutet:

**Finite Impulse Response**

Ein FIR-Filter berechnet seinen Ausgang aus einer endlichen Anzahl aktueller und früherer Eingangswerte.

Sehr vereinfacht:

**Ausgang = gewichtete Summe vergangener Eingangswerte**

Es besitzt keine Rückführung früherer Ausgangswerte in die Berechnung.

## IIR-Filter

IIR bedeutet:

**Infinite Impulse Response**

Bei einem IIR-Filter werden zusätzlich frühere Ausgangswerte in die neue Berechnung einbezogen.

Es besitzt damit eine mathematische Rückkopplung.

Für die Prüfung genügt gemäss BAKOM eine rudimentäre Kenntnis dieser beiden Filterprinzipien.

## Einfache Digitalschaltungen

Digitale Schaltungen arbeiten mit diskreten logischen Zuständen.

Vereinfacht werden diese bezeichnet als:

- 0
- 1

Ein bestimmter Spannungsbereich entspricht dabei logisch 0, ein anderer logisch 1.

Die genaue Spannung hängt von der verwendeten Logikfamilie ab.

## NOT

Ein NOT-Gatter kehrt den Eingang um.

| Eingang | Ausgang |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

## AND

Ein AND-Gatter liefert nur dann 1, wenn **alle** Eingänge 1 sind.

| A | B | Ausgang |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## OR

Ein OR-Gatter liefert 1, wenn **mindestens ein** Eingang 1 ist.

| A | B | Ausgang |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Diese Grundfunktionen bilden die Basis komplexer digitaler Schaltungen.

## SDR als elektronische Schaltung

SDR bedeutet:

**Software Defined Radio**

Bei einem SDR werden möglichst viele Signalverarbeitungsfunktionen mathematisch beziehungsweise in Software ausgeführt.

Ein typischer vereinfachter Signalweg lautet:

**HF-Eingang → analoge Vorstufe → Analog-Digital-Wandler → digitale Signalverarbeitung**

Beim Senden erfolgt der Prozess entsprechend in umgekehrter Richtung.

Trotz Software benötigt ein SDR weiterhin analoge elektronische Baugruppen für:

- HF-Eingang
- Filter
- Verstärkung
- A/D- und D/A-Wandlung
- Senderendstufe

SDR ersetzt also nicht die Elektronik, sondern verschiebt viele Funktionen in die digitale Signalverarbeitung.

## Drei Ebenen einer Funkgeräteschaltung

Für das Lernen hilft folgende Einteilung:

### Bauteile

Zum Beispiel:

- Widerstand
- Kondensator
- Spule
- Diode
- Transistor

### Funktionsgruppen

Zum Beispiel:

- Verstärker
- Filter
- Oszillator
- Gleichrichter
- Schwingkreis

### Gesamtsystem

Zum Beispiel:

- Empfänger
- Sender
- Transceiver
- SDR

Damit wird eine komplexe Funkgeräteschaltung überschaubarer.

## Lernschema

Wenn du in einer Prüfungsfrage ein Bauteil oder eine Schaltung siehst, gehe so vor:

1. **Welches Bauteil ist dargestellt?**
2. **Speichert es Energie, verstärkt es oder leitet es gerichtet?**
3. **Handelt es sich um Gleichstrom oder Wechselstrom?**
4. **Spielt die Frequenz eine Rolle?**
5. **Ist eine Resonanz oder Grenzfrequenz gefragt?**
6. **Ist die Schaltung ein Filter, Verstärker, Gleichrichter oder Oszillator?**
7. **Welche bekannte Grundformel passt dazu?**

## Die wichtigsten Zusammenhänge auf einen Blick

Kapazitiver Blindwiderstand:

\[
X_C = \frac{1}{2 \cdot \pi \cdot f \cdot C}
\]

Induktiver Blindwiderstand:

\[
X_L = 2 \cdot \pi \cdot f \cdot L
\]

Schwingkreis:

\[
f_0 = \frac{1} = { = 2 \cdot \pi \cdot \sqrt{L \cdot C} = }
\]

Güte:

\[
Q = \frac{f_0}{B}
\]

Transformator:

\[
\frac{N_P}{N_S} = \frac{U_P}{U_S} = \frac{I_S}{I_P}
\]

Transistor:

\[
I_E = I_C + I_B
\]

\[
B_T = \frac{I_C}{I_B}
\]

RC-Grenzfrequenz:

\[
f_g = \frac{1}{2 \cdot \pi \cdot R \cdot C}
\]

RL-Grenzfrequenz:

\[
f_g = \frac{R}{2 \cdot \pi \cdot L}
\]

## Merksätze

**Ein Kondensator speichert Energie in einem elektrischen Feld.**

**Eine Spule speichert Energie in einem magnetischen Feld.**

**Bei steigender Frequenz sinkt der kapazitive Blindwiderstand.**

**Bei steigender Frequenz steigt der induktive Blindwiderstand.**

**Ein Transformator arbeitet mit elektromagnetischer Induktion.**

**Eine Diode lässt Strom hauptsächlich in einer Richtung fliessen.**

**Ein Transistor kann verstärken oder schalten.**

**Verlustleistung wird überwiegend in Wärme umgesetzt.**

**Ein Schwingkreis besteht aus Kapazität und Induktivität.**

**Bei Resonanz gilt \(X_L = X_C\).**

**Ein Tiefpass lässt tiefe Frequenzen passieren, ein Hochpass hohe Frequenzen.**

**Ein Oszillator erzeugt selbstständig eine Schwingung.**

**Eine PLL hält einen Oszillator in einer definierten Phasenbeziehung zu einer Referenz.**

**Ein Operationsverstärker verstärkt die Spannungsdifferenz seiner beiden Eingänge.**

**Digitale Schaltungen arbeiten mit definierten logischen Zuständen.**

## Selbstkontrolle

Versuche zuerst, die Fragen ohne Nachschlagen zu beantworten.

1. In welchem Feld speichert ein Kondensator Energie?
2. Was geschieht mit \(X_C\), wenn die Frequenz steigt?
3. Was geschieht mit \(X_L\), wenn die Frequenz steigt?
4. Welche Einheit besitzt die Induktivität?
5. Welche Aufgabe hat ein Transformator grundsätzlich?
6. Welche Aufgabe hat eine Diode?
7. Wozu dient der Glättungskondensator in einem Netzgerät?
8. Welche drei Anschlüsse besitzt ein Bipolartransistor?
9. Was bedeutet beim Transistor \(B_T = I_C/I_B\)?
10. Wann befindet sich ein LC-Schwingkreis in Resonanz?
11. Was lässt ein Tiefpass passieren?
12. Was ist ein Oszillator?
13. Was bedeutet PLL?
14. Welche logische Funktion liefert nur dann 1, wenn beide Eingänge 1 sind?
15. Was unterscheidet einen FIR- grundsätzlich von einem IIR-Filter?

### Antworten

1. Im **elektrischen Feld**.
2. Er wird **kleiner**.
3. Er wird **grösser**.
4. \(\mathrm{H}\) (Henry).
5. Er überträgt Wechselstromenergie über ein magnetisches Feld und kann dabei Spannung, Strom und Impedanz transformieren.
6. Sie lässt Strom bevorzugt in einer Richtung fliessen.
7. Er speichert Energie zwischen den Spannungsspitzen und vermindert dadurch die Restwelligkeit.
8. Basis, Kollektor und Emitter.
9. Das Verhältnis von Kollektorstrom zu Basisstrom im betrachteten Gleichstromfall.
10. Wenn:

\[
X_L = X_C
\]

1. Tiefe Frequenzen.
2. Eine Schaltung, die selbstständig eine periodische elektrische Schwingung erzeugt.
3. Phase Locked Loop beziehungsweise Phasenregelkreis.
4. **AND**.
5. Ein FIR-Filter verwendet eine endliche Anzahl von Eingangswerten ohne Rückkopplung früherer Ausgangswerte. Ein IIR-Filter verwendet zusätzlich Rückkopplung früherer Ausgangswerte.

## Prüfungsbezug HB3 und HB9

Das BAKOM führt elektronische Bauteile und Schaltungen ausdrücklich als Prüfungsstoff auf.

Dazu gehören insbesondere:

- Widerstände
- Kondensatoren
- Spulen
- Transformatoren
- Dioden
- Transistoren
- thermische Verluste
- Elektronenröhren und Emission
- einfache Digitalschaltungen
- Kombinationen von Bauelementen
- analoge und digitale Filter
- Netzgeräte
- Verstärker
- Operationsverstärker
- Modulatoren
- Demodulatoren
- Oszillatoren
- Schwingkreise
- Grundlagen von SDR
- PLL

Für HB3 stehen insbesondere die grundlegende Funktion und einfachere technische Zusammenhänge im Vordergrund.

Für HB9 kommen vertieftere Berechnungen und das Zusammenspiel der Bauteile in Schaltungen hinzu.

Die dafür wichtigen Formeln sind in der BAKOM-Formelsammlung enthalten.

## Navigation

[← Kapitel 10: Modulation und Betriebsarten](10-modulation-betriebsarten.html)

[↑ Zurück zum Inhaltsverzeichnis](index.html)

[Kapitel 12: Messtechnik →](12-messtechnik.html)

---

*© 2026 Marcel Sauder. Alle Rechte vorbehalten. Vervielfältigung, Verbreitung oder Weitergabe, auch auszugsweise, nur mit ausdrücklicher schriftlicher Genehmigung.*
