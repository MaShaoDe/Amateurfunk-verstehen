# Kapitel 4: Grundlagen der Antennentechnik

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, welche Aufgabe eine Antenne beim Senden und Empfangen erfüllt
- Antenne und Speiseleitung grundsätzlich unterscheiden können
- verstehen, weshalb ein vollständiger HF-Stromkreis einen Hin- und Rückstrompfad benötigt
- den Zusammenhang zwischen Frequenz, Wellenlänge und Antennenabmessungen erklären können
- mechanische und elektrische Antennenlänge unterscheiden können
- das Grundprinzip der Resonanz einer Antenne verstehen
- einen Halbwellendipol grundsätzlich erklären können
- die Strom- und Spannungsverteilung eines Halbwellendipols kennen
- den Begriff Speisepunkt verstehen
- einen Viertelwellenstrahler beziehungsweise eine Groundplane grundsätzlich erklären können
- verstehen, weshalb ein Viertelwellenstrahler ein elektrisches Gegensystem benötigt
- Resonanz, Anpassung und Wirkungsgrad unterscheiden können
- erklären können, weshalb die Umgebung die Eigenschaften einer Antenne verändert
- verstehen, weshalb Höhe und Aufstellung einer Antenne wichtig sind
- die Polarisation einer Antenne einordnen können
- verstehen, dass jede praktische Antenne einen Kompromiss zwischen mehreren Eigenschaften darstellt

> **Hinweis zu HB3 und HB9:**
> Antennentypen, Antenneneigenschaften sowie Antennenzuleitungen und Anpassung gehören gemäss BAKOM zum technischen Prüfungsstoff. Für HB3 sind die technischen und rechnerischen Fragen weniger komplex als für HB9. Die Kennzeichnung **HB9-Vertiefung** in diesem Lehrwerk ist eine didaktische Hilfe.

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
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(\lambda\)</span></td>
<td>Wellenlänge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(l\)</span></td>
<td>Leiter- beziehungsweise Antennenlänge</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(U\)</span></td>
<td>Hochfrequenzspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(I\)</span></td>
<td>Hochfrequenzstrom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(P\)</span></td>
<td>Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_A\)</span></td>
<td>der Antenne zugeführte Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_\mathrm{rad}\)</span></td>
<td>abgestrahlte Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(Z\)</span></td>
<td>Impedanz</td>
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
<td><span class="arithmatex">\(\eta\)</span></td>
<td>Wirkungsgrad</td>
<td>keine</td>
</tr>
</tbody>
</table>

Der griechische Buchstabe:

\[
\lambda
\]

wird **Lambda** ausgesprochen und bezeichnet die Wellenlänge.

Der griechische Buchstabe:

\[
\eta
\]

wird **Eta** ausgesprochen und wird häufig für den Wirkungsgrad verwendet.

## Der rote Faden

In Kapitel 3 haben wir gesehen:

Ein Sender erzeugt hochfrequente elektrische Energie.

Diese Energie wird über eine Speiseleitung zur Antenne transportiert.

Die Antenne koppelt einen Teil dieser Energie in den freien Raum aus.

Vereinfacht:

**Sender → Speiseleitung → Antenne → elektromagnetische Welle**

Beim Empfang läuft der Vorgang umgekehrt:

**elektromagnetische Welle → Antenne → Speiseleitung → Empfänger**

Die Antenne ist damit die Schnittstelle zwischen:

**leitungsgebundener Hochfrequenzenergie**

und:

**elektromagnetischer Energie im freien Raum**

---

# Was ist eine Antenne?

Eine Antenne ist ein leitfähiges System, das elektromagnetische Energie zwischen einem elektrischen Leitungssystem und dem freien Raum koppelt.

Beim Senden:

- fliesst Hochfrequenzstrom in der Antenne
- entstehen zeitlich veränderliche elektrische und magnetische Felder
- ein Teil der Energie wird als elektromagnetische Welle abgestrahlt

Beim Empfang:

- trifft eine elektromagnetische Welle auf die Antenne
- das Feld wirkt auf die Ladungsträger im Leiter
- dadurch entsteht eine kleine hochfrequente Spannung beziehungsweise ein Strom
- dieses Signal wird dem Empfänger zugeführt

Eine geeignete Antenne kann grundsätzlich sowohl senden als auch empfangen.

---

# Die Antenne als Wandler

Eine hilfreiche Analogie ist ein Lautsprecher.

Ein Lautsprecher wandelt:

**elektrische Energie**

in:

**mechanische Bewegung und Schall**

Eine Antenne koppelt:

**elektrische Hochfrequenzenergie**

in:

**elektromagnetische Strahlung**

Beim Empfang verhält sie sich ähnlich wie ein Mikrofon, das eine Welle aufnimmt und daraus ein elektrisches Signal erzeugt.
.
.

