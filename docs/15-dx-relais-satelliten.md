# Kapitel 15: DX, Relais und Satelliten

## Lernziele

Nach diesem Kapitel solltest du:

- erklären können, was im Amateurfunk unter DX verstanden wird
- die wichtigsten Voraussetzungen für erfolgreiche DX-Verbindungen kennen
- verstehen, weshalb Frequenz, Tageszeit, Ausbreitungsbedingungen und Abstrahlwinkel für DX wichtig sind
- einen Pile-up grundsätzlich verstehen und sich darin korrekt verhalten können
- Simplex- und Relaisbetrieb unterscheiden können
- Ein- und Ausgabefrequenz eines Relais verstehen
- Ablage beziehungsweise Shift eines Relais erklären können
- die Aufgabe von CTCSS und anderen Zugangsverfahren einordnen können
- verstehen, weshalb ein Relais eine grössere Reichweite ermöglicht
- Uplink und Downlink eines Amateurfunksatelliten unterscheiden können
- das Grundprinzip eines Satellitentransponders erklären können
- Azimut, Elevation und Überflug eines Satelliten verstehen
- den Dopplereffekt bei Satellitenverbindungen erklären können
- verstehen, weshalb Frequenznachführung und geeignete Polarisation beim Satellitenbetrieb wichtig sind

> **Hinweis zu HB3 und HB9:**
> DX, Relais und Satelliten verbinden mehrere prüfungsrelevante Themen wie Wellenausbreitung, Frequenzbereiche, Antennen, Betriebsarten und Vorschriften. Nicht jede hier beschriebene praktische Betriebstechnik wird vom BAKOM als eigener Prüfungspunkt aufgeführt. Das Kapitel soll deshalb sowohl Prüfungsvorbereitung als auch praktisches Verständnis vermitteln.

## Abkürzungen und Begriffe

| Begriff | Bedeutung |
| --- | --- |
| DX | Funkverbindung über grosse Entfernung |
| DXCC | System von Funkgebieten beziehungsweise DXCC Entities |
| QSO | Funkverbindung |
| Pile-up | viele Stationen rufen gleichzeitig eine gesuchte Station |
| Split | Senden und Empfangen auf unterschiedlichen Frequenzen |
| Simplex | Senden und Empfangen auf derselben Frequenz |
| Duplex | Senden und Empfangen auf unterschiedlichen Frequenzen |
| Repeater | Relaisfunkstelle |
| Shift | Frequenzabstand zwischen Relaisausgabe und Relaiseingabe |
| CTCSS | Continuous Tone Coded Squelch System |
| Uplink | Funkweg von der Erde zum Satelliten |
| Downlink | Funkweg vom Satelliten zur Erde |
| Transponder | Einrichtung, die empfangene Signale auf anderen Frequenzen wieder aussendet |
| Azimut | horizontale Richtung zum Satelliten |
| Elevation | Höhenwinkel über dem Horizont |
| Footprint | von einem Satelliten erreichbares Gebiet auf der Erde |
| LEO | Low Earth Orbit |
| Doppler | scheinbare Frequenzänderung durch Relativbewegung |

## Der rote Faden

Dieses Kapitel behandelt drei sehr unterschiedliche Möglichkeiten, die Reichweite einer Amateurfunkstation zu vergrössern.

### DX

Die Funkwelle selbst überbrückt eine grosse Entfernung, beispielsweise über die Ionosphäre.

### Relais

Eine hoch gelegene Empfangs- und Sendestation nimmt das Signal auf und sendet es auf einer anderen Frequenz wieder aus.

### Satellit

Eine Funkstation im Weltraum empfängt Signale von der Erde und sendet sie wieder zur Erde zurück.

Vereinfacht:

**DX**

→ Ausbreitung nutzen

**Relais**

→ terrestrische Zwischenstation nutzen

**Satellit**

→ Raumstation als Zwischenstation nutzen

---

# Teil 1: DX

## Was bedeutet DX?

Im Amateurfunk steht **DX** für Funkverbindungen über grosse Entfernungen.

Eine exakt festgelegte Mindestdistanz gibt es dafür nicht.

Auf Kurzwelle meint DX häufig internationale oder interkontinentale Verbindungen.

Auf VHF und UHF kann bereits eine Verbindung über einige hundert Kilometer als bemerkenswerte DX-Verbindung gelten.

Der Begriff hängt deshalb auch vom verwendeten Frequenzbereich ab.

## DX auf Kurzwelle

Kurzwellen-DX beruht hauptsächlich auf der Raumwellenausbreitung über die Ionosphäre.

Die Grundlagen wurden in Kapitel 8 behandelt.

Besonders wichtig sind:

- Frequenz
- Tageszeit
- Jahreszeit
- Sonnenaktivität
- Zustand der Ionosphäre
- Abstrahlwinkel der Antenne
- Funkrichtung

Für grosse Entfernungen ist grundsätzlich ein eher flacher Abstrahlwinkel günstig.

In den schweizerischen Ausbildungsunterlagen wird für interkontinentale Kurzwellenverbindungen als typische Grössenordnung ein Abstrahlwinkel von ungefähr **5 bis 15°** genannt.

## Mehr Leistung ist nicht automatisch mehr DX

Eine erfolgreiche DX-Verbindung hängt nicht nur von der Sendeleistung ab.

Mindestens ebenso wichtig können sein:

- geeignete Frequenz
- geeignete Tageszeit
- gute Antenne
- niedriger Abstrahlwinkel
- geringe Leitungsverluste
- störungsarmer Empfang
- gute Betriebstechnik

