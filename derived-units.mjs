import {model as m,quantity as q} from './catalog-helpers.mjs';
import {G} from './constants.mjs';
const pi=Math.PI,tau=2*pi,mu0=1.25663706212e-6,epsilon0=8.8541878128e-12,R=8.31446261815324;
export const derivedDimensions={
 speed:q('Speed','m/s',[['mm/s',.001],['m/s',1],['km/s',1000]],[
  m('a leisurely snail',.001,'🐌','Illustrative forward speed: 1 mm/s.'),
  m('a crawling toy car',.1,'🛻','Illustrative forward speed: 0.1 m/s.'),
  m('a walking person',1.4,'🧑','Illustrative walking speed: 1.4 m/s.'),
  m('a highway pickup',26.8224,'🛻','Illustrative 60 mph cruising speed: 26.8224 m/s.'),
  m('sound in room-temperature air',343,'🎵','Illustrative sound speed: 343 m/s, dependent on temperature and medium.'),
  m('an orbiting spacecraft',7800,'🚀','Illustrative orbital speed magnitude: 7,800 m/s.')
 ],{group:'Motion & space',heading:'FAST AND APPROXIMATE',hint:'Speed is velocity magnitude. These scalar comparisons do not specify direction.'}),
 acceleration:q('Acceleration','m/s²',[['µm/s²',1e-6],['mm/s²',.001],['m/s²',1]],[
  m('a barely-starting toy cart',1e-6,'🛻','Model: speed changes by 1 µm/s each second.'),
  m('a very gently starting cart',1e-4,'🛻','Model: speed changes by 0.1 mm/s each second.'),
  m('a slowly starting cart',.01,'🛻','Model: speed increases by 0.01 m/s over one second.'),
  m('a bus pulling away',1,'🚌','Illustrative acceleration magnitude: 1 m/s².'),
  m('standard gravity',G,'🌎','Standard acceleration of gravity: 9.80665 m/s².'),
  m('a rocket’s acceleration',30,'🚀','Illustrative net acceleration magnitude: 30 m/s²; varies over a flight.')
 ],{group:'Motion & space',heading:'PICKING UP SPEED'}),
 wavenumber:q('Waves per distance','m⁻¹',[['m⁻¹',1],['mm⁻¹',1e3],['nm⁻¹',1e9]],[
  m('a one-meter wave',1,'🎵','Spectroscopic wavenumber: 1/λ for λ = 1 m. This is not angular wavenumber 2π/λ.'),
  m('a Wi-Fi-scale wave',1/.125,'📡','Illustrative wavelength: 12.5 cm; wavenumber = 1/λ.'),
  m('a centimeter wave',100,'📡','Illustrative wavelength: 1 cm.'),
  m('a millimeter wave',1000,'📡','Illustrative wavelength: 1 mm.'),
  m('a thermal-infrared wave',1/10e-6,'🔥','Illustrative wavelength: 10 µm; spectroscopic wavenumber = 1/λ.'),
  m('a red-light wave',1/650e-9,'🔴','Illustrative vacuum wavelength: 650 nm.'),
  m('an ultraviolet wave',1/100e-9,'☀️','Illustrative vacuum wavelength: 100 nm.'),
  m('a soft X-ray wave',1/10e-9,'🩻','Illustrative vacuum wavelength: 10 nm.'),
  m('a short X-ray wave',1/1e-10,'🩻','Illustrative vacuum wavelength: 0.1 nm.')
 ],{group:'Light & waves',heading:'WAVE AFTER WAVE',hint:'This is reciprocal wavelength 1/λ, not angular wavenumber. A prefix in the denominator is inverted: 1/mm = 1,000/m.'}),
 vergence:q('Lens strength','m⁻¹',[['m⁻¹',1],['cm⁻¹',100]],[
  m('a weak focusing lens',.5,'👓','Illustrative positive optical power: 1/f with f = 2 m, in air.'),
  m('a reading lens',2,'👓','Illustrative positive optical power: 2 diopters, focal length 0.5 m.'),
  m('a magnifying lens',10,'🔬','Illustrative positive optical power: 10 diopters, focal length 10 cm.'),
  m('a phone-camera lens',200,'📱','Illustrative positive optical power: 200 diopters, focal length 5 mm.')
 ],{group:'Light & waves',heading:'FOCUS ON THE NONSENSE',hint:'Positive focusing-strength magnitude in reciprocal meters (diopters). This mode does not represent the negative sign of a diverging lens.'}),
 density:q('Density','kg/m³',[['g/m³',.001],['kg/m³',1],['g/cm³',1000]],[
  m('very thin high-altitude air',.001,'🍃','Illustrative air density: 0.001 kg/m³; altitude, pressure, and temperature matter.'),
  m('balloon-altitude air',.02,'🎈','Illustrative low air density: 0.02 kg/m³.'),
  m('room-temperature air',1.2,'🍃','Illustrative density: 1.2 kg/m³.'),
  m('light packing foam',20,'📦','Illustrative bulk density: 20 kg/m³.'),
  m('a fluffy marshmallow',300,'🍬','Illustrative bulk density: 300 kg/m³.'),
  m('water',1000,'💧','Rounded illustrative liquid-water density: 1,000 kg/m³.'),
  m('steel',7850,'📎','Illustrative material density: 7,850 kg/m³.')
 ],{group:'Matter & chemistry',heading:'DENSE WITH POSSIBILITIES',hint:'Bulk mass density of a material is mass divided by total volume. Solute mass concentration is listed separately.'}),
 surfaceDensity:q('Mass per area','kg/m²',[['g/m²',.001],['kg/m²',1]],[
  m('a thin plastic film',.001,'📦','Model: 1 µm thick film with assumed density 1,000 kg/m³.'),
  m('printer paper',.08,'📝','Illustrative paper grammage: 80 g/m².'),
  m('T-shirt fabric',.15,'👕','Illustrative fabric grammage: 150 g/m².'),
  m('a carpet',2,'🏠','Illustrative carpet surface density: 2 kg/m².'),
  m('a one-millimeter steel sheet',7.85,'📎','Model: 7,850 kg/m³ × 0.001 m thickness.')
 ],{group:'Matter & chemistry',heading:'SPREAD THE WEIGHT'}),
 specificVolume:q('Volume per mass','m³/kg',[['mL/g',.001],['L/kg',.001],['m³/kg',1]],[
  m('steel’s volume per mass',1/7850,'📎','Reciprocal of assumed steel density 7,850 kg/m³.'),
  m('water’s volume per mass',.001,'💧','Reciprocal of rounded density 1,000 kg/m³.'),
  m('a marshmallow’s volume per mass',1/300,'🍬','Reciprocal of illustrative bulk density 300 kg/m³.'),
  m('packing foam’s volume per mass',1/20,'📦','Reciprocal of illustrative bulk density 20 kg/m³.'),
  m('air’s volume per mass',1/1.2,'🍃','Reciprocal of illustrative air density 1.2 kg/m³.')
 ],{group:'Matter & chemistry',heading:'ROOM FOR EVERY KILO'}),
 currentDensity:q('Current per area','A/m²',[['µA/m²',1e-6],['mA/m²',.001],['A/m²',1],['kA/m²',1000]],[
  m('a quiet sensor contact',1e-6,'🌡️','Model: uniform 0.1 nA through 1 cm²; J = I/A.'),
  m('a faint sensor contact',1e-4,'🌡️','Model: uniform 10 nA through 1 cm².'),
  m('a small sensor contact',.01,'🌡️','Model: uniform 1 µA through 1 cm².'),
  m('a small electrode',1,'🧪','Model: uniform 0.1 mA through 1 cm².'),
  m('a larger electrode',10,'🧪','Model: uniform 1 mA through 1 cm².'),
  m('a phone-charger contact',200,'📱','Model: uniform 2 A through an assumed 1 cm² cross-section.'),
  m('an AA-cell contact',10000,'🔋','Hypothetical uniform 1 A through 1 cm²; geometry and current are assumptions.')
 ],{group:'Electricity',heading:'CURRENTLY CROWDED'}),
 magnetizingField:q('Magnetizing strength','A/m',[['mA/m',.001],['A/m',1],['kA/m',1000]],[
  m('a barely energized long coil',.0001,'📎','Ideal long-solenoid model: N = 100, I = 0.1 µA, length = 0.1 m; H = NI/l.'),
  m('a gently energized long coil',.01,'📎','Ideal long-solenoid model: 100 turns, 10 µA, length 0.1 m.'),
  m('a small long coil',1,'🧲','Ideal model: 100 turns, 1 mA, length 0.1 m.'),
  m('a powered long coil',100,'🧲','Ideal model: 100 turns, 0.1 A, length 0.1 m.'),
  m('a stronger long coil',1000,'🧲','Ideal model: 1,000 turns, 0.1 A, length 0.1 m.')
 ],{group:'Magnetism',heading:'A COIL WITH AMBITION',hint:'Magnetic field strength H in A/m is distinct from magnetic flux density B in tesla. Material response connects them.'}),
 concentration:q('Moles per volume','mol/m³',[['µmol/m³',1e-6],['mmol/m³',.001],['mol/m³',1],['kmol/m³',1000]],[
  m('an extremely dilute salt solution',1e-6,'🧂','Hypothetical NaCl formula-unit concentration: 1 nmol per liter.'),
  m('a very dilute salt solution',1e-5,'🧂','Hypothetical concentration: 10 nmol NaCl per liter.'),
  m('a trace salt solution',.001,'🧂','Hypothetical concentration: 1 µmol NaCl per liter.'),
  m('a dilute salt solution',.01,'🧂','Hypothetical concentration: 10 µmol NaCl per liter.'),
  m('a lab salt solution',1,'🧂','Hypothetical concentration: 1 mmol NaCl per liter.'),
  m('a stronger lab salt solution',100,'🧂','Hypothetical concentration: 0.1 mol NaCl per liter.'),
  m('a concentrated salt solution',1000,'🧂','Hypothetical concentration: 1 mol NaCl per liter, counting formula units before ion dissociation.')
 ],{group:'Matter & chemistry',heading:'CONCENTRATED NONSENSE',hint:'Amount concentration counts specified entities per volume. It is not mass concentration without a specified molar mass.'}),
 massConcentration:q('Solute mass per volume','kg/m³',[['mg/m³',1e-6],['mg/L',.001],['g/L',1]],[
  m('a faint dust cloud',1e-6,'🌫️','Illustrative suspended-particle mass concentration: 1 mg/m³.'),
  m('a dusty cloud',1e-5,'🌫️','Illustrative suspended-particle concentration: 10 mg/m³.'),
  m('a dilute salt trace',.001,'🧂','Hypothetical dissolved NaCl concentration: 1 mg/L = 0.001 kg/m³.'),
  m('a dilute salt mixture',.05,'🧂','Hypothetical NaCl concentration: 50 mg/L.'),
  m('a weak salt mixture',1,'🧂','Hypothetical NaCl concentration: 1 g/L = 1 kg/m³.'),
  m('a cooking-water salt model',10,'🥄','Illustrative salt concentration: 10 g/L; not a recipe or physiological-fluid claim.')
 ],{group:'Matter & chemistry',heading:'WHAT’S IN THE MIX?',hint:'Mass concentration means mass of the specified constituent per total mixture volume. Bulk material density is separate.'}),
 luminance:q('Surface brightness','cd/m²',[['mcd/m²',.001],['cd/m²',1],['kcd/m²',1000]],[
  m('a deeply dimmed screen',.001,'📱','Illustrative luminance in the viewing direction: 0.001 cd/m².'),
  m('a very dark screen',.1,'📱','Illustrative viewing-direction luminance: 0.1 cd/m².'),
  m('a night-mode screen',2,'📱','Illustrative viewing-direction luminance: 2 cd/m².'),
  m('white paper on a lit desk',.8*500/pi,'📝','Lambertian reflection model: reflectance 0.8 and illuminance 500 lx; L = ρE/π.'),
  m('a phone display',300,'📱','Illustrative screen luminance: 300 cd/m², not a product specification.'),
  m('a bright outdoor display',1000,'📱','Illustrative screen luminance: 1,000 cd/m².')
 ],{group:'Light & waves',heading:'A BRIGHT SURFACE',hint:'Luminance is candela per projected area in a viewing direction. It is not lux arriving on a surface.'}),
 viscosity:q('Viscosity','Pa·s',[['mPa·s',.001],['Pa·s',1],['kPa·s',1000]],[
  m('water’s viscosity',.001,'💧','Rounded illustrative dynamic viscosity near room temperature: 1 mPa·s.'),
  m('cooking oil’s viscosity',.05,'🥄','Illustrative dynamic viscosity at a chosen temperature: 0.05 Pa·s.'),
  m('thick honey’s viscosity',5,'🍯','Illustrative dynamic viscosity: 5 Pa·s. Temperature and composition strongly affect it.'),
  m('cold molasses’ viscosity',100,'🍯','Illustrative dynamic viscosity under assumed cold conditions: 100 Pa·s.'),
  m('thick tar’s viscosity',1000,'🛻','Illustrative apparent dynamic viscosity: 1,000 Pa·s at assumed temperature and shear conditions.')
 ],{group:'Matter & chemistry',heading:'SLOW YOUR POUR',hint:'Dynamic viscosity measures resistance to shear. Temperature and, for non-Newtonian materials, shear conditions must be specified.'}),
 torque:q('Torque','N·m',[['mN·m',.001],['N·m',1],['kN·m',1000]],[
  m('a paper-clip lever',.001*G*.1,'📎','Model: a 1 g weight at a perpendicular 10 cm lever arm; τ = rF.'),
  m('a quarter-coin lever',.00567*G*.1,'🪙','Model: one modern U.S. quarter’s weight on a perpendicular 10 cm lever arm.'),
  m('a gentle door push',.5,'🚪','Model: perpendicular 1 N force at a 0.5 m lever arm.'),
  m('a small wrench turn',2,'🔧','Model: perpendicular 10 N force at a 0.2 m lever arm.'),
  m('a firm wrench turn',20,'🔧','Model: perpendicular 100 N force at a 0.2 m lever arm.'),
  m('a hefty wrench turn',100,'🔧','Model: perpendicular 500 N force at a 0.2 m lever arm; not a tightening specification.'),
  m('a pickup engine’s torque',400,'🛻','Illustrative mechanical torque: 400 N·m.'),
  m('an industrial lever turn',1000,'🔧','Model: perpendicular 1,000 N force at a 1 m lever arm.')
 ],{group:'Motion & space',heading:'A TWIST OF NONSENSE',hint:'Torque is turning effect. Although its dimensions match energy, torque in N·m is not a joule of work.'}),
 surfaceTension:q('Surface tension','N/m',[['mN/m',.001],['N/m',1]],[
  m('a surfactant-rich interface',.001,'🧪','Illustrative oil–water interfacial tension with surfactant: 1 mN/m.'),
  m('a soapy-water surface',.025,'🛁','Illustrative liquid–air surface tension: 25 mN/m.'),
  m('a water surface',.072,'💧','Illustrative liquid–air surface tension near room temperature: 72 mN/m.'),
  m('a mercury surface',.485,'🧪','Illustrative liquid–air surface tension: 0.485 N/m.')
 ],{group:'Matter & chemistry',heading:'HOLDING IT TOGETHER'}),
 angularVelocity:q('Spin speed','rad/s',[['mrad/s',.001],['rad/s',1],['krad/s',1000]],[
  m('a clock’s hour hand',tau/43200,'⌚','One full turn in 12 hours; angular speed = 2π/period.'),
  m('a clock’s minute hand',tau/3600,'⌚','One full turn in one hour.'),
  m('a slow Ferris wheel',tau/120,'🎡','Illustrative one revolution every two minutes.'),
  m('a vinyl record',tau*(100/3)/60,'🎵','A 33⅓ rpm record: angular speed = rpm × 2π/60.'),
  m('a washer spin cycle',tau*1200/60,'🧺','Illustrative 1,200 rpm angular speed.'),
  m('a fast spindle',tau*12000/60,'💻','Illustrative spindle speed: 12,000 rpm.')
 ],{group:'Motion & space',heading:'SPINNING A GOOD STORY',hint:'Angular speed magnitude in radians per second. This is not the ordinary cycle frequency in hertz.'}),
 angularAcceleration:q('Spin acceleration','rad/s²',[['mrad/s²',.001],['rad/s²',1],['krad/s²',1000]],[
  m('a gentle Ferris-wheel start',.05/60,'🎡','Model: angular speed rises from 0 to 0.05 rad/s in 60 s.'),
  m('a merry-go-round start',.2/10,'🎡','Model: angular speed increases by 0.2 rad/s over 10 s.'),
  m('a record player starting',(tau*(100/3)/60)/5,'🎵','Model: reaches 33⅓ rpm from rest in 5 seconds, at constant angular acceleration.'),
  m('a washer speeding up',(tau*1200/60)/10,'🧺','Model: reaches 1,200 rpm from rest in 10 seconds, uniformly.'),
  m('a toy flywheel starting',100/.1,'💻','Hypothetical speed change: 100 rad/s in 0.1 s.')
 ],{group:'Motion & space',heading:'TURNING THINGS UP'}),
 irradiance:q('Light & heat per area','W/m²',[['mW/m²',.001],['W/m²',1],['kW/m²',1000]],[
  m('a tiny LED light pool',.001,'🔴','Model: 1 mW radiant power arriving uniformly over 1 m².'),
  m('a nightlight’s light pool',.1,'💡','Model: 0.1 W radiant power arriving over 1 m²; not electrical input.'),
  m('a desk lamp’s light pool',5,'💡','Hypothetical radiant power: 5 W arriving over 1 m².'),
  m('a heat lamp’s warm patch',100,'🔥','Model: 100 W radiant power arriving over 1 m².'),
  m('a bright sunlit surface',1000,'☀️','Illustrative total solar irradiance: 1,000 W/m². This is not UV-weighted exposure, lux, or individual absorbed dose.')
 ],{group:'Heat & energy',heading:'FEEL THE RAYS',hint:'Radiant or heat flux per area. These examples state radiant power; electrical lamp input and perceived brightness are different quantities.'})
};

