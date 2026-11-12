# Kapitel 9: Sender und Empfänger

## Lernziele

Nach diesem Kapitel solltest du:

- die grundlegende Aufgabe eines Empfängers erklären können
- die grundlegende Aufgabe eines Senders erklären können
- Geradeausempfänger, Direktmischer und Überlagerungsempfänger unterscheiden können
- das Blockschaltbild eines klassischen Superheterodynempfängers verstehen
- die Aufgaben von HF-Vorstufe, Mischer, Oszillator, ZF-Verstärker, Filter, Demodulator und NF-Verstärker erklären können
- verstehen, wie durch Mischung eine Zwischenfrequenz entsteht
- eine einfache Zwischenfrequenz berechnen können
- erklären können, was eine Spiegelfrequenz ist
- verstehen, weshalb Vorselektion die Spiegelfrequenzunterdrückung verbessert
- Empfindlichkeit und Selektivität unterscheiden können
- Signal-Rausch-Verhältnis und Rauschzahl grundsätzlich verstehen
- den Einfluss der Bandbreite auf das thermische Rauschen erklären können
- AGC, Squelch, BFO, RIT, IF-Shift, Notch-Filter und Noise Blanker grundsätzlich einordnen können
- den grundsätzlichen Aufbau eines analogen Senders erklären können
- die Aufgaben von Frequenzaufbereitung, Modulator, Treiber, Endstufe und Ausgangsfilter erklären können
- die Aufgabe einer ALC verstehen
- das Grundprinzip eines SDR-Empfängers und SDR-Senders erklären können
- analoge Verarbeitung und digitale Signalverarbeitung unterscheiden können
- wichtige Eigenschaften von Sendern und Empfängern beurteilen können

> **Hinweis zu HB3 und HB9:**
> Das BAKOM nennt Empfängertypen und Sendertypen, analoge und digitale SDR-Systeme, Blockdiagramme, Funktionen der einzelnen Stufen sowie Empfänger- und Sendereigenschaften ausdrücklich als Prüfungsstoff. Für HB3 sind die technischen und rechnerischen Fragen weniger komplex als für HB9. Die Kennzeichnung **HB9-Vertiefung** in diesem Lehrwerk ist eine didaktische Lernhilfe.

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
<td><span class="arithmatex">\(f_E\)</span></td>
<td>Empfangsfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_O\)</span></td>
<td>Oszillatorfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_\mathrm{ZF}\)</span></td>
<td>Zwischenfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(f_S\)</span></td>
<td>Spiegelfrequenz</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(B\)</span></td>
<td>Bandbreite</td>
<td>Hz</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_N\)</span></td>
<td>Rauschleistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(P_S\)</span></td>
<td>Signalleistung</td>
<td>W</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_N\)</span></td>
<td>Rauschspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(U_S\)</span></td>
<td>Signalspannung</td>
<td>V</td>
</tr>
<tr>
<td><span class="arithmatex">\(T_K\)</span></td>
<td>absolute Temperatur</td>
<td>K</td>
</tr>
<tr>
<td><span class="arithmatex">\(k\)</span></td>
<td>Boltzmann-Konstante</td>
<td>Ws/K</td>
</tr>
<tr>
<td>SNR</td>
<td>Signal-Rausch-Verhältnis</td>
<td>dB</td>
</tr>
<tr>
<td><span class="arithmatex">\(F\)</span></td>
<td>Rauschfaktor</td>
<td>keine</td>
</tr>
<tr>
<td><span class="arithmatex">\(n_F\)</span></td>
<td>logarithmische Rauschzahl</td>
<td>dB</td>
</tr>
<tr>
<td><span class="arithmatex">\(\eta\)</span></td>
<td>Wirkungsgrad</td>
<td>keine</td>
</tr>
</tbody>
</table>

## Der rote Faden

Eine Funkverbindung besteht vereinfacht aus:

**Information → Sender → Antenne → Funkwelle → Antenne → Empfänger → Information**

Der Sender hat die Aufgabe:

> **aus einer Information ein geeignetes Hochfrequenzsignal zu erzeugen und ausreichend zu verstärken**

Der Empfänger hat die umgekehrte Aufgabe:

> **aus sehr vielen an der Antenne vorhandenen Signalen das gewünschte herauszufiltern, zu verstärken und die Information zurückzugewinnen**

Die wichtigste Herausforderung des Empfängers lautet deshalb:

**das richtige schwache Signal aus vielen anderen Signalen und aus Rauschen herauslösen**

Die wichtigste Herausforderung des Senders lautet:

**ein stabiles, sauberes und ausreichend starkes Signal zu erzeugen, ohne unerwünschte Frequenzen abzustrahlen**

---

# Teil 1: Der Empfänger

## Was macht ein Empfänger?

An einer Empfangsantenne liegt normalerweise nicht nur das gewünschte Signal an.

Gleichzeitig können vorhanden sein:

- andere Amateurfunkstationen
- Rundfunksender
- Mobilfunk- und Funkdienste
- atmosphärisches Rauschen
- galaktisches Rauschen
- elektronische Störungen
- interne Rauschanteile des Empfängers

Der Empfänger muss aus diesem Gemisch das gewünschte Signal auswählen.

Vereinfacht:

**Antenne → auswählen → verstärken → demodulieren → wiedergeben**

---

# Der einfachste Empfänger

Ein sehr einfacher Empfänger kann aus:

- abgestimmtem Eingangskreis
- Demodulator
- NF-Verstärker

bestehen.

Wird das empfangene Hochfrequenzsignal direkt auf seiner Empfangsfrequenz verarbeitet und demoduliert, spricht man grundsätzlich von einem:

**Geradeausempfänger**

---

# Geradeausempfänger

Beim Geradeausempfänger wird das gewünschte Signal auf seiner ursprünglichen Empfangsfrequenz:

- ausgewählt
- gegebenenfalls verstärkt
- direkt demoduliert

Vereinfacht:

**Antenne → HF-Filter → HF-Verstärker → Demodulator → NF-Verstärker**

Ein Vorteil ist der relativ einfache Aufbau.

Ein Nachteil besteht darin, dass:

- Verstärkung
- Filterung
- Abstimmung

über einen grossen Frequenzbereich schwieriger konstant zu realisieren sind.

---

# Direktmischempfänger

Ein:

**Direktmischempfänger**

beziehungsweise:

**Direct Conversion Receiver**

mischt das empfangene Hochfrequenzsignal unmittelbar auf eine sehr tiefe Frequenz beziehungsweise direkt in den NF-Bereich herunter.

Vereinfacht:

**Antenne → Vorselektion → Mischer → NF-Filter → NF-Verstärker**

Der lokale Oszillator arbeitet dabei nahe an der Empfangsfrequenz.

---

# Beispiel Direktmischung

Ein CW-Signal liegt bei:

\[
7{,}155,000\ \mathrm{MHz}
\]

Der lokale Oszillator arbeitet bei:

\[
7{,}155,700\ \mathrm{MHz}
\]

Die Differenz beträgt:

\[
700\ \mathrm{Hz}
\]

Durch die Mischung entsteht unter anderem ein NF-Signal von:

\[
700\ \mathrm{Hz}
\]

Dieses kann über Kopfhörer hörbar gemacht werden.

---

# Der Überlagerungsempfänger

Der klassische:

**Superheterodynempfänger**

oder kurz:

**Superhet**

setzt die Empfangsfrequenz durch Mischung auf eine feste:

**Zwischenfrequenz**

um.

Vereinfacht:

**Antenne → Vorselektion/HF-Verstärker → Mischer → ZF-Filter/ZF-Verstärker → Demodulator → NF-Verstärker → Lautsprecher**

