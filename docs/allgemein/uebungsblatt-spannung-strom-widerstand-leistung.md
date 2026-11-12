# Übungsblatt: Spannung, Strom, Widerstand, Leistung

Ein separates, ausdruckbares Übungsblatt zum Ohmschen Gesetz, zu Widerstandsschaltungen sowie zu elektrischer Leistung und Arbeit. Die Theorie dazu steht bereits ausführlich in [Kapitel 1: Elektrische Grundlagen](../hb9/01-elektrische-grundlagen.md). Dieses Blatt ergänzt sie um kompakte Merkdreiecke, Schaltbilder und durchnummerierte Rechenaufgaben zum Üben.

## Grundlagen U, R, I

### Die Spannung (U), der «Schubs»

Die Spannung ist die Kraft, die die Elektronen überhaupt erst dazu bringt, sich zu bewegen. Ohne Spannung passiert gar nichts. Sie ist wie der Druck in einer Wasserleitung: Wenn der Hahn zu ist, ist der Druck trotzdem da und drückt gegen die Dichtung. Einheit: Volt (V).

### Der Strom (I), der «Fluss»

Der Strom ist die tatsächliche Bewegung der Ladungsträger. Wenn der Wasserhahn geöffnet wird, fliesst Wasser; die Menge, die pro Sekunde durchfliesst, entspricht dem Strom. Einheit: Ampere (A).

### Der Widerstand (R), die «Bremse»

Jedes Material bremst die Elektronen ein wenig. Der Widerstand ist wie eine Verengung im Wasserrohr: je enger die Stelle, desto weniger Durchfluss. Einheit: Ohm (Ω).

### Das Ohmsche Gesetz: Merkdreieck

U, R und I sind untrennbar miteinander verbunden. Wer zwei Werte kennt, kann den dritten immer berechnen. Merkhilfe: das Dreieck. U steht oben, R und I stehen unten nebeneinander. Den gesuchten Buchstaben zudecken, übrig bleibt die Formel.

<div class="grafik" markdown="0"><svg style="width:180px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 200 180" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" points="100,10 10,170 190,170" stroke="#333" stroke-width="2.5"></polygon><line stroke="#333" stroke-width="2" x1="10" x2="190" y1="110" y2="110"></line><line stroke="#333" stroke-width="2" x1="100" x2="100" y1="110" y2="170"></line><text fill="#222" font-family="sans-serif" font-size="30" font-weight="700" text-anchor="middle" x="100" y="80">U</text><text fill="#222" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="55" y="150">R</text><text fill="#222" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="145" y="150">I</text><text fill="#666" font-family="sans-serif" font-size="20" text-anchor="middle" x="100" y="146">·</text></svg></div>

- U gesucht? U zudecken → übrig bleibt `R · I`
- I gesucht? I zudecken → übrig bleibt `U / R`
- R gesucht? R zudecken → übrig bleibt `U / I`

### Übungsaufgaben U, R, I

1. **Die Autobatterie:** Ein Funkgerät ist an eine 12-V-Batterie angeschlossen. Das Gerät hat einen Innenwiderstand von 6 Ω. Wie viel Strom (I) fliesst?
2. **Die Glühbirne:** Eine kleine Lampe verbraucht 2 A, wenn sie an 10 V angeschlossen ist. Wie gross ist ihr Widerstand (R)?
3. **Der Spannungsprüfer:** Ein Widerstand von 100 Ω wird von 0,5 A durchflossen. Welche Spannung (U) liegt an?
4. **Das Handy-Ladegerät:** Ein Ladegerät liefert 5 V. Ein Kabel hat einen Widerstand von 2 Ω. Wie viel Strom fliesst maximal durch das Kabel?
5. **Die Sicherung:** Eine Sicherung brennt bei 10 A durch. Ein Gerät mit 1,2 Ω ist an 12 V angeschlossen. Hält die Sicherung?
6. **Unbekannter Widerstand:** Gemessen werden 24 V und ein Strom von 0,1 A. Welchen Wert hat der Widerstand?
7. **Spannungsabfall:** An einem Widerstand von 220 Ω fliessen 0,05 A. Welche Spannung wird dort «verbraucht»?
8. **LED-Vorwiderstand:** Eine LED braucht 2 V. Die Batterie liefert 9 V, es müssen also 7 V am Widerstand abfallen. Wenn 0,02 A fliessen sollen, wie gross muss der Widerstand sein?

