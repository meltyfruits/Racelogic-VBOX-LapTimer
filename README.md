# <p align="center">VBOX LapTimer (RACELOGIC) SimHub Dashboard</p>
## <p align="center">VBOX LapTimer, aka Racelogic, replica dashboard for SimHub</p>
![alt text](https://github.com/meltyfruits/SimHub-VBOX-LapTimer/blob/main/VBOX%20LapTimer%20(Racelogic).djson.png?raw=true)

A detailed replica of VBOX Motorsport's LapTimer device, otherwise known as a Racelogic, for SimHub. To the extent that is possible and reasonable, all display modes of the device are available, including customizable settings such as decimal places, speed unit, inverted screen, and more. The full list of features including how to use the dashboard are below.

### Overall 

### Menu & Settings

### Live Speed
Displays the current speed in realtime in kilometres per hour (km/h) or miles per hour (mph)

### Max Speed
Displays this session's highest top speed. This value is rolling.

### Speed Bar

### Predictive Lap Timing
Displays the current delta to the session best and a graph representing that time graphically. On the first lap, the WAITING FOR START LINE screen will be displayed. After completing the first lap, the CREATING REFERENCE LAP screen will display. After crossing the finish line a second time, the current lap delta will be displayed. Each subsequent time the finish line is crossed the last lap time and the delta to the seesion best are displayed. 

## Dependencies
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

## To do
### Core
* [ ] **Menu/Settings screens**
* [ ] **Live Speed**
  * [x] No decimal places
  * [x] One decimal place
  * [x] Two decimal places
  * [x] Inverted screen
  * [x] km/h units
  * [x] MPH units
  * [ ] kn units
* [ ] **Max Speed**
  * [x] No decimal places
  * [x] One decimal place
  * [x] Two decimal places
  * [x] Inverted screen
  * [x] km/h units
  * [x] MPH units
  * [ ] kn units
* [ ] **Speed Bar**
  * [ ] Center Speed setting
  * [ ] Speed Display Range setting
  * [ ] Inverted screen
  * [x] km/h units
  * [x] MPH units
  * [ ] kn units
* [ ] **Lap Count**
  * [ ] Inverted screen
* [ ] **Predictive Lap Timing**
  * [x] Waiting for Start Line screen and logic
  * [x] Creating Reference Lap screen and logic
  * [ ] Delta-T Speed Mode
    * [ ] Speed setting
    * [ ] Time Delay setting
  * [ ] Final lap time and split from session best
  * [x] Inverted screen
* [ ] **Lap Timing**
  * [x] One decimal place
  * [x] Two decimal places
  * [ ] Final lap time and split from session best
  * [ ] Split Time Display Period setting
  * [ ] Split-to-Split Time setting
  * [ ] Rolling Lap Time setting
  * [ ] Inverted screen

### Sim Support
* [x] Assetto Corsa
* [ ] Assetto Corsa Competizione
* [ ] Automobilista 2
* [x] iRacing
* [ ] rFactor 2
      
### Development
* [x] 2.4:1 ratio (120mm x 50mm) screens
* [x] Template screen
* [x] From scratch Racelogic logo
* [ ] Device correct colours
* [ ] Implement SwitchableProperties
* [ ] Outline text solution
* [ ] Documentation
* [ ] Code optimization
* [ ] Add Knots speed metric
* [ ] Configure LEDs
* [ ] Update placeholder text (from 9s)

## Credits
- VBOX Motorsport (<https://vboxmotorsport.co.uk>)
- SimHub by SHWotever <https://www.simhubdash.com/> | [GitHub](https://github.com/SHWotever/SimHub)
- JSON auto-formatted with <https://j-brooke.github.io/FracturedJson/>