Zusätzlich benötigt der Mischer einen:

**lokalen Oszillator**

---

# Warum eine Zwischenfrequenz?

Angenommen, ein Empfänger soll alle Frequenzen von:

\[
1{,}8\ \mathrm{MHz}
\]

bis:

\[
30\ \mathrm{MHz}
\]

empfangen.

Würde die gesamte scharfe Filterung immer direkt auf der jeweiligen Empfangsfrequenz stattfinden, müssten sehr gute Filter über diesen gesamten Bereich mitgestimmt werden.

Beim Superhet wird das gewünschte Signal dagegen auf eine feste Frequenz umgesetzt.

Auf dieser festen Zwischenfrequenz können:

- stabile Verstärker
- schmale Filter
- definierte Bandbreiten

verwendet werden.

Das war historisch einer der grossen Vorteile des Überlagerungsempfängers.

---

# Das Blockschaltbild eines klassischen Empfängers

Ein vereinfachter Superhet besteht aus:

1. Antenneneingang
2. Vorselektion
3. HF-Vorstufe
4. Mischer
5. lokaler Oszillator
6. ZF-Filter
7. ZF-Verstärker
8. Demodulator
9. NF-Filter beziehungsweise NF-Verstärker
10. Lautsprecher oder Kopfhörer

Nicht jeder Empfänger besitzt jede Stufe exakt in dieser Form.

Das Grundprinzip ist jedoch sehr wichtig.

---

# Vorselektion

Die:

**Vorselektion**

ist ein Filter am Empfängereingang.

Sie lässt den gewünschten Frequenzbereich passieren und dämpft möglichst viele unerwünschte Frequenzen bereits vor den empfindlichen Empfängerstufen.

Sie kann beispielsweise aus:

- abgestimmten LC-Kreisen
- Bandpassfiltern
- schaltbaren Filterbänken

bestehen.

---

# Warum ist Vorselektion wichtig?

Eine gute Vorselektion kann:

- starke ausserbandige Signale dämpfen
- Übersteuerung verhindern
- Intermodulationsprobleme vermindern
- Spiegelfrequenzen unterdrücken
- den nachfolgenden Empfänger entlasten

Ein sehr empfindlicher Empfänger ohne ausreichende Vorselektion muss deshalb nicht automatisch ein guter Empfänger sein.

---

# HF-Vorstufe

Die HF-Vorstufe befindet sich nahe am Empfängereingang.

Ihre Aufgaben können sein:

- sehr schwache Nutzsignale verstärken
- möglichst wenig zusätzliches Rauschen erzeugen
- Anpassung zwischen Antenne und nachfolgenden Stufen
- zusätzliche Selektion

Besonders auf höheren Frequenzen ist eine rauscharme erste Verstärkerstufe wichtig.

---

# Warum die erste Stufe besonders wichtig ist

Rauschen, das bereits am Anfang des Empfängers hinzugefügt wird, kann später nicht mehr entfernt werden.

Die ersten Empfängerstufen bestimmen deshalb wesentlich:

- Rauschzahl
- Empfindlichkeit

des gesamten Systems.

Ein rauscharmer Vorverstärker wird bei längeren verlustbehafteten Leitungen deshalb möglichst:

**nahe an der Antenne**

angebracht.

Dann wird das schwache Signal verstärkt, bevor es durch die Speiseleitung weiter abgeschwächt wird.

---

# Der Mischer

Ein Mischer ist eine nichtlineare Schaltung.

Er erhält mindestens zwei Frequenzen:

- Empfangssignal \(f_E\)
- Oszillatorsignal \(f_O\)

Am Ausgang entstehen unter anderem:

- Summe
- Differenz

der beiden Frequenzen.

Also grundsätzlich:

\[
f_\mathrm{sum} = f_E+f_O
\]

und:

\[
f_\mathrm{diff} = |f_E-f_O|
\]

Eine der entstehenden Frequenzen wird als:

**Zwischenfrequenz**

weiterverarbeitet.

---

# Zwischenfrequenz

Für den üblichen Fall einer Differenzmischung gilt:

\[
f_\mathrm{ZF} = |f_E-f_O|
\]

Beziehungsweise muss der lokale Oszillator so eingestellt werden, dass die gewünschte Zwischenfrequenz entsteht.

---

# Beispiel Zwischenfrequenz

Die gewünschte Empfangsfrequenz beträgt:

\[
f_E = 7{,}100\ \mathrm{MHz}
\]

Der lokale Oszillator arbeitet bei:

\[
f_O = 7{,}555\ \mathrm{MHz}
\]

Dann:

\[
f_\mathrm{ZF} = |7{,}100-7{,}555|
\]

\[
f_\mathrm{ZF} = 0{,}455\ \mathrm{MHz}
\]

also:

\[
f_\mathrm{ZF} = 455\ \mathrm{kHz}
\]

---

# Hohe und tiefe Oszillatorlage

Der lokale Oszillator kann grundsätzlich:

**oberhalb**

oder:

**unterhalb**

der Empfangsfrequenz liegen.

## Hohe Oszillatorlage

\[
f_O>f_E
\]

## Tiefe Oszillatorlage

\[
f_O<f_E
\]

Entscheidend ist, dass die gewünschte Zwischenfrequenz entsteht.

---

# Die Spiegelfrequenz

Der Mischer kann nicht erkennen, welches von zwei möglichen Eingangssignalen die gewünschte Frequenz ist, wenn beide gemeinsam mit dem Oszillator dieselbe Zwischenfrequenz erzeugen.

Dadurch entsteht das Problem der:

**Spiegelfrequenz**

---

# Beispiel Spiegelfrequenz

Unser Empfänger soll empfangen:

\[
f_E = 7{,}100\ \mathrm{MHz}
\]

mit:

\[
f_\mathrm{ZF} = 455\ \mathrm{kHz}
\]

Der Oszillator liegt oberhalb:

\[
f_O = 7{,}555\ \mathrm{MHz}
\]

Ein unerwünschtes Signal bei:

\[
8{,}010\ \mathrm{MHz}
\]

liefert ebenfalls:

\[
|8{,}010-7{,}555| = 0{,}455\ \mathrm{MHz}
\]

also dieselbe Zwischenfrequenz.

Damit könnte der Empfänger ohne ausreichende Vorselektion beide Signale verarbeiten.

Die Frequenz:

\[
8{,}010\ \mathrm{MHz}
\]

ist die Spiegelfrequenz.

---

# Berechnung der Spiegelfrequenz

Bei hoher Oszillatorlage gilt:

\[
f_S = f_E = + = 2f_\mathrm{ZF}
\]

Bei tiefer Oszillatorlage:

\[
f_S = f_E - 2f_\mathrm{ZF}
\]

Die aktuelle BAKOM-Formelsammlung enthält diese Beziehungen.

---

# Warum hilft eine hohe erste Zwischenfrequenz?

Der Abstand zwischen Nutz- und Spiegelfrequenz beträgt:

\[
2f_\mathrm{ZF}
\]

Eine höhere erste Zwischenfrequenz vergrössert deshalb den Abstand zur Spiegelfrequenz.

Dadurch kann die Eingangsvorselektion die Spiegelfrequenz leichter unterdrücken.

Eine niedrige Zwischenfrequenz besitzt dagegen Vorteile bei der Realisierung sehr schmaler Filter.

Daraus entstand historisch der:

**Doppelüberlagerungsempfänger**

---

# Doppelüberlagerung

Bei einem Doppel-Superhet wird das Signal zweimal umgesetzt.

Beispielsweise:

**Empfangsfrequenz → hohe erste ZF → tiefe zweite ZF → Demodulator**

Die hohe erste Zwischenfrequenz erleichtert:

**Spiegelfrequenzunterdrückung**

Die tiefere zweite Zwischenfrequenz erleichtert:

**schmale Selektion**

Moderne Empfänger können mehrere Umsetzungen verwenden oder diese Funktionen teilweise digital realisieren.

---

# ZF-Filter

Das Zwischenfrequenzfilter bestimmt wesentlich, wie breit der Empfänger empfängt.

Für verschiedene Betriebsarten werden unterschiedliche Bandbreiten benötigt.

Beispielsweise benötigt:

**CW**

eine wesentlich kleinere Empfangsbandbreite als:

**FM-Sprechfunk**

Je schmaler das Filter, desto besser können nahe Nachbarsignale unterdrückt werden.

Zu schmale Filter können jedoch auch Teile des gewünschten Signals abschneiden.

---

# ZF-Verstärker

Die Zwischenfrequenzverstärker verstärken das ausgewählte Signal.

Da die ZF fest ist, können diese Stufen auf eine genau definierte Frequenz optimiert werden.

In klassischen Empfängern entsteht ein grosser Teil der gesamten Verstärkung im ZF-Bereich.

---

# Demodulator

Der Demodulator gewinnt die ursprüngliche Information aus dem modulierten Hochfrequenzsignal zurück.

Je nach Betriebsart benötigt man unterschiedliche Verfahren.

Beispiele:

- AM-Demodulator
- FM-Diskriminator
- Produktdetektor für SSB
- BFO beziehungsweise Produktdetektor für CW

Die Modulationsverfahren werden in Kapitel 10 ausführlich behandelt.

---

# BFO

BFO bedeutet:

**Beat Frequency Oscillator**

Bei:

- SSB
- CW

fehlt am Empfängerausgang eines einfachen Demodulators ein geeigneter Träger beziehungsweise eine hörbare Differenzfrequenz.

Der BFO stellt ein zusätzliches Oszillatorsignal bereit.

Bei SSB ermöglicht es die Rückgewinnung der Sprache.

Bei CW erzeugt die Mischung einen hörbaren Ton.

---

# Beispiel CW

Ein CW-Signal wird im Empfänger mit einem leicht versetzten BFO-Signal gemischt.

Beträgt der Frequenzunterschied:

\[
700\ \mathrm{Hz}
\]

entsteht ein hörbarer:

\[
700\ \mathrm{Hz}
\]

Ton.

Ohne diese Frequenzdifferenz wäre ein ideal unmodulierter CW-Träger im Lautsprecher nicht als Ton hörbar.

---

# NF-Verstärker

Nach der Demodulation liegt die zurückgewonnene Information im Niederfrequenzbereich.

Die NF-Stufe:

- filtert
- verstärkt
- treibt Lautsprecher oder Kopfhörer

Beim Datenempfang kann das Signal stattdessen einer digitalen Verarbeitung zugeführt werden.

---

# Empfindlichkeit

Die:

**Empfindlichkeit**

beschreibt, wie schwach ein Eingangssignal sein darf, damit der Empfänger es noch mit einer definierten Qualität wiedergeben kann.

Eine Angabe allein wie:

\[
0{,}25\ \mathrm{\mu V}
\]

ist unvollständig.

Man benötigt zusätzlich beispielsweise ein gefordertes:

**Signal-Rausch-Verhältnis**

---

# Beispiel

Eine Angabe:

\[
0{,}25\ \mathrm{\mu V}
\]

bei:

\[
10\ \mathrm{dB}
\]

SNR bedeutet:

Bei einem Eingangssignal von 0,25 µV erreicht der Empfänger unter den angegebenen Messbedingungen ein Signal-Rausch-Verhältnis von 10 dB.

---

# Selektivität

Die:

**Selektivität**

beschreibt, wie gut ein Empfänger das gewünschte Signal von benachbarten Frequenzen trennen kann.

Sie wird wesentlich beeinflusst durch:

- Vorselektion
- ZF-Filter
- digitale Filter
- Filterflanken

## Nicht verwechseln

**Empfindlichkeit**

→ Wie schwach darf das gewünschte Signal sein?

**Selektivität**

→ Wie gut kann es von benachbarten Signalen getrennt werden?

---

# Ein empfindlicher Empfänger kann trotzdem schlecht sein

Ein Empfänger könnte extrem schwache Signale erkennen, aber bei einem starken Sender einige Kilohertz daneben vollständig überfordert sein.

Für einen guten Empfänger sind deshalb mehrere Eigenschaften wichtig:

- Empfindlichkeit
- Selektivität
- Grosssignalfestigkeit
- Dynamikbereich
- Rauschzahl
- Frequenzstabilität

---

# Dynamikbereich

Der:

**Dynamikbereich**

beschreibt vereinfacht den Bereich zwischen sehr schwachen noch nutzbaren Signalen und sehr starken Signalen, die der Empfänger noch ohne unerwünschte Effekte verarbeiten kann.

Im Amateurfunk ist das besonders wichtig.

Auf einem Band können gleichzeitig vorhanden sein:

- extrem schwache DX-Signale
- sehr starke lokale Stationen

Ein guter Empfänger muss mit beiden umgehen können.

---

# Übersteuerung

Ist ein Eingangssignal zu stark, können Empfängerstufen ausserhalb ihres linearen Bereichs arbeiten.

Mögliche Folgen:

- Verzerrungen
- Intermodulation
- scheinbare Signale
- Blocking
- Verlust schwacher Nutzsignale

Deshalb ist:

**maximale Verstärkung**

nicht immer die beste Einstellung.

---

# Abschwächer

Viele Empfänger besitzen einen:

**Attenuator**

beziehungsweise Abschwächer.

Dieser reduziert das Eingangssignal beispielsweise um:

\[
10\ \mathrm{dB}
\]

oder:

\[
20\ \mathrm{dB}
\]

Bei starken Eingangssignalen kann der Empfang dadurch paradoxerweise:

**besser**

werden.

Der Empfänger wird weniger übersteuert.

---

# Vorverstärker

Das Gegenteil ist ein:

**Preamp**

beziehungsweise HF-Vorverstärker.

Er kann bei sehr schwachen Signalen helfen, besonders wenn:

- das externe Rauschen gering ist
- nachfolgende Leitungen Verluste verursachen
- die Empfängerrauschzahl relevant ist

Auf rauschstarken Kurzwellenbändern bringt zusätzliche Vorverstärkung dagegen häufig keinen Vorteil.

---

# Thermisches Rauschen

Jeder Widerstand oberhalb des absoluten Nullpunktes erzeugt thermisches Rauschen.

Die Rauschleistung beträgt:

\[
P_N = kT_KB
\]

Dabei gilt:

- \(P_N\) = Rauschleistung
- \(k\) = Boltzmann-Konstante
- \(T_K\) = absolute Temperatur in Kelvin
- \(B\) = Bandbreite

---

# Der wichtigste Zusammenhang

Aus:

\[
P_N=kT_KB
\]

folgt:

> **Je grösser die Empfangsbandbreite, desto grösser die thermische Rauschleistung.**

Deshalb kann ein schmaleres Filter bei einem schmalbandigen Signal das Signal-Rausch-Verhältnis verbessern.

---

# Beispiel Bandbreite

Vergleichen wir:

\[
B_1 = 3,000\ \mathrm{Hz}
\]

mit:

\[
B_2 = 300\ \mathrm{Hz}
\]

Das Verhältnis beträgt:

\[
10
\]

Damit unterscheidet sich die thermische Rauschleistung um:

\[
10\ \mathrm{dB}
\]

Eine zehnmal kleinere Bandbreite enthält idealisiert also 10 dB weniger thermische Rauschleistung.

Das Nutzsignal muss dabei natürlich weiterhin in die gewählte Bandbreite passen.

