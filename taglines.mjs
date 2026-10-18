import {dimensions,toSI,comparisonText} from './engine.mjs';

// Two hand-picked examples per quantity: a tidy, even SI amount and a real
// reference from that quantity's pool. Prefixes keep the starting numbers easy.
// Celsius gets its own pair because it shares a menu category with Kelvin.
export const taglinePairs={
 length:[[100,'m','school bus'],[50,'cm','U.S. quarter']],
 mass:[[20,'kg','house cat'],[100,'g','U.S. quarter']],
 area:[[100,'m²','parking space'],[20,'cm²','postage stamp']],
 volume:[[100,'L','bathtub'],[20,'mL','teaspoon']],
 time:[[100,'s','blink'],[20,'ks','baseball game']],
 force:[[20,'N','cheeseburger'],[100,'kN','T. rex']],
 pressure:[[200,'kPa','car tire’s inflation pressure'],[100,'Pa','a pancake’s pressure on a plate']],
 current:[[20,'A','breakfast toaster'],[100,'mA','indicator LED']],
 temperature:[[300,'K','a warm pie’s temperature'],[100,'K','liquid nitrogen’s boiling temperature']],
 substance:[[2,'mol','diner sugar packet'],[20,'mol','cup of water']],
 luminous:[[20,'cd','a birthday candle’s intensity'],[100,'cd','a broad flashlight’s intensity']],
 energy:[[20,'J','baseball toss'],[10,'MJ','cheeseburger']],
 angle:[[2,'rad','a pizza-slice turn'],[20,'rad','a full merry-go-round turn']],
 solidAngle:[[2,'sr','a wide flashlight cone'],[10,'sr','a full sky above a picnic']],
 frequency:[[100,'Hz','a resting heartbeat'],[2,'GHz','a Wi-Fi carrier']],
 power:[[100,'W','an old light bulb'],[10,'kW','a breakfast toaster']],
 charge:[[100,'C','a phone-charging minute'],[20,'mC','an LED second']],
 voltage:[[10,'V','an AA battery'],[200,'V','a wall outlet']],
 resistance:[[20,'Ω','a toaster’s hot resistance'],[10,'kΩ','an LED series resistor']],
 conductance:[[200,'mS','a toaster’s conductance'],[20,'S','a wire’s conductance']],
 capacitance:[[20,'pF','a tiny chip capacitor'],[10,'F','a supercapacitor']],
 inductance:[[20,'µH','a little wire loop'],[10,'mH','a filter coil']],
 magneticField:[[100,'µT','an Earth-like field'],[2,'T','a clinical MRI field']],
 magneticFlux:[[20,'µWb','an Earth-field postcard'],[2,'Wb','a big MRI loop']],
 lightOutput:[[100,'lm','a small flashlight’s output'],[2,'klm','a bedside bulb’s output']],
 illuminance:[[100,'lx','a lit desk'],[20,'klx','a sunlit outdoor surface']],
 catalysis:[[20,'µkat','a kitchen-enzyme assay'],[2,'kat','an industrial enzyme reactor']],
 activity:[[100,'Bq','a banana’s activity'],[10,'kBq','a salt-substitute jar’s activity']],
 dose:[[100,'µSv','a banana-equivalent dose'],[10,'mSv','a chest CT']],
 absorbedDose:[[20,'µGy','a water-drop dosimeter reading'],[4,'Gy','a conventional treatment fraction']],
 sunshine:[[100,'J/m²','one minute of sunshine at UVI 4'],[2,'kJ/m²','one hour of sunshine at UVI 6']],
 kerma:[[20,'µGy','a small air-kerma reading'],[2,'Gy','a one-gray kerma reference']],
 equivalentDose:[[20,'µSv','a small photon tissue-dose model'],[200,'mSv','an alpha tissue-dose model']],
 speed:[[20,'m/s','a walking person'],[100,'m/s','a highway pickup']],
 acceleration:[[20,'m/s²','a bus pulling away'],[100,'m/s²','standard gravity']],
 wavenumber:[[20,'m⁻¹','a Wi-Fi-scale wave'],[2,'mm⁻¹','a millimeter wave']],
 vergence:[[20,'m⁻¹','a reading lens'],[2,'cm⁻¹','a phone-camera lens']],
 density:[[100,'kg/m³','a fluffy marshmallow'],[2,'g/cm³','water']],
 surfaceDensity:[[100,'g/m²','printer paper'],[2,'kg/m²','T-shirt fabric']],
 specificVolume:[[20,'L/kg','a marshmallow’s volume per mass'],[2,'m³/kg','air’s volume per mass']],
 currentDensity:[[100,'A/m²','a phone-charger contact'],[20,'kA/m²','an AA-cell contact']],
 magnetizingField:[[20,'A/m','a powered long coil'],[2,'kA/m','a stronger long coil']],
 concentration:[[20,'mol/m³','a stronger lab salt solution'],[2,'kmol/m³','a concentrated salt solution']],
 massConcentration:[[20,'mg/L','a dilute salt mixture'],[20,'g/L','a cooking-water salt model']],
 luminance:[[100,'cd/m²','a phone display'],[2,'kcd/m²','a bright outdoor display']],
 viscosity:[[100,'mPa·s','cooking oil’s viscosity'],[20,'Pa·s','thick honey’s viscosity']],
 torque:[[100,'N·m','a firm wrench turn'],[2,'kN·m','a pickup engine’s torque']],
 surfaceTension:[[100,'mN/m','a water surface'],[2,'N/m','a soapy-water surface']],
 angularVelocity:[[20,'rad/s','a vinyl record'],[2,'krad/s','a washer spin cycle']],
 angularAcceleration:[[20,'rad/s²','a record player starting'],[2,'krad/s²','a washer speeding up']],
 irradiance:[[20,'W/m²','a desk lamp’s light pool'],[2,'kW/m²','a bright sunlit surface']],
 electricDisplacement:[[20,'pC/m²','a weak vacuum electric field'],[2,'µC/m²','a ceramic dielectric field']],
 heatCapacity:[[100,'J/K','a teaspoon of water’s heat capacity'],[2,'kJ/K','a mug of water’s heat capacity']],
 entropy:[[100,'J/K','a mug of water warming'],[2,'kJ/K','a kettle of water warming']],
 specificHeat:[[2,'kJ/(kg·K)','steel’s specific heat'],[10,'kJ/(kg·K)','water’s specific heat']],
 specificEntropy:[[100,'J/(kg·K)','water warming by 20 K'],[2,'kJ/(kg·K)','ice melting at its melting point']],
 specificEnergy:[[20,'J/kg','a runner’s kinetic energy per mass'],[2,'kJ/kg','a fastball’s kinetic energy per mass']],
 thermalConductivity:[[2,'W/(m·K)','wood across its grain'],[100,'W/(m·K)','copper']],
 energyDensity:[[100,'J/m³','a ten-millitesla magnetic field'],[20,'MJ/m³','a lightly sweetened drink’s food energy']],
 electricField:[[100,'V/m','an AA-cell plate gap'],[20,'kV/m','a static-charge field']],
 chargeDensity:[[20,'µC/m³','a charged mist cloud'],[2,'C/m³','a charged foam cube']],
 surfaceChargeDensity:[[20,'µC/m²','a staticky postcard'],[2,'mC/m²','a very staticky card']],
 permittivity:[[20,'pF/m','an insulating plastic’s permittivity'],[2,'nF/m','water’s low-frequency permittivity']],
 permeability:[[20,'µH/m','a mildly magnetic core model'],[2,'mH/m','a soft iron core model']],
 molarEnergy:[[20,'kJ/mol','a large ideal-gas warming'],[100,'kJ/mol','an electron-mole battery hop']],
 molarEntropy:[[10,'J/(mol·K)','an ideal-gas volume doubling'],[20,'J/(mol·K)','an ideal-gas tenfold expansion']],
 molarHeatCapacity:[[100,'J/(mol·K)','liquid water’s molar heat capacity'],[2,'kJ/(mol·K)','a sugar sample’s molar heat capacity']],
 exposure:[[20,'µC/kg','an air-chamber reading'],[2,'mC/kg','a one-roentgen air exposure']],
 doseRate:[[20,'µGy/s','a small water-dosimeter rate'],[2,'Gy/s','a one-gray-per-second phantom rate']],
 radiantIntensity:[[20,'W/sr','a hemispherical heat lamp'],[2,'kW/sr','a focused radiant lamp']],
 radiance:[[100,'W/(m²·sr)','a warm toast-sized panel'],[2,'kW/(m²·sr)','a hot heater panel']],
 enzymeConcentration:[[20,'µkat/m³','a small enzyme broth assay'],[2,'kat/m³','a concentrated enzyme reactor broth']]
};

const celsiusPairs=[[20,'°C','an ice-water bath’s temperature'],[100,'°C','a warm pie’s temperature']];
const makeExample=(dimension,[amount,unit,name])=>{
 const reference=dimensions[dimension].refs.find(r=>r.name===name);
 if(!reference)throw new Error(`Missing tagline reference: ${dimension}: ${name}`);
 const si=toSI(amount,dimension,unit);
 const measurement=`${amount.toLocaleString('en-US')} ${unit}`;
 const comparison=comparisonText({...reference,count:si/reference.value});
 return Object.freeze({dimension,amount,unit,si,reference,measurement,comparison,
  text:`Why say ${measurement} when you could say ${comparison}? Exactly.`});
};

export const taglineExamples=Object.freeze([
 ...Object.entries(taglinePairs).flatMap(([dimension,pair])=>pair.map(example=>makeExample(dimension,example))),
 ...celsiusPairs.map(example=>makeExample('temperature',example))
]);

// Run once at startup; converter interactions do not change the hero copy.
export function chooseTagline(random=Math.random){
 return taglineExamples[Math.floor(random()*taglineExamples.length)];
}
