---
title: Peloton Bike+
parent: Getting Started
layout: page
nav_order: 3
---
# Peloton Bike+
{: .no_toc }

This page is for the Peloton Bike+, which connects to SmartSpin2k wirelessly. Original Peloton Bike owners use the [Peloton Bike (Original)]({% link getting-started/peloton.md %}) page.

**Guided Setup** in the SmartSpin2k Companion App covers these same steps on your phone.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## Before you start

- The parts from the box: SmartSpin2k, arm, bike mount, knob insert, shifter, breakout cable, power adapter, O-Rings and velcro straps.
- A phone with the Companion App installed.
- One power source: the Bike+ tablet with Grupetto installed (Part 4 covers installing it), or power meter pedals fitted to the bike.

## Part 1 · Install the hardware {#part-1}

{% include gs/install.md %}

## Part 2 · Connect the cables {#part-2}

{% include step.html title="Connect the cables" img="wizard/wiring_harness_BLE.webp" photo=true alt="Breakout cable diagram with Power plugged into the wall adapter and Shifter plugged into the shifter. The Peloton Tablet and Peloton Sensor connectors are crossed out." body="Plug the **Power** connector into the power adapter and the **Shifter** connector into the shifter." %}

{: .red }
**Do not connect the cables labeled Peloton Sensor or Peloton Tablet to your bike.** The Bike+ has no port for them. The headphone jack fits the plug and does nothing. Leave both connectors coiled and unplugged. Part 4 sets up the wireless connection.

<!-- TODO photo (assets-01): Bike+ headphone jack with the Peloton Sensor connector held beside it, not inserted -->

The switch on the side of the SmartSpin2k does nothing for your bike. Leave it where it is.

## Part 3 · Connect the app {#part-3}

{% include gs/connect-app.md %}

## Part 4 · Choose your power source {#part-4}

The Bike+ does not send power and cadence on its own, so pick one source.

{% tabs bike-plus-source %}
{% tab bike-plus-source Grupetto %}

Grupetto is a free app for the Bike+ tablet that sends power and cadence over Bluetooth.

{: .caution }
**Installing Grupetto changes the software on the Bike+ tablet.** Watch the full video before you start.

1. Install Grupetto on the Bike+ tablet with [OpenPelo](https://github.com/doudar/Openpelo). The video starts at the Grupetto step.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y2TonDgQtys?start=318" title="Install Grupetto with OpenPelo" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

{:start="2"}
2. Open Grupetto and turn on **BLE TX** in its settings.
3. Pedal a few turns. Grupetto shows live cadence and power.
4. In the Companion App, on the **Device** screen, tap **Settings**, **Bluetooth**, then **Saved Power Meter**.
5. Tap **SCAN**, tap **Grupetto FTMS** in the list, then tap **SAVE**.

<div class="gs-shots">

{% include shot.html img="saved-power-meter-grupetto.png" alt="Saved Power Meter screen with Grupetto FTMS selected in the scan list and the SAVE button" caption="Grupetto FTMS selected" %}

</div>

Leave Grupetto open while you ride.

{% endtab %}
{% tab bike-plus-source Power meter pedals %}

Power meter pedals, such as Favero Assioma or Garmin Rally, appear in the Companion App under their brand name.

1. Fit the pedals following the maker's instructions.
2. Pedal a few turns to wake them.
3. In the Companion App, on the **Device** screen, tap **Settings**, **Bluetooth**, then **Saved Power Meter**.
4. Tap **SCAN**, tap your pedals in the list, then tap **SAVE**.

<div class="gs-shots">

{% include shot.html img="saved-power-meter-pedals.png" alt="Saved Power Meter screen with power meter pedals selected in the scan list and the SAVE button" caption="Power meter pedals selected" %}

</div>

{% endtab %}
{% endtabs %}

## Part 5 · Check the numbers {#part-5}

{% include gs/check-numbers.md wake='Grupetto: pedal with Grupetto open and BLE TX on. Pedals: pedal a few seconds to wake them.' %}

## Part 6 · Test the shifter {#part-6}

{% include gs/test-shifter.md %}

## Part 7 · Optional: heart rate and WiFi {#part-7}

{% include gs/hr-wifi.md %}

## Part 8 · Your first ride {#part-8}

{% include gs/first-ride.md bikeplus=true wake_title='Wake your power source.' wake='Open Grupetto and check BLE TX is on, or pedal to wake your pedals. Pedal a few seconds. Grupetto or your pedals show live cadence and power.' %}
