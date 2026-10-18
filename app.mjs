import {dimensions,toSI,chooseComparisons,formatNumber,comparisonText,comparisonName,coverageFor,AVOGADRO,escapeXML} from './engine.mjs';
import {emojiArt} from './assets/emoji-art.mjs';
import {signStyles, buildSign} from './signs.mjs';
const $=id=>document.getElementById(id);
let choices=[],selected=0,currentSI=100,currentDimension='length',currentMeasurement='100 m';
let svgText='';
const escape=escapeXML;
for(const [id,d] of Object.entries(dimensions)) $('dimension').add(new Option(d.label,id));
function setUnits(){const d=dimensions[$('dimension').value];$('unit').replaceChildren(...d.units.map(([u])=>new Option(u,u)));$('unit').value=d.unit;$('amount').value=d.value;$('sign-heading').value=d.heading;$('sign-message').value='';$('dimension-hint').textContent=d.hint||'Each batch includes a nearby comparison when the reference library covers your measurement.';}
for(const [id,s] of Object.entries(signStyles)) $('sign-style').add(new Option(s.label,id));
function renderSign(){
  const d=dimensions[currentDimension],r=choices[selected];if(!r)return;
  const style=$('sign-style').value;
  const title=$('sign-heading').value.trim()||d.heading;
  const message=$('sign-message').value.trim()||d.verb;
  svgText=buildSign({reference:r,dimension:d,measurement:currentMeasurement,title,message,style});
  $('sign-preview').innerHTML=svgText;
  $('sign-preview').setAttribute('aria-label',`${title}. ${message} ${comparisonText(r)} ${d.tail}. Approximately ${currentMeasurement}.`);
  $('style-description').textContent=signStyles[style].description;
  $('sign-stage').dataset.style=style;
  $('stage-caption').textContent=signStyles[style].stage;
}
function renderChoices(){
  $('comparisons').replaceChildren(...choices.map((r,i)=>{
    const button=document.createElement('button');button.type='button';button.className='comparison';button.setAttribute('aria-pressed',String(i===selected));
    button.setAttribute('aria-label',`${comparisonText(r)}. Use this comparison.`);
    button.innerHTML=`<span class="comparison-emoji" aria-hidden="true"><img src="${emojiArt[r.emoji]}" width="36" height="36" alt=""></span><span class="comparison-copy"><span class="comparison-number">${escape(formatNumber(r.count))}${r.ratio?' ×':''}</span><span class="comparison-name">${escape(r.ratio?(r.displayName||r.name):(Math.abs(r.count-1)<1e-12?r.name:r.plural))}${r.close?'<span class="scale-match">NEAR YOUR SCALE</span>':''}</span></span><span class="comparison-radio" aria-hidden="true"></span>`;
    button.addEventListener('click',()=>{selected=i;for(const [j,b] of [...$('comparisons').children].entries())b.setAttribute('aria-pressed',String(i===j));renderReference();renderSign();});return button;
  }));renderReference();renderSign();
  $('result-status').textContent=`${currentMeasurement}. Three comparisons: ${choices.map(comparisonText).join('; ')}. First selected.`;
}
function renderReference(){
 const r=choices[selected],d=dimensions[currentDimension];
 const entities=currentDimension==='substance'?`${formatNumber(currentSI*AVOGADRO)} entities. One mole is exactly 6.02214076 × 10²³ specified entities. `:'';
 $('reference').innerHTML=`<strong>The fine print:</strong> ${escape(entities)}${escape(r.displayName||r.name)} ≈ ${escape(formatNumber(r.value))} ${d.base}. ${escape(r.note)}${r.source?` <a href="${escape(r.source)}" target="_blank" rel="noopener noreferrer">Reference ↗</a>`:''}`;
}
function convert(shuffle=false){
  try{const dim=$('dimension').value,si=toSI($('amount').value,dim,$('unit').value);const same=dim===currentDimension&&si===currentSI;const next=chooseComparisons(si,dim,Math.random,shuffle&&same?choices.map(r=>r.name):[]);
    currentSI=si;currentDimension=dim;currentMeasurement=`${Number($('amount').value).toLocaleString('en-US',{maximumSignificantDigits:15})} ${$('unit').value}`;choices=next;selected=0;$('input-error').hidden=true;$('amount').removeAttribute('aria-invalid');renderChoices();
  }catch(e){$('input-error').textContent=e.message;$('input-error').hidden=false;$('amount').setAttribute('aria-invalid','true');$('amount').setAttribute('aria-describedby','input-error');$('amount').focus();}
}
function download(blob,filename){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}
$('dimension').addEventListener('change',()=>{setUnits();convert();});
$('measurement-form').addEventListener('submit',e=>{e.preventDefault();convert();});
$('shuffle').addEventListener('click',()=>convert(true));
for(const id of ['sign-heading','sign-message','sign-style'])$(id).addEventListener('input',renderSign);
$('download-svg').addEventListener('click',()=>{download(new Blob([svgText],{type:'image/svg+xml'}),'anythingbutmetric-sign.svg');$('download-status').textContent='SVG downloaded. It stays sharp at any print size.';});
$('download-png').addEventListener('click',async()=>{
  const button=$('download-png');button.disabled=true;
  const url=URL.createObjectURL(new Blob([svgText],{type:'image/svg+xml'}));
  try{const image=new Image();image.src=url;await image.decode();const canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw new Error('No image');download(blob,'anythingbutmetric-sign.png');$('download-status').textContent='PNG downloaded. Your very unofficial sign is ready.';}
  catch{$('download-status').textContent='PNG export is unavailable in this browser. Please use SVG or Print.';}finally{URL.revokeObjectURL(url);button.disabled=false;}
});
$('surprise-style').addEventListener('click',()=>{const others=Object.keys(signStyles).filter(id=>id!==$('sign-style').value);$('sign-style').value=others[Math.floor(Math.random()*others.length)];renderSign();});
$('print').addEventListener('click',()=>window.print());
$('reference-library').innerHTML=Object.values(dimensions).map(d=>`<section class="library-dimension"><h3>${d.label}</h3><p class="library-coverage">${d.refs.length} references. Coverage within 10× from ${escape(formatNumber(coverageFor(Object.keys(dimensions).find(id=>dimensions[id]===d)).min))} ${d.base} to ${escape(formatNumber(coverageFor(Object.keys(dimensions).find(id=>dimensions[id]===d)).max))} ${d.base}, including the gaps between prefixes.</p>${d.refs.map(r=>`<p class="library-item"><strong>${escape(r.displayName||r.name)}:</strong> ${escape(formatNumber(r.value))} ${d.base}. ${escape(r.note)}${r.source?` <a href="${escape(r.source)}" target="_blank" rel="noopener noreferrer">Reference ↗</a>`:''}</p>`).join('')}</section>`).join('');
setUnits();
// Start with the example that inspired the site; subsequent conversions are random.
choices=dimensions.length.refs.slice(0,3).map(r=>({...r,count:100/r.value,close:100/r.value>=0.1&&100/r.value<=10}));renderChoices();
