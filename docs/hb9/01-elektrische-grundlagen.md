# Kapitel 1: Elektrische Grundlagen

## Lernziele

Nach diesem Kapitel solltest du:

- elektrische Ladung, Strom, Spannung und Widerstand unterscheiden können
- die technische Stromrichtung erklären können
- Leiter, Isolatoren und Halbleiter unterscheiden können
- erklären können, wovon der Widerstand eines Leiters abhängt
- das Ohmsche Gesetz sicher anwenden können
- einfache Reihen- und Parallelschaltungen berechnen können
- einen Spannungsteiler verstehen und berechnen können
- die Kirchhoffschen Regeln grundsätzlich anwenden können
- elektrische Leistung, Arbeit und Energie unterscheiden können
- die Belastbarkeit eines Widerstandes beurteilen können
- Spannungsquellen und Stromquellen grundsätzlich unterscheiden können
- Innenwiderstand und Klemmenspannung einer realen Spannungsquelle verstehen können
- Kapazitätsangabe in Ah und Energieangabe in Wh auseinanderhalten können
- Gleichstrom und Wechselstrom unterscheiden können
- Effektivwert, Spitzenwert und Spitze-Spitze-Wert eines sinusförmigen Signals unterscheiden können
- SI-Vorsätze und Zehnerpotenzen sicher anwenden können
- einfache Formeln nach der gesuchten Grösse umstellen können

> **Hinweis zu HB3 und HB9:**
> Die aktuellen BAKOM-Prüfungsvorschriften behandeln Grössen und Einheiten, elektrische Leitfähigkeit, Spannungs- und Stromquellen sowie Spannungs-, Strom- und Leistungsberechnungen ausdrücklich als Prüfungsstoff. Für HB3 sind die technischen und rechnerischen Fragen weniger komplex als für HB9. Die Kennzeichnung **HB9-Vertiefung** in diesem Lehrwerk dient als Lernhilfe.

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
<td><span class="arithmatex">\(Q\)</span></td>
<td>Q</td>
<td>elektrische Ladung</td>
<td>C</td>
</tr>
<tr>
<td><span class="arithmatex">\(I\)</span></td>
<td>I</td>
<td>Stromstärke</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(U\)</span></td>
<td>U</td>
<td>elektrische Spannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(R\)</span></td>
<td>R</td>
<td>elektrischer Widerstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(\rho\)</span></td>
<td>Rho</td>
<td>spezifischer Widerstand</td>
<td><span class="arithmatex">\(\Omega,\mathrm{mm^2/m}\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(l\)</span></td>
<td>l</td>
<td>Leiterlänge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(A\)</span></td>
<td>A</td>
<td>Leiterquerschnitt</td>
<td>mm²</td>
</tr>
<tr>
<td><span class="arithmatex">\(P\)</span></td>
<td>P</td>
<td>elektrische Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(W\)</span></td>
<td>W</td>
<td>elektrische Arbeit beziehungsweise Energie</td>
<td>J beziehungsweise Wh</td>
</tr>
<tr>
<td><span class="arithmatex">\(t\)</span></td>
<td>t</td>
<td>Zeit</td>
<td>s beziehungsweise h</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{eff}\)</span></td>
<td>U eff</td>
<td>Effektivwert einer Wechselspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U\)</span></td>
<td>U Dach</td>
<td>Spitzenwert einer Wechselspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{ss}\)</span></td>
<td>U ss</td>
<td>Spitze-Spitze-Spannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_i\)</span></td>
<td>R i</td>
<td>Innenwiderstand einer Quelle</td>
<td>Ω</td>
</tr>
</tbody>
</table>

Der griechische Buchstabe \(\rho\), gesprochen **Rho**, bezeichnet hier den spezifischen elektrischen Widerstand eines Materials.

Das Zeichen:

\[
\Omega
\]

gesprochen **Omega**, ist die Einheit Ohm.

## Der rote Faden

Fast alle elektrischen Schaltungen lassen sich zunächst mit vier Grundgrössen verstehen:

**Spannung**

→ treibt

**Strom**

→ fliesst

**Widerstand**

→ begrenzt

**Leistung**

→ beschreibt, wie viel Energie pro Zeit umgesetzt wird

Der wichtigste Zusammenhang dieses Kapitels lautet:

\[
U = R \cdot I
\]

Das ist das **Ohmsche Gesetz**.

Aus ihm und aus:

\[
P = U \cdot I
\]

lassen sich bereits sehr viele grundlegende Aufgaben der Elektronik und Funktechnik lösen.

---

# Elektrische Ladung

Materie besteht aus Atomen.

Für elektrische Vorgänge sind insbesondere die elektrisch geladenen Teilchen wichtig.

Elektronen tragen eine negative elektrische Ladung.

Protonen tragen eine positive elektrische Ladung.

Sind in einem Körper gleich viele positive und negative Ladungen vorhanden, erscheint er nach aussen elektrisch neutral.

Ein Überschuss oder Mangel an Elektronen führt zu einer elektrischen Ladung.

Das Formelzeichen der Ladung lautet:

\[
Q
\]

Die Einheit ist:

\[
\mathrm{C}
\]

Coulomb.

## Spannung entsteht durch Ladungstrennung

Werden positive und negative Ladungen voneinander getrennt, entsteht ein elektrischer Potentialunterschied.

Dieser Potentialunterschied wird als:

**elektrische Spannung**

bezeichnet.

Eine Batterie hält beispielsweise zwischen ihren beiden Anschlüssen einen solchen Potentialunterschied aufrecht.

---

# Elektrischer Strom

