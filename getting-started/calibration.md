---
title: Calibration
parent: Getting Started
layout: page
nav_order: 5
---
# Calibration
{: .no_toc }

Calibration teaches SmartSpin2k how far your resistance knob can turn. Run it once after setup, and SmartSpin2k uses that range on every ride.

<div class="gs-hero">
  <div class="gs-hero__body">
    <p class="gs-hero__eyebrow"><span class="label label-yellow">Optional</span></p>
    <h2 class="gs-hero__title" id="what-it-does">What calibration does</h2>
    <p>SmartSpin2k turns the knob to the lowest and highest resistance your bike allows and saves that range. After that, it finds its place on its own each time it powers on. The motor stays inside your bike's limits, and the Power Table it learns in ERG mode is saved between rides.</p>
    <p class="gs-hero__note">Two ways to start it: the <strong>Calibrate Trainer</strong> screen in the Companion App, which walks you through it, or the <strong>Calibrate</strong> or <strong>Spin Down</strong> button in your training app.</p>
  </div>
  {% include shot.html img="calibrate-start.png" alt="Calibrate Trainer screen in the Companion App, explaining that calibration runs once after installation, above the Start Calibration button" %}
</div>

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}

## Do you need it?

No. SmartSpin2k rides fine without calibration. Here is what changes when you run it.

<div class="gs-cards">
<div class="gs-card" markdown="1">
<div class="gs-card__title">Without calibration</div>

- SmartSpin2k keeps the knob inside a safe range based on default limits.
- ERG mode learns your bike during each ride, and starts over the next time.
- Nothing extra happens when you power on.
</div>
<div class="gs-card gs-card--accent" markdown="1">
<div class="gs-card__title">With calibration</div>

