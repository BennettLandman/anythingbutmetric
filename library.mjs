import {G, LIGHT_SPEED} from './constants.mjs';
const r=(name,plural,value,emoji,note,source='')=>({name,plural,value,emoji,note,source});
const ratio=(name,value,emoji,note,source='')=>({...r(name,name,value,emoji,note,source),ratio:true});
const constants='https://www.bipm.org/en/measurement-units/si-defining-constants';
const sun='https://spdf.gsfc.nasa.gov/pub/documents/old/websites/sunearthday.nasa.gov/2008/TTT/58_hotcorona.php';
const waterMoles=liters=>liters*1000/18.01528;
const dropletMoles=diameter=>waterMoles(Math.PI/6*diameter**3*1000);
const cone=degrees=>2*Math.PI*(1-Math.cos(degrees*Math.PI/360));

// These are explicit illustrative models, not claims that all examples share one size.
export const additions={
 length:[
  r('T. rex','T. rexes',12,'🦖','Illustrative adult T. rex: 12 m from head to tail, placed end to end. Individual animals and reconstructions vary.','https://www.amnh.org/exhibitions/dinosaurs-ancient-fossils/theropod-biomechanics/the-problem-of-size'),
  r('microchip feature','microchip features',20e-9,'💻','Illustrative feature width: 20 nm; not a process-node specification.'),
  r('red-light wavelength','red-light wavelengths',650e-9,'🔴','Illustrative red light in vacuum: 650 nm.'),
  r('aircraft-carrier deck','aircraft-carrier decks',333,'🚢','Illustrative large carrier deck length: 333 m.'),
  r('big suspension bridge','big suspension bridges',1280,'🌉','Illustrative main-span length: 1,280 m, excluding approaches.')
 ],
 mass:[
  r('T. rex','T. rexes',8000,'🦖','Illustrative adult T. rex mass: 8,000 kg, at the upper end of the AMNH guide’s 5,500–8,000 kg range. Fossil-based estimates vary.','https://www.amnh.org/content/download/242887/4197931/file/Trex_EducatorsGuide.pdf'),
  r('football linebacker','football linebackers',110,'🏈','Illustrative player mass: 110 kg.'),
  r('dust speck','dust specks',1e-9,'🌫️','Illustrative dust-speck mass: 1 µg. Dust varies enormously.'),
  r('tiny sugar crystal','tiny sugar crystals',1e-7,'🍬','Illustrative tiny sugar crystal: 0.1 mg.'),
  r('sesame seed','sesame seeds',3e-6,'🥯','Illustrative sesame seed: 3 mg.')
 ],
 area:[
  r('basketball court','basketball courts',28.65*15.24,'🏀','Illustrative NBA-size playing rectangle: 94 × 50 feet, excluding surrounds.'),
  r('sesame-seed footprint','sesame-seed footprints',3e-6,'🥯','Illustrative seed footprint: 3 mm².'),
  r('pencil-eraser face','pencil-eraser faces',Math.PI*0.003**2,'✏️','Illustrative circular pencil eraser: 6 mm diameter.'),
  r('big-box store','big-box stores',17000,'🏬','Illustrative store footprint: 17,000 m².'),
  r('county fairground','county fairgrounds',100000,'🎡','Illustrative fairground: 100,000 m².'),
  r('big cornfield','big cornfields',1e6,'🌽','Illustrative square cornfield: 1 km on each side.')
 ],
 volume:[
  r('eyedrop','eyedrops',5e-8,'💧','Illustrative eyedrop volume: 0.05 mL.'),
  r('pinhead-sized droplet','pinhead-sized droplets',Math.PI/6*0.001**3,'💧','Illustrative spherical droplet: 1 mm diameter.'),
  r('coffee mug','coffee mugs',0.0003,'☕','Illustrative mug capacity: 300 mL.'),
  r('backyard hot tub','backyard hot tubs',1.5,'🛁','Illustrative hot-tub capacity: 1,500 L.')
 ],
 time:[
  r('school-bus light crossing','school-bus light crossings',12/LIGHT_SPEED,'🚌','Light traversing a distance equal to an illustrative 12 m bus length, in vacuum.',constants),
  r('baseball game','baseball games',10800,'⚾','Illustrative game duration: three hours.'),
  r('hot-dog light crossing','hot-dog light crossings',0.3048/LIGHT_SPEED,'🌭','Light crossing a hypothetical foot-long hot dog in vacuum: length ÷ c.',constants),
  r('computer tick','computer ticks',1e-6,'💻','One clock tick at an assumed 1 MHz.'),
  r('audio sample','audio samples',1/44100,'🎧','Duration of one sample at an assumed 44.1 kHz sample rate.'),
  r('camera flash','camera flashes',0.001,'📸','Illustrative flash duration: 1 ms.'),
  r('football game week','football game weeks',604800,'🏈','Seven days between imagined Sunday games.')
 ],
 force:[
  r('T. rex','T. rexes',8000*G,'🦖','Weight of an illustrative 8,000 kg adult T. rex under standard gravity (9.80665 m/s²). This is body weight, not bite force.','https://www.amnh.org/content/download/242887/4197931/file/Trex_EducatorsGuide.pdf'),
  r('mosquito','mosquitoes',2.5e-6*G,'🦟','Illustrative mosquito mass: 2.5 mg; weight under standard gravity.'),
  r('U.S. quarter','U.S. quarters',0.00567*G,'🪙','Modern U.S. quarter coin: 5.670 g; weight under standard gravity.','https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications'),
  r('football linebacker','football linebackers',110*G,'🏈','Illustrative player mass: 110 kg; weight under standard gravity.'),
  r('tiny sugar crystal’s weight','tiny sugar crystals’ weight',1e-7*G,'🍬','Illustrative crystal mass: 0.1 mg; weight under standard gravity.'),
  r('coffee bean’s weight','coffee beans’ weight',0.00015*G,'☕','Illustrative coffee-bean mass: 150 mg; weight under standard gravity.'),
  r('blue whale’s weight','blue whales’ weight',150000*G,'🐋','Illustrative whale mass: 150,000 kg; weight under standard gravity.'),
  ratio('Space Shuttle thrust',34.7e6,'🚀','Rounded illustrative combined liftoff thrust: 34.7 MN. NASA reports a 7.8-million-pound thrust load.','https://www.nasa.gov/reference/the-space-shuttle/'),
  r('loaded aircraft carrier’s weight','loaded aircraft carriers’ weight',1e8*G,'🚢','Illustrative displacement mass: 100,000 metric tonnes; weight under standard gravity.')
 ],
 pressure:[
  ratio('a pressure washer’s water pressure',3000*6894.757293168,'🚿','Illustrative outlet gauge pressure: 3,000 psi.'),
  ratio('a quiet-room sound pressure',0.001,'🤫','Illustrative RMS acoustic pressure fluctuation: 1 mPa. This is not absolute air pressure.'),
  ratio('a conversation’s sound pressure',0.02,'🗣️','Illustrative RMS acoustic pressure fluctuation: 20 mPa, equivalent to 60 dB SPL.'),
  ratio('a loud concert’s sound pressure',2,'🎸','Illustrative RMS acoustic pressure fluctuation: 2 Pa, equivalent to 100 dB SPL.'),
  ratio('a gentle breeze’s dynamic pressure',10,'🍃','Illustrative air density 1.2 kg/m³ and speed 4.08 m/s; q = ½ρv² ≈ 10 Pa.'),
  ratio('a pancake’s pressure on a plate',0.1*G/0.01,'🥞','Hypothetical 100 g pancake spread over 100 cm²; contact pressure at standard gravity.'),
  ratio('an espresso-tamper pressure',15*G/0.0025,'☕','Illustrative 15 kg-force spread over 25 cm²; contact pressure.'),
  ratio('a stiletto-heel pressure',600/0.0001,'👠','Hypothetical 600 N carried by one 1 cm² heel; contact pressure.'),
  ratio('an elephant-on-a-stiletto pressure',5000*G/0.00005,'🐘','Deliberately hypothetical: 5,000 kg elephant weight on a 0.5 cm² heel. Contact pressure, not a real elephant measurement.')
 ]
};