Bei günstigen Ausbreitungsbedingungen können mit überraschend kleiner Leistung interkontinentale Verbindungen möglich sein.

Bei geschlossener Ausbreitung hilft dagegen selbst eine sehr hohe Leistung möglicherweise wenig.

## Das richtige Band zur richtigen Zeit

Aus Kapitel 8 kennen wir:

**MUF**

Maximum Usable Frequency

und:

**LUF**

Lowest Usable Frequency.

Für einen ionosphärischen Funkweg muss die verwendete Frequenz grundsätzlich in einem geeigneten Bereich zwischen diesen Grenzen liegen.

In der Praxis bedeutet dies grob:

### Tiefere Kurzwellenbänder

häufig besonders gut:

- nachts
- während der Dämmerung
- für längere Verbindungen bei geringer D-Schicht-Absorption

### Höhere Kurzwellenbänder

häufig besonders gut:

- tagsüber
- bei höherer Sonnenaktivität
- wenn die Ionisation der F-Schicht ausreichend stark ist

Diese Regeln sind Tendenzen und keine Garantie.

Die Ionosphäre verändert sich ständig.

## Sonnenfleckenzyklus und DX

Der Sonnenfleckenzyklus dauert ungefähr:

**11 Jahre**

Bei hoher Sonnenaktivität steigt häufig die Ionisation der oberen Atmosphäre.

Dadurch können höhere Kurzwellenfrequenzen über grosse Entfernungen nutzbar werden.

Insbesondere die oberen KW-Bänder können dann weltweit ausgezeichnete Bedingungen bieten.

Bei geringer Sonnenaktivität sinkt die MUF häufig.

Dann gewinnen niedrigere Frequenzen für DX an Bedeutung.

## Greyline

Besonders interessante Ausbreitungsbedingungen können entlang der Grenze zwischen Tag und Nacht entstehen.

Diese Zone wird im Amateurfunk häufig als:

**Greyline**

bezeichnet.

Entlang dieser Dämmerungszone kann auf bestimmten Kurzwellenbändern die D-Schicht bereits schwächer geworden sein, während die höheren ionosphärischen Schichten noch ausreichend ionisiert sind.

Dadurch können zeitweise ungewöhnlich gute Fernverbindungen entstehen.

Greyline ist ein praktischer DX-Begriff und kein eigener grundlegender physikalischer Mechanismus.

## Long Path und Short Path

Zwischen zwei Stationen gibt es auf der Erde grundsätzlich zwei Richtungen entlang eines Grosskreises.

### Short Path

Der kürzere Weg zwischen beiden Stationen.

### Long Path

Der längere Weg um die andere Seite der Erde.

Unter geeigneten ionosphärischen Bedingungen kann eine DX-Station über den Long Path stärker hörbar sein als über den geometrisch kürzeren Weg.

Bei Richtantennen kann deshalb bereits das Drehen der Antenne in die scheinbar falsche Richtung einen überraschenden Empfang ermöglichen.

## DX mit Richtantennen

Eine Richtantenne besitzt gegenüber einer Rundstrahlantenne mehrere Vorteile.

Sie kann:

- Energie bevorzugt in die gewünschte Richtung abstrahlen
- Signale aus dieser Richtung stärker empfangen
- Störungen aus anderen Richtungen vermindern

Für DX sind deshalb beispielsweise Yagi- oder Quad-Antennen beliebt.

Eine Richtantenne erzeugt jedoch keine zusätzliche Senderleistung.

Sie verteilt die vorhandene Leistung bevorzugt in bestimmte Richtungen.

## Empfang ist mindestens so wichtig wie Senden

Eine Station muss nicht nur gehört werden.

Sie muss die Gegenstation auch selbst hören können.

Ein starkes lokales Störniveau kann deshalb DX wesentlich stärker begrenzen als fehlende Sendeleistung.

Wichtige Faktoren sind:

- störungsarme Antenne
- geeignete Antennenrichtung
- schmale Empfangsfilter
- geringe lokale Störungen
- passende Betriebsart
- gute Bedienung des Empfängers

DX ist deshalb ebenso sehr eine Empfangsdisziplin wie eine Sendedisziplin.

## Pile-up

Besonders seltene oder gesuchte Stationen werden häufig von vielen Amateurfunkstationen gleichzeitig angerufen.

Dieses gleichzeitige Rufen wird als:

**Pile-up**

bezeichnet.

Die DX-Station versucht daraus einzelne Rufzeichen aufzunehmen.

## Verhalten im Pile-up

Der wichtigste Grundsatz lautet:

> **Zuerst zuhören und verstehen, wie die DX-Station arbeitet.**

Vor dem eigenen Ruf sollte geklärt werden:

- arbeitet die Station Simplex oder Split?
- welche Stationen beantwortet sie?
- wo hört sie?
- verwendet sie bestimmte Rufzeichengebiete?
- wie lange dauern die QSOs?

Blindes Dauer-Rufen erschwert den Betrieb für alle Beteiligten.

## Split-Betrieb

Bei starkem Pile-up arbeitet die DX-Station häufig im:

**Split-Betrieb**

Sie sendet beispielsweise auf einer Frequenz und hört einige Kilohertz höher.

Die DX-Station könnte beispielsweise senden auf:

```
14,195 MHz
```

und sagen:

```
Listening 5 up.
```

Dann hört sie ungefähr auf:

```
14,200 MHz
```

Die anrufenden Stationen senden also nicht auf der Frequenz der DX-Station.

