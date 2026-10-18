import {G} from './constants.mjs';
import {model} from './catalog-helpers.mjs';

// A consistent illustrative adult, not a population average or an individual.
export const human={mass:70,height:1.7,surface:1.8,volume:.07,footprint:.04,
 temperature:310.15,skinTemperature:300,walkingSpeed:1.4,specificHeat:2980,
 capacitance:100e-12,dischargeResistance:1500,staticVoltage:2000};
const h=human;
const heat='https://pubmed.ncbi.nlm.nih.gov/37332308/';
const esd='https://www.esda.org/esd-overview/esd-fundamentals/part-5-device-sensitivity-and-testing/';
const water='https://www.usgs.gov/water-science-school/science/water-you-water-and-human-body';
const metabolism='https://ntrs.nasa.gov/api/citations/19980024339/downloads/19980024339.pdf';
const thermal='https://lhea.gsfc.nasa.gov/archive/mwmw/mmw_bbody.html';
const potassium='https://pubmed.ncbi.nlm.nih.gov/9044422/';
const m=(name,value,note,source='')=>({...model(name,value,'🧑',note,source),human:true});
const count=(name,plural,value,note)=>({name,plural,value,emoji:'🧑',note,source:'',human:true});
const heatCapacity=h.mass*h.specificHeat;
const thermalFlux=5.670374419e-8*h.skinTemperature**4;
const thermalRadiance=thermalFlux/Math.PI;
const entropy=heatCapacity*Math.log((h.temperature+1)/h.temperature);

