# Kapitel 12: Messtechnik

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, weshalb ein Messgerät eine Schaltung beeinflussen kann
- Spannung, Strom und Widerstand korrekt messen können
- wissen, wie Volt- und Amperemeter angeschlossen werden
- Gleichspannung und Wechselspannung richtig unterscheiden
- Effektivwert, Spitzenwert und Spitze-Spitze-Wert auseinanderhalten können
- verstehen, weshalb die Signalform das Messergebnis beeinflussen kann
- ein Multimeter grundsätzlich richtig einsetzen können
- die Grundfunktion eines Oszilloskops erklären können
- Frequenz und Periodendauer mit einem Oszilloskop bestimmen können
- die Aufgabe eines Frequenzzählers erklären können
- HF-Leistung und PEP unterscheiden können
- SWR-Meter, Kunstantenne und HF-Wattmeter einordnen können
- die Grundfunktion eines Spektrumanalysators verstehen
- für HB9 einfache Messbereichserweiterungen und Messfehler berechnen können

> **Hinweis zu HB3 und HB9:**
> Das BAKOM verlangt für beide Ausbildungsstufen Kenntnisse der Messtechnik. Für HB3 sind die technischen und rechnerischen Fragen weniger komplex. Die Kennzeichnung **HB9-Vertiefung** dient in diesem Lehrwerk als Lernhilfe.

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
<td><span class="arithmatex">\(U\)</span></td>
<td>Spannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(I\)</span></td>
<td>Strom</td>
<td>A</td>
</tr>
<tr>
<td><span class="arithmatex">\(R\)</span></td>
<td>Widerstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(P\)</span></td>
<td>Leistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(f\)</span></td>
<td>Frequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(T\)</span></td>
<td>Periodendauer</td>
<td>s</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{eff}\)</span></td>
<td>Effektivspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(\hat U\)</span></td>
<td>Spitzenwert der Spannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{ss}\)</span></td>
<td>Spitze-Spitze-Spannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_i\)</span></td>
<td>Innenwiderstand eines Messsystems</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_V\)</span></td>
<td>Vorwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(R_S\)</span></td>
<td>Shuntwiderstand</td>
<td>Ω</td>
</tr>
<tr>
<td><span class="arithmatex">\(E_M\)</span></td>
<td>Empfindlichkeit eines Messsystems</td>
<td>Ω/V</td>
</tr>
<tr>
<td><span class="arithmatex">\(F_W\)</span></td>
<td>relativer maximaler Fehler</td>
<td>%</td>
</tr>
</tbody>
</table>

## Der rote Faden

Messen bedeutet nicht einfach:

**Messgerät anschliessen und Zahl ablesen.**

Eine richtige Messung besteht aus vier Schritten:

1. Was möchte ich messen?
2. Welches Messgerät eignet sich dafür?
3. Wie muss es angeschlossen werden?
4. Wie beeinflussen Messgerät und Signalform das Ergebnis?

Der wichtigste Grundsatz lautet:

> **Ein Messgerät ist selbst Teil der Schaltung und kann das Messergebnis beeinflussen.**

## Spannung messen

Eine Spannung besteht zwischen zwei Punkten.

Ein Voltmeter wird deshalb **parallel** zum Messobjekt angeschlossen.

Ein ideales Voltmeter würde überhaupt keinen Strom aufnehmen.

Ein reales Voltmeter besitzt einen endlichen Innenwiderstand. Dieser sollte möglichst gross sein.

Dadurch belastet das Messgerät die zu untersuchende Schaltung möglichst wenig.

### Merksatz

**Spannungsmesser parallel und möglichst hochohmig.**

## Strom messen

Ein Strom fliesst durch einen Stromkreis.

Ein Amperemeter muss deshalb so angeschlossen werden, dass der zu messende Strom durch das Messgerät fliesst.

Es wird **in Serie** in den Stromkreis eingeschleift.

Sein Innenwiderstand sollte möglichst klein sein.

### Merksatz

