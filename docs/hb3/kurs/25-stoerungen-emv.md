# Lektion 25: Störungen und EMV

!!! abstract "Das lernst du in dieser Lektion"
    - Wie Störungen entstehen
    - Was Oberwellen und Übersteuerung sind
    - Was du gegen Störungen tun kannst

*Dauer: etwa 25 Minuten. Voraussetzung: [Lektion 24](24-messen.md).*

## Was ist EMV?

**EMV** heisst **elektromagnetische Verträglichkeit**. Geräte sollen einander nicht stören und selbst nicht gestört werden.

Ein Störproblem hat immer drei Teile:

<div class="grafik" markdown="0"><svg style="width:540px;max-width:100%;height:auto;display:block;margin:1rem auto;" viewbox="0 0 580 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Störquelle, Kopplungsweg und Störsenke"><rect x="40" y="20" width="130" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="105.0" y="46.0">Störquelle</text><line stroke="currentColor" stroke-width="2" x1="170" x2="224" y1="42.0" y2="42.0"></line><polygon fill="currentColor" points="230,42.0 222,38.0 222,46.0"></polygon><rect x="230" y="20" width="130" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="295.0" y="39.0">Kopplungs-</text><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="295.0" y="53.0">weg</text><line stroke="currentColor" stroke-width="2" x1="360" x2="414" y1="42.0" y2="42.0"></line><polygon fill="currentColor" points="420,42.0 412,38.0 412,46.0"></polygon><rect x="420" y="20" width="130" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"></rect><text fill="currentColor" font-family="sans-serif" font-size="12" text-anchor="middle" x="485.0" y="46.0">Störsenke</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="105" y="92">zum Beispiel: Sender,</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="105" y="106">Schaltnetzteil</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="295" y="92">Luft, Netzleitung,</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="295" y="106">Kabel</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="485" y="92">Radio, Fernseher,</text><text fill="currentColor" font-family="sans-serif" font-size="11" text-anchor="middle" x="485" y="106">dein Empfänger</text></svg></div>

Das gilt in beide Richtungen: Dein Sender kann andere stören, und andere Geräte können deinen Empfang stören.

## Ursachen von Störungen

- **Oberwellen:** ein Sender erzeugt neben der Sendefrequenz auch Vielfache davon. Sie fallen auf andere Frequenzen und können zum Beispiel den Fernseher stören. Das **Tiefpassfilter** am Senderausgang dämpft sie (Lektion 19).
- **Übersteuerung:** ein sehr starkes Sendesignal kommt in ein fremdes Gerät (Radio, Verstärker, Telefon), das es nicht sauber verarbeitet. Das Gerät hört dich dann auf allen Programmen.
- **Zu breites Signal (Splatter):** Wenn du übersteuerst, wird dein Signal breit und stört Nachbarfrequenzen.
- **Leitungen als Antennen:** Kabel nehmen HF auf und führen sie ins Gerät.
- **Mantelwellen:** HF fliesst aussen auf dem Koaxkabel und strahlt ab.

## Störungen im eigenen Empfang (QRM)

Häufige Störquellen im Haus sind **Schaltnetzteile**, LED-Lampen, Computer, Ladegeräte und Heizungssteuerungen. Sie rauschen oder pfeifen im Empfänger.

## Was hilft?

1. **Störquelle finden:** Gerät für Gerät ausschalten und im Empfänger beobachten
2. **Antenne weg von der Störquelle:** Abstand hilft sehr
3. **Ferrite:** Ferritkerne oder -ringe auf Kabeln dämpfen Mantelwellen und Störungen auf Leitungen
4. **Filter:** Netzfilter oder Tiefpassfilter
5. **Abschirmung und Erdung:** metallische Gehäuse und gute Verbindungen
6. **Leistung senken:** wenn dein Sender ein fremdes Gerät stört, hilft weniger Leistung und ein sauberes Signal

Bei Empfangsstörungen empfiehlt das BAKOM, zuerst im eigenen Haushalt nach der Quelle zu suchen. Erst dann ist eine Meldung sinnvoll.

!!! note "Merksatz"
    Störquelle, Kopplungsweg, Störsenke. Wer einen der drei Teile unterbricht, löst das Problem.

!!! tip "Prüfungstipp"
    Oberwellen bekämpfst du mit einem Tiefpass am Senderausgang. Übersteuerung bekämpfst du mit weniger Pegel am Mikrofon.

## Mini-Übung

1. Welche drei Teile hat ein Störproblem?
2. Was sind Oberwellen?
3. Womit dämpft man Oberwellen am Sender?
4. Nenne zwei Störquellen im Haushalt.
5. Was machst du zuerst, wenn dein Empfang gestört ist?

??? success "Resultate anzeigen"

    | Aufgabe | Resultat |
    | --- | --- |
    | 1 | Störquelle, Kopplungsweg, Störsenke |
    | 2 | Vielfache der Sendefrequenz |
    | 3 | mit einem Tiefpassfilter |
    | 4 | zum Beispiel Schaltnetzteil und LED-Lampe |
    | 5 | Quelle im eigenen Haushalt suchen, Geräte einzeln ausschalten |

## Das Wichtigste in 3 Sätzen

- Eine Störung besteht aus Quelle, Kopplungsweg und Senke.
- Oberwellen dämpft ein Tiefpass, Übersteuerung vermeidest du mit weniger Pegel.
- Zuerst die Störquelle im eigenen Haus suchen.

**Weiter:** [Lektion 26: Sicherheit und Strahlung (NIS)](26-sicherheit-nis.md)

---

*© 1984 bis 2026 FerienBSD aka Marcel Sauder. Lizenz: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Du darfst die Inhalte teilen und bearbeiten, wenn du den Urheber nennst.*