Elektrischer Strom ist die gerichtete Bewegung elektrischer Ladungsträger.

Das Formelzeichen lautet:

\[
I
\]

Die Einheit ist:

\[
\mathrm{A}
\]

Ampere.

Ein Strom von einem Ampere bedeutet, dass pro Sekunde eine elektrische Ladungsmenge von einem Coulomb einen gedachten Leiterquerschnitt passiert.

Vereinfacht gilt:

\[
I = \frac{Q}{t}
\]

Damit gilt:

- viel Ladung in kurzer Zeit → grosser Strom
- wenig Ladung in langer Zeit → kleiner Strom

## Voraussetzung für einen dauernden Strom

Damit dauerhaft Strom fliessen kann, benötigt man:

- eine Spannungsquelle
- einen geschlossenen Stromkreis
- einen leitfähigen Weg

Ist der Stromkreis unterbrochen, fliesst kein dauernder Strom.

---

# Technische Stromrichtung

In metallischen Leitern bewegen sich Elektronen vom negativen zum positiven Pol.

Historisch wurde die Stromrichtung jedoch bereits festgelegt, bevor die Bewegung der Elektronen vollständig verstanden war.

Deshalb verwendet die Elektrotechnik bis heute die:

**technische Stromrichtung**

Sie verläuft:

**von Plus nach Minus**

ausserhalb der Spannungsquelle.

Die Elektronen bewegen sich in einem Metallleiter in die entgegengesetzte Richtung.

## Nicht verwechseln

| Begriff | Richtung |
| --- | --- |
| technische Stromrichtung | Plus → Minus |
| Elektronenbewegung im Metallleiter | Minus → Plus |

In Schaltplänen und Berechnungen verwenden wir grundsätzlich die **technische Stromrichtung**.

---

# Elektrische Spannung

Die elektrische Spannung beschreibt einen Unterschied im elektrischen Potential zwischen zwei Punkten.

Das Formelzeichen lautet:

\[
U
\]

Die Einheit ist:

\[
\mathrm{V}
\]

Volt.

Eine Spannung existiert immer:

**zwischen zwei Punkten**

Man sagt beispielsweise:

**Zwischen den beiden Polen einer Batterie liegen 12 V.**

## Eine hilfreiche Vorstellung

Als didaktisches Bild kann man eine Wasserleitung verwenden.

Die Spannung entspricht ungefähr einem Druckunterschied.

Der Strom entspricht ungefähr der fliessenden Wassermenge.

Der Widerstand entspricht einer Verengung der Leitung.

Diese Analogie ist nicht physikalisch vollständig, hilft aber beim Einstieg.

> **Spannung kann vorhanden sein, auch wenn kein Strom fliesst.**

Eine Batterie besitzt beispielsweise auch dann eine Spannung zwischen ihren Polen, wenn nichts angeschlossen ist.

---

# Leiter, Isolatoren und Halbleiter

Materialien unterscheiden sich stark darin, wie gut sie elektrischen Strom leiten.

## Leiter

Gute elektrische Leiter sind beispielsweise:

- Kupfer
- Silber
- Aluminium

Sie besitzen viele bewegliche Ladungsträger.

Kupfer wird deshalb sehr häufig für:

- Kabel
- Leiterbahnen
- Spulen
- Antennen

verwendet.

## Isolatoren

Isolatoren leiten elektrischen Strom nur sehr schlecht.

Beispiele:

- Glas
- Keramik
- viele Kunststoffe
- trockene Luft

Sie werden unter anderem verwendet, um leitende Teile elektrisch voneinander zu trennen.

## Halbleiter

Halbleiter liegen bezüglich ihrer elektrischen Leitfähigkeit zwischen guten Leitern und Isolatoren.

Wichtige Halbleitermaterialien sind:

- Silizium
- Germanium

Durch gezielte Veränderung ihrer Materialeigenschaften können daraus elektronische Bauelemente hergestellt werden.

Beispiele:

- Dioden
- Transistoren
- integrierte Schaltungen

Diese Bauelemente behandeln wir in Kapitel 11.

---

# Elektrischer Widerstand

Jeder reale Leiter behindert den elektrischen Strom in einem gewissen Mass.

Diese Eigenschaft nennt man:

**elektrischen Widerstand**

Das Formelzeichen ist:

\[
R
\]

Die Einheit ist:

\[
\Omega
\]

Ohm.

Ein grosser Widerstand behindert den Strom stärker als ein kleiner Widerstand.

---

# Wovon hängt der Widerstand eines Drahtes ab?

Für einen homogenen Leiter gilt:

\[
R = \rho \cdot \frac{l}{A}
\]

Dabei gilt:

- \(R\) = Widerstand
- \(\rho\) = spezifischer Widerstand des Materials
- \(l\) = Leiterlänge
- \(A\) = Leiterquerschnitt

Daraus folgen drei wichtige Regeln.

## Längerer Leiter

Je länger der Leiter:

**desto grösser der Widerstand**

## Grösserer Querschnitt

Je grösser der Querschnitt:

**desto kleiner der Widerstand**

## Anderes Material

Der spezifische Widerstand:

\[
\rho
\]

hängt vom Material und auch von der Temperatur ab.

Kupfer besitzt beispielsweise einen wesentlich kleineren spezifischen Widerstand als viele schlechter leitende Materialien.

## Merkhilfe

**lang und dünn**

→ hoher Widerstand

**kurz und dick**

→ niedriger Widerstand

---

# Beispiel Leiterwiderstand

Ein Kupferdraht besitzt:

\[
l = 20\ \mathrm{m}
\]

einen Querschnitt von:

