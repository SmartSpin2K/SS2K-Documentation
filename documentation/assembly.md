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

This sourcing guide assumes you have a [compatible spin bike](../compatibility).

You should be able to source all components for < $100 USD including shipping

### Common Hardware - All Versions
<details markdown="block">
<summary>Expand to view</summary>
The components in this list are required for the assembly of all versions of the SmartSpin2K

| qty |           Part          | Amazon                  | Aliexpress                                            
|-----|:-----------------------:|-------------------------|-------------------------------------------------------|
| 1   | [PCB + wiring harness kit](https://www.smartspin2k.com/purchase-kits) | n/a | n/a |
| 1   | 38mm NEMA 17 Stepper | https://a.co/d/iN8ikZy | https://www.aliexpress.com/item/4000474225551.html    |
| 1   | 12 or 24V Power Supply*        | https://a.co/d/ifaZIT9 | https://www.aliexpress.com/item/32975192317.html      |
| 2   | Tactile Switches        | https://amzn.to/33ezmKx | https://www.aliexpress.com/item/32958087576.html      |
| 2   | 608 Skate Bearings      | https://amzn.to/3isBzrW | https://www.aliexpress.com/item/32700232097.html      | 
| 1   | Stereo RCA-->3.5mm headphone "Y" Cable | |  https://www.aliexpress.com/item/4000204275028.html | 
| 1 | 5/16" x 1-1/2" hex head bolt | | | | |
| 1 | 5/16" washers | | | | |
| 2 | 5/16" nuts | | | | |

*Power supply can be in the 12v-24v range.  Aim for 1amp or greater.  If using the SmartSpin2K PCB Kit, you will need a 5.5x2.1 connector.
</details>

### Version 2 (legacy) Hardware
<details markdown="block">
<summary>Expand to view</summary>
Inn addition to the common hardware listed above, you will need the following hardware to build SmartSpin2k Version 2

| qty |           Part          | Amazon                  | Aliexpress                                            
|-----|-----------------------|-------------------------|-------------------------------------------------------|
| 1   | ESP32 Dev Board         | https://amzn.to/2ZNyjQX | https://www.aliexpress.com/item/1005001267643044.html |
| 1   | TMC2225                 | https://amzn.to/3kctdEQ | https://www.aliexpress.com/item/4000296898203.html    |
| | JST-XH connectors kit | https://a.co/d/14NJyfu | | | |
| 1   |  3.5mm stereo headphone connector (shifter connector)  | | https://www.aliexpress.com/item/4000640677390.html | 
| 1 | 5.5X2.1mm Dc Power connector | | https://www.aliexpress.com/item/4000694128319.html |

Please check the readme.md for the Direct Mount mod for additional required components

|qty    |         Part             |              Link      |  Notes               |
|:-----:|--------------------------|---------------------------------------|--|
|1      |PCB| https://www.pcbway.com/project/shareproject/SmartSpin2k_PCB.html |                   
|1      |Recom R-78E5.0-0.5| https://octopart.com/r-78e5.0-0.5-recom+power-21698196 | | 
|1 | 10uF 50V capacitor | https://octopart.com/50ml10mefc5x7-rubycon-19941930 | Source 6mm diameter or smaller |
|1 | 100uF 25V capacitor | https://octopart.com/25yxj100m5x11-rubycon-24361474 | Source 6mm diameter or smaller | 
|1 | 0.1uF 50V capacitor | https://octopart.com/c315c104m5u5ta7301-kemet-20253274 | |
|1 | 1K Ohm resistor | https://octopart.com/rnf14ftd1k00-stackpole+electronics-19224710 | |
|4 | #8 x 1.75" countersunk wood screws | |Not used in direct mount mod |
</details>

## How to build the SS2K

| Hardware Version | Link to Guide |
| ------------------|---------------|
| Version 3 | [Download](https://github.com/doudar/SmartSpin2k/blob/develop/SS2kR3BuildingInstructions.pdf) |
| Version 2| [Watch Video](https://www.youtube.com/watch?v=0vqzwOFnhxg) |

## Shifter Assembly 

| Hardware Version | Link to Guide |
| ------------------|---------------|
| PCB Shifter | [Github](https://github.com/eMadman/SmartSpin2K-Shifter) |
| Hand wired Shifter | [Watch Video](https://www.youtube.com/watch?v=jm69MVKjAxE) |