**Strommesser in Serie und möglichst niederohmig.**

## Warum ist ein Amperemeter parallel gefährlich?

Ein Strommesser besitzt einen sehr kleinen Innenwiderstand.

Wird er versehentlich direkt parallel an eine Spannungsquelle angeschlossen, entsteht nahezu ein Kurzschluss.

Die Folge können sein:

- ausgelöste Sicherung im Messgerät
- beschädigtes Messgerät
- beschädigte Schaltung
- sehr hoher Strom

Deshalb muss vor einer Strommessung besonders sorgfältig geprüft werden, in welcher Buchse die Messleitung steckt und welcher Messbereich eingestellt ist.

## Widerstand messen

Ein Widerstandsmessgerät verwendet eine interne Messspannung beziehungsweise einen Messstrom.

Deshalb gilt:

> **Widerstände werden grundsätzlich in spannungsfreien Schaltungen gemessen.**

Ist die Schaltung unter Spannung, kann das Messergebnis falsch sein oder das Messgerät beschädigt werden.

Andere angeschlossene Bauteile können den Messwert ebenfalls beeinflussen.

Für eine genaue Messung muss deshalb unter Umständen ein Anschluss des Bauteils aus der Schaltung getrennt werden.

## Das Multimeter

Ein Multimeter kombiniert mehrere Messfunktionen.

Typischerweise können gemessen werden:

- Gleichspannung
- Wechselspannung
- Gleichstrom
- Wechselstrom
- Widerstand

Viele Geräte bieten zusätzlich:

- Durchgangsprüfung
- Diodentest
- Kapazität
- Frequenz
- Temperatur

Für den Amateurfunk ist ein gutes Digitalmultimeter eines der wichtigsten Messgeräte.

## Automatische und manuelle Messbereichswahl

Moderne Digitalmultimeter besitzen häufig eine automatische Messbereichswahl.

Bei manueller Messbereichswahl gilt:

Ist der zu erwartende Wert unbekannt, beginnt man mit einem ausreichend grossen Messbereich und schaltet anschliessend auf kleinere Bereiche um.

## Gleichspannung und Wechselspannung

Vor der Messung muss geklärt werden, welche Signalart vorliegt.

Bei Gleichspannung, **DC**, bleibt die Polarität grundsätzlich konstant.

Bei Wechselspannung, **AC**, ändert sich die Polarität periodisch.

Ein falsch eingestellter Messmodus kann zu einem falschen oder unbrauchbaren Ergebnis führen.

## Effektivwert und Spitze-Spitze-Wert

Effektivwert, Spitzenwert und Spitze-Spitze-Wert werden bereits in [Kapitel 1](01-elektrische-grundlagen.md) hergeleitet.

Für die Messtechnik zählt vor allem:

\[
\hat U \approx 1{,}414 \cdot U_\mathrm{eff}
\]

\[
U_\mathrm{ss} = 2 \cdot \hat U
\]

## Drei Spannungsangaben, die man nicht verwechseln darf

<table>
<thead>
<tr>
<th>Angabe</th>
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
<td>Spitzenwert gegenüber Null</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_\mathrm{ss}\)</span></td>
<td>Abstand zwischen negativem und positivem Spitzenwert</td>
</tr>
</tbody>
</table>

Ein Oszilloskop zeigt den Spannungsverlauf und damit beispielsweise direkt \(U_\mathrm{ss}\).

Ein Multimeter zeigt bei Wechselspannung typischerweise einen Effektivwert oder einen daraus berechneten Wert an.

## Die Signalform beeinflusst die Messung

Die Beziehung:

\[
\hat U = U_\mathrm{eff} \cdot \sqrt{2}
\]

gilt nur für eine **Sinusschwingung**.

Ein Rechtecksignal oder ein stark verzerrtes Signal besitzt ein anderes Verhältnis zwischen Spitzenwert und Effektivwert.

Deshalb kann ein Messgerät bei nicht sinusförmigen Signalen falsche Werte anzeigen, wenn es intern von einer Sinusform ausgeht.