![](/HAM-Radio/educ/lizkurs/images/abbildung_4-1.png)

**Abbildung 4-1:** Eine Antenne wirkt als Koppelelement zwischen leitungsgebundener Hochfrequenzenergie und elektromagnetischer Energie im freien Raum.
.
.
.
Die Analogie hilft beim Einstieg, ist aber nicht vollständig.

Schall ist eine mechanische Welle in einem Medium.

Eine Funkwelle ist eine elektromagnetische Welle und benötigt kein materielles Medium.

---

# Ein vollständiges Antennensystem

In der Praxis besteht eine Funkantenne nicht nur aus dem sichtbaren Strahler.

Zum gesamten System können gehören:

- Strahler
- Gegensystem
- Speisepunkt
- Balun oder Unun
- Anpassnetzwerk
- Speiseleitung
- Steckverbinder
- Mast
- Umgebung
- Boden

Diese Teile können die elektrischen Eigenschaften gegenseitig beeinflussen.

Deshalb ist die Aussage:

> **Die Antenne ist nur der Draht**

meist zu einfach.

---

# Antenne und Speiseleitung

Eine Speiseleitung soll Hochfrequenzenergie möglichst verlustarm transportieren.

Eine Antenne soll dagegen elektromagnetische Energie gezielt abstrahlen beziehungsweise empfangen.

## Speiseleitung

Ideal:

**Energie transportieren, möglichst wenig abstrahlen**

## Antenne

Ideal:

**Energie gezielt in den freien Raum koppeln**

Das physikalische Material kann in beiden Fällen ähnlich sein.

Der entscheidende Unterschied liegt in:

- Geometrie
- Stromverteilung
- Rückstrompfad
- Verhältnis zur Wellenlänge

---

# Warum strahlt eine Zweidrahtleitung wenig?

Bei einer symmetrischen Zweidrahtleitung liegen Hin- und Rückleiter nahe beieinander.

In ihnen fliessen annähernd gleich grosse Ströme in entgegengesetzter Richtung.

Sind die Leiterabstände klein gegenüber der Wellenlänge, können sich ihre Fernfeldanteile weitgehend gegenseitig kompensieren.

Die Leitung strahlt dann vergleichsweise wenig.

Bei einer Antenne wird die Stromverteilung dagegen so gestaltet, dass sich diese Felder im Fernfeld nicht vollständig aufheben.

Dadurch wird eine wirksame Abstrahlung möglich.

---

# Der Rückstrompfad

Ein elektrischer Strom benötigt einen geschlossenen Stromkreis.

Auch eine Antenne bildet keinen magischen Einzelleiter, in dem Strom einfach verschwindet.

Es gibt immer einen:

**Hinweg**

und einen:

**Rückstrompfad**

Beim Dipol bilden die beiden Dipolhälften gemeinsam das Antennensystem.

Bei einem Viertelwellenstrahler kann der Rückstrom beispielsweise über:

- Radiale
- eine leitende Fläche
- Fahrzeugkarosserie
- andere geeignete Gegengewichte

fliessen.

Fehlt ein klarer Rückstrompfad, sucht sich die HF unter Umständen andere Wege.

Dann können beispielsweise:

- Koaxialmantel
- Mast
- Stromleitungen
- Gerätegehäuse

ungewollt Teil des Antennensystems werden.

---

# Wellenlänge und Antennenabmessungen

Aus Kapitel 2 kennen wir:

\[
\lambda = \frac{c}{f}
\]

Für praktische Amateurfunkrechnungen:

\[
\lambda,[\mathrm{m}] \approx \frac{300}{f,[\mathrm{MHz}]}
\]

Viele klassische Antennen besitzen Abmessungen in einem bestimmten Verhältnis zur Wellenlänge.

Beispiele:

**Halbwellendipol**

\[
\approx \frac{\lambda}{2}
\]

**Viertelwellenstrahler**

\[
\approx \frac{\lambda}{4}
\]

**Vollwellenschleife**

\[
\approx
\lambda
\]

---

# Beispiel für 14,2 MHz

Gegeben:

\[
f=14{,}2\ \mathrm{MHz}
\]

Dann:

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

Das sind zunächst geometrische Werte aus der Freiraumwellenlänge.

Eine reale Antenne muss nicht exakt diese mechanische Länge besitzen.

---

# Mechanische und elektrische Länge

Zwei Begriffe müssen unterschieden werden.

## Mechanische Länge

Die tatsächlich mit einem Massband gemessene Länge des Leiters.

Beispiel:

\[
10{,}1\ \mathrm{m}
\]

## Elektrische Länge

Die Länge des Leiters im Verhältnis zur Wellenlänge beziehungsweise sein elektrisches Verhalten bei einer bestimmten Frequenz.

Eine Antenne kann mechanisch kürzer sein als:

