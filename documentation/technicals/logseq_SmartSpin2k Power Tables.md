- # Documentation: Power Table Generation in SmartSpin2k
- ## Overview
  
  This documentation explains the process of generating and managing the power table in the SmartSpin2k system. The power table is central to optimizing resistance control by reducing latency during large ERG target changes. This document is targeted at prospective developers interested in contributing to or modifying the SmartSpin2k system.  
  
---
- ## Table of Contents
  
	1. **Introduction**

	- Purpose of the Power Table
	- Structure of the Power Table
	- Role in SmartSpin2k
		2. **Power Table Generation Process**

	- Criteria for Capturing Entries
	- Averaging Power Buffer Data
	- Quality Tests for Entries
	- Position Mapping in the Table
		3. **Validation and Quality Control**

	- Neighbor Testing
	- Downvoting and Removal of Low-Quality Entries
		4. **Table Population**

	- Interpolation Logic
	- Extrapolation Techniques
	- Diagonal Extrapolation
		5. **Saving and Loading the Power Table**

	- Format of Saved Tables
	- Offset Calculation During Loading
	- Quality Check Against Saved Data
		6. **Resetting and Logging**

	- Reset Mechanisms
	- Logging Table State
		7. **Code Walkthrough**

	- Key Classes and Methods
	- Relevant Constants and Macros
	- Example Scenarios and Debugging Logs
		8. **Future Improvements**

	- Identified Weaknesses
	- Suggestions for Enhancing Sampling and Interpolation
	    
---
- ## 1. Introduction to the SmartSpin2k Power Table
  
  The power table in the SmartSpin2k system is a critical component that streamlines resistance adjustments by predicting stepper motor positions, ensuring rapid and precise responses. This enhances the user experience by providing smooth and consistent resistance changes during workouts. At its core, the power table is a matrix that precomputes stepper motor positions based on cadence (RPM) and power (watts). This precomputation ensures that the system can make rapid and accurate adjustments during exercise sessions, reducing the need for real-time calculations and enhancing overall performance.  
- ### How It Works (Simplified Explanation)
  
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

- ### Summary
  
  The SmartSpin2k power table transforms real-time cycling data into a precomputed matrix. This process ensures fast, accurate, and seamless resistance adjustments, allowing for a smoother cycling experience. This documentation will guide you through the technical details of how the power table operates, how it is managed, and its role in delivering a superior cycling experience.  
- ## 2. Power Table Generation Process
  
  The power table is dynamically generated during SmartSpin2k operation to minimize latency when adjusting resistance by precomputing stepper motor positions for a range of cadence and power values. This reduces the time spent seeking target resistance levels during sudden changes, ensuring smoother operation. This section details the process of generating and managing the power table.  
  
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
- ### 2.1 Criteria for Capturing Entries
  
  Entries are added to the power table based on specific criteria:  
- **Cadence and Power Thresholds**:
	- Cadence must be at least 50 RPM.
	- Power values must be between 10 W and the table’s maximum wattage (calculated as `POWERTABLE_WATT_SIZE * POWERTABLE_WATT_INCREMENT`).
- **Stability Requirement**:
	- At least three consecutive power readings within predefined tolerances:
		- Power variation must be less than half the watt increment size (`POWERTABLE_WATT_INCREMENT / 2`).
		- Cadence variation must be less than the cadence increment size (`POWERTABLE_CAD_INCREMENT`).
		    
		  If these conditions are met, the cadence, power, and stepper motor position are averaged and used to create a new entry.  
		    
---
- ### 2.2 Averaging Power Buffer Data
  
  Before an entry is added to the table, data from the power buffer is averaged:  
- **Power Buffer**:
	- A circular buffer stores recent power readings.
	- Entries include cadence, power, and stepper motor position.
	- When the buffer fills, the values are averaged to calculate a stable input for the power table.
	    
	  Steps:  
	    
		1. Accumulate power (`watts`), cadence (`cad`), and stepper motor position (`targetPosition`) from the buffer.
		2. Compute averages:

	- `averageWatts = totalWatts / validEntries`
	- `averageCad = totalCad / validEntries`
	- `averagePosition = totalPosition / validEntries`
		3. If no valid entries are found, the buffer is reset.
