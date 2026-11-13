---
description: "Impedanz, Anpassung und Stehwellenverhältnis (SWR) für HB9: Reflexion, Transformation und Messung, mit Formeln und Beispielen."
---

# Kapitel 6: Impedanz, Anpassung und SWR

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, was **Impedanz** bedeutet
- **Resonanz**, **Anpassung** und **Wirkungsgrad** unterscheiden können
- verstehen, weshalb bei Fehlanpassung eine Welle reflektiert wird
- erklären können, was das **SWR** aussagt
- einfache SWR-Berechnungen durchführen können
- die Aufgabe eines Antennentuners erklären können
- das Grundprinzip von Balun, Unun und Impedanztransformation verstehen
- für HB9 auch Reflexionsfaktor und Viertelwellentransformation berechnen können

> **Hinweis zu HB3 und HB9:**
> Das BAKOM legt fest, dass die technischen und rechnerischen Fragen für den Einsteigerausweis HB3 weniger komplex sind als für das vollständige Fähigkeitszeugnis HB9. Die Kennzeichnung einzelner Abschnitte als **HB9-Vertiefung** dient in diesem Lehrwerk deshalb als Lernhilfe und ist keine zusätzliche offizielle Stoffabgrenzung des BAKOM.

## Formelzeichen und Symbole

<table>
<thead>
<tr>
<th>Zeichen</th>
<th>Name</th>
<th>Bedeutung</th>
<th>Einheit</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="arithmatex">\(Z\)</span></td>
<td>Z</td>
<td>Impedanz</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(R\)</span></td>
<td>R</td>
<td>Wirkwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(X\)</span></td>
<td>X</td>
<td>Blindwiderstand, Reaktanz</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(X_L\)</span></td>
<td>X L</td>
<td>induktiver Blindwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(X_C\)</span></td>
<td>X C</td>
<td>kapazitiver Blindwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(Z_0\)</span></td>
<td>Z null</td>
<td>Wellenwiderstand einer Speiseleitung</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_L\)</span></td>
<td>R L</td>
<td>Abschlusswiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(s\)</span></td>
<td>s</td>
<td>Stehwellenverhältnis, SWR oder VSWR</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(r\)</span></td>
<td>r</td>
<td>Reflexionsfaktor</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{max}\)</span></td>
<td>U max</td>
<td>maximale Spannung auf der Leitung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{min}\)</span></td>
<td>U min</td>
<td>minimale Spannung auf der Leitung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U_v\)</span></td>
<td>U v</td>
<td>Amplitude der hinlaufenden Welle</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U_r\)</span></td>
<td>U r</td>
<td>Amplitude der rücklaufenden Welle</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_v\)</span></td>
<td>P v</td>
<td>hinlaufende Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_r\)</span></td>
<td>P r</td>
<td>rücklaufende Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(j\)</span></td>
<td>j</td>
<td>Kennzeichen des Blindanteils in der komplexen Schreibweise</td>
<td>keine</td>
</tr>
</tbody>
</table>

## Der rote Faden

Dieses Kapitel lässt sich auf eine einfache Kette reduzieren:

**Sender → Speiseleitung → Antenne**

Passen Speiseleitung und Antenne elektrisch gut zusammen, gelangt die Hochfrequenzenergie ohne starke Reflexion zum Abschluss.

Passen sie nicht zusammen, wird ein Teil der Welle reflektiert.

Dadurch entstehen auf der Leitung stehende Wellen.

Diese Fehlanpassung können wir unter anderem mit dem **SWR** beschreiben.

## Was bedeutet Impedanz?

Aus Kapitel 1 kennen wir den elektrischen Widerstand \(R\).

Bei Gleichstrom genügt diese Betrachtung häufig.

Bei Wechselstrom und besonders bei Hochfrequenz können jedoch zusätzlich kapazitive und induktive Wirkungen auftreten.

Deshalb verwendet man den umfassenderen Begriff:

**Impedanz**

Das Formelzeichen ist:

\[
Z
\]

Die Einheit ist:

\[
\Omega
\]

Für das erste Verständnis können wir uns merken:

> **Die Impedanz ist der Wechselstromwiderstand eines elektrischen Systems.**

Sie beschreibt nicht nur, wie stark ein Strom begrenzt wird, sondern auch, ob Strom und Spannung gegeneinander phasenverschoben sind.

## Wirkwiderstand und Blindwiderstand

Eine Impedanz kann zwei Bestandteile enthalten:

- **Wirkwiderstand \(R\)**
- **Blindwiderstand \(X\)**

Der Wirkwiderstand ist der Anteil, an dem tatsächlich Wirkleistung umgesetzt werden kann.

Bei einer Antenne gehört dazu auch der Anteil, über den Energie abgestrahlt wird.

Der Blindanteil entsteht durch elektrische oder magnetische Energiespeicherung.

Man unterscheidet:

- induktiven Blindwiderstand \(X_L\)
- kapazitiven Blindwiderstand \(X_C\)

## HB9-Vertiefung: komplexe Impedanz

Die vollständige Impedanz wird häufig geschrieben als:

\[
Z = R + jX
\]

Dabei gilt:

- \(R\) = Wirkwiderstand
- \(X\) = Blindanteil
- \(j\) kennzeichnet in der Elektrotechnik den imaginären Anteil

Für das Verständnis dieses Kapitels genügt:

**\(R\) ist der reale Anteil, \(jX\) beschreibt den Blindanteil.**

Ein Beispiel:

\[
Z = 50 + j30\ \Omega
\]

bedeutet:

- 50 Ω Wirkwiderstand
- 30 Ω induktiver Blindanteil

Dagegen bedeutet:

\[
Z = 50 - j30\ \Omega
\]

- 50 Ω Wirkwiderstand
- 30 Ω kapazitiver Blindanteil

Der Betrag der Impedanz ist:

\[
|Z| = \sqrt{R^2 + X^2}
\]

Der Betrag allein beschreibt die Impedanz jedoch nicht vollständig. Für die HF-Technik ist auch wichtig, ob und welcher Blindanteil vorhanden ist.

## Impedanz einer Antenne

Eine Antenne besitzt an ihrem Speisepunkt eine bestimmte Impedanz.

Diese hängt unter anderem ab von:

- Frequenz
- Antennenlänge
- Bauform
- Speisepunkt
- Höhe über Grund
- Boden
- Umgebung
- anderen leitfähigen Gegenständen

Deshalb besitzt eine reale Antenne nicht unabhängig von ihrem Aufbau immer dieselbe Impedanz.

## Drei Begriffe, die man nicht verwechseln darf

Diese drei Begriffe sind besonders wichtig:

<table>
<thead>
<tr>
<th>Begriff</th>
<th>Bedeutung</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Resonanz</strong></td>
<td>Der Blindanteil <span class="arithmatex">\(X\)</span> ist null</td>
</tr>
<tr>
<td><strong>Anpassung</strong></td>
<td>Die beteiligten Impedanzen passen zueinander</td>
</tr>
<tr>
<td><strong>Wirkungsgrad</strong></td>
<td>Anteil der zugeführten Leistung, der tatsächlich abgestrahlt wird</td>
</tr>
</tbody>
</table>

### Resonanz

Bei Resonanz gilt:

\[
X = 0
\]

Damit ist:

\[
Z = R
\]

Die Impedanz ist dann rein resistiv.

### Anpassung

Anpassung bedeutet, dass Abschluss und Speiseleitung elektrisch zueinander passen.

Beispielsweise:

\[
Z_L = Z_0
\]

### Wirkungsgrad

Der Wirkungsgrad sagt aus, wie viel der zugeführten Leistung tatsächlich abgestrahlt wird.

**Diese drei Eigenschaften sind nicht dasselbe.**

Eine Antenne kann:

