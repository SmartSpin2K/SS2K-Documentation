---
title: Settings
parent: Documentation
layout: page
nav_order: 1
---
# Settings
{: .no_toc }

<div class="gs-hero">
  <div class="gs-hero__body">
    <p class="gs-hero__eyebrow"><span class="label label-green">Companion App</span></p>
    <h2 class="gs-hero__title" id="where-settings-live">Make it your ride</h2>
    <p>Every setting is in the SmartSpin2k Companion App. On the <strong>Device</strong> screen, tap <strong>Settings</strong>. Settings come in four groups: <strong>Basic</strong>, <strong>Bluetooth</strong>, <strong>Network</strong>, and <strong>Advanced</strong>. Most riders only need Basic.</p>
    <p class="gs-hero__note">Tap the <strong>ⓘ</strong> next to any setting for the app's own explanation of it.</p>
  </div>
  {% include shot.html img="settings.png" alt="Settings screen with the Save and restore settings card above the Basic, Bluetooth, Network, and Advanced tiles" %}
</div>

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}

## Quick fixes

Find what you notice on the bike, then change the setting beside it.

| You notice | Change | Group |
| --- | --- | --- |
| Each shifter click changes too little or too much | [Shift Step](#shift-step) | Basic |
| The shifter buttons work the wrong way round | [Swap Shifter Direction](#swap-shifter-direction) | Basic |
| You want real gears, with a top and bottom gear | [Simulated Groupset](#simulated-groupset) | Basic |
| Hills feel too steep or too flat | [Incline Multiplier](#incline-multiplier) | Basic |
| ERG is slow to reach the target, or overshoots and swings | [ERG Sensitivity](#erg-sensitivity) | Basic |
| Power reads well above or below a real power meter | [Power Correction Factor](#power-correction-factor) | Advanced |
| The motor runs hot, or stalls on a stiff knob | [Stepper Power](#stepper-power), [Stealth Chop](#stealth-chop) | Advanced |
| Calibration grinds at a stop, or stops short | [Homing Force](#homing-force) | Advanced |

## Change a setting

<div class="gs-steps">

{% include step.html n=1 title="Open a group" body="On **Device**, tap **Settings**, then tap **Basic**, **Bluetooth**, **Network**, or **Advanced**." %}

{% include step.html n=2 title="Try a value" body="Tap the setting. Drag the slider, type a value, or flip the switch. The change takes effect right away, so you can try it mid-ride." %}

{% include step.html n=3 title="Save it" body="Tap **SAVE** to keep it after SmartSpin2k restarts. Leave with **BACK** and the change lasts until the next restart." %}

</div>

<div class="gs-shots">

{% include shot.html img="settings-basic.png" alt="Basic settings screen listing Shift Step, Swap Shifter Direction, Simulated Groupset, Incline Multiplier, and ERG Sensitivity" caption="Basic settings" %}

{% include shot.html img="setting-info.png" alt="ERG Sensitivity help dialog opened from the info button, with a Close button" caption="Tap ⓘ for help" %}

{% include shot.html img="swap-shifter-direction.png" alt="Edit Setting screen for Swap Shifter Direction with an On switch above the BACK and SAVE buttons" caption="Editing a setting" %}

</div>

Change one setting at a time and ride a few minutes before changing the next one. That way you know which change made the difference.

## Basic settings

Gearing and everyday ride feel.

<div class="st-list">

{% capture body %}How far the knob turns for each click of the shifter. Higher values turn it further.

With a [Simulated Groupset](#simulated-groupset) picked, this is the size of a typical gear change. Bigger jumps between gears move further.{% endcapture %}
{% include setting.html id="shift-step" name="Shift Step" range="10 – 6000" default="1200" body=body tip="**Aim for about 30 W per click** at your usual cadence. Every bike is different, so adjust from there." %}

{% include setting.html id="swap-shifter-direction" name="Swap Shifter Direction" range="On / Off" body="Swaps which shifter button adds resistance and which takes it away. Flip it if pressing up makes pedaling easier." %}

{% capture body %}Gives the shifter a real set of gears for SIM mode (incline) rides. ERG mode ignores it.

- **Unlimited**, the default, moves the knob by Shift Step on every click. There is no top or bottom gear.
- **A groupset** has a fixed number of gears. Each shift moves in proportion to the real ratio change between the two gears.

| Groupset | Gearing |
| --- | --- |
| Standard Road Compact | 50/34T, 11–34T |
| MTB 1x12 – Wide Range | 32T, 10–52T |
| Gravel 1x13 – Optimized XPLR | 42T, 10–46T |
| Mixed Terrain 1x24 | 24 gears, 0.75–5.49 ratio |
| All-Rounder | 48/35T, 10–33T |

A custom groupset loaded from a settings file shows as **Current custom groupset**. Picking a preset replaces it.{% endcapture %}
{% include setting.html id="simulated-groupset" name="Simulated Groupset" range="Unlimited or a groupset" body=body tip="You can also change it mid-ride: tap **Settings** on the **Virtual Shifter** screen." %}

{% capture body %}How much SIM mode hills change the resistance. Higher values make climbs steeper. Lower values flatten them.{% endcapture %}
{% include setting.html id="incline-multiplier" name="Incline Multiplier" range="0 – 10" default="7" body=body tip="**Riding Zwift?** Its Trainer Difficulty setting starts at 50%, which halves the hills SmartSpin2k receives. Raise Trainer Difficulty or this setting to make up for it. [More on Trainer Difficulty](https://zwiftinsider.com/using-the-trainer-difficulty-setting-in-zwift/)." %}

{% capture body %}How hard ERG mode chases the target power.

- **Too low:** slow to reach a new target.
- **Too high:** overshoots, then swings above and below before it settles.

A small overshoot that settles quickly is fine.{% endcapture %}
{% include setting.html id="erg-sensitivity" name="ERG Sensitivity" range="0.1 – 20" default="3" body=body tip="Change it by about 1 at a time, and ride a couple of interval changes before you judge it." %}

</div>

## Advanced settings

Motor tuning and device behavior. The defaults suit most bikes.

<div class="st-group">

{% include shot.html img="settings-advanced.png" alt="Advanced settings screen scrolled down, listing Stepper Power, Stealth Chop, Power Correction Factor, Stepper Motor Speed, Min Brake Watts, Max Brake Watts, Homing Force, and Power Table for Power" caption="Advanced settings" %}

<div class="st-list">

{% include setting.html id="name-of-smartspin2k" name="Name of SmartSpin2k" default="SmartSpin2k" body="The name SmartSpin2k shows in Bluetooth lists and training apps. It also sets the web address on your network. A name of `garage` gives `http://garage.local/`. Useful when there is more than one SmartSpin2k in the house." %}

{% include setting.html id="stepper-power" name="Stepper Power" range="100 – 2000 mA" default="900" body="How much current the motor gets. Raise it if the motor stalls on a stiff, felt-resistance knob. Lower it if the motor runs hot." tip="**Stay within your power adapter's rating.**" %}

{% include setting.html id="stealth-chop" name="Stealth Chop" range="On / Off" default="On" body="Keeps the motor quiet. Leave it on unless it causes problems. Turning it off gives a little more torque on felt-resistance bikes, but the motor is louder." %}

{% capture body %}Scales the power your bike reports. Use it when your bike's power is well off from a real power meter. To work it out, divide the power meter reading by the bike's reading at the same effort. If the bike shows 250 W while a power meter shows 200 W, use 0.8.{% endcapture %}
{% include setting.html id="power-correction-factor" name="Power Correction Factor" range="0.5 – 2.5" default="1.0" body=body tip="Schwinn IC4 and Bowflex C6 riders often land around **0.7 to 0.8**." %}

{% include setting.html id="stepper-motor-speed" name="Stepper Motor Speed" range="100 – 3500" default="3500" body="How fast the motor turns the knob. The default suits almost every bike." %}

{% capture body %}The lowest power your bike makes with the knob near its lightest. Before SmartSpin2k has found the knob's limits, ERG mode won't aim below this. ERG also drops to this target when you stop pedaling.

To measure it, pedal at 90 rpm with the knob a turn or two above its lightest and note the watts. On a Schwinn IC4, use resistance 10 of 100.{% endcapture %}
{% include setting.html id="min-brake-watts" name="Min Brake Watts" range="0 – 200 W" default="50" body=body %}

{% capture body %}The most power your bike can absorb. The shifter won't raise an ERG target above it.

To measure it, pedal at 90 rpm with the knob as high as you can comfortably hold and note the watts. Set this at or a little above that number.{% endcapture %}
{% include setting.html id="max-brake-watts" name="Max Brake Watts" range="0 – 2000 W" default="1000" body=body %}

{% capture body %}How hard the motor pushes before calibration counts a knob stop as reached. Lower it if the motor grinds at a stop. Raise it if it stops before the real end. See [Adjust Homing Force]({% link getting-started/calibration.md %}#adjust-homing-force).{% endcapture %}
{% include setting.html id="homing-force" name="Homing Force" range="10 – 100" default="50" body=body tip="The **Calibrate Trainer** screen has this setting too." %}

{% capture body %}Reports power from the knob position and your cadence, using a Power Table learned with a power meter. Only for bikes with no power output of their own. See [Power from the Power Table]({% link documentation/powertables.md %}).{% endcapture %}
{% include setting.html id="power-table-for-power" name="Power Table for Power" range="On / Off" default="Off" body=body %}

</div>

</div>

## Bluetooth settings

The sensors SmartSpin2k connects to on every ride.

<div class="st-list">

{% capture body %}Your bike, power meter pedals, or Grupetto. Tap **SCAN**, tap your device in the list, then tap **SAVE**. **none** means SmartSpin2k connects to no power meter.{% endcapture %}
{% capture tip %}Not in the list? Make sure no other app is connected to it, pedal to wake it, then scan again. Step by step: [Choose your power source]({% link getting-started/setup.md %}#part-4).{% endcapture %}
{% include setting.html id="saved-power-meter" name="Saved Power Meter" body=body tip=tip %}

{% include setting.html id="saved-hrm" name="Saved HRM" body="A heart rate monitor for SmartSpin2k to pass on to your training app. This helps on Apple TV, which allows only a few Bluetooth connections. Scan and save it the same way." %}

</div>

## Network settings

<div class="st-list">

{% capture body %}A 2.4 GHz WiFi network for SmartSpin2k to join. Once it's on WiFi, SmartSpin2k gets firmware updates, and its web page opens on your network. Enter the network name and password, tap **Save to SmartSpin2k**, then tap **Reboot now**. Step by step: [Heart rate and WiFi]({% link getting-started/setup.md %}#part-7).{% endcapture %}
{% include setting.html id="wifi-network" name="WiFi network" body=body tip="5 GHz networks won't work. If your router has separate 2.4 GHz and 5 GHz network names, pick the 2.4 GHz one." %}

</div>

## Save, restore, and reset

Tap **Save & restore settings** at the top of **Settings**.

<div class="st-group">

{% include shot.html img="settings-save-restore.png" alt="Save and restore settings dialog with Save a copy, Load saved settings, Delete a saved copy, Import from a file, Export to a file, and Factory reset SmartSpin2k" caption="Save & restore settings" %}

<div class="st-list">

{% include setting.html name="Saved in this app" body="**Save a copy** keeps your current settings in the app. **Load saved settings** puts a copy back onto SmartSpin2k. Save a copy once your bike feels right." %}

{% include setting.html name="Settings files" body="**Export to a file** creates a `.ss2k` file you can keep or share. **Import from a file** adds a `.ss2k` or `.json` file to your saved copies. This is an easy way to share a setup with someone who has the same bike." %}

{% include setting.html name="Factory reset SmartSpin2k" body="Puts every setting on SmartSpin2k back to its default. Copies saved in the app stay." tip="**Save a copy first** if you might want your settings back." %}

</div>

</div>

## On a computer

Once SmartSpin2k is on your WiFi, it also has a settings web page. Open <http://SmartSpin2k.local/> and choose **Settings**. If you renamed your SmartSpin2k, use the new name, for example `http://garage.local/`.

No WiFi set up yet? SmartSpin2k starts its own WiFi network with its name. Join it with the password `password`, and the page opens on its own.

The web page has most of the same settings. Some have different names:

| Companion App | Web page |
| --- | --- |
| Shift Step | Shift Amount |
| Swap Shifter Direction | Shifter Direction |
| Power Correction Factor | Power Multiplier |
| Stepper Power | Stepper Motor Power |
| Stealth Chop | Stepper StealthChop |
| Name of SmartSpin2k | Device Name |
| Power Table for Power | PowerTable For Power |

Stepper Motor Speed and Homing Force are only in the app. Two settings are only on the web page:

- **Stepper Motor Direction** reverses the motor. Change it only if SmartSpin2k turns the knob the wrong way, so resistance drops when it should rise.
- **UDP Logging** sends SmartSpin2k's logs across your network for troubleshooting. Leave it off unless someone helping you asks for logs. See [Viewing logs via UDP](https://github.com/doudar/SmartSpin2k/wiki/Viewing-logs-via-UDP).