\[
\frac{\lambda}{2}
\]

und sich elektrisch trotzdem wie eine Halbwellenschaltung verhalten.

---

# Warum unterscheiden sich mechanische und elektrische Länge?

Die elektrische Länge wird unter anderem beeinflusst durch:

- Leiterdurchmesser
- Isolation
- Endeffekte
- Spulen
- Kapazitäten
- Umgebung
- Boden
- benachbarte Leiter

Deshalb ist eine Antennenformel häufig ein:

**Ausgangspunkt**

und nicht ein absolut exaktes Endmass.

---

# Elektrische Länge in Grad

Eine vollständige Wellenlänge kann auch als:

\[
360^\circ
\]

elektrische Länge betrachtet werden.

Dann entspricht:

\[
\frac{\lambda}{2} = 180^\circ
\]

und:

\[
\frac{\lambda}{4} = 90^\circ
\]

Diese Schreibweise wird später insbesondere bei:

- Speiseleitungen
- Phasenlagen
- Viertelwellentransformatoren

nützlich.

---

# Resonanz einer Antenne

Eine Antenne besitzt eine frequenzabhängige Impedanz.

Diese kann geschrieben werden als:

\[
Z=R+jX
\]

Dabei steht:

- \(R\) für den Wirkwiderstandsanteil
- \(X\) für den Blindanteil

Bei Resonanz gilt am betrachteten Speisepunkt:

\[
X=0
\]

Die Impedanz ist dann rein reell:

\[
Z=R
\]

Die genaue Behandlung folgt in Kapitel 6.

---

# Resonanz bedeutet nicht automatisch 50 Ω

Das ist eine der wichtigsten Unterscheidungen.

Eine Antenne kann beispielsweise bei einer Frequenz resonant sein mit:

\[
Z=75+j0\ \Omega
\]

Dann gilt:

\[
X=0
\]

Die Antenne ist resonant.

Sie besitzt aber nicht:

\[
50\ \Omega
\]

Deshalb ist sie nicht gleichzeitig perfekt an ein 50-Ω-System angepasst.

## Merksatz

> **Resonanz und Anpassung sind nicht dasselbe.**

---

# Der Halbwellendipol

Eine der wichtigsten Referenzantennen ist der:

**Halbwellendipol**

Er besteht aus zwei leitenden Schenkeln.

Die Gesamtlänge beträgt ungefähr:

\[
\frac{\lambda}{2}
\]

Bei einem mittengespeisten Dipol besitzt jeder Schenkel ungefähr:

\[
\frac{\lambda}{4}
\]

Der Speisepunkt befindet sich in der Mitte.

---

# Warum ist der Dipol so wichtig?

Der Halbwellendipol ist:

- einfach aufgebaut
- gut verständlich
- gut berechenbar
- eine wichtige Referenzantenne
- Grundlage zahlreicher anderer Antennenformen

Viele komplexere Antennen können teilweise als Erweiterungen oder Kombinationen von Dipolstrukturen verstanden werden.

---

# Stromverteilung am Halbwellendipol

Bei einem idealisierten resonanten Halbwellendipol ist der Hochfrequenzstrom:

**in der Mitte am grössten**

und:

**an den Enden null**

Vereinfacht:

**Dipolende → Stromminimum**

**Mitte → Strommaximum**

**Dipolende → Stromminimum**

---

# Spannungsverteilung am Halbwellendipol

Die Hochfrequenzspannung verhält sich ungefähr umgekehrt.

An den Enden des Dipols befindet sich ein:

**Spannungsmaximum**

In der Mitte befindet sich ein:

**Spannungsminimum**

Damit gilt vereinfacht:

| Position | Strom | Spannung |
| --- | --- | --- |
| Dipolmitte | Maximum | Minimum |
| Dipolende | Minimum, idealisiert null | Maximum |

Dieses Verhalten ist für das Verständnis von Speisepunkten sehr wichtig.

---

# Warum ist am Dipolende die Spannung hoch?

Am Leiterende kann kein weiterer Leitungsstrom entlang des Drahtes fliessen.

Der Strom fällt deshalb am offenen Ende auf null.

Gleichzeitig entsteht dort eine starke Ladungsansammlung beziehungsweise ein grosses elektrisches Feld.

Das führt zu einer hohen HF-Spannung.

Diese Spannung kann bei hoher Sendeleistung erheblich sein.

Deshalb dürfen Antennenenden während des Sendebetriebs nicht berührt werden.

---

# Der Speisepunkt

Als:

**Speisepunkt**

bezeichnet man die Stelle, an der die Hochfrequenzenergie der Antenne zugeführt beziehungsweise beim Empfang entnommen wird.

Die elektrische Impedanz hängt stark davon ab, **wo** eine Antenne gespeist wird.

Beim klassischen Halbwellendipol erfolgt die Speisung in der Mitte.

