---
title: Bluetooth
parent: User Guide
layout: page
nav_order: 3
---
# Bluetooth Pairing Guide
{: .no_toc }

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## How do I connect my sensors to the SS2K?
OK, your SmartSpin2k is connected and the blue LED is slowly flashing, ready for you to provide some Bluetooth connections and you’re ready to ride! SmartSpin2k will act as a Bluetooth multiplexer and serve all of your connections.  This means it operates as a single point for your sensors to connect to.  You can then pair your device to the SmartSpin2k as a single sensor.  This is helpful for devices like the AppleTV which are limited to just two connections at a time.

## Pairing Bluetooth Sensors Automatically
* Ensure all 3rd party apps that may be connected to your bike or power meter are turned off.
* Turn on your bike or power meter
* Turn on the SmartSpin2k.  It will automatically connect to your bike or power meter
* Launch your training app and pair it to SmartSpin2k ([Zwift example here](https://github.com/doudar/SmartSpin2k/wiki/Riding-Zwift-with-SmartSpin2k))
* Start riding

## Pairing Bluetooth Sensors Manually
You will want to manually select your power meter If you own a power meter and use it on a bBuetooth enabled bike like the Schwinn IC4. This is also useful if you have multiple power meters or bikes nearby.

* From http://smartspin2k.local, Click on Bluetooth Scanner
* ![Bluetooth Settings](../images/bluetooth_settings.png)
* Make sure you are wearing your HR sensor and it is not paired via Bluetooth to any other devices like a Garmin watch or iPad/iPhone
* Have your Bluetooth power pedals charged or with batteries and ready to pair. Also make sure they are not connected to any other devices like the previous step.
* Click on the “Scan/Reconnect Devices” button.
* Select the HR monitor in the Heart Monitor drop down box.
* Select the Power Meter in the Power Meter drop down box.  Users with a dedicated power meter and a bike that reports power data must select the appropriate power meter here.  Leaving this setting at "Any" may cause SmartSpin2k to receive power data from both sources and cause unintended fluctuations in reported data.
* Click on the “Save dropdowns for the next reboot” button.

## Reconnect Bluetooth during your ride
In case you experience a Bluetooth drop, you can force SmartSpin2k to rescan Bluetooth with the shifter.

* Press and hold both buttons on the shifter for 3 seconds
* Release
* SmartSpin2k should rescan and reconnect your bike/sensors
* Now that your sensors are paired and you know it works, It is possible, as shown in the hint at the bottom of the bluetooth scanner page page, to quickly scan and reconnect Bluetooth devices.  Do this by holding both shifter buttons simultaneously for 3 seconds after the SmartSpin2k has powered up. 