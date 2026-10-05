---
title: Assembly Guide
parent: Documentation
layout: page
nav_order: 5
---
# Assembly Guide
{: .no_toc }

<div class="gs-hero">
  <div class="gs-hero__body">
    <p class="gs-hero__eyebrow"><span class="label label-yellow">DIY</span></p>
    <h2 class="gs-hero__title" id="build-your-own">Build your own SmartSpin2k</h2>
    <p>This page is for builders. It tells you which parts to buy, which files to print, and where to find the build manual for your version. You should be comfortable with a 3D printer. For Version 2 you'll also need to solder.</p>
    <p class="gs-hero__note">Rather ride than build? <a href="https://www.smartspin2k.com">Get a fully assembled SmartSpin2k</a>, ready to mount on your bike.</p>
  </div>
</div>

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}

## The build at a glance

<div class="gs-steps">

{% include step.html n=1 title="Check the fit" body="Measure your bike so you print the right arm, mount, and knob insert. [Check the fit](#check-the-fit)" %}

{% include step.html n=2 title="Pick a version" body="Version 3 uses a ready-made board. Version 2 is a board you solder yourself. [Pick a version](#pick-a-version)" %}

{% include step.html n=3 title="Buy the parts" body="Motor, power supply, bearings, and hardware-store bolts. [Parts list](#parts-list)" %}

{% include step.html n=4 title="Print the parts" body="The case, gears, and knob cup, plus the three parts sized for your bike. [Print the parts](#print-the-parts)" %}

{% include step.html n=5 title="Assemble" body="Follow the manual or video for your version and your shifter. [Build guides](#build-guides)" %}

{% include step.html n=6 title="Load firmware and ride" body="Flash the firmware if needed, then set it up like any other SmartSpin2k. [After the build](#after-the-build)" %}

</div>

## Check the fit

{: .caution }
Make sure your bike is [compatible]({% link compatibility.md %}) before you buy anything.

Take three measurements, with calipers if you have them:

- **Back of the head tube to the center of the resistance knob.** This sets the arm length. Measure at a right angle to the knob's axis.
- **Smallest diameter of the knob** and **largest diameter of the knob.** These pick the knob insert.

**Arm length is about your head tube measurement minus 65 mm.** Arms come in 5 mm steps from 20 to 155. The [Arm readme](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Arm) lists the arm length for each tested bike. To make a length that isn't there, use the [arm customizer on Thingiverse](https://www.thingiverse.com/thing:5732525).