## True RMS

Ein True-RMS-Multimeter kann den Effektivwert auch bei vielen nicht sinusförmigen Signalen korrekt bestimmen.

Das gilt jedoch nur innerhalb der Gerätespezifikationen, beispielsweise bezüglich:

- Frequenz
- Signalhöhe
- Scheitelfaktor

Auch ein True-RMS-Messgerät kann deshalb nicht jedes beliebige Signal korrekt messen.

## Das Messgerät beeinflusst die Schaltung

Wird ein Voltmeter an eine hochohmige Schaltung angeschlossen, liegt sein Innenwiderstand parallel zur Schaltung.

Ist dieser Innenwiderstand nicht ausreichend gross, verändert das Messgerät die zu untersuchende Schaltung.

Das Messergebnis entspricht dann nicht mehr exakt dem Zustand ohne Messgerät.

Man spricht von einer **Belastung der Schaltung durch das Messgerät**.

## Auflösung und Genauigkeit

Ein Digitalmultimeter kann beispielsweise anzeigen:

\[
12{,}345\ \mathrm{V}
\]

Das bedeutet nicht automatisch, dass die tatsächliche Spannung auf 1 mV genau bekannt ist.

**Auflösung** beschreibt, wie fein ein Gerät anzeigen kann.

**Genauigkeit** beschreibt, wie nahe die Anzeige am tatsächlichen Wert liegt.

Diese beiden Begriffe dürfen nicht verwechselt werden.

## Analoge Messinstrumente

Ein klassisches Drehspulinstrument benötigt einen kleinen Strom für den Zeigerausschlag.

Die Empfindlichkeit kann in:

\[
\Omega/\mathrm{V}
\]

angegeben werden.

Es gilt:

\[
E_M = \frac{R_i}{U_i} = \frac{1}{I_i}
\]

Dabei gilt:

- \(R_i\) = Innenwiderstand
- \(U_i\) = Spannung bei Vollausschlag
- \(I_i\) = Strom bei Vollausschlag

## HB9-Vertiefung: Spannungsmessbereich erweitern

Der Messbereich eines Spannungsmessers kann mit einem **Vorwiderstand** erweitert werden.

Es gilt:

\[
R_V = \frac{U-U_M}{I_M}
\]

beziehungsweise:

\[
R_V = (n-1) \cdot R_M
\]

Der zusätzliche Widerstand begrenzt den Strom durch das Messwerk.

## HB9-Vertiefung: Strommessbereich erweitern

Für grössere Ströme wird ein niederohmiger Widerstand parallel zum Messwerk geschaltet.

Dieser Widerstand wird **Shunt** genannt.

Es gilt:

\[
R_S = \frac{R_M \cdot I_M}{I-I_M}
\]

beziehungsweise:

\[
R_S = \frac{R_M}{n-1}
\]

Ein grosser Teil des Stromes fliesst dadurch am Messwerk vorbei.

## Messfehler

Kein Messgerät zeigt einen mathematisch vollkommen exakten Wert an.

Ursachen können sein:

- Genauigkeit
- Auflösung
- Kalibrierung
- Temperatur
- Alterung
- Messbereich
- Belastung der Schaltung
- Signalform
- Frequenzbereich des Messgerätes

Ein Messwert darf deshalb nie genauer interpretiert werden, als es das verwendete Messgerät erlaubt.

## Das Oszilloskop

Ein Oszilloskop zeigt eine elektrische Spannung als Funktion der Zeit.

Die horizontale Achse zeigt normalerweise die **Zeit**.

Die vertikale Achse zeigt die **Spannung**.

Damit kann nicht nur ein Zahlenwert gemessen, sondern die tatsächliche Signalform betrachtet werden.

## Was kann man mit einem Oszilloskop erkennen?

Beispielsweise:

- Sinusform
- Rechtecksignal
- Verzerrungen
- Gleichspannungsanteil
- Amplitude
- Spitze-Spitze-Spannung
- Periodendauer
- Frequenz
- Pulsbreite
- Phasenunterschiede

