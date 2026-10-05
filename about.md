---
title: About
layout: about
nav_order: 2
description: SmartSpin2k is an open-source device that turns your spin bike into a smart trainer, with automatic resistance, ERG mode, and virtual shifting in Zwift, Rouvy, TrainerRoad, and other training apps.
image: /images/ss2k-banner.png
---
# About SmartSpin2k

<p class="fs-6 fw-300">Turn your spin bike into a smart trainer.</p>

SmartSpin2k is a small open-source device that mounts on your spin bike and turns the resistance knob for you. Zwift, Rouvy, TrainerRoad, and other training apps see it as a smart trainer. Your bike gets harder on the climbs, eases off on the descents, and holds your target power in ERG workouts.

It fits almost any spin bike with a resistance knob, for a fraction of the cost of a new smart bike.

{% include youtube.html id="xnqS0p7O3q4" title="Transform Your Spin Bike! SmartSpin2k overview" %}

## What it does

<div class="gs-cards ab-features">
  <div class="gs-card">
    <div class="gs-card__title"><i class="fa-solid fa-mountain" aria-hidden="true"></i> Automatic terrain</div>
    <p>Your bike reacts to virtual hills and descents in apps like Zwift. No more reaching for the knob.</p>
  </div>
  <div class="gs-card">
    <div class="gs-card__title"><i class="fa-solid fa-bullseye" aria-hidden="true"></i> ERG mode</div>
    <p>Structured workouts hold your exact target power. Pedal faster or slower, and SmartSpin2k turns the knob to keep you on target.</p>
  </div>
  <div class="gs-card">
    <div class="gs-card__title"><i class="fa-solid fa-gears" aria-hidden="true"></i> Virtual shifting</div>
    <p>The included shifter changes gears like an outdoor bike, one-handed. Pick your cadence on every climb.</p>
  </div>
  <div class="gs-card">
    <div class="gs-card__title"><i class="fa-brands fa-bluetooth-b" aria-hidden="true"></i> Works with your apps</div>
    <p>Connects over Bluetooth like any smart trainer, so you aren't locked into one app. Apps that support it can also connect over WiFi.</p>
  </div>
  <div class="gs-card">
    <div class="gs-card__title"><i class="fa-solid fa-heart-pulse" aria-hidden="true"></i> One connection</div>
    <p>SmartSpin2k passes your power, cadence, and heart rate to your app as one device. That helps on Apple TV, which allows only a few Bluetooth connections.</p>
  </div>
  <div class="gs-card">
    <div class="gs-card__title"><i class="fa-solid fa-person-biking" aria-hidden="true"></i> Fits your bike</div>
    <p>Bowflex, Echelon, Peloton, Schwinn, Yesoul, and many more. See <a href="{% link compatibility.md %}">Compatibility</a>.</p>
  </div>
</div>

## How it works

<div class="pt-flow">
  <div class="pt-flow__box"><strong>Your bike or power meter</strong><span>sends power and cadence</span></div>
  <div class="pt-flow__op" aria-hidden="true">&rarr;</div>
  <div class="pt-flow__box pt-flow__box--table"><strong>SmartSpin2k</strong><span>turns the resistance knob</span></div>
  <div class="pt-flow__op" aria-hidden="true">&harr;</div>
  <div class="pt-flow__box pt-flow__box--out"><strong>Your training app</strong><span>sets the resistance or target watts</span></div>
</div>

1. **Your bike or power meter sends power and cadence to SmartSpin2k.** Most bikes send them over Bluetooth. The original Peloton Bike sends them through its sensor cable.
2. **SmartSpin2k passes them to your training app.** The app sees a smart trainer, the same as it would with any other.
3. **The app controls the resistance.** When the road tilts up, or a workout asks for more watts, the app tells SmartSpin2k, and its motor turns the knob to match.

### What you need