---

# Signal-Rausch-Verhältnis

Das Verhältnis zwischen Nutzsignal und Rauschen wird als:

**Signal-Rausch-Verhältnis**

beziehungsweise:

**SNR**

bezeichnet.

Für Leistungen:

\[
\mathrm{SNR} = 10\cdot\lg\left(\frac{P_S}{P_N}\right)
\]

Für entsprechende Spannungsverhältnisse:

\[
\mathrm{SNR} = 20\cdot\lg\left(\frac{U_S}{U_N}\right)
\]

Ein grösserer positiver SNR-Wert bedeutet:

**Nutzsignal deutlicher gegenüber dem Rauschen**

---

# Rauschzahl

Ein realer Empfänger fügt dem Signal zusätzliches eigenes Rauschen hinzu.

Der:

**Rauschfaktor**

ist:

\[
F = \frac{(S/N)_\mathrm{Eingang}}{(S/N)_\mathrm{Ausgang}}
\]

Die logarithmische:

**Rauschzahl**

lautet:

\[
n_F = 10\cdot\lg(F)
\]

beziehungsweise:

\[
n_F = 10\cdot\lg\left(\frac{\mathrm{SNR}_\mathrm{Eingang}}{\mathrm{SNR}_\mathrm{Ausgang}}\right)
\]

---

# Gute oder schlechte Rauschzahl?

Eine ideale rauscharme Stufe würde das Signal-Rausch-Verhältnis nicht verschlechtern.

Dann wäre:

\[
F=1
\]

und:

\[
n_F=0\ \mathrm{dB}
\]

Ein realer Empfänger besitzt eine Rauschzahl:

\[
n_F > 0\ \mathrm{dB}
\]

Je kleiner die Rauschzahl, desto besser bezüglich intern hinzugefügtem Rauschen.

---

# AGC

AGC bedeutet:

**Automatic Gain Control**

beziehungsweise automatische Verstärkungsregelung.

Ein Empfänger muss Signale verarbeiten, deren Pegel sich um viele Grössenordnungen unterscheiden können.

Die AGC reduziert bei starken Signalen automatisch die Verstärkung.

Dadurch bleibt der Ausgangspegel besser kontrollierbar.

---

# Warum ist AGC nützlich?

Ohne AGC könnte:

- ein schwaches Signal kaum hörbar sein
- eine starke Station plötzlich extrem laut werden

Bei Kurzwellen-Fading verändert sich die Empfangsfeldstärke ausserdem laufend.

Die AGC kann diese Schwankungen teilweise ausgleichen.

---

# AGC schnell und langsam

Viele Empfänger bieten unterschiedliche Regelzeiten.

Beispielsweise:

**FAST**

→ schnelle Rückregelung

**SLOW**

→ langsamere Regelung

Welche Einstellung sinnvoll ist, hängt von:

- Betriebsart
- Signal
- persönlicher Präferenz

ab.

---

# S-Meter

Ein S-Meter zeigt eine vom Empfänger abgeleitete Signalstärke an.

Die Anzeige basiert häufig auf der AGC beziehungsweise einer internen Pegelmessung.

Wichtig:

> **S-Meter verschiedener Funkgeräte müssen nicht exakt gleich anzeigen.**

Die Anzeige ist kein Ersatz für eine kalibrierte Feldstärkemessung.

---

# Squelch

Squelch bedeutet:

**Rauschsperre**

Ist kein ausreichend starkes Signal vorhanden, wird die NF-Ausgabe stummgeschaltet.

Dadurch hört man im FM-Betrieb nicht permanent das typische Empfängerrauschen.

Sobald ein geeignetes Signal erkannt wird, öffnet der Squelch.

---

# Squelch und AGC nicht verwechseln

## AGC

regelt die:

**Verstärkung**

## Squelch

schaltet die:

**Audioausgabe**

bei fehlendem Signal stumm.

---

# RIT

RIT bedeutet:

**Receiver Incremental Tuning**

Damit kann die Empfangsfrequenz geringfügig verändert werden, ohne die eigene Sendefrequenz zu verändern.

Dies ist beispielsweise hilfreich, wenn die Gegenstation leicht neben der eigenen Empfangsfrequenz liegt.

---

# IF-Shift

IF bedeutet:

**Intermediate Frequency**

beziehungsweise Zwischenfrequenz.

Mit:

**IF-Shift**

kann die Lage des Empfangsfilters relativ zum Signal verändert werden.

Dadurch kann beispielsweise ein störendes Signal am Rand des Durchlassbereiches stärker unterdrückt werden.

---

# Notch-Filter

Ein:

**Notch-Filter**

beziehungsweise Kerbfilter unterdrückt einen sehr schmalen Frequenzbereich.

Damit kann beispielsweise ein einzelner störender Pfeifton innerhalb des Empfangsbandes abgeschwächt werden.

---

# Noise Blanker

Ein:

**Noise Blanker**

soll kurze impulsartige Störungen vermindern.

Typische Ursachen können sein:

- Zündfunken
- Schaltimpulse
- bestimmte elektrische Störquellen

Der Empfänger erkennt starke kurze Impulse und unterdrückt beziehungsweise überbrückt sie.

Ein Noise Blanker ist dagegen kein allgemeiner Filter gegen jedes Rauschen.

---

# Noise Reduction

Moderne Geräte besitzen häufig zusätzlich eine digitale:

**Noise Reduction**

Sie versucht mittels Signalverarbeitung Rauschanteile vom Nutzsignal zu unterscheiden.

Das ist etwas anderes als der:

**Noise Blanker**

## Nicht verwechseln

| Funktion | Hauptaufgabe |
| --- | --- |
| Noise Blanker | impulsförmige Störungen |
| Noise Reduction | kontinuierliches Rauschen mittels Signalverarbeitung |
| Notch | schmaler einzelner Störton |
| IF-Shift | Empfangsfilter relativ zum Signal verschieben |

---

# Teil 2: SDR-Empfänger

## Was bedeutet SDR?

SDR bedeutet:

**Software Defined Radio**

Bei einem SDR werden Funktionen, die früher ausschliesslich mit analogen Schaltungen realisiert wurden, teilweise oder weitgehend durch:

**digitale Signalverarbeitung**

übernommen.

Dazu können gehören:

- Mischen
- Filtern
- Demodulation
- AGC
- Notch-Filter
- Noise Reduction
- Spektrumanzeige

---

# ADC

Damit ein analoges HF-Signal digital verarbeitet werden kann, muss es zunächst digitalisiert werden.

Dazu dient ein:

**ADC**

Analog-to-Digital Converter.

Er wandelt die momentane analoge Spannung in digitale Zahlenwerte um.

---

# Einfaches SDR-Blockschaltbild

Ein moderner direkt abtastender SDR-Empfänger kann vereinfacht aufgebaut sein als:

**Antenne → Eingangsfilter → HF-Verstärker → ADC → digitale Signalverarbeitung → Audio**

Die digitale Verarbeitung übernimmt danach beispielsweise:

- Frequenzauswahl
- Mischen
- Filterung
- Demodulation

---

# Nicht jedes SDR tastet die Antennenfrequenz direkt ab

SDR ist ein Funktionsprinzip und keine einzige fest vorgeschriebene Schaltung.

Ein SDR kann vor dem ADC durchaus besitzen:

- analoge Filter
- Vorverstärker
- Mischer
- Zwischenfrequenzen

Entscheidend ist, dass wesentliche Funkfunktionen digital beziehungsweise softwaredefiniert realisiert werden.

---

# Digital Down Converter

In vielen digitalen Empfängern wird ein gewünschter Frequenzbereich rechnerisch auf eine niedrigere Frequenz umgesetzt.