\[
A = 1{,}5\ \mathrm{mm^2}
\]

und näherungsweise:

\[
\rho = 0{,}0178\ \Omega,\mathrm{mm^2/m}
\]

Dann:

\[
R = 0{,}0178 \cdot \frac{20}{1{,}5}
\]

\[
R
\approx
0{,}237\ \Omega
\]

Der Draht besitzt also einen Widerstand von ungefähr:

\[
0{,}24\ \Omega
\]

---

# Das Ohmsche Gesetz

Der wichtigste Zusammenhang zwischen:

- Spannung
- Strom
- Widerstand

lautet:

\[
U = R \cdot I
\]

Daraus folgen:

\[
I = \frac{U}{R}
\]

und:

\[
R = \frac{U}{I}
\]

Diese drei Formen beschreiben denselben Zusammenhang.

## Beispiel

Gegeben:

\[
U = 12\ \mathrm{V}
\]

\[
R = 6\ \Omega
\]

Gesucht:

\[
I
\]

Dann:

\[
I = \frac{U}{R}
\]

\[
I = \frac{12}{6}
\]

\[
I = 2\ \mathrm{A}
\]

---

# Der Zusammenhang verstehen

Bei konstantem Widerstand gilt:

**mehr Spannung**

→ mehr Strom

Bei konstanter Spannung gilt:

**mehr Widerstand**

→ weniger Strom

Das sollte nicht nur auswendig gelernt, sondern verstanden werden.

---

# Spannungsabfall

Fliesst Strom durch einen Widerstand, besteht zwischen dessen beiden Anschlüssen eine Spannung.

Diese Spannung wird häufig als:

**Spannungsabfall**

bezeichnet.

Es gilt:

\[
U_R = R \cdot I
\]

Der Begriff «Abfall» bedeutet nicht automatisch, dass es sich um einen unerwünschten Verlust handelt.

Auch an einem absichtlich eingesetzten Widerstand entsteht ein Spannungsabfall.

---

# Der einfache Stromkreis

Ein grundlegender Stromkreis besteht aus:

- Spannungsquelle
- Verbraucher
- Leitungen

Beispielsweise:

**Batterie → Widerstand → zurück zur Batterie**

Ist der Stromkreis geschlossen, kann Strom fliessen.

Ist er geöffnet, wird der Stromfluss unterbrochen.

---

# Kurzschluss

Von einem Kurzschluss spricht man, wenn zwei Punkte mit unterschiedlichem Potential über einen sehr kleinen Widerstand miteinander verbunden werden.

Beispiel:

Die beiden Pole einer Batterie werden direkt mit einem dicken Draht verbunden.

Nach:

\[
I = \frac{U}{R}
\]

führt ein sehr kleiner Widerstand theoretisch zu einem sehr grossen Strom.

In der Realität begrenzen unter anderem:

- Innenwiderstand der Quelle
- Leitungswiderstand
- Übergangswiderstände

den Strom.

Trotzdem können sehr hohe Ströme entstehen.

Mögliche Folgen:

- starke Erwärmung
- beschädigte Leitungen
- Brand
- zerstörte Bauteile
- beschädigte Akkumulatoren

---

# Spannungsquellen

Eine ideale Spannungsquelle hält ihre Ausgangsspannung unabhängig vom entnommenen Strom konstant.

Eine reale Spannungsquelle kann dies nicht vollständig.

Beispiele für Spannungsquellen:

- Batterie
- Akkumulator
- Netzgerät
- Generator
- Solarzelle

---

# Innenwiderstand einer Spannungsquelle

Eine reale Spannungsquelle kann vereinfacht als:

**ideale Spannungsquelle plus Innenwiderstand**

betrachtet werden.

Dieser Innenwiderstand wird mit:

\[
R_i
\]

bezeichnet.

Fliesst Strom, entsteht am Innenwiderstand ein Spannungsabfall.

Dadurch sinkt die an den äusseren Klemmen messbare Spannung.

## Leerlauf

Ist kein Verbraucher angeschlossen:

\[
I \approx 0
\]

Dann entsteht praktisch kein Spannungsabfall am Innenwiderstand.

Die Klemmenspannung liegt nahe an der Leerlaufspannung der Quelle.

## Belastung

Wird Strom entnommen:

\[
U_{R_i} = I \cdot R_i
\]

Dieser Spannungsabfall fehlt an den äusseren Klemmen.

Daher sinkt die Klemmenspannung unter Belastung.

---

# Beispiel Innenwiderstand

Eine Spannungsquelle besitzt im Leerlauf:

\[
12{,}0\ \mathrm{V}
\]

Unter Belastung mit:

\[
2\ \mathrm{A}
\]

sinkt die Klemmenspannung auf:

\[
11{,}6\ \mathrm{V}
\]

Der Spannungsabfall im Inneren beträgt:

\[
12{,}0 - 11{,}6 = 0{,}4\ \mathrm{V}
\]

Damit:

\[
R_i = \frac{0{,}4}{2}
\]

\[
R_i = 0{,}2\ \Omega
\]

---

# Stromquellen

Eine ideale Stromquelle liefert einen konstanten Strom unabhängig von der angeschlossenen Last.

Eine reale Stromquelle kann dies nur innerhalb bestimmter Grenzen.

In elektronischen Schaltungen begegnen uns Stromquellen beispielsweise bei:

- Transistorschaltungen
- Konstantstromquellen
- LED-Treibern
- Messschaltungen

## Spannungsquelle und Stromquelle nicht verwechseln

| Quelle | Soll möglichst konstant halten |
| --- | --- |
| Spannungsquelle | Spannung |
| Stromquelle | Strom |