---

- ### 2.3 Quality Tests for Entries
  
  Before adding an entry to the power table, a quality test is performed to validate the data:  
- **Neighbor Testing**:
	- The new entry is compared with adjacent table entries:
		- **Left Neighbor**: Lower wattage at the same cadence.
		- **Right Neighbor**: Higher wattage at the same cadence.
		- **Top Neighbor**: Lower cadence at the same wattage.
		- **Bottom Neighbor**: Higher cadence at the same wattage.
	- The new value must logically align with its neighbors.
- **Downvoting and Removal**:
	- Entries that conflict with the new value are “downvoted” (their quality score is reduced).
	- Entries with a quality score of zero are removed from the table.
	    
---
- ### 2.4 Position Mapping in the Table
  
  The power table is a matrix with rows representing cadence and columns representing power:  
- **Cadence Index**:
	- Computed as `cadenceIndex = round((cad - MINIMUM_TABLE_CAD) / POWERTABLE_CAD_INCREMENT)`.
- **Power Index**:
	- Computed as `powerIndex = round(watts / POWERTABLE_WATT_INCREMENT)`.
	    
	  These indices map the averaged values to a specific cell in the table. If the cell is empty, the new entry is added. If the cell already contains a value, the new value is averaged with the existing one to update the entry.  
	    
---
- ### Summary
  
  The power table generation process ensures accurate and stable entries by using strict criteria, averaging buffer data, and performing quality checks. This dynamic approach allows the table to adapt to real-time changes while maintaining logical consistency.  
  
---
- ## 3. Validation and Quality Control
  
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
- ### 3.1 Neighbor Testing
  
  Neighbor testing validates new entries against adjacent values in the power table to ensure logical consistency:  
- **Left Neighbor**:
	- Represents the stepper motor position for a lower wattage at the same cadence.
	- The new entry must have a higher or equal position value compared to the left neighbor.
- **Right Neighbor**:
	- Represents the stepper motor position for a higher wattage at the same cadence.
	- The new entry must have a lower or equal position value compared to the right neighbor.
- **Top Neighbor**:
	- Represents the stepper motor position for a lower cadence at the same wattage.
	- The new entry must have a higher or equal position value compared to the top neighbor.
- **Bottom Neighbor**:
	- Represents the stepper motor position for a higher cadence at the same wattage.
	- The new entry must have a lower or equal position value compared to the bottom neighbor.
- ### 3.2 Quality Scores and Downvoting
  
  Entries are assigned a quality score that represents their reliability:  
- **Downvoting**:
	- When a new entry conflicts with a neighbor, the neighbor's quality score is reduced.
	- This process prevents faulty values from unduly influencing the table.
- **Entry Removal**:
	- If an entry’s quality score reaches zero, it is removed from the table.
	- This ensures that the table only contains reliable data.
- ### 3.3 Handling Conflicts
  
  When conflicts arise between a new entry and its neighbors:  
  
	1. **Conflict Identification**:

	- Neighboring entries that violate logical constraints are flagged.
		2. **Resolution**:

	- The quality score of conflicting neighbors is reduced.
	- If the new entry fails validation against multiple neighbors, it is discarded.
- ### 3.4 Maintaining Table Integrity
  
  To ensure the table’s integrity over time:  
- **Periodic Cleaning**:
	- Entries with low-quality scores or outdated data are periodically removed.
	- This maintains a high standard of reliability across the table.
- **Logging**:
	- Detailed logs are generated to track changes and identify recurring issues.
	- These logs assist in debugging and improving table algorithms.
- ### Summary
  
  The validation and quality control process is essential for maintaining the logical consistency and reliability of the power table. By rigorously testing new entries and enforcing strict quality standards, the system ensures optimal performance during operation.  