Version 2 needs at least 49 mm from the back of the head tube to the center of the knob. The [compatibility page]({% link compatibility.md %}#will-smartspin2k-fit-my-bike) has photos that show where to measure.

## Pick a version

<div class="gs-cards">
<div class="gs-card gs-card--accent" markdown="1">
<div class="gs-card__title">Version 3 <span class="label label-green">Recommended</span></div>

- Uses the SmartSpin2k PCB kit. The board comes ready-made, so you don't solder any surface-mount parts.
- The only version that connects to the original Peloton Bike's sensor cable.
- Built from the [Version 3 assembly manual](#build-guides).
</div>
<div class="gs-card" markdown="1">
<div class="gs-card__title">Version 2</div>

- You solder a through-hole board that holds an ESP32 dev board and a TMC2225 stepper driver.
- Needs the [extra Version 2 parts](#version-2-parts) on top of the common parts.
- Built from the [Version 2 build video](#build-guides).
</div>
</div>

## Parts list

Every build needs these parts.

| Qty | Part | Where to buy |
|:---:|------|--------------|
| 1 | PCB and wiring harness kit (Version 3) | [Official resellers](https://www.smartspin2k.com/purchase-kits) |
| 1 | 38 mm NEMA 17 stepper motor | [Amazon](https://a.co/d/iN8ikZy), [AliExpress](https://www.aliexpress.com/item/4000474225551.html) |
| 1 | 12 V to 15 V power supply, 1 A or more | [Amazon](https://a.co/d/ifaZIT9), [AliExpress](https://www.aliexpress.com/item/32975192317.html) |
| 2 | 608 skate bearings | [Amazon](https://amzn.to/3isBzrW), [AliExpress](https://www.aliexpress.com/item/32700232097.html) |
| 1 | 5/16" x 1-1/2" hex head bolt | Hardware store |
| 1 | 5/16" washer | Hardware store |
| 2 | 5/16" nuts | Hardware store |
| 4 | #8 x 1.75" countersunk wood screws | Hardware store |

{: .highlight }
**Power supply:** anything from 12 V to 15 V works, as long as it supplies at least 1 A. The PCB kit needs a 5.5 x 2.1 mm barrel plug. Don't go above 15 V.

### Shifter

Pick one.

| Shifter | Qty | Part | Where to buy |
|---------|:---:|------|--------------|
| PCB shifter | 1 | Shifter PCB kit | [Official resellers](https://www.smartspin2k.com/purchase-kits), or [build it from the files](https://github.com/eMadman/SmartSpin2K-Shifter) |
| Hand-wired shifter | 2 | Tactile switches | [Amazon](https://amzn.to/33ezmKx), [AliExpress](https://www.aliexpress.com/item/32958087576.html) |
| | 1 | Stereo RCA to 3.5 mm headphone Y cable | [AliExpress](https://www.aliexpress.com/item/4000204275028.html) |

### Version 2 parts

<details markdown="block">
<summary>Extra parts to solder your own board</summary>

Version 2 builds use these parts in place of the PCB kit.

| Qty | Part | Where to buy |
|:---:|------|--------------|
| 1 | ESP32 dev board | [Amazon](https://amzn.to/2ZNyjQX), [AliExpress](https://www.aliexpress.com/item/1005001267643044.html) |
| 1 | TMC2225 stepper driver | [Amazon](https://amzn.to/3kctdEQ), [AliExpress](https://www.aliexpress.com/item/4000296898203.html) |
| 1 | JST-XH connector kit | [Amazon](https://a.co/d/14NJyfu) |
| 1 | 3.5 mm stereo headphone jack (for the shifter) | [AliExpress](https://www.aliexpress.com/item/4000640677390.html) |
| 1 | 5.5 x 2.1 mm DC power jack | [AliExpress](https://www.aliexpress.com/item/4000694128319.html) |
| 1 | Version 2 PCB | [PCBWay](https://www.pcbway.com/project/shareproject/SmartSpin2k_PCB.html) |
| 1 | Recom R-78E5.0-0.5 regulator | [Octopart](https://octopart.com/r-78e5.0-0.5-recom+power-21698196) |
| 1 | 10 µF 50 V capacitor, 6 mm diameter or smaller | [Octopart](https://octopart.com/50ml10mefc5x7-rubycon-19941930) |
| 1 | 100 µF 25 V capacitor, 6 mm diameter or smaller | [Octopart](https://octopart.com/25yxj100m5x11-rubycon-24361474) |
| 1 | 0.1 µF 50 V capacitor | [Octopart](https://octopart.com/c315c104m5u5ta7301-kemet-20253274) |
| 1 | 1 kΩ resistor | [Octopart](https://octopart.com/rnf14ftd1k00-stackpole+electronics-19224710) |

</details>

## Print the parts

{: .highlight }
**Print settings:** ABS, CF-Nylon, or PETG, with 4 perimeters and 40% infill. Print the shifter strap in TPU.

### Parts for every build

| Part | Files | Notes |
|------|-------|-------|
| Case, both halves | [V3 Case](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/V3%20-%20Integrated%20PCB/Case/) | Left and right, each with or without the logo |
| Window | [V3 Case](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/V3%20-%20Integrated%20PCB/Case/) | Translucent or clear filament, so the LEDs show through |
| Knob cup | [KnobCups](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/KnobCups) | Looks best in an accent color |
| Gears, 11T and 40T | [Gears](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Gears) | Looks best in an accent color |
| Shifter strap, single or set | [Shifters](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Shifters) | TPU |

**Building Version 2?** Print the case from [V2 - Through Hole](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/V2%20-%20Through%20Hole) instead of V3 Case. Direct Mount is the recommended case. Each case folder has a readme with its own notes, so read it before you print.

### Parts sized for your bike

| Part | Files | How to choose |
|------|-------|---------------|
| Arm | [Arm](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Arm) | The length from [Check the fit](#check-the-fit). The file name is the length, for example `armWithHook85.STL`. |
| Bike mount | [Bike Mount](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Bike%20Mount) | Named by bike. The folder has reference photos. |
| Knob insert | [Inserts](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Inserts) | Named by bike. Generic sizes such as `50mm.STL` and `60mm.STL` fit many unbranded bikes. |

**Bike not listed?** The Inserts folder has the reference photos and CAD files behind each design, and the Arm and Bike Mount folders have CAD too. Start from the closest match and adapt it.

## Build guides

<div class="gs-bikes">
  <a class="gs-bike" href="https://github.com/doudar/SmartSpin2k/blob/develop/SS2kR3BuildingInstructions.pdf">
    <span class="gs-bike__name">Version 3</span>
    <span class="gs-bike__models">PCB kit</span>
    <span class="gs-bike__desc">Assembly manual for the PCB kit build.</span>
    <span class="gs-bike__cta">Open the manual (PDF) &rarr;</span>
  </a>
  <a class="gs-bike" href="https://www.youtube.com/watch?v=0vqzwOFnhxg">
    <span class="gs-bike__name">Version 2</span>
    <span class="gs-bike__models">Self-soldered board</span>
    <span class="gs-bike__desc">Video walkthrough of the Version 2 build.</span>
    <span class="gs-bike__cta">Watch the video &rarr;</span>
  </a>
  <a class="gs-bike" href="https://github.com/eMadman/SmartSpin2K-Shifter">
    <span class="gs-bike__name">PCB shifter</span>
    <span class="gs-bike__models">Shifter PCB kit</span>
    <span class="gs-bike__desc">Board files, printable housing, and build notes.</span>
    <span class="gs-bike__cta">Open on GitHub &rarr;</span>
  </a>
  <a class="gs-bike" href="https://www.youtube.com/watch?v=jm69MVKjAxE">
    <span class="gs-bike__name">Hand-wired shifter</span>
    <span class="gs-bike__models">Tactile switches and a Y cable</span>
    <span class="gs-bike__desc">Video build of the two-button shifter.</span>
    <span class="gs-bike__cta">Watch the video &rarr;</span>
  </a>
</div>

## After the build

From here, your SmartSpin2k sets up the same way as one that came assembled.

<div class="gs-steps">

{% capture body %}A board with no firmware won't show up in the Companion App. Flash it over USB with the [SmartSpin2k Flasher]({% link documentation/firmware.md %}#update-over-usb).{% endcapture %}
{% include step.html n=1 title="Load the firmware" body=body %}

{% capture body %}Mount it on your bike and run Guided Setup in the Companion App. [Getting Started]({% link getting-started.md %}) covers the same steps.{% endcapture %}
{% include step.html n=2 title="Mount and set up" body=body %}

{% capture body %}Once you've ridden, [calibrate]({% link getting-started/calibration.md %}) so SmartSpin2k knows how far your knob turns.{% endcapture %}
{% include step.html n=3 title="Calibrate" body=body %}

</div>

Something not right? Start with [Troubleshooting]({% link documentation/troubleshooting.md %}).
