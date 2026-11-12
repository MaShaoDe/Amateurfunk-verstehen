# Kapitel 7: Speiseleitungen

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, welche Aufgabe eine Speiseleitung hat
- Koaxialkabel und symmetrische Zweidrahtleitungen unterscheiden können
- erklären können, was der Wellenwiderstand einer Leitung bedeutet
- verstehen, weshalb der Wellenwiderstand nicht mit dem ohmschen Widerstand des Kabels verwechselt werden darf
- erklären können, weshalb sich Funkwellen in Kabeln langsamer ausbreiten als im freien Raum
- den Verkürzungsfaktor anwenden können
- Leitungsdämpfung verstehen und einfache Berechnungen in dB durchführen können
- erklären können, weshalb Leitungsverluste mit Leitungslänge und Frequenz wichtig werden
- verstehen, wie Fehlanpassung und Speiseleitung zusammenwirken
- die grundlegenden Unterschiede zwischen Koaxialleitung, Zweidrahtleitung und Hohlleiter kennen

> **Hinweis zu HB3 und HB9:**
> Das BAKOM legt fest, dass die technischen und rechnerischen Fragen für HB3 weniger komplex sind als für HB9. Die Bezeichnung **HB9-Vertiefung** in diesem Lehrwerk dient als Lernhilfe und stellt keine zusätzliche offizielle Stoffabgrenzung des BAKOM dar.

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
<td><span class="arithmatex">\(Z_0\)</span></td>
<td>Z null</td>
<td>Wellenwiderstand einer Leitung</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(L'\)</span></td>
<td>L Strich</td>
<td>Induktivitätsbelag</td>
<td>H/m</td>
</tr>
<tr>
<td><span class="arithmatex">\(C'\)</span></td>
<td>C Strich</td>
<td>Kapazitätsbelag</td>
<td>F/m</td>
</tr>
<tr>
<td><span class="arithmatex">\(\varepsilon_r\)</span></td>
<td>Epsilon r</td>
<td>relative Permittivität des Isolierstoffes</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(D\)</span></td>
<td>D</td>
<td>Innendurchmesser des Aussenleiters</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(d_i\)</span></td>
<td>d i</td>
<td>Durchmesser des Innenleiters</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(a\)</span></td>
<td>a</td>
<td>Mittenabstand bei Zweidrahtleitungen</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(d\)</span></td>
<td>d</td>
<td>Leiterdurchmesser</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(k_v\)</span></td>
<td>k v</td>
<td>Verkürzungsfaktor</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(l_G\)</span></td>
<td>l G</td>
<td>geometrische Länge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(l_E\)</span></td>
<td>l E</td>
<td>elektrische Länge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(c\)</span></td>
<td>c</td>
<td>Ausbreitungsgeschwindigkeit im Material</td>
<td>m/s</td>
</tr>
<tr>
<td><span class="arithmatex">\(c_0\)</span></td>
<td>c null</td>
<td>Lichtgeschwindigkeit im Vakuum</td>
<td>m/s</td>
</tr>
<tr>
<td><span class="arithmatex">\(a\)</span></td>
<td>a</td>
<td>Dämpfung</td>
<td>dB</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_1\)</span></td>
<td>P 1</td>
<td>Eingangsleistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_2\)</span></td>
<td>P 2</td>
<td>Ausgangsleistung</td>
<td>W</td>
</tr>
</tbody>
</table>

Der griechische Buchstabe \(\varepsilon\), gesprochen **Epsilon**, wird hier für die elektrischen Eigenschaften des Isolierstoffes verwendet.

## Der rote Faden

Die Aufgabe einer Speiseleitung lässt sich zunächst sehr einfach darstellen:

**Sender → Speiseleitung → Antenne**

Beim Empfang läuft der Weg umgekehrt:

**Antenne → Speiseleitung → Empfänger**

Die Speiseleitung soll die Hochfrequenzenergie möglichst verlustarm zwischen Funkgerät und Antenne transportieren.

