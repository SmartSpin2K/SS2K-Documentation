---
title: Peloton Bike (Original)
parent: Getting Started
layout: page
nav_order: 2
---
# Peloton Bike (Original)
{: .no_toc }

This page is for the original Peloton Bike, which connects to SmartSpin2k with a cable. Bike+ owners use the [Peloton Bike+]({% link getting-started/bike-plus.md %}) page.

**Guided Setup** in the SmartSpin2k Companion App covers these same steps on your phone.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## Before you start

- **In the box:** SmartSpin2k, arm, bike mount, knob insert, shifter, breakout cable with the **Peloton Sensor** and **Peloton Tablet** connectors, power adapter, O-Rings and velcro straps.
- A phone with the Companion App installed.
- A small flat screwdriver for the cable retention clip on the back of the Peloton tablet.
- A decision on Tablet Mode or Headless Mode. [Part 2](#part-2) explains both.
  - **Tablet Mode:** keep taking Peloton classes on the tablet, or run the Grupetto overlay.
  - **Headless Mode:** SmartSpin2k reads the bike on its own. The Peloton tablet is not needed for rides.

## Part 1 · Install the hardware {#part-1}

{% include gs/install.md %}

## Part 2 · Connect the cables {#part-2}

![](https://www.youtube.com/watch?v=e-WL4oaMo9g)

{% include step.html title="Connect the cables" img="wizard/wiring_harness_pelotonOriginal.webp" photo=true alt="Breakout cable diagram. Power runs to the wall adapter, Shifter to the shifter, and the Peloton Tablet and Peloton Sensor connectors branch off the cable into the SmartSpin2k." body="Plug the **Power** connector into the power adapter and the **Shifter** connector into the shifter. The next steps connect the bike's sensor cable." %}

### Sensor wiring

{% include step.html n=1 title="Release the Sensor Cable" img="wizard/sensor_wiring_tablet_back.svg" alt="Back of the Peloton tablet with the cable retention clip open and the sensor wire pulled down out of its port" body="Unlatch the cable retention clip on the back of the Peloton tablet. Use a small flat screwdriver if needed. Unplug the sensor wire from the tablet." %}

{% include step.html n=2 title="Connect to the SmartSpin2k" img="wizard/sensor_wiring_harness_connecting.svg" alt="Bike sensor wire plugging into the connector labeled Peloton Sensor on the SmartSpin2k breakout cable, with a close-up of the label" body="Plug the sensor wire into the **Peloton Sensor** connector on the SmartSpin2k breakout cable." %}

{% include step.html n=3 title="Connected" img="wizard/sensor_wiring_harness_connected.svg" alt="Bike sensor wire joined to the Peloton Sensor connector, with the retention clip on the back of the tablet still open" body="Leave the cable retention clip unlatched for now." %}

### Side switch

The bike sends power data to one device at a time, either the Peloton tablet or the SmartSpin2k. The **side switch** on the SmartSpin2k body picks which one.

**Tablet Mode (switch UP):** Pick this if you still take Peloton classes or want the Grupetto overlay. The tablet requests the data and SmartSpin2k listens.

**Headless Mode (switch DOWN):** Pick this if you do not plan to take Peloton classes. SmartSpin2k talks to the bike directly. The tablet can still run other apps.

{% tabs side-switch %}
{% tab side-switch Tablet Mode %}

{% include step.html n=1 title="Flip the Side Switch UP" img="wizard/side_switch_up.svg" alt="Side of the SmartSpin2k with arrows pointing up at the side switch, and a close-up of the switch in the UP position" body="Slide the **side switch** on your SmartSpin2k to the UP position." %}

{% include step.html n=2 title="Connect the Peloton Tablet Cable" img="wizard/side_switch_tablet_cable_connected.svg" alt="Connector labeled Peloton Tablet plugged into the tablet port the sensor wire used, with the sensor wire joined to the Peloton Sensor connector below" body="Plug the SmartSpin2k cable labeled **Peloton Tablet** into the tablet port the sensor wire used." %}

{% include step.html n=3 title="Re-latch the Cable Retention Clip" img="wizard/side_switch_tablet_clip_latched.svg" alt="Cable retention clip swung shut over the Peloton Tablet cable and the other tablet cable" body="Snap the cable retention clip back into place over the wires." %}

{% endtab %}
{% tab side-switch Headless Mode %}

{% include step.html n=1 title="Flip the Side Switch DOWN" img="wizard/side_switch_down.svg" alt="Side of the SmartSpin2k with arrows pointing down at the side switch, and a close-up of the switch in the DOWN position" body="Slide the **side switch** on your SmartSpin2k to the DOWN position." %}

{% include step.html n=2 title="Leave the Peloton Tablet Cable Disconnected" img="wizard/side_switch_tablet_cable_unused.svg" alt="Peloton Tablet connector left unplugged beside the bike and crossed out in a close-up, while the sensor wire stays joined to the Peloton Sensor connector" body="Do not plug the **Peloton Tablet** cable into your bike. Coil it out of the way." %}

{% include step.html n=3 title="Re-latch the Cable Retention Clip" img="wizard/side_switch_clip_latched.svg" alt="Cable retention clip swung shut over the one cable still plugged into the tablet, with the sensor wire joined to the Peloton Sensor connector below" body="Snap the cable retention clip back into place over the remaining tablet cable." %}

{: .caution }
**Going back to Peloton classes later?** Move the side switch UP and plug the Peloton Tablet cable back in first.

{% endtab %}
{% endtabs %}

## Part 3 · Connect the app {#part-3}

{% include gs/connect-app.md %}

## Part 4 · Choose your power source {#part-4}

There is nothing to pick on this bike. The sensor cable from Part 2 feeds power and cadence to the SmartSpin2k. Leave **Saved Power Meter** set to none. It is on the **Device** screen under **Settings**, then **Bluetooth**.

{: .caution }
**In Tablet Mode the bike sends data only during a ride.** Start a ride on the Peloton tablet (Just Ride works) or open the Grupetto overlay before you check the numbers. In Headless Mode, pedal.

Grupetto, installed on the Peloton tablet with [OpenPelo](https://github.com/doudar/Openpelo), is optional on this bike and shows live cadence and power during non-Peloton rides.

## Part 5 · Check the numbers {#part-5}

{% include gs/check-numbers.md wake='Tablet Mode: start a ride on the Peloton tablet (Just Ride), or open the Grupetto overlay. Headless Mode: pedal for a few seconds.' %}

## Part 6 · Test the shifter {#part-6}

{% include gs/test-shifter.md %}

## Part 7 · Optional: heart rate and WiFi {#part-7}

{% include gs/hr-wifi.md %}

## Part 8 · Your first ride {#part-8}

{% include gs/first-ride.md wake_title='Wake your bike.' wake='Tablet Mode: start a Just Ride on the Peloton tablet, or open Grupetto. Headless Mode: pedal a few seconds. With the tablet unplugged, the Peloton app cannot see your bike.' %}
