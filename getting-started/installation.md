---
title: Installation
parent: Getting Started
layout: page
nav_order: 1
---
# Installation Guide
{: .no_toc }

Setup has two parts. First you mount the SmartSpin2k hardware on your bike — that's the same for everyone. Then you connect your wiring, which depends on the bike you ride.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## Installation Video
![](https://www.youtube.com/watch?v=yVXgECHQq3w)

---

## Step 1: Mount the Hardware

These mounting steps are the same for every bike. Do these first, then move on to wiring.

1. Using some O-Rings, mount the shifter onto your bike's handlebar.
    ![Wired shifter mounted on handlebar](../images/shifter.jpg)
1. Use a 30mm bolt and hex nut to install the arm to the SmartSpin2k body.
1. Install another 30mm bolt and hex nut onto the bike mount. Attach the bike mount to the front tube of your bike using a cable tie, velcro straps, or o-rings.
    ![](../images/yoke_mounting.webp)
1. Place the SmartSpin2k onto your bike, and snap the arm onto the bike mount.
    ![Mount SS2K on Bike](../images/attach_smartspin2k.webp)

---

## Step 2: Connect Your SmartSpin2k

The breakout cable has four connectors, each labeled on the wire:

![SmartSpin2k V2 breakout cable wiring diagram](../images/wiring_diagram_v2.svg)

- **Power** — connects to the included power adapter.
- **Shifter** — connects to the wired shifter you mounted on your handlebar.
- **Peloton Tablet** — only used on the original Peloton Bike (in Tablet Mode).
- **Peloton Sensor** — only used on the original Peloton Bike.

Connect the breakout cable to the SmartSpin2k cable. The arrows on the connectors show the correct orientation. You can disconnect the cables between rides if you prefer.

![DIN Connector](../images/breakout_cable.webp)

Select your bike:

{% tabs wiring %}
{% tab wiring Most Spin Bikes %}

Covers Schwinn IC4, Bowflex C6, NordicTrack, and other magnetic-resistance spin bikes.

1. Plug the **Power** connector into the included power adapter, and plug the adapter into the wall.
2. Plug the **Shifter** connector into the wired shifter on your handlebar.

That's the whole wiring step. The Peloton Tablet and Peloton Sensor connectors stay unused — leave them tucked out of the way.

If you've added a Bluetooth power meter, no extra wiring is needed — the Companion App pairs with it wirelessly.

When you're ready, head to the [spin bikes setup guide](spin-bikes) to pair your bike to the SmartSpin2k Companion App.

{% endtab %}
{% tab wiring Peloton Bike+ %}

1. Plug the **Power** connector into the included power adapter, and plug the adapter into the wall.
2. Plug the **Shifter** connector into the wired shifter on your handlebar.
3. **Do not plug in the Peloton Tablet or Peloton Sensor connectors.** The headphone jack on the Bike+ looks like it should fit — it doesn't work. Leave both connectors tucked away unused.

Bike+ gets power and cadence data wirelessly. You'll need either [Grupetto](https://www.youtube.com/watch?v=a5DLBiieFqk) (a free app you sideload onto the bike's tablet) or a Bluetooth power meter.

When you're ready, head to the [Bike+ setup guide](bike-plus) to pair Grupetto or your power meter.

{% endtab %}
{% tab wiring Peloton Bike (original) %}

1. Plug the **Power** connector into the included power adapter, and plug the adapter into the wall.
2. Plug the **Shifter** connector into the wired shifter on your handlebar.
3. Find the sensor cable on your Peloton Bike — the cable that normally runs between the bike's sensor and the back of the tablet. Disconnect it from the back of the tablet.
4. Plug the **Peloton Sensor** connector on your breakout cable into the bike's sensor cable.

   ![Peloton wiring diagram](../images/peloton_wiring_diagram.png)

5. Decide whether to plug in the **Peloton Tablet** connector:
   - **If you want to keep using the Peloton tablet** (for Peloton classes, Grupetto, or any other tablet app while you ride): plug the **Peloton Tablet** connector into the back of the Peloton tablet, where the sensor cable used to go.

     ![Tablet Mode wiring](../images/tablet_mode_diagram.jpg)

   - **If you don't plan to use the Peloton tablet during your rides** (you ride from a phone, computer, or separate device): leave the **Peloton Tablet** connector unplugged.

     ![Headless wiring](../images/tx_mode.jpg)

When you're done wiring, head to the [Peloton setup guide](peloton) to pick your operating mode and finish setup.

{% endtab %}
{% endtabs %}

---

## Step 3: The Switch on the Side

There's a small toggle switch on the side of the SmartSpin2k body. We get questions about it all the time, so it's worth a moment up front.

![Side of SmartSpin2k with Control Switch highlighted](../images/switch_modes.jpg)

For most users, this switch does nothing and you can ignore it. It only matters if you have an original Peloton Bike.

### Does this apply to me?

- **Most Spin Bikes: NO.** The switch has no effect when you connect over Bluetooth or with a power meter. Leave it where it is.
- **Peloton Bike (original): YES.** Set the switch to match your wiring. Up (Tablet Mode) if the Peloton Tablet connector is plugged into the back of the tablet, down (Headless Mode) if it isn't. The [Peloton setup guide](peloton) walks through which mode to pick.
- **Peloton Bike+: NO.** Bike+ uses wireless data only, so the switch has no effect on your ride.
