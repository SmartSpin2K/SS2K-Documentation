---
title: Set Up Your Bike
parent: Getting Started
layout: page
nav_order: 1
---
# Set Up Your Bike
{: .no_toc }

Pick your bike. The steps below change to match it. **Guided Setup** in the SmartSpin2k Companion App covers these same steps on your phone.

{% include gs/bike-picker.html %}

<div class="gs-pick-prompt" hidden>Pick your bike above to see your setup steps.</div>

## Before you start

<div data-bikes="spin pm" markdown="1">
- Everything in the box: SmartSpin2k, arm, bike mount, knob insert, shifter, breakout cable, power adapter, O-Rings and velcro straps.
- A phone with the Companion App installed.
- Your <span data-bikes="spin">bike</span><span data-bikes="pm">power meter</span>, awake and not connected to another app.
</div>

<div data-bikes="peloton" markdown="1">
- **In the box:** SmartSpin2k, arm, bike mount, knob insert, shifter, breakout cable with the **Peloton Sensor** and **Peloton Tablet** connectors, power adapter, O-Rings and velcro straps.
- A phone with the Companion App installed.
- A small flat screwdriver for the cable retention clip on the back of the Peloton tablet.
- A decision on Tablet Mode or Headless Mode. [Part 2](#part-2) explains both.
  - **Tablet Mode:** keep taking Peloton classes on the tablet, or run the Grupetto overlay.
  - **Headless Mode:** SmartSpin2k reads the bike on its own. The Peloton tablet is not needed for rides.
</div>

<div data-bikes="bikeplus" markdown="1">
- The parts from the box: SmartSpin2k, arm, bike mount, knob insert, shifter, breakout cable, power adapter, O-Rings and velcro straps.
- A phone with the Companion App installed.
- One power source: the Bike+ tablet with Grupetto installed (Part 4 covers installing it), or power meter pedals fitted to the bike.
</div>

## Part 1 · Install the hardware {#part-1}

{% include gs/install.md %}

## Part 2 · Connect the cables {#part-2}

<div data-bikes="spin pm" markdown="1">

{% include step.html title="Connect the cables" img="wizard/wiring_harness_BLE.webp" photo=true alt="Breakout cable diagram. The wall adapter plugs into the Power connector and the shifter plugs into the Shifter connector. The Peloton Tablet and Peloton Sensor connectors are crossed out. An inset shows the cable plugged into the SmartSpin2k." body="Plug the **Power** connector into the power adapter and the **Shifter** connector into the shifter. Leave the **Peloton Tablet** and **Peloton Sensor** connectors unplugged." %}

</div>

<div data-bikes="bikeplus" markdown="1">

{% include step.html title="Connect the cables" img="wizard/wiring_harness_BLE.webp" photo=true alt="Breakout cable diagram with Power plugged into the wall adapter and Shifter plugged into the shifter. The Peloton Tablet and Peloton Sensor connectors are crossed out." body="Plug the **Power** connector into the power adapter and the **Shifter** connector into the shifter." %}

{: .red }
**Do not connect the cables labeled Peloton Sensor or Peloton Tablet to your bike.** These wires are intended for the original Peloton Bike and should not be connected to the Bike+.

</div>

<p data-bikes="spin pm bikeplus">The switch on the side of the SmartSpin2k does nothing for your bike. Leave it where it is.</p>

<div data-bikes="peloton" markdown="1">

{% include youtube.html id="e-WL4oaMo9g" title="SmartSpin2k Peloton Bike setup" %}

{% include step.html title="Connect the cables" img="wizard/wiring_harness_pelotonOriginal.webp" photo=true alt="Breakout cable diagram. Power runs to the wall adapter, Shifter to the shifter, and the Peloton Tablet and Peloton Sensor connectors branch off the cable into the SmartSpin2k." body="Plug the **Power** connector into the power adapter and the **Shifter** connector into the shifter. The next steps connect the bike's sensor cable." %}

### Sensor wiring

<div class="gs-steps">

{% include step.html n=1 title="Release the Sensor Cable" img="wizard/sensor_wiring_tablet_back.svg" alt="Back of the Peloton tablet with the cable retention clip open and the sensor wire pulled down out of its port" body="Unlatch the cable retention clip on the back of the Peloton tablet. Use a small flat screwdriver if needed. Unplug the sensor wire from the tablet." %}

{% include step.html n=2 title="Connect to the SmartSpin2k" img="wizard/sensor_wiring_harness_connecting.svg" alt="Bike sensor wire plugging into the connector labeled Peloton Sensor on the SmartSpin2k breakout cable, with a close-up of the label" body="Plug the sensor wire into the **Peloton Sensor** connector on the SmartSpin2k breakout cable." %}

{% include step.html n=3 title="Connected" img="wizard/sensor_wiring_harness_connected.svg" alt="Bike sensor wire joined to the Peloton Sensor connector, with the retention clip on the back of the tablet still open" body="Leave the cable retention clip unlatched for now." %}

</div>

### Side switch

The bike sends power data to one device at a time, either the Peloton tablet or the SmartSpin2k. The **side switch** on the SmartSpin2k body picks which one.

**Tablet Mode (switch UP):** Pick this if you still take Peloton classes or want the Grupetto overlay. The tablet requests the data and SmartSpin2k listens.

**Headless Mode (switch DOWN):** Pick this if you do not plan to take Peloton classes. SmartSpin2k talks to the bike directly. The tablet can still run other apps.

{% tabs switch-mode %}
{% tab switch-mode Tablet Mode %}

<div class="gs-steps">

{% include step.html n=1 title="Flip the Side Switch UP" img="wizard/side_switch_up.svg" alt="Side of the SmartSpin2k with arrows pointing up at the side switch, and a close-up of the switch in the UP position" body="Slide the **side switch** on your SmartSpin2k to the UP position." %}

{% include step.html n=2 title="Connect the Peloton Tablet Cable" img="wizard/side_switch_tablet_cable_connected.svg" alt="Connector labeled Peloton Tablet plugged into the tablet port the sensor wire used, with the sensor wire joined to the Peloton Sensor connector below" body="Plug the SmartSpin2k cable labeled **Peloton Tablet** into the tablet port the sensor wire used." %}

{% include step.html n=3 title="Re-latch the Cable Retention Clip" img="wizard/side_switch_tablet_clip_latched.svg" alt="Cable retention clip swung shut over the Peloton Tablet cable and the other tablet cable" body="Snap the cable retention clip back into place over the wires." %}

</div>

{% endtab %}
{% tab switch-mode Headless Mode %}

<div class="gs-steps">

{% include step.html n=1 title="Flip the Side Switch DOWN" img="wizard/side_switch_down.svg" alt="Side of the SmartSpin2k with arrows pointing down at the side switch, and a close-up of the switch in the DOWN position" body="Slide the **side switch** on your SmartSpin2k to the DOWN position." %}

{% include step.html n=2 title="Leave the Peloton Tablet Cable Disconnected" img="wizard/side_switch_tablet_cable_unused.svg" alt="Peloton Tablet connector left unplugged beside the bike and crossed out in a close-up, while the sensor wire stays joined to the Peloton Sensor connector" body="Do not plug the **Peloton Tablet** cable into your bike. Coil it out of the way." %}

{% include step.html n=3 title="Re-latch the Cable Retention Clip" img="wizard/side_switch_clip_latched.svg" alt="Cable retention clip swung shut over the one cable still plugged into the tablet, with the sensor wire joined to the Peloton Sensor connector below" body="Snap the cable retention clip back into place over the remaining tablet cable." %}

</div>

{: .caution }
**Going back to Peloton classes later?** Move the side switch UP and plug the Peloton Tablet cable back in first.

{% endtab %}
{% endtabs %}

</div>

## Part 3 · Connect the app {#part-3}

{% include gs/connect-app.md %}

## Part 4 · Choose your power source {#part-4}

<div data-bikes="spin pm" markdown="1">

SmartSpin2k starts with **Saved Power Meter** set to none. Pick your <span data-bikes="spin">bike</span><span data-bikes="pm">power meter</span> once. SmartSpin2k reconnects to it on every ride.

{% capture pm_device %}your <span data-bikes="spin">bike</span><span data-bikes="pm">power meter</span>{% endcapture %}
{% capture pm_note %}<span data-bikes="spin">A Schwinn IC4 or Bowflex C6 appears as **IC Bike**.</span><span data-bikes="pm">Pedals appear under their brand name.</span>{% endcapture %}
1. Wake your <span data-bikes="spin">bike</span><span data-bikes="pm">power meter</span>. Pedal a few turns. Close any other app connected to it.
{% include gs/pair-power-meter.md device=pm_device note=pm_note %}

<div class="gs-shots">

{% include shot.html img="settings.png" alt="Settings screen with the Basic, Bluetooth, Network, and Advanced tiles" caption="Settings" %}

{% include shot.html img="settings-bluetooth.png" alt="Bluetooth settings screen listing Saved Power Meter and Saved HRM" caption="Bluetooth settings" %}

<div data-bikes="spin">{% include shot.html img="saved-power-meter-ic4.png" alt="Saved Power Meter screen with IC Bike selected in the scan list, above the SCAN and SAVE buttons" caption="A Bluetooth bike selected" %}</div>

<div data-bikes="pm">{% include shot.html img="saved-power-meter-pedals.png" alt="Saved Power Meter screen with a pair of power meter pedals selected in the scan list, above the SCAN and SAVE buttons" caption="Power meter pedals selected" %}</div>

</div>

</div>

<div data-bikes="peloton" markdown="1">

There is nothing to pick on this bike. The sensor cable from Part 2 feeds power and cadence to the SmartSpin2k. Leave **Saved Power Meter** set to none. It is on the **Device** screen under **Settings**, then **Bluetooth**.

{: .caution }
**In Tablet Mode the bike sends data only during a ride.** Start a ride on the Peloton tablet (Just Ride works) or open the Grupetto overlay before you check the numbers. In Headless Mode, pedal.

Grupetto, installed on the Peloton tablet with [OpenPelo](https://github.com/doudar/Openpelo), is optional on this bike and shows live cadence and power during non-Peloton rides.

</div>

<div data-bikes="bikeplus" markdown="1">

The Bike+ does not send power and cadence on its own, so pick one source.

{% tabs bike-plus-source %}
{% tab bike-plus-source Grupetto %}

Grupetto is a free app for the Bike+ tablet that sends power and cadence over Bluetooth.

{: .caution }
**Installing Grupetto changes the software on the Bike+ tablet.** Watch the full video before you start. It begins at the Grupetto step.

{% include youtube.html id="Y2TonDgQtys" start=318 title="Install Grupetto with OpenPelo" %}

1. Install Grupetto on the Bike+ tablet with [OpenPelo](https://github.com/doudar/Openpelo), following the video.
2. Open Grupetto and turn on **BLE TX** in its settings.
3. Pedal a few turns. Grupetto shows live cadence and power.
{% include gs/pair-power-meter.md device="**Grupetto FTMS**" %}

<div class="gs-shots">

{% include shot.html img="saved-power-meter-grupetto.png" alt="Saved Power Meter screen with Grupetto FTMS selected in the scan list and the SAVE button" caption="Grupetto FTMS selected" %}

</div>

Leave Grupetto open while you ride.

{% endtab %}
{% tab bike-plus-source Power meter pedals %}

Power meter pedals, such as Favero Assioma or Garmin Rally, appear in the Companion App under their brand name.

1. Fit the pedals following the maker's instructions.
2. Pedal a few turns to wake them.
{% include gs/pair-power-meter.md device="your pedals" %}

<div class="gs-shots">

{% include shot.html img="saved-power-meter-pedals.png" alt="Saved Power Meter screen with power meter pedals selected in the scan list and the SAVE button" caption="Power meter pedals selected" %}

</div>

{% endtab %}
{% endtabs %}

</div>

## Part 5 · Check the numbers {#part-5}

{% capture wake_check %}<span data-bikes="spin pm">Pedal for a few seconds. Your <span data-bikes="spin">bike</span><span data-bikes="pm">power meter</span> wakes and starts sending data.</span><span data-bikes="peloton">Tablet Mode: start a ride on the Peloton tablet (Just Ride), or open the Grupetto overlay. Headless Mode: pedal for a few seconds.</span><span data-bikes="bikeplus">Grupetto: pedal with Grupetto open and BLE TX on. Pedals: pedal a few seconds to wake them.</span>{% endcapture %}
{% include gs/check-numbers.md wake=wake_check %}

## Part 6 · Test the shifter {#part-6}

{% include gs/test-shifter.md %}

## Part 7 · Optional: heart rate and WiFi {#part-7}

{% include gs/hr-wifi.md %}

## Part 8 · Your first ride {#part-8}

{% capture wake_title %}<span data-bikes="spin pm peloton">Wake your bike.</span><span data-bikes="bikeplus">Wake your power source.</span>{% endcapture %}
{% capture wake_ride %}<span data-bikes="spin pm">Pedal a few seconds. Your <span data-bikes="spin">bike</span><span data-bikes="pm">power meter</span> wakes and SmartSpin2k picks it up over Bluetooth.</span><span data-bikes="peloton">Tablet Mode: start a Just Ride on the Peloton tablet, or open Grupetto. Headless Mode: pedal a few seconds. With the tablet unplugged, the Peloton app cannot see your bike.</span><span data-bikes="bikeplus">Open Grupetto and check BLE TX is on, or pedal to wake your pedals. Pedal a few seconds. Grupetto or your pedals show live cadence and power.</span>{% endcapture %}
{% include gs/first-ride.md wake_title=wake_title wake=wake_ride %}

<script src="{{ '/assets/js/setup-guide.js' | relative_url }}"></script>
