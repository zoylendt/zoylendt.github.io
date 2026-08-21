---
title: 
subtitle: 
description: 
permalink: 
date: 2026-98-21
publishDate: 2026-98-21
updated: 2026-98-21
draft: false
tags:
  - claude
  - german
---

# Fractal Design Terra – 12 Gaming-Setups

**Fixe Vorgaben:** 32 GB RAM · 2 TB NVMe · 2,5-Gbit-Ethernet · Nvidia-GPU als sinnvolles Upgrade der RTX 3060 12GB
*Stand: 15.08.2026 – Beispielpreise geizhals.de, ohne Versand*

---

## 1. Wichtige Vorbemerkung: die RAM-Preise

Das ist der größte Kostenblock nach der GPU. 32-GB-Kits (2×16 GB) DDR5-6000 CL30 liegen aktuell bei:

| Kit | Preis |
|---|---|
| Crucial Pro Overclocking 32GB CL36 | ab 399,99 € |
| Corsair Vengeance schwarz 32GB CL30 | ab 449,00 € |
| Corsair Vengeance RGB grau 32GB CL30 | ab 497,00 € |
| Corsair Vengeance grau 32GB CL30 EXPO | ab 501,56 € |
| Kingston FURY Beast schwarz 32GB CL30 | ab 523,42 € |

**Alle Kalkulationen unten rechnen mit 400 € (Crucial Pro OC).** Zum Vergleich: im Sommer 2025 kostete dasselbe Kit ~75 €. Wer nicht sofort bauen muss, sollte die Preisentwicklung beobachten – bei 32 GB fix als Anforderung ist das der Posten mit dem größten Sparpotenzial, falls sich der Markt entspannt.

## 2. Gemeinsame Basis aller 12 Setups

| Komponente | Produkt | Preis |
|---|---|---|
| Gehäuse | Fractal Design Terra (Graphite/Jade/Silver, preisgleich) | ca. 165 € |
| RAM | 32 GB (2×16 GB) DDR5-6000 CL30/36, EXPO/XMP | ca. 400 € |
| SSD | WD_BLACK SN7100 2 TB, PCIe 4.0 | ca. 163 € |
| **Basis-Summe** | | **ca. 728 €** |

Alle gelisteten Boards haben mindestens 2.5GbE (das MSI Edge TI sogar 5GbE) und 2 DIMM-Slots, die mit 2×16 GB voll belegt sind. Dual-Channel ist gesetzt – im Terra gibt es keinen dritten Slot, also gleich als Kit kaufen.

## 3. GPU-Optionen (alle passen ins Terra)

| GPU | Kompaktes Modell | VRAM | Preis ab | Leistung ggü. RTX 3060 |
|---|---|---|---|---|
| RTX 5060 Ti 16GB | PNY / ASUS Dual / Inno3D Twin X2 (2-Slot, ~200–240 mm) | 16 GB GDDR7 | ca. 399–410 € | ~+70–80 % |
| RTX 5070 12GB | Gigabyte Windforce OC SFF 12G | 12 GB GDDR7 | ca. 597 € | ~+110–130 % |
| RTX 5070 Ti 16GB | Zotac Solid SFF (2-Slot, 304 mm) | 16 GB GDDR7 | ca. 816 € | ~+170–190 % |
| RTX 5080 16GB | Gigabyte Windforce OC SFF 16G (304 × 126 × 50 mm) | 16 GB GDDR7 | ca. 1.199 € | ~+230–250 % |

Wichtig: Nvidia zertifiziert seit der 50er-Serie explizit **„SFF-Ready"-Karten** – Zotac Solid SFF und Gigabyte Windforce SFF sind genau dafür gebaut. <cite index="18-1">Die Zotac RTX 5070 Ti Solid SFF misst nur 2 Slots und 304 mm und empfiehlt mindestens 750 W Netzteil.</cite> Die Gigabyte 5080 SFF ist mit 50 mm Höhe etwas dicker – bei ihr wandert die Spine Richtung GPU, was das CPU-Kühlerbudget auf ca. 55–60 mm drückt.

**Zur RTX 5060 Ti 16GB:** <cite index="126-1">Sie zielt explizit auf Aufrüster von RTX 3060 und darunter und soll die Bildraten in 1440p nahezu verdoppeln.</cite> <cite index="122-1">Die 16-GB-Variante gilt als ausgezeichnete Wahl für 1080p und schafft auch 1440p mit hohen Einstellungen.</cite> Die 8-GB-Version bitte konsequent meiden – <cite index="120-1">mehrere deutsche Tests raten explizit von der 8-GB-Variante ab.</cite>

