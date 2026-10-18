import {model as m,quantity as q} from './catalog-helpers.mjs';
const food='https://www.epa.gov/radtown/natural-radioactivity-food';
const imaging='https://www.radiologyinfo.org/en/info/safety-xray';
const potassium='https://pubmed.ncbi.nlm.nih.gov/9044422/';
const uv='https://avdc.gsfc.nasa.gov/pub/DSCOVR/Web_EPIC/Erythemal_UV.html';
const background=0.003/(365.25*86400);
export const radiationDimensions={
 activity:q('Radioactivity','Bq',[['mBq',.001],['Bq',1],['kBq',1e3],['MBq',1e6]],[
  m('a tiny banana speck’s activity',.00155,'🍌','Model: a 15 mg speck from a hypothetical 150 g banana containing 0.5 g natural potassium. Uses rounded 31 Bq/g potassium; activity is not a radiation dose.',potassium),
  m('a small banana bite’s activity',.155,'🍌','Model: 1/100 of a hypothetical banana with 0.5 g potassium, at 31 Bq/g potassium.',potassium),
  m('a banana’s activity',15.5,'🍌','Illustrative potassium-40 activity: 0.5 g natural potassium × rounded 31 Bq/g = 15.5 decays/s. Actual potassium content and total activity vary.',potassium),
  m('a banana bunch’s activity',155,'🍌','Model: ten illustrative bananas, each with potassium-40 activity 15.5 Bq. This is decay rate, not health risk.',potassium),
  m('a salt-substitute jar’s activity',3100,'🧂','Model: a jar containing 100 g natural potassium at rounded 31 Bq/g; not 100 g of potassium chloride.',potassium),
  m('a small check source’s activity',37000,'☢️','Illustrative sealed calibration-source activity: 1 microcurie = 37,000 Bq; not an instruction to obtain or handle a source.'),
  m('a tracer sample’s activity',1e6,'🧪','Hypothetical measured sample activity: 1 MBq at the stated measurement time; not a patient administration.')
 ],{group:'Radiation & sunshine',value:15.5,heading:'BANANAS ARE COUNTING',hint:'Becquerels count radioactive decays per second. Activity alone does not specify absorbed dose, effective dose, or health risk.',signNote:'Activity is decays/second, not dose or health risk.'}),
 dose:q('Radiation dose','Sv',[['nSv',1e-9],['µSv',1e-6],['mSv',.001],['Sv',1]],[
  m('one second of natural background',background,'🌎','Model: average U.S. natural background of 3 mSv/year spread uniformly over a 365.25-day year; local exposure varies.',imaging),
  m('one minute of natural background',background*60,'🌎','Illustrative time-scaled average U.S. natural background, using 3 mSv/year.',imaging),
  m('a banana-equivalent dose',1e-7,'🍌','Informal educational scale: eating a banana ≈ 0.1 µSv. This is not an additive dietary-dose or medical-risk model; the body regulates potassium.',food),
  m('one hour of natural background',background*3600,'🌎','Model: 3 mSv/year divided into hours. This includes average natural ionizing background, NOT sunlight’s UV exposure.',imaging),
  m('one day of natural background',background*86400,'🌎','Model: 3 mSv/year divided into days. Exposure varies with geography and other conditions.',imaging),
  m('a dental X-ray',.005e-3,'🩻','Typical adult effective dose listed by RadiologyInfo: 0.005 mSv; actual exam dose varies.',imaging),
  m('a chest X-ray',.1e-3,'🩻','Typical adult chest X-ray effective dose listed by RadiologyInfo: 0.1 mSv. Protocol and patient size affect actual dose.',imaging),
  m('a screening mammogram',.28e-3,'🏥','Typical adult digital screening mammogram effective dose: 0.28 mSv; actual dose varies.',imaging),
  m('a head CT',1.6e-3,'🏥','Typical adult brain CT effective dose listed by RadiologyInfo: 1.6 mSv; actual dose varies.',imaging),
  m('a chest CT',6.1e-3,'🏥','Typical adult chest CT effective dose listed by RadiologyInfo: 6.1 mSv; not every CT uses this dose.',imaging),
  m('an abdomen-and-pelvis CT',7.7e-3,'🏥','Typical adult abdomen/pelvis CT effective dose: 7.7 mSv; repeated phases and patient/protocol differences change dose.',imaging),
  m('one year of natural background',.003,'🌎','Illustrative average U.S. natural background: about 3 mSv/year.',imaging),
  m('a six-month space-station stay',.160,'🚀','Illustrative NASA educational reference: 160 mSv for a six-month ISS stay; mission conditions vary.','https://www.nasa.gov/wp-content/uploads/2017/04/sf_radiation_stu_bob.pdf')
 ],{group:'Radiation & sunshine',value:.1,unit:'µSv',heading:'BANANA FOR SCALE',hint:'These are approximate effective-dose comparisons for ionizing radiation. Exam doses vary; banana equivalents are a scale joke, not a dietary-dose or individual health-risk calculator. Sunshine UV is a separate category.',signNote:'Illustrative effective dose, not equivalent medical risk.'}),
 absorbedDose:q('Absorbed dose','Gy',[['nGy',1e-9],['µGy',1e-6],['mGy',.001],['Gy',1]],[
  m('a tiny water-drop dose',1e-9,'💧','Hypothetical dosimetry model: 1 picojoule deposited in 1 g water; D = energy/mass = 1 nGy.'),
  m('a faint water-drop dose',1e-7,'💧','Hypothetical: 0.1 nanojoule deposited in 1 g water = 0.1 µGy.'),
  m('a water-drop dosimeter reading',1e-6,'💧','Hypothetical: 1 nanojoule deposited in 1 g water = 1 µGy.'),
  m('a small water-phantom reading',1e-5,'💧','Hypothetical: 10 nanojoules deposited in 1 g water = 10 µGy.'),
  m('a calibration water-phantom reading',.001,'🧪','Hypothetical: 1 microjoule deposited in 1 g water = 1 mGy; not a patient-dose estimate.'),
  m('a larger phantom reading',.1,'🧪','Hypothetical absorbed energy: 0.1 J per kg of material.'),
  m('a conventional treatment fraction',2,'🏥','Example of a prescribed target absorbed dose in some radiotherapy schedules: 2 Gy. Local treatment dose is not whole-body effective dose.','https://www.cancer.gov/types/breast/hp/breast-treatment-pdq')
 ],{group:'Radiation & sunshine',heading:'ENERGY LANDED HERE',hint:'Gray means joules of ionizing-radiation energy absorbed per kilogram. Gy is not automatically Sv; tissue and radiation weighting and dose distribution matter.',signNote:'Absorbed energy per mass; not effective dose or risk.'}),
 sunshine:q('Sunshine (UV exposure)','J/m²',[['mJ/m²',.001],['J/m²',1],['kJ/m²',1000]],[
  m('a sunshine blink at UV Index 4',.001,'☀️','Model: 0.01 s at constant UVI 4. Erythemally weighted irradiance = UVI × 0.025 W/m²; exposure = irradiance × time.',uv),
  m('one second of sunshine at UVI 4',.1,'☀️','Model: 4 × 0.025 W/m² × 1 s = 0.1 J/m², erythemally weighted UV exposure.',uv),
  m('ten seconds of sunshine at UVI 4',1,'☀️','Model: 4 × 0.025 W/m² × 10 s = 1 J/m².',uv),
  m('one minute of sunshine at UVI 4',6,'☀️','Model: constant UV Index 4 for 60 seconds gives 6 J/m² weighted UV exposure.',uv),
  m('one hour of sunshine at UVI 1',90,'☀️','Model: constant UVI 1 for 3,600 seconds gives 90 J/m² weighted UV exposure.',uv),
  m('one hour of sunshine at UVI 3',270,'☀️','Model: constant UVI 3 for 3,600 seconds gives 270 J/m² weighted UV exposure.',uv),
  m('one hour of sunshine at UVI 6',540,'☀️','Model: constant UVI 6 for 3,600 seconds gives 540 J/m² weighted UV exposure.',uv),
  m('one hour of sunshine at UVI 10',900,'☀️','Model: constant UVI 10 for 3,600 seconds gives 900 J/m² weighted UV exposure. Not an estimate for a particular person or day.',uv)
 ],{group:'Radiation & sunshine',value:540,unit:'J/m²',heading:'SUNSHINE FOR SCALE',hint:'Erythemally weighted UV exposure uses an explicit, constant UV Index and time. Weather, orientation, shade, clothing, and changing UV levels affect actual exposure. It cannot be converted to a CT or X-ray effective dose.',signNote:'Weighted UV exposure; not an X-ray dose or burn-time estimate.'})
};

