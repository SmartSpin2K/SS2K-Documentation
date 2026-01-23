---
title: How the Power Table Works
parent: Documentation
layout: page
nav_order: 7
---
# Documentation: Power Table Generation in SmartSpin2k
{: .no_toc }

Table of contents
{: .no_toc }
{: .text-delta }
- TOC
{:toc}
---

## 1. Introduction to the SmartSpin2k Power Table
  
The power table in the SmartSpin2k system simplifies resistance adjustments, making workouts smoother and more consistent. It works by predicting the stepper motor positions needed for different speeds (RPM) and power levels (watts). By doing this in advance, the system responds quickly and accurately during exercise, improving performance without delays.

### How It Works (high level)
  
Picture riding a stationary bike where pedaling faster (higher cadence) or applying more effort (higher power) prompts the system to adjust resistance, keeping your workout engaging. The SmartSpin2k uses a power table to predict and preset these resistance adjustments.  
  
Here's how the process works:  
  
1. As you ride, the system continuously measures your cadence and power.
2. When stable measurements are detected, the system records these values along with the resistance position.
3. These measurements are mapped to a table, filling in specific entries for different cadence and power combinations.
4. The table is refined over time, using neighboring values to fill in missing data points and ensure smooth transitions.
5. The system can save or load this table, making it reusable across sessions.  
  
This approach ensures that when you suddenly pedal harder or slower, the system already knows how to adjust the resistance without delay by referencing precomputed stepper motor positions in the power table. These precomputed values allow for instant lookups, eliminating the lag associated with real-time calculations.

```mermaid
graph TD
A[Start Cycling Session] --> B[Measure Cadence and Power]
B --> C{Stable Measurements?}
C -->|Yes| D[Record Cadence, Power, and Resistance Position]
C -->|No| E[Continue Monitoring]
D --> F[Map Values to Power Table]
F --> G{Missing Values?}
G -->|Yes| H[Interpolate or Extrapolate Data]
G -->|No| I[Refine Table with New Data]
H --> I
I --> J[Save or Load Table]
J --> K[Ready for Adjustments]
```

---

## 2. Power Table Generation Process
  
The power table is dynamically generated during SmartSpin2k operation to minimize latency when adjusting resistance by precomputing stepper motor positions for a range of cadence and power values. This reduces the time spent seeking target resistance levels during sudden changes, ensuring smoother operation. This chart details the process of generating and managing the power table.  
  
```mermaid
graph TD
A[Start: SmartSpin2k Operation] --> B[Monitor Cadence and Power]
B --> C{Cadence >= 50 RPM?}
C -->|Yes| D{Power within Range?}
C -->|No| E[Skip Entry]
D -->|Yes| F[Capture Data in Power Buffer]
D -->|No| E
F --> G[Averaging Buffer Data]
G --> H{Quality Test}
H -->|Pass| I[Add Entry to Table]
H -->|Fail| J[Discard Entry]
I --> K[Update Table with Averaged Data]
K --> L[Ready for Resistance Adjustments]
```
  
---

## 3. Validation and Quality Control
  
The validation and quality control mechanisms ensure that the power table remains logically consistent and reflects accurate data. These processes maintain the reliability of the table by enforcing strict tests and corrective actions when data conflicts are detected.  

```mermaid
graph TD
A[New Entry] --> B[Identify Left Neighbor]
A --> C[Identify Right Neighbor]
A --> D[Identify Top Neighbor]
A --> E[Identify Bottom Neighbor]
B --> F{Valid Against Left Neighbor?}
C --> G{Valid Against Right Neighbor?}
D --> H{Valid Against Top Neighbor?}
E --> I{Valid Against Bottom Neighbor?}
F --> |Yes| J[Proceed]
F --> |No| K[Downvote Left Neighbor]
G --> |Yes| J
G --> |No| L[Downvote Right Neighbor]
H --> |Yes| J
H --> |No| M[Downvote Top Neighbor]
I --> |Yes| J
I --> |No| N[Downvote Bottom Neighbor]
J --> O[Add/Update Entry in Table]
K --> P[Check Quality Score]
L --> P
M --> P
N --> P
P --> |Quality >= 0| Q[Retain Neighbor]
P --> |Quality < 0| R[Remove Neighbor]
R --> S[Remove Faulty Neighbor]
O --> T[Periodic Cleaning]
T --> U{Low-Quality Entries Found?}
U --> |Yes| V[Remove Low-Quality Entries]
U --> |No| W[Log Table State]
W --> X[Generate Debug Logs]
X --> Y[Integrity Maintained]
```

---

## 4. Table Population
  
Table population in the SmartSpin2k system is responsible for filling in missing values in the power table to create a comprehensive data set. This ensures seamless operation by leveraging interpolation and extrapolation techniques to estimate unknown entries based on available data.  
  
```mermaid
graph TD
A[Start Table Population] --> B[Identify Missing Values]
B --> C{Neighbor Data Available?}
C -->|Yes| D[Perform Interpolation]
D --> E[Validate Interpolated Values]
C -->|No| F{Boundary Missing Values?}
F -->|Yes| G[Perform Extrapolation]
G --> E
F -->|No| H[Perform Diagonal Extrapolation]
H --> E
E --> I{Values Pass Validation?}
I -->|Yes| J[Insert Values into Table]
I -->|No| K[Adjust or Discard Values]
J --> L[Iterate Until Table is Full]
K --> L
L --> M[Complete Table Population]
```
	    
---

## 5. Saving and Loading the Power Table
  
Saving and loading the power table is crucial for preserving the calibration and performance data of the SmartSpin2k system. This process allows users to retain and reuse power tables across sessions and devices, ensuring consistent performance without repeated recalibration.  
  
```mermaid
graph TD
A[Start Saving or Loading] --> B{Operation Type?}
B -->|Save| C[Open File for Writing]
C --> D[Write Metadata]
D --> E[Write Power Table Data]
E --> F[Close File]
F --> G[Save Completed]
B -->|Load| H[Open File for Reading]
H --> I[Read Metadata]
I --> J[Validate File Contents]
J --> K{Valid Data?}
K -->|Yes| L[Load Power Table into Memory]
K -->|No| M[Abort Load Operation]
L --> G[Load Completed]
M --> N[Error Handling]
```
