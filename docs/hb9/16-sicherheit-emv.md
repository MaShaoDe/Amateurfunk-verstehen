# Kapitel 16: Sicherheit und EMV

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, was elektromagnetische Verträglichkeit bedeutet
- typische Ursachen von Funkstörungen erkennen können
- zwischen Störquelle, Übertragungsweg und gestörtem Gerät unterscheiden können
- Oberwellen, Übersteuerung, Splatter und unerwünschte HF-Einkopplung grundsätzlich erklären können
- geeignete Massnahmen gegen Funkstörungen auswählen können
- die wichtigsten Gefahren elektrischer Spannungen kennen
- Schutzleiter und Neutralleiter unterscheiden können
- verstehen, weshalb Sicherungen und Fehlerstrom-Schutzeinrichtungen unterschiedliche Aufgaben besitzen
- die Gefahren gespeicherter Energie in Kondensatoren und Akkumulatoren kennen
- nichtionisierende Strahlung von ionisierender Strahlung unterscheiden können
- ERP, EIRP und elektrische Feldstärke im Sicherheitskontext einordnen können
- verstehen, weshalb Abstand zur Antenne eine wichtige Schutzmassnahme ist
- die Grundprinzipien des Blitz- und Überspannungsschutzes kennen
- die wichtigsten mechanischen Sicherheitsregeln beim Antennenbau anwenden können

> **Hinweis zu HB3 und HB9:**
> Das BAKOM führt Störungen und Störschutz, Schutz gegen elektrische Spannungen, Personenschutz, Schutz vor nichtionisierender Strahlung und Blitzschutz ausdrücklich als Prüfungsstoff auf. Für HB3 sind die technischen und rechnerischen Fragen weniger komplex. Die Kennzeichnung **HB9-Vertiefung** dient in diesem Lehrwerk als Lernhilfe.

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
<td><span class="arithmatex">\(E\)</span></td>
<td>elektrische Feldstärke</td>
<td>V/m</td>
</tr>
<tr>
<td><span class="arithmatex">\(H\)</span></td>
<td>magnetische Feldstärke</td>
<td>A/m</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_S\)</span></td>
<td>Senderleistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_A\)</span></td>
<td>Leistung an der Antenne</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_\mathrm{ERP}\)</span></td>
<td>effektive Strahlungsleistung bezogen auf einen Halbwellendipol</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_\mathrm{EIRP}\)</span></td>
<td>effektive isotrope Strahlungsleistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(G_i\)</span></td>
<td>Antennengewinnfaktor bezogen auf den Isotropstrahler</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(g_d\)</span></td>
<td>Antennengewinn bezogen auf einen Halbwellendipol</td>
<td>dB</td>
</tr>
<tr>
<td><span class="arithmatex">\(a\)</span></td>
<td>Leitungs- beziehungsweise Kabelverlust</td>
<td>dB</td>
</tr>
<tr>
<td><span class="arithmatex">\(d\)</span></td>
<td>Abstand zur Antenne</td>
<td>m</td>
</tr>
<tr>
<td><span class="arithmatex">\(\lambda\)</span></td>
<td>Wellenlänge</td>
<td>m</td>
</tr>
</tbody>
</table>

## Der rote Faden

Sicherheit im Amateurfunk besteht nicht aus einem einzigen Thema.

Wir betrachten vier grosse Bereiche:

**EMV**

→ unsere Funkanlage soll andere Geräte nicht unnötig stören und selbst möglichst störfest sein

**elektrische Sicherheit**

→ gefährliche Spannungen, Ströme und gespeicherte Energie beherrschen

**NIS**

→ Personen vor zu hohen elektromagnetischen Feldern schützen

**Blitz- und Überspannungsschutz**

→ Antennenanlage und Gebäude gegen extreme elektrische Ereignisse schützen

Dazu kommt beim praktischen Antennenbau die:

**mechanische Sicherheit**

Der wichtigste Grundsatz lautet:

> **Eine technisch funktionierende Funkanlage ist erst dann eine gute Funkanlage, wenn sie auch sicher und störungsarm betrieben werden kann.**

# Teil 1: Elektromagnetische Verträglichkeit

## Was bedeutet EMV?

EMV bedeutet:

**Elektromagnetische Verträglichkeit**

Ein elektrisches oder elektronisches Gerät soll:

- seine elektromagnetische Umgebung nicht unzulässig stören
- in seiner vorgesehenen elektromagnetischen Umgebung zuverlässig funktionieren

EMV hat damit immer zwei Seiten:

**Emission**

Wie viele Störungen erzeugt das Gerät?

**Störfestigkeit**

Wie empfindlich reagiert das Gerät auf fremde Störungen?

## Amateurfunk und EMV

Eine Amateurfunkstation erzeugt absichtlich Hochfrequenzenergie.

Diese soll:

**vom Sender über die Speiseleitung zur Antenne**

und von dort:

**als gewünschtes Funksignal in den Raum**

gelangen.

Problematisch wird es, wenn HF-Energie stattdessen beispielsweise in:

- Audiogeräte
- Computer
- Netzteile
- Steuerleitungen
- Sensorleitungen
- Telefonanlagen
- andere Funkempfänger

einkoppelt.

Umgekehrt können elektronische Geräte starke Störungen im Amateurfunkempfänger erzeugen.

EMV ist deshalb keine Einbahnstrasse.

## Die drei Teile eines Störproblems

Ein EMV-Problem lässt sich fast immer in drei Teile zerlegen:

1. **Störquelle**
2. **Kopplungsweg**
3. **Störsenke**

### Störquelle

Das Gerät, welches die unerwünschte elektromagnetische Energie erzeugt.

### Kopplungsweg

Der Weg, auf dem die Störung übertragen wird.

### Störsenke

Das Gerät oder die Schaltung, welche durch die Störung beeinflusst wird.

Dieses Modell ist für die Fehlersuche besonders hilfreich.