## Volt pro Division

Die vertikale Skalierung wird häufig angegeben als:

**V/div**

Beispielsweise:

\[
2\ \mathrm{V/div}
\]

Beträgt ein Signal vom positiven bis zum negativen Spitzenwert vier Rasterteilungen:

\[
U_\mathrm{ss} = 4 \cdot 2\ \mathrm{V}
\]

\[
U_\mathrm{ss} = 8\ \mathrm{V}
\]

## Zeit pro Division

Die horizontale Skalierung wird beispielsweise angegeben als:

- s/div
- ms/div
- µs/div

Damit lässt sich die Periodendauer bestimmen.

## Beispiel Frequenzmessung mit dem Oszilloskop

Eine vollständige Periode benötigt vier Rasterteilungen.

Die Zeitbasis beträgt:

\[
5\ \mathrm{\mu s/div}
\]

Dann:

\[
T = 4 \cdot 5\ \mathrm{\mu s}
\]

\[
T = 20\ \mathrm{\mu s}
\]

Mit:

\[
f = \frac{1}{T}
\]

ergibt sich:

\[
f = \frac{1}{20 \times 10^{-6}}
\]

\[
f = 50\ \mathrm{kHz}
\]

## Triggerung

Damit ein periodisches Signal auf dem Bildschirm stillsteht, muss das Oszilloskop die Darstellung immer an einem definierten Punkt des Signals beginnen.

Diese Funktion nennt man **Triggerung**.

Ohne geeignete Triggerung kann die Kurve über den Bildschirm laufen oder instabil erscheinen.

## Tastköpfe

Ein Oszilloskop wird meistens über einen Tastkopf mit der Schaltung verbunden.

Häufig verwendet werden:

- 1:1-Tastkopf
- 10:1-Tastkopf

Ein 10:1-Tastkopf schwächt die Messspannung um den Faktor 10 ab.

Er belastet die Schaltung typischerweise weniger und ermöglicht häufig einen grösseren nutzbaren Frequenzbereich.

Die Einstellung des Oszilloskops muss zum verwendeten Tastkopf passen.

## Bandbreite des Oszilloskops

Ein Oszilloskop kann nicht beliebig hohe Frequenzen korrekt darstellen.

Auch Tastkopf und Messaufbau müssen zum verwendeten Frequenzbereich passen.

Besonders bei Hochfrequenz werden selbst Messleitungen elektrisch relevant.

## Masseleitung und HF

Lange Masseleitungen besitzen unter anderem:

- Induktivität
- Kapazität
- Kopplung zu anderen Leitungen

Dadurch können Messungen verfälscht werden.

Für HF-Messungen gilt deshalb:

> **Messverbindungen so kurz und geeignet wie möglich ausführen.**

## Frequenzzähler

Ein Frequenzzähler bestimmt die Frequenz eines Signals mithilfe einer definierten Zeitbasis.

Typische Anwendungen sind:

- Oszillatoren prüfen
- Sendefrequenzen kontrollieren
- Quarzoszillatoren messen
- Signalgeneratoren überprüfen

Die Genauigkeit hängt wesentlich von der internen Zeitbasis des Gerätes ab.

## Signalgenerator

Ein Signalgenerator erzeugt ein definiertes elektrisches Signal.

Je nach Gerät können eingestellt werden:

- Frequenz
- Amplitude
- Signalform
- Modulation

In der Funktechnik wird ein HF-Signalgenerator beispielsweise verwendet, um Empfänger, Filter oder Signalwege zu prüfen.

## HF-Wattmeter

Ein HF-Wattmeter misst Hochfrequenzleistung.

Es kann beispielsweise zwischen Sender und Speiseleitung beziehungsweise Kunstantenne geschaltet werden.

Je nach Gerät können gemessen werden:

- hinlaufende Leistung
- rücklaufende Leistung
- mittlere Leistung
- Spitzenleistung