---

# Speisepunktimpedanz des Halbwellendipols

Ein dünner, gerader, resonanter Halbwellendipol im freien Raum besitzt bei Mittenspeisung idealisiert einen Speisewiderstand in der Grössenordnung von:

\[
73\ \Omega
\]

In älteren schweizerischen Ausbildungsunterlagen wird häufig näherungsweise:

\[
75\ \Omega
\]

verwendet.

Beides beschreibt dieselbe Grössenordnung.

In einer realen Installation kann die tatsächliche Impedanz deutlich davon abweichen.

---

# Was verändert die Dipolimpedanz?

Unter anderem:

- Höhe über Boden
- Bodenleitfähigkeit
- Winkel der Dipolschenkel
- Leiterdurchmesser
- benachbarte Gebäude
- Bäume
- Metallkonstruktionen
- Speiseleitung
- andere Antennen

Ein realer Dipol muss deshalb gemessen werden.

---

# Symmetrische Antenne

Ein mittengespeister Dipol ist grundsätzlich:

**symmetrisch**

Beide Seiten besitzen idealerweise dieselbe geometrische und elektrische Struktur.

Ein Koaxialkabel ist dagegen:

**unsymmetrisch**

Dieser Übergang kann zusätzliche Effekte verursachen.

Deshalb wird beim Dipol häufig ein:

**Balun**

beziehungsweise eine geeignete Mantelwellensperre eingesetzt.

Dies behandeln wir ausführlich in Kapitel 6 und Kapitel 7.

---

# Der Viertelwellenstrahler

Eine weitere wichtige Grundform ist der:

**Viertelwellenstrahler**

Seine Strahlerlänge beträgt ungefähr:

\[
\frac{\lambda}{4}
\]

Ein einzelner Viertelwellenleiter ist jedoch nur ein Teil des vollständigen Antennensystems.

Er benötigt ein:

**elektrisches Gegensystem**

---

# Groundplane-Antenne

Bei einer Groundplane bildet ein vertikaler Viertelwellenstrahler gemeinsam mit mehreren Radialen die Antenne.

Der Strahler besitzt ungefähr:

\[
\frac{\lambda}{4}
\]

Die Radiale besitzen häufig ebenfalls eine Länge in der Grössenordnung von:

\[
\frac{\lambda}{4}
\]

Die Radiale bilden den Rückstrompfad beziehungsweise das Gegensystem.

---

# Warum funktioniert ein Viertelwellenstrahler?

Bei einem Viertelwellenstrahler über einer ideal leitenden Ebene kann man sich vereinfacht eine:

**Spiegelantenne**

unterhalb der Ebene vorstellen.

Strahler und Spiegelbild entsprechen zusammen ungefähr einem Halbwellensystem.

Dieses Modell wird als:

**Spiegelbildprinzip**

beziehungsweise Image Theory verwendet.

In einer realen Groundplane übernehmen Radiale die Funktion des Gegensystems.

---

# Radiale sind keine Dekoration

Bei einer Groundplane beeinflussen die Radiale:

- Speisepunktimpedanz
- Stromverteilung
- Wirkungsgrad
- Strahlungsdiagramm

Ihre:

- Anzahl
- Länge
- Neigung
- Höhe
- Umgebung

können deshalb das Verhalten der gesamten Antenne verändern.

---

# Fahrzeugantenne

Ein Viertelwellenstrahler auf einem metallischen Fahrzeugdach ist ein ähnliches Prinzip.

Der sichtbare vertikale Stab ist nur der Strahler.

Die leitende Fahrzeugkarosserie bildet einen wesentlichen Teil des Gegensystems.

Ohne dieses Gegensystem würde dieselbe Stablänge elektrisch anders funktionieren.

---

# Rückstrom über das Koaxialkabel

Fehlt ein geeignetes Gegensystem, kann die HF versuchen, über die Aussenseite des Koaxialkabels zurückzufliessen.

Dann wird das Koaxialkabel teilweise selbst zur Antenne.

Mögliche Folgen:

- veränderte Resonanz
- verändertes Strahlungsdiagramm
- HF im Funkraum
- stärkere Abhängigkeit von Kabellänge und Kabelführung
- mögliche Störungen anderer Geräte

Dieses Problem wird später unter dem Begriff:

**Mantelwellen**

behandelt.

---

# Wirkungsgrad

Nicht die gesamte zugeführte Hochfrequenzleistung wird zwangsläufig abgestrahlt.

Ein Teil kann als Wärme verloren gehen.

Der Antennenwirkungsgrad kann grundsätzlich beschrieben werden als:

\[
\eta = \frac{P_\mathrm{rad}}{P_A}
\]

Dabei gilt:

- \(P_\mathrm{rad}\) = tatsächlich abgestrahlte Leistung
- \(P_A\) = der Antenne zugeführte Leistung

