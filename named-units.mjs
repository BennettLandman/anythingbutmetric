import {model as m,quantity as q} from './catalog-helpers.mjs';
const tau=2*Math.PI;
const cone=angle=>2*Math.PI*(1-Math.cos(angle*Math.PI/360));
export const namedDimensions={
 angle:q('Angle','rad',[['mrad',.001],['rad',1]],[
  m('a distant quarter’s angular width',.02426/24.26,'🪙','Model: a 24.26 mm coin seen from 24.26 m, using the small-angle approximation: diameter/distance = 1 mrad.'),
  m('a distant pizza’s angular width',.3/10,'🍕','Model: a 30 cm pizza from 10 m; small-angle width ≈ 0.03 rad.'),
  m('a pizza-slice turn',Math.PI/4,'🍕','One eighth of a full turn: 45° = π/4 rad.'),
  m('a right-angle turn',Math.PI/2,'↔','A quarter turn: π/2 radians.'),
  m('a full merry-go-round turn',tau,'🎡','One full turn is exactly 2π radians.')
 ],{group:'Motion & space',heading:'TAKE A TURN',hint:'Plane angle in radians. Turns are not reduced modulo a full circle.'}),
 solidAngle:q('View angle','sr',[['msr',.001],['sr',1]],[
  m('a narrow flashlight cone',cone(2),'🔦','Uniform circular beam model with a 2° full cone angle: Ω = 2π[1 − cos(1°)].'),
  m('a focused flashlight cone',cone(20),'🔦','A circular cone with 20° full angle: Ω = 2π[1 − cos(10°)].'),
  m('a wide flashlight cone',cone(60),'🔦','A circular cone with 60° full angle: Ω = 2π[1 − cos(30°)].'),
  m('a full sky above a picnic',2*Math.PI,'🥧','An unobstructed hemisphere subtends 2π steradians.'),
  m('a full all-around view',4*Math.PI,'🌎','A complete sphere subtends 4π steradians.')
 ],{group:'Light & waves',heading:'A WIDER VIEW',hint:'Solid angle in steradians measures a three-dimensional field of view, not a flat angle.'}),
 frequency:q('Frequency','Hz',[['mHz',.001],['Hz',1],['kHz',1e3],['MHz',1e6],['GHz',1e9]],[
  m('a coffee-break bell',1/900,'☕','Model: one bell every 15 minutes; frequency = 1/period.'),
  m('a microwave-minute beep',1/60,'🍿','Model: one beep every 60 seconds.'),
  m('a resting heartbeat',1.25,'❤️','Illustrative 75 beats/minute = 1.25 Hz.'),
  m('a camera-frame rhythm',60,'🎬','Illustrative 60 frames per second.'),
  m('a high musical tone',4400,'🎵','Illustrative pure tone frequency: 4.4 kHz.'),
  m('a concert A note',440,'🎵','Reference concert pitch A4 = 440 Hz.'),
  m('an audio sample clock',44100,'🎧','Illustrative digital audio sampling: 44.1 kHz.'),
  m('an AM-radio carrier',1e6,'📻','Illustrative carrier frequency: 1 MHz, not the sound-wave frequency.'),
  m('an FM-radio carrier',100e6,'📻','Illustrative FM carrier: 100 MHz.'),
  m('a Wi-Fi carrier',2.4e9,'📡','Illustrative 2.4 GHz radio carrier.')
 ],{group:'Light & waves',heading:'AGAIN AND AGAIN'}),
 power:q('Power','W',[['µW',1e-6],['mW',.001],['W',1],['kW',1e3],['MW',1e6]],[
  m('a sleeping watch chip',1e-6,'⌚','Illustrative electrical power: 1 µW.'),
  m('a sleepy sensor',1e-4,'🌡️','Illustrative electrical power: 0.1 mW.'),
  m('a tiny indicator LED',.002,'🔴','Model: 2 V × 1 mA = 2 mW.'),
  m('a bright indicator LED',.04,'🔴','Model: 2 V × 20 mA = 40 mW.'),
  m('a small gadget',1,'💻','Illustrative electrical input power: 1 W.'),
  m('an electric oven',10000,'🍞','Illustrative total electrical input: 10 kW; not an appliance rating.'),
  m('a phone charging',10,'📱','Illustrative charging input: 5 V × 2 A = 10 W.'),
  m('an old light bulb',60,'💡','Illustrative incandescent electrical input: 60 W; not visible-light output.'),
  m('a breakfast toaster',1500,'🍞','Illustrative resistive toaster input: 1,500 W.'),
  m('a pickup engine',200000,'🛻','Illustrative mechanical engine output: 200 kW.'),
  m('a wind turbine',3e6,'🍃','Illustrative rated electrical output: 3 MW; actual output varies.')
 ],{group:'Heat & energy',heading:'MORE POWER TO YOU',hint:'Power is energy per second. Electrical input, mechanical output, and radiant power are labeled in the models.'}),
 charge:q('Charge','C',[['pC',1e-12],['nC',1e-9],['µC',1e-6],['mC',.001],['C',1],['kC',1000]],[
  m('a tiny capacitor’s charge',1e-12,'💻','Model: 1 pF charged to 1 V; Q = CV.'),
  m('a chip capacitor’s charge',1e-10,'💻','Model: 100 pF at 1 V.'),
  m('a small static charge',1e-9,'⚡','Illustrative accumulated charge: 1 nC; not an energy or voltage.'),
  m('a larger static charge',1e-7,'⚡','Illustrative accumulated charge: 100 nC.'),
  m('an LED fifty-microsecond pulse',.02*50e-6,'🔴','Model: 20 mA for 50 µs; Q = It.'),
  m('an LED fifty-millisecond pulse',.02*.05,'🔴','Model: 20 mA for 50 ms; Q = It.'),
  m('an LED millisecond',.02*.001,'🔴','Model: 20 mA for 1 ms; Q = It.'),
  m('an LED second',.02,'🔴','Model: 20 mA for 1 second.'),
  m('a phone-charging second',2,'📱','Model: 2 A for 1 second.'),
  m('a phone-charging minute',120,'📱','Model: 2 A for 60 seconds.'),
  m('an AA battery’s charge capacity',7200,'🔋','Illustrative 2 Ah capacity × 3,600 C/Ah = 7,200 C; not stored energy.')
 ],{group:'Electricity',heading:'CHARGE IT',hint:'Charge counts transferred electric charge. It is distinct from current, voltage, and stored energy.'}),
 voltage:q('Voltage','V',[['µV',1e-6],['mV',.001],['V',1],['kV',1000]],[
  m('a tiny sensor signal',1e-6,'🌡️','Illustrative signal amplitude: 1 µV.'),
  m('a quiet microphone signal',1e-4,'🎤','Illustrative signal amplitude: 0.1 mV.'),
  m('a microphone signal',.01,'🎤','Illustrative signal amplitude: 10 mV.'),
  m('a small audio signal',.1,'🎧','Illustrative signal amplitude: 100 mV.'),
  m('an AA battery',1.5,'🔋','Illustrative nominal cell potential difference: 1.5 V.'),
  m('a car battery',12,'🛻','Illustrative nominal potential difference: 12 V.'),
  m('a wall outlet',120,'💡','Illustrative U.S. outlet: 120 V RMS; RMS is not peak voltage.'),
  m('a static doorknob zap',10000,'⚡','Illustrative static potential difference: 10 kV. Voltage alone does not determine shock energy.')
 ],{group:'Electricity',heading:'POTENTIAL NONSENSE'}),
 resistance:q('Resistance','Ω',[['mΩ',.001],['Ω',1],['kΩ',1e3],['MΩ',1e6]],[
  m('a short copper-wire resistance',.001,'📎','Illustrative wire resistance: 1 mΩ at fixed temperature.'),
  m('a longer wire resistance',.1,'📎','Illustrative wire resistance: 0.1 Ω.'),
  m('a small resistor',1,'💻','Illustrative resistor: 1 Ω.'),
  m('a toaster’s hot resistance',120**2/1500,'🍞','Model: a 1,500 W resistive load at 120 V; R = V²/P = 9.6 Ω.'),
  m('an LED series resistor',330,'🔴','Illustrative circuit resistor: 330 Ω.'),
  m('a sensor resistor',10000,'🌡️','Illustrative resistor: 10 kΩ; not a universal sensor value.'),
  m('a high-value resistor',1e6,'💻','Illustrative circuit resistor: 1 MΩ.')
 ],{group:'Electricity',heading:'RESIST THE ORDINARY'}),
 conductance:q('Conductance','S',[['µS',1e-6],['mS',.001],['S',1],['kS',1e3]],[
  m('a high-value resistor’s conductance',1e-6,'💻','Model: reciprocal of a 1 MΩ resistor, G = 1/R.'),
  m('a sensor resistor’s conductance',1e-4,'🌡️','Reciprocal of an illustrative 10 kΩ resistor.'),
  m('an LED resistor’s conductance',1/330,'🔴','Reciprocal of an illustrative 330 Ω resistor.'),
  m('a toaster’s conductance',1500/120**2,'🍞','Model: reciprocal of 9.6 Ω for a 1,500 W, 120 V resistive toaster.'),
  m('a one-ohm resistor’s conductance',1,'💻','The reciprocal of a 1 Ω resistance is a conductance of 1 S.'),
  m('a wire’s conductance',10,'📎','Reciprocal of an illustrative 0.1 Ω wire.'),
  m('a short copper wire’s conductance',1000,'📎','Reciprocal of an illustrative 1 mΩ wire.')
 ],{group:'Electricity',heading:'GO WITH THE FLOW'}),
 capacitance:q('Capacitance','F',[['pF',1e-12],['nF',1e-9],['µF',1e-6],['mF',.001],['F',1]],[
  m('a tiny chip capacitor',1e-12,'💻','Illustrative capacitance: 1 pF.'),
  m('a small radio capacitor',100e-12,'📻','Illustrative capacitance: 100 pF.'),
  m('a radio capacitor',1e-9,'📻','Illustrative capacitance: 1 nF.'),
  m('a filter capacitor',100e-9,'💻','Illustrative capacitance: 100 nF.'),
  m('a small electrolytic capacitor',10e-6,'🔋','Illustrative capacitance: 10 µF.'),
  m('a power-supply capacitor',.001,'🔋','Illustrative capacitance: 1,000 µF.'),
  m('a small supercapacitor',.1,'🔋','Illustrative capacitance: 0.1 F.'),
  m('a supercapacitor',1,'🔋','Illustrative capacitance: 1 F; energy also depends on voltage.')
 ],{group:'Electricity',heading:'CAPACITY FOR CHAOS'}),
 inductance:q('Inductance','H',[['nH',1e-9],['µH',1e-6],['mH',.001],['H',1]],[
  m('a tiny circuit trace',1e-9,'💻','Illustrative trace inductance: 1 nH.'),
  m('a little wire loop',100e-9,'📎','Illustrative loop inductance: 100 nH.'),
  m('a radio coil',10e-6,'📻','Illustrative coil inductance: 10 µH.'),
  m('a filter coil',.001,'💻','Illustrative inductance: 1 mH.'),
  m('a large choke coil',.1,'📎','Illustrative inductance: 100 mH at its stated operating conditions.'),
  m('a hefty choke coil',1,'📎','Illustrative inductance: 1 H; inductance depends on geometry and core behavior.')
 ],{group:'Electricity',heading:'A TWIST IN THE WIRE'}),
 magneticField:q('Magnetic field','T',[['µT',1e-6],['mT',.001],['T',1]],[
  m('a weak magnetic field',1e-6,'🧲','Illustrative magnetic flux density: 1 µT.'),
  m('an Earth-like field',50e-6,'🌎','Illustrative local geomagnetic flux density: 50 µT; varies with location.'),
  m('a fridge magnet’s nearby field',.005,'🧲','Illustrative field at a specified point near a magnet: 5 mT; distance matters.'),
  m('a strong magnet’s nearby field',.3,'🧲','Illustrative flux density at a specified point: 0.3 T.'),
  m('a clinical MRI field',1.5,'🏥','Illustrative MRI main magnetic field: 1.5 T. This is not ionizing-radiation dose.')
 ],{group:'Magnetism',heading:'MAGNETIC PERSONALITY',hint:'Tesla measures magnetic flux density B. Field strength H is a separate quantity in A/m.'}),
 magneticFlux:q('Magnetic flux','Wb',[['nWb',1e-9],['µWb',1e-6],['mWb',.001],['Wb',1]],[
  m('a tiny Earth-field loop',50e-6*.0001,'🌎','Uniform perpendicular-field model: 50 µT through a 1 cm² loop; Φ = BA.'),
  m('an Earth-field postcard',50e-6*.01,'✉️','Model: 50 µT perpendicular to 100 cm².'),
  m('a weak-magnet postcard',.001*.01,'🧲','Model: uniform 1 mT perpendicular to a 100 cm² postcard.'),
  m('a strong-magnet tray',1*.1,'🧲','Model: uniform 1 T perpendicular to an assumed 0.1 m² tray.'),
  m('a magnet-threaded postcard',.01*.01,'🧲','Model: 10 mT perpendicular to 100 cm².'),
  m('a strong-field pizza area',.1*.1,'🍕','Model: 0.1 T perpendicular to an assumed 0.1 m² area.'),
  m('a big MRI loop',1.5*1,'🏥','Model: uniform 1.5 T perpendicular to 1 m²; not a scanner rating.')
 ],{group:'Magnetism',heading:'FLUX HAPPENS',hint:'Magnetic flux is field through an oriented area: Φ = BA cos θ for a uniform field.'}),
 lightOutput:q('Light output','lm',[['mlm',.001],['lm',1],['klm',1000]],[
  m('a deeply dimmed LED’s output',.001,'🔴','Illustrative total visible luminous flux: 1 millilumen.'),
  m('a dim indicator’s output',.1,'🔴','Illustrative total luminous flux: 0.1 lm.'),
  m('a tiny nightlight’s output',2,'💡','Illustrative total luminous flux: 2 lm.'),
  m('a small flashlight’s output',40,'🔦','Illustrative total visible luminous flux: 40 lm.'),
  m('a bedside bulb’s output',800,'💡','Illustrative total luminous flux: 800 lm. Beam angle is not required for total output.'),
  m('a bright flashlight’s output',1000,'🔦','Illustrative total luminous flux: 1,000 lm.')
 ],{group:'Light & waves',heading:'LET THERE BE UNITS',hint:'Lumens measure total visible-light output. Candela measures output per solid angle, and lux measures light arriving per area.'}),
 illuminance:q('Light on a surface','lx',[['mlx',.001],['lx',1],['klx',1000]],[
  m('a dim starlit surface',.001,'🌙','Illustrative illuminance on a surface: 0.001 lx.'),
  m('a faint moonlit surface',.01,'🌙','Illustrative faint moonlight illuminance: 0.01 lx; conditions vary.'),
  m('a moonlit surface',.2,'🌙','Illustrative illuminance: 0.2 lx; moon phase, atmosphere, and surface orientation vary.'),
  m('a dim hallway',10,'💡','Illustrative illuminance at a surface: 10 lx.'),
  m('a lit desk',500,'💡','Illustrative illuminance at the desk surface: 500 lx.'),
  m('an overcast outdoor surface',1000,'☁️','Illustrative illuminance: 1,000 lx; weather varies.'),
  m('a sunlit outdoor surface',100000,'☀️','Illustrative direct-daylight illuminance: 100,000 lx. Lux is not UV exposure.')
 ],{group:'Light & waves',heading:'A LIGHT TOUCH',hint:'Lux is visible luminous flux per area (lm/m²), not sunlight’s UV dose or radiant energy.'}),
 catalysis:q('Enzyme activity','kat',[['pkat',1e-12],['nkat',1e-9],['µkat',1e-6],['mkat',.001],['kat',1]],[
  m('a tiny enzyme assay',1e-12,'🧪','Hypothetical measured conversion rate: 1 pmol/s for a specified reaction and assay conditions.'),
  m('a small test-tube assay',1e-10,'🧪','Assumed substrate conversion rate: 0.1 nmol/s.'),
  m('an enzyme-lab assay',1e-8,'🧪','Assumed conversion rate: 10 nmol/s.'),
  m('a kitchen-enzyme assay',1e-6,'🥧','Hypothetical measured conversion: 1 µmol/s under fixed substrate, pH, and temperature.'),
  m('a larger enzyme batch',1e-4,'🧬','Assumed fixed-condition conversion rate: 0.1 mmol/s.'),
  m('a small enzyme reactor',.01,'🧬','Assumed conversion rate: 10 mmol/s.'),
  m('an industrial enzyme reactor',1,'🏭','Hypothetical measured conversion rate: 1 mol/s; not intrinsic activity of all such reactors.')
 ],{group:'Matter & chemistry',heading:'A REACTION WORTH HAVING',hint:'Katal means moles converted per second. Comparisons require the same specified reaction and assay conditions.',signNote:'Reaction and assay conditions must match.'})
};