---

## Widerstände in Kombination

### Die Reihenschaltung (Serienschaltung)

Die Elektronen müssen nacheinander durch mehrere Widerstände fliessen, es gibt nur einen Weg.

<div class="grafik" markdown="0"><svg style="width:260px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><!-- battery --><line stroke="#333" stroke-width="3" x1="20" x2="20" y1="60" y2="100"></line><line stroke="#333" stroke-width="3" x1="30" x2="30" y1="70" y2="90"></line><text fill="#333" font-family="sans-serif" font-size="13" x="8" y="55">+</text><!-- wires --><line stroke="#333" stroke-width="2" x1="20" x2="20" y1="60" y2="20"></line><line stroke="#333" stroke-width="2" x1="20" x2="240" y1="20" y2="20"></line><line stroke="#333" stroke-width="2" x1="30" x2="30" y1="100" y2="140"></line><line stroke="#333" stroke-width="2" x1="30" x2="240" y1="140" y2="140"></line><line stroke="#333" stroke-width="2" x1="240" x2="240" y1="20" y2="140"></line><!-- R1 zigzag --><polyline fill="none" points="90,20 96,8 104,32 112,8 120,32 128,8 136,20" stroke="#333" stroke-width="2"></polyline><text fill="#222" font-family="sans-serif" font-size="15" text-anchor="middle" x="113" y="55">R1</text><!-- R2 zigzag --><polyline fill="none" points="160,20 166,8 174,32 182,8 190,32 198,8 206,20" stroke="#333" stroke-width="2"></polyline><text fill="#222" font-family="sans-serif" font-size="15" text-anchor="middle" x="183" y="55">R2</text><text fill="#222" font-family="sans-serif" font-size="15" x="0" y="85">V</text></svg></div>

- Der Strom ist überall in der Kette gleich gross: `Iges = I1 = I2`
- Die Spannung teilt sich auf: an jedem Widerstand fällt ein Teil der Gesamtspannung ab
- Formel: `Rges = R1 + R2 + R3 + …`
- Merksatz: in der Reihe wird der Widerstand immer **grösser**

### Die Parallelschaltung

Die Strecke teilt sich in mehrere Spuren auf, die Elektronen nehmen den einfachsten Weg.

<div class="grafik" markdown="0"><svg style="width:220px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><!-- battery --><line stroke="#333" stroke-width="3" x1="20" x2="20" y1="65" y2="95"></line><line stroke="#333" stroke-width="3" x1="30" x2="30" y1="72" y2="88"></line><!-- top / bottom rails --><line stroke="#333" stroke-width="2" x1="20" x2="20" y1="65" y2="20"></line><line stroke="#333" stroke-width="2" x1="20" x2="210" y1="20" y2="20"></line><line stroke="#333" stroke-width="2" x1="30" x2="30" y1="95" y2="140"></line><line stroke="#333" stroke-width="2" x1="30" x2="210" y1="140" y2="140"></line><!-- branch R1 --><line stroke="#333" stroke-width="2" x1="90" x2="90" y1="20" y2="55"></line><polyline fill="none" points="90,55 78,61 102,69 78,77 102,85 78,93 90,99" stroke="#333" stroke-width="2"></polyline><line stroke="#333" stroke-width="2" x1="90" x2="90" y1="99" y2="140"></line><text fill="#222" font-family="sans-serif" font-size="15" text-anchor="middle" x="65" y="80">R1</text><!-- branch R2 --><line stroke="#333" stroke-width="2" x1="150" x2="150" y1="20" y2="55"></line><polyline fill="none" points="150,55 138,61 162,69 138,77 162,85 138,93 150,99" stroke="#333" stroke-width="2"></polyline><line stroke="#333" stroke-width="2" x1="150" x2="150" y1="99" y2="140"></line><text fill="#222" font-family="sans-serif" font-size="15" text-anchor="middle" x="180" y="80">R2</text><line stroke="#333" stroke-width="2" x1="150" x2="210" y1="20" y2="20"></line><line stroke="#333" stroke-width="2" x1="150" x2="210" y1="140" y2="140"></line><text fill="#222" font-family="sans-serif" font-size="15" x="0" y="85">V</text></svg></div>