Bei:

\[
\eta=1
\]

beziehungsweise:

\[
100%
\]

würde die gesamte zugeführte Leistung abgestrahlt.

Eine reale Antenne besitzt Verluste.

---

# Wo entstehen Antennenverluste?

Beispielsweise in:

- elektrischen Leitern
- Spulen
- Anpassnetzwerken
- schlechten Kontakten
- Boden
- Umgebung
- Speiseleitung

Besonders bei elektrisch stark verkürzten Antennen können Verluste gegenüber der Strahlungswirkung erheblich werden.

---

# Ein gutes SWR bedeutet nicht automatisch hohen Wirkungsgrad

Ein besonders wichtiger Zusammenhang:

Eine Antenne kann ein:

**SWR von 1:1**

zeigen und trotzdem einen schlechten Wirkungsgrad besitzen.

Beispielsweise könnte ein grosser Teil der Senderleistung in:

- Widerständen
- Spulen
- Bodenverlusten

in Wärme umgesetzt werden.

Der Sender sieht möglicherweise trotzdem eine gut angepasste Last.

## Merksatz

> **Gute Anpassung beweist keine gute Abstrahlung.**

---

# Drei Dinge, die man nicht verwechseln darf

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
<td>Blindanteil <span class="arithmatex">\(X=0\)</span></td>
</tr>
<tr>
<td>Anpassung</td>
<td>Antennenimpedanz passt zum Leitungssystem beziehungsweise Sender</td>
</tr>
<tr>
<td>Wirkungsgrad</td>
<td>welcher Anteil der zugeführten Leistung tatsächlich abgestrahlt wird</td>
</tr>
</tbody>
</table>

Eine Antenne kann:

- resonant, aber nicht angepasst sein
- angepasst, aber verlustreich sein
- effizient sein, obwohl das SWR nicht exakt 1:1 beträgt

---

# Polarisation einer Antenne

Aus Kapitel 3 kennen wir:

Die Polarisation einer Funkwelle wird nach der Richtung des:

**elektrischen Feldes**

bezeichnet.

Die Orientierung einer Antenne bestimmt bei vielen einfachen Antennen weitgehend die Polarisation.

## Vertikaler Dipol

→ vertikale Polarisation

## Horizontaler Dipol

→ horizontale Polarisation

Die tatsächlichen Verhältnisse können bei komplexen Antennen und Reflexionen komplizierter sein.

---

# Warum ist Polarisation wichtig?

Sind Sende- und Empfangsantenne gleich polarisiert, ist die Kopplung besonders günstig.

Beispiel:

**vertikal → vertikal**

Bei idealen linear polarisierten Antennen kann eine Drehung um:

\[
90^\circ
\]

eine starke Polarisationsdämpfung verursachen.

Deshalb werden für bestimmte Anwendungen bevorzugt bestimmte Polarisationen verwendet.

---

# Antennenhöhe

Die Höhe einer Antenne beeinflusst ihre Eigenschaften.

Besonders bei horizontalen Antennen verändert die Höhe über Boden:

- Strahlungsdiagramm
- vertikalen Abstrahlwinkel
- Speisepunktimpedanz

Ein Dipol in:

\[
2\ \mathrm{m}
\]

Höhe verhält sich deshalb nicht genauso wie derselbe Dipol in:

\[
15\ \mathrm{m}
\]

Höhe.

---

# Boden und Antenne

Der Boden kann Funkwellen:

- reflektieren
- absorbieren
- beeinflussen

Seine elektrische Wirkung hängt unter anderem ab von:

- Leitfähigkeit
- Feuchtigkeit
- Zusammensetzung
- Frequenz

Bei Vertikalantennen können Bodenverluste besonders wichtig sein.

Ein gutes Radialsystem kann diese Verluste verringern.

---

# Gebäude und Metallteile

Eine Antenne koppelt elektromagnetisch mit ihrer Umgebung.

Einfluss können beispielsweise haben:

- Dachrinnen
- Metallgeländer
- Stahlbeton
- Fahrzeuge
- Masten
- andere Antennen
- Stromleitungen

Dadurch können sich verändern:

- Resonanzfrequenz
- Impedanz
- Strahlungsdiagramm
- Polarisation

---

# Bäume

Auch Bäume können eine Antenne beeinflussen.

Der Effekt hängt unter anderem ab von:

- Frequenz
- Feuchtigkeit
- Abstand
- Grösse des Baumes

Besonders auf höheren Frequenzen kann Vegetation zusätzliche Dämpfung verursachen.

Auf Kurzwelle ist der Effekt häufig geringer, aber nicht immer vernachlässigbar.

---

# Eine Antenne ist kein isoliertes Laborobjekt

Viele theoretische Antennenwerte beziehen sich auf idealisierte Bedingungen wie:

**freier Raum**

oder:

**ideal leitende Ebene**

Eine reale Amateurfunkantenne befindet sich dagegen:

- über realem Boden
- neben Gebäuden
- an Masten
- mit realen Kabeln
- in endlicher Höhe

Deshalb sind theoretische Werte Referenzen und keine Garantie für den realen Aufbau.

---

# Antennenbandbreite

Eine Antenne besitzt keinen einzigen mathematischen Punkt, an dem sie funktioniert und daneben gar nicht.

Sie besitzt einen Frequenzbereich, innerhalb dessen ihre Eigenschaften für den vorgesehenen Zweck ausreichend bleiben.

Diese nutzbare Frequenzspanne bezeichnet man als:

**Bandbreite**

Sie kann beispielsweise anhand eines zulässigen:

- SWR
- Impedanzbereichs
- Gewinnabfalls

definiert werden.

---

# Was beeinflusst die Bandbreite?

Unter anderem:

- Antennenform
- Leiterdurchmesser
- elektrische Länge
- Verluste
- Anpassung
- Umgebung

Ein dickerer Strahler kann beispielsweise bei bestimmten Antennenformen eine grössere nutzbare Bandbreite besitzen als ein sehr dünner Leiter.

Breite Bandbreite bedeutet jedoch nicht automatisch höheren Wirkungsgrad.

---

# Elektrisch verkürzte Antennen

Eine Antenne kann mechanisch deutlich kürzer gebaut werden als ihre natürliche resonante Länge.

Dazu können beispielsweise eingesetzt werden:

- Verlängerungsspulen
- Kapazitäten
- besondere Leiterformen

Eine solche Antenne kann elektrisch resonant gemacht werden.

Sie besitzt aber möglicherweise:

- kleinere Bandbreite
- höhere Verluste
- stärkere Empfindlichkeit gegenüber der Umgebung
- hohe Spannungen oder Ströme an bestimmten Bauteilen

## Wichtig

> **Resonant bedeutet nicht automatisch gross, effizient oder breitbandig.**

---

# Antennengewinn

Eine Antenne kann abgestrahlte Energie bevorzugt in bestimmte Richtungen verteilen.

Das wird als:

**Richtwirkung**

bezeichnet.

Dadurch kann in einer bevorzugten Richtung ein Antennengewinn entstehen.

Die Antenne erzeugt dabei keine zusätzliche Leistung.

Sie verteilt die vorhandene Leistung räumlich anders.

Die genaue Behandlung erfolgt in Kapitel 5.

---

# Referenzantennen

Antennengewinn wird immer im Vergleich zu einer Referenz angegeben.

Häufig verwendet werden:

## Isotroper Strahler

theoretische Referenz, die in alle Raumrichtungen gleich abstrahlt

Angabe:

**dBi**

## Halbwellendipol

praktische Referenzantenne

Angabe:

**dBd**

Die aktuelle BAKOM-Formelsammlung gibt für den Halbwellendipol gegenüber dem Isotropstrahler an:

\[
2{,}15\ \mathrm{dBi}
\]

---

# Ein Dipol erzeugt keine Energieverstärkung

Die Bezeichnung:

**Antennengewinn**

kann missverständlich sein.

Eine passive Antenne kann keine Energie erzeugen.

Der Gewinn entsteht, weil Energie in bestimmten Richtungen stärker konzentriert und dafür in anderen Richtungen schwächer abgestrahlt wird.

Das gilt beim Empfang entsprechend ebenfalls.

---

# Antennen sind immer Kompromisse

Eine theoretisch perfekte Antenne für alle Zwecke existiert nicht.

Beim Antennenbau müssen häufig mehrere Ziele gegeneinander abgewogen werden.

Beispielsweise:

- Grösse
- Wirkungsgrad
- Bandbreite
- Richtwirkung
- Aufbauhöhe
- mechanische Stabilität
- Preis
- verfügbare Fläche
- Mehrbandfähigkeit

Eine kleine Antenne kann praktisch sehr nützlich sein.

Sie muss aber nicht dieselben Eigenschaften besitzen wie eine grosse resonante Antenne.

---

# Beispiel: portable Antenne

Für eine Wanderung kann eine kleine, leichte Antenne sinnvoll sein.

Dort sind wichtig:

- geringes Gewicht
- kleiner Platzbedarf
- einfacher Aufbau

Ein etwas geringerer Wirkungsgrad kann dafür akzeptabel sein.

---

# Beispiel: feste DX-Station

Bei einer festen Station können andere Ziele wichtiger sein:

- niedriger Abstrahlwinkel
- Richtwirkung
- geringer Leitungsverlust
- hohe Belastbarkeit
- gute Empfangseigenschaften

Die optimale Antenne hängt also immer vom Zweck ab.

---

# Eine Antenne funktioniert als System