Object.assign(derivedDimensions,{
 electricDisplacement:q('Electric displacement','C/m²',[['pC/m²',1e-12],['nC/m²',1e-9],['µC/m²',1e-6]],[
  m('a very weak vacuum electric field',epsilon0*.1,'⚡','Linear vacuum model: D = ε₀E for E = 0.1 V/m.'),
  m('a weak vacuum electric field',epsilon0,'⚡','Vacuum model at E = 1 V/m.'),
  m('a stronger vacuum electric field',epsilon0*100,'⚡','Vacuum model at E = 100 V/m.'),
  m('a static vacuum field',epsilon0*10000,'⚡','Hypothetical vacuum model at E = 10 kV/m.'),
  m('a ceramic dielectric field',1000*epsilon0*100,'💻','Illustrative linear dielectric: relative permittivity 1,000 and E = 100 V/m. Material response depends on conditions.')
 ],{group:'Electricity',heading:'A FIELD WITH BOUNDARIES',hint:'Electric displacement D is a field, not generally a sheet of charge. Its normal jump equals free surface charge under the appropriate boundary relation.'}),
 heatCapacity:q('Heat capacity','J/K',[['mJ/K',.001],['J/K',1],['kJ/K',1000]],[
  m('a tiny rice crumb’s heat capacity',.8e-6*1300,'🍚','Model: 0.8 mg crumb with assumed specific heat 1,300 J/(kg·K); C = mc.'),
  m('a rice grain’s heat capacity',25e-6*1300,'🍚','Model: 25 mg grain at assumed 1,300 J/(kg·K).'),
  m('a steel paper clip’s heat capacity',.001*500,'📎','Model: 1 g steel at assumed specific heat 500 J/(kg·K).'),
  m('a teaspoon of water’s heat capacity',.005*4184,'🥄','Model: 5 g water at assumed specific heat 4,184 J/(kg·K).'),
  m('a steel pan’s heat capacity',500,'🍞','Model: 1 kg steel at assumed specific heat 500 J/(kg·K).'),
  m('a mug of water’s heat capacity',.3*4184,'☕','Model: 300 g water at assumed specific heat 4,184 J/(kg·K).')
 ],{group:'Heat & energy',heading:'ROOM FOR MORE HEAT',hint:'Heat capacity is energy needed per temperature change for the specified object and conditions. It is distinct from entropy, despite sharing J/K.'}),
 entropy:q('Entropy change','J/K',[['mJ/K',.001],['J/K',1],['kJ/K',1000]],[
  m('a water speck warming',1e-6*4184*Math.log(300/273),'💧','Model: reversible warming of 1 mg liquid water, 273 to 300 K, constant c = 4,184 J/(kg·K); ΔS = mc ln(T₂/T₁).'),
  m('a paper clip warming',.001*500*Math.log(320/300),'📎','Model: 1 g steel warming reversibly from 300 to 320 K, constant c = 500 J/(kg·K).'),
  m('a teaspoon of water warming',.005*4184*Math.log(320/300),'🥄','Model: 5 g water, reversible 300 to 320 K, constant c = 4,184 J/(kg·K).'),
  m('a mug of water warming',.3*4184*Math.log(320/300),'☕','Model: 300 g water, reversible 300 to 320 K, constant c = 4,184 J/(kg·K).'),
  m('a kettle of water warming',4184*Math.log(373/293),'☕','Model: 1 kg liquid water, reversible 293 to 373 K, constant c = 4,184 J/(kg·K), no phase change.')
 ],{group:'Heat & energy',heading:'A LITTLE MORE DISORDER',hint:'These compare positive entropy changes for specified reversible paths. They do not assign an absolute entropy or equal heat capacity.'}),
 specificHeat:q('Heat capacity per mass','J/(kg·K)',[['J/(kg·K)',1],['kJ/(kg·K)',1000]],[
  m('a cryogenic metal sample',1,'📎','Hypothetical measured specific heat at a selected low temperature: 1 J/(kg·K), not room-temperature metal.'),
  m('a cold metal sample',50,'📎','Hypothetical low-temperature sample reading: 50 J/(kg·K).'),
  m('steel’s specific heat',500,'📎','Rounded illustrative specific heat: 500 J/(kg·K) at stated ordinary conditions.'),
  m('cooking oil’s specific heat',2000,'🥄','Illustrative specific heat: 2,000 J/(kg·K).'),
  m('water’s specific heat',4184,'💧','Rounded illustrative liquid-water specific heat: 4,184 J/(kg·K).')
 ],{group:'Heat & energy',heading:'HEAT BY THE KILO'}),
 specificEntropy:q('Entropy change per mass','J/(kg·K)',[['J/(kg·K)',1],['kJ/(kg·K)',1000]],[
  m('water warming by 0.1 K',4184*Math.log(300.1/300),'💧','Reversible liquid-water model from 300 to 300.1 K, constant c = 4,184 J/(kg·K); Δs = c ln(T₂/T₁).'),
  m('water warming by 1 K',4184*Math.log(301/300),'💧','Reversible model from 300 to 301 K at constant specific heat.'),
  m('water warming by 20 K',4184*Math.log(320/300),'☕','Reversible model from 300 to 320 K at constant specific heat.'),
  m('ice melting at its melting point',334000/273.15,'🧊','Illustrative reversible melting at 273.15 K; latent heat assumed 334 kJ/kg; Δs = L/T.')
 ],{group:'Heat & energy',heading:'DISORDER BY THE KILO'}),
 specificEnergy:q('Energy per mass','J/kg',[['J/kg',1],['kJ/kg',1000],['MJ/kg',1e6]],[
  m('a short apple drop',G*.1,'🍎','Model: gravitational energy change per mass for a 10 cm fall under standard gravity.'),
  m('a runner’s kinetic energy per mass',.5*3**2,'🧑','Model: speed magnitude 3 m/s; E/m = ½v².'),
  m('a highway car’s kinetic energy per mass',.5*25**2,'🛻','Model: speed 25 m/s; E/m = ½v².'),
  m('a fastball’s kinetic energy per mass',.5*40**2,'⚾','Model: speed 40 m/s, independent of the ball’s mass.'),
  m('water warmed by 1 K',4184,'💧','Model: heat per mass = cΔT, with c = 4,184 J/(kg·K) and no phase change.'),
  m('water warmed by 100 K',418400,'☕','Hypothetical constant-c liquid-water model over a 100 K interval, with pressure sufficient to avoid phase change.'),
  m('a one-Calorie-per-gram food',4.184e6,'🍪','Illustrative food-energy density by mass: 1 thermochemical kcal/g = 4.184 MJ/kg.')
 ],{group:'Heat & energy',heading:'ENERGY BY THE KILO',hint:'Specific energy is energy per mass. Its units match Gy, but these mechanical, thermal, and food examples are not ionizing-radiation absorbed doses.'}),
 thermalConductivity:q('Heat conductivity','W/(m·K)',[['mW/(m·K)',.001],['W/(m·K)',1],['kW/(m·K)',1000]],[
  m('high-performance insulation',.01,'📦','Illustrative effective thermal conductivity: 0.01 W/(m·K) at stated conditions.'),
  m('still air',.026,'🍃','Illustrative thermal conductivity near room temperature: 0.026 W/(m·K).'),
  m('wood across its grain',.12,'🌳','Illustrative conductivity: 0.12 W/(m·K); direction and moisture matter.'),
  m('liquid water',.6,'💧','Illustrative thermal conductivity: 0.6 W/(m·K).'),
  m('window glass',1,'🪟','Illustrative thermal conductivity: 1 W/(m·K).'),
  m('stainless steel',15,'📎','Illustrative thermal conductivity: 15 W/(m·K).'),
  m('copper',400,'📎','Rounded illustrative thermal conductivity: 400 W/(m·K).')
 ],{group:'Heat & energy',heading:'PASS THE HEAT'}),
 energyDensity:q('Energy per volume','J/m³',[['J/m³',1],['kJ/m³',1000],['MJ/m³',1e6]],[
  m('a one-millitesla magnetic field',.001**2/(2*mu0),'🧲','Vacuum-field energy-density model: u = B²/(2µ₀), using approximate µ₀.'),
  m('a ten-millitesla magnetic field',.01**2/(2*mu0),'🧲','Vacuum-field energy-density model at B = 0.01 T.'),
  m('a tenth-tesla magnetic field',.1**2/(2*mu0),'🧲','Vacuum-field energy-density model at B = 0.1 T.'),
  m('a one-tesla magnetic field',1/(2*mu0),'🧲','Vacuum-field energy-density model at B = 1 T.'),
  m('a lightly sweetened drink’s food energy',5e6,'🥤','Hypothetical food-energy content: 5 kJ/L = 5 MJ/m³; not radiation dose or mechanical pressure.')
 ],{group:'Heat & energy',heading:'PACKED WITH ENERGY'}),
 electricField:q('Electric field','V/m',[['mV/m',.001],['V/m',1],['kV/m',1000]],[
  m('a tiny sensor field',.001,'🌡️','Uniform-field model: potential difference 1 mV over 1 m; E = ΔV/d.'),
  m('a faint sensor field',.01,'🌡️','Uniform model: 10 mV over 1 m.'),
  m('a small test field',1,'🧪','Uniform model: 0.1 V over 0.1 m.'),
  m('an AA-cell plate gap',15,'🔋','Ideal parallel-plate model: 1.5 V across 10 cm.'),
  m('a smaller AA-cell plate gap',150,'🔋','Ideal parallel-plate model: 1.5 V across 1 cm.'),
  m('a static-charge field',100000,'⚡','Hypothetical uniform-field approximation: 10 kV across 10 cm; real fields and breakdown differ.')
 ],{group:'Electricity',heading:'POTENTIAL OVER DISTANCE'}),
 chargeDensity:q('Charge per volume','C/m³',[['nC/m³',1e-9],['µC/m³',1e-6],['mC/m³',.001],['C/m³',1]],[
  m('a faint charged mist',1e-9,'🌫️','Hypothetical uniform volume charge: 1 nC over 1 m³; ρ = Q/V.'),
  m('a tiny charged mist cloud',1e-7,'🌫️','Hypothetical net charge: 10 nC distributed over 0.1 m³.'),
  m('a charged mist cloud',1e-5,'🌫️','Hypothetical net charge: 1 µC distributed over 0.1 m³.'),
  m('a charged foam block',.001,'📦','Hypothetical uniform net charge: 1 µC in 1 liter of foam.'),
  m('a small charged foam block',.1,'📦','Hypothetical uniform net charge: 1 µC in 10 cm³.'),
  m('a charged foam cube',1,'📦','Hypothetical uniform net charge: 1 µC in 1 cm³; not a claim about ordinary foam.')
 ],{group:'Electricity',heading:'CHARGE ALL THROUGH'}),
 surfaceChargeDensity:q('Charge per area','C/m²',[['nC/m²',1e-9],['µC/m²',1e-6],['mC/m²',.001]],[
  m('a faintly charged sheet',1e-9,'📝','Hypothetical uniform sheet charge: 1 nC over 1 m².'),
  m('a charged postcard',1e-7,'✉️','Hypothetical uniform charge: 1 nC over 100 cm².'),
  m('a staticky postcard',1e-5,'✉️','Hypothetical uniform charge: 0.1 µC over 100 cm².'),
  m('a very staticky card',.001,'📝','Hypothetical uniform charge: 1 µC over 10 cm²; not an ordinary-paper specification.')
 ],{group:'Electricity',heading:'CHARGE ON THE SURFACE',hint:'Surface charge density Q/A. Electric displacement has the same SI unit; a constitutive/boundary model is needed to interpret a particular field.'}),
 permittivity:q('Permittivity','F/m',[['pF/m',1e-12],['nF/m',1e-9]],[
  m('vacuum’s permittivity',epsilon0,'⚛️','Approximate vacuum permittivity ε₀ = 8.8541878128 pF/m; not an exact defining constant in the current SI.'),
  m('an insulating plastic’s permittivity',2.3*epsilon0,'📦','Illustrative linear relative permittivity: εᵣ = 2.3 at specified frequency and temperature.'),
  m('a glass sample’s permittivity',5*epsilon0,'🪟','Illustrative linear relative permittivity: εᵣ = 5.'),
  m('water’s low-frequency permittivity',80*epsilon0,'💧','Illustrative relative permittivity: 80 under low-frequency, ordinary-temperature conditions.'),
  m('a capacitor ceramic’s permittivity',1000*epsilon0,'💻','Illustrative effective relative permittivity: 1,000; depends strongly on material, field, and frequency.')
 ],{group:'Electricity',heading:'ROOM FOR THE FIELD',hint:'Permittivity describes dielectric response under stated conditions. The practical scale choices are pF/m and nF/m; the coherent unit is F/m.'}),
 permeability:q('Permeability','H/m',[['µH/m',1e-6],['mH/m',.001],['H/m',1]],[
  m('vacuum’s permeability',mu0,'⚛️','Approximate µ₀ = 1.25663706212 µH/m; not an exact SI defining constant.'),
  m('a mildly magnetic core model',10*mu0,'🧲','Illustrative linear relative permeability: 10.'),
  m('a soft iron core model',1000*mu0,'🧲','Illustrative low-field relative permeability: 1,000.'),
  m('a high-permeability alloy model',100000*mu0,'🧲','Illustrative low-field relative permeability: 100,000; field, frequency, and hysteresis matter.')
 ],{group:'Magnetism',heading:'LET THE FIELD THROUGH'}),
 molarEnergy:q('Energy per mole','J/mol',[['J/mol',1],['kJ/mol',1000],['MJ/mol',1e6]],[
  m('a tiny ideal-gas warming',1.5*R*.1,'🎈','Model: monatomic ideal gas warmed by 0.1 K at constant volume; ΔU/n = 3RΔT/2.'),
  m('an ideal-gas warming',1.5*R*10,'🎈','Model: monatomic ideal gas warmed by 10 K at constant volume.'),
  m('a large ideal-gas warming',1.5*R*1000,'🎈','Hypothetical ideal-gas model: 1,000 K temperature rise, constant monatomic heat capacity.'),
  m('an electron-mole battery hop',96485.33212,'⚡','Model: one mole of elementary charges moving through 1 V; energy per mole ≈ Faraday constant × voltage.'),
  m('a ten-volt electron-mole hop',964853.3212,'⚡','Model: one mole of elementary charges moving through 10 V.')
 ],{group:'Matter & chemistry',heading:'MOLE POWER'}),
 molarEntropy:q('Entropy change per mole','J/(mol·K)',[['mJ/(mol·K)',.001],['J/(mol·K)',1]],[
  m('a tiny ideal-gas expansion',R*Math.log(1.0001),'🎈','Reversible isothermal ideal-gas model: volume ratio 1.0001; ΔS/n = R ln(V₂/V₁).'),
  m('a small ideal-gas expansion',R*Math.log(1.01),'🎈','Reversible isothermal ideal-gas model: volume increases by 1%.'),
  m('an ideal-gas volume doubling',R*Math.log(2),'🎈','Reversible isothermal expansion with volume ratio 2.'),
  m('an ideal-gas tenfold expansion',R*Math.log(10),'🎈','Reversible isothermal expansion with volume ratio 10.')
 ],{group:'Matter & chemistry',heading:'MOLES MAKING ROOM'}),
 molarHeatCapacity:q('Heat capacity per mole','J/(mol·K)',[['J/(mol·K)',1],['kJ/(mol·K)',1000]],[
  m('a cold lattice sample',1,'📎','Hypothetical measured molar heat capacity at a selected low temperature: 1 J/(mol·K).'),
  m('a monatomic ideal gas at fixed volume',1.5*R,'🎈','Ideal-gas model: Cᵥ/n = 3R/2.'),
  m('liquid water’s molar heat capacity',4184*.01801528,'💧','Illustrative model: specific heat 4,184 J/(kg·K) × water molar mass 0.01801528 kg/mol.'),
  m('a sugar sample’s molar heat capacity',1250*.3422965,'🍬','Illustrative sucrose model: assumed specific heat 1,250 J/(kg·K) × molar mass 0.3422965 kg/mol.')
 ],{group:'Matter & chemistry',heading:'HEAT A MOLE AT A TIME'}),
 exposure:q('Radiation exposure in air','C/kg',[['nC/kg',1e-9],['µC/kg',1e-6],['mC/kg',.001]],[
  m('a tiny air-chamber reading',1e-9,'☢️','Hypothetical X/γ ionization-charge model: 1 pC of ions of one sign collected per 1 g dry air.'),
  m('a faint air-chamber reading',1e-8,'☢️','Hypothetical reading: 10 pC collected per 1 g dry air.'),
  m('an air-chamber reading',1e-6,'☢️','Hypothetical reading: 1 nC per 1 g dry air.'),
  m('a larger air-chamber reading',1e-4,'☢️','Hypothetical reading: 100 nC per 1 g dry air.'),
  m('a one-roentgen air exposure',2.58e-4,'☢️','Conventional conversion: 1 roentgen = 2.58 × 10⁻⁴ C/kg in air; not patient effective dose.')
 ],{group:'Radiation & sunshine',heading:'COUNTING CHARGE IN AIR',hint:'Exposure here means ionization charge of one sign per mass of dry air for X/γ radiation. It is distinct from Bq, Gy, Sv, and everyday use of the word exposure.',signNote:'Ionization in air; not a patient-dose or risk equivalence.'}),
 doseRate:q('Absorbed dose per second','Gy/s',[['nGy/s',1e-9],['µGy/s',1e-6],['mGy/s',.001],['Gy/s',1]],[
  m('a tiny water-dosimeter rate',1e-9,'💧','Hypothetical absorbed power: 1 pW in 1 g water; dose rate = absorbed power/mass.'),
  m('a faint water-dosimeter rate',1e-7,'💧','Hypothetical absorbed power: 100 pW in 1 g water.'),
  m('a small water-dosimeter rate',1e-5,'💧','Hypothetical absorbed power: 10 nW in 1 g water.'),
  m('a water-phantom dose rate',.001,'🧪','Hypothetical absorbed power: 1 µW in 1 g water.'),
  m('a larger water-phantom dose rate',.1,'🧪','Hypothetical absorbed power: 100 µW in 1 g water.'),
  m('a one-gray-per-second phantom rate',1,'🧪','Hypothetical calibrated absorbed-power reading: 1 J/(kg·s); not a clinical recommendation.')
 ],{group:'Radiation & sunshine',heading:'DOSE ON THE CLOCK',hint:'Absorbed dose rate in gray per second. Time integration gives Gy, not automatically Sv or health risk.',signNote:'Absorbed dose rate; not effective dose or medical risk.'}),
 radiantIntensity:q('Radiant power per view angle','W/sr',[['µW/sr',1e-6],['mW/sr',.001],['W/sr',1],['kW/sr',1000]],[
  m('a tiny omnidirectional light source',10e-6/(4*pi),'🔴','Model: 10 µW radiant output uniformly over 4π sr; not lumens.'),
  m('a small omnidirectional light source',.001/(4*pi),'🔴','Model: 1 mW radiant output uniformly over 4π sr.'),
  m('a small radiating LED',.01/(4*pi),'🔴','Model: 10 mW radiant output uniformly over 4π sr.'),
  m('a radiating LED',.1/(4*pi),'🔴','Model: 0.1 W radiant output uniformly over 4π sr.'),
  m('a broad LED cone',.1/(2*pi*(1-Math.cos(pi/6))),'🔦','Model: 0.1 W radiant power uniformly inside a 60° full-angle cone.'),
  m('a small hemispherical radiant lamp',10/(2*pi),'💡','Model: 10 W radiant output uniformly over a hemisphere.'),
  m('a hemispherical heat lamp',100/(2*pi),'🔥','Model: 100 W radiant output uniformly over a hemisphere.'),
  m('a focused radiant lamp',100/(2*pi*(1-Math.cos(pi/18))),'🔦','Model: 100 W radiant output uniformly inside a 20° full-angle cone.')
 ],{group:'Light & waves',heading:'POWER WITH DIRECTION',hint:'Radiant intensity measures watts per steradian. Luminous intensity in candela includes human visual weighting and is separate.'}),
 radiance:q('Radiant surface brightness','W/(m²·sr)',[['mW/(m²·sr)',.001],['W/(m²·sr)',1],['kW/(m²·sr)',1000]],[
  m('a tiny radiating panel',.001,'💡','Hypothetical uniform radiance: 1 mW/(m²·sr).'),
  m('a dim Lambertian panel',.1/pi,'💡','Model: 0.1 W emitted over 1 m² with Lambertian distribution; L = P/(πA).'),
  m('a brighter Lambertian panel',10/pi,'💡','Model: 10 W radiant power over 1 m², Lambertian distribution.'),
  m('a warm toast-sized panel',10/(pi*.1),'🍞','Model: 10 W radiant power over 0.1 m², Lambertian distribution.'),
  m('a hot heater panel',1000/pi,'🔥','Model: 1,000 W radiant power over 1 m², Lambertian distribution.')
 ],{group:'Light & waves',heading:'A RADIANT PERSONALITY',hint:'Radiance is radiant power per projected area per solid angle. It is not luminance, illuminance, or UV-weighted exposure.'}),
 enzymeConcentration:q('Enzyme activity per volume','kat/m³',[['nkat/m³',1e-9],['µkat/m³',1e-6],['mkat/m³',.001],['kat/m³',1]],[
  m('a very dilute enzyme broth',1e-9,'🧪','Hypothetical fixed-condition assay: 1 pmol substrate converted per second in 1 liter.'),
  m('a dilute enzyme broth',1e-7,'🧪','Hypothetical fixed-condition assay: 100 pmol/s per liter.'),
  m('a small enzyme broth assay',1e-5,'🧪','Hypothetical fixed-condition assay: 10 nmol/s per liter.'),
  m('an enzyme broth assay',.001,'🧬','Hypothetical fixed-condition assay: 1 µmol/s per liter.'),
  m('a strong enzyme broth assay',.1,'🧬','Hypothetical fixed-condition assay: 100 µmol/s per liter.'),
  m('a concentrated enzyme reactor broth',1,'🏭','Hypothetical fixed-condition assay: 1 mmol/s per liter.')
 ],{group:'Matter & chemistry',heading:'A VERY BUSY BROTH',hint:'Catalytic activity per volume, not enzyme mass concentration. Comparisons require the same reaction, substrate, and assay conditions.',signNote:'Reaction and assay conditions must match.'})
});
