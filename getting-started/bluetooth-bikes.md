---
title: Bluetooth Bikes and Power Meters
parent: Getting Started
layout: page
nav_order: 1
---
# Bluetooth Bikes and Power Meters
{: .no_toc }

This page covers any spin bike that sends power and cadence over Bluetooth (Schwinn IC4, Bowflex C6, Yesoul S3, and similar) and any bike with power meter pedals or a crank power meter.

Guided Setup in the SmartSpin2k Companion App covers these same steps on your phone.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## Before you start

- Everything in the box: SmartSpin2k, arm, bike mount, knob insert, shifter, breakout cable, power adapter, O-Rings and velcro straps.
- A phone with the Companion App installed.
- Your bike or power meter, awake and not connected to another app.

## Part 1 · Install the hardware {#part-1}

{% include gs/install.md %}

## Part 2 · Connect the cables {#part-2}

{% include step.html title="Connect the cables" img="wizard/wiring_harness_BLE.webp" photo=true alt="Breakout cable diagram. The wall adapter plugs into the Power connector and the shifter plugs into the Shifter connector. The Peloton Tablet and Peloton Sensor connectors are crossed out. An inset shows the cable plugged into the SmartSpin2k." body="Plug the **Power** connector into the power adapter and the **Shifter** connector into the shifter. Leave the **Peloton Tablet** and **Peloton Sensor** connectors unplugged." %}

The switch on the side of the SmartSpin2k does nothing for your bike. Leave it where it is.

## Part 3 · Connect the app {#part-3}

{% include gs/connect-app.md %}

## Part 4 · Choose your power source {#part-4}

SmartSpin2k starts with **Saved Power Meter** set to none. Pick your bike or power meter once. SmartSpin2k reconnects to it on every ride.

1. Wake your bike or power meter. Pedal a few turns. Close any other app connected to it.
2. On the **Device** screen, tap **Settings**, then **Bluetooth**.
3. Tap **Saved Power Meter**.
4. Tap **SCAN**. Scanning takes up to 20 seconds.
5. Tap your bike or power meter in the list. A Schwinn IC4 or Bowflex C6 appears as **IC Bike**. Pedals appear under their brand name.
6. Tap **SAVE**.

<div class="gs-shots">

{% include shot.html img="settings.png" alt="Settings screen with the Basic, Bluetooth, Network, and Advanced tiles" caption="Settings" %}

{% include shot.html img="settings-bluetooth.png" alt="Bluetooth settings screen listing Saved Power Meter and Saved HRM" caption="Bluetooth settings" %}

{% include shot.html img="saved-power-meter-ic4.png" alt="Saved Power Meter screen with IC Bike selected in the scan list, above the SCAN and SAVE buttons" caption="A Bluetooth bike selected" %}

{% include shot.html img="saved-power-meter-pedals.png" alt="Saved Power Meter screen with a pair of power meter pedals selected in the scan list, above the SCAN and SAVE buttons" caption="Power meter pedals selected" %}

</div>

## Part 5 · Check the numbers {#part-5}

{% include gs/check-numbers.md wake='Pedal for a few seconds. Your bike or power meter wakes and starts sending data.' %}

## Part 6 · Test the shifter {#part-6}

{% include gs/test-shifter.md %}

## Part 7 · Optional: heart rate and WiFi {#part-7}

{% include gs/hr-wifi.md %}

## Part 8 · Your first ride {#part-8}

{% include gs/first-ride.md wake_title='Wake your bike.' wake='Pedal a few seconds. Your bike or power meter wakes and SmartSpin2k picks it up over Bluetooth.' %}
