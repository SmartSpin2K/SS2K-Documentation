---
title: Firmware
parent: Documentation
layout: page
nav_order: 3
---
# Firmware
{: .no_toc }

There are two ways to put new firmware on SmartSpin2k. Use the **Companion App** for normal updates. Use the **SmartSpin2k Flasher** and a USB cable when the app can't update it.

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## Update with the Companion App

Your settings and Power Table stay as they are. The app sends the firmware over WiFi when SmartSpin2k is on your network, and over Bluetooth when it isn't.

<div class="gs-stages">

{% capture body %}When a newer release is out, the **Device** screen shows **Firmware *version* is available**. Tap it to open **Firmware Update**.

No banner? Tap **Maintenance**, then **Update Firmware**. Tap **X** to hide the banner until the next release.{% endcapture %}
{% include stage.html n="1" title="Open Firmware Update" img="device-firmware-available.png" alt="Device screen with a banner that reads Firmware 26.9.28 is available, Installed: 24.1.3" body=body %}

{% capture body %}The newest release is selected and marked **Latest**. A green dot means the release is newer than what SmartSpin2k has now. Red means it's older.

Tap **Update to Most Recent Release**, then **Confirm**.{% endcapture %}
{% include stage.html n="2" title="Pick a release" img="firmware-update.png" alt="Firmware Update screen listing releases with colored dots, the newest marked Latest, above the Update to Most Recent Release button" body=body %}

{% capture body %}Stay on this screen until it finishes. Over Bluetooth it can take up to five minutes.

SmartSpin2k restarts on its own when the update is done, and the app checks the new version.{% endcapture %}
{% include stage.html n="3" title="Wait for the update" img="firmware-update-progress.png" alt="Firmware Update screen during an update, showing 45 percent, a progress bar, time remaining, and Updating via WiFi" body=body %}

</div>

**If the update stops partway:** unplug SmartSpin2k's power, plug it back in, and try again.

**If the app says the firmware isn't compatible:** that SmartSpin2k is too old for the app to update. Use the [Flasher](#update-over-usb) once, and the app can handle updates after that.

## Update over USB

The SmartSpin2k Flasher puts a fresh copy of the newest firmware on SmartSpin2k. It picks the right firmware for your board and downloads it for you. Use it when:

- the Companion App can't update SmartSpin2k
- SmartSpin2k won't start or connect after a failed update

{: .red }
**Flashing over USB erases SmartSpin2k.** Your settings, saved sensors, calibration and the Power Table all go back to factory defaults. If the Companion App can still connect, save a copy first: **Settings**, then **Save & restore settings**, then **Save a copy**.

### What you need

- **A USB cable that fits your SmartSpin2k.** Newer units have a USB-C port. Older units have micro-USB. It has to be a data cable. Some cables only charge, and the Flasher won't see SmartSpin2k through them.
- **A Windows, Mac or Linux computer.**
- **[SmartSpin2k Flasher](https://github.com/SmartSpin2K/SmartSpin2kFlasher/releases/latest).** Download the file for your computer: `windows-setup.exe` for Windows, `.dmg` for Mac, `linux.tar.gz` for Linux.

You don't need SmartSpin2k's power cable for this. USB powers it.

### Flash SmartSpin2k

<div class="gs-stages">

{% capture body %}Plug the USB cable into SmartSpin2k and your computer, then open the SmartSpin2k Flasher.

Under **Serial Port**, pick your SmartSpin2k. If the list is empty, click the refresh button next to it.

Under **Firmware**, leave **GitHub Release** selected. The newest release is already chosen.{% endcapture %}
{% include stage.html n="1" title="Connect and choose the port" img="flasher/flasher-ready.png" alt="SmartSpin2k Flasher with a serial port selected, GitHub Release chosen, and the newest release in the firmware list" body=body wide=true %}

{% capture body %}Click **Flash SmartSpin2k**. The Flasher checks which board you have, downloads the firmware, and writes it. This takes under a minute. Leave the cable plugged in until it's done.{% endcapture %}
{% include stage.html n="2" title="Flash" img="flasher/flasher-flashing.png" alt="SmartSpin2k Flasher while flashing, with write progress in the console" body=body wide=true %}

{% capture body %}The console shows **Done! Flashing is complete!** SmartSpin2k restarts, and the Flasher shows its log as it starts.

Close the Flasher and unplug the cable. Connect with the Companion App, then restore your saved copy from **Save & restore settings**, or run **Guided Setup** to set it up again.{% endcapture %}
{% include stage.html n="3" title="Done" img="flasher/flasher-done.png" alt="SmartSpin2k Flasher console reading Done! Flashing is complete! followed by Automatically showing logs after successful flash" body=body wide=true %}

</div>

### If the Flasher can't connect

- **SmartSpin2k isn't in the Serial Port list:** try a different cable, since charge-only cables are common. Then try a different USB port and click refresh.
- **Flashing stops with a connection error:** unplug the USB cable. Hold the **boot** button on SmartSpin2k's board while you plug it back in, then click **Flash SmartSpin2k** again.
- **Something else:** click **Save Serial Logs** to save SmartSpin2k's log to a file, and share it when you ask for help.
