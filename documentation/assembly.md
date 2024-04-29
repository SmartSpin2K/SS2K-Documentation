---
title: Assembly Guide
parent: Documentation
layout: page
nav_order: 4
---
# Assembly Guide
{: .no_toc }

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---
## Bill of Materials
For new builds, we strongly recommend Version 3 with a PCB kit for the easiest assembly experience.  Version 2 offers an exciting option for builders that want to solder their own PCB with an esp32 devkit.   

{: .caution }
This sourcing guide assumes you have a [compatible spin bike](../compatibility).

{: .highlight }
You should be able to source all components for < $100 USD including shipping


### Required Hardware
The components in this list are required for the assembly of all versions of the SmartSpin2K

#### SmartSpin2K Hardware

| Quantity |           Part          | Source                  |
|:-----:|-----------------------|-------------------------|
| 1   | PCB + wiring harness kit | [Official Resellers](https://www.smartspin2k.com/purchase-kits) | 
| 1   | 38mm NEMA 17 Stepper | [Amazon](https://a.co/d/iN8ikZy), [Aliexpress](https://www.aliexpress.com/item/4000474225551.html) |
| 1   | 12 or 24V Power Supply*        | [Amazon](https://a.co/d/ifaZIT9), [Aliexpress](https://www.aliexpress.com/item/32975192317.html) |
| 2   | 608 Skate Bearings      | [Amazon](https://amzn.to/3isBzrW), [Aliexpress](https://www.aliexpress.com/item/32700232097.html) | 
| 1   | 5/16" x 1-1/2" hex head bolt | |
| 1   | 5/16" washers | |
| 2   | 5/16" nuts | |
|4 | #8 x 1.75" countersunk wood screws | |

*Power supply can be in the 12v-24v range.  Aim for 1amp or greater.  If using the SmartSpin2K PCB Kit, you will need a 5.5x2.1 connector.

#### Shifter Hardware

| Quantity |           Part          | Source                  | Shifter Version |
|:-----:|-----------------------|-------------------------|-------|
| 1   | Shifter PCB Kit       | [Official Resellers](https://www.smartspin2k.com/purchase-kits), [Self-Source](https://github.com/eMadman/SmartSpin2K-Shifter) | PCB Shifter |
| 2   | Tactile Switches        | [Amazon](https://amzn.to/33ezmKx), [Aliexpress](https://www.aliexpress.com/item/32958087576.html) | DIY Shifter
| 1   | Stereo RCA-->3.5mm headphone "Y" Cable | [Aliexpress](https://www.aliexpress.com/item/4000204275028.html) | DIY Shifter

#### Self-sourced PCB Hardware (Version 2)
{: no_toc }
<details markdown="block">
<summary>Expand to View</summary>
In addition to the common hardware listed above, you will need the following hardware to build SmartSpin2k Version 2

| Quantity | Part                                         | Source                                                                                                         |
|:-----:|---------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| 1   | ESP32 Dev Board                             | [Amazon](https://amzn.to/2ZNyjQX), [Aliexpress](https://www.aliexpress.com/item/1005001267643044.html)         |
| 1   | TMC2225                                     | [Amazon](https://amzn.to/3kctdEQ), [Aliexpress](https://www.aliexpress.com/item/4000296898203.html)            |
| 1   | JST-XH connectors kit                       | [Amazon](https://a.co/d/14NJyfu)                                                                                |
| 1   | 3.5mm stereo headphone connector (shifter connector) | [Aliexpress](https://www.aliexpress.com/item/4000640677390.html)                      |
| 1   | 5.5X2.1mm Dc Power connector                | [Aliexpress](https://www.aliexpress.com/item/4000694128319.html)                                                |
| 1   | PCB                                   | [PCBWay](https://www.pcbway.com/project/shareproject/SmartSpin2k_PCB.html) |
| 1   | Recom R-78E5.0-0.5                    | [Octopart](https://octopart.com/r-78e5.0-0.5-recom+power-21698196)    |
| 1   | 10uF 50V capacitor  (6mm diameter or smaller)   | [Octopart](https://octopart.com/50ml10mefc5x7-rubycon-19941930)       |
| 1   | 100uF 25V capacitor (6mm diameter or smaller)   | [Octopart](https://octopart.com/25yxj100m5x11-rubycon-24361474)       |
| 1   | 0.1uF 50V capacitor                   | [Octopart](https://octopart.com/c315c104m5u5ta7301-kemet-20253274)    |
| 1   | 1K Ohm resistor                       | [Octopart](https://octopart.com/rnf14ftd1k00-stackpole+electronics-19224710) |

{: .caution }
Review readme documentation if using published mods like the direct mount. 

</details>

## Printing Instructions
We recommend printing in a strong material like ABS, CF-Nylon, or PETG.  Use 4 perimeters and 40% infill. 

You will need the following common parts for Version 3:
* Both case halves [from V3 cases/case](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/V3%20-%20Integrated%20PCB/Case/Case)
* The window in a translucent/transparent material [from V3 case/case](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/V3%20-%20Integrated%20PCB/Case/Case)
* The knob cup [from KnobCups](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/KnobCups) in an accent color.
* Both gears [from Common Assets/Gears](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Gears) in an accent color.
* The shifter strap(s) (single or set) using TPU from [Common Assets/Shifters](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Shifters)

You will also need the specific parts to adapt to your bike:
* An arm that's the proper length for your bike [from Common Assets/Arm](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Arm)
* A bike mount for your bike [from Common Assets/Bike Mount](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Bike%20Mount)
* The proper knob adapter for your bike [from Common Assets/Inserts](https://github.com/doudar/SmartSpin2k/tree/develop/Hardware/Common%20Assets/Inserts)


## How to build the SS2K

| Hardware Version | Link to Guide |
| ------------------|---------------|
| Version 3 | [Download Assembly Manual](https://github.com/doudar/SmartSpin2k/blob/develop/SS2kR3BuildingInstructions.pdf) |
| Version 2| [Watch Video](https://www.youtube.com/watch?v=0vqzwOFnhxg) |

## Shifter Assembly 

| Hardware Version | Link to Guide |
| ------------------|---------------|
| PCB Shifter | [Github](https://github.com/eMadman/SmartSpin2K-Shifter) |
| Hand wired Shifter | [Watch Video](https://www.youtube.com/watch?v=jm69MVKjAxE) |