- Die Spannung ist an jedem Widerstand gleich gross: `Uges = U1 = U2`
- Der Strom teilt sich auf: durch den kleineren Widerstand fliesst mehr Strom
- Formel für zwei Widerstände: `Rges = (R1 · R2) / (R1 + R2)`
- Merksatz: parallel wird der Widerstand immer **kleiner**, und zwar kleiner als der kleinste Einzelwiderstand

### Die gemischte Schaltung (Gruppenschaltung)

Ein Teil der Schaltung liegt in Reihe, ein anderer Teil parallel.

<div class="grafik" markdown="0"><svg style="width:300px;height:auto;display:block;margin:1rem auto;" viewbox="0 -14 320 174" xmlns="http://www.w3.org/2000/svg"><!-- battery --><line stroke="#333" stroke-width="3" x1="20" x2="20" y1="65" y2="95"></line><line stroke="#333" stroke-width="3" x1="30" x2="30" y1="72" y2="88"></line><line stroke="#333" stroke-width="2" x1="20" x2="20" y1="65" y2="20"></line><line stroke="#333" stroke-width="2" x1="20" x2="80" y1="20" y2="20"></line><line stroke="#333" stroke-width="2" x1="30" x2="30" y1="95" y2="140"></line><line stroke="#333" stroke-width="2" x1="30" x2="290" y1="140" y2="140"></line><!-- R1 in series (top left) --><polyline fill="none" points="80,20 86,8 94,32 102,8 110,32 118,8 126,20" stroke="#333" stroke-width="2"></polyline><text fill="#222" font-family="sans-serif" font-size="14" text-anchor="middle" x="103" y="4">R1</text><line stroke="#333" stroke-width="2" x1="126" x2="150" y1="20" y2="20"></line><!-- parallel block R2 / R3 --><line stroke="#333" stroke-width="2" x1="150" x2="150" y1="20" y2="55"></line><polyline fill="none" points="150,55 138,61 162,69 138,77 162,85 138,93 150,99" stroke="#333" stroke-width="2"></polyline><line stroke="#333" stroke-width="2" x1="150" x2="150" y1="99" y2="140"></line><text fill="#222" font-family="sans-serif" font-size="14" text-anchor="middle" x="122" y="80">R2</text><line stroke="#333" stroke-width="2" x1="210" x2="210" y1="20" y2="55"></line><polyline fill="none" points="210,55 198,61 222,69 198,77 222,85 198,93 210,99" stroke="#333" stroke-width="2"></polyline><line stroke="#333" stroke-width="2" x1="210" x2="210" y1="99" y2="140"></line><text fill="#222" font-family="sans-serif" font-size="14" text-anchor="middle" x="238" y="80">R3</text><line stroke="#333" stroke-width="2" x1="150" x2="210" y1="20" y2="20"></line><!-- R4 in series after the parallel block --><line stroke="#333" stroke-width="2" x1="210" x2="234" y1="20" y2="20"></line><polyline fill="none" points="234,20 240,8 248,32 256,8 264,32 272,8 280,20" stroke="#333" stroke-width="2"></polyline><text fill="#222" font-family="sans-serif" font-size="14" text-anchor="middle" x="257" y="4">R4</text><line stroke="#333" stroke-width="2" x1="280" x2="290" y1="20" y2="20"></line><line stroke="#333" stroke-width="2" x1="290" x2="290" y1="20" y2="140"></line><text fill="#222" font-family="sans-serif" font-size="15" x="0" y="85">V</text></svg></div>

Lösungsstrategie:

1. Reine Teil-Schaltungen suchen (zum Beispiel zwei parallele Widerstände)
2. Deren Ersatzwiderstand berechnen
3. Die Gruppe gedanklich durch diesen einen Wert ersetzen
4. Es entsteht eine einfachere Schaltung, oft eine reine Reihenschaltung

