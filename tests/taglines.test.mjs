import test from 'node:test';
import assert from 'node:assert/strict';
import {dimensions,toSI,comparisonText} from '../engine.mjs';
import {taglinePairs,taglineExamples,chooseTagline} from '../taglines.mjs';
import {baseUnitCoverage,namedUnitCoverage,baseDerivedCoverage,otherDerivedCoverage,additionalQuantityCoverage} from '../unit-coverage.mjs';

test('every measurement category has two curated taglines, with a separate Celsius pair',()=>{
 assert.deepEqual(Object.keys(taglinePairs).sort(),Object.keys(dimensions).sort());
 for(const [id,pair]of Object.entries(taglinePairs))assert.equal(pair.length,2,id);
 assert.equal(taglineExamples.length,Object.keys(dimensions).length*2+2);
 for(const [,unit,id]of [...baseUnitCoverage,...namedUnitCoverage,...baseDerivedCoverage,...otherDerivedCoverage,...additionalQuantityCoverage]){
  const examples=taglineExamples.filter(e=>e.dimension===id&&(id!=='temperature'||(unit==='°C'?e.unit==='°C':e.unit!=='°C')));
  assert.equal(examples.length,2,`${id} / ${unit}`);
 }
});

test('all taglines start with even SI amounts and calculate the matching relatable reference',()=>{
 for(const e of taglineExamples){
  assert.ok(Number.isInteger(e.amount)&&e.amount>0&&e.amount%2===0,e.text);
  assert.equal(e.si,toSI(e.amount,e.dimension,e.unit));
  assert.ok(dimensions[e.dimension].refs.includes(e.reference));
  const count=e.si/e.reference.value;
  assert.ok(Number.isFinite(count)&&count>0,e.text);
  assert.equal(e.comparison,comparisonText({...e.reference,count}));
  assert.equal(e.text,`Why say ${e.measurement} when you could say ${e.comparison}? Exactly.`);
  assert.doesNotMatch(e.text,/undefined|NaN|Infinity/);
 }
});

test('original bus example, quarter example, and Celsius offsets remain correct',()=>{
 assert.equal(taglineExamples[0].text,'Why say 100 m when you could say 8.33 school buses? Exactly.');
 assert.equal(taglineExamples[1].text,'Why say 50 cm when you could say 20.6 U.S. quarters? Exactly.');
 const celsius=taglineExamples.filter(e=>e.unit==='°C');
 assert.deepEqual(celsius.map(e=>e.si),[293.15,373.15]);
 assert.notEqual(celsius[0].comparison,comparisonText({...celsius[0].reference,count:20/celsius[0].reference.value}));
});

test('random selection can reach every example, including both ends of the pool',()=>{
 assert.equal(chooseTagline(()=>0),taglineExamples[0]);
 assert.equal(chooseTagline(()=>1-Number.EPSILON),taglineExamples.at(-1));
 for(let i=0;i<taglineExamples.length;i++)assert.equal(chooseTagline(()=>(i+.5)/taglineExamples.length),taglineExamples[i]);
});
