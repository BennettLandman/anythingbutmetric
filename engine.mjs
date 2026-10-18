// All reference values use coherent SI units for their physical quantity.
import {G, PSI} from './constants.mjs';
import {additions, extraDimensions} from './library.mjs';
export {G, PSI, AVOGADRO} from './constants.mjs';
const mint = 'https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications';
const nfl = 'https://operations.nfl.com/media/tvglh0mx/2023-rulebook_final.pdf';
const nist = 'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9';
const ref = (name, plural, value, emoji, note, source = '') => ({name, plural, value, emoji, note, source});
export const dimensions = {
  length: {label:'Length', base:'m', value:100, unit:'m', heading:'BEAR COUNTRY', lead:'KEEP YOUR DISTANCE', verb:'Stay about', tail:'away', units:[['nm',1e-9],['µm',1e-6],['mm',1e-3],['cm',1e-2],['m',1],['km',1e3]], refs:[
    ref('school bus','school buses',12,'🚌','Illustrative full-size bus: 12 m long. Actual buses vary.'),
    ref('football field','football fields',91.44,'🏈','100 yards, goal line to goal line; excludes end zones.',nfl),
    ref('dollar bill','dollar bills',0.155956,'💵','6.14 inches long, placed end to end.','https://www.uscurrency.gov/denominations/1'),
    ref('U.S. quarter','U.S. quarters',0.02426,'🪙','Modern U.S. quarter coins, placed edge to edge: 24.26 mm diameter per coin.',mint),
    ref('stacked U.S. quarter','stacked U.S. quarters',0.00175,'🪙','Modern U.S. quarter coins, stacked flat: 1.75 mm thickness per coin.',mint),
    ref('banana','bananas',0.18,'🍌','Illustrative banana: 18 cm long, placed end to end.'),
    ref('refrigerator','refrigerators',1.75,'🧊','Illustrative refrigerator: 1.75 m tall; stacked vertically.'),
    ref('giraffe','giraffes',5,'🦒','Illustrative giraffe: 5 m tall; stacked vertically.'),
    ref('grain of rice','grains of rice',0.007,'🍚','Illustrative grain: 7 mm long; placed end to end.'),
    ref('human hair width','human hair widths',70e-6,'🧑','Illustrative hair diameter: 70 µm. Hair varies.'),
    ref('red blood cell width','red blood cell widths',8e-6,'🔴','Illustrative cell diameter: 8 µm.'),
    ref('DNA helix width','DNA helix widths',2e-9,'🧬','Illustrative DNA helix diameter: 2 nm.'),
    ref('atom width','atom widths',1e-10,'⚛','Illustrative atomic scale: 0.1 nm; atoms have no fixed hard boundary.'),
    ref('trip to the Moon','trips to the Moon',384400000,'🌙','Average Earth–Moon distance: 384,400 km.','https://spaceplace.nasa.gov/moon-distance/en/')
  ]},
  mass: {label:'Mass',base:'kg',value:10,unit:'kg',heading:'HEAVY STUFF',lead:'LIFT WITH YOUR LEGS',verb:'About the mass of',tail:'',units:[['µg',1e-9],['mg',1e-6],['g',0.001],['kg',1],['Mg',1e3]],refs:[
    ref('cheeseburger','cheeseburgers',0.2,'🍔','Illustrative cheeseburger: 200 g.'),
    ref('house cat','house cats',4.5,'🐈','Illustrative adult cat: 4.5 kg.'),
    ref('bowling ball','bowling balls',7.25747792,'🎳','A 16-pound bowling ball; 1 lb = 0.45359237 kg.',nist),
    ref('U.S. quarter','U.S. quarters',0.00567,'🪙','A modern U.S. quarter coin has a mass of 5.670 g.',mint),
    ref('grain of rice','grains of rice',25e-6,'🍚','Illustrative dry grain: 25 mg.'),
    ref('paper clip','paper clips',0.001,'📎','Illustrative paper clip: 1 g.'),
    ref('elephant','elephants',5000,'🐘','Illustrative adult elephant: 5,000 kg.'),
    ref('pickup truck','pickup trucks',2500,'🛻','Illustrative unladen pickup truck: 2,500 kg.')
  ]},
  area: {label:'Area',base:'m²',value:100,unit:'m²',heading:'ROOM TO ROAM',lead:'A WHOLE LOT OF SPACE',verb:'An area of about',tail:'',units:[['mm²',1e-6],['cm²',1e-4],['m²',1],['km²',1e6]],refs:[
    ref('football field','football fields',5351.215104,'🏈','360 × 160 feet, including both end zones.',nfl),
    ref('parking space','parking spaces',12.5,'🚗','Illustrative parking space: 2.5 × 5 m.'),
    ref('pizza','pizzas',Math.PI*0.1524**2,'🍕','A circular 12-inch-diameter pizza; no overlap.'),
    ref('sticky note','sticky notes',0.0762**2,'📝','A 3 × 3 inch sticky note.'),
    ref('dollar bill','dollar bills',0.155956*0.066294,'💵','6.14 × 2.61 inches; laid flat without overlap.','https://www.uscurrency.gov/denominations/1'),
    ref('king-size bed','king-size beds',1.9304*2.032,'🛏','Illustrative U.S. king mattress: 76 × 80 inches.'),
    ref('postage stamp','postage stamps',0.000625,'✉️','Illustrative square stamp: 2.5 × 2.5 cm.')
  ]},
  volume: {label:'Volume',base:'m³',value:1,unit:'m³',heading:'THAT’S A LOT',lead:'FILL IT UP',verb:'Enough to fill about',tail:'',units:[['mm³',1e-9],['cm³',1e-6],['mL',1e-6],['L',1e-3],['m³',1]],refs:[
    ref('soda can','soda cans',0.00035488235475,'🥤','12 U.S. fluid ounces of liquid capacity.',nist),
    ref('bathtub','bathtubs',0.15,'🛁','Illustrative filled bathtub: 150 L.'),
    ref('teaspoon','teaspoons',4.92892159375e-6,'🥄','One U.S. customary teaspoon.',nist),
    ref('backyard pool','backyard pools',50,'🏊','Illustrative pool: 10 × 5 × 1 m of water.'),
    ref('milk jug','milk jugs',0.003785411784,'🥛','One U.S. liquid gallon.',nist),
    ref('raindrop','raindrops',Math.PI/6*(0.002**3),'💧','Illustrative spherical drop: 2 mm diameter.'),
    ref('shipping container','shipping containers',33,'📦','Illustrative container interior: 33 m³.')
  ]},
  time: {label:'Time',base:'s',value:60,unit:'s',heading:'WORTH THE WAIT',lead:'PLEASE STAND BY',verb:'Wait about',tail:'',units:[['ns',1e-9],['µs',1e-6],['ms',1e-3],['s',1],['ks',1e3],['Ms',1e6]],refs:[
    ref('microwave minute','microwave minutes',60,'🍿','A minute is 60 seconds; popcorn completion not guaranteed.'),
    ref('blink','blinks',0.15,'👁','Illustrative blink duration: 0.15 s.'),
    ref('pop song','pop songs',210,'🎵','Illustrative song duration: 3 minutes 30 seconds.'),
    ref('sitcom episode','sitcom episodes',1320,'📺','Illustrative episode: 22 minutes, without ads.'),
    ref('coffee break','coffee breaks',900,'☕','Illustrative coffee break: 15 minutes.'),
    ref('heartbeat','heartbeats',0.8,'❤️','Illustrative resting heart rate: 75 beats/minute.'),
    ref('weekend','weekends',172800,'🎉','A 48-hour weekend.'),
    ref('camera frame','camera frames',1/60,'🎬','One frame at 60 frames per second.')
  ]},
  force: {label:'Force',base:'N',value:100,unit:'N',heading:'QUITE THE FORCE',lead:'GIVE IT SOME MUSCLE',verb:'About the weight of',tail:'',units:[['µN',1e-6],['mN',1e-3],['N',1],['kN',1e3],['MN',1e6],['GN',1e9]],refs:[
    ...[['cheeseburger','cheeseburgers',0.2,'🍔'],['house cat','house cats',4.5,'🐈'],['elephant','elephants',5000,'🐘'],['paper clip','paper clips',0.001,'📎'],['pickup truck','pickup trucks',2500,'🛻'],['grain of rice','grains of rice',25e-6,'🍚']].map(([n,p,m,e])=>ref(n,p,m*G,e,`Illustrative mass: ${m} kg. Weight = mass × standard gravity (9.80665 m/s²).`,nist)),
    ref('16-pound bowling ball','16-pound bowling balls',7.25747792*G,'🎳','Weight of a 16 lb mass under standard gravity.',nist)
  ]},
  pressure: {label:'Pressure',base:'Pa',value:100,unit:'kPa',heading:'UNDER PRESSURE',lead:'FEELING THE SQUEEZE',verb:'About',tail:'',units:[['mPa',1e-3],['Pa',1],['kPa',1e3],['MPa',1e6],['GPa',1e9]],refs:[
    ref('car tire’s inflation pressure','car tires’ inflation pressure',32*PSI,'🚗','Illustrative tire gauge pressure: 32 psi. A ratio of pressure magnitudes, not connected tires.'),
    ref('bike tire’s inflation pressure','bike tires’ inflation pressure',80*PSI,'🚲','Illustrative tire gauge pressure: 80 psi. A ratio of pressure magnitudes.'),
    ref('basketball’s inflation pressure','basketballs’ inflation pressure',8*PSI,'🏀','Illustrative basketball gauge pressure: 8 psi.'),
    ref('garden hose’s water pressure','garden hoses’ water pressure',40*PSI,'🌱','Illustrative hose gauge pressure: 40 psi.'),
    ref('espresso machine’s brewing pressure','espresso machines’ brewing pressure',900000,'☕','Illustrative brewing gauge pressure: 9 bar.'),
    ref('foot of water pressure','feet of water pressure',1000*G*0.3048,'🌊','Hydrostatic pressure from water depth: ρgh; density assumed 1,000 kg/m³.'),
    ref('atmosphere','atmospheres',101325,'🌎','One standard atmosphere (absolute pressure) = 101,325 Pa.',nist),
    ref('cat-on-a-postcard pressure','cats-on-a-postcard pressure',4.5*G/0.01,'🐈','A hypothetical 4.5 kg cat’s weight spread over 100 cm², at standard gravity.')
  ]}
};
for (const [id, refs] of Object.entries(additions)) dimensions[id].refs.push(...refs);
Object.assign(dimensions, extraDimensions);
// Ratios describe reference magnitudes, rather than adding pressures or temperatures.
for (const r of dimensions.pressure.refs) r.ratio = true;
dimensions.force.verb = 'About';
for (const r of dimensions.force.refs) {
  if(!r.ratio) r.displayName = r.name.endsWith('weight') ? r.name : `the weight of a ${r.name}`;
  r.ratio = true;
}
export function toSI(value, dimension, unit) {
  const spec=dimensions[dimension];
  const scale=spec?.units.find(([u])=>u===unit)?.[1];
  const n=Number(value);
  if(String(value).trim()==='' || !Number.isFinite(n) || (n<0 || (n===0 && !spec?.allowZero)) || !scale) throw new Error(spec?.allowZero ? 'Enter a finite temperature of zero kelvin or above.' : 'Enter a positive, finite measurement.');
  const result=n*scale;
  if(!Number.isFinite(result)||(result===0&&n!==0)) throw new Error('That measurement is outside the supported numeric range.');
  return result;
}
export function formatNumber(n) {
  if(n===0) return '0';
  if(n>=1e6 || n<0.001) return n.toExponential(2).replace('e+',' × 10^').replace('e-',' × 10^-');
  return new Intl.NumberFormat('en-US',{maximumSignificantDigits:3}).format(n);
}
export function chooseComparisons(si,dimension,random=Math.random,exclude=[]) {
  if(!Number.isFinite(si)||si<0||(si===0&&!dimensions[dimension]?.allowZero)) throw new Error('Unsupported measurement.');
  const all=dimensions[dimension].refs.filter(r=>Number.isFinite(si/r.value)&&(si===0||si/r.value>0));
  if(all.length<3) throw new Error('Try a less extreme measurement so three comparisons can be represented.');
  const ranked=all.map(r=>{
    const count=si/r.value;
    const distance=si===0?0:Math.abs(Math.log10(count));
    return {...r,count,close:si>0&&distance<=1+1e-12,distance,score:distance*0.35-Math.log(Math.max(random(),1e-12))+(exclude.includes(r.name)?2:0)};
  });
  const nearby=ranked.filter(r=>r.close);
  const candidates=nearby.length?nearby:ranked.filter(r=>r.distance===Math.min(...ranked.map(r=>r.distance)));
  const anchor=candidates.sort((a,b)=>a.score-b.score)[0];
  return [anchor,...ranked.filter(r=>r.name!==anchor.name).sort((a,b)=>a.score-b.score).slice(0,2)];
}
export function comparisonName(r) {return r.ratio?`× ${r.displayName||r.name}`:(Math.abs(r.count-1)<1e-12?r.name:r.plural);}
export function comparisonText(r) {return `${formatNumber(r.count)} ${comparisonName(r)}`;}
export function coverageFor(dimension) {
  const d=dimensions[dimension],scales=d.units.map(([,v])=>v),min=Math.min(...scales),max=Math.max(...scales);
  const refs=d.refs.map(r=>r.value).sort((a,b)=>a-b);
  const probes=[...scales,min,max];
  for(let i=1;i<refs.length;i++) {
    const midpoint=Math.sqrt(refs[i-1])*Math.sqrt(refs[i]);
    if(midpoint>=min&&midpoint<=max) probes.push(midpoint);
  }
  const worst=Math.max(...probes.map(value=>Math.min(...refs.map(v=>Math.abs(Math.log10(value/v))))));
  return {min,max,withinFactor:10**worst,covered:worst<=1+1e-12};
}
export function escapeXML(s) {return String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));}