- ## 4. Table Population
  
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
- ### 4.1 Interpolation Logic
  
  Interpolation is used to estimate values for empty cells in the table by analyzing adjacent data:  
- **Horizontal Interpolation**:
	- Missing values in a row (constant cadence) are computed using the nearest non-empty cells to the left and right.
	- Formula: Value= $$Left Value+(Right Value−Left Value)×(Index−Left Index)Right Index−Left Index\text{Value} = \text{Left Value} + \frac{(\text{Right Value} - \text{Left Value}) \times (\text{Index} - \text{Left Index})}{\text{Right Index} - \text{Left Index}}$$
- **Vertical Interpolation**:
	- Missing values in a column (constant power) are computed using the nearest non-empty cells above and below.
	- Formula: Value= $$Top Value+(Bottom Value−Top Value)×(Index−Top Index)Bottom Index−Top Index\text{Value} = \text{Top Value} + \frac{(\text{Bottom Value} - \text{Top Value}) \times (\text{Index} - \text{Top Index})}{\text{Bottom Index} - \text{Top Index}}$$
- **Validation**:
	- Neighbor testing is performed to ensure interpolated values align logically with surrounding data.
	    
---
- ### 4.2 Extrapolation Techniques
  
  Extrapolation fills in values outside the range of available data by extending trends:  
- **Horizontal Extrapolation**:
	- Values to the left or right of existing data in a row are extrapolated based on the gradient of the nearest two non-empty cells.
- **Vertical Extrapolation**:
	- Values above or below existing data in a column are extrapolated similarly.
- **Diagonal Extrapolation**:
	- For diagonally missing cells, trends from adjacent rows and columns are combined to estimate a value.
	    
---
- ### 4.3 Validation During Table Population
  
  All interpolated and extrapolated values undergo validation:  
  
	1. **Logical Consistency**:

	- Each new value is checked against its neighbors for logical alignment.
		2. **Quality Checks**:

	- Values failing consistency checks are adjusted or discarded.
		3. **Recursive Refinement**:

	- The table is iteratively refined until no further changes occur.
	    
---
- ### 4.4 Filling the Table
  
  The table is populated through iterative steps:  
  
	1. **Initial Interpolation**:

	- Perform horizontal and vertical interpolation for all rows and columns.
		2. **Extrapolation**:

	- Extend data for missing values at the table boundaries.
		3. **Diagonal Extrapolation**:

	- Address remaining gaps using diagonal patterns.
		4. **Validation and Adjustment**:

	- Verify all new values and adjust as needed.
		5. **Completion**:

	- Repeat steps until the entire table is populated.
	    
---
- ## 5. Saving and Loading the Power Table
  
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
- ### 5.1 Saving the Power Table
  
  When saving a power table, the following steps occur:  
  
	1. **Open File for Writing**:

	- A file is created or overwritten to store the power table.
	- The file uses a specific format (e.g., `.ptab` or `.csv`).
		2. **Write Metadata**:

	- Essential metadata, such as the version, size, and homing state, is written to the file.
		3. **Write Power Table Data**:

	- Each entry in the power table, including target positions and quality scores, is serialized and saved.
		4. **Close File**:

	- The file is closed to complete the save operation and ensure data integrity.
	    
---
- ### 5.2 Loading the Power Table
  
  When loading a power table, the following steps occur:  
  
	1. **Open File for Reading**:

	- The system opens the saved file for reading.
		2. **Read Metadata**:

	- Metadata is extracted to verify the file's compatibility and ensure it matches the expected format.
		3. **Validate File Contents**:

	- The data is checked for completeness and reliability.
	- If the table was created without initial homing, offsets are calculated to align the data.
		4. **Load Power Table into Memory**:

	- Valid entries are loaded into the system's active memory, replacing any existing data.
		5. **Abort on Invalid Data**:

	- If the validation fails, the load operation is aborted, and error handling procedures are triggered.
	    
---
- ### 5.3 Error Handling and Recovery
  
  Error handling ensures that invalid files do not compromise system performance:  
