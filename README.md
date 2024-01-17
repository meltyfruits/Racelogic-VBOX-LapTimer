# <p align="center">VBOX LapTimer (RACELOGIC) SimHub Dashboard</p>
## <p align="center">VBOX LapTimer, aka Racelogic, replica dashboard for SimHub</p>
<p align="center"><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.png?raw=true" alt="menuscreen"/></p>

A detailed replica of VBOX Motorsport's LapTimer device, otherwise known as a Racelogic, for SimHub. To the extent that is possible and reasonable, all display modes of the device are available, including customizable settings such as decimal places, speed unit, inverted screen, and more. The full list of features including how to use the dashboard are below. 

### Overall 
The following display modes have been implemented and are available:
+ Live Speed
+ Max Speed
+ Speed Bar
+ Lap Count
+ Predictive Lap Timing
+ Lap Timing
+ Lateral *g*
+ Lateral *g* Bar
+ Longitudinal *g*
+ Longitudinal *g* Bar

***WARNING*** Please do not change the order or line spacing of the *settings.ini* file. I very messily implemented the settings and haven't had the time to refactor it. If you run into issues with how things are displaying, overwrite your *settings.ini* with the default one. Also note that not all setting in the file are fully implemented. The display mode overviews below cover all settings that are currently implemented.

### Menu & Settings

### Live Speed

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.02.png?raw=true" alt="menuscreen"/></p>

+ Displays the current speed in realtime in kilometres per hour (km/h) or miles per hour (mph)
> #### Overview
>
> + Can display zero, one, or two decimal places. *E.g., 123, 123.4, 123.45.*
> > + The number of decimal places shown can be set in the ***settings.ini*** file:
> >
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`
> + Can display *km/h* and *mph* speed units.
> > + The speed unit displayed can be set in the ***settings.ini*** file:
> >
> > `SpeedUnits=0  ; 0 = KMH, 1 = MPH, 2 = KTS *(not implemented yet)*`

### Max Speed

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.03.png?raw=true" alt="menuscreen"/></p>

+ Displays this session's highest top speed.
> #### Overview
>
> + Can display zero, one, or two decimal places. *E.g., 123, 123.4, 123.45.*
> > + The number of decimal places shown can be set in the ***settings.ini*** file:
> >
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`
> + Can display *km/h* and *mph* speed units.
> > + The speed unit displayed can be set in the ***settings.ini*** file:
> >
> > `SpeedUnits=0  ; 0 = KMH, 1 = MPH, 2 = KTS *(not implemented yet)*`

### Speed Bar

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.04.png?raw=true" alt="menuscreen"/></p>

+ Displays the current speed in realtime in kilometres per hour (km/h) or miles per hour (mph) and a graph representing a positive and negative difference from the selected center speed.
> #### Overview
>
> + Can display *km/h* and *mph* speed units.
> > + The speed unit displayed can be set in the ***settings.ini*** file:
> >
> > `SpeedUnits=0  ; 0 = KMH, 1 = MPH, 2 = KTS *(not implemented yet)*`
> + The center speed of the graph can be set in the ***settings.ini*** file:
>
> `CenterSpeed=370 ; Any number between 10 and 1000 in increments of 10, e.g., 150, 160, 170`
> > The value rendered on the dashboard will match whatever speed unit is selected, e.g., Metric. `CenterSpeed` itself doesn't need to specify km/h, mph, or kn values. 
>
> + The speed disply range (+/-) of the graph can be set in the ***settings.ini*** file:
>
> `SpdDisplayRange=010 ; 005, 010, 020, 030, 040, 050, 060, 070, 080, 090, 100`
> > The value rendered on the dashboard will match whatever speed unit is selected, e.g., Metric. `SpdDisplayRange` itself doesn't need to specify km/h, mph, or kn values. 

### Lap Count

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.05.png?raw=true" alt="menuscreen"/></p>

### Predictive Lap Timing

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.06.png?raw=true" alt="menuscreen"/></p>

