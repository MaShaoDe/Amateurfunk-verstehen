# Kapitel 13: Praktischer Antennenbau

## Lernziele

Nach diesem Kapitel solltest du:

- aus einer Frequenz eine sinnvolle Ausgangslänge für eine einfache Antenne bestimmen können
- zwischen theoretischer und tatsächlicher Antennenlänge unterscheiden können
- einen einfachen Halbwellendipol grundsätzlich dimensionieren können
- eine Viertelwellen-Groundplane grundsätzlich dimensionieren können
- verstehen, weshalb eine Antenne nach dem Aufbau gemessen und abgestimmt werden muss
- erklären können, wie sich Kürzen oder Verlängern einer einfachen resonanten Antenne auf ihre Resonanzfrequenz auswirkt
- Resonanz, Anpassung und SWR beim praktischen Antennenbau unterscheiden können
- geeignete Speisepunkte und Speiseleitungen einordnen können
- die Aufgabe von Balun und Mantelwellensperre verstehen
- typische Einflüsse von Höhe, Boden, Gebäuden und Metallteilen erkennen können
- Antennen mit SWR-Meter oder Antennenanalysator systematisch abstimmen können
- typische mechanische und elektrische Fehler beim Antennenbau erkennen können

> **Hinweis zu HB3 und HB9:**
> «Praktischer Antennenbau» ist in den BAKOM-Prüfungsvorschriften kein eigener Prüfungsblock. Das Kapitel wendet jedoch mehrere ausdrücklich prüfungsrelevante Themen praktisch an, insbesondere Antennentypen, Antenneneigenschaften, Antennenzuleitungen und Anpassung. Die Kennzeichnung **HB9-Vertiefung** dient als Lernhilfe.

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
<td><span class="arithmatex">\(f\)</span></td>
<td>Frequenz</td>
<td>Hz beziehungsweise MHz</td>
</tr>
<tr>
<td><span class="arithmatex">\(\lambda\)</span></td>
<td>Wellenlänge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(l\)</span></td>
<td>Leiterlänge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(Z\)</span></td>
<td>Impedanz</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(Z_0\)</span></td>
<td>Wellenwiderstand der Speiseleitung</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(R\)</span></td>
<td>Wirkwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(X\)</span></td>
<td>Blindanteil</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(s\)</span></td>
<td>SWR</td>
<td>keine</td>
</tr>
</tbody>
</table>

## Der rote Faden

Beim praktischen Antennenbau gehen wir grundsätzlich in dieser Reihenfolge vor:

1. **Frequenz festlegen**
2. **Antennentyp wählen**
3. **theoretische Länge berechnen**
4. **mit etwas Reserve bauen**
5. **Antenne am endgültigen Standort montieren**
6. **messen**
7. **schrittweise abstimmen**
8. **erneut messen**
9. **erst danach endgültig mechanisch fertigstellen**

Der wichtigste Grundsatz lautet:

> **Eine Antennenformel liefert einen Ausgangswert. Die endgültige Länge wird durch Messung bestimmt.**

## Von der Frequenz zur Wellenlänge

Aus Kapitel 2 kennen wir:

\[
\lambda \approx \frac{300}{f,[\mathrm{MHz}]}
\]

Für:

\[
f = 14{,}2\ \mathrm{MHz}
\]

ergibt sich:

\[
\lambda \approx \frac{300}{14{,}2}
\]

\[
\lambda
\approx
21{,}1\ \mathrm{m}
\]

Eine theoretische halbe Wellenlänge beträgt:

\[
\frac{\lambda}{2} \approx 10{,}56\ \mathrm{m}
\]

Eine theoretische Viertelwellenlänge beträgt:

\[
\frac{\lambda}{4} \approx 5{,}28\ \mathrm{m}
\]

Diese Werte gelten zunächst für die elektromagnetische Welle im freien Raum.

## Warum ist eine reale Antenne meist etwas kürzer?

Ein realer Antennenleiter befindet sich nicht im freien Raum.

Seine elektrische Länge wird unter anderem beeinflusst durch:

- Leiterdurchmesser
- Isolation
- Endeffekte
- Höhe über Boden
- Bodenbeschaffenheit
- Gebäude
- Bäume
- Metallteile
- andere Antennen
- Abspannungen
- Bauform

Deshalb ist ein resonanter Halbwellendipol mechanisch meist etwas kürzer als die berechnete Freiraumlänge von exakt \(\lambda/2\).

Als praktische Ausgangsregel wird für einen einfachen Drahtdipol häufig ungefähr verwendet:

