import test from 'node:test';
import assert from 'node:assert/strict';
import {dimensions,toSI,chooseComparisons,formatNumber,comparisonText,coverageFor,escapeXML,G,PSI,AVOGADRO} from '../engine.mjs';
import {emojiArt} from '../assets/emoji-art.mjs';
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
test('new SI quantities use the correct prefixes and absolute-temperature domain',()=>{
  assert.equal(toSI(250,'current','mA'),0.25);
  assert.equal(toSI(1,'current','MA'),1e6);
  assert.equal(toSI(300,'temperature','K'),300);
  assert.equal(toSI(0,'temperature','K'),0);
  assert.throws(()=>toSI(-1,'temperature','K'));
  assert.throws(()=>toSI(32,'temperature','°F'));
  assert.equal(toSI(2,'substance','mmol'),0.002);
  assert.equal(toSI(3,'luminous','kcd'),3000);
  assert.equal(toSI(4,'energy','MJ'),4e6);
  assert.equal(AVOGADRO,6.02214076e23);
  assert.equal(formatNumber(0),'0');
  assert.equal(chooseComparisons(0,'temperature').length,3);
});
test('every scale and every gap between scales has a reference within a factor of ten',()=>{
  for(const id of Object.keys(dimensions)) {
    const coverage=coverageFor(id);
    assert.ok(coverage.covered,`${id}: worst reference ratio ${coverage.withinFactor}`);
    for(const [,scale] of dimensions[id].units) {
      assert.ok(dimensions[id].refs.some(r=>scale/r.value>=0.1-1e-12&&scale/r.value<=10+1e-12),`${id}: missing scale ${scale}`);
    }
  }
});
test('randomness and repeated shuffling cannot remove the scale match',()=>{
  let seed=42;
  const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);
  for(const id of Object.keys(dimensions)){
    const {min,max}=coverageFor(id);let prior=[];
    for(let exponent=Math.log10(min);exponent<=Math.log10(max)+1e-9;exponent+=0.25){
      const si=10**exponent;
      for(let repeat=0;repeat<5;repeat++){
        const results=chooseComparisons(si,id,random,prior);
        assert.equal(new Set(results.map(r=>r.name)).size,3);
        assert.ok(results.some(r=>r.close),`${id} ${si}: no scale match`);
        prior=results.map(r=>r.name);
      }
    }
  }
});
test('moles count specified entities and luminous models use solid angle',()=>{
  const packet=dimensions.substance.refs.find(r=>r.name==='diner sugar packet');
  assert.ok(Math.abs(packet.value-4/342.2965)<1e-15);
  const bulb=dimensions.luminous.refs.find(r=>r.name==='a bedside bulb’s intensity');
  assert.ok(Math.abs(bulb.value-800/(4*Math.PI))<1e-12);
  const flashlight=dimensions.luminous.refs.find(r=>r.name==='a focused flashlight’s intensity');
  const expectedIntensity=1000/(2*Math.PI*(1-Math.cos(Math.PI/12)));
  assert.ok(Math.abs(flashlight.value-expectedIntensity)<1e-6);
  assert.match(comparisonText({...bulb,count:2}),/^2 × /);
  assert.match(comparisonText({...dimensions.temperature.refs[0],count:2}),/^2 × /);
});
test('every reference has embeddable emoji artwork and a finite positive value',()=>{
  for(const [id,d]of Object.entries(dimensions)){
    assert.equal(new Set(d.refs.map(r=>r.name)).size,d.refs.length,`${id}: names must be unique`);
    for(const r of d.refs){
      assert.ok(r.value>0&&Number.isFinite(r.value),r.name);
      assert.ok(r.note.length>15,r.name);
      assert.match(emojiArt[r.emoji],/^data:image\/svg\+xml;base64,/,`${id} ${r.name}`);
      const svg=Buffer.from(emojiArt[r.emoji].split(',')[1],'base64').toString();
      assert.match(svg,/<svg/);
      assert.doesNotMatch(svg,/<script|<foreignObject|https?:\/\/(?!www.w3.org)/);
    }
  }
});