+ Displays the current delta to the session best and a graph representing that time graphically.
> #### Overview
> > Start up
> > + On the first lap, the *WAITING FOR START LINE* screen will be displayed.
> >
> > + After completing the first lap, the *CREATING REFERENCE LAP* screen will display. A rolling lap time (current lap time) will be displayed as well as two teal-coloured LEDs.
> >
> > + After crossing the start line a second time, the current lap delta will be displayed.
> >
> > + Each subsequent time the start line is crossed the last lap time and the delta (Delta-T/ΔT) to the seesion best are displayed.
> + The graph can display a range of time (+/-) in seconds.
> > + The amount of time displayed on the graph can be set in the ***settings.ini*** file:
> 
> `DeltaTBarRange=5  ; 2, 5, 10, 30 - time in seconds`
>
> + The Delta-V LEDs display the Delta Velocity between the current lap and the session best lap, represented in km/h. The LEDs function as a gauge, filling up depending on the Delta-V +/-. 
> > + The +/- range of the LEDs can be set in the ***settings.ini*** file:
> 
> `DeltaVLightRange=5  ; 2, 5, 10 - speed in km/h`

### Lap Timing

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.07.png?raw=true" alt="menuscreen"/></p>

+ Displays the current lap time and the current lap or statically displays the last lap time and current lap. Upon crossing the finish line, the last lap time will be displayed along with the last lap delta to the session best delta.
> #### Overview
>
> + Can display one or two decimal places. *E.g., 2'03.2 or 2'03.27*
> > + The number of decimal places shown can be set in the ***settings.ini*** file and is inherited from the *SpeedDecimalPlaces* settings. Please note that this screen will not display zero decimal places. If 0 is set in the .ini, 1 decimal place will be used instead:
> >
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`
>
> + Can display the last lap delta for a variable amount of time. *E.g., 2s, 5s, 10s, 15s, 20s*
> > + The length of time the split is displayed can be set in the ***settings.ini*** file:
> >
> > `SplitTimeDisplayPeriod=05.0  ; 02.0, 05.0, 10.0, 15.0, 20.0 - time in seconds`
>
> + Can display a rolling current lap time or a static last lap time.
> > + The setting for rolling or static timing can be set in the ***settings.ini*** file:
> >
> > `RollingLapTime=1  ; 0 = disabled, 1 = enabled`
  
### Lateral *g*

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.08.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Lateral *g* Bar

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.09.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Longitudinal *g*

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.10.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Longitudinal *g* Bar

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.11.png?raw=true" alt="menuscreen"/></p>

+ placeholder

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
  * [x] Speed Display Range setting
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
  * [x] Delta T Bar Range setting
    * [x] 2s
    * [x] 5s
    * [x] 10s
    * [x] 30s
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
  * [x] Current Lap
  * [x] Final lap time and split from session best
  * [ ] Split Time Display Period setting
    * [ ] 02.0s
    * [ ] 05.0s
    * [ ] 10.0s
  * [ ] Split-to-Split Time setting
  * [x] Rolling Lap Time setting
  * [x] Static Lap Time setting
  * [x] Inverted screen
* [ ] Lateral *g*
  * [ ] Current lateral *g* (+/-)
  * [ ] Maximum reached lateral *g*
* [ ] Lateral *g* Bar
  * [ ] Current lateral *g* (+/-)
  * [ ] Positive (+) *g* graph
    * [ ] 1 - 3 *g* maximum setting
  * [ ] Negative (-) *g* graph
    * [ ] 1 - 3 *g* maximum setting
* [ ] Longitudinal *g*
  * [ ] Current longitudinal *g* (+/-)
  * [ ] Maximum reached longitudinal *g*
* [ ] Longitudinul *g* Bar
  * [ ] Current longitudinal *g* (+/-)
  * [ ] 1 - 3 *g* maximum setting

### Sim Support
* [x] Assetto Corsa *(Partial)*
* [ ] Assetto Corsa Competizione
* [ ] Automobilista 2
* [x] iRacing *(Partial)*
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
- Members of the SimHub Discord (there is a wealth of knowledge in these people!)
- JSON auto-formatted with <https://j-brooke.github.io/FracturedJson/>