- resonant, aber nicht exakt angepasst sein
- gut angepasst, aber verlustreich sein
- einen hohen Wirkungsgrad besitzen und trotzdem kein SWR von exakt 1:1 zeigen

Das ist einer der wichtigsten Punkte dieses Kapitels.

## Beispiel: resonanter Halbwellendipol

Ein idealisierter Halbwellendipol im freien Raum besitzt in Resonanz einen Speisewiderstand von ungefähr:

\[
73\ \Omega
\]

Er kann also resonant sein, obwohl er nicht exakt 50 Ω besitzt.

An einer 50 Ω Speiseleitung ergibt sich näherungsweise:

\[
s = \frac{73}{50}
\]

\[
s \approx 1{,}46
\]

Der Dipol ist in diesem Beispiel:

**resonant**

aber sein SWR beträgt ungefähr:

**1,46:1**

Damit ist unmittelbar sichtbar:

> **Resonanz bedeutet nicht automatisch SWR 1:1.**

## Warum begegnen uns ständig 50 Ω?

Viele Amateurfunkgeräte und Koaxialkabel sind für eine Systemimpedanz von:

\[
50\ \Omega
\]

ausgelegt.

Deshalb versucht man häufig, dem Funkgerät eine Impedanz nahe 50 Ω anzubieten.

Das bedeutet nicht, dass jede Antenne von sich aus 50 Ω besitzen muss.

Je nach Antennentyp können am Speisepunkt beispielsweise auftreten:

- wenige Ohm
- etwa 50 bis 75 Ω
- einige hundert Ohm
- mehrere tausend Ohm

Deshalb benötigen manche Antennen eine Impedanztransformation.

## Was bedeutet Anpassung?

Betrachten wir eine 50 Ω Speiseleitung.

Wird diese mit einem rein ohmschen Abschluss von:

\[
50\ \Omega
\]

abgeschlossen, besteht ideale Anpassung.

Dann wird am Abschluss keine Welle aufgrund einer Fehlanpassung reflektiert.

Das SWR beträgt:

**1:1**

## Was geschieht bei Fehlanpassung?

Nehmen wir an, eine 50 Ω Leitung endet nicht an 50 Ω, sondern beispielsweise an 100 Ω.

Die ankommende Welle trifft auf einen Abschluss, der elektrisch nicht zum Wellenwiderstand der Leitung passt.

Ein Teil der Welle wird deshalb zurück zur Quelle reflektiert.

Auf der Leitung existieren nun:

- eine **hinlaufende Welle**
- eine **rücklaufende Welle**

Beide überlagern sich.

Dadurch entstehen entlang der Leitung Orte mit:

- hoher Spannung
- niedriger Spannung
- hohem Strom
- niedrigem Strom

Dieses Muster bezeichnet man als:

**stehende Welle**

## Das Stehwellenverhältnis SWR

Das SWR beschreibt, wie ausgeprägt diese Spannungsunterschiede auf der Leitung sind.

Die BAKOM-Formelsammlung verwendet:

\[
s = \frac{U_\mathrm{max}}{U_\mathrm{min}}
\]

Dabei gilt:

- \(U_\mathrm{max}\) = grösste Spannung
- \(U_\mathrm{min}\) = kleinste Spannung
- \(s\) = Stehwellenverhältnis

Das SWR besitzt keine Einheit.

## Der einfachste Fall: SWR 1:1

Bei perfekter Anpassung gibt es keine durch Fehlanpassung verursachte rücklaufende Welle.

Dann gilt:

\[
U_\mathrm{max} = U_\mathrm{min}
\]

also:

\[
s = 1
\]

Das wird geschrieben als:

**SWR 1:1**

Das ist der kleinstmögliche Wert.

## SWR einfach berechnen

Bei einem rein ohmschen Abschluss ist die Rechnung besonders einfach.

Ist der Abschluss grösser als der Wellenwiderstand:

\[
s = \frac{R_L}{Z_0}
\]

Ist der Abschluss kleiner als der Wellenwiderstand:

\[
s = \frac{Z_0}{R_L}
\]

Man teilt also beim einfachen rein ohmschen Fall:

> **den grösseren Widerstand durch den kleineren Widerstand.**

## Beispiel 1: 75 Ω an 50 Ω

Gegeben:

\[
R_L = 75\ \Omega
\]

\[
Z_0 = 50\ \Omega
\]

Da 75 Ω grösser ist:

\[
s = \frac{75}{50}
\]

\[
s = 1{,}5
\]

Ergebnis:

**SWR 1,5:1**

## Beispiel 2: 25 Ω an 50 Ω

Gegeben:

\[
R_L = 25\ \Omega
\]

\[
Z_0 = 50\ \Omega
\]

Jetzt ist die Leitung hochohmiger als der Abschluss:

\[
s = \frac{50}{25}
\]

\[
s = 2
\]

Ergebnis:

**SWR 2:1**

## Derselbe SWR-Wert kann verschiedene Ursachen haben

Ein Abschluss von:

\[
25\ \Omega
\]

an einer 50 Ω Leitung ergibt:

**SWR 2:1**

Ein Abschluss von:

\[
100\ \Omega
\]

ergibt ebenfalls:

\[
s = \frac{100}{50} = 2
\]

also ebenfalls:

**SWR 2:1**

Deshalb gilt:

> **Der SWR-Wert allein sagt nicht, ob die Impedanz zu hoch oder zu niedrig ist.**

Ein einfaches SWR-Meter zeigt uns also weniger als ein moderner Antennenanalysator.

## HB9-Vertiefung: Reflexionsfaktor

Der Reflexionsfaktor beschreibt die Stärke der reflektierten Spannungswelle.

Für einen rein ohmschen Abschluss gilt:

\[
r = \frac{R_L - Z_0}{R_L + Z_0}
\]

Aus dem SWR lässt sich der Betrag des Reflexionsfaktors berechnen:

\[
|r| = \frac{s - 1}{s + 1}
\]

Umgekehrt:

\[
s = \frac{1 + |r|}{1 - |r|}
\]

Bei perfekter Anpassung gilt:

\[
r = 0
\]

## Beispiel: Reflexionsfaktor bei SWR 2:1

Gegeben:

\[
s = 2
\]

Dann:

\[
|r| = \frac{2 - 1}{2 + 1}
\]

\[
|r| = \frac{1}{3}
\]

also ungefähr:

\[
|r| = 0{,}333
\]

Die Amplitude der reflektierten Spannungswelle beträgt damit ungefähr ein Drittel der hinlaufenden Spannungswelle.

## HB9-Vertiefung: reflektierte Leistung

Für die Leistung gilt:

\[
|r| = \sqrt{\frac{P_r}{P_v}}
\]

Daraus folgt:

\[
P_r = P_v \cdot |r|^2
\]

Bei SWR 2:1 gilt:

\[
|r| = \frac{1}{3}
\]

Damit:

\[
|r|^2 = \frac{1}{9}
\]

Das entspricht ungefähr:

\[
11{,}1%
\]

Bei einer hinlaufenden Leistung von 100 W ergibt sich damit:

\[
P_r \approx 11{,}1\ \mathrm{W}
\]

rücklaufende Leistung.

## Ist die rücklaufende Leistung einfach verloren?

Nein.

**Reflektierte Leistung und Leitungsverlust sind nicht dasselbe.**

In einer ideal verlustlosen Leitung würde die reflektierte Welle nicht einfach als Wärme verschwinden.

Reale Koaxialkabel besitzen jedoch Verluste. Hinlaufende und rücklaufende Wellen werden deshalb bei jedem Weg durch das Kabel gedämpft.

Eine starke Fehlanpassung kann dadurch die tatsächlichen Leitungsverluste erhöhen.

Ausserdem schützen sich moderne Sender häufig vor starker Fehlanpassung, indem sie ihre Ausgangsleistung reduzieren.

## Was sagt das SWR wirklich aus?