---

## 4. Die 12 Setups

### Setup 1 – Budget AMD: Ryzen 5 7600X + RTX 5060 Ti 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 5 7600X | 149,61 € |
| Board | ASRock B850I Lightning WiFi (2.5GbE) | 178,99 € |
| GPU | RTX 5060 Ti 16GB (PNY/ASUS Dual) | ca. 410 € |
| PSU | SFX 650 W Gold (Corsair SF650) | ca. 110 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.617 €** |

**+** Günstigster AM5-Einstieg, volle PCIe-5.0-x16-Anbindung, iGPU vorhanden, Upgrade-Pfad bis 9800X3D.
**−** Zen 4 statt Zen 5, 7600X wird unter Volllast wärmer als der 9600X (105 W vs. 65 W TDP-Klasse).
**Local AI:** brauchbar – 16 GB VRAM reichen für 14B-Modelle in Q4, iGPU kann das Display übernehmen.

### Setup 2 – Effizienz-Sweetspot: Ryzen 5 9600X + RTX 5060 Ti 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 5 9600X (65 W) | 172,00 € |
| Board | ASRock B850I Lightning WiFi | 178,99 € |
| GPU | RTX 5060 Ti 16GB | ca. 410 € |
| PSU | SFX 650 W Gold | ca. 110 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.639 €** |

**+** Zen 5 bei nur 65 W – im 10-Liter-Gehäuse die kühlste und leiseste 6-Kern-Wahl. Nur 22 € über Setup 1.
**−** Für die 5060 Ti sind 6 Kerne reichlich; kein Vorteil gegenüber Setup 1 in reinen Spielen.
**Local AI:** gut – AVX-512 (Zen 5) beschleunigt CPU-Offloading in llama.cpp spürbar.

### Setup 3 – 8 Kerne günstig: Ryzen 7 7700 + RTX 5060 Ti 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 7700 (8C/16T, 65 W) | ca. 155 € |
| Board | ASRock B850I Lightning WiFi | 178,99 € |
| GPU | RTX 5060 Ti 16GB | ca. 410 € |
| PSU | SFX 650 W Gold | ca. 110 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.622 €** |

**+** 8 Kerne zum Preis eines 6-Kerners, 65 W TDP – ideal fürs Terra. Beste Wahl, wenn nebenbei gestreamt oder aufgenommen wird.
**−** Zen 4; in reinen Spielen praktisch identisch zu Setup 1/2.
**Local AI:** gut – mehr Threads helfen beim Offloading großer Modelle.

### Setup 4 – Preisminimum: Core Ultra 5 225F + RTX 5060 Ti 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | Intel Core Ultra 5 225F | 121,90 € |
| Board | ASRock B860I WiFi (2.5GbE) | 137,89 € |
| GPU | RTX 5060 Ti 16GB | ca. 410 € |
| PSU | SFX 650 W Gold | ca. 110 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.548 €** |

**+** Günstigstes Setup der Liste, ~70–90 € unter den AM5-Pendants. Sehr sparsam im Idle.
**−** **Kein iGPU** beim „F"-Modell; LGA1851 mit unsicherer Upgrade-Zukunft (AM5 läuft noch bis mindestens 2027).
**Local AI:** eingeschränkt – ohne iGPU belegt der Desktop VRAM, der dann für Modelle fehlt.

### Setup 5 – Ausgewogen: Ryzen 5 9600X + RTX 5070 12GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 5 9600X | 172,00 € |
| Board | ASRock B850I Lightning WiFi | 178,99 € |
| GPU | Gigabyte RTX 5070 Windforce OC SFF 12G | ca. 597 € |
| PSU | SFX 650 W Gold | ca. 130 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.846 €** |

**+** Sauberer 1440p-Rechner, GPU und CPU gut ausbalanciert, moderate Abwärme.
**−** Nur 12 GB VRAM – dieselbe Kapazität wie die alte 3060. Für 2026 knapp bei Texturmods und 4K.
**Local AI:** mittelmäßig – 12 GB limitieren auf 8–14B-Modelle, Setup 2 mit 16 GB ist hier besser.