Dabei muss bekannt sein, welche Leistungsart das verwendete Messgerät tatsächlich anzeigt.

## PEP

PEP bedeutet:

**Peak Envelope Power**

oder Spitzen-Hüllkurvenleistung.

PEP ist besonders bei modulierten Signalen wie SSB wichtig.

Sie darf nicht mit der über längere Zeit gemittelten Sendeleistung verwechselt werden.

## SWR-Meter

Ein SWR-Meter beziehungsweise eine SWR-Brücke unterscheidet zwischen:

- hinlaufender Welle
- rücklaufender Welle

Daraus kann das Stehwellenverhältnis bestimmt werden.

Die Grundlagen dazu wurden in Kapitel 6 behandelt.

## Richtkoppler

Viele HF-Wattmeter und SWR-Meter verwenden einen **Richtkoppler**.

Dieser kann Energie unterscheiden, die:

- zur Antenne läuft
- von der Antenne zurückläuft

Damit lassen sich Vorwärts- und Rücklaufleistung getrennt messen.

## Kunstantenne

Eine **Kunstantenne**, auch Dummy Load genannt, ersetzt bei Messungen die reale Antenne.

Eine typische Amateurfunk-Kunstantenne besitzt:

\[
50\ \Omega
\]

Sie soll die zugeführte HF-Leistung möglichst vollständig in Wärme umwandeln und dabei möglichst wenig abstrahlen.

## Warum eine Kunstantenne verwenden?

Damit kann ein Sender geprüft werden, ohne:

- unnötig ein Funksignal auszustrahlen
- andere Funkstationen zu stören
- von einer unbekannten Antennenimpedanz beeinflusst zu werden

Die Kunstantenne muss für Frequenz, Leistung und Einschaltdauer geeignet sein.

Ein einfacher 50-Ω-Widerstand ist nicht automatisch eine gute HF-Kunstantenne.

## Spektrumanalysator

Ein Oszilloskop zeigt hauptsächlich:

**Spannung über der Zeit**

Ein Spektrumanalysator zeigt dagegen:

**Signalstärke über der Frequenz**

Damit lässt sich erkennen, welche Frequenzen in einem Signal vorhanden sind.

## Was sieht man mit einem Spektrumanalysator?

Beispielsweise:

- Träger
- Seitenbänder
- Oberwellen
- Nebenaussendungen
- Rauschen
- unerwünschte Mischprodukte

Der Spektrumanalysator ist deshalb besonders wichtig bei Senderprüfungen und EMV-Untersuchungen.

## Zeitbereich und Frequenzbereich

| Gerät | Darstellung |
| --- | --- |
| Oszilloskop | Spannung über Zeit |
| Spektrumanalysator | Amplitude beziehungsweise Leistung über Frequenz |

Beide Darstellungen zeigen unterschiedliche Seiten desselben Signals.

## Antennenanalysator

Ein Antennenanalysator ist ein für Antennen und HF-Netzwerke spezialisiertes Messgerät.

Je nach Gerät kann er anzeigen:

- SWR
- \(R\)
- \(X\)
- Impedanz
- Resonanzfrequenz
- Verlauf über einen Frequenzbereich

Damit lässt sich wesentlich mehr erkennen als mit einem einfachen SWR-Meter.

## Vektornetzwerkanalysator

Ein Vektornetzwerkanalysator, kurz **VNA**, untersucht das Verhalten eines HF-Netzwerks über einen Frequenzbereich.

Damit können beispielsweise untersucht werden:

- Antennen
- Filter
- Koaxialleitungen
- Anpassnetzwerke
- Übertrager

Für die HB3/HB9-Ausbildung steht das grundlegende Messprinzip im Vordergrund und nicht die Bedienung eines bestimmten Gerätemodells.

## Messaufbau

Ein Messergebnis hängt nicht nur vom Messgerät ab.

Auch der gesamte Messaufbau kann das Ergebnis verändern.

Dazu gehören beispielsweise:

- Kabel
- Tastköpfe
- Adapter
- Abschlüsse
- Leitungslängen
- Masseverbindungen
- Impedanzen
- Frequenzbereich

Besonders in der HF-Technik ist deshalb der **Messaufbau selbst Teil der Messung**.

## 50-Ω-Messsysteme

Viele HF-Messgeräte besitzen Ein- und Ausgänge mit:

\[
50\ \Omega
\]

Wird ein Signal für einen 50-Ω-Abschluss spezifiziert, kann die gemessene Spannung bei einem hochohmigen Abschluss anders sein.

Deshalb muss bei HF-Messungen immer geklärt werden, auf welche Abschlussimpedanz sich eine angegebene Spannung oder Leistung bezieht.

## Kalibrierung und Justierung

Bei einer **Kalibrierung** wird ein Messgerät mit einer bekannten Referenz verglichen.

Dabei wird festgestellt, wie gross die Messabweichung ist.

Eine gegebenenfalls anschliessende Veränderung des Gerätes, damit es wieder korrekt anzeigt, wird als **Justierung** bezeichnet.

Kalibrierung und Justierung sind deshalb nicht dasselbe.

## Häufige Messfehler in der Praxis

Typische Fehler sind:

- falscher Messbereich
- AC statt DC eingestellt
- falsche Messbuchse
- Strommesser parallel angeschlossen
- Widerstand in einer eingeschalteten Schaltung gemessen
- falscher Tastkopffaktor
- Signal ausserhalb der Bandbreite des Messgerätes
- falsche Abschlussimpedanz
- zu lange HF-Messleitungen
- Effektivwert und Spitzenwert verwechselt
- Anzeigeauflösung mit Genauigkeit verwechselt

## Lernschema

Bei einer Messaufgabe gehe in dieser Reihenfolge vor:

1. Welche Grösse soll gemessen werden?
2. Gleichspannung, Wechselspannung oder HF?
3. Welches Messgerät ist geeignet?
4. Parallel oder in Serie anschliessen?
5. Welcher Messbereich wird benötigt?
6. Welche Signalform liegt vor?
7. Wird Effektivwert, Spitzenwert oder PEP verlangt?
8. Beeinflusst das Messgerät die Schaltung?
9. Ist der Frequenzbereich des Messgerätes ausreichend?
10. Ist die angezeigte Genauigkeit plausibel?

## Die wichtigsten Zusammenhänge auf einen Blick

Für sinusförmige Wechselspannung:

\[
\hat U = U_\mathrm{eff} \cdot \sqrt{2}
\]

\[
U_\mathrm{ss} = 2 \cdot \hat U
\]

Periodendauer und Frequenz:

\[
f = \frac{1}{T}
\]

Messsystem:

\[
E_M = \frac{R_i}{U_i} = \frac{1}{I_i}
\]

Spannungsmessbereich:

\[
R_V = \frac{U-U_M}{I_M}
\]

Strommessbereich:

\[
R_S = \frac{R_M \cdot I_M}{I-I_M}
\]

## Merksätze

**Ein Spannungsmesser wird parallel angeschlossen und soll möglichst hochohmig sein.**

**Ein Strommesser wird in Serie angeschlossen und soll möglichst niederohmig sein.**

**Ein Widerstand wird grundsätzlich in einer spannungsfreien Schaltung gemessen.**

**Ein Messgerät beeinflusst immer in einem gewissen Mass das Messobjekt.**

**Effektivwert, Spitzenwert und Spitze-Spitze-Wert sind nicht dasselbe.**

**Die Beziehung \(\hat U = U_\mathrm{eff}\sqrt{2}\) gilt für sinusförmige Signale.**

**Die Signalform kann das Messergebnis wesentlich beeinflussen.**

**Ein Oszilloskop zeigt ein Signal hauptsächlich im Zeitbereich.**

**Ein Spektrumanalysator zeigt ein Signal im Frequenzbereich.**