Eine Batterie wird im normalen Modell primär als **Spannungsquelle** betrachtet.

---

# Batterien und Akkumulatoren

Eine Batterie beziehungsweise Zelle wandelt chemische Energie in elektrische Energie um.

Im allgemeinen Sprachgebrauch wird oft zwischen:

**Batterie**

→ nicht wiederaufladbar

und:

**Akkumulator**

→ wiederaufladbar

unterschieden.

Technisch besteht ein Batteriepack häufig aus mehreren einzelnen Zellen.

---

# Zellen in Reihe

Werden Zellen in Reihe geschaltet, addieren sich ihre Spannungen.

Beispiel:

Vier Zellen zu je:

\[
1{,}5\ \mathrm{V}
\]

ergeben:

\[
U_G = 4 \cdot 1{,}5
\]

\[
U_G = 6\ \mathrm{V}
\]

---

# Zellen parallel

Bei parallel geschalteten gleichartigen Zellen bleibt die Nennspannung grundsätzlich gleich.

Die mögliche Stromabgabe beziehungsweise Kapazität kann sich erhöhen.

Eine Parallelschaltung von Akkuzellen erfordert jedoch geeignete und zueinander passende Zellen sowie eine fachgerechte Ausführung.

Das praktische Batteriemanagement ist nicht Gegenstand dieses Grundlagenkapitels.

---

# Ah und Wh sind nicht dasselbe

Auf Akkumulatoren finden sich häufig Angaben in:

**Ah**

Amperestunden

und:

**Wh**

Wattstunden.

Diese Grössen beschreiben unterschiedliche Dinge.

## Ah

Amperestunden beschreiben eine elektrische Ladungsmenge.

Ein idealisiertes Beispiel:

\[
5\ \mathrm{Ah}
\]

könnte bedeuten:

- 5 A während 1 h
- 1 A während 5 h

Die reale nutzbare Kapazität hängt jedoch von Batteriechemie, Belastung, Temperatur und weiteren Faktoren ab.

## Wh

Wattstunden beschreiben eine Energiemenge.

Näherungsweise:

\[
W = U \cdot I \cdot t
\]

beziehungsweise:

\[
W = U \cdot \mathrm{Ah}
\]

wenn mit einer geeigneten mittleren Spannung gerechnet wird.

## Beispiel

Ein Akku mit nominal:

\[
12\ \mathrm{V}
\]

und:

\[
5\ \mathrm{Ah}
\]

enthält näherungsweise:

\[
W = 12 \cdot 5
\]

\[
W = 60\ \mathrm{Wh}
\]

## Wichtig

Zwei Akkus mit:

**5 Ah**

können unterschiedliche Energiemengen speichern, wenn ihre Spannungen verschieden sind.

---

# Widerstände in Reihenschaltung

Bei einer Reihenschaltung sind die Widerstände hintereinander angeordnet.

Durch alle Widerstände fliesst derselbe Strom.

Es gilt:

\[
R_G = R_1 = + = R_2 = + = R_3 = + = \ldots
\]

## Beispiel

\[
R_1 = 100\ \Omega
\]

\[
R_2 = 220\ \Omega
\]

\[
R_3 = 680\ \Omega
\]

Dann:

\[
R_G = 100 = + = 220 = + = 680
\]

\[
R_G = 1,000\ \Omega
\]

also:

\[
R_G = 1\ \mathrm{k\Omega}
\]

---

# Spannung in der Reihenschaltung

Die Gesamtspannung verteilt sich auf die einzelnen Widerstände.

Es gilt:

\[
U_G = U_1 = + = U_2 = + = U_3 = + = \ldots
\]

Da durch alle Widerstände derselbe Strom fliesst:

\[
U = R \cdot I
\]

fällt am grösseren Widerstand die grössere Spannung ab.

## Merksatz

**Reihenschaltung: Strom überall gleich, Spannungen teilen sich auf.**

---

# Spannungsteiler

Zwei Widerstände in Reihe bilden einen einfachen Spannungsteiler.

Für:

\[
R_1
\]

und:

\[
R_2
\]

gilt:

\[
U_1 = U_G \cdot \frac{R_1}{R_1+R_2}
\]

und entsprechend:

\[
U_2 = U_G \cdot \frac{R_2}{R_1+R_2}
\]

## Beispiel

Gegeben:

\[
U_G=12\ \mathrm{V}
\]

\[
R_1=1\ \mathrm{k\Omega}
\]

\[
R_2=2\ \mathrm{k\Omega}
\]

Gesucht ist die Spannung über \(R_2\):

\[
U_2 = 12 \cdot \frac{2}{1+2}
\]

\[
U_2 = 8\ \mathrm{V}
\]

Über \(R_1\) bleiben:

\[
4\ \mathrm{V}
\]

---

# Belasteter Spannungsteiler

Die einfache Spannungsteilerformel gilt direkt für den unbelasteten beziehungsweise entsprechend berücksichtigten Spannungsteiler.

Wird am Ausgang ein weiterer Verbraucher angeschlossen, liegt dessen Widerstand parallel zu einem Teil des Spannungsteilers.

Dadurch verändert sich das Teilungsverhältnis.

Das wird später beim Verständnis realer Schaltungen wichtig.

---

# Widerstände in Parallelschaltung

Bei einer Parallelschaltung liegen die Widerstände an denselben beiden Knoten.

Deshalb liegt an allen parallelen Zweigen dieselbe Spannung.

Es gilt:

\[
U_1 = U_2 = U_3 = U_G
\]

Die Ströme teilen sich auf die Zweige auf.