### Setup 6 – 8 Kerne + 5070: Ryzen 7 7700 + RTX 5070 12GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 7700 | ca. 155 € |
| Board | ASRock B850I Lightning WiFi | 178,99 € |
| GPU | Gigabyte RTX 5070 Windforce OC SFF 12G | ca. 597 € |
| PSU | SFX 650 W Gold | ca. 130 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.829 €** |

**+** Günstiger als Setup 5 bei zwei Kernen mehr – das beste Preis-Leistungs-Verhältnis in der 5070-Klasse.
**−** Zen 4, kein AVX-512; 12-GB-VRAM-Problem wie Setup 5.
**Local AI:** mittelmäßig, siehe Setup 5 – die Kerne helfen, der VRAM bremst.

### Setup 7 – X3D-Einstieg: Ryzen 7 7800X3D + RTX 5070 12GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 7800X3D (tray) | ca. 279 € |
| Board | ASRock B850I Lightning WiFi | 178,99 € |
| GPU | Gigabyte RTX 5070 Windforce OC SFF 12G | ca. 597 € |
| PSU | SFX 650 W Gold | ca. 130 € |
| Kühler | Thermalright AXP90-X47 Full Copper + Noctua NF-A9 | ca. 50 € |
| **Gesamt** | | **ca. 1.963 €** |

**+** 3D-V-Cache bringt in CPU-limitierten Titeln (Simulationen, Strategie, MMOs) 15–30 % mehr Frames als Setup 5/6.
**−** 120 W TDP – im Terra thermisch anspruchsvoller, Kühler wird wichtiger. Auslaufmodell, Tray-Preise schwanken.
**Local AI:** mittelmäßig – der V-Cache bringt für Inferenz nichts, 12 GB VRAM bleiben der Flaschenhals.

### Setup 8 – Netzwerk-Allrounder: Ryzen 7 9700X + RTX 5070 Ti SFF 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 9700X (8C/16T, Zen 5) | ca. 230 € |
| Board | MSI MPG B850I Edge TI WiFi (**5GbE**) | 246,88 € |
| GPU | Zotac RTX 5070 Ti Solid SFF 16GB | ca. 816 € |
| PSU | Corsair SF850 850 W Platinum | ca. 170 € |
| Kühler | Thermalright AXP90-X47 Full Copper | ca. 50 € |
| **Gesamt** | | **ca. 2.241 €** |

**+** Einziges Board mit 5GbE statt 2.5GbE; 8 Zen-5-Kerne mit AVX-512; große Leistungsreserve.
**−** Board ist 68 € teurer als das ASRock – 5GbE nützt nur mit passendem Switch/NAS.
**Local AI:** sehr gut – 16 GB VRAM plus AVX-512, könnte Modelle auch im Heimnetz bereitstellen.

### Setup 9 – X3D + 5070 Ti: Ryzen 7 7800X3D + RTX 5070 Ti SFF 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 7800X3D (tray) | ca. 279 € |
| Board | ASRock B850I Lightning WiFi | 178,99 € |
| GPU | Zotac RTX 5070 Ti Solid SFF 16GB | ca. 816 € |
| PSU | Corsair SF850 850 W Platinum | ca. 170 € |
| Kühler | Thermalright AXP90-X47 Full Copper | ca. 50 € |
| **Gesamt** | | **ca. 2.222 €** |

**+** Fast identischer Preis wie Setup 8, aber deutlich stärker in CPU-limitierten Spielen. Sehr rundes Gaming-Paket.
**−** Nur 2.5GbE; 7800X3D läuft aus, Verfügbarkeit schwankt.
**Local AI:** gut – 16 GB VRAM tragen 14B-Modelle komfortabel, Zen 4 ohne AVX-512-Bonus.

### Setup 10 – Gaming-Sweetspot ⭐: Ryzen 7 9800X3D + RTX 5070 Ti SFF 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 9800X3D | 369,99 € |
| Board | ASUS ROG Strix B850-I Gaming WiFi (2.5GbE, WiFi 7, starke VRMs) | 279,99 € |
| GPU | Zotac RTX 5070 Ti Solid SFF 16GB | ca. 816 € |
| PSU | Corsair SF850 850 W Platinum | ca. 170 € |
| Kühler | Noctua NH-L12Sx77 (77 mm) | ca. 60 € |
| **Gesamt** | | **ca. 2.424 €** |