Beim Beurteilen einer Antenne sollte man nicht nur auf den sichtbaren Strahler schauen.

Das ganze System lautet:

**Sender → Speiseleitung → Anpassung → Speisepunkt → Antenne → Umgebung**

Alle Teile beeinflussen die tatsächliche Funktion.

---

# Nicht verwechseln

## Antennenlänge und Wellenlänge

Eine Wellenlänge von 20 m bedeutet nicht, dass die Antenne 20 m lang sein muss.

## Resonanz und Anpassung

Resonant bedeutet:

\[
X=0
\]

Nicht automatisch:

\[
Z=50\ \Omega
\]

## Anpassung und Wirkungsgrad

SWR 1:1 bedeutet nicht automatisch gute Abstrahlung.

## Strahler und Gegensystem

Bei einer Groundplane ist nicht nur der vertikale Stab die Antenne.

Auch das Gegensystem gehört dazu.

## Speiseleitung und Antenne

Eine Speiseleitung soll Energie transportieren.

Eine Antenne soll sie gezielt abstrahlen beziehungsweise empfangen.

---

# Lernschema

Bei einer Antennenfrage gehe in dieser Reihenfolge vor:

1. **Welche Frequenz beziehungsweise Wellenlänge?**
2. **Welche Antennenform?**
3. **Welche elektrische Länge?**
4. **Wo befindet sich der Speisepunkt?**
5. **Wie verlaufen Strom und Spannung?**
6. **Wo befindet sich der Rückstrompfad?**
7. **Ist die Antenne resonant?**
8. **Welche Impedanz besitzt sie?**
9. **Ist sie angepasst?**
10. **Wie hoch ist ihr Wirkungsgrad?**
11. **Welche Polarisation besitzt sie?**
12. **Wie beeinflusst die Umgebung das System?**

---

# Die wichtigsten Zusammenhänge auf einen Blick

Wellenlänge:

\[
\lambda = \frac{c}{f}
\]

Praktisch:

\[
\lambda,[\mathrm{m}] \approx \frac{300}{f,[\mathrm{MHz}]}
\]

Halbwellendipol:

\[
l \approx \frac{\lambda}{2}
\]

Viertelwellenstrahler:

\[
l \approx \frac{\lambda}{4}
\]

Elektrische Länge:

\[
\lambda = 360^\circ
\]

\[
\frac{\lambda}{2} = 180^\circ
\]

\[
\frac{\lambda}{4} = 90^\circ
\]

Resonanz:

\[
X=0
\]

Wirkungsgrad als grundlegende Definition:

\[
\eta = \frac{P_\mathrm{rad}}{P_A}
\]

---

# Merksätze

**Eine Antenne koppelt Hochfrequenzenergie zwischen einem Leitungssystem und dem freien Raum.**

**Eine geeignete Antenne kann grundsätzlich sowohl senden als auch empfangen.**

**Eine Speiseleitung soll möglichst wenig, eine Antenne gezielt abstrahlen.**

**Jede Antenne benötigt einen vollständigen HF-Stromkreis und damit einen Rückstrompfad.**

**Viele Antennenabmessungen werden als Bruchteil der Wellenlänge angegeben.**

**Mechanische und elektrische Antennenlänge sind nicht immer gleich.**

**Ein Halbwellendipol besitzt ungefähr die Gesamtlänge \(\lambda/2\).**

**Beim resonanten mittengespeisten Halbwellendipol liegt das Strommaximum in der Mitte.**

**An den Dipolenden liegt das Spannungsmaximum.**

**Eine Groundplane benötigt ein Gegensystem, beispielsweise Radiale.**

**Resonanz bedeutet \(X=0\).**

**Resonanz bedeutet nicht automatisch 50 Ω.**

**Ein gutes SWR beweist keinen hohen Wirkungsgrad.**

**Die Polarisation wird nach der Richtung des elektrischen Feldes bezeichnet.**

**Höhe, Boden und Umgebung beeinflussen reale Antennen.**

**Antennengewinn entsteht durch Richtwirkung und nicht durch Erzeugung zusätzlicher Energie.**

**Jede praktische Antenne ist ein Kompromiss.**

---

# Selbstkontrolle

Versuche die Fragen zuerst ohne Nachschlagen zu beantworten.