Dies wird häufig als:

**DDC**

Digital Down Converter

bezeichnet.

Dabei können digital kombiniert werden:

- Oszillator
- Mischer
- Filter
- Abtastratenänderung

---

# Warum braucht auch ein SDR analoge Eingangsschaltungen?

Ein ADC besitzt einen begrenzten:

**Dynamikbereich**

Trifft ein extrem starkes ausserbandiges Signal auf den ADC, kann dieser übersteuert werden.

Deshalb bleiben auch bei einem SDR wichtig:

- Eingangsfilter
- Vorselektion
- geeignete Verstärkung
- Abschwächer

Software kann eine bereits übersteuerte ADC-Stufe nicht nachträglich reparieren.

---

# Wasserfall und Spektrum

Ein SDR kann einen grösseren Frequenzbereich gleichzeitig darstellen.

## Spektrum

zeigt:

**Amplitude über Frequenz**

## Wasserfall

zeigt zusätzlich:

**Frequenz und Signalstärke über die Zeit**

Dadurch können beispielsweise:

- Bandbelegung
- Störungen
- breite und schmale Signale
- Drift

visuell erkannt werden.

---

# Teil 3: Der Sender

## Aufgabe des Senders

Der Sender muss aus:

- Sprache
- CW
- Daten
- Bild
- anderen Informationen

ein geeignetes Hochfrequenzsignal erzeugen.

Dieses Signal muss:

- auf der richtigen Frequenz liegen
- die gewünschte Modulation besitzen
- ausreichend verstärkt werden
- spektral sauber sein

Danach gelangt es über die Speiseleitung zur Antenne.

---

# Vereinfachtes Senderblockschaltbild

Ein klassischer Sender kann vereinfacht aus folgenden Baugruppen bestehen:

1. Informationsquelle
2. NF- beziehungsweise Basisbandverarbeitung
3. Modulator
4. Frequenzaufbereitung
5. Mischer beziehungsweise Frequenzumsetzer
6. Treiber
7. Leistungsendstufe
8. Ausgangsfilter
9. Antenne

Je nach Senderarchitektur können einzelne Stufen:

- kombiniert
- mehrfach vorhanden
- vollständig digital realisiert

sein.

---

# Informationsquelle

Die Information kann beispielsweise stammen von:

- Mikrofon
- Morsetaste
- Computer
- TNC
- digitalem Modem
- Sensor

Das resultierende Signal wird zunächst aufbereitet.

---

# Mikrofonverstärker

Bei Sprechfunk liefert ein Mikrofon zunächst ein relativ kleines Niederfrequenzsignal.

Dieses wird:

- verstärkt
- gegebenenfalls gefiltert
- eventuell komprimiert

bevor es dem Modulator zugeführt wird.

Eine zu starke NF-Verstärkung kann den nachfolgenden Sender übersteuern.

---

# Frequenzaufbereitung

Ein Sender benötigt eine sehr stabile Hochfrequenz.

Historisch wurden unter anderem verwendet:

- Quarzoszillatoren
- VFO
- Frequenzvervielfacher

Moderne Geräte verwenden häufig:

- PLL
- DDS
- digitale Synthesizer

Die Details der Oszillatoren und PLL werden in Kapitel 11 behandelt.

---

# VFO

VFO bedeutet:

**Variable Frequency Oscillator**

Ein VFO erzeugt eine einstellbare Frequenz.

Bei älteren Funkgeräten wurde die Abstimmfrequenz häufig direkt oder indirekt durch einen analogen VFO bestimmt.

Ein wichtiger Qualitätsfaktor ist dessen:

**Frequenzstabilität**

---

# Quarzoszillator

Ein Quarzoszillator besitzt typischerweise eine wesentlich höhere Frequenzstabilität als ein einfacher frei schwingender LC-Oszillator.

Sein Nachteil ist, dass seine Frequenz ohne zusätzliche Schaltungen nur in engen Grenzen veränderbar ist.

---

# PLL

PLL bedeutet:

**Phase Locked Loop**

Eine PLL vergleicht die Phase beziehungsweise Frequenz eines Oszillators mit einer Referenz.

Durch Regelung kann der Oszillator stabil an diese Referenz gekoppelt werden.

Moderne Synthesizer können damit sehr viele stabile Frequenzen erzeugen.