Der Gesamtstrom ist:

\[
I_G = I_1 = + = I_2 = + = I_3 = + = \ldots
\]

---

# Gesamtwiderstand einer Parallelschaltung

Es gilt:

\[
R_G = \frac{1} = { = \frac{1}{R_1} = + = \frac{1}{R_2} = + = \frac{1}{R_3} = + = \ldots = }
\]

Für zwei Widerstände kann vereinfacht werden:

\[
R_G = \frac{R_1 \cdot R_2}{R_1+R_2}
\]

## Plausibilitätsregel

Der Gesamtwiderstand einer Parallelschaltung ist immer:

**kleiner als der kleinste einzelne Parallelwiderstand**

Ist das berechnete Ergebnis grösser, ist die Rechnung falsch.

---

# Beispiel Parallelschaltung

Gegeben:

\[
R_1=100\ \Omega
\]

\[
R_2=100\ \Omega
\]

Dann:

\[
R_G = \frac{100\cdot100}{100+100}
\]

\[
R_G = 50\ \Omega
\]

Zwei gleiche Widerstände parallel ergeben also die Hälfte des Einzelwiderstandes.

---

# Reihe und Parallel nicht verwechseln

| Eigenschaft | Reihenschaltung | Parallelschaltung |
| --- | --- | --- |
| Strom | überall gleich | teilt sich auf |
| Spannung | teilt sich auf | überall gleich |
| Gesamtwiderstand | wird grösser | wird kleiner |
| Formel | Widerstände addieren | Kehrwerte addieren |

---

# Kirchhoffsche Regeln

Komplexere Netzwerke lassen sich mit zwei grundlegenden Regeln beschreiben.

## Knotenregel

An einem elektrischen Knoten ist die Summe der zufliessenden Ströme gleich der Summe der abfliessenden Ströme.

Mit Vorzeichen geschrieben:

\[
I_1 + I_2 + \ldots + I_N = 0
\]

Das folgt aus der Erhaltung der elektrischen Ladung.

### Beispiel

In einen Knoten fliessen:

\[
5\ \mathrm{A}
\]

Davon fliessen über einen Zweig:

\[
2\ \mathrm{A}
\]

ab.

Dann müssen über den anderen Zweig:

\[
3\ \mathrm{A}
\]

abfliessen.

---

# Maschenregel

In einer geschlossenen Masche ist die Summe aller Spannungen gleich null, wenn die Vorzeichen entsprechend der gewählten Umlaufrichtung berücksichtigt werden.

Es gilt:

\[
U_1 + U_2 + \ldots + U_N = 0
\]

Praktisch bedeutet dies beispielsweise:

Die Quellenspannung entspricht in einem einfachen Stromkreis der Summe der Spannungsabfälle.

---

# Elektrische Leistung

Elektrische Leistung beschreibt, wie viel Energie pro Zeit umgesetzt wird.

Das Formelzeichen lautet:

\[
P
\]

Die Einheit ist:

\[
\mathrm{W}
\]

Watt.

Es gilt:

\[
P = U \cdot I
\]

Mit dem Ohmschen Gesetz lassen sich weitere Formen ableiten:

\[
P = \frac{U^2}{R}
\]

und:

\[
P = I^2 \cdot R
\]

Alle drei Formen sind in der BAKOM-Formelsammlung enthalten.

---

# Beispiel Leistung

Ein 12-V-Gerät nimmt:

\[
I=2\ \mathrm{A}
\]

auf.

Dann:

\[
P = 12 \cdot 2
\]

\[
P = 24\ \mathrm{W}
\]

---

# Leistung an einem Widerstand

Ein Widerstand mit:

\[
R=100\ \Omega
\]

liegt an:

\[
U=10\ \mathrm{V}
\]

Dann:

\[
P = \frac{U^2}{R}
\]

\[
P = \frac{10^2}{100}
\]

\[
P = 1\ \mathrm{W}
\]

Der Widerstand setzt dabei ungefähr 1 W elektrische Leistung in Wärme um.

---

# Belastbarkeit eines Widerstandes

Ein Widerstand besitzt nicht nur einen Widerstandswert, sondern auch eine maximal zulässige Verlustleistung.

Typische Werte sind beispielsweise:

- 0,125 W
- 0,25 W
- 0,5 W
- 1 W
- mehrere Watt

Ein:

\[
470\ \Omega
\]

Widerstand mit:

\[
0{,}25\ \mathrm{W}
\]

darf nicht beliebig hoch belastet werden.

## HB9-Vertiefung: maximale Spannung

Aus:

\[
P = \frac{U^2}{R}
\]

folgt:

\[
U = \sqrt{P\cdot R}
\]

Für:

\[
R=470\ \Omega
\]

und:

\[
P=0{,}25\ \mathrm{W}
\]

ergibt sich:

\[
U = \sqrt{0{,}25\cdot470}
\]

\[
U
\approx
10{,}8\ \mathrm{V}
\]

Bei dieser Spannung wird die Nennleistung von 0,25 W bereits erreicht.

In einer realen Konstruktion wird normalerweise eine ausreichende Reserve vorgesehen.

---

# Elektrische Arbeit und Energie

Leistung beschreibt:

**wie schnell Energie umgesetzt wird**

Arbeit beziehungsweise Energie beschreibt:

**wie viel Energie insgesamt umgesetzt wurde**

Es gilt:

\[
W = P \cdot t
\]

Wird \(P\) in Watt und \(t\) in Sekunden eingesetzt, erhält man:

\[
\mathrm{J}
\]

Joule.

---

# Wattstunde

In der Energietechnik wird häufig die Wattstunde verwendet.

