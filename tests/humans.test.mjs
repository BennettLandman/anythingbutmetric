import test from 'node:test';
import assert from 'node:assert/strict';
import {human,humanReferences} from '../humans.mjs';
import {dimensions,chooseComparisons,G} from '../engine.mjs';
import {buildSign,signStyles} from '../signs.mjs';
const value=id=>humanReferences[id][0].value;
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<=Math.abs(expected)*1e-12,`${actual} ≠ ${expected}`);

test('human size, motion, and chemistry share consistent explicit assumptions',()=>{
 assert.equal(value('length'),1.7);
 assert.equal(value('mass'),70);
 near(value('volume'),human.mass/value('density'));
 near(value('force'),70*G);
 near(value('pressure'),value('force')/.04);
 near(value('surfaceDensity'),70/.04);
 near(value('specificVolume'),1/value('density'));
 near(value('substance')*.01801528,42);
 near(value('energy'),value('force')*3);
 near(value('frequency'),1/value('time'));
 near(value('specificEnergy'),1.4**2/2);
 near(value('torque'),20*.3);
 near(value('angularAcceleration'),value('angularVelocity')/2);
});

test('human electrical, thermal, and activity models preserve their distinct quantities',()=>{
 near(value('current'),2000/1500);
 near(value('charge'),value('capacitance')*value('voltage'));
 near(value('conductance'),1/value('resistance'));
 near(value('heatCapacity'),70*value('specificHeat'));
 near(value('entropy'),value('heatCapacity')*Math.log(311.15/310.15));
 near(value('specificEntropy'),value('entropy')/70);
 near(value('irradiance'),5.670374419e-8*300**4);
 near(value('radiance')*Math.PI,value('irradiance'));
 near(value('radiantIntensity'),value('radiance')*.5);
 near(value('activity'),140*31);
 assert.match(humanReferences.activity[0].note,/not dose/);
 assert.match(humanReferences.resistance[0].note,/not a universal human resistance/);
 assert.match(humanReferences.current[0].note,/not continuous body current/);
 assert.match(humanReferences.radiance[0].note,/not visible luminance/);
 assert.ok(!humanReferences.luminous&&!humanReferences.lightOutput&&!humanReferences.inductance);
});

test('all human references enter the random pool and render in every sign style',()=>{
 assert.equal(Object.keys(humanReferences).length,37);
 let seed=17;
 const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);
 for(const [id,refs]of Object.entries(humanReferences))for(const r of refs){
  const dimension=dimensions[id];assert.ok(dimension.refs.includes(r));
  let picked=false;
  for(let i=0;i<100&&!picked;i++)picked=chooseComparisons(r.value,id,random).some(c=>c.name===r.name);
  assert.ok(picked,`${id}: ${r.name} must be selectable by the random converter`);
  for(const style of Object.keys(signStyles)){
   const svg=buildSign({reference:{...r,count:2},dimension,measurement:`${r.value*2} ${dimension.base}`,title:dimension.heading,message:dimension.verb,style});
   assert.match(svg,/data:image\/svg\+xml;base64,/);
   assert.doesNotMatch(svg,/undefined|NaN|Infinity/);
  }
 }
});