Das SWR sagt etwas aus über:

**die Anpassung zwischen Leitung und Abschluss**

Es sagt nicht direkt aus:

- wie gross der Antennenwirkungsgrad ist
- wie weit die Funkverbindung reicht
- wie gut die Antenne abstrahlt
- ob die Antenne resonant ist

Ein 50 Ω Abschlusswiderstand kann beispielsweise ein perfektes:

**SWR 1:1**

erzeugen und trotzdem die gesamte HF-Leistung in Wärme umwandeln.

Deshalb gilt:

> **Ein gutes SWR ist kein Beweis für eine gute Antenne.**

## Resonanz und SWR-Minimum

Auch Resonanzfrequenz und SWR-Minimum müssen nicht exakt identisch sein.

Resonanz bedeutet:

\[
X = 0
\]

Ein SWR-Minimum bedeutet:

Die vorhandene Impedanz passt an dieser Frequenz besonders gut zum verwendeten Leitungssystem.

Beides kann bei derselben Frequenz auftreten, muss es aber nicht.

## Offene und kurzgeschlossene Leitung

Zwei extreme Fehlanpassungen sind:

- offener Leitungsabschluss
- kurzgeschlossener Leitungsabschluss

Bei einer ideal verlustlosen Leitung wird die eintreffende Leistung vollständig reflektiert.

Das theoretische SWR geht gegen:

\[
\infty
\]

Diese Fälle werden im nächsten Kapitel über Speiseleitungen genauer behandelt.

## Wie kann eine Antenne angepasst werden?

Je nach Antennensystem gibt es unterschiedliche Möglichkeiten.

Beispielsweise:

- Antennenlänge verändern
- Speisepunkt verändern
- Radiale oder Gegengewicht verändern
- Übertrager einsetzen
- Anpassnetzwerke aus Spulen und Kondensatoren verwenden
- Viertelwellentransformator einsetzen
- Antennentuner verwenden

Es gibt deshalb nicht «die eine» Anpassungsmethode.

## Der Antennentuner

Ein Antennentuner wird auch bezeichnet als:

- Antennenanpassgerät
- Matchbox
- ATU

Seine Aufgabe ist die **Impedanzanpassung**.

Er enthält ein abstimmbares Netzwerk, beispielsweise aus Spulen und Kondensatoren.

Damit kann die Impedanz, die der Sender sieht, auf einen passenden Wert transformiert werden.

Wichtig:

> **Ein Antennentuner stimmt nicht automatisch die physische Länge der Antenne ab.**

Befindet sich der Tuner beim Funkgerät, kann der Sender beispielsweise 50 Ω sehen, obwohl auf der Leitung zwischen Tuner und Antenne weiterhin ein höheres SWR besteht.

## Balun und Unun

Zwei weitere häufige Begriffe sind:

**Balun**

und

**Unun**

Ein Balun dient grundsätzlich der Verbindung eines symmetrischen mit einem unsymmetrischen System.

Ein typisches Beispiel:

- symmetrischer Dipol
- unsymmetrisches Koaxialkabel

Ein Unun verbindet zwei unsymmetrische Systeme.

Baluns und Ununs können zusätzlich Impedanzen transformieren.

Ein **1:1-Balun** muss jedoch keine Impedanztransformation durchführen. Er kann beispielsweise hauptsächlich der Symmetrierung und der Unterdrückung unerwünschter Gleichtaktströme dienen.

## Impedanztransformation mit Übertragern

Für einen idealen Übertrager gilt:

\[
\frac{N_P}{N_S} = \sqrt{\frac{Z_P}{Z_S}}
\]

Dabei sind:

- \(N_P\) = Windungszahl Primärseite
- \(N_S\) = Windungszahl Sekundärseite
- \(Z_P\) = Impedanz Primärseite
- \(Z_S\) = Impedanz Sekundärseite

Wichtig:

**Das Impedanzverhältnis entspricht dem Quadrat des Windungszahlverhältnisses.**