- **File Format Errors**:
	- If the file format or version is incompatible, an error is logged, and the operation is halted.
- **Incomplete Data**:
	- If the file contains incomplete or corrupt data, the system attempts recovery or prompts the user to re-save the table.
	    
---
- ### Summary
  
  The saving and loading mechanisms ensure that the SmartSpin2k system retains power table data across sessions, enabling consistent operation and reducing the need for recalibration. Proper validation and error handling guarantee the reliability of this process.  
  
---
- ## 6. Resetting and Logging
  
  Resetting and logging are essential processes for maintaining and troubleshooting the SmartSpin2k system. Resetting clears power table data for recalibration, while logging provides valuable insights into the table's state and performance.  
  
  ```mermaid
  graph TD
    A[Start Reset or Logging] --> B{Operation Type?}
    B -->|Reset| C[Clear Power Table]
    C --> D[Reset Metadata]
    D --> E[Save Reset State to File]
    E --> F[Reset Completed]
    B -->|Logging| G[Retrieve Current Power Table State]
    G --> H[Format Table for Logs]
    H --> I[Write Logs to System]
    I --> J[Log Completed]
  ```
- ### 6.1 Resetting the Power Table
  
  Resetting allows the system to clear its current power table, preparing it for recalibration:  
  
	1. **Clear Power Table**:

	- All entries in the power table are deleted.
	- Quality scores and target positions are set to their default states.
		2. **Reset Metadata**:

	- Metadata such as homing state, version, and reliability scores are cleared or reset to default values.
		3. **Save Reset State to File**:

	- A reset state is saved to the file system to ensure consistency across sessions.
		4. **Completion**:

	- The system verifies the reset process and marks it as completed.
	    
---
- ### 6.2 Logging Power Table State
  
  Logging provides an audit trail of the power table and system behavior:  
  
	1. **Retrieve Current Power Table State**:

	- The system fetches the active power table, including all entries, metadata, and quality scores.
		2. **Format Table for Logs**:

	- The power table is formatted into a human-readable layout, including headers for cadence, power, and stepper positions.
		3. **Write Logs to System**:

	- Logs are written to the designated logging system or file.
	- The log includes details of the table state, timestamps, and any detected issues.
		4. **Completion**:

	- The logging process is finalized, ensuring all data is correctly saved.
	    
---
- ### 6.3 Error Handling in Resetting and Logging
  
  To ensure reliability, both resetting and logging include error handling mechanisms:  
- **Reset Errors**:
	- If the reset process fails, the system reverts to its previous state and logs the issue.
- **Logging Errors**:
	- Incomplete or failed logs are flagged, and the system retries the operation or notifies the user.
	    
---
- ### Summary
  
  Resetting and logging are vital for system maintenance and debugging. Resetting prepares the system for new operations, while logging captures detailed information about its performance and state. Together, these processes ensure the SmartSpin2k system operates efficiently and transparently.  
  
---
- ## 7. Code Walkthrough
  
  This section provides a detailed walkthrough of the key components and functions in the SmartSpin2k system related to power table generation, population, saving/loading, resetting, and logging. By understanding the code structure, prospective developers can contribute effectively.  
  
  ```mermaid
  graph TD
    A[Start Code Walkthrough] --> B[Identify Core Components]
    B --> C[Power Table Class]
    C --> D[Initialization and Attributes]
    C --> E[Core Methods]
    B --> F[Buffer Management]
    F --> G[Power Buffer Class]
    G --> H[Attributes and Buffering Logic]
    G --> I[Methods for Averaging and Validation]
    B --> J[Control Logic]
    J --> K[ERG Mode Class]
    K --> L[Power Table Integration]
    K --> M[Logging and Debugging]
    L --> N[Final Outputs]
  ```
- ### 7.1 Power Table Class
  
  The `PowerTable` class is central to managing the power table's structure and data.  
- **Attributes**:
	- Stores table data as a 2D matrix.
	- Includes metadata such as version, state, and quality scores.