- **A spin bike with a resistance knob.** Check [Compatibility]({% link compatibility.md %}).
- **Power and cadence.** Many bikes send them over Bluetooth already, such as the Bowflex C6, Schwinn IC4, and Yesoul S3. If yours doesn't, add power meter pedals. The original Peloton Bike plugs in with a cable, and the Peloton Bike+ uses Grupetto or a power meter.
- **A training app.** Zwift, MyWhoosh, TrainerRoad, Rouvy, TrainingPeaks Virtual, Kinomap, and others. You can also ride ERG workouts in the Companion App.

### See it in action

<div class="ab-videos">
  {% include youtube.html id="O8ZMRmwN-dY" title="SmartSpin2k ride along with Zwift" %}
  {% include youtube.html id="K6ZDopluKcg" title="SmartSpin2k Zwift ERG mode" %}
</div>

<div class="gs-hero">
  <div class="gs-hero__body">
    <h2 class="gs-hero__title" id="companion-app">The SmartSpin2k Companion App</h2>
    <p>Set up and ride from your phone or computer. Guided Setup walks you through installation step by step. After setup, use the app to:</p>
    <ul>
      <li>shift gears and watch live power and cadence</li>
      <li>ride ERG workouts from intervals.icu, with intervals.icu and Strava sync</li>
      <li>tune your settings and explore your Power Table</li>
      <li>install firmware updates</li>
    </ul>
    {% include store-badges.html %}
  </div>
  {% include shot.html img="device.png" alt="Companion App Device screen with Virtual Shifter, Settings, Power Table, and Workout" %}
</div>

## The story

SmartSpin2k started on the road. Founder Anthony Doud is a professional pilot, avid cyclist, and maker, and he rode a lot of hotel spin bikes. He packed power meter pedals so he could ride Zwift away from home, but without automatic resistance, the hills didn't feel like hills.

One day he looked down at the bike's resistance knob. With power meter pedals attached, a \\$300 spin bike already had almost everything a \\$3,000 smart bike has. It was missing one thing: something to turn the knob. SmartSpin2k turns it.

## Open source

SmartSpin2k is open source. The firmware, circuit board, and 3D-printable parts are all on [GitHub](https://github.com/doudar/SmartSpin2k), and riders in the community test it, fix it, and design adapters for new bikes.

The core team is Anthony Doud (founder), Emad Ghazipura (user experience and kits), and Nick Bayma (beta testing and documentation). Join the [SmartSpin2k Facebook group](https://www.facebook.com/groups/716297469953492) to ask questions and share your setup.

## Get a SmartSpin2k

<div class="gs-bikes">
  <a class="gs-bike" href="https://shop.smartspin2k.com/collections/all">
    <span class="gs-bike__name">Buy a kit</span>
    <span class="gs-bike__models">United States</span>
    <span class="gs-bike__desc">A fully assembled SmartSpin2k, ready to mount on your bike.</span>
    <span class="gs-bike__cta">Shop the US store &rarr;</span>
  </a>
  <a class="gs-bike" href="https://smartspin2k.ca/">
    <span class="gs-bike__name">Buy a kit</span>
    <span class="gs-bike__models">Rest of the world</span>
    <span class="gs-bike__desc">The same fully assembled kit, for riders outside the US.</span>
    <span class="gs-bike__cta">Shop the global store &rarr;</span>
  </a>
  <a class="gs-bike" href="{% link documentation/assembly.md %}">
    <span class="gs-bike__name">Build your own</span>
    <span class="gs-bike__models">For makers</span>
    <span class="gs-bike__desc">Buy the parts, 3D print the rest, and put it together yourself.</span>
    <span class="gs-bike__cta">Read the Assembly Guide &rarr;</span>
  </a>
  <a class="gs-bike" href="{% link getting-started.md %}">
    <span class="gs-bike__name">Already have one?</span>
    <span class="gs-bike__models">Set it up</span>
    <span class="gs-bike__desc">Install SmartSpin2k and get to your first ride.</span>
    <span class="gs-bike__cta">Get started &rarr;</span>
  </a>
</div>