**+** Schnellste Gaming-CPU am Markt + <cite index="27-1">eine GPU auf RTX-4080-Niveau</cite>. Kräftige Board-VRMs für Dauerlast im engen Gehäuse. Zukunftssicher für Jahre.
**−** ~200 € über Setup 9 für ~8–12 % mehr FPS. Der 9800X3D braucht im Terra Kühler-Sorgfalt (siehe Abschnitt 5).
**Local AI:** sehr gut – 16 GB VRAM, 8 Zen-5-Kerne mit AVX-512; der V-Cache selbst bringt nichts.

### Setup 11 – High-End: Ryzen 7 9800X3D + RTX 5080 SFF 16GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | AMD Ryzen 7 9800X3D | 369,99 € |
| Board | ASUS ROG Strix B850-I Gaming WiFi | 279,99 € |
| GPU | Gigabyte RTX 5080 Windforce OC SFF 16G | ca. 1.199 € |
| PSU | Corsair SF850 850 W Platinum | ca. 170 € |
| Kühler | Thermalright AXP90-X47 Full Copper (Spine Richtung GPU!) | ca. 50 € |
| **Gesamt** | | **ca. 2.807 €** |

**+** Kompromissloses 4K-Gaming in 10 Litern. Stärkste offiziell SFF-zertifizierte Nvidia-Karte.
**−** Die 5080 SFF ist 50 mm dick – die Spine muss Richtung GPU, das CPU-Kühlerbudget schrumpft auf ~55–60 mm. Gesamtabwärme ~480 W in einem winzigen Volumen; Lüfterkurven-Tuning ist Pflicht, nicht Kür.
**Local AI:** sehr gut – 16 GB GDDR7 mit hoher Bandbreite, schnellste Inferenz der Liste.

### Setup 12 – Intel-Mittelklasse: Core Ultra 5 235 + RTX 5070 12GB
| Teil | Modell | Preis |
|---|---|---|
| CPU | Intel Core Ultra 5 235 (mit iGPU + NPU) | ca. 220 € |
| Board | ASRock B860I Lightning WiFi (2.5GbE) | 176,66 € |
| GPU | Gigabyte RTX 5070 Windforce OC SFF 12G | ca. 597 € |
| PSU | SFX 650 W Gold | ca. 130 € |
| Kühler | Thermalright AXP90-X53 Full Copper | ca. 40 € |
| **Gesamt** | | **ca. 1.892 €** |

**+** iGPU für Display-Ausgabe + NPU; im Idle sehr sparsam; solide 1440p-Leistung.
**−** In Spielen hinter dem 9600X bei höherem Preis; LGA1851-Upgrade-Pfad unklar.
**Local AI:** mittelmäßig bis gut – NPU + OpenVINO/IPEX-LLM für leichte Aufgaben, aber nur 12 GB VRAM.

---

## 5. Kühler-Wahl – was die SFF-Community rät

Das Terra erlaubt <cite index="18-1">CPU-Kühler bis 77 mm</cite>, **aber nur wenn die GPU dünn genug ist** – bei einer 2-Slot-Karte (RTX 3060, 5060 Ti, 5070, 5070 Ti SFF) steht das volle Budget zur Verfügung, bei der 5080 SFF (50 mm) deutlich weniger.

**Erfahrungswerte aus der Community:**

- In einem viel gelesenen Thread auf **smallformfactor.net** (Dez. 2024) zur Kombination Terra + 9800X3D + großer GPU landete der Fragesteller beim <cite index="58-1">Thermalright AXP90-X47 Full Copper mit getauschtem Noctua-NF-A12x15-Lüfter; ein anderer Nutzer berichtete vom AXP90-X53 Full Copper, der als etwas höher, aber leistungsfähiger gilt und laut ihm bis ~155 W TDP abführt.</cite> Der X53 ist die bessere Wahl, solange die GPU 2 Slots hat; der X47 die Rückfallebene bei dickeren Karten.
- **Digital Trends** beschreibt einen Terra-Build, bei dem der Wechsel auf den <cite index="96-1">Noctua NH-L9x65 (65 mm) erst möglich wurde, weil die RTX 5090 FE eine echte 2-Slot-Karte ist – zuvor blieben mit einer RTX 4090 nur ~55 mm Kühlerhöhe, wofür ein ID-Cooling IS-55 gerade so reichte.</cite> Genau diese Logik gilt für deine Setups: 2-Slot-GPU wählen → besserer Kühler möglich → leiser.
- Noctua nennt das Terra selbst als Zielgehäuse: laut Tom's Hardware ist der <cite index="94-1">NH-L12Sx77 mit mehr Höhe und zwei zusätzlichen Heatpipes ausdrücklich für Gehäuse wie das Fractal Terra oder Louqe Raw S1 gedacht.</cite> Das ist der stärkste sinnvolle Luftkühler für Setup 10.
- Warnendes Beispiel: Ein Terra-Nutzer dokumentierte auf Printables, dass sein <cite index="93-1">NH-L9a-AM5 in Space Marine 2 bei rund 90 °C hing und auf 100 °C spitzte, was zum Abschalten führte</cite> – der flache NH-L9a (37 mm) ist für 65-W-Chips gedacht, nicht für 105–120-W-CPUs. Für X3D-Setups also mindestens X47/X53-Klasse einplanen.
- Ebenfalls aus diesem Beitrag, als Bau-Hinweis: Bei ihm kam <cite index="93-1">die mittlere „Spine" verbogen an, sodass Teile an den Seitenpanels schleiften; der RMA-Ersatz dauerte über einen Monat.</cite> Beim Auspacken also gleich prüfen.