\[
1\ \mathrm{Wh} = 1\ \mathrm{W} \cdot 1\ \mathrm{h}
\]

Da:

\[
1\ \mathrm{h} = 3,600\ \mathrm{s}
\]

gilt:

\[
1\ \mathrm{Wh} = 3,600\ \mathrm{J}
\]

Eine Kilowattstunde entspricht:

\[
1\ \mathrm{kWh} = 3{,}6\ \mathrm{MJ}
\]

---

# Drei Dinge, die man nicht verwechseln darf

| Grösse | Bedeutung | typische Einheit |
| --- | --- | --- |
| Leistung | Energie pro Zeit | W |
| Energie beziehungsweise Arbeit | gesamte umgesetzte Energiemenge | J oder Wh |
| Akkukapazität | elektrische Ladungsmenge | Ah |

Ein Gerät kann eine Leistung von:

**100 W**

haben.

Das sagt noch nicht, wie viel Energie es während eines ganzen Tages verbraucht.

---

# Gleichstrom und Gleichspannung

Bei Gleichstrom:

**DC**

bleibt die Stromrichtung grundsätzlich gleich.

Bei Gleichspannung bleibt die Polarität grundsätzlich gleich.

Typische Gleichspannungsquellen sind:

- Batterien
- Akkumulatoren
- Gleichspannungsnetzteile

Eine Gleichspannung muss nicht vollkommen konstant sein.

Sie kann beispielsweise geringe Schwankungen oder Restwelligkeit besitzen und bleibt trotzdem grundsätzlich eine Gleichspannung, solange ihre Polarität nicht periodisch wechselt.

---

# Wechselstrom und Wechselspannung

Bei Wechselstrom:

**AC**

ändert sich die Stromrichtung periodisch.

Bei Wechselspannung ändert sich die Polarität periodisch.

Eine typische Netzspannung ist eine sinusförmige Wechselspannung.

Für Funktechnik begegnen uns Wechselspannungen über einen enormen Frequenzbereich.

Niederfrequente Wechselspannungen können beispielsweise Audiosignale darstellen.

Hochfrequente Wechselspannungen werden in Sendern, Empfängern und Antennensystemen verwendet.

---

# Sinusförmige Wechselspannung

Eine Sinusschwingung wechselt periodisch zwischen:

- positivem Spitzenwert
- Null
- negativem Spitzenwert
- Null

und beginnt danach erneut.

Drei Spannungsangaben sind besonders wichtig:

- Effektivwert
- Spitzenwert
- Spitze-Spitze-Wert

---

# Effektivwert

Der Effektivwert einer Wechselspannung beschreibt jene Gleichspannung, die an einem ohmschen Widerstand dieselbe mittlere Wärmeleistung erzeugen würde.

Das Formelzeichen ist:

\[
U_\mathrm{eff}
\]

Bei einer sinusförmigen Wechselspannung gilt:

\[
\hat U = U_\mathrm{eff} \cdot \sqrt{2}
\]

beziehungsweise:

\[
\hat U
\approx
1{,}414
\cdot
U_\mathrm{eff}
\]

---

# Spitzenwert

Der Spitzenwert:

\[
\hat U
\]

ist der maximale Betrag der Spannung gegenüber der Nulllinie.

Beispiel:

Bei:

\[
U_\mathrm{eff}=230\ \mathrm{V}
\]

beträgt der Spitzenwert ungefähr:

\[
\hat U = 230 \cdot 1{,}414
\]

\[
\hat U
\approx
325\ \mathrm{V}
\]

Eine 230-V-Netzspannung erreicht bei sinusförmigem Verlauf also Spitzenwerte von ungefähr:

\[
\pm325\ \mathrm{V}
\]

---

# Spitze-Spitze-Wert

Der Abstand vom negativen bis zum positiven Spitzenwert beträgt:

\[
U_\mathrm{ss} = 2\cdot\hat U
\]

Bei 230 V Effektivwert sind das ungefähr:

\[
U_\mathrm{ss}
\approx
650\ \mathrm{V}
\]

---

# Nicht auf jede Signalform übertragbar

Die Beziehung:

\[
\hat U = U_\mathrm{eff} \cdot \sqrt{2}
\]

gilt für eine **Sinusschwingung**.

Für andere Signalformen gelten andere Beziehungen.

Das wird in Kapitel 12 bei der Messtechnik wichtig.

---

# Drei Spannungswerte, die man nicht verwechseln darf

<table>
<thead>
<tr>
<th>Wert</th>
<th>Bedeutung</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="arithmatex">\(U_\mathrm{eff}\)</span></td>
<td>Effektivwert</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U\)</span></td>
<td>Spitzenwert</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{ss}\)</span></td>
<td>Spitze-Spitze-Wert</td>
</tr>
</tbody>
</table>

---

# SI-Vorsätze

In der Funktechnik begegnen uns extrem grosse und extrem kleine Werte.

Deshalb verwendet man Vorsätze.

<table>
<thead>
<tr>
<th>Vorsatz</th>
<th>Zeichen</th>
<th style="text-align: right;">Faktor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Giga</td>
<td>G</td>
<td style="text-align: right;"><span class="arithmatex">\(10^9\)</span></td>
</tr>
<tr>
<td>Mega</td>
<td>M</td>
<td style="text-align: right;"><span class="arithmatex">\(10^6\)</span></td>
</tr>
<tr>
<td>Kilo</td>
<td>k</td>
<td style="text-align: right;"><span class="arithmatex">\(10^3\)</span></td>
</tr>
<tr>
<td>Milli</td>
<td>m</td>
<td style="text-align: right;"><span class="arithmatex">\(10^{-3}\)</span></td>
</tr>
<tr>
<td>Mikro</td>
<td>µ</td>
<td style="text-align: right;"><span class="arithmatex">\(10^{-6}\)</span></td>
</tr>
<tr>
<td>Nano</td>
<td>n</td>
<td style="text-align: right;"><span class="arithmatex">\(10^{-9}\)</span></td>
</tr>
<tr>
<td>Piko</td>
<td>p</td>
<td style="text-align: right;"><span class="arithmatex">\(10^{-12}\)</span></td>
</tr>
</tbody>
</table>

