---
title: Most Spin Bikes Setup
parent: Getting Started
nav_order: 2
layout: page
---

# Most Spin Bikes Setup
{: .no_toc }

Your hardware is mounted, the breakout cable is connected, and the SmartSpin2k is powered up. Now we'll get the SmartSpin2k Companion App talking to your bike so you can confirm everything works before you involve a cycling app. This page covers any spin bike that broadcasts power and cadence over Bluetooth, as well as any bike paired with a separate Bluetooth power meter.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}

---

## Before you start

- Hardware installed. If not, [start with installation](installation).
- SmartSpin2k powered on. The status LED should be lit.
- Your phone, with the SmartSpin2k Companion App installed. If you don't have it yet, the [configuration page](../documentation/configuration#using-the-smartspin2k-companion-app) has the App Store and Play Store links.
- Either a spin bike that broadcasts power and cadence over Bluetooth, or a Bluetooth power meter you've paired to your bike.

## Step 1: Connect the Companion App to your SmartSpin2k

1. Open the SmartSpin2k Companion App on your phone.
2. Tap **Scan**. The app looks for nearby SmartSpin2k devices over Bluetooth.
3. Your SmartSpin2k should appear in the list within a few seconds. Tap **Connect** next to it.

Once you're connected, the app shows your device's status screen. From here you can see live data and reach the Bluetooth settings. If your SmartSpin2k doesn't appear, make sure it's powered on, your phone's Bluetooth is on, and you're within a few feet of the device. Then tap **Scan** again.

## Step 2: Pair your bike's power source

This is where you tell the SmartSpin2k where its power and cadence numbers come from — your bike or your power meter.

1. In the Companion App, open the **Bluetooth** screen.
2. Tap **Scan** to look for nearby Bluetooth power sources.
3. Find your bike or power meter in the list:
   - **If your spin bike broadcasts power over Bluetooth** (most modern Schwinn IC4, Bowflex C6, NordicTrack, and similar bikes do), select your bike.
   - **If you've added a Bluetooth power meter** to a bike that doesn't broadcast power on its own, select your power meter instead.
4. The Companion App will save your selection and connect to it automatically from now on.

You don't need to choose differently based on brand — Schwinn, Bowflex, NordicTrack, and other Bluetooth-equipped spin bikes all use the same flow. Pick yours from the scan list.

{: .highlight }
**Heart rate monitor (optional).** This same Bluetooth screen is where you'd pair a heart rate monitor if you want SmartSpin2k to relay your heart rate. Useful for Apple TV users, who only have a couple of Bluetooth channels available to Zwift. You can skip this and come back to it later.

## Step 3: Confirm the data is flowing

Now check that the numbers actually move when you pedal.

1. Get on your bike.
2. Pedal at a comfortable cadence for ten or fifteen seconds.
3. Watch the live readout in the Companion App. You should see:
   - **Watts** climbing as you push harder, dropping when you ease off.
   - **Cadence** (in RPM) tracking your pedal speed.

If both numbers respond to what your legs are doing, the SmartSpin2k is reading your bike correctly. If the numbers stay at zero or look stuck, double-check that you selected the right device in Step 2 and that your bike (or power meter) is awake and broadcasting.

## Step 4: Test the shifter

Last check before you ride: the shifter.

1. Use the on-screen shifter in the Companion App to shift up a few times. You should hear the SmartSpin2k motor turn the resistance knob, and you should feel resistance increase if you're pedaling.
2. Shift back down a few times. Resistance should drop.
3. Now press the buttons on the **physical shifter** mounted on your handlebar. Same thing — up should add resistance, down should remove it.

If the physical shifter feels backwards (down adds resistance, up removes it), don't worry about it right now. You can flip the direction later from the [configuration settings](../documentation/configuration#what-do-all-these-settings-mean).

---

{: .highlight }
**That's the setup.** Your SmartSpin2k is paired to your bike, the data is flowing, and the shifter works. Most users go on to a cycling app like Zwift, Rouvy, or TrainerRoad for the full experience — that's the next page.

## Next: pair to your cycling app

When you're ready, head to [your first ride](first-ride) to pair SmartSpin2k to your cycling app.