- **Key Methods**:
	- `addEntry(cadence, power, position)`: Adds or updates a table entry.
	- `validateEntry(index)`: Checks an entry's alignment with neighbors.
	- `resetTable()`: Clears the table for recalibration.
	    
---
- ### 7.2 Buffer Management
  
  The `PowerBuffer` class handles real-time data buffering before adding entries to the power table.  
- **Attributes**:
	- Circular buffer for storing recent cadence, power, and stepper positions.
- **Key Methods**:
	- `averageBuffer()`: Computes average values from the buffer.
	- `clearBuffer()`: Resets the buffer when data becomes invalid.
	    
---
- ### 7.3 Control Logic in ERG Mode
  
  The `ErgMode` class integrates user inputs and hardware controls with the power table.  
- **Power Table Integration**:
	- Handles power table lookups and updates.
- **Logging and Debugging**:
	- Provides detailed logs for operations and errors.
	- Includes debugging tools to monitor real-time data.
	    
---
- ### 7.4 Debugging and Testing
  
  The code includes utilities for testing and debugging:  
- **Assertions**:
	- Ensures logical consistency in table entries.
- **Test Scripts**:
	- Automated tests simulate typical scenarios and edge cases.
	    
---
- ## 8. Future Improvements
  
  The SmartSpin2k power table is already functional and effective, but improvements can be focused on enhancing developer quality of life and user experience, keeping in mind the limitations of the ESP32’s memory and compute resources. The following suggestions aim for practical and measurable enhancements.  
- ### 8.1 Simplified Sampling Mechanisms
- **Current Challenge**:
	- Rapid fluctuations in cadence and power make it difficult to capture stable data points.
- **Proposed Solution**:
	- Use simple moving averages or exponential smoothing to stabilize data before adding entries to the table.
	- Allow developers to adjust sampling tolerances via configuration settings, making the system adaptable without adding computational overhead.
- ### 8.2 Interpolation Refinements
- **Current Challenge**:
	- Interpolation must account for variability in human output, ensuring logical transitions without unrealistic values.
- **Proposed Solution**:
	- Implement basic linear interpolation with guardrails to reject outlier values.
	- Focus on ensuring smooth transitions in the power table rather than precision, keeping the process lightweight.
- ### 8.3 Practical Table Resolution
- **Current Challenge**:
	- A high-resolution table could strain memory and add complexity, while low resolution may oversimplify transitions.
- **Proposed Solution**:
	- Maintain the current resolution but allow for minor adjustments in step sizes via configuration settings.
	- Provide developers with tools to visualize and test resolution changes for usability improvements.
- ### 8.4 Enhanced Logging for Developers
- **Current Challenge**:
	- Debugging the power table logic can be time-consuming without clear insights into its state and changes.
- **Proposed Solution**:
	- Expand logging to include contextual information like recent measurements, quality checks, and rejected entries.
	- Offer a debug mode that outputs the power table in CSV format for analysis in external tools.
- ### 8.5 User-Friendly Save/Load Features
- **Current Challenge**:
	- The save/load process is functional but lacks polish for end users.
- **Proposed Solution**:
	- Add an option for auto-saving power tables at regular intervals or upon session completion.
	- Provide simple visual or textual feedback (e.g., LED blink patterns or on-screen messages) to confirm save/load success.
- ### 8.6 Developer Tools for Open Source Contributions
- **Current Challenge**:
	- Contributing to the project requires deep familiarity with the codebase, which can be a barrier for new developers.
- **Proposed Solution**:
	- Include clear documentation for core functions, supported by example scripts for common scenarios.
	- Provide an emulator or simulator for developers to test changes without requiring the hardware.
	    
---
- ### Summary
  
  These improvements are designed to enhance the developer and user experience while respecting the hardware constraints of the ESP32. By focusing on practical adjustments that streamline workflows and improve usability, the SmartSpin2k project can continue to thrive as an open source solution for cycling enthusiasts.