1. Welche Aufgabe erfüllt eine Antenne beim Senden?
2. Welche Aufgabe erfüllt sie beim Empfang?
3. Was ist der grundlegende Unterschied zwischen Speiseleitung und Antenne?
4. Warum benötigt ein Antennensystem einen Rückstrompfad?
5. Wie lang ist ein klassischer Halbwellendipol ungefähr?
6. Wie lang ist ein Viertelwellenstrahler ungefähr?
7. Wo liegt beim Halbwellendipol das Strommaximum?
8. Wo befinden sich die Spannungsmaxima?
9. Was bezeichnet man als Speisepunkt?
10. Warum benötigt ein Viertelwellenstrahler ein Gegensystem?
11. Was bedeutet Resonanz einer Antenne?
12. Ist eine resonante Antenne automatisch auf 50 Ω angepasst?
13. Beweist ein SWR von 1:1 einen hohen Wirkungsgrad?
14. Was ist der Unterschied zwischen mechanischer und elektrischer Länge?
15. Welche Polarisation besitzt ein vertikaler Dipol grundsätzlich?
16. Warum kann sich die Resonanzfrequenz einer Antenne verändern, wenn sie näher an ein Gebäude gebracht wird?
17. Was bedeutet Antennengewinn?
18. Erzeugt eine passive Richtantenne zusätzliche elektrische Leistung?

## Antworten

1. Sie koppelt leitungsgebundene Hochfrequenzenergie in eine elektromagnetische Welle im freien Raum.
2. Sie koppelt Energie aus einer eintreffenden elektromagnetischen Welle in ein elektrisches HF-Signal.
3. Die Speiseleitung soll Energie möglichst verlustarm transportieren. Die Antenne soll sie gezielt abstrahlen beziehungsweise empfangen.
4. Weil elektrischer Strom einen geschlossenen Stromkreis benötigt.
5. \(\frac{\lambda}{2}\)
6. \(\frac{\lambda}{4}\)
7. In der Mitte.
8. An den Enden des Dipols.
9. Die Stelle, an der die HF-Energie der Antenne zugeführt beziehungsweise beim Empfang entnommen wird.
10. Weil der Viertelwellenstrahler nur einen Teil des vollständigen HF-Stromkreises bildet. Radiale oder eine leitende Fläche stellen den Rückstrompfad bereit.
11. Am betrachteten Speisepunkt gilt:

\[
X=0
\]

1. **Nein.**
2. **Nein.**
3. Die mechanische Länge ist die tatsächlich gemessene physische Länge. Die elektrische Länge beschreibt das Verhalten des Leiters im Verhältnis zur Wellenlänge.
4. Vertikale Polarisation.
5. Weil die Antenne elektromagnetisch mit ihrer Umgebung koppelt. Dadurch können Stromverteilung und Impedanz verändert werden.
6. Eine bevorzugte räumliche Verteilung der abgestrahlten beziehungsweise empfangenen Energie gegenüber einer Referenzantenne.
7. **Nein.** Sie verteilt die vorhandene Energie anders im Raum.

---

# Prüfungsbezug HB3 und HB9

Die aktuellen BAKOM-Prüfungsvorschriften führen ausdrücklich auf:

- Antennentypen
- Antenneneigenschaften
- Antennenzuleitungen
- Anpassung

Für HB3 und HB9 sind insbesondere wichtig:

- Zusammenhang zwischen Wellenlänge und Antennenabmessungen
- Halbwellendipol
- Viertelwellenstrahler
- Groundplane
- Speisepunkt
- Strom- und Spannungsverteilung
- Polarisation
- grundlegende Antenneneigenschaften

Ältere schweizerische Prüfungsunterlagen enthalten beispielsweise ausdrücklich Fragen zu:

- \(\lambda/4\)-Strahlerlänge einer Groundplane
- Strom- und Spannungsverteilung einer Viertelwellenantenne
- Spannungsmaximum an den Enden eines Halbwellendipols
- Speisepunktwiderstand verschiedener Dipolformen

Diese älteren Fragen sind keine aktuelle verbindliche Prüfungsgrundlage, zeigen aber typische technische Grundlagen, die weiterhin zum Antennenthema gehören.

Für HB9 sollte zusätzlich sicher verstanden werden:

- elektrische gegenüber mechanischer Länge
- Antennenimpedanz
- Resonanz als \(X=0\)
- Unterschied zwischen Resonanz, Anpassung und Wirkungsgrad
- Einfluss des Rückstrompfades
- Wirkung von Umgebung und Aufbau

Die detaillierten Antennenformen und Strahlungsdiagramme folgen in Kapitel 5.

Impedanz, Anpassung und SWR werden in Kapitel 6 vertieft.

Speiseleitungen folgen in Kapitel 7.

Der praktische Antennenbau wird in Kapitel 13 zusammengeführt.

# Navigation

[← Kapitel 3: Elektromagnetische Wellen](03-elektromagnetische-wellen.html)

[↑ Zurück zum Inhaltsverzeichnis](index.html)

[Kapitel 5: Antennenformen und Abstrahlung →](05-antennenformen.html)

---

*© 2026 Marcel Sauder. Alle Rechte vorbehalten. Vervielfältigung, Verbreitung oder Weitergabe, auch auszugsweise, nur mit ausdrücklicher schriftlicher Genehmigung.*
