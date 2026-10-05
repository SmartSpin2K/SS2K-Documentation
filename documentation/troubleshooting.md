---
title: Troubleshooting
parent: Documentation
layout: page
nav_order: 8
---
# Troubleshooting
{: .no_toc }

Each section matches a step in Getting Started and a screen in the Companion App. Pick the problem you see from the list below.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## Can't find your SmartSpin2k {#cant-find-your-smartspin2k}

Work through these checks in order when your SmartSpin2k does not appear on the scan screen.

1. Check that the SmartSpin2k is powered on and within range of your phone.
2. Turn your phone's Bluetooth off and on, then tap **SCAN** again.
3. Restart the SmartSpin2k. Unplug the power adapter, wait five seconds, and plug it back in.
4. Close other apps connected to the SmartSpin2k. Each SmartSpin2k allows three app connections, including the Companion App.
5. Ask in the [SmartSpin2k Facebook group](https://www.facebook.com/groups/716297469953492) if your SmartSpin2k still does not appear.

## No power or cadence numbers {#no-power-or-cadence-numbers}

Work through these checks in order when power or cadence stays at zero.

1. Pedal for a few seconds. Your bike or power meter sleeps when idle and wakes when you pedal.
2. Tap **Settings** on the **Device** screen, then **Bluetooth**, and confirm **Saved Power Meter** is not `none`. SmartSpin2k ships with it set to `none`.
3. Close any other app or device connected to your bike or power meter. Most sensors accept one connection at a time.
4. Restart your bike or power meter. Then tap **SCAN** on **Saved Power Meter**, pick it from the list, and tap **SAVE**.
5. Start a ride on a Peloton Bike in Tablet Mode. It sends data only during a ride. See [Peloton data only during a ride](#peloton-data-only-during-a-ride).
6. Turn on **BLE TX** in Grupetto if you ride a Bike+ with Grupetto. See [Grupetto FTMS is not listed](#grupetto-ftms-not-listed).

## The knob does not move {#knob-does-not-move}

Work through these checks in order when the knob stays still after a shift.

1. Check that the power LED on the SmartSpin2k is lit.
2. Seat the large breakout cable fully, with the arrows on both connectors lined up.
3. Plug the wire labeled **Shifter** into the shifter.
4. Tap **Virtual Shifter** on the **Device** screen, then tap **Shift up** and watch the knob.
5. Seat the knob insert on the bike's resistance knob.
6. Latch the arm's hook into the bike mount so the body cannot lift.

The **Virtual Shifter** screen shows a message when SmartSpin2k does not confirm a shift.

| Message | What to do |
|:--------|:-----------|
| No cadence detected yet. Start pedaling and try again. | Pedal, then tap **Shift up** again. |
| SmartSpin2k disconnected before the shift was confirmed. | Reconnect from the scan screen. Tap **SCAN**, then **CONNECT** on your SmartSpin2k. |
| Homing is active. Wait for it to finish before shifting. | Wait for the knob to stop moving, then shift again. |
| The requested shift exceeds the upper travel limit. | Tap **Shift down**. The knob is at the top of its range. |
| The requested shift exceeds the lower travel limit. | Tap **Shift up**. The knob is at the bottom of its range. |
| SmartSpin2k did not confirm the requested shift. | Pedal, then shift again. |

## The shifter works backwards {#shifter-works-backwards}

1. Tap **Settings** on the **Device** screen.
2. Tap **Basic**.
3. Tap **Swap Shifter Direction**.
4. Flip the switch.
5. Tap **SAVE**.

## Peloton data only during a ride {#peloton-data-only-during-a-ride}

In Tablet Mode (side switch UP), the Peloton tablet requests the bike's data, so the bike sends numbers only while a ride is running. Start a Just Ride in the Peloton app, or open the Grupetto overlay, before you check numbers. Headless Mode (side switch DOWN, Peloton Tablet cable unplugged) lets SmartSpin2k request the data itself.

See [Peloton Bike (Original)]({% link getting-started/setup.md %}?bike=peloton#part-2) to set up either mode.

## Grupetto FTMS is not listed {#grupetto-ftms-not-listed}

Work through these checks in order when **Grupetto FTMS** does not appear after a scan.

1. Open Grupetto on the Bike+ tablet.
2. Turn on **BLE TX** in Grupetto's settings.
3. Disconnect Grupetto from any other app or device.
4. Tap **SCAN** again and wait up to 20 seconds.

See [Peloton Bike+]({% link getting-started/setup.md %}?bike=bikeplus#part-4) for the full Grupetto setup.

## Calibration {#calibration}

Calibration is optional. SmartSpin2k rides fine without it. On a Bike+, calibrate only with Grupetto sending resistance. With power meter pedals alone, skip it.

For how it works and when to run it, see [Calibration]({% link getting-started/calibration.md %}).

If **Calibrate Trainer** fails on a bike with end stops, adjust **Homing Force** and try again.

1. Find **Homing Force** on the **Calibrate Trainer** screen, or under **Settings**, **Advanced**.
2. Lower it by about 10 if the motor kept pushing at the end.
3. Raise it by about 10 if the knob stopped before the end.
4. Tap **SAVE**, then tap **Try Again**.
