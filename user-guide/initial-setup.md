---
title: Initial Setup
parent: User Guide
layout: page
nav_order: 1
---
# Initial Setup
{: .no_toc }

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---
## Quickstart!
If you use a BLE bike (or power meter) and BLE HR monitor, and there are no other BLE Power/HR devices near you (i.e. you don't live in an apartment), you will be able to just get on and ride.  Before you begin, make sure you have disconnected any 3rd party apps that may be connected to your sensors. Then:

1. Turn on the SmartSpin2k. 
2. Turn on your HR monitor and power meter.
3. Open your preferred cycling app (Zwift, Fulgaz, TrainerRoad, etc.)
4. [Pair the SmartSpin2k in those apps.](pairing-apps.md)

And then ride! Seriously, that's it. 

If you'd like to make changes to your shifter direction, shift steps or other advanced settings, then you can continue with the steps below. 

## Advanced Configuration
You can access the advanced configuration settings of your SmartSpin2k either using the SmartSpin2k Companion App or using wifi.  We recommend the app for most users.

Through advanced configuration, you can do things like specify your power meter increasing your shift steps, flip the shifter button orientation, and much more.  Learn more about the different settings [here](settings.md)

### Using the SmartSpin2k Companion App
<details markdown="block">
<summary>Expand to view mobile app pairing instructions</summary>

<iframe width="560" height="315" src="https://www.youtube.com/embed/qgieNuQlTp8?si=dkuHuU5kF_VBW8Wf&amp;clip=UgkxNvc7uFBptHiztHKbLOWX6chsJzNLmIeM&amp;clipt=ENy0AxjI1gU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

1. Install the SmartSpin2k Companion App
    * [IOS](https://apps.apple.com/us/app/smartspin2k-companion-app/id6477836948)
    * Android: Coming to the play store soon!  Download the app on [Github](https://github.com/doudar/SS2kConfigApp/releases/tag/1.0.0)
1. Launch the App
1. Click "Scan"
1. Click Connect on your SmartSpin2K
1. You can now configure your device.  [Click here to learn more](settings.md) about the different settings.

</details>

### Configure Wi-Fi
<details markdown="block">
<summary>Expand to view mobile app pairing instructions</summary>

1. On initial boot, the SmartSpin2k will create its own Wi-Fi network access point with the SSID of “SmartSpin2k”.  If asked for a password, use "password" without the quotes.
    ![](../images/wiki-ssid.jpg)
1. The configuration page will automatically load on mobile. If you are not taken to the page or if you are using a computer, the configuration page can be found at <http://SmartSpin2k.local/>.
    ![](../images/wifi-setup.png)
1. Enter your local Wi-Fi network information with SSID and password. Please note:  The SmartSpin2k requires a 2.4ghz Wi-Fi connection.  Please ensure you use the correct Wi-Fi network if you have separate SSIDs for 5ghz and 2.4ghz.
1. Click Submit and wait for the page to refresh.
1. Click Reboot.
1. SmartSpin2k will automatically update if the Wi-Fi network you paired the device to is connected to the internet.  The blue LED will flash quickly while this process occurs.  **This may take up to 3 minutes.**  
1. Once the blue LED is flashing slowly, make sure your phone or computer are connected to your home Wi-Fi network.
1. Navigate to <http://SmartSpin2k.local/> to confirm that you can access the configuration pages of SmartSpin2k.  You should see a page like this:
    ![](../images/configuration-page.png)
1. You can now configure your device.  [Click here to learn more](settings.md) about the different settings.
</details>