## Beispiele

\[
1\ \mathrm{k\Omega} = 1,000\ \Omega
\]

\[
1\ \mathrm{mA} = 0{,}001\ \mathrm{A}
\]

\[
1\ \mathrm{\mu A} = 0{,}000,001\ \mathrm{A}
\]

\[
1\ \mathrm{MHz} = 1,000,000\ \mathrm{Hz}
\]

---

# Gross- und Kleinschreibung ist wichtig

Besonders wichtig:

**M**

bedeutet Mega:

\[
10^6
\]

**m**

bedeutet Milli:

\[
10^{-3}
\]

Zwischen:

\[
1\ \mathrm{MW}
\]

und:

\[
1\ \mathrm{mW}
\]

liegt ein Faktor von:

\[
10^9
\]

Die Gross- und Kleinschreibung eines Einheitenvorsatzes ist deshalb keine Schreibkosmetik.

---

# Zehnerpotenzen

Sehr kleine oder grosse Zahlen lassen sich kompakt schreiben.

Beispiel:

\[
4,700,000 = 4{,}7\times10^6
\]

und:

\[
0{,}000,0047 = 4{,}7\times10^{-6}
\]

Diese Schreibweise wird besonders wichtig bei:

- Frequenzen
- Kapazitäten
- Induktivitäten
- sehr kleinen Strömen und Spannungen

---

# Formeln umstellen

Für die HB9-Prüfung sollte man einfache Formeln nach einer gesuchten Grösse umstellen können.

Aus:

\[
U=R\cdot I
\]

kann beispielsweise:

\[
I=\frac{U}{R}
\]

werden.

Oder:

\[
R=\frac{U}{I}
\]

## Grundregel

Was auf einer Seite einer Gleichung verändert wird, muss auf der anderen Seite entsprechend ebenfalls berücksichtigt werden.

---

# Beispiel Formel umstellen

Gegeben:

\[
P=U\cdot I
\]

Gesucht:

\[
I
\]

Beide Seiten durch \(U\) teilen:

\[
I=\frac{P}{U}
\]

Bei:

\[
P=100\ \mathrm{W}
\]

und:

\[
U=13{,}8\ \mathrm{V}
\]

ergibt sich:

\[
I = \frac{100}{13{,}8}
\]

\[
I
\approx
7{,}25\ \mathrm{A}
\]

---

# Der Taschenrechner ersetzt das Denken nicht

Vor jeder Rechnung sollte geklärt werden:

1. Was ist gegeben?
2. Was ist gesucht?
3. Welche Formel passt?
4. Stimmen die Einheiten?
5. Ist das Ergebnis plausibel?

Erst danach wird gerechnet.

---

# Lernschema

Bei einer elektrischen Grundaufgabe gehe in dieser Reihenfolge vor:

1. **Welche Grösse wird gesucht?**
2. **Welche Grössen sind gegeben?**
3. **Welche Einheiten werden verwendet?**
4. **Ist es eine Reihen- oder Parallelschaltung?**
5. **Welche Grundformel passt?**
6. **Muss die Formel umgestellt werden?**
7. **Werte einsetzen**
8. **Ergebnis mit Einheit angeben**
9. **Plausibilität prüfen**

---

# Die wichtigsten Formeln auf einen Blick

Ohmsches Gesetz:

\[
U=R\cdot I
\]

\[
I=\frac{U}{R}
\]

\[
R=\frac{U}{I}
\]

Leistung:

\[
P=U\cdot I
\]

\[
P=\frac{U^2}{R}
\]

\[
P=I^2\cdot R
\]

Arbeit beziehungsweise Energie:

\[
W=P\cdot t
\]

Widerstände in Reihe:

\[
R_G = R_1+R_2+R_3+\ldots
\]

Widerstände parallel:

\[
R_G = \frac{1} = { = \frac{1}{R_1} = + = \frac{1}{R_2} = + = \frac{1}{R_3} = +\ldots = }
\]

Zwei Widerstände parallel:

\[
R_G = \frac{R_1R_2}{R_1+R_2}
\]

Spannungsteiler:

\[
U_1 = U_G \cdot \frac{R_1}{R_1+R_2}
\]

Leiterwiderstand:

\[
R = \rho \cdot \frac{l}{A}
\]

Kirchhoffsche Knotenregel:

\[
I_1+I_2+\ldots+I_N=0
\]

Kirchhoffsche Maschenregel:

\[
U_1+U_2+\ldots+U_N=0
\]

Sinusförmige Wechselspannung:

\[
\hat U = U_\mathrm{eff} \cdot \sqrt{2}
\]

\[
U_\mathrm{ss} = 2\cdot\hat U
\]

---

# Merksätze

**Spannung liegt zwischen zwei Punkten an.**

**Strom fliesst durch einen geschlossenen Stromkreis.**

**Die technische Stromrichtung verläuft von Plus nach Minus.**

**Je länger ein Draht, desto grösser sein Widerstand.**

**Je grösser sein Querschnitt, desto kleiner sein Widerstand.**