export const humanReferences={
 length:[count('adult human','adult humans',h.height,'Illustrative adult human height: 1.7 m; placed head to toe. Heights vary.')],
 mass:[count('adult human','adult humans',h.mass,'Illustrative adult human mass: 70 kg. This is a reference model, not a population average.')],
 area:[count('human body surface','human body surfaces',h.surface,'Illustrative total skin surface area of an adult human: 1.8 m². This is not their floor footprint or front-facing silhouette.')],
 volume:[count('human body volume','human body volumes',h.volume,'Illustrative adult body volume: 70 L, using 70 kg and an assumed mean density of 1,000 kg/m³. Not lung capacity.')],
 time:[count('human breath','human breaths',4,'Illustrative breathing cycle: 4 seconds, or 15 breaths/minute. Actual breathing varies.')],
 force:[m('the weight of an adult human',h.mass*G,'A 70 kg illustrative adult under standard gravity: weight = 70 × 9.80665 N. This is weight, not muscle strength.')],
 pressure:[m('a standing human’s pressure on the floor',h.mass*G/h.footprint,'Model: a 70 kg adult standing still with weight spread uniformly over 0.04 m² of total sole contact. Pressure = mg/A; footwear and stance change it.')],
 current:[m('a human-body static-zap model’s initial current',h.staticVoltage/h.dischargeResistance,'Idealized Human Body Model discharge: 100 pF initially at an assumed 2 kV through 1,500 Ω; initial I = V/R ≈ 1.33 A. Brief pulse, not continuous body current.',esd)],
 temperature:[m('a human’s body temperature',h.temperature,'Illustrative body temperature: 37 °C = 310.15 K. Ratios use absolute kelvin, not Celsius readings or perceived warmth.')],
 substance:[m('the water molecules in an adult human',h.mass*.6/.01801528,'Model: a 70 kg adult with an assumed 60% water by mass: 42 kg water / 0.01801528 kg/mol. Counts water molecules only, not all particles in a person. Water fraction varies.',water)],
 energy:[m('a human climbing one flight of stairs',h.mass*G*3,'Model: a 70 kg adult gains 3 m in height: gravitational energy = mgh. This is mechanical work, not total metabolic energy.'),
  m('a human’s heat output over one minute',100*60,'Illustrative metabolic heat production of 100 W for 60 seconds = 6 kJ. Activity and individual heat production vary.',metabolism)],
 angle:[m('a human’s angular height from ten meters away',2*Math.atan(h.height/20),'Geometry model: a 1.7 m person centered perpendicular to the line of sight at 10 m distance; angle = 2 atan(0.85/10).')],
 solidAngle:[m('a human silhouette from ten meters away',4*Math.atan((.25*.85)/(10*Math.sqrt(100+.25**2+.85**2))),'Geometry model: a front-facing 0.5 × 1.7 m rectangular silhouette, centered 10 m away. Solid angle = 4 atan[ab/(d√(d²+a²+b²))], with half-width a and half-height b.')],
 frequency:[m('a human’s breathing rhythm',1/4,'Illustrative 15 breaths/minute: one four-second breathing cycle gives a frequency of 0.25 Hz.')],
 power:[m('a resting human’s heat output',100,'Illustrative metabolic heat production: 100 W. This is heat, not electrical or mechanical output; activity and individuals vary.',metabolism)],
 charge:[m('a human-body static zap’s stored charge',h.capacitance*h.staticVoltage,'Human Body Model: 100 pF charged to an assumed 2 kV stores Q = CV = 0.2 µC. An electronics test model, not a fixed charge on every person.',esd)],
 voltage:[m('a staticky human’s voltage',h.staticVoltage,'Illustrative Human Body Model charged to 2 kV. Static voltage varies with clothing, humidity, and surroundings; this is not a biological membrane voltage.',esd)],
 resistance:[m('a human-body static-zap model’s resistance',h.dischargeResistance,'The electronics Human Body Model uses a 1,500 Ω series resistor. This test component is not a universal human resistance or an electric-shock safety model.',esd)],
 conductance:[m('a human-body static-zap model’s conductance',1/h.dischargeResistance,'Reciprocal of the Human Body Model’s 1,500 Ω series resistance: G = 1/R. An electronics test-circuit property, not universal tissue conductance.',esd)],
 capacitance:[m('a human-body static-zap model’s capacitance',h.capacitance,'The electronics Human Body Model uses a 100 pF capacitor to model a person’s stored electrostatic charge. Actual body capacitance depends on surroundings.',esd)],
 activity:[m('an adult human’s potassium-40 activity',140*31,'Illustrative adult containing an assumed 140 g natural potassium at rounded 31 Bq/g: 4,340 Bq. Potassium-40 activity only; excludes other radionuclides. Decay rate is not dose or health risk.',potassium)],
 speed:[m('a jogging human',3,'Illustrative jogging speed: 3 m/s. This is speed magnitude, not a particular person’s pace.')],
 acceleration:[m('a human starting to jog',3/3,'Model: a person’s speed increases uniformly from rest to 3 m/s in 3 s; acceleration magnitude = Δv/Δt = 1 m/s².')],
 density:[m('a human body’s average density',h.mass/h.volume,'Illustrative 70 kg body occupying 0.07 m³: average density = 1,000 kg/m³. Composition and lung inflation change actual density.')],
 surfaceDensity:[m('a human’s mass over their standing footprint',h.mass/h.footprint,'Model: 70 kg spread over 0.04 m² total sole contact = 1,750 kg/m². Mass per contact area, not skin surface density or pressure.')],
 specificVolume:[m('a human’s body volume per mass',h.volume/h.mass,'Illustrative 0.07 m³ body volume / 70 kg = 0.001 m³/kg. Reciprocal of the assumed whole-body mean density.')],
 torque:[m('a human pushing a door handle',20*.3,'Model: a person applies 20 N perpendicular to a door at a handle 0.3 m from the hinge. Torque = force × lever arm = 6 N·m.')],
 angularVelocity:[m('a human doing a slow twirl',2*Math.PI/2,'Model: one full human twirl every 2 seconds; angular speed magnitude = 2π/2 rad/s.')],
 angularAcceleration:[m('a human starting a twirl',Math.PI/2,'Model: a person increases angular speed uniformly from rest to π rad/s over 2 seconds; angular acceleration magnitude = π/2 rad/s².')],
 irradiance:[m('a human’s outward thermal flux',thermalFlux,'Idealized human surface at 300 K with emissivity 1: gross emitted thermal flux = σT⁴. Includes all wavelengths, mostly infrared; not net heat loss after incoming room radiation.',thermal)],
 heatCapacity:[m('an adult human’s heat capacity',heatCapacity,'Model: 70 kg × 2,980 J/(kg·K) = 208,600 J/K. Specific heat uses the mean of four virtual body models in the linked study; body composition varies.',heat)],
 specificHeat:[m('a human body’s specific heat',h.specificHeat,'Illustrative 2,980 J/(kg·K), the mean calculated from four virtual human models in the linked tissue-composition study. Not a measurement of an individual.',heat)],
 entropy:[m('a human body model warming by one kelvin',entropy,'Closed-body thermal model: 70 kg, constant specific heat 2,980 J/(kg·K), reversibly warmed from 310.15 to 311.15 K. ΔS = mc ln(T₂/T₁); excludes metabolism and heat exchange during real thermoregulation.',heat)],
 specificEntropy:[m('a human body model’s entropy change per mass',entropy/h.mass,'Closed-body model reversibly warmed from 310.15 to 311.15 K with constant specific heat 2,980 J/(kg·K): Δs = c ln(T₂/T₁). Not absolute body entropy or a physiological prediction.',heat)],
 specificEnergy:[m('a walking human’s kinetic energy per mass',.5*h.walkingSpeed**2,'Model: whole-body translational kinetic energy divided by mass at 1.4 m/s: E/m = v²/2 = 0.98 J/kg. Excludes limb motion and metabolic energy.')],
 radiantIntensity:[m('a human’s thermal glow in one direction',thermalRadiance*.5,'Idealized 300 K Lambertian human surface with emissivity 1 and projected area 0.5 m² toward the observer: radiant intensity = σT⁴ × projected area / π. Integrated over all wavelengths, not visible brightness.',thermal)],
 radiance:[m('a human surface’s thermal glow',thermalRadiance,'Idealized 300 K Lambertian human surface with emissivity 1: radiance = σT⁴/π. Integrated over all wavelengths, mostly infrared; not visible luminance or net room heat exchange.',thermal)]
};
