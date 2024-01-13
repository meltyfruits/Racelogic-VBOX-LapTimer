# <p align="center">VBOX LapTimer (RACELOGIC) SimHub Dashboard</p>
## <p align="center">VBOX LapTimer, aka Racelogic, replica dashboard for SimHub</p>
<p align="center"><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.png?raw=true" alt="menuscreen"/></p>

A detailed replica of VBOX Motorsport's LapTimer device, otherwise known as a Racelogic, for SimHub. To the extent that is possible and reasonable, all display modes of the device are available, including customizable settings such as decimal places, speed unit, inverted screen, and more. The full list of features including how to use the dashboard are below.

### Overall 

### Menu & Settings

### Live Speed
+ Displays the current speed in realtime in kilometres per hour (km/h) or miles per hour (mph)
> #### Overview
>
> + Can display zero, one, or two decimal places. *E.g., 123, 123.4, 123.45.*
> > + The number of decimal places shown can be set in the ***settings.ini*** file:
> >
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`

### Max Speed
+ Displays this session's highest top speed. This value is rolling.
> #### Overview
>
> + Can display zero, one, or two decimal places. *E.g., 123, 123.4, 123.45.*
> > + The number of decimal places shown can be set in the ***settings.ini*** file:
> >
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`

### Speed Bar

### Predictive Lap Timing
+ Displays the current delta to the session best and a graph representing that time graphically.
> #### Overview
> 
> + On the first lap, the *WAITING FOR START LINE* screen will be displayed.
> 
> + After completing the first lap, the *CREATING REFERENCE LAP* screen will display. A rolling lap time (current lap time) will be displayed as well as two teal-coloured LEDs.
>
> + After crossing the start line a second time, the current lap delta will be displayed.
>
> + Each subsequent time the start line is crossed the last lap time and the delta (Delta-T/ΔT) to the seesion best are displayed. 

## Dependencies (NOT IMPLEMENTED YET)
- [SwitchableProperties by MorGuux](https://github.com/MorGuux/SwitchableProperties)

## References
- [VBOX LapTimer User Guide](https://en.racelogic.support/VBOX_Motorsport/Product_Info/Lap_Timing_and_Pit_Timing/VBOX_LapTimer/User_Guide_%E2%80%93_VBOX_LapTimer)
- [VBOX LapTimer Manual](http://www.racelogic.co.uk/_downloads/vbox/Manuals/Data_Loggers/RLVBLAP01-English.pdf)
- [VBOX LapTimer Data Sheet](https://www.vboxmotorsport.co.uk/downloads/datasheets/VBLAP01-v2_DATA.pdf)
- What are Delta-T & Delta-V and how can you use them to go faster? by VBOX Motorsport [(YouTube)](https://youtu.be/2__L7jgSxrM?si=AS7A6EfSwf3SzRJH)
- How to Configure Settings on a VBOX Pit Lane Timer by VBOX Motorsport [(YouTube)](https://youtu.be/z4Z_EmuvUpE?si=YZUQcie2WwvBUbRx)
- VBOX LapTimer: Real-time driver feedback to improve your driving performance by VBOX Motorsport [(YouTube)](https://youtu.be/QmiLKPPoL5w?si=UF4H4w5NgsmiAwFK)
- A VBOX LapTimer (Racelogic) on my sim rig | Demo and install | €1500 Giveaway | 4K by Laurence Dusoswa [(YouTube)](https://youtu.be/Wd3UMcYxYKM?si=IL_irQZFgNUqDuUu)
- REAL RACE CAR TECH FOR YOUR SIM! - Racelogic VBox Sim Pack Review by Boosted Media [(YouTube)](https://youtu.be/1gi8fLCZEsE?si=Ua8_JmaIl8o7QGbv)

## Development
### Core
* [ ] **Menu/Settings screens**
* [ ] **Live Speed**
  * [ ] Display Mode splash screen
  * [x] No decimal places
  * [x] One decimal place
  * [x] Two decimal places
  * [x] Inverted screen
  * [x] km/h units
  * [x] MPH units
  * [ ] kn units
* [ ] **Max Speed**
  * [ ] Display Mode splash screen
  * [x] No decimal places
  * [x] One decimal place
  * [x] Two decimal places
  * [x] Inverted screen
  * [x] km/h units
  * [x] MPH units
  * [ ] kn units
* [ ] **Speed Bar**
  * [ ] Display Mode splash screen
  * [x] Center Speed setting
  * [ ] Speed Display Range setting
  * [x] Inverted screen
  * [x] km/h units
  * [x] MPH units
  * [ ] kn units
* [ ] **Lap Count**
  * [ ] Display Mode splash screen
  * [x] Total Laps count
  * [x] Current Laps count
  * [x] Inverted screen
* [ ] **Predictive Lap Timing**
  * [ ] Display Mode splash screen
  * [x] Waiting for Start Line screen and logic
  * [x] Creating Reference Lap screen and logic
  * [ ] Delta T Bar Range setting
    * [ ] 2s
    * [ ] 5s
    * [ ] 10s
    * [ ] 30s
  * [ ] Delta V Light Range setting
    * [ ] 2 km/h
    * [ ] 5 km/h
    * [ ] 10 km/h
  * [ ] Delta-T Speed Mode
    * [ ] Speed setting
    * [ ] Time Delay setting
  * [ ] Delta-V LEDs
    * [x] Delta-V calculations
  * [x] Final lap time and split from session best
  * [x] Inverted screen
* [ ] **Lap Timing**
  * [ ] Display Mode splash screen
  * [x] One decimal place
  * [x] Two decimal places
  * [ ] Current Lap
  * [ ] Final lap time and split from session best
  * [ ] Split Time Display Period setting
    * [ ] 02.0s
    * [ ] 05.0s
    * [ ] 10.0s
  * [ ] Split-to-Split Time setting
  * [x] Rolling Lap Time setting
  * [ ] Static Lap Time setting
  * [ ] Inverted screen

### Sim Support
* [x] Assetto Corsa
* [ ] Assetto Corsa Competizione
* [ ] Automobilista 2
* [x] iRacing
* [ ] rFactor 2
      
### Misc
* [x] 2.4:1 ratio (120mm x 50mm) screens
* [x] Template screen
* [x] From scratch Racelogic logo
* [ ] Device correct colours
* [ ] Implement SwitchableProperties
* [ ] Outline text solution
* [ ] Documentation
* [ ] Code optimization
* [ ] Add Knots (kn) speed metric
* [ ] Configure LEDs
* [x] Update placeholder text (from 9s)
* [ ] Night mode

## Credits
- VBOX Motorsport (<https://vboxmotorsport.co.uk>)
- SimHub by SHWotever <https://www.simhubdash.com/> | [GitHub](https://github.com/SHWotever/SimHub)
- JSON auto-formatted with <https://j-brooke.github.io/FracturedJson/>