**Ein Frequenzzähler benötigt eine genaue Zeitbasis.**

**PEP ist nicht dasselbe wie die über längere Zeit gemittelte Leistung.**

**Eine Kunstantenne ermöglicht Senderprüfungen ohne beabsichtigte Abstrahlung.**

**Auflösung und Genauigkeit eines Messgerätes sind nicht dasselbe.**

## Selbstkontrolle

1. Wie wird ein Voltmeter angeschlossen?
2. Soll sein Innenwiderstand gross oder klein sein?
3. Wie wird ein Amperemeter angeschlossen?
4. Warum darf ein Widerstand normalerweise nicht in einer unter Spannung stehenden Schaltung gemessen werden?
5. Ein Sinussignal besitzt:

\[
U_\mathrm{eff}=10\ \mathrm{V}
\]

Wie gross ist der Spitzenwert?

1. Wie gross ist die Spitze-Spitze-Spannung desselben Signals?
2. Warum kann ein einfaches AC-Multimeter bei einem Rechtecksignal falsch anzeigen?
3. Was zeigt ein Oszilloskop auf der horizontalen Achse?
4. Welche Grösse kann aus der Periodendauer berechnet werden?
5. Was ist der wichtigste Unterschied zwischen Oszilloskop und Spektrumanalysator?
6. Wozu dient eine Kunstantenne?
7. Was bedeutet PEP?
8. Wird ein Shunt bei einer Messbereichserweiterung eines Strommessers seriell oder parallel zum Messwerk geschaltet?

### Antworten

1. Parallel zum Messobjekt.
2. Möglichst gross.
3. In Serie mit dem zu messenden Stromkreis.
4. Weil das Widerstandsmessgerät selbst eine Messspannung beziehungsweise einen Messstrom verwendet und eine fremde Spannung das Ergebnis verfälschen oder das Gerät beschädigen kann.
5. \(\hat U = 10 \cdot 1{,}414 = 14{,}14\ \mathrm{V}\)
6. \(U_\mathrm{ss} = 2 \cdot 14{,}14 = 28{,}28\ \mathrm{V}\)
7. Weil die einfache Umrechnung zwischen Spitzenwert und Effektivwert von der Signalform abhängt.
8. Die Zeit.
9. Die Frequenz:

\[
f = \frac{1}{T}
\]

1. Das Oszilloskop zeigt hauptsächlich den Zeitverlauf, der Spektrumanalysator die Frequenzbestandteile.
2. Sie stellt einen definierten HF-Abschluss dar und ermöglicht Senderprüfungen ohne beabsichtigte Funkabstrahlung.
3. Peak Envelope Power beziehungsweise Spitzen-Hüllkurvenleistung.
4. Parallel.

## Prüfungsbezug HB3 und HB9

Das BAKOM nennt für die Messtechnik insbesondere:

- Messaufbau
- Einfluss von Signalformen auf die Messung
- Messgeräte

Für HB3 und HB9 sind insbesondere wichtig:

- Spannungsmessung
- Strommessung
- Widerstandsmessung
- Innenwiderstand von Messgeräten
- Effektivwert und Spitzenwert
- Einfluss der Signalform
- Multimeter
- Oszilloskop
- Frequenzmessung
- HF-Leistungsmessung
- SWR-Messung
- geeigneter Messaufbau

Für HB9 kommen vertieftere Berechnungen hinzu, beispielsweise:

- Empfindlichkeit von Messsystemen
- Messbereichserweiterung von Spannungsmessern
- Messbereichserweiterung von Strommessern
- Messfehler

## Navigation

[← Kapitel 11: Elektronische Bauteile und Schaltungen](11-elektronische-bauteile-schaltungen.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 13: Praktischer Antennenbau →](13-praktischer-antennenbau.md)

---

*© 2026 Marcel Sauder. Alle Rechte vorbehalten. Vervielfältigung, Verbreitung oder Weitergabe, auch auszugsweise, nur mit ausdrücklicher schriftlicher Genehmigung.*
