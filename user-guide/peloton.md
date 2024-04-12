---
title: Peloton
parent: User Guide
layout: page
nav_order: 4
---
---
# Peloton Setup
{: .no_toc }

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---
## Using this guide
This is for the Peloton bike with The newest SmartSpin2k. The Peloton Bike+ requires a dedicated power meter to be paired via BLE. 

{: .highlight}
For best performance, select "none" as the power meter in the SmartSpin2k Bluetooth scanner settings.

## Peloton operating modes
There are **two modes** of operation with Peloton, controlled by a switch on the side of the SmartSpin2K. Setup and start procedures differ slightly for each mode.

In [Tablet mode](#tablet-mode), the peloton tablet controls communications with the bike.  Choose this mode if you or anyone you share your bike with:
* use the Peloton service with the bike.
* use the bike without SmartSpin2k connected to it.

In [Headless mode](#headless-mode), the SmartSpin2k controls communications with the bike. Choose Headless Mode if you or anyone you share the bike with:
* do not need to use the tablet on the bike.
* do not plan to use the Peloton Service on your bike
* want to jailbreak the tablet to run third party apps while you are riding the bike with SmartSpin2k


### Tablet Mode
<details markdown="block">

<summary>Expand to view</summary>

<img src="../images/Tablet_Control.png" width="250">

* Start a workout or free ride in the Peloton app.
* Flip the switch on the side of your device up, to face towards the tablet. 
* Connect the 3.5mm y splitter to your bike as pictured below.
![Wiring instructions for Tablet Mode](../images/tablet_mode.svg)
* Start a ride on your Peloton Bike's tablet
* [Connect to Zwift or other apps](https://github.com/doudar/SmartSpin2k/wiki/Riding-Zwift-with-SmartSpin2k)
</details>

### Headless Mode
<details markdown="block">

<summary>Expand to view</summary>

{: .caution }
Headless mode aka TX mode disconnects the Peloton Bike's tablet from the Sensor. This enables many possibilities for users:  You can enjoy SmartSpin2k without turning on the bike's tablet, or run your own apps directly on the tablet (such as moonlight - this may void your warranty).  Some users will even remove the Peloton tablet from their bike entirely.

<img src="../images/SS2K_Control.png" width="200">

* flip the switch on the side of your device to face down towards the bike/ground.  See picture above
* Connect the 3.5mm y splitter to your bike as pictured below.
![Wiring instructions for Headless Mode](../images/tx_mode.svg)
* [Connect to Zwift or other apps](https://github.com/doudar/SmartSpin2k/wiki/Riding-Zwift-with-SmartSpin2k)

{: .caution }
**Note:**  You must switch back to [Tablet Mode](#tablet-mode) if you want to use any Peloton services after using this mode.
</details>

## Peloton Automatic Resistance
Through the use of Qdomyos-Zwift, it's possible to have automatic resistance for your instructor-guided rides in Peloton.  For this to work, you will need to use Tablet Mode and a secondary Android/IOS device running Qdomyos-Zwift.  In the near future, it may be possible to run QZ directly off the Peloton tablet. This isn't supported directly by SmartSpin2k - if you'd like to use Qdomyos-Zwift, please reach out to members of their community for help and configuration. 

[Learn more here](https://www.qzfitness.com/)