Dadurch bleibt deren Sendefrequenz frei und verständlich.

## Drei Dinge, die man nicht verwechseln darf

| Begriff | Bedeutung |
| --- | --- |
| Simplex | Senden und Empfangen auf derselben Frequenz |
| Split | Senden und Empfangen auf unterschiedlichen Frequenzen |
| Pile-up | viele Stationen rufen dieselbe Station |

## DXCC und Funkgebiete

Im DX-Betrieb wird häufig nicht nur gezählt, wie viele politische Staaten erreicht wurden.

Für verschiedene Amateurfunkdiplome werden sogenannte:

**DXCC Entities**

verwendet.

Eine DXCC Entity entspricht nicht zwingend exakt einem souveränen Staat.

Bestimmte Inseln oder geografisch getrennte Gebiete können als eigene Entity behandelt werden.

Für das technische und schweizerische Prüfungswissen ist diese Unterscheidung normalerweise nicht zentral, für praktischen DX-Betrieb aber wichtig.

## DX-Pedition

Eine Gruppe von Funkamateuren kann gezielt ein selten aktives Gebiet besuchen, um von dort Funkbetrieb durchzuführen.

Eine solche Unternehmung nennt man:

**DX-Pedition**

Besonders seltene Gebiete können dadurch innerhalb weniger Tage Zehntausende Funkverbindungen erzeugen.

Dabei entstehen oft grosse internationale Pile-ups.

---

# Teil 2: Relaisfunk

## Warum gibt es Relais?

VHF- und UHF-Signale breiten sich überwiegend quasioptisch und über die Troposphäre aus.

Berge, Gebäude und die Erdkrümmung begrenzen deshalb die direkte Reichweite.

Eine Relaisfunkstelle wird häufig an einem besonders hohen Standort aufgebaut, beispielsweise:

- Berg
- Hochhaus
- Sendeturm

Dadurch besitzt sie einen wesentlich grösseren Funkhorizont als eine Handfunkstation am Boden.

## Grundprinzip

Ein Relais empfängt ein Signal auf einer Frequenz und sendet es auf einer anderen Frequenz wieder aus.

Vereinfacht:

```
Funkgerät A  →  Relais  →  Funkgerät B
```

Beide Funkgeräte müssen das Relais erreichen können.

Sie müssen sich dagegen nicht zwingend direkt gegenseitig hören.

## Eingabe und Ausgabe

Das Relais besitzt grundsätzlich:

**Eingabefrequenz**

Die Frequenz, auf der es die Benutzer empfängt.

und:

**Ausgabefrequenz**

Die Frequenz, auf der es die empfangenen Signale wieder aussendet.

Aus Sicht des Benutzers gilt:

**Ich sende auf der Eingabe des Relais.**

**Ich höre auf der Ausgabe des Relais.**

## Ablage oder Shift

Der Frequenzunterschied zwischen Eingabe und Ausgabe wird als:

- Ablage
- Shift
- Offset

bezeichnet.

Ein Funkgerät kann beim Relaisbetrieb automatisch beim Drücken der Sendetaste auf die Eingabefrequenz wechseln und beim Loslassen wieder auf der Ausgabefrequenz empfangen.

Die konkreten Ablagen hängen vom Frequenzbereich und vom verwendeten Relaiskanal ab.

Sie sollten deshalb nicht aus einer allgemeinen Faustregel abgeleitet, sondern aus den aktuellen schweizerischen Relais- beziehungsweise Bandplaninformationen übernommen werden.

## Positiver und negativer Shift

Liegt die Eingabefrequenz oberhalb der Ausgabefrequenz, spricht man häufig von einem:

**positiven Shift**

Liegt sie darunter:

**negativer Shift**

Entscheidend ist nicht die Bezeichnung, sondern dass das Funkgerät auf der korrekten Eingabefrequenz sendet.

## Warum kann ein Relais gleichzeitig empfangen und senden?

Viele klassische Relais empfangen und senden gleichzeitig auf unterschiedlichen Frequenzen.

Dabei besteht eine technische Herausforderung:

Der eigene Sender des Relais ist unmittelbar neben dem eigenen empfindlichen Empfänger in Betrieb.

Damit der starke Sender den Empfänger nicht blockiert, werden sehr selektive Filter eingesetzt.

Eine häufig verwendete Einrichtung ist ein:

**Duplexer**

Damit können Sender und Empfänger unter bestimmten Bedingungen sogar dieselbe Antenne verwenden.

## Duplexer

Ein Duplexer besteht aus sehr selektiven HF-Filtern.

Er sorgt dafür, dass:

- die Senderleistung zur Antenne gelangt
- möglichst wenig Senderleistung in den Empfängereingang gelangt
- das schwache Empfangssignal trotzdem den Empfänger erreicht

Die notwendige Isolation zwischen Sender und Empfänger kann sehr gross sein.

Dies zeigt, weshalb eine Relaisstation technisch deutlich anspruchsvoller ist als lediglich zwei zusammengeschaltete Funkgeräte.

## Relaiszugang

Nicht jedes Signal auf der Eingabefrequenz soll zwangsläufig das Relais öffnen.

Dafür können verschiedene Verfahren verwendet werden.

Ein bekanntes Verfahren ist:

**CTCSS**

## CTCSS

CTCSS bedeutet:

**Continuous Tone Coded Squelch System**

Zusätzlich zur Sprache wird ein tiefer Ton übertragen.

Das Relais öffnet nur, wenn der erwartete Ton erkannt wird.

