# <p align="center">VBOX LapTimer (RACELOGIC) SimHub Dashboard</p>
## <p align="center">VBOX LapTimer, aka Racelogic, replica dashboard for SimHub</p>
<p align="center"><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.png?raw=true" alt="menuscreen"/></p>

A detailed replica of VBOX Motorsport's LapTimer device, otherwise known as a Racelogic, for SimHub. To the extent that is possible and reasonable, all display modes of the device are available, including customizable settings such as decimal places, speed unit, inverted screen, and more. The full list of features including how to use the dashboard are below. 

***Please be sure to read the documentation as there are quite a few settings that impact each display mode.***

### Overall 
The display modes are arranged in the same order as the device based on the references listed. The display modes can be changed by pressing **↑** to cycle to the next mode and **↓** to cycle to the previous mode. The display modes are in the following order:
+ Live Speed
+ Max Speed
+ Speed Bar
+ Predictive Lap Timing
+ Lap Timing
+ Lateral *g* Bar
+ Lateral *g*
+ Longitudinal *g* Bar
+ Longitudinal *g*
+ Lap Count

Generally speaking, most of the official documentation around display mode settings is compatible with this replica, save for a few things that have no real applicability to this dashboard, which are described further below. See [here](https://github.com/meltyfruits/SimHub-VBOX-LapTimer/tree/main#exclusions) for a list of settings/features that will not be implemented.

All of the settings are contained in the included ***settings.ini*** file. The settings for the real device have corresponding entries in the settings file. For example, the setting *Speed Decimal Places* in the *Display Menu* can be found in the ***settings.ini*** file as `SpeedDecimalPlaces=0 ; 0, 1, 2` under the `[Display]` category. Read on below for a full overview of each display mode and associated settings. 

***WARNING*** Please do not change the order or line spacing of the *settings.ini* file. There are entries that do nothing. Even so, please do not remove those entries. I very messily implemented the settings and haven't had the time to refactor it. If you run into issues with how things are displaying, overwrite your *settings.ini* with the default one. Also note that not all setting in the file are fully implemented. The display mode overviews below cover all settings that are currently implemented.

### General
> ### Settings
> Basic display modes is set by default with only *Speed*, *Lap Timing*, and *Predictive Lap Timing* screens visible. Advanced display modes can be set, which enables the *Max Speed*, *Speed Bar*, *Lateral g Bar*, *Lateral g*, *Longitudinal g Bar*, *Longitudinal g*, and *Lap Count* screens.
>
> > `Modes=0  ; 0 = Basic, 1 = Advanced`
> 
> The colour of the display can be inverted in the settings.
>
> > `InvertScreenColour=0  ; 0 = disabled (Black screen, white text), 1 = enabled (White screen, black text)`
>
> The text can be set to outline in the settings.
>
> > `UseOutlineFont=0  ; 0 = disabled, 1 = enabled`

### Live Speed

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.02.png?raw=true" alt="menuscreen"/></p>

Displays the current speed in realtime in kilometres per hour (km/h), miles per hour (mph), or knots<sup>not implemented</sup> (kts).
  
> ### Settings
>
> The number of decimal places displayed can be changed in the settings. Zero, one, or two decimal places can be displayed. *E.g., 235, 167.2, 185.14*
> 
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`
> 
> The unit of speed displayed can be changed in the settings. KMH, MPH, or KTS can be displayed. *E.g., 104 km/h*
> 
> > `SpeedUnits=0  ; 0 = KMH, 1 = MPH, 2 = KTS`

### Max Speed

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.03.png?raw=true" alt="menuscreen"/></p>

Displays this session's highest top speed in kilometres per hour (km/h), miles per hour (mph), or knots<sup>not implemented</sup> (kts). Only displays if `Modes=1` ([see here]())

> ### Settings
>
> The number of decimal places displayed can be changed in the settings. Zero, one, or two decimal places can be displayed. *E.g., 235, 167.2, 185.14*
> 
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`
> 
> The unit of speed displayed can be changed in the settings. KMH, MPH, or KTS can be displayed. *E.g., 104 km/h*
> 
> > `SpeedUnits=0  ; 0 = KMH, 1 = MPH, 2 = KTS`
>
> The displayed maximum reached speed can be reset by pressing the middle button **▢**.

### Speed Bar

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.04.png?raw=true" alt="menuscreen"/></p>

Displays the current speed in realtime in kilometres per hour (km/h), miles per hour (mph), or knots<sup>not implemented</sup> (kts), and a graph representing a positive and negative difference from the selected center speed.

> ### Settings
>
> The unit of speed displayed can be changed in the settings. KMH, MPH, or KTS can be displayed. *E.g., 104 km/h*
> 
> > `SpeedUnits=0  ; 0 = KMH, 1 = MPH, 2 = KTS`
> 
> The center speed (center of the graph) can be changed in the settings. The unit of speed is determined by the setting above. 
>
> > `CenterSpeed=340  ; 0 - 999`
>
> The positive and negative difference from the center speed can be changed in the settings. The unit of speed is determined by the setting above. *E.g., +/- 30 km/h*
>
> > `SpdDisplayRange=030  ; 0 - 999, 010 increments, e.g., 010, 020, 030`

### Lap Timing

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.05.png?raw=true" alt="menuscreen"/></p>

Displays the current lap time and the current lap or statically displays the last lap time and current lap. Upon crossing the finish line, the last lap time will be displayed along with the last lap delta to the session best delta.

> ### Settings
>
> The number of decimal places displayed can be changed in the settings. Zero, one, or two decimal places can be displayed. Note that this screen will not display zero decimal places. If 0 is set, one decimal place will be used instead. *E.g., 2'03.2 or 2'03.27*
> 
> > `SpeedDecimalPlaces=0  ; 0, 1, 2`
>
> The length of time the last lap time and split time are displayed can be changed in the settings. *E.g., 2s, 5s, 10s, 15s, 20s*
>
> > `SplitTimeDisplayPeriod=05.0  ; 02.0, 05.0, 10.0, 15.0, 20.0 - time in seconds`
>
> The currently displayed lap time can be rolling or static and can be changed in the settings. 
> 
> > `RollingLapTime=1  ; 0 = disabled, 1 = enabled`

### Predictive Lap Timing

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.06.png?raw=true" alt="menuscreen"/></p>

Displays the current delta to the session best and a graph representing that time visually. The two LEDs are enabled in this mode and represent the difference between the current speed and the speed at the same point in the session best lap. 

> ### Settings
>
> This display mode 
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

### Lateral *g* Bar

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.08.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Lateral *g*

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.07.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Longitudinal *g* Bar

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.10.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Longitudinal *g*

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.09.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Lap Count

<p><img src="https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.11.png?raw=true" alt="menuscreen"/></p>

+ placeholder

### Exclusions
The following settings/features are not and will not be implemented (for mostly obvious reasons):
+ GNSS options (GPS)
+ SD card saving/loading
+ Logging mode
+ Track database
+ Gates
+ One shot mode
+ Display brightness
+ LED brightness
+ Orientation
  
<!--
## Dependencies (NOT IMPLEMENTED YET)
- [SwitchableProperties by MorGuux](https://github.com/MorGuux/SwitchableProperties)
-->

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
  * [x] Decimal places
    * [x] No decimal places setting
    * [x] One decimal place setting
    * [x] Two decimal places setting
  * [ ] Speed units
    * [x] km/h units setting
    * [x] MPH units setting
    * [ ] kn units setting
  * [x] Inverted screen
  * [ ] Outline text
* [ ] **Max Speed**
  * [ ] Display Mode splash screen
  * [x] Reset max speed button
  * [x] Decimal places
    * [x] No decimal places setting
    * [x] One decimal place setting
    * [x] Two decimal places setting
  * [ ] Speed units
    * [x] km/h units setting
    * [x] MPH units setting
    * [ ] kn units setting
  * [x] Inverted screen
  * [ ] Outline text
* [ ] **Speed Bar**
  * [ ] Display Mode splash screen
  * [x] Center Speed 
    * [x] 0-999 setting
  * [x] Speed Display Range
    * [x] 0-999 setting
  * [ ] Speed units
    * [x] km/h units setting
    * [x] MPH units setting
    * [ ] kn units setting
  * [x] Inverted screen
  * [ ] Outline text
* [ ] **Lap Count**
  * [ ] Display Mode splash screen
  * [x] Total Laps count
  * [x] Current Laps count
  * [x] Inverted screen
  * [ ] Outline text
* [ ] **Predictive Lap Timing**
  * [ ] Display Mode splash screen
  * [x] Waiting for Start Line screen
  * [x] Creating Reference Lap screen
  * [x] Delta T Bar Range 
    * [x] 2s setting
    * [x] 5s setting
    * [x] 10s setting
    * [x] 30s setting
  * [x] Delta-V Light Range 
    * [x] 2 km/h setting
    * [x] 5 km/h setting
    * [x] 10 km/h setting
  * [ ] Delta-V LEDs
    * [x] Delta-V calculations
  * [ ] Delta-T Speed Mode
    * [ ] Speed setting
    * [ ] Time Delay setting 
  * [x] Final lap time and split from session best
  * [x] Inverted screen
  * [ ] Outline text
* [ ] **Lap Timing**
  * [ ] Display Mode splash screen
  * [x] Decimal places
    * [x] One decimal place
    * [x] Two decimal places
  * [x] Current Lap
  * [x] Final lap time and split from session best
  * [x] Split Time Display Period 
    * [x] 02.0s setting
    * [x] 05.0s setting
    * [x] 10.0s setting
    * [x] 15.0s setting
    * [x] 20.0s setting
  * [ ] Split-to-Split Time setting
  * [x] Rolling Lap Time setting
  * [x] Static Lap Time setting
  * [x] Inverted screen
  * [ ] Outline text
* [ ] Lateral *g*
  * [ ] Display Mode splash screen
  * [x] Current lateral *g* (+/-)
  * [x] Maximum reached lateral *g*
  * [ ] Inverted screen
  * [ ] Outline text
* [ ] Lateral *g* Bar
  * [ ] Display Mode splash screen
  * [x] Current lateral *g* (+/-)
  * [x] Lat *g* graph
    * [x] +/- 3 *g* min/max labels
  * [x] Target *g* setting (+/- 3 *g*)
  * [x] Inverted target setting
  * [ ] Inverted screen
  * [ ] Outline text
* [ ] Longitudinal *g*
  * [ ] Display Mode splash screen
  * [x] Current longitudinal *g* (+/-)
  * [x] Maximum reached longitudinal *g*
  * [ ] Inverted screen
  * [ ] Outline text
* [ ] Longitudinul *g* Bar
  * [ ] Display Mode splash screen
  * [x] Current longitudinal *g* (+/-)
  * [x] Lng *g* graph
    * [x] +/- 3 *g* min/max labels
  * [x] Target *g* setting (+/- 3 *g*)
  * [x] Inverted target setting
  * [ ] Inverted screen
  * [ ] Outline text

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
* [ ] Outline text
* [ ] Documentation
* [ ] Screen optimization
* [ ] Code optimization
* [ ] Add Knots (kn) speed metric
* [ ] Configure LEDs
* [x] Update placeholder text (from 9s)
* [ ] Night mode
<!-- * [ ] Implement SwitchableProperties -->

## Credits
- VBOX Motorsport (<https://vboxmotorsport.co.uk>)
- SimHub by SHWotever <https://www.simhubdash.com/> | [GitHub](https://github.com/SHWotever/SimHub)
- Members of the SimHub Discord (there is a wealth of knowledge in these people!)
- JSON auto-formatted with <https://j-brooke.github.io/FracturedJson/>