Beispielsweise führt ein Windungsverhältnis von:

\[
2:1
\]

zu einem Impedanzverhältnis von:

\[
4:1
\]

## HB9-Vertiefung: Viertelwellentransformator

Auch eine Leitung mit einer elektrischen Länge von:

\[
\frac{\lambda}{4}
\]

kann eine Impedanz transformieren.

Die BAKOM-Formelsammlung verwendet:

\[
Z_0 = \sqrt{Z_E \cdot Z_A}
\]

Dabei gilt:

- \(Z_E\) = Eingangsimpedanz
- \(Z_A\) = Ausgangsimpedanz
- \(Z_0\) = erforderlicher Wellenwiderstand der Transformationsleitung

### Beispiel

Eine 50 Ω Leitung soll an einen Abschluss von 100 Ω angepasst werden.

Dann:

\[
Z_0 = \sqrt{50 \cdot 100}
\]

\[
Z_0 = \sqrt{5,000}
\]

\[
Z_0 \approx 70{,}7\ \Omega
\]

Benötigt wird also unter idealisierten Bedingungen eine Viertelwellenleitung mit ungefähr:

\[
70{,}7\ \Omega
\]

Wichtig ist dabei die **elektrische Länge** der Leitung.

Da sich elektromagnetische Wellen in einem Kabel langsamer ausbreiten als im freien Raum, muss der Verkürzungsfaktor berücksichtigt werden.

Das behandeln wir in Kapitel 7.

## SWR messen

Ein einfaches SWR-Meter wird zwischen Sender und Speiseleitung geschaltet.

Es erfasst:

- hinlaufende Leistung
- rücklaufende Leistung

und ermöglicht daraus die Bestimmung des SWR.

Ein moderner Antennenanalysator kann zusätzlich beispielsweise anzeigen:

- \(R\)
- \(X\)
- \(Z\)
- SWR
- Reflexionsfaktor
- Verlauf über einen Frequenzbereich

Damit sieht man wesentlich mehr als mit einer einfachen SWR-Anzeige.

## Warum über einen Frequenzbereich messen?

Eine einzelne SWR-Zahl sagt nur etwas über eine einzige Frequenz aus.

Interessanter ist häufig eine Kurve über einen Frequenzbereich.

Damit erkennt man beispielsweise:

- wo das SWR-Minimum liegt
- wie breit der brauchbare Frequenzbereich ist
- wie sich eine Änderung an der Antenne auswirkt

Bei einfachen resonanten Drahtantennen gilt als praktische Regel:

**Resonanzfrequenz zu tief:** Antenne tendenziell zu lang.

**Resonanzfrequenz zu hoch:** Antenne tendenziell zu kurz.

Bei komplexeren Antennensystemen kann das Verhalten wesentlich komplizierter sein.

## Was ist ein gutes SWR?

Das theoretische Ideal ist:

**1:1**

In der Praxis muss jedoch nicht jede Antenne zwanghaft auf exakt 1:1 gebracht werden.

Ob ein bestimmtes SWR technisch problematisch ist, hängt unter anderem ab von:

- Frequenz
- Speiseleitungsverlusten
- Leitungslänge
- Sender
- Antennensystem
- Einsatzzweck

Wichtiger als die Jagd nach einer möglichst kleinen Zahl ist deshalb das Verständnis des gesamten Antennensystems.

## Lernschema

Wenn du eine Aufgabe zu Anpassung oder SWR siehst, gehe in dieser Reihenfolge vor:

1. **Welche Impedanzen sind gegeben?**
2. **Sind sie gleich oder verschieden?**
3. **Liegt ein rein ohmscher Fall vor?**
4. **Welche Formel wird benötigt?**
5. **Ist der berechnete SWR-Wert mindestens 1?**
6. **Was bedeutet das Ergebnis technisch?**

Ein SWR kleiner als 1 ist nicht möglich.

## Die wichtigsten Zusammenhänge auf einen Blick

Perfekte Anpassung:

\[
Z_L = Z_0
\]

Dann:

\[
s = 1
\]

Reflexionsfaktor:

\[
|r| = \frac{s - 1}{s + 1}
\]

SWR aus Reflexionsfaktor:

\[
s = \frac{1 + |r|}{1 - |r|}
\]

Reflektierte Leistung:

\[
P_r = P_v \cdot |r|^2
\]

Viertelwellentransformator:

\[
Z_0 = \sqrt{Z_E \cdot Z_A}
\]

## Merksätze

**Impedanz ist der Wechselstromwiderstand eines elektrischen Systems.**

**Eine Impedanz kann aus Wirkwiderstand und Blindwiderstand bestehen.**

**Resonanz, Anpassung und Wirkungsgrad sind drei verschiedene Eigenschaften.**

**Eine resonante Antenne muss nicht 50 Ω besitzen.**

**Bei Fehlanpassung wird ein Teil der Welle reflektiert.**

**Hinlaufende und rücklaufende Wellen erzeugen stehende Wellen.**

**Das kleinstmögliche SWR ist 1:1.**

**Ein SWR von 1:1 beweist keinen hohen Antennenwirkungsgrad.**

**Ein SWR-Wert allein zeigt nicht, ob die Impedanz zu hoch oder zu niedrig ist.**

**Ein Antennentuner transformiert Impedanzen. Er verändert nicht automatisch die physische Antenne.**

## Selbstkontrolle

Versuche die Fragen zuerst ohne Nachschlagen zu beantworten.

1. Kann eine resonante Antenne ein SWR von 1,5:1 besitzen?
2. Beweist ein SWR von 1:1, dass eine Antenne einen hohen Wirkungsgrad besitzt?
3. Was geschieht auf einer Speiseleitung bei Fehlanpassung?
4. Was bedeutet bei einer Antennenimpedanz der Blindanteil \(X\)?
5. Welches SWR ergibt ein rein ohmscher Abschluss von 100 Ω an einer 50 Ω Leitung?
6. Was macht ein Antennentuner?
7. Kann man aus einem SWR von 2:1 erkennen, ob der Abschluss 25 Ω oder 100 Ω besitzt?

### Antworten

1. **Ja.** Resonanz und Anpassung sind nicht dasselbe.
2. **Nein.** Auch ein verlustreicher 50 Ω Abschluss kann SWR 1:1 besitzen.
3. Ein Teil der Welle wird reflektiert. Hinlaufende und rücklaufende Wellen überlagern sich.
4. Er beschreibt den kapazitiven oder induktiven Anteil der Impedanz.
5. \(s = \frac{100}{50} = 2\), also **SWR 2:1**.
6. Er transformiert die Impedanz so, dass der Sender eine passende Last sieht.
7. **Nein.** Beide Werte können an einer 50 Ω Leitung SWR 2:1 erzeugen.

## Prüfungsbezug HB3 und HB9

Die aktuellen BAKOM-Prüfungsvorschriften führen **Antennenzuleitungen und Anpassung** ausdrücklich als Prüfungsstoff.

Für beide Ausbildungsstufen ist das grundlegende Verständnis wichtig:

- Wellenwiderstand
- Impedanz
- Anpassung
- Fehlanpassung
- stehende Wellen
- SWR
- Zweck eines Antennentuners
- grundlegende Eigenschaften von Speiseleitungen

Für HB9 ist zusätzlich mit vertiefteren technischen und rechnerischen Fragestellungen zu rechnen, beispielsweise:

- komplexere Impedanzbetrachtung
- Reflexionsfaktor
- hinlaufende und rücklaufende Leistung
- Impedanztransformation
- Viertelwellentransformator

Die BAKOM-Formelsammlung stellt die dafür benötigten Formeln an der Prüfung zur Verfügung.

## Navigation

[← Kapitel 5: Antennenformen und Abstrahlung](05-antennenformen.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 7: Speiseleitungen →](07-speiseleitungen.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