const weights='https://www.osha.gov/ionizing-radiation/background';
Object.assign(radiationDimensions,{
 kerma:q('Kerma','Gy',[['nGy',1e-9],['µGy',1e-6],['mGy',.001],['Gy',1]],[
  m('a tiny air-kerma reading',1e-9,'☢️','Hypothetical model: photons transfer 1 pJ initial charged-particle kinetic energy per 1 g air; K = Etr/m.'),
  m('a faint air-kerma reading',1e-7,'☢️','Hypothetical initial charged-particle kinetic energy transferred: 0.1 nJ per 1 g air.'),
  m('a small air-kerma reading',1e-5,'☢️','Hypothetical transferred kinetic energy: 10 nJ per 1 g air.'),
  m('an air-kerma calibration reading',.001,'🧪','Hypothetical transferred kinetic energy: 1 µJ per 1 g air.'),
  m('a larger kerma reading',.1,'🧪','Hypothetical transferred initial kinetic energy: 0.1 J per kg of medium.'),
  m('a one-gray kerma reference',1,'🧪','Defined model: 1 J initial charged-particle kinetic energy transferred per kg; not necessarily energy absorbed locally.')
 ],{group:'Radiation & sunshine',heading:'ENERGY PASSED ALONG',hint:'Kerma is initial charged-particle kinetic energy transferred by uncharged radiation per mass. It shares Gy with absorbed dose, but energy may escape the region.',signNote:'Kerma is transferred energy, not necessarily local absorbed dose.',definitionSource:'https://www-pub.iaea.org/MTCD/Publications/PDF/P074_scr.pdf'}),
 equivalentDose:q('Tissue dose equivalent','Sv',[['nSv',1e-9],['µSv',1e-6],['mSv',.001],['Sv',1]],[
  m('a tiny photon tissue-dose model',1e-9,'🩻','Hypothetical mean tissue absorbed dose: 1 nGy photons × radiation weighting factor 1 = 1 nSv equivalent dose.',weights),
  m('a faint photon tissue-dose model',1e-7,'🩻','Hypothetical mean tissue absorbed dose: 0.1 µGy photons × factor 1.',weights),
  m('a small photon tissue-dose model',1e-5,'🩻','Hypothetical mean tissue absorbed dose: 10 µGy photons × factor 1.',weights),
  m('a photon tissue-dose model',.001,'🩻','Hypothetical mean tissue absorbed dose: 1 mGy photons × factor 1. This is not a CT effective dose.',weights),
  m('an alpha tissue-dose model',.1,'☢️','Hypothetical mean tissue absorbed dose: 5 mGy alpha radiation × weighting factor 20 = 0.1 Sv equivalent dose.',weights),
  m('a larger alpha tissue-dose model',1,'☢️','Hypothetical mean tissue absorbed dose: 50 mGy alpha radiation × factor 20 = 1 Sv equivalent dose.',weights)
 ],{group:'Radiation & sunshine',heading:'WEIGHTED FOR THE TISSUE',hint:'Equivalent dose uses radiation weighting for a specified tissue. Effective dose additionally uses tissue weighting. Neither is an individual risk prediction.',signNote:'Tissue equivalent dose; not whole-body effective dose or risk.'})
});