**Empfehlung nach Setup:** 65-W-CPUs (9600X, 7700, Core Ultra) → AXP90-X53 (~40 €) genügt. X3D-CPUs mit 2-Slot-GPU → NH-L12Sx77 oder AXP90-X53 Full Copper. Setup 11 (5080 SFF) → AXP90-X47 Full Copper, plus Curve-Optimizer/PBO-Limit im BIOS.

## 6. Airflow & Staubfilter

**Airflow-Tuning (Community-Wissen):** In einem viel beachteten **r/sffpc**-Thread wurde eine gedruckte Platte vorgestellt, mit der die GPU im Terra umgedreht („flipped") montiert wird, damit sie ihre Abwärme direkt nach außen bläst statt ins Gehäuse. Der Entwickler dieser Platte empfiehlt in einem PCPartPicker-Thread, der ihn zitiert: <cite index="85-1">Lüfter oben als Auslass, unten ein 15-mm-Einlasslüfter; ein oben montierter Einlass senkt zwar die GPU-Temperatur um ~3 °C, die Gesamtsystemtemperatur ist aber mit Auslass besser. Außerdem: 3-mm-Abstandshalter zwischen Gehäuse und Bodenlüfter, weil das ovale Gittermuster des Terra bei zu dicht sitzenden Lüftern Turbulenzgeräusche erzeugt.</cite> Der Abstandshalter-Tipp kostet nichts und bringt hörbar Ruhe – auch ohne GPU-Flip.

*Transparenz-Hinweis: Reddit selbst ließ sich für diese Recherche nicht direkt abrufen; die r/sffpc-Inhalte oben stammen aus Foren-/PCPartPicker-Diskussionen, die den Thread zitieren, sowie aus Printables-Projektseiten von Terra-Nutzern. Die Zitate sind entsprechend als Sekundärquellen zu werten.*

**Staubfilter:** Das Terra hat werkseitig **keine** – und Standard-Magnetfilter haften nicht, weil die Panels aus eloxiertem Aluminium bestehen. Praktikable Lösungen:

1. **Zuschneidbare PVC-/Nylon-Filtermatte mit Magnetstreifen** (Rollen 30×100 cm, ~9–15 € bei eBay/Amazon): Streifen aufkleben, Mesh zuschneiden, magnetisch abnehmbar zum Reinigen. Die gängigste Lösung für Alu-Gehäuse.
2. **Klettband statt Magnet** – hält zuverlässig auf Alu, ist aber sichtbar; für die Unterseite (Haupteinlass) unkritisch.
3. **3D-Druck:** Auf Printables gibt es Terra-spezifische Teile, u. a. einen <cite index="64-1">92-mm-CPU-Lüfter-Duct, der die 10-mm-Lücke bei Verwendung des AXP90-X53 auf Spine-Position 4 schließt</cite> – Filterrahmen lassen sich analog drucken.
4. **Nur den Bodeneinlass filtern** und Überdruck erzeugen (Bodenlüfter als Einlass): reduziert ungefilterten Staubeintritt durch die übrigen Öffnungen deutlich.

Erfahrungswert aus Gehäusediskussionen allgemein: Filter verlängern die Reinigungsintervalle, ersetzen sie aber nicht – bei 10 Litern Volumen bleibt alle 2–3 Monate Ausblasen realistisch.

---

## 7. Vergleich aller 12 Setups

| # | CPU | GPU | VRAM | Gesamt | Kurzcharakter |
|---|---|---|---|---|---|
| 4 | Core Ultra 5 225F | RTX 5060 Ti | 16 GB | **1.548 €** | Preisminimum, kein iGPU |
| 1 | Ryzen 5 7600X | RTX 5060 Ti | 16 GB | 1.617 € | günstigster AM5-Einstieg |
| 3 | Ryzen 7 7700 | RTX 5060 Ti | 16 GB | 1.622 € | 8 Kerne, kühl, günstig |
| 2 | Ryzen 5 9600X | RTX 5060 Ti | 16 GB | 1.639 € | kühlster/leisester Einstieg |
| 6 | Ryzen 7 7700 | RTX 5070 | 12 GB | 1.829 € | bestes P/L in der 5070-Klasse |
| 5 | Ryzen 5 9600X | RTX 5070 | 12 GB | 1.846 € | ausgewogen, Zen 5 |
| 12 | Core Ultra 5 235 | RTX 5070 | 12 GB | 1.892 € | Intel mit iGPU + NPU |
| 7 | Ryzen 7 7800X3D | RTX 5070 | 12 GB | 1.963 € | X3D-Einstieg |
| 9 | Ryzen 7 7800X3D | RTX 5070 Ti SFF | 16 GB | 2.222 € | starkes Gaming-Paket |
| 8 | Ryzen 7 9700X | RTX 5070 Ti SFF | 16 GB | 2.241 € | 5GbE, Zen 5, Allrounder |
| 10 ⭐ | Ryzen 7 9800X3D | RTX 5070 Ti SFF | 16 GB | 2.424 € | Gaming-Sweetspot |
| 11 | Ryzen 7 9800X3D | RTX 5080 SFF | 16 GB | 2.807 € | 4K-Maximum, thermisch grenzwertig |

### Empfehlungen

- **Bestes Preis-Leistungs-Verhältnis: Setup 3** (7700 + 5060 Ti 16GB, 1.622 €). Acht Kerne, 16 GB VRAM, niedrige Abwärme, deutlich schneller als die 3060 – und der günstigste Punkt, an dem nichts Wesentliches fehlt.
- **Bester Kompromiss aus Preis und Zukunft: Setup 9** (7800X3D + 5070 Ti SFF, 2.222 €). Fast Setup-10-Leistung für 200 € weniger.
- **Wenn Budget zweitrangig ist: Setup 10.** Der 9800X3D altert langsamer als jede andere Gaming-CPU, die 5070 Ti SFF ist die stärkste Karte, die im Terra noch ohne thermische Klimmzüge läuft.
- **Setup 11 nur mit Bedacht:** Machbar, aber die dickere GPU kostet Kühlerhöhe genau dort, wo der 9800X3D sie bräuchte. Wer 4K will und Ruhe schätzt, ist mit derselben GPU in einem größeren Gehäuse besser bedient.
- **Vermeiden würde ich** die 12-GB-Setups (5/6/7/12), *falls* VRAM-Kapazität wichtig ist – sie bieten gegenüber deiner RTX 3060 zwar viel mehr Rechenleistung, aber keinen Speicherzuwachs. Die 5060-Ti-16GB-Setups sind billiger und die 5070-Ti-16GB-Setups deutlich stärker; die 5070 12GB sitzt unglücklich dazwischen.

### Zur Local-AI-Eignung (nachrangig, wie gewünscht)

Kurz zusammengefasst: **16 GB VRAM + 32 GB RAM** ist die klar bessere AI-Basis als 12 GB, deshalb schneiden die Setups 1–4 und 8–11 besser ab als 5–7 und 12. Zen-5-CPUs (9600X, 9700X, 9800X3D) bringen per AVX-512 einen zusätzlichen Vorteil beim Offloading. Eine iGPU (alle AMD-Modelle hier, Core Ultra 5 235, **nicht** der 225F) hält den VRAM frei fürs Modell. Keines dieser Setups läuft in 70B-Klassen – aber alle tragen 8–14B-Modelle für Chat, Coding-Assistenz und Bildgenerierung problemlos.

---

*Preise: geizhals.de, Stand 15.08.2026, ohne Versand. RAM- und GPU-Preise schwanken derzeit stark – vor dem Kauf tagesaktuell prüfen. Mit „ca." markierte Werte sind gerundete Richtwerte aus mehreren Angeboten.*