## Beispiel

Ein Amateurfunksender verursacht Sprache in einem aktiven Lautsprechersystem.

Mögliche Analyse:

**Störquelle**

→ Amateurfunksender

**Kopplungsweg**

→ Lautsprecher-, Netz- oder Audiokabel

**Störsenke**

→ Eingangsschaltung beziehungsweise Verstärker des Lautsprechersystems

Die Lösung muss nicht zwingend nur am Sender erfolgen.

Man kann versuchen, die Störung:

- an der Quelle zu vermindern
- auf dem Kopplungsweg zu blockieren
- am gestörten Gerät zu unterdrücken

## Leitungsgebundene und gestrahlte Störungen

Eine Störung kann grundsätzlich auf zwei Wegen übertragen werden.

### Leitungsgebunden

Die unerwünschte Energie gelangt über:

- Netzleitungen
- Signalleitungen
- Koaxialleitungen
- USB-Kabel
- Lautsprecherleitungen

von einem Gerät zum anderen.

### Gestrahlt

Die elektromagnetische Energie gelangt direkt durch den Raum zum gestörten Gerät oder zu dessen Leitungen.

In der Praxis können beide Mechanismen gleichzeitig auftreten.

## Leitungen können zu Antennen werden

Ein Kabel, das ursprünglich nur ein Niederfrequenzsignal übertragen soll, kann bei Hochfrequenz trotzdem als Antenne wirken.

Dazu gehören beispielsweise:

- Lautsprecherkabel
- USB-Leitungen
- Netzkabel
- Sensorkabel
- Audiokabel

Trifft genügend HF auf eine solche Leitung, kann sie die Energie in das angeschlossene Gerät führen.

## Gleichrichtung unerwünschter HF

Halbleiterbauteile und sogar schlechte elektrische Kontakte besitzen nichtlineare Eigenschaften.

Dadurch kann eingekoppelte Hochfrequenz unbeabsichtigt:

**gleichgerichtet beziehungsweise demoduliert**

werden.

Ein typisches Beispiel:

Eine SSB-Aussendung wird plötzlich aus einem Audiogerät hörbar, obwohl dieses gar kein Funkempfänger ist.

Die HF gelangt in die Eingangsschaltung und wird dort durch eine nichtlineare Halbleiterstrecke demoduliert.

## Nicht jede Störung bedeutet einen fehlerhaften Sender

Wenn die Aussendung eines Amateurfunksenders in einem anderen Gerät hörbar wird, gibt es mindestens zwei grundsätzlich verschiedene Möglichkeiten:

### Möglichkeit 1

Der Sender erzeugt tatsächlich unerwünschte Aussendungen.

### Möglichkeit 2

Der Sender arbeitet sauber, aber das gestörte Gerät besitzt ungenügende HF-Störfestigkeit.

Deshalb darf die Ursache nicht allein daraus abgeleitet werden, dass eine Störung immer dann auftritt, wenn der Amateurfunksender sendet.

Zuerst muss technisch untersucht werden.

## Oberwellen

