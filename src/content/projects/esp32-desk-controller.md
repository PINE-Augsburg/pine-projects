---
title: "ESP32 Desk Controller"

description: "Touchbasierte Schreibtischsteuerung für Beleuchtung, Relais, Audio und weitere Geräte."

category: "ESP32 / IoT"

status: "development"

technologies:
  - "ESP32-S3"
  - "ESPHome"
  - "LVGL"
  - "I2C"
  - "MQTT"

featured: true

date: 2026-08-17
---

# ESP32 Desk Controller

Der ESP32 Desk Controller ist eine zentrale Steuerung für meinen
Schreibtisch.

Ziel des Projekts ist es, verschiedene Verbraucher und Funktionen
über ein gemeinsames Touchdisplay zu steuern.

## Funktionen

- Touchdisplay
- Relaissteuerung
- LED-Steuerung
- Home-Assistant-Anbindung
- MQTT
- I2C-Erweiterungen

## Hardware

Zum Einsatz kommen unter anderem:

- ESP32-S3
- 3,5-Zoll-Touchdisplay
- MCP23017
- TCA9548A
- 8-Kanal-Relaismodul

## Software

Die Steuerung basiert auf ESPHome.

Für die Benutzeroberfläche wird LVGL eingesetzt.

## Status

Das Projekt befindet sich aktuell in Entwicklung.