### Übungsaufgaben Widerstandskombination

1. **Die Lichterkette:** Reihenschaltung von 10 Ω, 20 Ω und 30 Ω. Wie hoch ist der Gesamtwiderstand?
2. **Die Doppelspur:** Zwei Widerstände von je 100 Ω liegen parallel. Wie gross ist der Gesamtwiderstand?
3. **Spannungsteiler:** Zwei gleiche Widerstände (50 Ω) liegen in Reihe an 12 V. Welche Spannung liegt genau in der Mitte zwischen den beiden an?
4. **Der Stromfluss:** An einer Parallelschaltung von 20 Ω und 20 Ω liegt eine Spannung von 10 V an. Wie viel Strom fliesst insgesamt aus der Quelle? (Tipp: zuerst Rges berechnen.)
5. **Gemischte Gruppe A:** Ein Widerstand von 10 Ω liegt in Reihe zu einer Parallelschaltung aus zwei 20-Ω-Widerständen. Wie gross ist der Gesamtwiderstand der ganzen Gruppe?
6. **Gemischte Gruppe B:** Zwei parallele 60-Ω-Widerstände, dahinter in Reihe ein 70-Ω-Widerstand. Wie hoch ist Rges?
7. **Drei Spuren:** Drei Widerstände von je 30 Ω liegen parallel. Welchen Gesamtwiderstand ergibt das?
8. **Fehlersuche:** In einer Reihenschaltung aus 100 Ω und 200 Ω fliesst ein Strom von 0,1 A. Welche Gesamtspannung liegt an?

---

## Leistung und Arbeit

### Die elektrische Leistung (P)

Die Leistung gibt an, wie viel Arbeit in einem kurzen Augenblick verrichtet wird, zum Beispiel die Helligkeit einer Lampe. Einheit: Watt (W).

<div class="grafik" markdown="0"><svg style="width:180px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 200 180" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" points="100,10 10,170 190,170" stroke="#333" stroke-width="2.5"></polygon><line stroke="#333" stroke-width="2" x1="10" x2="190" y1="110" y2="110"></line><line stroke="#333" stroke-width="2" x1="100" x2="100" y1="110" y2="170"></line><text fill="#222" font-family="sans-serif" font-size="30" font-weight="700" text-anchor="middle" x="100" y="80">P</text><text fill="#222" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="55" y="150">U</text><text fill="#222" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="145" y="150">I</text></svg></div>

Merkhilfe «PUI»: Spannung mal Strom ergibt Leistung, `P = U · I`.

### Die elektrische Arbeit (W)

Die Arbeit ist die Leistung, die über eine bestimmte Zeitspanne verbraucht oder erzeugt wird. Einheit: Wattsekunde (Ws) beziehungsweise Wattstunden (Wh) oder Kilowattstunden (kWh).

<div class="grafik" markdown="0"><svg style="width:180px;height:auto;display:block;margin:1rem auto;" viewbox="0 0 200 180" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" points="100,10 10,170 190,170" stroke="#333" stroke-width="2.5"></polygon><line stroke="#333" stroke-width="2" x1="10" x2="190" y1="110" y2="110"></line><line stroke="#333" stroke-width="2" x1="100" x2="100" y1="110" y2="170"></line><text fill="#222" font-family="sans-serif" font-size="30" font-weight="700" text-anchor="middle" x="100" y="80">W</text><text fill="#222" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="55" y="150">P</text><text fill="#222" font-family="sans-serif" font-size="26" font-weight="700" text-anchor="middle" x="145" y="150">t</text></svg></div>

Formel: `W = P · t` (Leistung mal Zeit) oder `W = U · I · t` (Spannung mal Strom mal Zeit).

### Zusammenhang: Leistung und Widerstand

Wird der Strom nicht direkt, aber der Widerstand angegeben, helfen zwei kombinierte Formeln aus Ohmschem Gesetz und Leistungsformel weiter:

- Strom (I) und R bekannt: `P = I² · R`
- Spannung (U) und R bekannt: `P = U² / R`

### Übungsaufgaben Leistung und Arbeit

1. **Das Netzteil:** Ein Funkgerät zieht bei 13,8 V Spannung einen Strom von 20 A. Wie viel Leistung (P) nimmt es auf?
2. **Die Handfunke:** Ein Handfunksprecher sendet mit 5 W Leistung. Der Akku liefert 7,4 V. Wie viel Strom fliesst während des Sendens?
3. **Licht aus:** Eine Glühlampe mit 60 W brennt an 230 V. Wie gross ist der Stromfluss?
4. **Der Akku-Check:** Ein Funkgerät verbraucht konstant 10 W Leistung, während 5 Stunden. Wie viele Wattstunden (Wh) wurden verbraucht?
5. **Heizwirkung:** Durch einen Widerstand von 100 Ω fliesst ein Strom von 2 A. Wie viel Leistung wird dort in Wärme umgewandelt?
6. **Energiesparen:** Eine LED-Leuchte hat 10 W und brennt 24 Stunden lang. Wie viele Kilowattstunden (kWh) wurden verbraucht?
7. **Spannung gesucht:** Ein Gerät verbraucht 1000 W (1 kW), es fliesst ein Strom von 4,35 A. An welcher Spannung ist es angeschlossen?
8. **Widerstand der Heizung:** Eine Kaffeemaschine hat 2000 W bei 230 V. Wie gross ist ihr interner Widerstand?
9. **Dauerbetrieb:** Ein Empfänger braucht 12 W. Er läuft einen ganzen Monat (30 Tage) rund um die Uhr. Wie viel Arbeit (Wh) wurde verrichtet?

---

## Lösungen

Erst selbst rechnen, dann hier kontrollieren.

### Lösungen U, R, I

1. I = U/R = 12/6 = **2 A**
2. R = U/I = 10/2 = **5 Ω**
3. U = R·I = 100 · 0,5 = **50 V**
4. I = U/R = 5/2 = **2,5 A**
5. I = U/R = 12/1,2 = **10 A** — genau der Grenzwert, die Sicherung hält nicht mehr sicher
6. R = U/I = 24/0,1 = **240 Ω**
7. U = R·I = 220 · 0,05 = **11 V**
8. R = U/I = 7/0,02 = **350 Ω**

### Lösungen Widerstandskombination

1. Rges = 10 + 20 + 30 = **60 Ω**
2. Rges = (100 · 100)/(100 + 100) = **50 Ω**
3. Symmetrischer Spannungsteiler: genau die Hälfte von 12 V = **6 V**
4. Rges = (20 · 20)/(20 + 20) = 10 Ω, I = U/Rges = 10/10 = **1 A**
5. 20 Ω ∥ 20 Ω = 10 Ω, plus 10 Ω in Reihe = **20 Ω**
6. 60 Ω ∥ 60 Ω = 30 Ω, plus 70 Ω in Reihe = **100 Ω**
7. 30 Ω ∥ 30 Ω ∥ 30 Ω = 30/3 = **10 Ω**
8. Rges = 100 + 200 = 300 Ω, U = Rges·I = 300 · 0,1 = **30 V**

### Lösungen Leistung und Arbeit

1. P = U·I = 13,8 · 20 = **276 W**
2. I = P/U = 5/7,4 ≈ **0,68 A**
3. I = P/U = 60/230 ≈ **0,26 A**
4. W = P·t = 10 · 5 = **50 Wh**
5. P = I²·R = 2² · 100 = **400 W**
6. W = P·t = 10 · 24 = 240 Wh = **0,24 kWh**
7. U = P/I = 1000/4,35 ≈ **230 V**
8. R = U²/P = 230²/2000 ≈ **26,5 Ω**
9. W = P·t = 12 · (30 · 24) = 12 · 720 = 8640 Wh = **8,64 kWh**

---

*© 2026 Marcel Sauder. Alle Rechte vorbehalten. Vervielfältigung, Verbreitung oder Weitergabe, auch auszugsweise, nur mit ausdrücklicher schriftlicher Genehmigung.*