Was Oberwellen sind und wie sie entstehen, wurde bereits in [Kapitel 9](09-sender-empfaenger.md#oberwellen) gezeigt.

Für die EMV-Betrachtung zählt vor allem: Unerwünschte Oberwellen können andere Funkdienste beziehungsweise andere Amateurfunkbereiche stören.

## Warum entstehen Oberwellen?

Eine vollkommen reine Sinusschwingung enthält nur eine Frequenz.

Wird ein Signal verzerrt, entstehen zusätzliche Frequenzanteile.

Ursachen können sein:

- nichtlineare Verstärkung
- Übersteuerung
- ungeeigneter Arbeitspunkt
- schlechte Filterung
- Defekt einer Senderstufe

Sender enthalten deshalb Filter, um unerwünschte Oberwellen ausreichend zu unterdrücken.

## Tiefpassfilter am Senderausgang

Ein Tiefpass lässt Frequenzen unterhalb seiner Grenzfrequenz passieren und dämpft höhere Frequenzen.

Am Ausgang eines Senders kann ein geeignetes Tiefpassfilter deshalb:

- die gewünschte Grundfrequenz passieren lassen
- höhere Oberwellen stärker unterdrücken

Ein Filter kann jedoch keine Übersteuerung innerhalb des eigentlichen Sendesignals reparieren.

Die Ursache muss immer passend zur Störungsart behoben werden.

## Splatter

Bei SSB kann eine zu starke Aussteuerung des Senders zu unerwünscht breiten Aussendungen führen.

Diese werden häufig als:

**Splatter**

bezeichnet.

Mögliche Ursachen sind:

- zu hoher Mikrofonpegel
- übersteuerte Verstärkerstufen
- falsche ALC-Einstellung
- übersteuerter externer Audioverstärker

Die richtige Massnahme lautet hier nicht:

**mehr Ausgangsfilter**

sondern zunächst:

**Übersteuerung beseitigen.**

## ALC

ALC (Automatic Level Control, siehe [Kapitel 9](09-sender-empfaenger.md#alc)) begrenzt die Aussteuerung innerhalb eines vorgesehenen Bereichs.

Wird eine Senderstufe trotzdem massiv übersteuert, kann ein unsauberes und unnötig breites Signal entstehen.

Für ein sauberes SSB-Signal gilt deshalb:

> **Mikrofonverstärkung und weitere Audiostufen nicht unnötig hoch einstellen.**

## Intermodulation

Treffen mehrere starke Signale auf ein nichtlineares Bauteil, können neue Frequenzen entstehen.

Dies bezeichnet man als:

**Intermodulation**

Die neuen Frequenzen sind Kombinationen der ursprünglichen Frequenzen.

Intermodulation kann entstehen:

- im Empfänger
- im Sender
- in Verstärkern
- an korrodierten Metallkontakten
- an nichtlinearen Halbleiterübergängen

## Übersteuerung eines Empfängers

Ein sehr starkes Signal kann eine Eingangsstufe oder einen Mischer übersteuern.

Dann entstehen scheinbar Signale auf Frequenzen, auf denen tatsächlich kein Sender arbeitet.

Der Fehler liegt in diesem Fall im:

**Empfangssystem**

und nicht zwingend beim fremden Sender.

Abhilfe kann beispielsweise sein:

- Abschwächer
- Vorfilter
- Bandpassfilter
- besserer Empfänger
- grössere räumliche Trennung

## Blocking

Ein extrem starkes Signal kann die Funktion eines Empfängers beeinträchtigen, obwohl es ausserhalb der eingestellten Frequenz liegt.

Der Empfänger wird teilweise oder vollständig zugeregelt beziehungsweise übersteuert.

Diese Erscheinung wird als:

**Blocking**

bezeichnet.

Gute Empfänger unterscheiden sich unter anderem darin, wie gut sie mit sehr starken Nachbarsignalen umgehen können.

## Störungen aus Schaltnetzteilen

Schaltnetzteile arbeiten mit schnellen Schaltvorgängen.

Diese erzeugen ein breites Frequenzspektrum.

Bei schlechter Konstruktion oder ungenügender Filterung können Störungen entstehen über:

- Netzkabel
- Ausgangskabel
- Gehäuse
- direkte Abstrahlung

Typische Störquellen im Empfang können ausserdem sein:

- LED-Netzteile
- Ladegeräte
- Computer
- Monitore
- Solarladeregler
- Wechselrichter
- Powerline-Systeme
- schlecht entstörte Motorsteuerungen

## Störquelle finden

Eine sinnvolle Fehlersuche beginnt systematisch.

Beispielsweise:

1. Störung beobachten.
2. Frequenzbereich feststellen.
3. Geräte im eigenen Haushalt einzeln ausschalten.
4. Stromkreise wenn möglich systematisch eingrenzen.
5. Kabel und Netzteile untersuchen.
6. tragbaren Empfänger oder geeignete Messmittel einsetzen.
7. erst danach gezielte Gegenmassnahmen treffen.

Nicht jedes Geräusch im Empfänger kommt vom Nachbarn.

## Ferrite

Ferritmaterial kann hochfrequente Gleichtaktströme auf Leitungen dämpfen.

Beispiele:

- Klappferrit
- Ferritring
- Ferritperlen

Eine Leitung kann mehrmals durch einen Ferritkern geführt werden.

Dadurch kann die wirksame HF-Impedanz erhöht werden.

Wichtig:

> **Ferritmaterialien besitzen frequenzabhängige Eigenschaften.**

Ein beliebiger Ferrit ist deshalb nicht auf jedem Amateurfunkband gleich wirksam.

## Mantelwellen

Aus Kapitel 7 und 13 kennen wir unerwünschte HF-Ströme auf der Aussenseite eines Koaxialkabels.

Diese können:

- HF in den Funkraum bringen
- Geräte beeinflussen
- Störungen verursachen
- die Antenne verändern

Eine geeignete Mantelwellensperre kann deshalb zugleich eine Antennen- und eine EMV-Massnahme sein.

## Abschirmung

Ein leitfähiges Gehäuse kann elektrische beziehungsweise elektromagnetische Felder abschirmen.

Damit die Abschirmung wirksam bleibt, müssen auch:

- Kabeldurchführungen
- Steckverbinder
- Lüftungsöffnungen
- Gehäuseübergänge

berücksichtigt werden.

Ein perfekt abgeschirmtes Metallgehäuse mit einer ungeschützten zwei Meter langen Leitung kann trotzdem HF in die Schaltung hineinführen.

## Filtern

Filter sollen unerwünschte Frequenzbereiche blockieren.

Typische Beispiele:

**Tiefpass**

→ Oberwellen eines Senders vermindern

**Bandpass**

→ nur gewünschten Frequenzbereich passieren lassen

**Hochpass**

→ tiefe Störfrequenzen unterdrücken

**Netzfilter**

→ leitungsgebundene HF über die Stromversorgung vermindern

Ein Filter muss immer zum konkreten Problem passen.

## Die beste Reihenfolge bei einer Störung

Ein sinnvoller Ablauf lautet:

1. **Störung eindeutig feststellen**
2. **Quelle bestimmen**
3. **Kopplungsweg bestimmen**
4. **gestörtes Gerät bestimmen**
5. **Ursache technisch erklären**
6. **gezielte Massnahme durchführen**
7. **erneut messen beziehungsweise testen**

Nicht sinnvoll ist:

**wahllos Ferrite und Filter überall montieren und hoffen.**

## Drei Begriffe, die man nicht verwechseln darf

| Begriff | Bedeutung |
| --- | --- |
| Oberwelle | ganzzahliges Vielfaches einer Grundfrequenz |
| Intermodulation | neue Frequenzen durch Mischung in einer Nichtlinearität |
| Splatter | unerwünscht breite Aussendung, häufig durch Übersteuerung |

# Teil 2: Schutz gegen elektrische Spannungen

## Elektrischer Strom kann lebensgefährlich sein

Die Gefahr einer elektrischen Spannung hängt nicht allein vom Spannungswert ab.

Entscheidend sind unter anderem:

- Strom durch den Körper
- Stromweg durch den Körper
- Einwirkdauer
- Frequenz
- Hautzustand
- Kontaktfläche

Netzspannung ist deshalb grundsätzlich als lebensgefährlich zu behandeln.

## Das Schweizer Niederspannungsnetz

In Haushalten begegnet uns üblicherweise eine Netzspannung von ungefähr:

\[
230\ \mathrm{V}
\]

Diese Spannung ist lebensgefährlich.

Arbeiten an fest installierten elektrischen Hausinstallationen unterliegen den dafür geltenden schweizerischen Vorschriften.

Eine Amateurfunkzulassung ist **keine Bewilligung**, elektrische Hausinstallationen zu erstellen oder zu verändern.

## Schutzleiter

Bei Geräten mit Schutzleiter wird ein berührbares leitfähiges Gehäuse mit dem:

**Schutzleiter PE**

verbunden.

Die Kennfarbe des Schutzleiters ist:

**grün-gelb**

Bei einem Isolationsfehler soll dadurch ein gefährlicher Zustand erkannt und durch die Schutzmassnahmen des Stromnetzes abgeschaltet werden.

## Neutralleiter ist nicht Schutzleiter

Der:

**Neutralleiter N**

ist Teil des normalen Betriebsstromkreises.

Der:

**Schutzleiter PE**

dient dem Schutz.

Deshalb gilt:

> **Neutralleiter und Schutzleiter dürfen nicht einfach als dasselbe betrachtet oder beliebig miteinander verbunden werden.**

## Schutzisolierte Geräte

Schutzisolierte Geräte besitzen einen konstruktiven Schutz gegen gefährliche Berührungsspannungen und benötigen keinen Schutzleiter am Gehäuse.

Sie tragen die entsprechende Schutzklassenkennzeichnung.

Das Fehlen eines Schutzleiters ist bei einem dafür konstruierten schutzisolierten Gerät deshalb normal.

## Sicherung

Eine Sicherung schützt in erster Linie:

- Leitungen
- Bauteile
- Geräte

gegen zu hohe Ströme.

Sie verhindert beispielsweise Schäden bei:

- Kurzschluss
- Überlastung

Eine Sicherung ist nicht automatisch ein vollständiger Personenschutz gegen elektrischen Schlag.

## Fehlerstrom-Schutzeinrichtung

Eine Fehlerstrom-Schutzeinrichtung erkennt eine Differenz zwischen hin- und zurückfliessendem Strom.

Ein Teil des Stromes fliesst dann möglicherweise über einen unerwünschten Weg ab.

Die Einrichtung kann den Stromkreis schnell abschalten.

Sie ergänzt andere Schutzmassnahmen.

Sie macht Arbeiten an Netzspannung jedoch nicht ungefährlich.

## Hohe Spannungen in Funkgeräten

Besonders ältere Sender und Röhrenverstärker können interne Spannungen von:

- mehreren hundert Volt
- teilweise über tausend Volt

enthalten.

Diese Spannungen können auch bei vergleichsweise kleinen Geräten lebensgefährlich sein.

## Kondensatoren speichern Energie

Ein Kondensator kann auch nach dem Ausschalten eines Gerätes geladen bleiben.

Deshalb bedeutet:

**Netzstecker gezogen**

nicht automatisch:

**alle internen Spannungen sind verschwunden.**

Bei Arbeiten an Geräten mit höheren Spannungen muss die Entladung gespeicherter Energie sichergestellt und anschliessend gemessen werden.

## Entladewiderstände

In Hochspannungsschaltungen werden häufig Widerstände parallel zu grossen Kondensatoren eingebaut.

Diese werden unter anderem als:

**Bleeder-Widerstände**

bezeichnet.

Sie sollen Kondensatoren nach dem Ausschalten entladen.

Darauf darf man sich bei Reparaturarbeiten jedoch nicht blind verlassen.

Ein defekter oder unterbrochener Entladewiderstand kann wirkungslos sein.

Vor dem Berühren muss gemessen werden.

## Nicht mit dem Schraubenzieher kurzschliessen

Ein geladener grosser Kondensator sollte nicht einfach mit einem Werkzeug kurzgeschlossen werden.

Ein abrupter Kurzschluss kann:

- hohe Ströme erzeugen
- Lichtbögen erzeugen
- Kontakte beschädigen
- Bauteile zerstören
- Verletzungen verursachen

Eine kontrollierte Entladung erfolgt mit geeigneten dafür dimensionierten Hilfsmitteln und anschliessender Spannungsmessung.

## Akkumulatoren und niedrige Spannung

Auch niedrige Spannungen können gefährlich werden.

Ein grosser Akku kann bei Kurzschluss extrem hohe Ströme liefern.

Mögliche Folgen sind:

- glühende Leitungen
- geschmolzene Isolation
- Brand
- beschädigte Akkus
- Lichtbogen

Deshalb müssen auch 12-V- oder 48-V-Anlagen ausreichend abgesichert werden.

## Sicherung nahe an der Energiequelle

Bei einer Batterieanlage sollte eine geeignete Sicherung so angeordnet werden, dass möglichst wenig ungeschützte Leitung zwischen Batterie und Sicherung liegt.

Der Grund:

Ein Kurzschluss **vor** der Sicherung kann durch diese nicht abgeschaltet werden.

## Leistung bedeutet Wärme

Aus:

\[
P = U \cdot I
\]

kennen wir die elektrische Leistung.

Verlustleistung wird häufig in Wärme umgesetzt.

Zu hohe Temperaturen können:

- Bauteile beschädigen
- Isolation altern lassen
- Brand verursachen

Leistungskomponenten benötigen deshalb ausreichende:

- Kühlung
- Belüftung
- Dimensionierung

## HF-Spannungen

Auch bei einer vergleichsweise moderaten Senderleistung können an bestimmten Stellen eines Antennensystems hohe HF-Spannungen auftreten.

Besonders hohe Spannungen können beispielsweise auftreten:

- an Enden resonanter Dipole
- an hochohmigen Antennenspeisepunkten
- in Anpassnetzwerken
- an Spulen und Kondensatoren

Solche Teile dürfen während des Sendebetriebs nicht berührt werden.

## HF-Verbrennungen

Hochfrequenzströme können Gewebe erwärmen.

Eine Berührung eines HF-führenden Leiters kann deshalb:

- Schmerzen
- Verbrennungen
- lokale Gewebeschäden

verursachen.

HF-Spannungen sind nicht deshalb ungefährlich, weil sie nicht mit einem normalen Multimeter gemessen werden können.

# Teil 3: Schutz vor nichtionisierender Strahlung

## Was bedeutet NIS?

NIS bedeutet:

**nichtionisierende Strahlung**

Dazu gehören unter anderem elektromagnetische Felder im Funkfrequenzbereich.

Funkwellen besitzen nicht genügend Energie pro Photon, um Atome beziehungsweise Moleküle auf die gleiche Art zu ionisieren wie beispielsweise:

- Röntgenstrahlung
- Gammastrahlung

Deshalb werden Funkwellen als **nichtionisierend** bezeichnet.

Das bedeutet jedoch nicht, dass beliebig starke elektromagnetische Felder ungefährlich wären.

## Wirkung starker HF-Felder

Bei ausreichend starken hochfrequenten elektromagnetischen Feldern kann Energie im Körper absorbiert werden.

Eine wichtige physikalische Wirkung ist:

**Erwärmung von Gewebe**

Deshalb existieren Grenzwerte für die Exposition von Personen.

## Wovon hängt die Exposition ab?

Unter anderem von:

- Senderleistung
- Antennengewinn
- Frequenz
- Abstand zur Antenne
- Abstrahlrichtung
- Sendedauer
- Betriebsart
- Kabelverlusten
- Position einer Person zur Antenne

Die reine Angabe:

**Der Sender hat 100 W**

genügt deshalb nicht, um die Feldstärke an einem bestimmten Ort zu beurteilen.

## Abstand ist eine sehr wirksame Massnahme

Mit zunehmendem Abstand zur Antenne nimmt die Feldstärke grundsätzlich ab.

Besonders bei Richtantennen ist ausserdem entscheidend, ob sich eine Person:

- in der Hauptstrahlrichtung
- seitlich
- hinter der Antenne

befindet.

Eine Antenne sollte deshalb so montiert werden, dass Personen nicht unnötig starken HF-Feldern ausgesetzt werden.

## ERP und EIRP

Für die Beurteilung einer Funkanlage ist nicht nur die Senderleistung interessant.

Antennengewinn und Leitungsverluste verändern die effektive Strahlungsleistung.

### ERP

**Effective Radiated Power**

bezogen auf einen Halbwellendipol.

### EIRP

**Effective Isotropic Radiated Power**

bezogen auf einen theoretischen isotropen Strahler.

Zwischen beiden gilt:

\[
P_\mathrm{EIRP} = 1{,}64 \cdot P_\mathrm{ERP}
\]

beziehungsweise:

\[
p_\mathrm{EIRP} = p_\mathrm{ERP} = + = 2{,}15\ \mathrm{dB}
\]

## Beispiel

Eine Antenne besitzt:

\[
P_\mathrm{ERP}=100\ \mathrm{W}
\]

Dann beträgt:

\[
P_\mathrm{EIRP} = 1{,}64 \cdot 100
\]

\[
P_\mathrm{EIRP} = 164\ \mathrm{W}
\]

Dies bedeutet nicht, dass der Sender plötzlich 164 W elektrische Ausgangsleistung erzeugt.

Der Unterschied entsteht durch die verwendete Bezugsantenne und die Richtwirkung.

## Antennengewinn und Kabelverlust

Die aktuelle BAKOM-Formelsammlung berücksichtigt:

- Senderleistung
- Kabelverluste
- Antennengewinn

für die Bestimmung der effektiven Strahlungsleistung.

Vereinfacht:

**grössere Kabelverluste**

→ weniger Leistung an der Antenne

**grösserer Antennengewinn in einer Richtung**

→ grössere effektive Strahlungsleistung in dieser Richtung

## HB9-Vertiefung: Feldstärke im Fernfeld

Die BAKOM-Formelsammlung verwendet für die elektrische Feldstärke:

\[
E = \frac{ = \sqrt{ = 30\ \Omega \cdot P_A \cdot G_i = } = }{d}
\]

beziehungsweise mit der EIRP:

\[
E = \frac{ = \sqrt{ = 30\ \Omega \cdot P_\mathrm{EIRP} = } = }{d}
\]

Dabei gilt:

- \(E\) = elektrische Feldstärke in V/m
- \(P_A\) = Leistung an der Antenne
- \(G_i\) = Gewinnfaktor bezogen auf den Isotropstrahler
- \(P_\mathrm{EIRP}\) = effektive isotrope Strahlungsleistung
- \(d\) = Abstand zur Antenne

Die Formelsammlung nennt für dieses vereinfachte Freiraummodell die Bedingung:

\[
d = > = \frac{\lambda}{2\pi}
\]

Diese Beziehung ist ein **Prüfungs- und Berechnungsmodell**.

Die tatsächlichen Nah- und Fernfeldverhältnisse realer Antennen können zusätzlich von deren Bauform und Abmessungen abhängen.

## Beispiel Feldstärke

Gegeben:

\[
P_\mathrm{EIRP} = 100\ \mathrm{W}
\]

und:

\[
d = 10\ \mathrm{m}
\]

Dann:

\[
E = \frac{ = \sqrt{ = 30 \cdot 100 = } = }{10}
\]

\[
E = \frac{\sqrt{3,000}}{10}
\]

\[
E
\approx
5{,}48\ \mathrm{V/m}
\]

Verdoppelt man im selben vereinfachten Fernfeldmodell den Abstand auf:

\[
20\ \mathrm{m}
\]

halbiert sich die Feldstärke.

## Feldstärkeberechnung ist keine vollständige NIS-Beurteilung

Die einfache Fernfeldformel berücksichtigt nicht automatisch alle Besonderheiten einer realen Installation.

Dazu gehören beispielsweise:

- Nahfeld
- Reflexionen
- mehrere Antennen
- unterschiedliche Frequenzen
- Gebäude
- tatsächliche Antennendiagramme
- Sendezeiten

Für eine rechtlich notwendige NIS-Beurteilung sind deshalb die jeweils aktuellen schweizerischen Vorgaben massgebend.

## NISV in der Schweiz

In der Schweiz regelt die:

**Verordnung über den Schutz vor nichtionisierender Strahlung, NISV**

den Schutz der Bevölkerung vor nichtionisierender Strahlung ortsfester Anlagen.

Amateurfunkanlagen müssen die für sie geltenden Immissionsgrenzwerte einhalten.

Diese Grenzwerte hängen von der Frequenz ab.

Bei Amateurfunkanlagen spielt zusätzlich die tatsächliche Betriebsdauer eine Rolle.

Die zuständigen Vollzugsbehörden befinden sich bei Kantonen beziehungsweise Gemeinden.

Die konkreten rechtlichen Anforderungen werden in Kapitel 17 nochmals im Zusammenhang mit den schweizerischen Vorschriften behandelt.

## Dauerbetrieb und Amateurfunk

Eine Amateurfunkstation sendet normalerweise nicht rund um die Uhr.

Bei Sprechfunk besteht ein QSO beispielsweise aus:

- Senden
- Empfangen
- Pausen

Dadurch unterscheidet sich die zeitliche Exposition von einer permanent sendenden Anlage.

Dies bedeutet jedoch nicht, dass bei kurzem Sendebetrieb beliebige Feldstärken erlaubt wären.

Die geltenden Immissionsgrenzwerte müssen eingehalten werden.

## Achtung bei alten Fragenkatalogen

Ältere schweizerische Amateurfunk-Fragenkataloge enthalten teilweise vereinfachte Aussagen mit einer Grenze von:

**6 W ERP**

im Zusammenhang mit NIS-Berechnungen beziehungsweise Immissionsprognosen.

Solche älteren Fragen sind nützlich, um historische Prüfungsformen zu verstehen, sollten aber nicht ungeprüft als aktuelle allgemeine Rechtsregel übernommen werden.

Für die heutige Praxis sind:

- die aktuelle NISV
- aktuelle Informationen des BAFU
- die zuständige kantonale beziehungsweise kommunale Behörde

massgebend.

# Teil 4: Blitz- und Überspannungsschutz

## Ein Blitz ist kein normaler Strom

Ein Blitz kann innerhalb sehr kurzer Zeit extrem grosse Ströme führen.

Dadurch entstehen:

- sehr hohe Spannungen
- starke magnetische Felder
- Überspannungen
- Funkenüberschläge
- thermische Belastung
- mechanische Kräfte

Ein Blitzschutzsystem muss deshalb anders betrachtet werden als eine normale elektrische Erdung.

## Direkter und indirekter Blitzeinfluss

Eine Funkanlage kann auf unterschiedliche Weise gefährdet werden.

### Direkter Einschlag

Der Blitz trifft:

- Antenne
- Mast
- Gebäude

direkt.

### Indirekter Einfluss

Ein Blitz schlägt in der Umgebung ein.

Trotzdem können durch elektromagnetische Kopplung hohe Überspannungen entstehen in:

- Koaxialkabeln
- Steuerleitungen
- Netzleitungen
- Datenleitungen

Ein Blitz muss also nicht die eigene Antenne direkt treffen, um Schäden zu verursachen.

## Antenne als exponierter Punkt

Eine Aussenantenne befindet sich häufig:

- auf einem Dach
- an einem Mast
- auf einem Turm
- frei im Gelände

Damit ist sie elektromagnetischen und meteorologischen Einflüssen besonders ausgesetzt.

Bereits bei der Planung sollte deshalb der Blitz- und Überspannungsschutz berücksichtigt werden.

## Gebäude mit bestehender Blitzschutzanlage

Ist ein Gebäude bereits mit einem Blitzschutzsystem ausgerüstet, muss die Antennenanlage in das dafür vorgesehene Schutzkonzept integriert werden.

Wie dies konkret auszuführen ist, hängt unter anderem ab von:

- Gebäude
- Antennentyp
- Mast
- Leitungsführung
- vorhandenem Blitzschutzsystem

Solche Arbeiten müssen nach den aktuellen schweizerischen Regeln und von entsprechend qualifizierten Fachpersonen ausgeführt werden.

## Überspannungsschutz an Leitungen

Koaxial-, Steuer- und andere Leitungen können Überspannungen in ein Gebäude hineintragen.

Deshalb gehört der Schutz an der Gebäudeeinführung zum Gesamtkonzept.

Je nach Anlage kommen geeignete:

**Überspannungsschutzgeräte**

zum Einsatz.

Ein Koaxial-Überspannungsableiter allein stellt jedoch noch keinen vollständigen Blitzschutz dar.

Er muss Teil eines geeigneten Erdungs- und Potentialausgleichskonzepts sein.

## Potentialausgleich

Unterschiedliche leitfähige Teile einer Anlage können bei Blitz- oder Fehlerströmen sehr unterschiedliche elektrische Potentiale annehmen.

Ein geeigneter Potentialausgleich soll gefährliche Spannungsunterschiede vermindern.

Zum Gesamtsystem können beispielsweise gehören:

- Antennenmast
- Blitzschutz
- Kabelschirme
- Gebäudeeinführung
- Schutzleiter
- metallische Installationen

Die konkrete Ausführung gehört in die Hände von Fachpersonen, da falsche Verbindungen gefährliche Parallelpfade erzeugen können.

## Koaxialkabel abziehen reicht nicht als Blitzschutz

Das Trennen einer Antennenleitung vom Funkgerät kann bei entfernten Gewittern das Funkgerät zusätzlich schützen.

Es ersetzt jedoch keinen fachgerechten Blitzschutz.

Bei einem direkten oder nahen Blitzeinschlag können Überspannungen:

- überspringen
- über andere Leitungen einkoppeln
- über Schutzleiter und Netzleitungen gelangen

Ein lose im Funkraum liegender abgezogener Antennenstecker ist deshalb kein Blitzschutzsystem.

## Bei Gewitter nicht an der Antennenanlage arbeiten

Während eines nahen Gewitters sollte niemand:

- Antennenstecker anfassen
- Maste berühren
- Antennen aufbauen
- Erdungsleitungen bearbeiten

Eine Antennenanlage wird vor dem Gewitter in einen sicheren Zustand gebracht und nicht während des Gewitters improvisiert umgebaut.

# Teil 5: Mechanische Sicherheit

## Abstand zu elektrischen Freileitungen

Eine Antenne oder ein Mast darf niemals so montiert werden, dass er bei:

- Aufbau
- Umfallen
- Drahtbruch
- Sturm

eine elektrische Freileitung erreichen kann.

Dieser Grundsatz gilt auch bei scheinbar isolierten Freileitungen.

Eine Berührung kann tödlich sein.

## Arbeiten in der Höhe

Antennenarbeiten auf:

- Dach
- Leiter
- Mast
- Baum

bringen Absturzgefahr mit sich.

Geeignete:

- Arbeitsmittel
- Sicherung
- Helfer
- Wetterbedingungen

sind wichtiger als die schnelle Fertigstellung einer Antenne.

## Windlast

Eine Antenne erzeugt Windwiderstand.

Bei Sturm wirken dadurch erhebliche Kräfte auf:

- Mast
- Rotor
- Lager
- Befestigung
- Abspannungen
- Gebäude

Eine grosse Richtantenne besitzt eine wesentlich grössere Windangriffsfläche als ein dünner Draht.

Mechanische Konstruktionen müssen deshalb für die zu erwartenden Belastungen dimensioniert sein.

## Eis und Schnee

Eisansatz kann das Gewicht und die Windfläche einer Antenne stark erhöhen.

Eine Konstruktion, die bei trockenem Wetter stabil erscheint, kann dadurch erheblich stärker belastet werden.

Dies ist besonders relevant für:

- lange Drahtantennen
- horizontale Elemente
- Yagis
- Abspannseile

## Fallende Teile

Antennen, Maste und Befestigungen sollten so konstruiert werden, dass bei einem Defekt möglichst keine Personen gefährdet werden.

Besondere Aufmerksamkeit benötigen:

- Schraubverbindungen
- Schellen
- Abspannungen
- Korrosion
- Materialalterung

Eine Aussenantenne sollte deshalb regelmässig mechanisch kontrolliert werden.

# EMV-Probleme systematisch lösen

Ein bewährtes Schema lautet:

## 1. Ist es wirklich meine Station?

Zeitlicher Zusammenhang allein genügt nicht immer als Beweis.

## 2. Ist mein Sendesignal sauber?

Prüfen:

- Übersteuerung
- Leistung
- Oberwellen
- Modulation
- Senderdefekt

## 3. Wo gelangt die HF hin?

Mögliche Wege:

- Antenne
- Koaxialmantel
- Netzleitung
- Lautsprecherleitung
- Datenleitung

## 4. Was ist die eigentliche Störsenke?

Beispielsweise:

- NF-Verstärker
- Empfänger
- Netzteil
- Mikrocontroller

## 5. Massnahme passend auswählen

Zum Beispiel:

- Sender korrekt einstellen
- Filter
- Mantelwellensperre
- Ferrit
- Abschirmung
- Leitung kürzen
- Kabel anders führen
- Abstand vergrössern

## 6. Erneut testen

Nur so ist erkennbar, ob die Massnahme tatsächlich geholfen hat.

# Drei Sicherheitsebenen

Für die Praxis kann man sich drei Ebenen merken.

## Ebene 1: Person

Kann jemand verletzt werden?

Beispiele:

- Netzspannung
- Hochspannung
- HF-Spannung
- Absturz
- Blitz
- starke elektromagnetische Felder

## Ebene 2: Gerät

Kann Technik beschädigt werden?

Beispiele:

- Überspannung
- Kurzschluss
- Überhitzung
- falsche Polung
- HF-Einkopplung

## Ebene 3: Umgebung

Kann meine Anlage andere Systeme beeinflussen?

Beispiele:

- Funkstörungen
- Oberwellen
- Splatter
- Mantelwellen
- unzureichende EMV

Eine gute Funkstation berücksichtigt alle drei Ebenen.

# Lernschema

Bei einer Sicherheits- oder EMV-Frage gehe in dieser Reihenfolge vor:

1. **Welche Gefahr beziehungsweise Störung liegt vor?**
2. **Elektrisch, elektromagnetisch, mechanisch oder Blitz?**
3. **Wo befindet sich die Quelle?**
4. **Welcher Weg führt zur gefährdeten Person oder zum gestörten Gerät?**
5. **Welche Schutzmassnahme unterbricht diesen Weg?**
6. **Ist die Schutzmassnahme für diese Frequenz beziehungsweise Spannung geeignet?**
7. **Muss eine Fachperson beigezogen werden?**

# Die wichtigsten Zusammenhänge auf einen Blick

EIRP und ERP:

\[
P_\mathrm{EIRP} = 1{,}64 \cdot P_\mathrm{ERP}
\]

Elektrische Feldstärke im vereinfachten Fernfeldmodell:

\[
E = \frac{ = \sqrt{ = 30\ \Omega \cdot P_\mathrm{EIRP} = } = }{d}
\]

Bedingung der BAKOM-Formelsammlung für das verwendete Freiraummodell:

\[
d = > = \frac{\lambda}{2\pi}
\]

Elektrische Leistung:

\[
P = U \cdot I
\]

# Merksätze

**EMV bedeutet geringe Störaussendung und ausreichende Störfestigkeit.**

**Ein Störproblem besteht aus Störquelle, Kopplungsweg und Störsenke.**

**Nicht jede Funkstörung bedeutet automatisch, dass der Sender fehlerhaft ist.**

**Oberwellen sind ganzzahlige Vielfache der Grundfrequenz.**

**Splatter entsteht häufig durch Übersteuerung.**

**Ferrite sind frequenzabhängig und müssen zum Störproblem passen.**

**Netzspannung ist lebensgefährlich.**

**Der Schutzleiter ist nicht dasselbe wie der Neutralleiter.**

**Eine Amateurfunkzulassung berechtigt nicht zu Arbeiten an der elektrischen Hausinstallation.**

**Kondensatoren können auch nach dem Ausschalten gefährliche Energie speichern.**

**Auch Niederspannungsakkus können durch ihre hohen Kurzschlussströme Brand verursachen.**

**HF kann Verbrennungen verursachen.**

**Funkwellen sind nichtionisierende Strahlung.**

**Nichtionisierend bedeutet nicht automatisch ungefährlich bei beliebig hoher Feldstärke.**

**Abstand zur Antenne vermindert die Exposition erheblich.**

**ERP, EIRP und Senderausgangsleistung sind nicht dasselbe.**

**Ein Überspannungsableiter allein ist noch kein vollständiges Blitzschutzsystem.**

**Ein abgezogenes Koaxialkabel ersetzt keinen fachgerechten Blitzschutz.**

**Antennen dürfen bei Bruch oder Umfallen niemals elektrische Freileitungen erreichen können.**

# Selbstkontrolle

1. Was bedeutet EMV?
2. Aus welchen drei Teilen besteht ein typisches EMV-Störproblem?
3. Was ist eine Oberwelle?
4. Ein Sender arbeitet auf 145 MHz. Wo liegt seine dritte Harmonische?
5. Was versteht man unter Splatter?
6. Ist ein Tiefpassfilter die primäre Lösung für einen durch zu hohen Mikrofonpegel übersteuerten SSB-Sender?
7. Warum kann die eigene SSB-Aussendung aus einem Lautsprecher hörbar werden, obwohl dieser keinen Funkempfänger enthält?
8. Welche Farbe besitzt der Schutzleiter?
9. Ist der Neutralleiter dasselbe wie der Schutzleiter?
10. Warum kann ein ausgeschalteter Röhrenverstärker noch gefährlich sein?
11. Warum müssen auch 12-V-Batteriesysteme abgesichert werden?
12. Was bedeutet NIS?
13. Was unterscheidet EIRP von ERP?
14. Was geschieht im vereinfachten Fernfeldmodell mit der Feldstärke, wenn der Abstand verdoppelt wird?
15. Reicht das Abziehen des Antennenkabels als vollständiger Blitzschutz?
16. Welche drei Sicherheitsbereiche sollten bei einer Funkanlage betrachtet werden?

## Antworten

1. Elektromagnetische Verträglichkeit.
2. Störquelle, Kopplungsweg und Störsenke.
3. Eine Frequenz, die ein ganzzahliges Vielfaches der Grundfrequenz ist.
4. \(3 \cdot 145\ \mathrm{MHz} = 435\ \mathrm{MHz}\)
5. Unerwünscht breite Aussendungen, häufig verursacht durch Übersteuerung.
6. **Nein.** Zuerst muss die Übersteuerung beseitigt werden.
7. Eingekoppelte HF kann in einer nichtlinearen Eingangsschaltung unbeabsichtigt gleichgerichtet beziehungsweise demoduliert werden.
8. **Grün-gelb.**
9. **Nein.**
10. Weil Hochspannungskondensatoren nach dem Ausschalten noch geladen sein können.
11. Weil Batterien bei Kurzschluss sehr hohe Ströme liefern und dadurch Leitungen überhitzen oder Brände verursachen können.
12. Nichtionisierende Strahlung.
13. ERP bezieht sich auf einen Halbwellendipol, EIRP auf einen isotropen Strahler.
14. Sie halbiert sich im verwendeten vereinfachten Fernfeldmodell.
15. **Nein.**
16. Personenschutz, Schutz der Geräte und Schutz der elektromagnetischen Umgebung.

# Prüfungsbezug HB3 und HB9

Das BAKOM führt im aktuellen technischen Prüfungsstoff ausdrücklich folgende Bereiche auf:

- Störungen in elektronischen Geräten
- Ursachen von Störungen
- Abhilfemassnahmen
- Schutz gegen elektrische Spannungen
- Personenschutz
- Schutz vor nichtionisierender Strahlung
- Blitzschutz

Für HB3 und HB9 sind insbesondere wichtig:

- Ursache und Weg von Funkstörungen
- Oberwellen
- Übersteuerung
- Filter
- Abschirmung
- Schutzleiter
- elektrische Sicherheitsgrundlagen
- NIS-Grundlagen
- ERP und EIRP
- Abstand zur Antenne
- Blitz- und Überspannungsschutz

Für HB9 ist zusätzlich ein vertieftes technisches Verständnis sinnvoll, beispielsweise:

- Berechnung effektiver Strahlungsleistung
- elektrische Feldstärke
- Antennengewinn und Leitungsverlust
- systematische EMV-Fehleranalyse

Die aktuelle BAKOM-Formelsammlung enthält ausdrücklich die Berechnungen für ERP, EIRP und die elektrische Feldstärke im vereinfachten Fernfeldmodell.

Bei rechtlichen NIS- und Blitzschutzanforderungen sind immer die aktuellen schweizerischen Vorschriften und die zuständigen Fachstellen massgebend.

# Navigation

[← Kapitel 15: DX, Relais und Satelliten](15-dx-relais-satelliten.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 17: Amateurfunk in der Schweiz →](17-amateurfunk-schweiz.md)

---

*© 2026 Marcel Sauder. Alle Rechte vorbehalten. Vervielfältigung, Verbreitung oder Weitergabe, auch auszugsweise, nur mit ausdrücklicher schriftlicher Genehmigung.*