- SmartSpin2k knows your knob's real low and high limits.
- The Power Table ERG mode learns is saved and reused on later rides.
- Each time it powers on, SmartSpin2k finds its starting point on its own. See [Every ride after calibration](#every-ride-after-calibration).
</div>
</div>

{: .red }
**Peloton Bike+ with power meter pedals only: skip calibration.** The Bike+ knob has no stops, so SmartSpin2k needs the resistance that Grupetto sends to calibrate. With Grupetto set up, calibration works. See the **Peloton Bike+ with Grupetto** tab under [What SmartSpin2k is doing](#what-smartspin2k-is-doing).

## Before you start

- Finish [Set Up Your Bike]({% link getting-started/setup.md %}). Power and cadence must show in the Companion App ([Part 5]({% link getting-started/setup.md %}#part-5)). SmartSpin2k won't start until it sees you pedaling.
- **Peloton Bike in Tablet Mode:** start a Just Ride on the tablet first, so the bike sends cadence.
- **Peloton Bike+:** open Grupetto on the bike's tablet with **BLE TX** on, and keep it open the whole time.
- Calibration clears the learned Power Table. It rebuilds as you ride.
- Keep your hands off the shifter. A shift cancels calibration.

## Calibrate

{% tabs calibrate-from %}
{% tab calibrate-from Companion App %}

The Companion App shows each stage as it happens and tells you what to do if something goes wrong.

1. On the **Device** screen, tap **Maintenance**, then **Calibrate Trainer**.
2. The first time, the app asks **Are you using a Peloton Bike+?** Tap **No** if your knob stops at low and high resistance. Tap **Yes, Bike+** for a Bike+. The app remembers your answer. Tap **Change** to fix it.
3. Tap **Start Calibration**. On a Bike+ the button says **Start with resistance data**.
4. Pedal at an easy pace. After about two seconds the knob starts to turn.
5. Stop pedaling once the knob is moving. Watch it work through the stages described [below](#what-smartspin2k-is-doing).
6. When **Calibration saved** appears, answer the question and tap **Yes, done** or **Done**.

<div class="gs-shots">

{% include shot.html img="device-maintenance.png" alt="Device screen with the Maintenance panel open, listing Calibrate Trainer, Update Firmware, and View Logs" caption="Maintenance" %}

{% include shot.html img="calibrate-start.png" alt="Calibrate Trainer screen with the calibration setup set to Bike with physical knob stops and Homing Force 50" caption="Calibrate Trainer" %}

</div>

You can leave the screen while calibration runs. It keeps going on the SmartSpin2k. During a workout in the Companion App, it's in the workout menu under **Trainer setup**.

{% endtab %}
{% tab calibrate-from Training app %}

Your training app's **Calibrate** or **Spin Down** button runs the same calibration. SmartSpin2k picks the right method for your bike on its own.

1. Pair SmartSpin2k as your controllable trainer. See [pairing steps]({% link getting-started/first-ride.md %}#pair-smartspin2k-to-your-training-app).
2. Find **Calibrate** or **Spin Down** for the trainer, usually on the pairing or device screen.
3. Start it and pedal at an easy pace. After about two seconds the knob starts to turn.
4. Stop pedaling once the knob is moving. Partway through, the app may tell you to stop pedaling. That's expected.
5. Wait for the app to say calibration finished or failed.

Training apps show none of the detail below. Watch the knob instead. If it fails, run it from the Companion App to see why.

{% endtab %}
{% endtabs %}

## What SmartSpin2k is doing

The steps depend on your bike. Most bikes have a knob that stops at each end. The Peloton Bike+ knob turns forever, so SmartSpin2k uses the resistance Grupetto reports instead.

{% tabs calibrate-bike %}
{% tab calibrate-bike Knob with end stops %}

Spin bikes such as the Schwinn IC4 and Bowflex C6, bikes with a power meter, and the original Peloton Bike. The whole run usually takes a minute or two.

<div class="gs-stages">

{% capture body %}SmartSpin2k waits for about two seconds of pedaling above 10 rpm. That's how it knows someone is on the bike. It reads cadence from your bike or power meter. Once the knob starts turning, you can stop pedaling.{% endcapture %}
{% include stage.html n=1 title="Waiting for you to pedal" img="calibrate-pedal.png" alt="Cadence reading of 0 rpm with Start pedaling to begin, and the Waiting for you to pedal step spinning" body=body %}

{% capture body %}The motor turns the knob toward low resistance at reduced power. The **Motor Load** gauge shows how hard the motor is working. When the knob reaches the stop, the load jumps and SmartSpin2k marks the spot.

It then backs off and taps the stop again, until several taps land in the same place. You'll hear a few soft bumps. That's normal. It sets its zero just above the stop.{% endcapture %}
{% include stage.html n=2 title="Finding low resistance" img="calibrate-low-stop.png" alt="Motor Load gauge at 60 percent while the Finding low resistance step is in progress" body=body %}

{% capture body %}Same again in the other direction: the knob turns up to the high-resistance stop and taps it until it gets a consistent reading. SmartSpin2k keeps a small margin below the stop, so the motor never pushes against it during a ride.{% endcapture %}
{% include stage.html n=3 title="Finding high resistance" img="calibrate-high-stop.png" alt="Motor Load gauge at 87 percent while the Finding high resistance step is in progress, with low resistance checked off" body=body %}

{% capture body %}SmartSpin2k saves the range, shown in motor steps, and returns the knob to low resistance.

The app asks **Did the knob reach both ends without continuing to push?** If it did, tap **Yes, done**. If the motor kept grinding at a stop, or the knob stopped before the bike's real limit, tap **No, something looked wrong**. See [Adjust Homing Force](#adjust-homing-force).{% endcapture %}
{% include stage.html n=4 title="Calibration saved" img="calibrate-saved.png" alt="All three steps checked, with a Calibration saved message giving a travel range of 0 to 24,800 steps and asking whether the knob reached both ends without continuing to push" body=body %}

</div>

{% endtab %}
{% tab calibrate-bike Peloton Bike+ with Grupetto %}

The Bike+ knob has no stops to find. SmartSpin2k turns the knob and watches the 0–100 resistance that Grupetto reports from the bike. It's slower than finding stops. Allow 3–5 minutes. Pauses and small reversals are normal.

<div class="gs-stages">

{% capture body %}Tap **Start with resistance data**, then pedal for about two seconds with Grupetto open and **BLE TX** on. Once the knob starts turning, you can stop pedaling.{% endcapture %}
{% include stage.html n=1 title="Start and pedal" img="calibrate-start-bikeplus.png" alt="Calibrate Trainer screen for a Peloton Bike+, explaining that the Bike+ needs resistance data from Grupetto, above the Start with resistance data button" body=body %}

{% capture body %}SmartSpin2k turns the knob down and notes where the resistance changes near 10 and near 2. From those two points it works out where zero would be, without needing a stop.{% endcapture %}
{% include stage.html n=2 title="Measuring the low boundary" img="calibrate-bikeplus-low.png" alt="Measuring the low boundary, with resistance 4 against a target of 2 and the Resistance Position gauge near the low end" body=body %}

{% capture body %}It does the same near the top, at 90 and 98, to work out the upper limit.{% endcapture %}
{% include stage.html n=3 title="Measuring the high boundary" body=body %}

{% capture body %}SmartSpin2k measures three points across the range, near resistance 67, 50, and 33. It checks the middle point extra carefully, because that's the point it finds again at the start of every ride.{% endcapture %}
{% include stage.html n=4 title="Building the resistance map" img="calibrate-bikeplus-map.png" alt="Building the resistance map, 2 of 3 samples confirmed, with resistance 52 against a target of 50" body=body %}

{% capture body %}The range and the map are saved. Tap **Done**.{% endcapture %}
{% include stage.html n=5 title="Calibration saved" img="calibrate-bikeplus-saved.png" alt="All four steps checked, with Calibration saved and the note that SmartSpin2k learned the resistance range reported by your bike" body=body %}

</div>

Homing Force does not apply on the Bike+. If calibration stops with a message about resistance data, check that Grupetto is open, **BLE TX** is on, and **Grupetto FTMS** is your **Saved Power Meter**.

{% endtab %}
{% endtabs %}

## Every ride after calibration

Once calibrated, SmartSpin2k finds its starting point every time it powers on. This is called homing. It's a short version of calibration, and it starts the first time you pedal.

- **Knob with end stops:** the knob turns down to the low stop, taps it until the reading is consistent, then moves to your starting gear. It doesn't visit the high stop. It uses the saved range.
- **Peloton Bike+ with Grupetto:** the knob turns a little above resistance 50, then comes back down slowly until Grupetto reports the change from 51 to 50. No stops are involved. Keep Grupetto open with **BLE TX** on.
- **Peloton Bike in Tablet Mode:** start a Just Ride on the tablet so the bike sends cadence.

{: .highlight }
Don't shift while the knob is homing. A shift cancels it, and SmartSpin2k rides that session on its default limits. It tries again the next time it powers on.

## When to calibrate again

You don't need to calibrate before each ride. Run it again when:

- You moved, remounted, or adjusted the SmartSpin2k, the arm, or the knob insert.
- You moved the SmartSpin2k to a different bike.
- You changed **Homing Force**.
- The knob stops short of the bike's real low or high end, or pushes against a stop during rides.
- Homing at power-on keeps failing.

**Peloton Bike+:** if you change your **Saved Power Meter**, SmartSpin2k notices. It runs the full calibration on its own the next time it powers on and you pedal. Allow 3–5 minutes.

## Stop or fix a calibration

### Cancel

Press either shifter button. SmartSpin2k stops the motor and saves nothing.

### Adjust Homing Force

Homing Force sets how much motor load counts as "reached the stop". The default is 50. In the Companion App, tap **No, something looked wrong** after a run, or **Change** next to **Homing Force** on the first calibration screen.

| What you saw | What to do |
|:--|:--|
| The motor kept pushing at the end | Lower Homing Force by about 10, save, then try again. |
| The knob stopped before the end | Raise Homing Force by about 10, save, then try again. |

<div class="gs-shots">

{% include shot.html img="calibrate-homing-force.png" alt="What did you see? screen with The knob stopped before the end selected, advice to raise Homing Force, the Homing Force setting at 50, and a Try Again button" caption="Adjust Homing Force" %}

</div>

### Other messages

- **The SmartSpin2k never started homing:** it didn't see steady pedaling. Check that cadence shows in the Companion App, then try again.
- **Calibration was aborted:** the shifter moved. Leave it alone and try again.
- **Calibration data stopped arriving:** turn the SmartSpin2k off and on, then try again.

For anything else, open **Device log** on the calibration screen and tap the copy button. It copies the whole run. Paste it into your support request. See [Troubleshooting]({% link documentation/troubleshooting.md %}).

## Turn calibration off

To remove a saved calibration, on the **Device** screen tap **Power Table**, then **Table tools**, then **Clear Active Table**. This deletes the learned Power Table and the saved range. SmartSpin2k goes back to riding without calibration.
