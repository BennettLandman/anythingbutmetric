// Explicit manifest for the user's three SI tables. Equal dimensions do not imply
// interchangeable physical quantities; each row points to its own comparison pool.
export const baseUnitCoverage=[
 ['Length','m','length'],['Mass','kg','mass'],['Time','s','time'],['Current','A','current'],
 ['Temperature','K','temperature'],['Amount','mol','substance'],['Brightness','cd','luminous']
];
export const namedUnitCoverage=[
 ['Plane angle (radian)','rad','angle'],['Solid angle (steradian)','sr','solidAngle'],
 ['Frequency (hertz)','Hz','frequency'],['Force (newton)','N','force'],
 ['Pressure / stress (pascal)','Pa','pressure'],['Energy / work / heat (joule)','J','energy'],
 ['Power / radiant flux (watt)','W','power'],['Charge (coulomb)','C','charge'],
 ['Voltage (volt)','V','voltage'],['Resistance (ohm)','Ω','resistance'],
 ['Conductance (siemens)','S','conductance'],['Capacitance (farad)','F','capacitance'],
 ['Inductance (henry)','H','inductance'],['Magnetic flux density (tesla)','T','magneticField'],
 ['Magnetic flux (weber)','Wb','magneticFlux'],['Celsius temperature','°C','temperature'],
 ['Luminous flux (lumen)','lm','lightOutput'],['Illuminance (lux)','lx','illuminance'],
 ['Radioactivity (becquerel)','Bq','activity'],['Absorbed dose (gray)','Gy','absorbedDose'],
 ['Effective dose (sievert)','Sv','dose'],['Catalytic activity (katal)','kat','catalysis']
];
export const baseDerivedCoverage=[
 ['Area','m²','area'],['Volume','m³','volume'],['Speed / velocity magnitude','m/s','speed'],
 ['Acceleration magnitude','m/s²','acceleration'],['Spectroscopic wavenumber','m⁻¹','wavenumber'],
 ['Positive lens strength / vergence','m⁻¹','vergence'],['Bulk mass density','kg/m³','density'],
 ['Surface mass density','kg/m²','surfaceDensity'],['Specific volume','m³/kg','specificVolume'],
 ['Current density','A/m²','currentDensity'],['Magnetic field strength H','A/m','magnetizingField'],
 ['Amount concentration','mol/m³','concentration'],['Mass concentration','kg/m³','massConcentration'],
 ['Luminance','cd/m²','luminance']
];
export const otherDerivedCoverage=[
 ['Dynamic viscosity','Pa·s','viscosity'],['Torque / moment of force','N·m','torque'],
 ['Surface / interfacial tension','N/m','surfaceTension'],['Angular speed magnitude','rad/s','angularVelocity'],
 ['Angular acceleration magnitude','rad/s²','angularAcceleration'],['Irradiance / heat flux density','W/m²','irradiance'],
 ['Heat capacity','J/K','heatCapacity'],['Entropy change','J/K','entropy'],
 ['Specific heat capacity','J/(kg·K)','specificHeat'],['Specific entropy change','J/(kg·K)','specificEntropy'],
 ['Specific energy','J/kg','specificEnergy'],['Thermal conductivity','W/(m·K)','thermalConductivity'],
 ['Energy density','J/m³','energyDensity'],['Electric field strength','V/m','electricField'],
 ['Volume charge density','C/m³','chargeDensity'],['Surface charge density','C/m²','surfaceChargeDensity'],
 ['Permittivity','F/m','permittivity'],['Permeability','H/m','permeability'],
 ['Molar energy','J/mol','molarEnergy'],['Molar entropy change','J/(mol·K)','molarEntropy'],
 ['Molar heat capacity','J/(mol·K)','molarHeatCapacity'],['X/γ exposure in air','C/kg','exposure'],
 ['Absorbed dose rate','Gy/s','doseRate'],['Radiant intensity','W/sr','radiantIntensity'],
 ['Radiance','W/(m²·sr)','radiance'],['Catalytic activity concentration','kat/m³','enzymeConcentration']
];
export const additionalQuantityCoverage=[
 ['Kerma','Gy','kerma'],['Tissue equivalent dose','Sv','equivalentDose'],
 ['Electric displacement','C/m²','electricDisplacement'],['Erythemally weighted UV exposure','J/m²','sunshine']
];