Die genaue Schaltungstechnik einer PLL wird in [Kapitel 11](11-elektronische-bauteile-schaltungen.md#pll) vertieft.

---

# Modulator

Der:

**Modulator**

verbindet die Information mit dem Hochfrequenzsignal.

Je nach Verfahren wird beispielsweise verändert:

- Amplitude
- Frequenz
- Phase

Die einzelnen Modulationsverfahren folgen in Kapitel 10.

---

# Mischer im Sender

Auch ein Sender kann Mischer enthalten.

Ein Signal kann beispielsweise zunächst auf einer günstigen festen Zwischenfrequenz erzeugt und danach auf die gewünschte Sendefrequenz umgesetzt werden.

Das Grundprinzip ist dasselbe wie beim Empfänger:

**Mischung erzeugt Summen- und Differenzfrequenzen.**

Danach wird die gewünschte Frequenz herausgefiltert.

---

# Pufferstufe

Eine:

**Pufferstufe**

entkoppelt verschiedene Baugruppen voneinander.

Beispielsweise soll eine nachfolgende Stufe die Frequenz eines empfindlichen Oszillators möglichst nicht beeinflussen.

Vereinfacht:

**Oszillator → Puffer → weitere Senderstufen**

Dadurch verbessert sich unter anderem die Frequenzstabilität.

---

# Treiber

Die Ausgangsleistung des Modulators beziehungsweise Mischers genügt normalerweise nicht, um direkt die Senderendstufe voll anzusteuern.

Deshalb wird häufig eine:

**Treiberstufe**

verwendet.

Sie liefert die notwendige Steuerleistung für die Endstufe.

---

# Senderendstufe

Die:

**HF-Endstufe**

beziehungsweise:

**Power Amplifier, PA**

erhöht die Hochfrequenzleistung auf die gewünschte Senderleistung.

Beispiele:

\[
5\ \mathrm{W}
\]

für ein portables Gerät

oder:

\[
100\ \mathrm{W}
\]

für einen typischen Amateurfunktransceiver.

Andere Anlagen können deutlich andere Leistungen besitzen.

---

# Linearität

Bei Modulationsarten, bei denen die momentane Amplitude Information trägt, muss die Endstufe das Signal ausreichend:

**linear**

verstärken.

Dies ist beispielsweise bei:

- SSB
- AM

wichtig.

Eine übersteuerte Endstufe erzeugt:

- Verzerrungen
- zusätzliche Frequenzanteile
- Splatter

---

# Wirkungsgrad der Endstufe

Die Endstufe wandelt Gleichstromleistung in Hochfrequenzleistung um.

Der Wirkungsgrad lautet grundsätzlich:

\[
\eta = \frac{P_\mathrm{ab}}{P_\mathrm{zu}}
\]

Ein Teil der zugeführten Leistung wird als:

**Wärme**

verloren.

Deshalb benötigen Senderendstufen je nach Leistung:

- Kühlkörper
- Lüfter
- Temperaturüberwachung

---

# Beispiel

Eine Endstufe nimmt:

\[
200\ \mathrm{W}
\]

Gleichstromleistung auf.

Sie liefert:

\[
100\ \mathrm{W}
\]

HF-Leistung.

Dann:

\[
\eta = \frac{100}{200}
\]

\[
\eta = 0{,}5
\]

also:

\[
50%
\]

Die restlichen:

\[
100\ \mathrm{W}
\]

werden überwiegend als Verlustwärme umgesetzt.

---

# Ausgangsfilter

Eine nichtlineare Leistungsverstärkung kann Oberwellen erzeugen.

Deshalb befindet sich am Senderausgang typischerweise ein geeignetes:

- Tiefpassfilter
- Bandpassfilter

Das Filter soll:

**gewünschte Sendefrequenz passieren lassen**

und:

**unerwünschte Oberwellen dämpfen**

---

# Oberwellen

Oberwellen sind ganzzahlige Vielfache der Grundfrequenz.

Sendet ein Sender beispielsweise auf:

\[
14\ \mathrm{MHz}
\]

liegt die zweite Harmonische bei:

\[
28\ \mathrm{MHz}
\]

die dritte bei:

\[
42\ \mathrm{MHz}
\]

und so weiter.

Solche unerwünschten Aussendungen müssen ausreichend unterdrückt werden.

---

# Ausgangsfilter repariert keine Übersteuerung

Ein Ausgangstiefpass kann Oberwellen ausserhalb des Nutzbandes vermindern.

Es kann jedoch kein breit gewordenes SSB-Signal innerhalb des gleichen Frequenzbereichs reparieren.

Bei:

**Splatter durch Übersteuerung**

muss die Ursache beseitigt werden.

Beispielsweise:

- Mikrofonverstärkung reduzieren
- ALC korrekt betreiben
- Verstärker nicht übersteuern

---

# ALC

ALC bedeutet:

**Automatic Level Control**

beziehungsweise automatische Leistungsregelung.

Sie hilft, die Senderaussteuerung innerhalb des vorgesehenen Bereichs zu halten.

Bei korrekter Anwendung kann sie verhindern, dass Senderstufen unnötig übersteuert werden.

ALC ist jedoch kein Ersatz für eine grundsätzlich korrekte:

- Mikrofoneinstellung
- Endstufenauslegung
- Antennenanpassung

---

# Schutz bei schlechtem SWR

Moderne Sender überwachen häufig:

- Vorlaufleistung
- Rücklaufleistung
- Endstufentemperatur
- Stromaufnahme

Bei starkem Fehlabschluss kann die Steuerung die Ausgangsleistung reduzieren.

Dies schützt die Endstufe.

Es bedeutet jedoch nicht, dass ein schlechtes Antennensystem dadurch gut funktioniert.

---

# Sendereigenschaften

Ein guter Sender wird nicht nur durch hohe Ausgangsleistung definiert.

Wichtige Eigenschaften sind:

- Frequenzgenauigkeit
- Frequenzstabilität
- Ausgangsleistung
- spektrale Reinheit
- Oberwellenunterdrückung
- Nebenaussendungen
- Modulationsqualität
- belegte Bandbreite
- Linearität
- Wirkungsgrad

---

# Frequenzstabilität

Ein Sender soll während des Betriebs möglichst auf der eingestellten Frequenz bleiben.

Frequenzänderungen können entstehen durch:

- Temperatur
- Versorgungsspannung
- mechanische Einflüsse
- Bauteilalterung
- unzureichende Oszillatorstabilität

Bei schmalbandigen Betriebsarten ist hohe Stabilität besonders wichtig.

---

# Spektrale Reinheit

Ein idealer unmodulierter Sender würde nur die gewünschte Frequenz erzeugen.

Ein realer Sender kann zusätzlich erzeugen:

- Oberwellen
- Mischprodukte
- Phasenrauschen
- Nebenlinien
- unerwünschte Modulationsprodukte

Ein gutes Senderkonzept versucht diese möglichst gering zu halten.

---

# Phasenrauschen

Ein realer Oszillator besitzt kein mathematisch unendlich schmales Spektrum.

In seiner unmittelbaren Umgebung können Rauschanteile auftreten.

Dies wird als:

**Phasenrauschen**

bezeichnet.

Bei einem starken Sender kann schlechtes Phasenrauschen den Empfang schwacher Stationen auf benachbarten Frequenzen erschweren.

---

# Teil 4: SDR-Sender

## Digitale Signalaufbereitung

Bei einem SDR-Sender können Funktionen wie:

- Modulation
- Filterung
- Frequenzumsetzung
- Pegelregelung

digital berechnet werden.

Das digitale Signal wird anschliessend in ein analoges Signal umgewandelt.

---

# DAC

DAC bedeutet:

**Digital-to-Analog Converter**

Er wandelt digitale Zahlenwerte in eine analoge Spannung beziehungsweise ein analoges Signal um.

Ein vereinfachter SDR-Sender kann deshalb aufgebaut sein als:

**Mikrofon/Daten → ADC → DSP → DAC → HF-Stufen → Endstufe → Ausgangsfilter → Antenne**

Je nach Architektur kann die digitale Verarbeitung bereits direkt ein hochfrequentes Signal beziehungsweise eine geeignete Zwischenfrequenz erzeugen.

---

# Auch ein SDR braucht analoge HF-Technik

Software ersetzt nicht:

- Leistungsendstufe
- Ausgangsfilter
- Anpassung
- Antenne

Ein 100-W-SDR muss weiterhin physikalisch:

\[
100\ \mathrm{W}
\]

HF-Leistung erzeugen.

Auch ein digital erzeugtes Signal kann:

- übersteuert
- verzerrt
- unsauber gefiltert

werden.

---

# Teil 5: Der Transceiver

## Sender und Empfänger in einem Gerät

Die meisten modernen Amateurfunkgeräte sind:

**Transceiver**

Das Wort setzt sich zusammen aus:

**Transmitter**

und:

**Receiver**

Also:

**Sender + Empfänger**

Viele Baugruppen können gemeinsam genutzt werden.

---

# Gemeinsam genutzte Baugruppen

Beispielsweise:

- Frequenzsynthesizer
- Bedienung
- DSP
- Filter
- Antennenanschluss
- Steuerprozessor

Die Umschaltung zwischen Senden und Empfangen erfolgt durch entsprechende:

**TX/RX-Umschaltungen**

---

# T/R-Schalter

Beim Senden liegt am Antennenanschluss möglicherweise eine Leistung von:

\[
100\ \mathrm{W}
\]

Beim Empfang muss derselbe Empfänger Signale von nur:

\[
\mathrm{\mu V}
\]

oder weniger verarbeiten.

Der empfindliche Empfängereingang muss deshalb beim Senden zuverlässig von der hohen Senderleistung getrennt werden.

Dies übernimmt eine:

**Sende-Empfangs-Umschaltung**

---

# Vollduplex und Halbduplex

## Halbduplex

Senden und Empfangen erfolgen abwechselnd.

Das ist bei den meisten normalen Amateurfunk-QSOs der Fall.

## Vollduplex

Senden und Empfangen erfolgen gleichzeitig.

Dies kann beispielsweise beim Satellitenbetrieb sehr nützlich sein.

Das Funkgerät benötigt dafür entsprechend getrennte Signalwege und ausreichende Isolation.

---

# Drei Dinge, die man nicht verwechseln darf

## Empfindlichkeit und Selektivität

| Begriff | Bedeutung |
| --- | --- |
| Empfindlichkeit | wie schwach ein Signal sein darf |
| Selektivität | wie gut benachbarte Frequenzen getrennt werden |

## AGC und Squelch

| Begriff | Aufgabe |
| --- | --- |
| AGC | Verstärkung automatisch regeln |
| Squelch | Audio bei fehlendem Signal stummschalten |

## Mischer und Modulator

| Begriff | Grundaufgabe |
| --- | --- |
| Mischer | Frequenzen umsetzen |
| Modulator | Information auf einen Träger übertragen |

## ZF und Spiegelfrequenz

| Begriff | Bedeutung |
| --- | --- |
| Zwischenfrequenz | gewünschte feste Verarbeitungsfrequenz |
| Spiegelfrequenz | unerwünschte Eingangsfrequenz, die dieselbe ZF erzeugt |

## Filter und Verstärker

**Filter**

→ bestimmt, welche Frequenzen passieren

**Verstärker**

→ erhöht den Signalpegel

---

# Klassischer Empfänger und SDR im Vergleich

| Funktion | klassischer Empfänger | SDR |
| --- | --- | --- |
| Vorselektion | analog | meist weiterhin analog |
| Verstärkung | analog | analog und digital |
| Mischung | analoger Mischer | analog oder digital |
| Filterung | LC-, Quarz-, Keramikfilter | teilweise oder weitgehend DSP |
| Demodulation | analoge Schaltung | Software/DSP |
| Spektrumanzeige | Zusatzgerät | häufig integriert |
| AGC | analoge Regelung | häufig digital |

Die Grenzen sind in modernen Geräten fliessend.

Viele Funkgeräte sind Mischformen aus analoger HF-Technik und digitaler Signalverarbeitung.

---

# Klassischer Sender und SDR-Sender im Vergleich

| Funktion | klassischer Sender | SDR-Sender |
| --- | --- | --- |
| Modulation | analoge Schaltung | häufig DSP |
| Frequenzaufbereitung | Oszillator, PLL | Synthesizer, DSP |
| Filterung | analog | digital und analog |
| Endverstärkung | analog/HF-Leistungstechnik | weiterhin physische HF-Endstufe |
| Ausgangsfilter | analog | weiterhin erforderlich |

---

# Der gesamte Signalweg

## Empfangen

**Funkwelle**

→ Antenne

→ Vorselektion

→ HF-Verstärkung

→ Frequenzumsetzung beziehungsweise Digitalisierung

→ Selektion

→ Demodulation

→ NF beziehungsweise digitale Information

## Senden

**Information**

→ Signalaufbereitung

→ Modulation

→ Frequenzaufbereitung

→ Verstärkung

→ Ausgangsfilter

→ Antenne

→ Funkwelle

---

# HB9-Vertiefung: Rauschleistung

Die aktuelle BAKOM-Formelsammlung enthält:

\[
P_N = kT_KB
\]

mit:

\[
k = 1{,}38\times10^{-23}\ \mathrm{Ws/K}
\]

Die thermische Rauschleistung wächst linear mit:

- absoluter Temperatur
- Bandbreite

---

# HB9-Vertiefung: Bandbreitenänderung

Für zwei Bandbreiten gilt für die Änderung der Rauschleistung:

\[
\Delta p_N = 10\cdot\lg\left(\frac{B_1}{B_2}\right)
\]

Wird die Bandbreite beispielsweise von:

\[
2,400\ \mathrm{Hz}
\]

auf:

\[
600\ \mathrm{Hz}
\]

verkleinert, beträgt das Verhältnis:

\[
4
\]

Damit:

\[
\Delta p_N = 10\lg(4)
\]

\[
\Delta p_N \approx 6{,}0\ \mathrm{dB}
\]

Die thermische Rauschleistung sinkt also um ungefähr 6 dB.

---

# HB9-Vertiefung: Spiegelfrequenz

Für hohe Oszillatorlage:

\[
f_S = f_E = + = 2f_\mathrm{ZF}
\]

Für tiefe Oszillatorlage:

\[
f_S = f_E - 2f_\mathrm{ZF}
\]

Diese Formeln sollten nicht nur auswendig gelernt werden.

Man sollte verstehen, warum beide Frequenzen gemeinsam mit dem lokalen Oszillator dieselbe Zwischenfrequenz erzeugen.

---

# Lernschema Empfänger

Bei einer Empfängerfrage gehe in dieser Reihenfolge vor:

1. **Welche Empfangsfrequenz?**
2. **Welche Empfängerarchitektur?**
3. **Wo erfolgt die Selektion?**
4. **Gibt es einen Mischer?**
5. **Welche Oszillatorfrequenz?**
6. **Welche Zwischenfrequenz?**
7. **Gibt es eine Spiegelfrequenz?**
8. **Welche Filter bestimmen die Bandbreite?**
9. **Wie erfolgt die Demodulation?**
10. **Geht es um Empfindlichkeit oder Selektivität?**
11. **Ist der Empfänger durch starke Signale übersteuert?**
12. **Welche Zusatzfunktion hilft bei der konkreten Störung?**

---

# Lernschema Sender

Bei einer Senderfrage:

1. **Welche Information soll übertragen werden?**
2. **Welche Modulationsart?**
3. **Wie wird die Sendefrequenz erzeugt?**
4. **Wo erfolgt die Modulation?**
5. **Ist eine Frequenzumsetzung erforderlich?**
6. **Welche Stufe liefert die Treiberleistung?**
7. **Welche Stufe liefert die Senderausgangsleistung?**
8. **Ist lineare Verstärkung erforderlich?**
9. **Welche Ausgangsfilter sind vorhanden?**
10. **Ist das Signal spektral sauber?**
11. **Wird die Endstufe korrekt ausgesteuert?**

---

# Die wichtigsten Formeln auf einen Blick

Zwischenfrequenz bei Differenzmischung:

\[
f_\mathrm{ZF} = |f_E-f_O|
\]

Spiegelfrequenz bei hoher Oszillatorlage:

\[
f_S = f_E = + = 2f_\mathrm{ZF}
\]

Spiegelfrequenz bei tiefer Oszillatorlage:

\[
f_S = f_E - 2f_\mathrm{ZF}
\]

Thermische Rauschleistung:

\[
P_N = kT_KB
\]

Signal-Rausch-Verhältnis für Leistungen:

\[
\mathrm{SNR} = 10\cdot\lg\left(\frac{P_S}{P_N}\right)
\]

Signal-Rausch-Verhältnis für Spannungen:

\[
\mathrm{SNR} = 20\cdot\lg\left(\frac{U_S}{U_N}\right)
\]

Rauschfaktor:

\[
F = \frac{(S/N)_\mathrm{Eingang}}{(S/N)_\mathrm{Ausgang}}
\]

Rauschzahl:

\[
n_F = 10\cdot\lg(F)
\]

Wirkungsgrad:

\[
\eta = \frac{P_\mathrm{ab}}{P_\mathrm{zu}}
\]

---

# Merksätze

**Ein Empfänger muss das gewünschte Signal auswählen, verstärken und demodulieren.**

**Ein Sender muss ein sauberes moduliertes Hochfrequenzsignal erzeugen und verstärken.**

**Beim Superhet wird die Empfangsfrequenz auf eine feste Zwischenfrequenz umgesetzt.**

**Ein Mischer erzeugt unter anderem Summen- und Differenzfrequenzen.**

**Eine Spiegelfrequenz kann dieselbe Zwischenfrequenz wie das gewünschte Signal erzeugen.**

**Die Vorselektion hilft, Spiegelfrequenzen und starke unerwünschte Signale zu unterdrücken.**

**Empfindlichkeit beschreibt schwache Signale, Selektivität die Trennung benachbarter Signale.**

**Die ersten Empfängerstufen bestimmen wesentlich die Rauschzahl.**

**Eine grössere Empfangsbandbreite bedeutet mehr thermisches Rauschen.**

**AGC regelt die Verstärkung.**

**Squelch schaltet die NF bei fehlendem Signal stumm.**

**Ein BFO wird insbesondere für SSB- und CW-Empfang benötigt.**

**Ein Notch-Filter unterdrückt einen schmalen Störton.**

**Ein Noise Blanker bekämpft vor allem impulsförmige Störungen.**

**Auch ein SDR benötigt eine saubere analoge HF-Eingangsstufe.**

**Software kann einen bereits übersteuerten ADC nicht reparieren.**

**Die Senderendstufe erzeugt die notwendige HF-Ausgangsleistung.**

**Ein Ausgangsfilter unterdrückt unerwünschte Oberwellen.**

**Ein Ausgangsfilter repariert keine durch Übersteuerung verursachte breite Modulation.**

**ALC hilft, die Senderaussteuerung innerhalb des vorgesehenen Bereiches zu halten.**

**Ein guter Sender wird nicht nur nach Leistung, sondern auch nach spektraler Reinheit beurteilt.**

---

# Selbstkontrolle

Versuche die Fragen zuerst ohne Nachschlagen zu beantworten.

1. Was ist die grundlegende Aufgabe eines Empfängers?
2. Was unterscheidet einen Geradeausempfänger von einem Superhet?
3. Welche Aufgabe besitzt ein Mischer?
4. Was bedeutet Zwischenfrequenz?
5. Ein Empfänger arbeitet auf 7,100 MHz und sein Oszillator auf 7,555 MHz. Wie gross ist die ZF?
6. Warum kann bei einem Superhet eine Spiegelfrequenz auftreten?
7. Wo sollte die Spiegelfrequenz möglichst unterdrückt werden?
8. Was ist der Unterschied zwischen Empfindlichkeit und Selektivität?
9. Warum ist die erste rauscharme Empfängerstufe besonders wichtig?
10. Was geschieht mit der thermischen Rauschleistung, wenn die Bandbreite vergrössert wird?
11. Welche Aufgabe besitzt die AGC?
12. Was macht der Squelch?
13. Wofür wird ein BFO benötigt?
14. Was macht ein Notch-Filter?
15. Was ist der Unterschied zwischen Noise Blanker und Noise Reduction?
16. Was bedeutet SDR?
17. Welche Aufgabe besitzt ein ADC?
18. Warum braucht auch ein direkt abtastender SDR ein Eingangsfilter?
19. Was ist die grundlegende Aufgabe eines Senders?
20. Welche Aufgabe besitzt die HF-Endstufe?
21. Warum befindet sich am Senderausgang ein Filter?
22. Was ist eine Oberwelle?
23. Was geschieht bei Übersteuerung einer linearen Senderendstufe?
24. Welche Aufgabe besitzt die ALC?
25. Was ist ein Transceiver?

## Antworten

1. Das gewünschte Signal aus den an der Antenne vorhandenen Signalen auswählen, verstärken und die Information zurückgewinnen.
2. Beim Geradeausempfänger wird das Signal auf der Empfangsfrequenz verarbeitet und demoduliert. Beim Superhet wird es zunächst auf eine Zwischenfrequenz umgesetzt.
3. Er erzeugt aus zwei Eingangssignalen unter anderem Summen- und Differenzfrequenzen.
4. Eine feste Frequenz, auf welche das gewünschte Empfangssignal zur weiteren Verarbeitung umgesetzt wird.
5. \(f_\mathrm{ZF} = |7{,}100-7{,}555| = 0{,}455\ \mathrm{MHz}\)

also:

\[
455\ \mathrm{kHz}
\]

1. Weil neben der gewünschten Empfangsfrequenz eine zweite Eingangsfrequenz gemeinsam mit dem lokalen Oszillator dieselbe Zwischenfrequenz erzeugen kann.
2. Möglichst bereits in der Eingangsvorselektion.
3. Empfindlichkeit beschreibt, wie schwach ein Nutzsignal sein darf. Selektivität beschreibt die Trennung von Signalen auf benachbarten Frequenzen.
4. Weil dort hinzugefügtes Rauschen von späteren Verstärkern nicht wieder entfernt werden kann.
5. Sie steigt.
6. Sie regelt die Empfängerverstärkung automatisch abhängig vom Signalpegel.
7. Er schaltet die NF-Ausgabe bei fehlendem beziehungsweise zu schwachem Signal stumm.
8. Insbesondere zur Demodulation beziehungsweise hörbaren Umsetzung von SSB und CW.
9. Es dämpft einen sehr schmalen Frequenzbereich, beispielsweise einen störenden Pfeifton.
10. Ein Noise Blanker bekämpft kurze Impulsstörungen. Noise Reduction versucht kontinuierliche Rauschanteile mittels Signalverarbeitung zu vermindern.
11. Software Defined Radio.
12. Er wandelt ein analoges Signal in digitale Zahlenwerte um.
13. Um starke unerwünschte Signale zu dämpfen und eine Übersteuerung des ADC zu vermeiden.
14. Aus der zu übertragenden Information ein geeignetes, stabiles und sauberes Hochfrequenzsignal zu erzeugen und ausreichend zu verstärken.
15. Sie erzeugt die notwendige HF-Ausgangsleistung.
16. Um insbesondere unerwünschte Oberwellen und andere ausserhalb des gewünschten Bereiches liegende Signalanteile zu dämpfen.
17. Ein ganzzahliges Vielfaches der Grundfrequenz.
18. Es entstehen Verzerrungen und zusätzliche unerwünschte Frequenzanteile, beispielsweise Splatter.
19. Sie hilft, die Senderaussteuerung innerhalb des vorgesehenen Bereiches zu regeln.
20. Ein Gerät, das Sender und Empfänger kombiniert.

---

# Prüfungsbezug HB3 und HB9

Die aktuellen BAKOM-Prüfungsvorschriften verlangen ausdrücklich Kenntnisse zu:

## Empfänger

- Empfängertypen
- analoge Empfänger
- digitale Empfänger beziehungsweise SDR
- Blockdiagramme
- Funktionen der einzelnen Stufen
- Empfängereigenschaften

## Sender

- Sendertypen
- analoge Sender
- digitale Sender beziehungsweise SDR
- Blockdiagramme
- Funktionen der einzelnen Stufen
- Sendereigenschaften

Zusätzlich gehören zum aktuellen Prüfungsstoff unter anderem:

- Verstärker
- Filter
- Modulatoren
- Demodulatoren
- Oszillatoren
- Schwingkreise
- SDR-Grundlagen
- PLL

Die aktuelle BAKOM-Formelsammlung enthält für den Empfänger insbesondere:

- Zwischenfrequenz
- Spiegelfrequenz
- thermisches Rauschen
- Signal-Rausch-Verhältnis
- Rauschfaktor
- Rauschzahl

Ältere schweizerische Prüfungsunterlagen enthalten typische Aufgaben zu:

- Geradeaus- und Überlagerungsempfänger
- HF-Vorstufe
- AGC
- BFO
- RIT
- IF-Shift
- Notch-Filter
- Squelch
- Empfindlichkeit
- Signal-Rausch-Verhältnis
- ALC
- Pufferstufen
- Senderfilter

Diese älteren Fragen sind keine verbindliche aktuelle Prüfungsgrundlage, zeigen aber typische technische Zusammenhänge, die auch unter dem heutigen BAKOM-Prüfungsstoff weiterhin relevant sind.

Für HB9 sollte zusätzlich sicher verstanden werden:

- Berechnung von Zwischen- und Spiegelfrequenz
- Zusammenhang zwischen Bandbreite und Rauschleistung
- Signal-Rausch-Verhältnis
- Rauschzahl
- Dynamikbereich und Übersteuerung
- Funktion moderner SDR-Signalwege

Die Modulationsverfahren und Betriebsarten folgen in Kapitel 10.

# Navigation

[← Kapitel 8: Funkwellenausbreitung](08-funkwellenausbreitung.md)

[↑ Zurück zum Inhaltsverzeichnis](einfuehrung.md)

[Kapitel 10: Modulation und Betriebsarten →](10-modulation-betriebsarten.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