export const extraDimensions={
 current:{label:'Current',base:'A',value:1,unit:'A',heading:'AMPED UP',verb:'Equivalent current: about',tail:'',hint:'Current is charge per second. Device currents are illustrative operating assumptions, not wiring ratings.',units:[['pA',1e-12],['nA',1e-9],['µA',1e-6],['mA',1e-3],['A',1],['kA',1e3],['MA',1e6]],refs:[
  r('tiny chip leak','tiny chip leaks',1e-12,'💻','Assumed tiny electronic leakage current: 1 pA.'),
  r('sensitive sensor leak','sensitive sensor leaks',1e-10,'🔬','Assumed sensor leakage current: 100 pA.'),
  r('faint-light photodiode','faint-light photodiodes',1e-9,'💡','Assumed photodiode signal under faint illumination: 1 nA.'),
  r('sleeping watch chip','sleeping watch chips',1e-7,'⌚','Illustrative sleeping chip: 100 nA.'),
  r('quartz wristwatch','quartz wristwatches',2e-6,'⌚','Illustrative average watch current: 2 µA.'),
  r('sleeping thermostat','sleeping thermostats',10e-6,'🌡️','Illustrative sleeping electronics: 10 µA.'),
  r('hearing aid','hearing aids',0.001,'🦻','Illustrative operating current: 1 mA.'),
  r('indicator LED','indicator LEDs',0.02,'🔴','Illustrative LED operating current: 20 mA.'),
  r('phone on a charger','phones on chargers',2,'📱','Illustrative charging current: 2 A at the charger output; voltage is separate.'),
  r('breakfast toaster','breakfast toasters',12.5,'🍞','Illustrative 1,500 W resistive toaster at 120 V: I = P/V.'),
  r('pickup starter motor','pickup starter motors',200,'🛻','Illustrative cranking current: 200 A.'),
  r('industrial welding arc','industrial welding arcs',1000,'👨‍🏭','Illustrative high-current welding process: 1,000 A.'),
  ratio('a lightning-bolt peak current',30000,'⚡','Illustrative peak current: 30 kA; a transient peak, not a continuous appliance load.'),
  ratio('an extreme lightning-bolt peak current',300000,'⛈️','Hypothetical extreme-event comparison: 300 kA peak; real flashes vary.')
 ]},
 temperature:{label:'Temperature',base:'K',value:300,unit:'K',heading:'HOW HOT IS THAT?',verb:'Absolute temperature: about',tail:'',allowZero:true,hint:'Ratios use absolute kelvin temperatures, not Fahrenheit or Celsius. Twice the kelvin value does not mean twice the perceived hotness.',units:[['nK',1e-9],['µK',1e-6],['mK',1e-3],['K',1],['kK',1e3],['MK',1e6]],refs:[
  ratio('an ultracold atom cloud’s temperature',1e-9,'⚛️','Illustrative ultracold-atom target temperature: 1 nK.'),
  ratio('a Bose–Einstein cloud’s temperature',100e-9,'⚛️','Illustrative ultracold cloud: 100 nK.'),
  ratio('a laser-cooled atom cloud’s temperature',10e-6,'🔬','Illustrative laser-cooled cloud: 10 µK.'),
  ratio('a nuclear-cooling stage’s temperature',0.001,'🧊','Illustrative cryogenic stage: 1 mK.'),
  ratio('a quantum-computer fridge’s temperature',0.01,'💻','Illustrative dilution refrigerator: 10 mK.','https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication508.pdf'),
  ratio('a helium-3 fridge’s temperature',0.3,'🧊','Illustrative cryogenic cooling stage: 0.3 K.'),
  ratio('liquid helium’s boiling temperature',4.2,'🎈','Approximate helium-4 boiling temperature near one atmosphere: 4.2 K.'),
  ratio('liquid nitrogen’s boiling temperature',77,'🧪','Approximate nitrogen boiling temperature near one atmosphere: 77 K.'),
  ratio('a freezer’s temperature',255.372222,'🧊','Illustrative freezer at 0 °F. Converted with K = (°F − 32) × 5/9 + 273.15.'),
  ratio('an ice-water bath’s temperature',273.15,'🧊','Illustrative pure-water melting point near one atmosphere: 273.15 K.'),
  ratio('a warm pie’s temperature',333.15,'🥧','Illustrative pie at 60 °C = 333.15 K; not a food-safety recommendation.'),
  ratio('a pizza oven’s temperature',533.15,'🍕','Illustrative 260 °C oven: 533.15 K.'),
  ratio('the Sun’s surface temperature',5770,'☀️','Approximate photosphere temperature: 5,770 K.',sun),
  ratio('a hot plasma’s temperature',100000,'🔥','Illustrative laboratory plasma temperature: 100,000 K.'),
  ratio('the solar corona’s temperature',1e6,'☀️','Rounded illustrative coronal temperature: 1 million K; varies widely.',sun)
 ]},
 substance:{label:'Amount',base:'mol',value:1,unit:'mol',heading:'A WHOLE MOLE LOT',verb:'About as many entities as in',tail:'',hint:'Amount of substance is measured in moles. A mole counts specified entities. Each comparison names its molecules or formula units; it does not equate different substances’ masses.',units:[['pmol',1e-12],['nmol',1e-9],['µmol',1e-6],['mmol',1e-3],['mol',1],['kmol',1e3],['Mmol',1e6]],refs:[
  r('small mist droplet of water','small mist droplets of water',dropletMoles(10e-6),'💧','Counts H₂O molecules in an assumed spherical 10 µm droplet; density 1 g/mL and molar mass 18.01528 g/mol.'),
  r('large mist droplet of water','large mist droplets of water',dropletMoles(100e-6),'💧','Counts H₂O molecules in an assumed spherical 100 µm droplet; density 1 g/mL and molar mass 18.01528 g/mol.'),
  r('tiny mist droplet of water','tiny mist droplets of water',dropletMoles(3e-6),'💧','Counts H₂O molecules in an assumed spherical 3 µm droplet. Water density 1 g/mL; molar mass 18.01528 g/mol.'),
  r('fine mist droplet of water','fine mist droplets of water',dropletMoles(30e-6),'💧','Counts H₂O molecules in an assumed spherical 30 µm droplet. Water density 1 g/mL; molar mass 18.01528 g/mol.'),
  r('spray droplet of water','spray droplets of water',dropletMoles(0.0003),'💧','Counts H₂O molecules in an assumed spherical 0.3 mm droplet. Water density 1 g/mL; molar mass 18.01528 g/mol.'),
  r('pinhead droplet of water','pinhead droplets of water',dropletMoles(0.001),'💧','Counts H₂O molecules in an assumed spherical 1 mm droplet. Water density 1 g/mL; molar mass 18.01528 g/mol.'),
  r('eyedrop of water','eyedrops of water',waterMoles(0.00005),'💧','Counts H₂O molecules in an assumed 0.05 mL eyedrop; water density 1 g/mL.'),
  r('diner sugar packet','diner sugar packets',4/342.2965,'🍬','Counts sucrose molecules in an assumed 4 g packet of pure sucrose; molar mass 342.2965 g/mol.'),
  r('teaspoon of water','teaspoons of water',waterMoles(0.00492892159375),'🥄','Counts H₂O molecules in a U.S. teaspoon; water density assumed 1 g/mL.'),
  r('salt shaker','salt shakers',100/58.44277,'🧂','Counts NaCl formula units in an assumed 100 g pure-NaCl shaker; molar mass 58.44277 g/mol, not separate ions.'),
  r('cup of water','cups of water',waterMoles(0.2365882365),'🥛','Counts H₂O molecules in a U.S. cup; water density assumed 1 g/mL.'),
  r('gallon jug of water','gallon jugs of water',waterMoles(3.785411784),'🥛','Counts H₂O molecules in a U.S. gallon; water density assumed 1 g/mL.'),
  r('bathtub of water','bathtubs of water',waterMoles(150),'🛁','Counts H₂O molecules in an assumed 150 L bathtub.'),
  r('hot tub of water','hot tubs of water',waterMoles(1500),'🛁','Counts H₂O molecules in an assumed 1,500 L hot tub.'),
  r('backyard pool of water','backyard pools of water',waterMoles(50000),'🏊','Counts H₂O molecules in an assumed 50,000 L pool.')
 ]},
 luminous:{label:'Brightness',base:'cd',value:100,unit:'cd',heading:'LOOKING BRIGHT',verb:'About',tail:'',hint:'Here, brightness means luminous intensity: candela measures light in a direction. Bulb and beam examples state the emission angle; lumens are not treated as candela.',units:[['µcd',1e-6],['mcd',1e-3],['cd',1],['kcd',1e3],['Mcd',1e6]],refs:[
  ratio('a deeply dimmed LED’s intensity',1e-6,'🔴','Hypothetical dimmed indicator intensity in the viewing direction: 1 µcd.'),
  ratio('a filtered candle’s intensity',1e-4,'🕯️','Model: 1 cd candle behind a filter transmitting 0.01% of its light in this direction.'),
  ratio('a faint indicator LED’s intensity',0.001,'🔴','Illustrative viewing-direction intensity: 1 mcd.'),
  ratio('an indicator LED’s intensity',0.02,'🔴','Illustrative viewing-direction intensity: 20 mcd.'),
  ratio('a birthday candle’s intensity',1,'🕯️','Approximate reference: 1 cd in the viewing direction. Real flames vary.'),
  ratio('a bedside bulb’s intensity',800/(4*Math.PI),'💡','Model: 800 lm distributed uniformly over 4π steradians gives 63.7 cd. The uniform-emission assumption is illustrative.','https://www.energy.gov/cmei/femp/purchasing-energy-efficient-light-bulbs'),
  ratio('a broad flashlight’s intensity',100/cone(60),'🔦','Model: 100 lm uniformly inside a 60° full-angle cone; I = flux / [2π(1 − cos(half-angle))].'),
  ratio('a traffic light’s intensity',200,'🚦','Illustrative on-axis intensity: 200 cd, not a traffic-signal specification.'),
  ratio('a focused flashlight’s intensity',1000/cone(30),'🔦','Model: 1,000 lm uniformly inside a 30° full-angle cone.'),
  ratio('a narrow flashlight’s intensity',1000/cone(20),'🔦','Model: 1,000 lm uniformly inside a 20° full-angle cone.'),
  ratio('a searchlight’s intensity',1e6,'🔦','Illustrative on-axis intensity: 1 million cd. Model: 10,000 lm uniformly over a 0.01 sr beam.')
 ]},
 energy:{label:'Energy',base:'J',value:1000,unit:'J',heading:'BIG BURGER ENERGY',verb:'About the energy of',tail:'',hint:'Energy compares a specified event or stored energy. It is distinct from force, power, and battery charge.',units:[['pJ',1e-12],['nJ',1e-9],['µJ',1e-6],['mJ',1e-3],['J',1],['kJ',1e3],['MJ',1e6],['GJ',1e9]],refs:[
  r('brief LED pulse','brief LED pulses',2e-8,'🔴','Model: 20 mW emitted for 1 µs; energy = power × time.'),
  r('quarter drop','quarter drops',0.00567*G,'🪙','Model: a 5.670 g quarter falling 1 m; E = mgh.'),
  r('baseball toss','baseball tosses',0.5*0.145*10**2,'⚾','Model: a 145 g baseball moving at 10 m/s; E = ½mv².'),
  r('can of soda’s food energy','cans of soda’s food energy',140*4184,'🥤','Illustrative can with 140 food Calories; not the mechanical energy of a falling can.'),
  r('tiny capacitor charge','tiny capacitor charges',0.5e-12,'💻','Model: energy stored in 1 pF charged to 1 V; E = ½CV².'),
  r('small capacitor charge','small capacitor charges',50e-12,'💻','Model: energy stored in 100 pF charged to 1 V; E = ½CV².'),
  r('tiny radio pulse','tiny radio pulses',1e-9,'📡','Model: 1 mW transmitted for 1 µs; energy = power × time.'),
  r('sugar-crystal drop','sugar-crystal drops',1e-7*G,'🍬','Model: a 0.1 mg crystal falling 1 m under standard gravity; E = mgh.'),
  r('paper-clip centimeter drop','paper-clip centimeter drops',0.001*G*0.01,'📎','Model: a 1 g paper clip falling 1 cm; E = mgh.'),
  r('paper-clip handspan drop','paper-clip handspan drops',0.001*G*0.1,'📎','Model: a 1 g paper clip falling 10 cm; E = mgh.'),
  r('apple drop','apple drops',0.1*G,'🍎','Model: a 100 g apple falling 1 m; E = mgh.'),
  r('baseball pitch','baseball pitches',0.5*0.145*40**2,'⚾','Model: a 145 g baseball moving at 40 m/s; kinetic energy E = ½mv².'),
  r('food Calorie','food Calories',4184,'🍪','One thermochemical food Calorie (kilocalorie) = 4,184 J; not a whole cookie.'),
  r('AA battery’s stored energy','AA batteries’ stored energy',1.5*2*3600,'🔋','Illustrative battery: 1.5 V × 2 Ah = 10,800 J. Useful energy depends on discharge.'),
  r('cheeseburger','cheeseburgers',500*4184,'🍔','Illustrative 500-food-Calorie cheeseburger: 2.092 MJ of food energy.'),
  r('gallon of gasoline','gallons of gasoline',3.785411784*32e6,'⛽','Illustrative lower heating value: 32 MJ/L × one U.S. gallon; chemical energy, not engine output.'),
  r('lightning-bolt energy release','lightning-bolt energy releases',1e9,'⚡','Illustrative total energy release: 1 GJ; actual flashes vary widely.')
 ]}
};
