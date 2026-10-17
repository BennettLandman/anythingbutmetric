import test from 'node:test';
import assert from 'node:assert/strict';
import {dimensions,toSI,chooseComparisons,formatNumber,escapeXML,G,PSI} from '../engine.mjs';
test('SI prefixes and squared/cubed units convert correctly',()=>{
  assert.equal(toSI(100,'length','nm'),1.0000000000000001e-7);
  assert.equal(toSI(2,'length','km'),2000);
  assert.ok(Math.abs(toSI(5,'mass','mg') - 5e-6) < 1e-20);
  assert.equal(toSI(2,'area','cm²'),2e-4);
  assert.equal(toSI(2,'volume','mm³'),2e-9);
  assert.equal(toSI(1,'volume','L'),0.001);
  assert.equal(toSI(3,'time','ks'),3000);
  assert.equal(toSI(5,'force','kN'),5000);
  assert.equal(toSI(2,'pressure','MPa'),2e6);
});
test('force uses weight and pressure uses independent reference magnitudes',()=>{
  const burger=dimensions.force.refs.find(r=>r.name==='cheeseburger');
  assert.equal(burger.value,0.2*G);
  const tire=dimensions.pressure.refs[0];
  assert.equal(tire.value,32*PSI);
  assert.equal(toSI(1,'pressure','kPa')/tire.value,1000/(32*PSI));
  assert.equal(dimensions.pressure.refs.find(r=>r.name==='atmosphere').value,101325);
});
test('every dimension and scale can generate three distinct finite comparisons',()=>{
  for(const [id,d] of Object.entries(dimensions))for(const [unit]of d.units){
    const si=toSI(100,id,unit),picked=chooseComparisons(si,id,()=>0.5);
    assert.equal(picked.length,3,`${id} ${unit}`);
    assert.equal(new Set(picked.map(r=>r.name)).size,3);
    for(const r of picked){assert.ok(r.count>0&&Number.isFinite(r.count));assert.ok(Math.abs(r.count*r.value-si)/si<1e-12);}
  }
});
test('invalid, zero, negative and overflowing input never generates a bogus result',()=>{
  for(const n of ['', ' ',0,-1,'abc',Infinity,NaN])assert.throws(()=>toSI(n,'length','m'));
  assert.throws(()=>toSI(1e308,'length','km'));
  assert.throws(()=>toSI(1,'length','kg'));
});
test('a shuffle can draw fresh references while preserving dimensional arithmetic',()=>{
  const first=chooseComparisons(100,'length',()=>0.5);
  const next=chooseComparisons(100,'length',()=>0.5,first.map(r=>r.name));
  assert.ok(next.some(r=>!first.some(f=>f.name===r.name)));
});
test('tiny numbers remain visible and sign text is escaped',()=>{
  assert.notEqual(formatNumber(1e-15),'0');
  assert.equal(escapeXML('<script>&"\''),'&lt;script&gt;&amp;&quot;&apos;');
});