Dabei interessieren uns vor allem vier Eigenschaften:

1. **Wellenwiderstand**
2. **Dämpfung**
3. **Ausbreitungsgeschwindigkeit**
4. **elektrische Länge**

## Eine Speiseleitung ist mehr als ein Stück Draht

Bei Gleichstrom kann man eine Leitung häufig einfach als elektrischen Leiter mit einem bestimmten Widerstand betrachten.

Bei Hochfrequenz genügt diese Vorstellung nicht mehr.

Spannung, Strom sowie elektrische und magnetische Felder breiten sich entlang der Leitung als elektromagnetische Welle aus.

Die Leitung besitzt deshalb Eigenschaften, die bei Gleichstrom kaum sichtbar werden.

Dazu gehört insbesondere der:

**Wellenwiderstand \(Z_0\)**

## Was ist der Wellenwiderstand?

Der Wellenwiderstand beschreibt das Verhältnis von Spannung und Strom einer sich auf der Leitung ausbreitenden Welle.

Seine Einheit ist:

\[
\Omega
\]

Ein typisches Koaxialkabel im Amateurfunk besitzt beispielsweise:

\[
Z_0 = 50\ \Omega
\]

Wichtig:

> **50 Ω Wellenwiderstand bedeutet nicht, dass das Kabel mit einem Ohmmeter von einem Ende zum anderen 50 Ω Widerstand besitzt.**

Der Gleichstromwiderstand eines guten Koaxialkabels ist wesentlich kleiner und hängt unter anderem von Material, Querschnitt und Länge ab.

Der Wellenwiderstand ist dagegen eine **Hochfrequenzeigenschaft der Leitung**.

## Wovon hängt der Wellenwiderstand ab?

Der Wellenwiderstand einer HF-Leitung hängt grundsätzlich von ihren verteilten elektrischen Eigenschaften ab.

Die BAKOM-Formelsammlung gibt an:

\[
Z_0 = \sqrt{\frac{L'}{C'}}
\]

Dabei gilt:

- \(L'\) = Induktivität pro Meter
- \(C'\) = Kapazität pro Meter
- \(Z_0\) = Wellenwiderstand

Die Bauform der Leitung und das verwendete Isoliermaterial bestimmen diese Grössen.

## Der Wellenwiderstand hängt nicht von der Kabellänge ab

Ein wichtiger Punkt für die Prüfung:

Wenn ein Koaxialkabel einen Wellenwiderstand von:

\[
50\ \Omega
\]

besitzt, ändert sich dieser Wert nicht dadurch, dass man das Kabel kürzt.

Eine Rolle mit 100 m 50-Ω-Kabel bleibt also auch dann ein 50-Ω-Kabel, wenn davon nur noch 20 m verwendet werden.

> **Die Länge verändert nicht den konstruktiv festgelegten Wellenwiderstand der Leitung.**

Bei realen Kabeln können sich einzelne Leitungseigenschaften mit der Frequenz geringfügig verändern. Für die grundlegende Amateurfunkbetrachtung und das Prüfungsmodell wird der angegebene Wellenwiderstand jedoch als charakteristische Eigenschaft der Leitung behandelt.

## Das Koaxialkabel

Die im Amateurfunk am häufigsten verwendete Speiseleitung ist das **Koaxialkabel**.

Es besteht grundsätzlich aus:

- Innenleiter
- Isoliermaterial beziehungsweise Dielektrikum
- Aussenleiter oder Abschirmung
- Schutzmantel

Innenleiter und Aussenleiter besitzen dieselbe geometrische Achse. Daher stammt die Bezeichnung:

**koaxial**

## Warum ist das Koaxialkabel so praktisch?

Im idealen Koaxialkabel befinden sich die elektrischen und magnetischen Felder zwischen Innenleiter und Innenseite des Aussenleiters.

Dadurch ist das elektromagnetische Feld weitgehend gegenüber der Umgebung abgeschirmt.

Das besitzt mehrere Vorteile:

- geringe Beeinflussung durch die Umgebung
- geringe unerwünschte Abstrahlung bei korrektem Betrieb
- einfache Verlegung
- mechanisch robuste Bauformen
- definierter Wellenwiderstand

Koaxialkabel sind deshalb für viele Amateurfunkanlagen sehr praktisch.

## HB9-Vertiefung: Wellenwiderstand eines Koaxialkabels

Die BAKOM-Formelsammlung gibt für eine koaxiale Leitung:

\[
Z_0 = \frac{60\ \Omega}{\sqrt{\varepsilon_r}} \cdot \ln\left(\frac{D}{d_i}\right)
\]

Dabei gilt:

- \(D\) = Innendurchmesser des Aussenleiters
- \(d_i\) = Durchmesser des Innenleiters
- \(\varepsilon_r\) = relative Permittivität des Dielektrikums
- \(\ln\) = natürlicher Logarithmus

Damit wird sichtbar:

Der Wellenwiderstand hängt wesentlich ab von:

- Verhältnis der Leiterdurchmesser
- elektrischem Verhalten des Isoliermaterials

Nicht von der Gesamtlänge des Kabels.

## Warum 50 Ω?

Bei Amateurfunkgeräten ist:

\[
50\ \Omega
\]

eine sehr verbreitete Systemimpedanz.

Senderausgänge, Messgeräte, Koaxialkabel und viele Antennensysteme werden deshalb für 50 Ω ausgelegt.

Es existieren jedoch auch andere Wellenwiderstände.

Beispielsweise sind 75-Ω-Koaxialkabel in anderen Anwendungen weit verbreitet.

Ein Kabel ist also nicht allein deshalb «Koaxialkabel», weil es 50 Ω besitzt.

## Symmetrische Zweidrahtleitung

Eine andere Speiseleitungsform besteht aus zwei parallel verlaufenden Leitern.

Sie wird beispielsweise bezeichnet als:

- Zweidrahtleitung
- Paralleldrahtleitung
- Hühnerleiter
- offene Speiseleitung

Beide Leiter sind elektrisch gleichwertig angeordnet.

Eine solche Leitung ist **symmetrisch**.

Im idealen Betrieb fliessen in den beiden Leitern gleich grosse Ströme in entgegengesetzter Richtung.

## Warum strahlt eine Zweidrahtleitung nicht wie eine Antenne?

Die beiden Leiter liegen nahe beieinander.

Die Ströme fliessen in entgegengesetzte Richtungen.

Dadurch heben sich die von ihnen erzeugten Fernfelder weitgehend gegenseitig auf.

Deshalb kann eine korrekt betriebene Zweidrahtleitung Hochfrequenzenergie transportieren, ohne selbst stark als Antenne zu wirken.

Das Prinzip kennen wir bereits aus Kapitel 3.

## Eigenschaften einer offenen Zweidrahtleitung

Offene Zweidrahtleitungen können insbesondere auf Kurzwelle sehr geringe Verluste besitzen.

Sie haben jedoch andere praktische Eigenschaften als Koaxialkabel.

Die Felder befinden sich nicht innerhalb einer geschlossenen Abschirmung.

Deshalb reagiert die Leitung stärker auf ihre Umgebung.

Sie sollte beispielsweise nicht unmittelbar:

- an Metallteilen
- an Regenrinnen
- an leitfähigen Masten
- entlang grösserer Metallflächen

geführt werden.

Auch die mechanische Anordnung der beiden Leiter ist wichtig.

## HB9-Vertiefung: Wellenwiderstand einer Zweidrahtleitung

Für eine symmetrische Zweidrahtleitung gibt die BAKOM-Formelsammlung bei:

\[
\frac{a}{d} > 2{,}5
\]

näherungsweise an:

\[
Z_0 = \frac{120\ \Omega}{\sqrt{\varepsilon_r}} \cdot \ln\left(\frac{2a}{d}\right)
\]

Dabei gilt:

- \(a\) = Mittenabstand der beiden Leiter
- \(d\) = Leiterdurchmesser
- \(\varepsilon_r\) = relative Permittivität des umgebenden Isoliermaterials

Je nach Konstruktion können solche Leitungen wesentlich höhere Wellenwiderstände als typische Koaxialkabel besitzen.

## Symmetrisch und unsymmetrisch

Ein Dipol ist grundsätzlich ein symmetrisches Antennensystem.

Ein Koaxialkabel ist dagegen eine unsymmetrische Leitung.

Verbindet man beide direkt miteinander, können unerwünschte Gleichtaktströme entstehen.

Deshalb wird an solchen Übergängen häufig ein:

**Balun**

verwendet.

Balun und Impedanztransformation wurden bereits in Kapitel 6 behandelt.

## Mantelwellen

Bei einem Koaxialkabel soll der Nutzstrom grundsätzlich im Innenleiter und auf der Innenseite des Aussenleiters fliessen.

Unter ungünstigen Bedingungen kann zusätzlich HF-Strom auf der **Aussenseite des Kabelschirms** fliessen.

Man spricht häufig von:

**Mantelwellen**

Diese können dazu führen, dass:

- das Koaxialkabel selbst abstrahlt
- das Strahlungsdiagramm der Antenne verändert wird
- Hochfrequenz in den Funkraum gelangt
- Störungen entstehen
- Messungen schwerer interpretierbar werden

Eine geeignete Mantelwellensperre beziehungsweise ein Strombalun kann solche Ströme vermindern.

## Drei Dinge, die man nicht verwechseln darf

| Begriff | Bedeutung |
| --- | --- |
| **ohmscher Kabelwiderstand** | Verlust durch den elektrischen Widerstand der Leiter |
| **Wellenwiderstand** | charakteristische HF-Eigenschaft der Leitung |
| **Abschlussimpedanz** | elektrische Last am Ende der Leitung |

Ein Koaxialkabel kann also einen Wellenwiderstand von:

\[
50\ \Omega
\]

besitzen, obwohl sein ohmscher Widerstand nur einen kleinen Bruchteil davon beträgt.

## Ausbreitungsgeschwindigkeit im Kabel

Im freien Raum breiten sich elektromagnetische Wellen mit ungefähr:

\[
c_0 = 300,000,000\ \mathrm{m/s}
\]

aus.

In einer Speiseleitung befindet sich zwischen den Leitern ein Isoliermaterial.

Dadurch ist die Ausbreitungsgeschwindigkeit kleiner als im Vakuum.

Das BAKOM verwendet dafür den:

**Verkürzungsfaktor \(k_v\)**

## Verkürzungsfaktor

Nach der BAKOM-Formelsammlung gilt:

\[
k_v = \frac{l_G}{l_E} = \frac{c}{c_0} \approx \frac{1}{\sqrt{\varepsilon_r}}
\]

Dabei gilt:

- \(k_v\) = Verkürzungsfaktor
- \(l_G\) = geometrische Länge
- \(l_E\) = elektrische Länge
- \(c\) = Ausbreitungsgeschwindigkeit im Kabel
- \(c_0\) = Lichtgeschwindigkeit im Vakuum

Da:

\[
c < c_0
\]

ist der Verkürzungsfaktor kleiner als 1.

## Was bedeutet elektrische Länge?

Eine Leitung kann mechanisch beispielsweise:

**3,5 m**

lang sein, sich elektrisch aber wie eine längere Leitung im freien Raum verhalten.

Das liegt daran, dass sich die Welle im Kabel langsamer fortbewegt.

Deshalb muss bei Leitungsstücken mit definierter elektrischer Länge, beispielsweise einem Viertelwellentransformator, der Verkürzungsfaktor berücksichtigt werden.

## Beispiel für einen Verkürzungsfaktor

Nehmen wir ein Kabel mit:

\[
k_v = 0{,}66
\]

Die Freiraumwellenlänge bei 14,2 MHz beträgt ungefähr:

\[
\lambda_0 = \frac{300}{14{,}2} \approx 21{,}1\ \mathrm{m}
\]

Im Kabel beträgt die Wellenlänge:

\[
\lambda_K = 21{,}1 \cdot 0{,}66
\]

\[
\lambda_K
\approx
13{,}9\ \mathrm{m}
\]

Eine elektrische Viertelwelle ist deshalb mechanisch nur:

\[
\frac{13{,}9}{4} \approx 3{,}48\ \mathrm{m}
\]

lang.

Ohne Berücksichtigung des Verkürzungsfaktors würde man ein deutlich zu langes Kabelstück abschneiden.

## Merkhilfe

**Freier Raum: längere Wellenlänge**

**Kabel: kleinere Ausbreitungsgeschwindigkeit und kürzere Wellenlänge**

Die Frequenz bleibt dabei gleich.

## Leitungsdämpfung

Keine reale Speiseleitung ist vollständig verlustfrei.

Ein Teil der transportierten Hochfrequenzleistung wird im Kabel in Wärme umgesetzt.

Man spricht von:

**Leitungsdämpfung**

Sie wird normalerweise in:

\[
\mathrm{dB}
\]

angegeben.

## Wodurch entstehen Kabelverluste?

Zu den Ursachen gehören insbesondere:

- Widerstandsverluste in den Leitern
- Verluste im Dielektrikum
- Leitungsverluste durch Abschirmung und Konstruktion
- Steckverbinder und Übergänge

Zusätzlich können Feuchtigkeit, Korrosion und beschädigte Kabel die Verluste erheblich erhöhen.

## Länge und Frequenz

Grundsätzlich gilt:

**Je länger die Leitung, desto grösser die Dämpfung.**

Bei typischen HF-Kabeln steigt die Dämpfung ausserdem mit zunehmender Frequenz.

Deshalb kann ein Kabel, das auf Kurzwelle problemlos funktioniert, bei hohen VHF- oder UHF-Frequenzen bereits erhebliche Verluste verursachen.

Die Auswahl der Speiseleitung wird mit steigender Frequenz immer wichtiger.

## Dämpfung auf die Leitungslänge umrechnen

Wird beispielsweise angegeben:

**10 dB pro 100 m**

und die verwendete Leitung ist:

**30 m**

lang, beträgt die Dämpfung:

\[
a = 10\ \mathrm{dB} \cdot \frac{30}{100}
\]

\[
a = 3\ \mathrm{dB}
\]

## Was bedeuten 3 dB?

Eine Leistungsdämpfung von ungefähr:

\[
3\ \mathrm{dB}
\]

bedeutet näherungsweise eine Halbierung der Leistung.

Aus:

\[
10\ \mathrm{W}
\]

werden damit am Leitungsende ungefähr:

\[
5\ \mathrm{W}
\]

Das ist ein sehr wichtiger Zusammenhang für die Praxis.

## HB9-Vertiefung: Dämpfung berechnen

Die BAKOM-Formelsammlung verwendet für Leistungen:

\[
a = 10 \cdot \lg\left(\frac{P_1}{P_2}\right)
\]

Daraus kann die Ausgangsleistung bestimmt werden:

\[
P_2 = \frac{P_1}{10^{a/10}}
\]

### Beispiel

Gegeben:

\[
P_1 = 10\ \mathrm{W}
\]

und:

\[
a = 3\ \mathrm{dB}
\]

Dann:

\[
P_2 = \frac{10}{10^{3/10}}
\]

\[
P_2
\approx
5{,}0\ \mathrm{W}
\]

Von den 10 W erreichen also ungefähr 5 W das Leitungsende.

## Warum Kabelverluste beim Empfang ebenfalls wichtig sind

Die Leitungsdämpfung wirkt nicht nur beim Senden.

Auch ein schwaches Empfangssignal wird auf seinem Weg durch die Leitung gedämpft.

Besonders bei VHF, UHF und höheren Frequenzen kann deshalb eine verlustarme Speiseleitung entscheidend sein.

Ein schlechteres Kabel kann nicht nur Sendeleistung vernichten, sondern auch das empfangene Nutzsignal abschwächen, bevor es überhaupt den Empfänger erreicht.

## Fehlanpassung und Leitungsverlust

Aus Kapitel 6 wissen wir:

Bei Fehlanpassung entstehen hinlaufende und rücklaufende Wellen.

In einer realen verlustbehafteten Leitung werden beide gedämpft.

Eine starke Fehlanpassung kann deshalb die Gesamtverluste des Speisesystems erhöhen.

Besonders problematisch wird dies bei:

- langen Leitungen
- hohen Frequenzen
- stark verlustbehafteten Kabeln
- hohem SWR

Ein Antennentuner beim Funkgerät kann zwar dafür sorgen, dass der Sender eine passende Impedanz sieht.

Er beseitigt aber nicht automatisch die zusätzlichen Verluste auf der Speiseleitung.

## Die Leitungslänge verändert nicht automatisch das SWR der Antenne

Ein verbreitetes Missverständnis lautet:

> «Wenn das SWR schlecht ist, schneide ich einfach das Koaxialkabel kürzer.»

Damit wird die Ursache der Fehlanpassung normalerweise nicht beseitigt.

In einer ideal verlustlosen Leitung bleibt das SWR, das durch den Abschluss verursacht wird, entlang der Leitung gleich.

Die Impedanz, die man an unterschiedlichen Stellen der Leitung misst, kann sich jedoch ändern.

Das ist ein wichtiger Unterschied.

> **Die Kabellänge kann die am Leitungseingang gemessene Impedanz verändern, sie macht eine fehlangepasste Antenne aber nicht automatisch angepasst.**

## HB9-Vertiefung: Leitung als Impedanztransformator

Eine fehlangepasste HF-Leitung kann abhängig von ihrer elektrischen Länge eine andere Impedanz an ihrem Eingang zeigen als am Leitungsende vorhanden ist.

Das ist kein Fehler der Leitung.

Es ist eine grundlegende Eigenschaft von Übertragungsleitungen.

Ein gezielt eingesetztes Beispiel kennen wir bereits:

**Viertelwellentransformator**

Hier wird die elektrische Leitungslänge bewusst zur Impedanztransformation genutzt.

## Hohlleiter

Bei sehr hohen Frequenzen kann Hochfrequenzenergie auch durch metallische Hohlleiter übertragen werden.

Ein **Hohlleiter** besteht nicht aus einem klassischen Innenleiter und Aussenleiter wie ein Koaxialkabel.

Elektromagnetische Felder breiten sich innerhalb eines metallischen Hohlraums in bestimmten Wellenformen aus.

Hohlleiter werden insbesondere im Mikrowellenbereich eingesetzt.

Für Kurzwelle wären die erforderlichen Abmessungen unpraktisch gross.

Deshalb werden Hohlleiter dort normalerweise nicht als Speiseleitung verwendet.

## Koaxialleitung, Zweidrahtleitung oder Hohlleiter?

Eine stark vereinfachte Übersicht:

| Leitung | Typischer Einsatz | Eigenschaft |
| --- | --- | --- |
| Koaxialkabel | HF, VHF, UHF und darüber | abgeschirmt, einfach zu verlegen |
| Zweidrahtleitung | besonders Kurzwelle | symmetrisch, teilweise sehr verlustarm |
| Hohlleiter | Mikrowellen | für sehr hohe Frequenzen geeignet |

Welche Leitung optimal ist, hängt von der jeweiligen Funkanlage ab.

## Steckverbinder

Auch Steckverbinder gehören zum HF-Übertragungsweg.

Ein ungeeigneter oder schlecht montierter Steckverbinder kann:

- zusätzliche Verluste verursachen
- Fehlanpassungen erzeugen
- Feuchtigkeit eindringen lassen
- Kontaktprobleme verursachen

Bei steigender Frequenz werden die HF-Eigenschaften des Steckverbinders zunehmend wichtig.

Deshalb sollte nicht nur das Kabel, sondern der gesamte Übertragungsweg betrachtet werden.

## Feuchtigkeit ist ein ernstes Problem

Wasser in einem Koaxialkabel kann dessen elektrische Eigenschaften stark verschlechtern.

Besonders problematisch sind:

- nicht abgedichtete Aussenstecker
- beschädigte Kabelmäntel
- nach unten laufendes Wasser entlang des Kabels
- Korrosion an Steckverbindern

Eine wetterfeste Installation gehört deshalb zu einem guten Antennensystem.

## Das Speisesystem als Ganzes betrachten

Für eine gute Funkanlage genügt es nicht, nur die Antenne zu betrachten.

Zum gesamten HF-Weg gehören:

**Sender → Steckverbinder → Speiseleitung → Anpassung → Antenne**

Jede dieser Komponenten kann:

- Verluste erzeugen
- Fehlanpassungen verursachen
- die abgestrahlte Leistung beeinflussen

Bei Problemen sollte deshalb immer das gesamte System untersucht werden.

## Lernschema

Bei einer Aufgabe zu Speiseleitungen gehe am besten in dieser Reihenfolge vor:

1. **Welche Leitungsart liegt vor?**
2. **Welchen Wellenwiderstand besitzt sie?**
3. **Welche Frequenz wird verwendet?**
4. **Wie lang ist die Leitung?**
5. **Ist eine Dämpfung angegeben?**
6. **Muss der Verkürzungsfaktor berücksichtigt werden?**
7. **Ist die Leitung angepasst oder fehlangepasst?**
8. **Welche Grösse wird gesucht?**

Damit lassen sich die meisten Prüfungsaufgaben systematisch zerlegen.

## Die wichtigsten Zusammenhänge auf einen Blick

Wellenwiderstand einer HF-Leitung:

\[
Z_0 = \sqrt{\frac{L'}{C'}}
\]

Verkürzungsfaktor:

\[
k_v = \frac{l_G}{l_E} = \frac{c}{c_0} \approx \frac{1}{\sqrt{\varepsilon_r}}
\]

Leistungsdämpfung:

\[
a = 10 \cdot \lg\left(\frac{P_1}{P_2}\right)
\]

Ausgangsleistung:

\[
P_2 = \frac{P_1}{10^{a/10}}
\]

## Merksätze

**Eine Speiseleitung transportiert Hochfrequenzenergie zwischen Funkgerät und Antenne.**

**Der Wellenwiderstand ist nicht dasselbe wie der ohmsche Widerstand des Kabels.**

**Der Wellenwiderstand einer Leitung wird durch ihre Konstruktion und das Dielektrikum bestimmt, nicht durch ihre Gesamtlänge.**

**50 Ω sind im Amateurfunk eine sehr verbreitete Systemimpedanz.**

**Koaxialkabel sind unsymmetrische, Zweidrahtleitungen symmetrische Leitungen.**

**Elektromagnetische Wellen breiten sich in einem Kabel langsamer aus als im freien Raum.**

**Der Verkürzungsfaktor muss bei elektrischen Leitungslängen berücksichtigt werden.**

**Längere Leitungen verursachen mehr Dämpfung.**

**Mit zunehmender Frequenz steigen bei üblichen HF-Kabeln typischerweise die Verluste.**

**3 dB Leitungsdämpfung entsprechen ungefähr einer Halbierung der Leistung.**

**Ein kürzeres Koaxialkabel behebt nicht automatisch eine Fehlanpassung der Antenne.**

**Ein gutes Antennensystem besteht nicht nur aus einer guten Antenne, sondern auch aus einer geeigneten Speiseleitung.**

## Selbstkontrolle

Versuche zuerst, die Fragen ohne Nachschlagen zu beantworten.

1. Besitzt ein 20 m langes Stück eines 50-Ω-Koaxialkabels einen anderen Wellenwiderstand als ein 100 m langes Stück desselben Kabels?
2. Warum darf der Wellenwiderstand eines Koaxialkabels nicht mit seinem Gleichstromwiderstand verwechselt werden?
3. Welche drei grundlegenden Bestandteile besitzt ein Koaxialkabel mindestens?
4. Warum breitet sich eine elektromagnetische Welle in einem Kabel langsamer aus als im Vakuum?
5. Was bedeutet ein Verkürzungsfaktor von 0,66?
6. Eine Leitung besitzt 3 dB Dämpfung. Welche ungefähre Leistung kommt bei 10 W Eingangsleistung am Ausgang an?
7. Welche Speiseleitungsart ist symmetrisch: Koaxialkabel oder Zweidrahtleitung?
8. Warum ist ein Hohlleiter für typische Kurzwellenanlagen unpraktisch?

### Antworten

1. **Nein.** Beide besitzen weiterhin den konstruktiv festgelegten Wellenwiderstand von 50 Ω.
2. Der Wellenwiderstand beschreibt die Ausbreitung einer HF-Welle auf der Leitung. Der Gleichstromwiderstand beschreibt die ohmschen Verluste der Leiter.
3. Innenleiter, Dielektrikum und Aussenleiter beziehungsweise Abschirmung. In der Praxis kommt zusätzlich ein Schutzmantel hinzu.
4. Weil das elektromagnetische Feld sich teilweise in einem Material mit anderen elektrischen Eigenschaften als Vakuum befindet.
5. Die Ausbreitungsgeschwindigkeit beträgt ungefähr 66 % der Lichtgeschwindigkeit im Vakuum. Entsprechend ist auch die Wellenlänge in der Leitung kürzer.
6. Ungefähr:

\[
5\ \mathrm{W}
\]

1. Die **Zweidrahtleitung**.
2. Weil die notwendigen Abmessungen bei den langen Wellenlängen der Kurzwelle sehr gross wären.

## Prüfungsbezug HB3 und HB9

Die aktuellen BAKOM-Prüfungsvorschriften nennen **Antennenzuleitungen und Anpassung** ausdrücklich als Bestandteil der Elektro- und Funktechnik.

Für das grundlegende Verständnis sind insbesondere wichtig:

- Koaxialkabel
- symmetrische Speiseleitungen
- Wellenwiderstand
- Leitungsdämpfung
- Ausbreitungsgeschwindigkeit
- Verkürzungsfaktor
- elektrische und geometrische Leitungslänge
- Zusammenhang zwischen Speiseleitung und Anpassung
- grundlegende Eigenschaften von Hohlleitern

In vorhandenen schweizerischen Prüfungsunterlagen werden für HB3 und HB9 unter anderem Fragen zum Wellenwiderstand von Koaxialkabeln, zur Ausbreitungsgeschwindigkeit im Kabel und zur Leitungsdämpfung verwendet.

Für HB9 sind zusätzlich vertieftere rechnerische Aufgaben zu erwarten, beispielsweise:

- Berechnung des Wellenwiderstands
- Berechnung elektrischer Leitungslängen
- Anwendung des Verkürzungsfaktors
- Leistungsberechnungen mit Leitungsdämpfung
- Verhalten fehlangepasster Leitungen

Die dafür benötigten Grundformeln sind in der BAKOM-Formelsammlung enthalten.

## Navigation

[← Kapitel 6: Impedanz, Anpassung und SWR](06-impedanz-anpassung-swr.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 8: Funkwellenausbreitung →](08-funkwellenausbreitung.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