**Das Ohmsche Gesetz lautet \(U=R\cdot I\).**

**In einer Reihenschaltung ist der Strom überall gleich.**

**In einer Parallelschaltung ist die Spannung über allen Zweigen gleich.**

**Der Gesamtwiderstand einer Reihenschaltung ist grösser als jeder Einzelwiderstand.**

**Der Gesamtwiderstand einer Parallelschaltung ist kleiner als der kleinste Einzelwiderstand.**

**Leistung ist Energie pro Zeit.**

**Watt und Wattstunde sind nicht dasselbe.**

**Ah beschreibt eine Ladungsmenge, Wh eine Energiemenge.**

**Eine reale Spannungsquelle besitzt einen Innenwiderstand.**

**Bei einer Sinusschwingung ist der Spitzenwert etwa 1,414-mal so gross wie der Effektivwert.**

**Mega und Milli unterscheiden sich um den Faktor \(10^9\).**

**Eine Formel ist erst dann nützlich, wenn man weiss, welche physikalische Grösse sie beschreibt.**

---

# Selbstkontrolle

Versuche die Fragen zuerst ohne Nachschlagen zu beantworten.

1. Was beschreibt die elektrische Spannung?
2. In welche Richtung verläuft die technische Stromrichtung?
3. Was geschieht mit dem Widerstand eines Drahtes, wenn seine Länge verdoppelt wird und alles andere gleich bleibt?
4. Was geschieht mit dem Widerstand, wenn der Leiterquerschnitt verdoppelt wird?
5. Wie gross ist der Strom durch einen Widerstand von 10 Ω bei 20 V?
6. Drei Widerstände von 100 Ω, 220 Ω und 680 Ω liegen in Reihe. Wie gross ist der Gesamtwiderstand?
7. Zwei Widerstände zu je 100 Ω liegen parallel. Wie gross ist der Gesamtwiderstand?
8. Was ist in einer Reihenschaltung überall gleich?
9. Was ist in einer Parallelschaltung überall gleich?
10. Ein Gerät arbeitet mit 12 V und nimmt 5 A auf. Wie gross ist seine Leistung?
11. Was ist der Unterschied zwischen W und Wh?
12. Was ist der Unterschied zwischen Ah und Wh?
13. Was geschieht mit der Klemmenspannung einer realen Spannungsquelle typischerweise bei zunehmender Belastung?
14. Eine sinusförmige Spannung besitzt 10 V Effektivwert. Wie gross ist ihr Spitzenwert ungefähr?
15. Wie gross ist der Spitze-Spitze-Wert derselben Spannung?
16. Was bedeutet der Vorsatz Mikro?
17. Was bedeutet der Vorsatz Mega?
18. Warum ist der Gesamtwiderstand einer Parallelschaltung kleiner als jeder einzelne Parallelwiderstand?

## Antworten

1. Einen elektrischen Potentialunterschied zwischen zwei Punkten.
2. Von Plus nach Minus.
3. Er verdoppelt sich.
4. Er halbiert sich.
5. \(I = \frac{20}{10} = 2\ \mathrm{A}\)
6. \(R_G = 100+220+680 = 1,000\ \Omega\)

also:

\[
1\ \mathrm{k\Omega}
\]

1. \(R_G = 50\ \Omega\)
2. Der Strom.
3. Die Spannung.
4. \(P = 12\cdot5 = 60\ \mathrm{W}\)
5. Watt ist eine Einheit der Leistung. Wattstunden sind eine Einheit der Energie.
6. Ah beschreibt eine elektrische Ladungsmenge, Wh eine Energiemenge.
7. Sie sinkt aufgrund des Spannungsabfalls am Innenwiderstand.
8. \(\hat U = 10\cdot1{,}414 = 14{,}14\ \mathrm{V}\)
9. \(U_\mathrm{ss} = 28{,}28\ \mathrm{V}\)
10. \(10^{-6}\)
11. \(10^6\)
12. Weil zusätzliche parallele Stromwege zur Verfügung stehen und bei gleicher Spannung ein grösserer Gesamtstrom fliessen kann.

---

# Prüfungsbezug HB3 und HB9

Die aktuellen BAKOM-Prüfungsvorschriften führen im Bereich Elektrizität und Funktheorie unter anderem ausdrücklich auf:

- Grössen und Einheiten
- elektrische Leitfähigkeit
- Spannungsquellen
- Strom- und Spannungsquellen
- Spannungsberechnungen
- Stromberechnungen
- Leistungsberechnungen

Die aktuelle BAKOM-Formelsammlung enthält für diesen Bereich insbesondere:

- Kirchhoffsche Regeln
- Ohmsches Gesetz
- Leistung und Arbeit
- Effektiv- und Spitzenwerte sinusförmiger Wechselspannung
- Reihen- und Parallelschaltung von Widerständen
- Spannungsteiler
- Widerstand von Drähten

Für HB3 sind die technischen und rechnerischen Fragestellungen weniger komplex.

Für HB9 sollte zusätzlich sicher beherrscht werden:

- Umstellen einfacher Formeln
- mehrere Rechenschritte
- Leiterwiderstand
- Kirchhoffsche Regeln
- Belastbarkeit von Widerständen
- sichere Arbeit mit SI-Vorsätzen und Zehnerpotenzen

Kondensatoren, Spulen, Blindwiderstände, Transformatoren und weiterführende Halbleiterschaltungen werden bewusst erst in Kapitel 11 behandelt.

# Navigation

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 2: Frequenz, Periodendauer und Wellenlänge →](02-frequenz-wellenlaenge.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
