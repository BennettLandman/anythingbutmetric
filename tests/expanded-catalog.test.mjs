import test from 'node:test';
import assert from 'node:assert/strict';
import {dimensions,toSI,chooseComparisons,coverageFor} from '../engine.mjs';
import {baseUnitCoverage,namedUnitCoverage,baseDerivedCoverage,otherDerivedCoverage,additionalQuantityCoverage} from '../unit-coverage.mjs';
import {buildSign,signStyles} from '../signs.mjs';
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<=Math.max(1e-15,Math.abs(expected)*1e-12),`${actual} ≠ ${expected}`);

test('all seven base units and all 22 specially named SI units are represented',()=>{
  assert.equal(baseUnitCoverage.length,7);
  const expected=['rad','sr','Hz','N','Pa','J','W','C','V','Ω','S','F','H','T','Wb','°C','lm','lx','Bq','Gy','Sv','kat'];
  assert.deepEqual(namedUnitCoverage.map(row=>row[1]).sort(),expected.sort());
  for(const [name,unit,id]of [...baseUnitCoverage,...namedUnitCoverage]){
    const d=dimensions[id];assert.ok(d,name);assert.ok(d.base===unit||d.units.some(([u])=>u===unit),`${name}: ${unit}`);
  }
});
test('every supplied compound quantity and additional distinction has its own pool',()=>{
  assert.equal(baseDerivedCoverage.length,14);
  assert.equal(otherDerivedCoverage.length,26);
  const rows=[...baseUnitCoverage,...namedUnitCoverage,...baseDerivedCoverage,...otherDerivedCoverage,...additionalQuantityCoverage];
  for(const [name,unit,id]of rows){assert.ok(dimensions[id],name);assert.ok(dimensions[id].base===unit||dimensions[id].units.some(([u])=>u===unit),name);}
  assert.deepEqual([...new Set(rows.map(row=>row[2]))].sort(),Object.keys(dimensions).sort());
  for(const [a,b]of [['torque','energy'],['entropy','heatCapacity'],['specificEntropy','specificHeat'],['density','massConcentration'],['dose','equivalentDose'],['absorbedDose','kerma'],['luminous','lightOutput'],['activity','frequency'],['surfaceChargeDensity','electricDisplacement']])assert.notEqual(dimensions[a].refs,dimensions[b].refs);
});
test('Celsius uses an offset, supports negative Celsius, and respects absolute zero',()=>{
  near(toSI(0,'temperature','°C'),273.15);
  near(toSI(100,'temperature','°C'),373.15);
  near(toSI(-40,'temperature','°C'),233.15);
  assert.equal(toSI(-273.15,'temperature','°C'),0);
  assert.throws(()=>toSI(-273.16,'temperature','°C'));
  assert.throws(()=>toSI(-1,'temperature','K'));
  assert.ok(chooseComparisons(toSI(0,'temperature','°C'),'temperature').every(r=>r.count>0));
});
test('compound-unit prefixes include denominator inversion and mass/volume factors',()=>{
  near(toSI(1,'speed','mm/s'),.001);
  near(toSI(1,'wavenumber','mm⁻¹'),1000);
  near(toSI(1,'wavenumber','nm⁻¹'),1e9);
  near(toSI(1,'vergence','cm⁻¹'),100);
  near(toSI(1,'density','g/cm³'),1000);
  near(toSI(1,'specificVolume','L/kg'),.001);
  near(toSI(1,'massConcentration','mg/L'),.001);
  near(toSI(1,'massConcentration','g/L'),1);
  near(toSI(1,'permittivity','pF/m'),1e-12);
  near(toSI(1,'frequency','MHz'),1e6);
  near(toSI(1,'conductance','µS'),1e-6);
  near(toSI(1,'doseRate','mGy/s'),.001);
});
test('same base dimensions do not permit silently substituting different named quantities',()=>{
  for(const [id,unit]of [['frequency','Bq'],['activity','Hz'],['torque','J'],['energy','N·m'],['absorbedDose','Sv'],['dose','Gy'],['specificEnergy','Gy'],['solidAngle','rad'],['angle','sr'],['luminous','lm'],['sunshine','Sv'],['dose','J/m²']])assert.throws(()=>toSI(1,id,unit),`${id} must reject ${unit}`);
});
test('banana, X-ray, CT, and sunshine models use distinct quantities and documented values',()=>{
  const dose=dimensions.dose.refs;
  const banana=dose.find(r=>r.name==='a banana-equivalent dose');
  near(banana.value,1e-7);
  near(dose.find(r=>r.name==='a chest X-ray').value,.0001);
  near(dose.find(r=>r.name==='an abdomen-and-pelvis CT').value,.0077);
  near(.0001/banana.value,1000);
  near(.0077/banana.value,77000);
  near(dimensions.activity.refs.find(r=>r.name==='a banana’s activity').value,15.5);
  near(dimensions.sunshine.refs.find(r=>r.name==='one hour of sunshine at UVI 6').value,6*.025*3600);
  assert.match(banana.note,/regulates potassium/);
  assert.match(dimensions.sunshine.hint,/cannot be converted/);
});
test('representative physical models retain correct dimensions and geometry',()=>{
  near(dimensions.currentDensity.refs.find(r=>r.name==='an AA-cell contact').value,1/.0001);
  near(dimensions.magnetizingField.refs.find(r=>r.name==='a small long coil').value,100*.001/.1);
  near(dimensions.energyDensity.refs.find(r=>r.name==='a lightly sweetened drink’s food energy').value,5000/.001);
  near(dimensions.concentration.refs.find(r=>r.name==='a lab salt solution').value,.001/.001);
  near(dimensions.enzymeConcentration.refs.find(r=>r.name==='an enzyme broth assay').value,1e-6/.001);
  near(dimensions.angularVelocity.refs.find(r=>r.name==='a clock’s minute hand').value,2*Math.PI/3600);
  near(dimensions.specificVolume.refs.find(r=>r.name==='water’s volume per mass').value,1/1000);
});
test('every offered scale has a nearby model after unit conversion, including Celsius',()=>{
  for(const [id,d]of Object.entries(dimensions)){
    assert.ok(d.group,id);
    assert.ok(coverageFor(id).covered,id);
    for(const [unit]of d.units){
      const si=toSI(1,id,unit);
      assert.ok(chooseComparisons(si,id,()=>.5).some(r=>r.close),`${id} ${unit}`);
    }
  }
});
test('all sign styles retain the radiation/UV distinctions and embedded emoji',()=>{
  for(const id of ['activity','dose','absorbedDose','kerma','equivalentDose','sunshine','exposure','doseRate','catalysis','enzymeConcentration']){
    const d=dimensions[id],r={...d.refs[0],count:3};
    for(const style of Object.keys(signStyles)){
      const svg=buildSign({reference:r,dimension:d,measurement:`${3*r.value} ${d.base}`,title:d.heading,message:d.verb,style});
      assert.ok(svg.includes(d.signNote),`${id} ${style}: missing context`);
      assert.match(svg,/href="data:image\/svg\+xml;base64,/);
      assert.doesNotMatch(svg,/undefined|NaN/);
    }
  }
});