\[
l_\mathrm{Dipol} \approx \frac{143}{f,[\mathrm{MHz}]}
\]

Die beiden Dipolhälften sind dann jeweils ungefähr:

\[
l_\mathrm{Schenkel} \approx \frac{71{,}5}{f,[\mathrm{MHz}]}
\]

Diese Formeln sind **Faustregeln für eine Ausgangslänge**, keine universell exakten Antennenformeln.

## Beispiel: Dipol für 14,2 MHz

Gesamtlänge:

\[
l \approx \frac{143}{14{,}2}
\]

\[
l
\approx
10{,}07\ \mathrm{m}
\]

Jede Seite erhält damit zunächst ungefähr:

\[
5{,}04\ \mathrm{m}
\]

Für einen Selbstbau würde man den Draht nicht sofort exakt auf diesen Wert abschneiden.

Sinnvoll ist:

**etwas länger beginnen und anschliessend durch Messung abstimmen.**

Material abschneiden ist einfach.

Material wieder anzusetzen ist wesentlich umständlicher.

## Der Halbwellendipol

Der Halbwellendipol wurde bereits in [Kapitel 4](04-antennen-grundlagen.md#der-halbwellendipol) eingeführt. Für den praktischen Bau nochmals die wichtigsten Masse:

Ein einfacher Halbwellendipol besteht aus zwei ungefähr gleich langen Leitern.

Die Speisung erfolgt in der Mitte.

Vereinfacht:

```
Draht              Speisepunkt              Draht

<----------------------o---------------------->

        ungefähr λ/4         ungefähr λ/4
```

Die gesamte elektrische Länge liegt ungefähr bei:

\[
\frac{\lambda}{2}
\]

Die beiden Schenkel besitzen jeweils ungefähr:

\[
\frac{\lambda}{4}
\]

## Warum wird in der Mitte gespeist?

Beim klassischen Halbwellendipol liegt in der Mitte ein gut nutzbarer Speisepunkt.

Beim idealisierten dünnen Halbwellendipol im freien Raum liegt der Speisewiderstand in Resonanz in der Grössenordnung von:

\[
73\ \Omega
\]

In einer realen Installation kann dieser Wert deutlich davon abweichen.

Ursachen sind beispielsweise:

- Höhe
- Boden
- Winkel der Dipolschenkel
- Umgebung
- Leiterdurchmesser
- Speiseleitung

Ein realer Dipol ist deshalb nicht automatisch exakt 73 Ω.

## Dipol und 50-Ω-Koaxialkabel

Ein Dipol ist elektrisch:

**symmetrisch**

Ein Koaxialkabel ist:

**unsymmetrisch**

Die direkte Verbindung kann funktionieren, kann jedoch dazu führen, dass auf der Aussenseite des Koaxialkabels unerwünschte HF-Ströme fliessen.

Deshalb ist am Speisepunkt häufig ein:

**1:1-Strombalun**

beziehungsweise eine geeignete:

**Mantelwellensperre**

sinnvoll.

## Was macht der 1:1-Balun?

Ein 1:1-Balun muss die Impedanz nicht verändern.

Seine wichtige Aufgabe kann vielmehr sein, unerwünschte Gleichtaktströme auf der Speiseleitung zu unterdrücken.

Dadurch soll verhindert werden, dass die Aussenseite des Koaxialkabels selbst Teil des Antennensystems wird.

Das kann unter anderem verbessern:

- Symmetrie
- Strahlungsdiagramm
- Reproduzierbarkeit der Abstimmung
- HF-Verhältnisse im Funkraum

## Inverted-V-Dipol

Ein Dipol muss nicht vollkommen horizontal gespannt werden.

Beim **Inverted V** liegt der Speisepunkt höher und die beiden Schenkel laufen schräg nach unten.

Dadurch benötigt die Antenne weniger horizontale Spannweite.

Der Winkel zwischen den beiden Schenkeln beeinflusst jedoch die Speisepunktimpedanz.

Je stärker die Schenkel nach unten geführt werden, desto stärker kann sich die Impedanz gegenüber einem geraden horizontalen Dipol verändern.

Die Antenne muss deshalb wiederum am tatsächlichen Standort gemessen werden.

## Viertelwellen-Groundplane

Eine einfache Groundplane besteht aus:

- einem ungefähr \(\lambda/4\) langen Strahler
- einem Gegensystem aus Radialen

Vereinfacht:

```
          Strahler
             |
             |
             |
             o  Speisepunkt
          /  |  \
       Radiale
```

Der Innenleiter des Koaxialkabels wird üblicherweise mit dem vertikalen Strahler verbunden.

Der Aussenleiter wird mit den Radialen beziehungsweise dem Gegensystem verbunden.

## Länge eines Viertelwellenstrahlers

Als theoretischer Ausgangswert:

\[
l = \frac{\lambda}{4}
\]

beziehungsweise:

\[
l \approx \frac{75}{f,[\mathrm{MHz}]}
\]

Für einen praktischen metallischen Strahler liegt die endgültige resonante Länge häufig etwas darunter.

Analog zum Dipol kann als grobe Ausgangsgrösse beispielsweise verwendet werden:

\[
l \approx \frac{71{,}5}{f,[\mathrm{MHz}]}
\]

Auch dies ist nur ein **Startwert**.

## Beispiel Groundplane für 145 MHz

Mit der praktischen Näherung:

\[
l \approx \frac{71{,}5}{145}
\]

ergibt sich:

\[
l
\approx
0{,}493\ \mathrm{m}
\]

also ungefähr:

**49 cm**

für Strahler und als Ausgangswert auch für Viertelwellenradiale.

Die endgültigen Abmessungen werden durch Messung bestimmt.

## Radiale sind Teil der Antenne

Radiale sind nicht bloss mechanisches Zubehör.

Sie bilden das elektrische Gegensystem des Vertikalstrahlers.

Ihre:

- Anzahl
- Länge
- Lage
- Winkel
- Höhe über Boden

beeinflussen die Eigenschaften der Antenne.

Eine Viertelwellen-Groundplane besteht deshalb elektrisch nicht nur aus dem sichtbaren senkrechten Strahler.

## Radialwinkel und Speisepunktimpedanz

Werden die Radiale einer erhöht montierten Groundplane horizontal angeordnet, liegt die Speisepunktimpedanz eines idealisierten Viertelwellenstrahlers typischerweise niedriger als 50 Ω.

Werden die Radiale schräg nach unten geführt, kann die Speisepunktimpedanz in Richtung 50 Ω verändert werden.

Dies ist ein schönes Beispiel dafür, dass:

> **Mechanische Geometrie und elektrische Eigenschaften einer Antenne direkt zusammenhängen.**

## Resonanz abstimmen

Bei einer einfachen resonanten Drahtantenne gilt als praktische Grundregel:

**Resonanzfrequenz zu tief**

→ Antenne ist elektrisch zu lang

**Resonanzfrequenz zu hoch**

→ Antenne ist elektrisch zu kurz

Daraus folgt:

**Frequenz erhöhen**

→ Antenne kürzen

**Frequenz senken**

→ Antenne verlängern

## Wichtig: nur kleine Schritte

Beim Abstimmen wird eine Antenne nicht sofort um grosse Stücke gekürzt.

Besser:

1. messen
2. Resonanzfrequenz bestimmen
3. kleine Längenänderung durchführen
4. erneut messen
5. Wirkung beobachten
6. erst danach weiter kürzen

So erkennt man, wie empfindlich die konkrete Antenne auf Längenänderungen reagiert.

## Beide Dipolschenkel gleichmässig verändern

Bei einem symmetrischen Dipol werden normalerweise beide Schenkel gleich stark gekürzt oder verlängert.

Beispiel:

Die Gesamtlänge soll um 10 cm reduziert werden.

Dann werden:

**5 cm je Seite**

verändert.

Dadurch bleibt die Antenne geometrisch möglichst symmetrisch.

## SWR-Minimum ist nicht automatisch Resonanz

Aus Kapitel 6 wissen wir:

Resonanz bedeutet:

\[
X=0
\]

Das SWR-Minimum bedeutet dagegen, dass die vorhandene Antennenimpedanz besonders gut zum Leitungssystem passt.

Diese Frequenzen können identisch sein.

Sie müssen es aber nicht sein.

Mit einem einfachen SWR-Meter sieht man nur die Anpassung.

Mit einem Antennenanalysator kann man zusätzlich betrachten:

- \(R\)
- \(X\)
- Impedanz
- Resonanz
- SWR

## Darum ist ein Antennenanalysator so hilfreich

Nehmen wir an, der Analysator zeigt:

\[
Z=25+j0\ \Omega
\]

Die Antenne ist dann:

**resonant**

weil:

\[
X=0
\]

Sie ist an einem 50-Ω-System aber nicht angepasst.

Bei:

\[
Z=50+j0\ \Omega
\]

ist die Antenne dagegen gleichzeitig:

- resonant
- auf 50 Ω angepasst

Diese Unterscheidung ist beim Antennenbau sehr wichtig.

## Systematisch mit dem Antennenanalysator arbeiten

Ein sinnvoller Ablauf ist:

### 1. Frequenzbereich einstellen

Nicht nur eine einzelne Frequenz messen.

Beispielsweise bei einer 20-m-Antenne einen Bereich rund um das gewünschte Band beziehungsweise die gewünschte Arbeitsfrequenz betrachten.

### 2. SWR-Verlauf ansehen

Wo liegt das Minimum?

### 3. Impedanz ansehen

Welche Werte besitzen:

\[
R
\]

und:

\[
X
\]

### 4. Antenne verändern

Nur eine Sache gleichzeitig ändern.

### 5. Neu messen

Dadurch erkennt man die Ursache und Wirkung der Änderung.

## Immer am endgültigen Standort messen

Eine Antenne verändert ihre elektrischen Eigenschaften, wenn man sie:

- höher hängt
- tiefer hängt
- näher an ein Gebäude bringt
- von einem Gebäude entfernt
- anders abspannt
- über anderem Boden montiert
- in die Nähe von Metall bringt

Deshalb ist eine Abstimmung in Brusthöhe im Garten nicht automatisch gültig, wenn die Antenne anschliessend zehn Meter hoch montiert wird.

Die endgültige Kontrolle erfolgt möglichst:

**am endgültigen Montageort und in der endgültigen Geometrie.**

## Die Umgebung gehört elektrisch zur Antenne

Eine reale Antenne befindet sich immer in einer Umgebung.

Besonders starken Einfluss können haben:

- Metallgeländer
- Dachrinnen
- Stahlkonstruktionen
- Blitzschutzleitungen
- andere Antennen
- elektrische Leitungen
- Fahrzeuge
- feuchter Boden
- Gebäude

Diese Gegenstände können elektromagnetisch mit der Antenne koppeln.

Dadurch verändern sich beispielsweise:

- Resonanzfrequenz
- Speisepunktimpedanz
- Strahlungsdiagramm

## Höhe über Boden

Bei horizontalen Kurzwellenantennen beeinflusst die Höhe über Boden besonders stark den vertikalen Abstrahlwinkel.

Eine Antenne kann deshalb bei identischer Länge in verschiedenen Höhen ein deutlich anderes Strahlungsdiagramm besitzen.

Die Höhe beeinflusst teilweise auch die Speisepunktimpedanz.

Eine Antenne wird deshalb nicht allein durch ihre Drahtlänge definiert.

## Antennendraht

Für eine Drahtantenne können unterschiedliche Leiter verwendet werden.

Wichtig sind unter anderem:

- ausreichende elektrische Leitfähigkeit
- mechanische Belastbarkeit
- Korrosionsbeständigkeit
- geeignete Isolation
- Gewicht
- Flexibilität

Kupfer besitzt eine sehr gute elektrische Leitfähigkeit.

Reines weiches Kupfer kann bei langen freitragenden Antennen jedoch mechanisch problematisch sein.

Je nach Anwendung werden deshalb beispielsweise verwendet:

- Kupferlitze
- verzinnte Kupferlitze
- kupferbeschichteter Stahldraht
- spezielle Antennenlitzen

## Isolation verändert die elektrische Länge

Ein isolierter Draht kann sich elektrisch anders verhalten als ein blanker Leiter gleicher mechanischer Länge.

Das elektrische Feld befindet sich teilweise im Isoliermaterial.

Dadurch kann die für Resonanz benötigte mechanische Länge verändert werden.

Wie stark dieser Effekt ist, hängt unter anderem ab von:

- Isoliermaterial
- Isolationsdicke
- Leiterdurchmesser
- Frequenz

Deshalb ist auch hier die berechnete Länge nur der Ausgangspunkt.

## Leiterdurchmesser

Auch der Leiterdurchmesser beeinflusst die Antenneneigenschaften.

Ein dickerer Leiter kann unter anderem zu einer grösseren nutzbaren Bandbreite führen als ein sehr dünner Leiter gleicher Antennenform.

Aus diesem Grund werden breitbandigere Antennen teilweise mit:

- Rohren
- mehreren parallelen Leitern
- Käfigstrukturen

gebaut.

## Mechanische Zugentlastung

Elektrische Verbindungen sollten nicht gleichzeitig die gesamte mechanische Zugkraft aufnehmen müssen.

Bei einer Drahtantenne sollten deshalb:

- Isolatoren
- Abspannpunkte
- Zugentlastungen

so ausgeführt werden, dass Lötstellen und Koaxialanschlüsse nicht dauerhaft mechanisch belastet werden.

Eine elektrisch perfekte Lötstelle kann durch ständige Zugbelastung trotzdem versagen.

## Löten und Crimpen

Eine gute HF-Verbindung benötigt einen dauerhaft niedrigen Übergangswiderstand.

Geeignete Verfahren können sein:

- Löten
- Crimpen
- Verschrauben
- geeignete Klemmverbindungen

Welche Methode die beste ist, hängt von Material und Anwendung ab.

Bei Ausseninstallationen muss zusätzlich Korrosion berücksichtigt werden.

## Wasser ist ein Gegner des Koaxialkabels

Dringt Wasser in ein Koaxialkabel ein, können sich seine elektrischen Eigenschaften verschlechtern.

Mögliche Folgen sind:

- erhöhte Dämpfung
- veränderter Wellenwiderstand
- Korrosion
- instabile Messwerte

Besonders gefährdet sind:

- Steckverbinder
- Übergänge
- beschädigte Kabelmäntel
- nach oben gerichtete ungeschützte Anschlüsse

Aussenverbindungen müssen deshalb wetterfest ausgeführt werden.

## Wasserschlaufe

Bei einer Ausseninstallation sollte Wasser nicht entlang des Kabels direkt in einen Anschluss laufen können.

Eine einfache mechanische Massnahme ist eine:

**Tropfschlaufe**

Das Kabel wird vor dem Anschluss zunächst nach unten geführt.

Wasser tropft dadurch am tiefsten Punkt ab, anstatt direkt zum Stecker zu laufen.

## Koaxialstecker

Ein guter Steckverbinder muss:

- zum Kabel passen
- sauber montiert sein
- elektrisch guten Kontakt besitzen
- HF-tauglich sein
- mechanisch stabil sein

Ein schlecht montierter Stecker kann trotz einer guten Antenne Probleme verursachen.

Typische Fehler sind:

- lose Abschirmung
- einzelne Schirmdrähte am Innenleiter
- schlechte Lötstelle
- oxidierte Kontakte
- Feuchtigkeit
- mechanische Spannung

## Die Speiseleitung nicht vergessen

Die Qualität des gesamten Antennensystems hängt nicht nur von der Antenne ab.

Es gilt:

**Sender → Stecker → Speiseleitung → Anpassung → Antenne**

Jede dieser Stellen kann Verluste oder Fehlanpassungen verursachen.

Auf VHF und UHF kann eine schlechte Speiseleitung einen erheblichen Teil der Leistung vernichten.

## Mantelwellensperre

Eine Mantelwellensperre soll unerwünschte HF-Ströme auf der Aussenseite eines Koaxialkabels vermindern.

Mögliche Ausführungen verwenden beispielsweise:

- Ferritkerne
- Ferritringe
- Ferritperlen
- geeignete Koaxialwicklungen

Die Ausführung muss für den verwendeten Frequenzbereich geeignet sein.

Ein beliebiger Ferrit ist nicht automatisch auf jeder Frequenz gleich wirksam.

## Balun und Unun richtig einordnen

Ein:

**Balun**

verbindet grundsätzlich symmetrische und unsymmetrische Systeme.

Ein:

**Unun**

verbindet unsymmetrische Systeme.

Beide können je nach Ausführung zusätzlich eine Impedanztransformation durchführen.

Die Bezeichnung:

**1:1**

oder:

**1:4**

allein beschreibt noch nicht vollständig, wie eine konkrete Schaltung arbeitet.

Man muss die tatsächliche Bauform und den Einsatzzweck kennen.

## Endgespeiste Antennen

Bei einer endgespeisten Antenne befindet sich der Speisepunkt nicht in der Mitte des Strahlers.

Je nach elektrischer Länge kann dort eine sehr hohe Impedanz auftreten.

Deshalb benötigen solche Antennen häufig eine geeignete Impedanztransformation.

Eine endgespeiste Antenne ist nicht automatisch einfacher als ein Dipol.

Die mechanische Montage kann einfacher sein.

Elektrisch können jedoch zusätzliche Fragen entstehen zu:

- Anpassung
- Gegengewicht
- Mantelwellen
- Speiseleitung
- hohen HF-Spannungen

## Mehrbandantennen

Eine Antenne kann so konstruiert werden, dass sie auf mehreren Amateurfunkbändern verwendet werden kann.

Mögliche Prinzipien sind beispielsweise:

- harmonische Resonanzen
- mehrere Strahler
- Sperrkreise
- abgestimmte Speiseleitungen
- Anpassnetzwerke
- breitbandige Konstruktionen

Mehrbandfähigkeit bedeutet jedoch häufig zusätzliche Kompromisse.

Eine Antenne sollte deshalb immer danach beurteilt werden, **welche Aufgabe sie erfüllen soll**.

## Sperrkreise

Ein Sperrkreis beziehungsweise Trap besteht typischerweise aus:

- Spule
- Kondensator

Bei seiner Resonanzfrequenz besitzt er eine besondere elektrische Wirkung und kann einen Teil des Antennenleiters für bestimmte Frequenzen elektrisch abtrennen beziehungsweise beeinflussen.

Damit lassen sich beispielsweise Drahtantennen für mehrere Bänder aufbauen.

Das Grundprinzip beruht auf dem Schwingkreis aus Kapitel 11.

## Antennentuner und Antennenbau

Ein Antennentuner kann die Impedanz transformieren, die der Sender sieht.

Er korrigiert aber nicht automatisch:

- schlechten Wirkungsgrad
- hohe Speiseleitungsverluste
- falsche Abstrahlrichtung
- ungeeignete Montagehöhe
- starke Mantelwellen

Deshalb gilt:

> **Erst das Antennensystem möglichst sinnvoll bauen, danach den Tuner dort einsetzen, wo eine Impedanzanpassung tatsächlich benötigt wird.**

## Wann ist SWR 1:1 nicht das wichtigste Ziel?

Ein SWR von exakt:

**1:1**

ist technisch angenehm, aber nicht automatisch das wichtigste Qualitätsmerkmal einer Antenne.

Beispielsweise kann eine Antenne:

- SWR 1,5:1
- geringe Verluste
- guten Wirkungsgrad
- gewünschtes Strahlungsdiagramm

besitzen und hervorragend funktionieren.

Eine verlustreiche Last kann dagegen:

**SWR 1:1**

zeigen und fast keine HF-Energie abstrahlen.

Die Jagd nach der letzten Stelle hinter dem Komma beim SWR ist deshalb kein Ersatz für eine gute Antennenkonstruktion.

## Was soll zuerst optimiert werden?

Eine sinnvolle Reihenfolge lautet:

1. geeignete Antennenform
2. geeigneter Standort
3. geeignete Höhe
4. mechanisch gute Konstruktion
5. verlustarme Speiseleitung
6. saubere Symmetrierung beziehungsweise Mantelwellenunterdrückung
7. Resonanz beziehungsweise gewünschte Arbeitsfrequenz
8. Anpassung

So wird das ganze Antennensystem betrachtet und nicht nur eine einzelne SWR-Zahl.

## Typischer Abstimmablauf für einen Dipol

### Schritt 1

Gewünschte Arbeitsfrequenz festlegen.

### Schritt 2

Ausgangslänge berechnen.

### Schritt 3

Beide Drahtschenkel etwas länger lassen.

### Schritt 4

Antenne vollständig montieren.

### Schritt 5

Mit kleiner Messleistung beziehungsweise Antennenanalysator messen.

### Schritt 6

Resonanzfrequenz bestimmen.

### Schritt 7

Liegt die Resonanz zu tief, beide Schenkel etwas kürzen.

Liegt sie zu hoch, müssen die Schenkel verlängert werden.

### Schritt 8

Erneut messen.

### Schritt 9

Vorgang wiederholen, bis der gewünschte Bereich erreicht ist.

### Schritt 10

Erst danach die endgültigen mechanischen Abschlüsse herstellen.

## Typischer Abstimmablauf für eine Groundplane

1. Strahler und Radiale zunächst etwas länger bauen.
2. Antenne am vorgesehenen Standort montieren.
3. Resonanz und SWR messen.
4. Strahler nur in kleinen Schritten verändern.
5. Radialwinkel und Aufbau berücksichtigen.
6. Nach jeder Änderung neu messen.
7. Speiseleitung und Mantelwellen ebenfalls prüfen.

Bei Problemen darf deshalb nicht automatisch nur der vertikale Strahler gekürzt werden.

Die gesamte Geometrie muss betrachtet werden.

## Fehlersuche bei schlechtem SWR

Wenn eine Antenne nicht wie erwartet funktioniert, systematisch vorgehen.

### Antenne

- richtige Länge?
- richtige Geometrie?
- unterbrochener Leiter?
- schlechte Verbindung?

### Speisepunkt

- Innenleiter richtig angeschlossen?
- Schirm richtig angeschlossen?
- Kurzschluss?

### Speiseleitung

- Kabel beschädigt?
- Stecker korrekt montiert?
- Wasser eingedrungen?

### Umgebung

- Metall in unmittelbarer Nähe?
- Antenne zu tief?
- Aufbau gegenüber der Messung verändert?

### Mantelwellen

- Speiseleitung strahlt mit?
- Balun beziehungsweise Mantelwellensperre vorhanden und geeignet?

## Nie mehrere Dinge gleichzeitig verändern

Bei der Fehlersuche ist dies besonders wichtig.

Wer gleichzeitig:

- Draht kürzt
- Balun verändert
- Antennenhöhe verändert
- Koaxialkabel austauscht

weiss anschliessend nicht, welche Änderung welchen Effekt verursacht hat.

Deshalb:

> **Immer nur eine Variable ändern und danach erneut messen.**

Das ist nicht nur Antennenbau, sondern grundlegende technische Arbeitsweise.

## Dokumentieren

Bei Antennenexperimenten lohnt es sich, aufzuschreiben:

- Datum
- Antennentyp
- Frequenz
- Drahtlänge
- Höhe
- Radialzahl
- Speiseleitung
- Balun beziehungsweise Unun
- SWR
- \(R\)
- \(X\)
- vorgenommene Änderung

Dadurch wird aus zufälligem Probieren ein reproduzierbares Experiment.

## Sicherheit

Beim praktischen Antennenbau kommen zusätzliche Sicherheitsfragen hinzu.

Dazu gehören insbesondere:

- elektrische Leitungen
- Absturzgefahr
- Blitzschutz
- HF-Feldstärke
- mechanische Stabilität
- hohe HF-Spannungen

Diese Themen werden in Kapitel 16 **Sicherheit und EMV** ausführlicher behandelt.

Eine Antenne darf insbesondere niemals so montiert werden, dass sie bei Bruch oder Herunterfallen eine elektrische Freileitung erreichen kann.

## Drei Dinge, die man nicht verwechseln darf

<table>
<thead>
<tr>
<th>Begriff</th>
<th>Bedeutung</th>
</tr>
</thead>
<tbody>
<tr>
<td>theoretische Länge</td>
<td>aus <span class="arithmatex">\(\lambda\)</span> berechneter Ausgangswert</td>
</tr>
<tr>
<td>mechanische Länge</td>
<td>tatsächlich gemessene Leiterlänge</td>
</tr>
<tr>
<td>elektrische Länge</td>
<td>elektromagnetisch wirksame Länge</td>
</tr>
</tbody>
</table>

Und:

<table>
<thead>
<tr>
<th>Begriff</th>
<th>Bedeutung</th>
</tr>
</thead>
<tbody>
<tr>
<td>Resonanz</td>
<td><span class="arithmatex">\(X=0\)</span></td>
</tr>
<tr>
<td>Anpassung</td>
<td>Impedanzen passen zueinander</td>
</tr>
<tr>
<td>Wirkungsgrad</td>
<td>Anteil der Leistung, der tatsächlich abgestrahlt wird</td>
</tr>
</tbody>
</table>

## Lernschema

Wenn du eine einfache Antenne bauen oder eine Prüfungsaufgabe dazu lösen möchtest:

1. **Welche Frequenz?**
2. **Welche Wellenlänge?**
3. **Welche Antennenform?**
4. **Welche theoretische Länge?**
5. **Welche praktische Ausgangslänge?**
6. **Wie wird gespeist?**
7. **Ist das System symmetrisch oder unsymmetrisch?**
8. **Ist ein Balun oder eine Mantelwellensperre sinnvoll?**
9. **Wo wird die Antenne montiert?**
10. **Was zeigt die Messung?**
11. **Welche einzelne Änderung ist als Nächstes sinnvoll?**

## Die wichtigsten Zusammenhänge auf einen Blick

Wellenlänge:

\[
\lambda \approx \frac{300}{f,[\mathrm{MHz}]}
\]

Theoretischer Halbwellendipol:

\[
l = \frac{\lambda}{2}
\]

Praktischer Ausgangswert für einen einfachen Drahtdipol:

\[
l \approx \frac{143}{f,[\mathrm{MHz}]}
\]

Ein Dipolschenkel als Ausgangswert:

\[
l \approx \frac{71{,}5}{f,[\mathrm{MHz}]}
\]

Theoretischer Viertelwellenstrahler:

\[
l = \frac{\lambda}{4}
\]

Einfache praktische Ausgangsnäherung:

\[
l \approx \frac{71{,}5}{f,[\mathrm{MHz}]}
\]

Resonanz:

\[
X=0
\]

## Merksätze

**Antennenformeln liefern Ausgangswerte, keine garantierten Endmasse.**

**Eine praktische Antenne wird nach dem Aufbau gemessen und abgestimmt.**

**Eine zu lange einfache resonante Antenne resoniert zu tief.**

**Eine zu kurze einfache resonante Antenne resoniert zu hoch.**

**Beim Abstimmen immer nur kleine Änderungen durchführen.**

**Bei einem symmetrischen Dipol beide Schenkel gleichmässig verändern.**

**Resonanz, Anpassung und Wirkungsgrad sind nicht dasselbe.**

**Ein SWR von 1:1 beweist nicht, dass eine Antenne gut abstrahlt.**

**Die Umgebung beeinflusst eine reale Antenne.**

**Radiale sind ein elektrischer Bestandteil einer Groundplane.**

**Ein 1:1-Balun kann der Symmetrierung beziehungsweise Mantelwellenunterdrückung dienen, ohne die Impedanz zu transformieren.**

**Eine gute Speiseleitung gehört zur Antenne als Gesamtsystem.**

**Beim Experimentieren immer nur eine Variable gleichzeitig verändern.**

## Selbstkontrolle

1. Warum sollte ein selbstgebauter Dipol zunächst etwas länger gebaut werden?
2. Ein Dipol resoniert unterhalb der gewünschten Frequenz. Ist er tendenziell zu lang oder zu kurz?
3. Was geschieht mit der Resonanzfrequenz, wenn ein einfacher Dipol gekürzt wird?
4. Warum werden bei einem symmetrischen Dipol normalerweise beide Schenkel gleich stark gekürzt?
5. Sind die Radiale einer Groundplane nur mechanische Halterungen?
6. Was ist der Unterschied zwischen Resonanz und Anpassung?
7. Weshalb sollte eine Antenne am endgültigen Standort abgestimmt werden?
8. Welche Aufgabe kann ein 1:1-Strombalun am Dipol übernehmen?
9. Beweist SWR 1:1 einen hohen Antennenwirkungsgrad?
10. Warum sollte bei der Fehlersuche immer nur eine Sache gleichzeitig verändert werden?
11. Ein einfacher Drahtdipol resoniert bei 6,9 MHz, soll aber bei 7,1 MHz arbeiten. Muss er grundsätzlich verlängert oder gekürzt werden?
12. Was zeigt ein Antennenanalysator zusätzlich zum SWR besonders nützlich an?

### Antworten

1. Weil die endgültige resonante Länge von Bauform und Umgebung abhängt und sich ein zu langer Draht leichter kürzen als ein zu kurzer verlängern lässt.
2. **Zu lang.**
3. Die Resonanzfrequenz steigt.
4. Damit die geometrische und elektrische Symmetrie möglichst erhalten bleibt.
5. **Nein.** Sie bilden das elektrische Gegensystem des Strahlers.
6. Resonanz bedeutet:

\[
X=0
\]

Anpassung bedeutet, dass die vorhandene Impedanz zur Systemimpedanz passt.

1. Weil Höhe, Boden, Gebäude und andere Gegenstände die elektrischen Eigenschaften beeinflussen.
2. Er kann unerwünschte Gleichtaktströme beziehungsweise Mantelwellen auf der Koaxialleitung vermindern.
3. **Nein.**
4. Damit Ursache und Wirkung einer Änderung eindeutig erkennbar bleiben.
5. **Kürzen**, da die gewünschte Resonanzfrequenz höher liegt.
6. Insbesondere den Wirkwiderstand \(R\) und den Blindanteil \(X\) beziehungsweise die komplexe Impedanz.

## Prüfungsbezug HB3 und HB9

Die aktuellen BAKOM-Prüfungsvorschriften führen bei Antennen und Antennenzuleitungen insbesondere auf:

- Antennentypen
- Antenneneigenschaften
- Antennenzuleitungen
- Anpassung

Für HB3 sind die Fragen in technischer und rechnerischer Hinsicht weniger komplex als für HB9.

Dieses Kapitel verbindet diese Prüfungsgebiete mit der praktischen Amateurfunkarbeit.

Besonders wichtig sind:

- Zusammenhang zwischen Frequenz und Antennenlänge
- Halbwellendipol
- Viertelwellen-Groundplane
- Speisepunkt
- Speiseleitung
- Resonanz
- Anpassung
- SWR
- Balun
- Mantelwellen
- Einfluss der Umgebung
- systematische Messung und Abstimmung

Für HB9 ist zusätzlich ein vertieftes Verständnis der Impedanz, des Blindanteils und des Zusammenwirkens von Antenne, Speiseleitung und Anpassnetzwerk sinnvoll.

## Navigation

[← Kapitel 12: Messtechnik](12-messtechnik.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 14: Funkbetrieb →](14-funkbetrieb.md)

---

*© 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