Dieser Ton liegt unterhalb des normalen Sprachbereichs und wird vom Benutzer häufig kaum wahrgenommen.

CTCSS ist kein Verschlüsselungsverfahren.

Es verhindert nicht, dass andere Stationen das Signal empfangen können.

Es dient hauptsächlich der gezielten Aktivierung beziehungsweise Selektion.

## 1750-Hz-Rufton

Historisch wurden viele europäische FM-Relais mit einem:

**1750-Hz-Rufton**

geöffnet.

Heute verwenden zahlreiche Anlagen andere Verfahren, insbesondere CTCSS.

Welche Methode notwendig ist, hängt vom konkreten Relais ab.

Deshalb muss die jeweilige Relaisinformation beachtet werden.

## Squelch

Squelch (Rauschsperre, siehe [Kapitel 9](09-sender-empfaenger.md#squelch)) schaltet den Lautsprecher stumm, solange kein ausreichendes Signal vorhanden ist.

Squelch und CTCSS dürfen nicht verwechselt werden.

### Squelch

reagiert grundsätzlich auf das empfangene Signal beziehungsweise dessen Eigenschaften.

### CTCSS

erfordert zusätzlich einen bestimmten Ton.

## Relaisreichweite

Die Reichweite wird wesentlich bestimmt durch:

- Höhe des Relaisstandorts
- Gelände
- Antennen
- Frequenz
- Senderleistung
- Empfängerempfindlichkeit
- Verluste der Speiseleitungen
- Standort der Benutzerstation

Eine Handfunkstation mit wenigen Watt kann über ein hoch gelegenes Relais eine Verbindung über eine Distanz herstellen, die direkt nicht möglich wäre.

## Relaisbetrieb ist kein Reichweitenbeweis der eigenen Station

Wenn zwei Handfunkgeräte über ein weit entferntes Relais miteinander sprechen können, bedeutet dies nicht, dass dieselbe Entfernung im Simplexbetrieb möglich wäre.

Beim Relaisbetrieb bestehen tatsächlich zwei getrennte Funkwege:

**Station A → Relais**

und:

**Relais → Station B**

Der hohe Standort des Relais ist der entscheidende Vorteil.

## Simplex zuerst?

Für lokale Verbindungen kann eine direkte Simplexfrequenz sinnvoll sein, wenn sich beide Stationen problemlos hören.

Damit wird kein Relaiskanal unnötig belegt.

Ein Relais ist besonders nützlich, wenn:

- direkte Verbindung nicht möglich ist
- mobile oder portable Stationen beteiligt sind
- grössere regionale Reichweite erforderlich ist

## Verhalten auf Relais

Ein Relais ist ein gemeinsam genutzter Funkkanal.

Deshalb sind einige einfache Gewohnheiten sinnvoll:

- vor dem Senden hören
- Rufzeichen deutlich nennen
- zwischen Durchgängen kurze Pausen lassen
- keine unnötig langen Monologe
- andere Stationen nicht absichtlich blockieren

Kurze Pausen zwischen den Durchgängen geben auch einer weiteren Station die Möglichkeit, sich bemerkbar zu machen.

## Digitale Sprachrelais

Neben analogem FM existieren digitale Sprachsysteme.

Dabei können Relais beispielsweise digitale Sprachsignale empfangen und weiterleiten.

Je nach System können zusätzliche Funktionen möglich sein, beispielsweise:

- Rufzeichenübertragung
- Gruppenkommunikation
- Vernetzung mehrerer Relais über Datennetze

Technisch muss dabei unterschieden werden zwischen:

**Funkverbindung zum Relais**

und:

**eventueller Vernetzung zwischen Relaisstandorten**

Eine über das Internet verbundene Relaiskette ist nicht dasselbe wie eine rein über Funk überbrückte Strecke.

---

# Teil 3: Amateurfunksatelliten

## Amateurfunk im Weltraum

Amateurfunksatelliten ermöglichen Funkverbindungen über Raumstationen, die den Amateurfunkdienst unterstützen.

Das internationale Radioreglement kennt dafür ausdrücklich den:

**Amateurfunkdienst über Satelliten**

Die entsprechenden Bestimmungen werden grundsätzlich auch auf diesen Dienst angewendet.

Die aktuellen schweizerischen BAKOM-Hilfstabellen unterscheiden bei den Frequenzbereichen ausdrücklich zwischen terrestrischen Verbindungen und Verbindungen über Amateurfunksatelliten. Nicht jedes terrestrisch zugelassene Amateurfunkband darf automatisch auch für Satellitenverbindungen verwendet werden.

## Grundprinzip

Ein Amateurfunksatellit kann vereinfacht als Relaisstation im Weltraum betrachtet werden.

Eine Bodenstation sendet zum Satelliten:

**Uplink**

Der Satellit empfängt das Signal und sendet es wieder zur Erde:

**Downlink**

Vereinfacht:

```
Station A
    \
     \ Uplink
      \
    Satellit
      /
     / Downlink
    /
Station B
```

## Uplink und Downlink

Diese beiden Begriffe dürfen nicht verwechselt werden.

### Uplink

**Erde → Satellit**

### Downlink

**Satellit → Erde**

Die Frequenzen von Uplink und Downlink sind normalerweise unterschiedlich.

Dadurch kann der Satellit Signale empfangen und gleichzeitig auf einem anderen Frequenzbereich wieder aussenden.

## Warum sind unterschiedliche Frequenzen sinnvoll?

Würde der Satellit unmittelbar auf derselben Frequenz senden, auf der er empfängt, müsste sein extrem schwacher Empfänger unmittelbar neben einem eigenen Sender auf derselben Frequenz arbeiten.

Durch getrennte Frequenzbereiche wird die notwendige Isolation wesentlich einfacher.

Ein ähnliches Prinzip kennen wir vom terrestrischen Relais.

## Transponder

Die zentrale Funkbaugruppe vieler Amateurfunksatelliten ist der:

**Transponder**

Er empfängt Signale auf einem Frequenzbereich und überträgt sie auf einen anderen.

Grundsätzlich können verschiedene Transpondertypen verwendet werden.

## FM-Satellit

Ein FM-Satellit kann sich aus Sicht der Benutzer ähnlich wie ein einzelner Relaiskanal verhalten.

Nur eine begrenzte Zahl von Benutzern kann gleichzeitig sinnvoll kommunizieren.

Wenn mehrere Stationen gleichzeitig senden, kann aufgrund des FM-Capture-Effekts eine stärkere Station eine schwächere verdrängen.

Deshalb ist Funkdisziplin besonders wichtig.

## Lineartransponder

Ein Lineartransponder überträgt einen ganzen Frequenzbereich.

Innerhalb dieses Bereichs können gleichzeitig mehrere schmalbandige Signale übertragen werden, beispielsweise:

- CW
- SSB

Man spricht deshalb häufig von einem:

**Passband**

Die Benutzer verteilen sich innerhalb dieses Durchlassbereichs.

## Invertierender Transponder

Bei bestimmten Lineartranspondern wird die Frequenzlage invertiert.

Eine höhere Uplinkfrequenz kann dann einer niedrigeren Downlinkfrequenz entsprechen.

Das bedeutet auch, dass beispielsweise:

**USB im Uplink**

als:

**LSB im Downlink**

erscheinen kann.

Welche Betriebsart und Frequenzbeziehung gilt, hängt vom jeweiligen Satelliten beziehungsweise Transponder ab.

## Umlaufbahn

Viele klassische Amateurfunksatelliten befinden sich in einer relativ niedrigen Erdumlaufbahn.

Diese wird als:

**LEO**

bezeichnet.

LEO bedeutet:

**Low Earth Orbit**

Solche Satelliten bewegen sich aus Sicht einer Bodenstation schnell über den Himmel.

Ein nutzbarer Überflug dauert deshalb häufig nur wenige Minuten.

## Der Satellit steht nicht am Himmel

Ein LEO-Satellit erscheint beispielsweise:

- am Horizont
- steigt höher
- erreicht einen höchsten Punkt
- sinkt wieder
- verschwindet am anderen Horizont

Während dieses kurzen Zeitraums verändern sich:

- Entfernung
- Richtung
- Elevation
- Dopplerverschiebung
- Signalstärke

Der Satellitenbetrieb ist deshalb dynamischer als der Betrieb über ein festes terrestrisches Relais.

## Azimut

Der:

**Azimut**

beschreibt die horizontale Richtung zum Satelliten.

Üblicherweise wird der Winkel von Norden aus angegeben.

Beispielsweise:

- 0° = Norden
- 90° = Osten
- 180° = Süden
- 270° = Westen

## Elevation

Die:

**Elevation**

beschreibt die Höhe des Satelliten über dem Horizont.

Dabei gilt:

**0°**

→ direkt am Horizont

**90°**

→ senkrecht über der Station

Ein Überflug mit hoher maximaler Elevation ist häufig besonders günstig, weil der Funkweg kürzer ist.

## AOS, LOS und Maximum Elevation

In der Satellitenpraxis begegnen einem häufig folgende Begriffe:

**AOS**

Acquisition of Signal

Zeitpunkt, an dem der Satellit für die Bodenstation nutzbar beziehungsweise sichtbar wird.

**LOS**

Loss of Signal

Zeitpunkt, an dem der Satellit wieder unter dem Funkhorizont verschwindet.

**Maximum Elevation**

höchster Punkt des betreffenden Überflugs.

## Footprint

Der Bereich der Erdoberfläche, von dem aus ein Satellit gleichzeitig erreicht werden kann, wird als:

**Footprint**

bezeichnet.

Zwei Bodenstationen können über den Satelliten miteinander kommunizieren, wenn sie sich gleichzeitig innerhalb des nutzbaren Footprints befinden.

Der Satellit muss also von beiden Stationen gleichzeitig erreichbar sein.

## Warum ermöglicht ein höherer Satellit grössere Entfernungen?

Je höher sich ein Satellit befindet, desto grösser kann grundsätzlich das gleichzeitig sichtbare Gebiet auf der Erde werden.

Damit können Bodenstationen weiter voneinander entfernt sein.

Dafür steigt allerdings auch die Funkstrecke.

Das bedeutet:

- höhere Freiraumdämpfung
- längere Signallaufzeit
- andere Anforderungen an die Funkverbindung

## Freiraumdämpfung

Auch im nahezu leeren Raum wird ein Funksignal mit zunehmender Entfernung schwächer.

Die Energie verteilt sich über eine immer grössere Fläche.

Dieser Zusammenhang wird als:

**Freiraumdämpfung**

bezeichnet.

Ein Satellit benötigt deshalb nicht zwingend eine grosse Sendeleistung, wenn:

- die Entfernung relativ klein ist
- geeignete Antennen verwendet werden
- der Empfänger empfindlich genug ist

Umgekehrt kann eine grössere Entfernung hohe Anforderungen an das Gesamtsystem stellen.

## Link Budget

Für anspruchsvollere Satellitenverbindungen betrachtet man die gesamte Funkstrecke als:

**Link Budget**

Dabei werden unter anderem berücksichtigt:

- Sendeleistung
- Antennengewinn
- Leitungsverluste
- Freiraumdämpfung
- Empfangsantennengewinn
- Empfängerempfindlichkeit

Das ist im Prinzip eine Leistungsbilanz für den gesamten Funkweg.

## Dopplereffekt

Der Satellit bewegt sich mit hoher Geschwindigkeit relativ zur Bodenstation.

Dadurch verändert sich die empfangene Frequenz.

Dieses Phänomen heisst:

**Dopplereffekt**

Wir kennen denselben Effekt aus der Akustik.

Eine sich nähernde Sirene klingt höher.

Eine sich entfernende Sirene klingt tiefer.

Bei Funkwellen verändert sich entsprechend die empfangene Frequenz.

## Beim Annähern

Nähert sich der Satellit:

**empfangene Frequenz höher**

## Beim Entfernen

Entfernt sich der Satellit:

**empfangene Frequenz tiefer**

Die Frequenzänderung ist besonders auf höheren Frequenzen deutlich.

## HB9-Vertiefung: Dopplerverschiebung

Für kleine Geschwindigkeiten gegenüber der Lichtgeschwindigkeit kann näherungsweise geschrieben werden:

\[
\frac{\Delta f}{f} \approx \frac{v}{c}
\]

beziehungsweise:

\[
\Delta f \approx f \cdot \frac{v}{c}
\]

Dabei gilt:

- \(\Delta f\) = Frequenzverschiebung
- \(f\) = Funkfrequenz
- \(v\) = Relativgeschwindigkeit
- \(c\) = Lichtgeschwindigkeit

Damit erkennt man:

> **Bei gleicher Geschwindigkeit nimmt die absolute Dopplerverschiebung mit steigender Funkfrequenz zu.**

## Beispiel

Eine bestimmte Relativbewegung verursacht bei:

\[
145\ \mathrm{MHz}
\]

eine Dopplerverschiebung von beispielsweise ungefähr:

\[
3\ \mathrm{kHz}
\]

Unter ansonsten gleichen Bedingungen wäre die Verschiebung bei:

\[
435\ \mathrm{MHz}
\]

ungefähr dreimal so gross.

Deshalb muss die Frequenz bei UHF-Satellitenbetrieb besonders aufmerksam nachgeführt werden.

Die tatsächliche Verschiebung hängt von der momentanen Relativgeschwindigkeit ab.

## Frequenznachführung

Während eines Überflugs verändert sich der Dopplereffekt kontinuierlich.

Die Empfangsfrequenz muss deshalb gegebenenfalls während des QSO nachgestellt werden.

Moderne Funkgeräte oder Computerprogramme können diese Korrektur teilweise automatisch durchführen.

Bei FM-Satelliten genügt häufig eine schrittweise Anpassung.

Bei SSB und CW ist eine feinere Nachführung notwendig.

## Antennen für Satellitenbetrieb

Für erste Versuche können bereits einfache Antennen geeignet sein.

Häufig verwendet werden:

- vertikale Rundstrahlantennen
- kleine Yagis
- gekreuzte Yagis
- handgehaltene Richtantennen
- zirkular polarisierte Antennen

Da sich ein LEO-Satellit über den Himmel bewegt, muss eine Richtantenne entsprechend nachgeführt werden.

## Polarisation

Die Polarisation eines Satellitensignals kann sich während eines Überflugs aus Sicht der Bodenstation verändern.

Ursachen können unter anderem sein:

- Orientierung des Satelliten
- Rotation des Satelliten
- räumliche Geometrie des Funkwegs

Mit einer rein linear polarisierten Antenne können deshalb zeitweise deutliche Signaländerungen auftreten.

Zirkulare Polarisation kann bei bestimmten Satellitensystemen Vorteile bieten.

## Polarisation Fading

Ist die Empfangsantenne linear polarisiert und dreht sich die Polarisation des ankommenden Signals, kann die Signalstärke stark schwanken.

Diese Erscheinung wird häufig als:

**Polarisation Fading**

wahrgenommen.

Das ist nicht dasselbe wie ionosphärisches Mehrwege-Fading auf Kurzwelle.

## Full Duplex

Beim Satellitenbetrieb ist es sehr hilfreich, den eigenen Downlink gleichzeitig hören zu können, während man sendet.

Das nennt man:

**Full Duplex**

Dadurch kann man sofort erkennen:

- erreiche ich den Satelliten?
- liege ich auf der richtigen Frequenz?
- wie stark ist mein Signal?
- störe ich eine andere Station?
- stimmt meine Dopplerkorrektur?

Besonders bei Lineartranspondern ist dies eine sehr hilfreiche Betriebstechnik.

## Nicht mit unnötig hoher Leistung senden

Ein Amateurfunksatellit besitzt nur begrenzte Ressourcen.

Besonders bei Lineartranspondern kann ein übermässig starkes Signal:

- andere Benutzer verdrängen
- den Transponder übersteuern
- die Qualität aller Signale verschlechtern

Deshalb gilt auch hier:

> **Nur so viel Leistung verwenden, wie für eine zuverlässige Verbindung notwendig ist.**

## Satellit hören, bevor man sendet

Ein sinnvoller Ablauf lautet:

1. Überflug berechnen.
2. Downlinkfrequenz einstellen.
3. Satelliten suchen.
4. Downlink sicher empfangen.
5. Dopplerverschiebung beobachten.
6. Erst danach vorsichtig senden.
7. Eigenes Signal nach Möglichkeit über den Downlink kontrollieren.

Wer den Satelliten nicht empfangen kann, sollte nicht einfach mit hoher Leistung blind senden.

## Satellitenbahnen berechnen

Damit eine Bodenstation weiss, wann ein Satellit sichtbar ist, werden Bahndaten verwendet.

Programme können daraus berechnen:

- AOS
- LOS
- Azimut
- Elevation
- Entfernung
- Dopplerkorrektur

Damit lässt sich ein Überflug bereits vor Beginn planen.

## Warum ändern sich Vorhersagen?

Ein Satellit bewegt sich nicht dauerhaft exakt nach einer einmal berechneten idealen Bahn.

Seine Bahndaten werden deshalb regelmässig aktualisiert.

Für gute Vorhersagen sollten aktuelle Bahndaten verwendet werden.

## Geostationäre Satelliten

Ein geostationärer Satellit befindet sich in grosser Höhe über dem Äquator und umläuft die Erde mit derselben Winkelgeschwindigkeit, mit der sich die Erde dreht.

Aus Sicht einer festen Bodenstation scheint er deshalb nahezu an derselben Position am Himmel zu stehen.

Das unterscheidet ihn grundlegend von einem schnell vorbeiziehenden LEO-Satelliten.

Für eine geostationäre Verbindung muss die Antenne nicht ständig einem schnellen Überflug folgen.

Die wesentlich grössere Entfernung verursacht jedoch eine deutlich grössere Freiraumdämpfung.

## Terrestrisches Relais und Satellit im Vergleich

| Eigenschaft | terrestrisches Relais | Satellit |
| --- | --- | --- |
| Standort | fest | bewegt sich beziehungsweise Umlaufbahn |
| Reichweite | regional | regional bis sehr gross |
| Richtung | konstant | bei LEO ständig veränderlich |
| Dopplereffekt | praktisch unbedeutend | wichtig |
| Sichtbarkeit | normalerweise dauerhaft im Versorgungsgebiet | bei LEO nur während Überflügen |
| Uplink/Downlink | vorhanden | vorhanden |
| Höhe | Berg oder Gebäude | Weltraum |

## Drei Dinge, die man bei Satelliten nicht verwechseln darf

| Begriff | Bedeutung |
| --- | --- |
| Uplink | Erde zum Satelliten |
| Downlink | Satellit zur Erde |
| Footprint | gleichzeitig erreichbares Gebiet auf der Erde |

Und:

| Begriff | Bedeutung |
| --- | --- |
| Azimut | horizontale Richtung |
| Elevation | Winkel über dem Horizont |
| Doppler | Frequenzverschiebung durch Relativbewegung |

## Frequenzen und schweizerische Zulassung

Nicht jeder Amateurfunkbereich darf für jede Art von Verbindung verwendet werden.

Die aktuellen BAKOM-Hilfstabellen unterscheiden ausdrücklich:

- terrestrische Verbindungen
- Verbindungen über Amateurfunksatelliten

Für die NOVICE-Zulassung HB3 sind Satellitenverbindungen beispielsweise nur in bestimmten dafür ausgewiesenen Amateurfunkbereichen zulässig.

Die konkreten Frequenzbereiche und Leistungsgrenzen werden deshalb nicht auswendig aus diesem Kapitel übernommen.

Massgebend sind die jeweils aktuellen BAKOM-Hilfstabellen.

Die schweizerischen Frequenz- und Zulassungsbestimmungen behandeln wir ausführlicher in Kapitel 17.

## Lernschema DX

Bei einer DX-Verbindung:

1. Welches Zielgebiet?
2. Welche Entfernung?
3. Welche Tageszeit?
4. Welches Band ist wahrscheinlich geeignet?
5. Welche Ausbreitungsbedingungen herrschen?
6. Welche Antennenrichtung?
7. Short Path oder Long Path?
8. Simplex oder Split?
9. Erst zuhören, dann rufen.

## Lernschema Relais

Bei einem Relais:

1. Welche Ausgabefrequenz?
2. Welche Eingabefrequenz?
3. Welcher Shift?
4. Ist CTCSS oder ein anderes Zugangsverfahren notwendig?
5. Kann ich das Relais hören?
6. Erreicht mein Signal das Relais?
7. Kurze Pause zwischen Durchgängen lassen.

## Lernschema Satellit

Vor einem Satelliten-QSO:

1. Welcher Satellit?
2. Wann beginnt der Überflug?
3. Welcher Uplink?
4. Welcher Downlink?
5. Welche Betriebsart?
6. Welcher Azimut?
7. Welche Elevation?
8. Welche Dopplerkorrektur?
9. Downlink zuerst empfangen.
10. Mit kleiner geeigneter Leistung senden.
11. Eigenes Signal möglichst kontrollieren.

## Merksätze

**DX bezeichnet Funkverbindungen über grosse Entfernungen.**

**Für Kurzwellen-DX ist ein flacher Abstrahlwinkel grundsätzlich günstig.**

**Die richtige Frequenz und die Ausbreitungsbedingungen sind für DX oft wichtiger als zusätzliche Sendeleistung.**

**Bei einem Pile-up zuerst zuhören und den Betriebsablauf verstehen.**

**Beim Split-Betrieb liegen Sende- und Empfangsfrequenz auseinander.**

**Ein Relais empfängt auf einer Frequenz und sendet auf einer anderen.**

**Der Frequenzunterschied zwischen Relais-Ein- und Ausgabe wird als Shift beziehungsweise Ablage bezeichnet.**

**CTCSS ist kein Verschlüsselungsverfahren.**

**Ein Relais vergrössert die Reichweite vor allem durch seinen günstigen Standort.**

**Uplink bedeutet Erde zum Satelliten.**

**Downlink bedeutet Satellit zur Erde.**

**Azimut beschreibt die Richtung, Elevation die Höhe über dem Horizont.**

**Bei einem sich nähernden Satelliten wird die Empfangsfrequenz höher, beim sich entfernenden Satelliten tiefer.**

**Der Dopplereffekt wird bei höheren Funkfrequenzen stärker bemerkbar.**

**Nicht jedes terrestrisch zugelassene Amateurfunkband ist automatisch für Satellitenfunk zugelassen.**

**Beim Satellitenbetrieb zuerst hören, danach senden.**

## Selbstkontrolle

1. Was versteht man im Amateurfunk unter DX?
2. Welcher Abstrahlwinkel ist grundsätzlich günstig für interkontinentale Kurzwellenverbindungen?
3. Was ist ein Pile-up?
4. Was bedeutet Split-Betrieb?
5. Weshalb kann ein hoch gelegenes Relais grosse Reichweiten ermöglichen?
6. Was ist der Unterschied zwischen Relaiseingabe und Relaisausgabe?
7. Was bezeichnet der Shift?
8. Was ist CTCSS?
9. Ist CTCSS eine Verschlüsselung?
10. Was bedeutet Uplink?
11. Was bedeutet Downlink?
12. Was ist ein Satellitentransponder?
13. Was beschreibt der Azimut?
14. Was beschreibt die Elevation?
15. Was geschieht mit der empfangenen Frequenz, wenn sich ein Satellit nähert?
16. Weshalb ist die Dopplerkorrektur auf 70 cm stärker als auf 2 m?
17. Was bedeutet Footprint?
18. Weshalb ist Full-Duplex-Betrieb bei Amateurfunksatelliten hilfreich?
19. Darf jedes in der Schweiz terrestrisch nutzbare Amateurfunkband automatisch auch für Satellitenverbindungen verwendet werden?

### Antworten

1. Eine Funkverbindung über grosse Entfernung.
2. Ein eher flacher Abstrahlwinkel.
3. Viele Stationen rufen gleichzeitig dieselbe gesuchte Station.
4. Die Station sendet und empfängt auf unterschiedlichen Frequenzen.
5. Weil der hohe Standort einen grossen Funkhorizont besitzt.
6. Auf der Eingabe empfängt das Relais die Benutzer. Auf der Ausgabe sendet es das Signal wieder aus.
7. Den Frequenzunterschied zwischen Relais-Eingabe und Relais-Ausgabe.
8. Ein Verfahren, bei dem ein zusätzlicher tiefer Ton zur gezielten Aktivierung beziehungsweise Selektion übertragen wird.
9. **Nein.**
10. Funkweg von der Erde zum Satelliten.
11. Funkweg vom Satelliten zur Erde.
12. Eine Einrichtung, die Signale empfängt und in einem anderen Frequenzbereich wieder aussendet.
13. Die horizontale Richtung zum Satelliten.
14. Den Höhenwinkel des Satelliten über dem Horizont.
15. Die empfangene Frequenz wird höher.
16. Weil die absolute Dopplerverschiebung proportional zur Funkfrequenz zunimmt.
17. Das von einem Satelliten gleichzeitig erreichbare Gebiet auf der Erdoberfläche.
18. Weil die Station ihr eigenes über den Satelliten zurückgesendetes Signal kontrollieren kann.
19. **Nein.** Es müssen die für Satellitenverbindungen zugelassenen Frequenzbereiche beachtet werden.

## Prüfungsbezug HB3 und HB9

Dieses Kapitel verbindet mehrere Bereiche des aktuellen schweizerischen Prüfungsstoffs.

Für DX sind insbesondere relevant:

- Funkwellenausbreitung
- Ionosphäre
- MUF und LUF
- Abstrahlwinkel
- Antenneneigenschaften
- Frequenzbereiche
- Sendearten

Die schweizerischen Ausbildungsunterlagen behandeln den Zusammenhang zwischen flachem Abstrahlwinkel und interkontinentalem DX ausdrücklich.

Beim Satellitenfunk sind zusätzlich die aktuellen Frequenzzuweisungen wichtig. Die BAKOM-Hilfstabellen unterscheiden ausdrücklich zwischen terrestrischer Nutzung und Amateurfunk-Satellitenverbindungen.

Für das praktische Verständnis sind ausserdem wichtig:

- Simplex und Duplex
- Relaiseingabe und Relaisausgabe
- Shift
- CTCSS
- Uplink und Downlink
- Transponder
- Azimut und Elevation
- Dopplereffekt
- Satelliten-Footprint

Die detaillierten schweizerischen Vorschriften und die aktuell zulässigen Frequenzbereiche folgen in Kapitel 17.

## Navigation

[← Kapitel 14: Funkbetrieb](14-funkbetrieb.md)

[↑ Zurück zum Inhaltsverzeichnis](index.md)

[Kapitel 16: Sicherheit und EMV →](16-sicherheit-emv.md)

---

*© 2026 Marcel Sauder. Alle Rechte vorbehalten. Vervielfältigung, Verbreitung oder Weitergabe, auch auszugsweise, nur mit ausdrücklicher schriftlicher Genehmigung.*
