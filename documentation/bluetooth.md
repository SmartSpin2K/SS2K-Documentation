---
title: Bluetooth
parent: Documentation
layout: page
nav_order: 2
---
# Bluetooth Pairing Guide
{: .no_toc }

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## How SmartSpin2k handles Bluetooth

SmartSpin2k connects to your bike or power meter and your heart rate monitor, then passes everything on to your training app as one device. Your training app pairs with SmartSpin2k only. This helps on devices like Apple TV, which allow only a few Bluetooth connections.

You set up these connections once in the SmartSpin2k Companion App. SmartSpin2k reconnects to them on every ride.

Before you pair anything:

- Connect the Companion App to your SmartSpin2k. See [Connect the app]({% link getting-started/setup.md %}#part-3).
- Close any other app or device connected to your bike, power meter, or heart rate monitor. Most sensors accept one connection at a time. A Garmin watch or a phone app can hold the connection without you noticing.

## Pair your bike or power meter

SmartSpin2k ships with **Saved Power Meter** set to `none`. Pick your bike or power meter once.

1. Wake your bike or power meter. Pedal a few turns.
2. On the **Device** screen, tap **Settings**, then **Bluetooth**.
3. Tap **Saved Power Meter**.
4. Tap **SCAN**. Scanning takes up to 20 seconds.
5. Tap your bike or power meter in the list. A Schwinn IC4 or Bowflex C6 appears as **IC Bike**. Power meter pedals appear under their brand name.
6. Tap **SAVE**.

<div class="gs-shots">

{% include shot.html img="settings.png" alt="Settings screen with the Basic, Bluetooth, Network, and Advanced tiles" caption="Settings" %}

{% include shot.html img="settings-bluetooth.png" alt="Bluetooth settings screen listing Saved Power Meter and Saved HRM" caption="Bluetooth settings" %}

{% include shot.html img="saved-power-meter-ic4.png" alt="Saved Power Meter screen with IC Bike selected in the scan list, above the SCAN and SAVE buttons" caption="A Bluetooth bike selected" %}

{% include shot.html img="saved-power-meter-pedals.png" alt="Saved Power Meter screen with a pair of power meter pedals selected in the scan list, above the SCAN and SAVE buttons" caption="Power meter pedals selected" %}

</div>

{: .highlight }
**Power meter pedals on a Bluetooth bike?** If you ride power meter pedals on a bike that also reports power, such as a Schwinn IC4, pick the pedals. SmartSpin2k reads power from one source only, so the numbers stay steady.

### Peloton bikes

- **Peloton Bike:** nothing to pair. The sensor cable feeds power and cadence to SmartSpin2k. Leave **Saved Power Meter** set to `none`. See [Set Up Your Bike]({% link getting-started/setup.md %}#part-4).
- **Peloton Bike+:** pick **Grupetto FTMS** or your power meter pedals as the **Saved Power Meter**. See [Choose your power source]({% link getting-started/setup.md %}#part-4).

## Pair a heart rate monitor

SmartSpin2k can relay your heart rate to your training app. This step is optional.

1. Put on your heart rate monitor so it starts broadcasting.
2. On the **Device** screen, tap **Settings**, **Bluetooth**, then **Saved HRM**.
3. Tap **SCAN**, tap your monitor in the list, then tap **SAVE**.

<div class="gs-shots">

{% include shot.html img="saved-hrm.png" alt="Saved HRM screen with a heart rate monitor in the scan list and the SAVE button" %}

</div>

## Pair SmartSpin2k to your training app

Pick SmartSpin2k in your training app for Power, Smart Trainer or Controllable, Cadence, and Heart rate if you paired a monitor through it. See [Pair SmartSpin2k to your training app]({% link getting-started/first-ride.md %}#pair-smartspin2k-to-your-training-app).

SmartSpin2k accepts three app connections at a time, including the Companion App.

## Change or remove a saved device

To switch to a different bike, power meter, or heart rate monitor, repeat the steps above and pick the new device. The new pick replaces the old one.

To stop using a saved device, open **Saved Power Meter** or **Saved HRM**, pick `none`, and tap **SAVE**.

## Reconnect Bluetooth during your ride

If a sensor drops during a ride, you can make SmartSpin2k rescan with the shifter.

1. Press and hold both buttons on the shifter for 3 seconds.
2. Release.
3. SmartSpin2k rescans and reconnects your bike and sensors.

If power or cadence stays at zero, see [No power or cadence numbers]({% link documentation/troubleshooting.md %}#no-power-or-cadence-numbers).
