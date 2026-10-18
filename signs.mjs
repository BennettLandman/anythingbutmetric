import {comparisonName, comparisonText, formatNumber, escapeXML as escape} from './engine.mjs';
import {emojiArt} from './assets/emoji-art.mjs';

export const signStyles = {
  park: {label:'National park', bg:'#214a37', fg:'#f6f0d8', description:'The ranger has a measuring tape. The ranger refuses to use it.', stage:'A very official-looking unofficial sign.'},
  warning: {label:'Caution yellow', bg:'#f7c94d', fg:'#242c28', description:'A little caution. An extremely specific number of bananas.', stage:'Proceed with approximately this much caution.'},
  blueprint: {label:'Blueprint blue', bg:'#225275', fg:'#f5f5eb', description:'For the engineer who measures twice and converts to cheeseburgers.', stage:'Drawn to a deeply unnecessary scale.'},
  diner: {label:'Roadside diner', bg:'#fff3d9', fg:'#843e2d', accent:'#cc4938', description:'Checkerboard trim, cherry red, and a side of questionable units.', stage:'Open all night. Sensible units sold separately.', caption:'NOW SERVING: QUESTIONABLE UNITS'},
  postcard: {label:'Park postcard', bg:'#fff5dd', fg:'#244c42', accent:'#c65939', description:'Sunset mountains and a souvenir from the land of close enough.', stage:'Wish you were approximately here.', caption:'GREETINGS FROM THE LAND OF CLOSE ENOUGH'},
  drama: {label:'Dramatic warning', bg:'#ffcd42', fg:'#242822', accent:'#242822', description:'Hazard stripes. Extra exclamation points. Absolutely no chill.', stage:'Please overreact accordingly.', caption:'THIS IS PROBABLY A BIG DEAL'},
  bureau: {label:'Bureau of guesswork', bg:'#f6f0df', fg:'#344e5a', accent:'#ac4c3d', description:'Stamped, filed, and approved by the Department of Close Enough.', stage:'Your paperwork is approximately in order.', caption:'BUREAU OF CREATIVE MEASUREMENTS'}
};

function lines(text,max){
  const result=[];let line='';
  for(const word of String(text).split(/\s+/).flatMap(w=>w.match(new RegExp('.{1,'+max+'}','gu'))||[])){
    if((line+' '+word).trim().length>max&&line){result.push(line);line=word;}
    else line=(line+' '+word).trim();
  }
  if(line)result.push(line);
  return result;
}
function text(content,y,{size=14,weight=400,color='currentColor',font='Arial, Helvetica, sans-serif',spacing=0,italic=false}={}){
  const wrapped=Array.isArray(content)?content:[content];
  return wrapped.map((line,i)=>`<text x="270" y="${y+i*(size+5)}" text-anchor="middle" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${color}" letter-spacing="${spacing}"${italic?' font-style="italic"':''}>${escape(line)}</text>`).join('');
}
function star(cx,cy,r1,r2,points=12){
  return Array.from({length:points*2},(_,i)=>{const a=i*Math.PI/points-Math.PI/2,r=i%2?r2:r1;return `${cx+Math.cos(a)*r},${cy+Math.sin(a)*r}`;}).join(' ');
}
function frame(style,height){
  const s=signStyles[style];
  const base=`<rect x="2" y="2" width="536" height="${height-4}" rx="18" fill="${s.bg}"/>`;
  if(['park','warning','blueprint'].includes(style)) return `${base}<rect x="12" y="12" width="516" height="${height-24}" rx="11" fill="none" stroke="${s.fg}" stroke-width="2"/><circle cx="25" cy="25" r="3" fill="${s.fg}" opacity=".5"/><circle cx="515" cy="${height-25}" r="3" fill="${s.fg}" opacity=".5"/>`;
  if(style==='diner'){
    const checks=Array.from({length:26},(_,i)=>`<rect x="${10+i*20}" y="${height-35}" width="20" height="12" fill="${i%2?s.fg:s.bg}"/><rect x="${10+i*20}" y="${height-23}" width="20" height="12" fill="${i%2?s.bg:s.fg}"/>`).join('');
    return `${base}<rect x="9" y="9" width="522" height="${height-18}" rx="12" fill="none" stroke="${s.accent}" stroke-width="4"/><rect x="17" y="17" width="506" height="${height-34}" rx="7" fill="none" stroke="#4d918c" stroke-width="1.5"/>${checks}<path d="M82 90h85m-70 10h65m211-10h85m-80 10h65" stroke="#4d918c" stroke-width="3"/><polygon points="${star(67,53,15,5,4)}" fill="${s.accent}"/><polygon points="${star(474,126,13,5,4)}" fill="${s.accent}"/>`;
  }
  if(style==='postcard') return `${base}<rect x="10" y="10" width="520" height="${height-20}" rx="9" fill="none" stroke="${s.fg}" stroke-width="2"/><rect x="18" y="18" width="504" height="120" rx="5" fill="#d9e7ce"/><circle cx="146" cy="62" r="27" fill="#ecac5e"/><path d="M18 138 97 61 159 113 202 71 277 138Z" fill="#749a7b"/><path d="M91 138 183 83 239 123 302 59 399 138Z" fill="#4c7965"/><path d="M289 138 383 80 455 117 522 79V138Z" fill="#a7ba8a"/><g transform="translate(455 59) rotate(12)" stroke="${s.fg}" fill="none" opacity=".65"><circle r="26"/><circle r="22"/><path d="M-19-5h38M-19 7h38"/></g><text x="455" y="62" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="${s.fg}">≈</text>`;
  if(style==='drama'){
    const stripes=Array.from({length:15},(_,i)=>`<path d="M${i*40-30} 0h20l-35 35h-20zM${i*40-30} ${height-35}h20l-35 35h-20z" fill="${s.fg}"/>`).join('');
    return `${base}<defs><clipPath id="sign-edge"><rect x="2" y="2" width="536" height="${height-4}" rx="18"/></clipPath></defs><g clip-path="url(#sign-edge)">${stripes}</g><rect x="12" y="43" width="516" height="${height-86}" rx="3" fill="none" stroke="${s.fg}" stroke-width="2"/><polygon points="${star(270,100,57,48)}" fill="${s.fg}"/><g fill="${s.fg}" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="50"><text x="115" y="116" transform="rotate(-12 115 116)">!</text><text x="408" y="116" transform="rotate(12 408 116)">!</text></g>`;
  }
  return `${base}<rect x="11" y="11" width="518" height="${height-22}" rx="4" fill="none" stroke="${s.fg}" stroke-width="1.5"/><rect x="20" y="20" width="500" height="${height-40}" fill="none" stroke="${s.fg}" stroke-dasharray="2 5" opacity=".3"/><path d="M32 45h476" stroke="${s.fg}" opacity=".35"/><g transform="translate(437 92) rotate(-12)" stroke="${s.accent}" fill="none"><rect x="-47" y="-24" width="94" height="48" rx="2" stroke-width="2"/><rect x="-43" y="-20" width="86" height="40" rx="1"/><g fill="${s.accent}" stroke="none" font-family="Courier New,monospace" text-anchor="middle" font-size="11" font-weight="700"><text y="-3">ROUGHLY</text><text y="12">APPROVED</text></g></g><g stroke="${s.fg}" fill="none" opacity=".6"><rect x="43" y="76" width="9" height="9"/><path d="m44 79 3 3 6-8"/><path d="M62 80h45M43 94h65M43 108h53"/></g>`;
}

export function buildSign({reference:r,dimension:d,measurement,title,message,style='park'}){
  if(!signStyles[style]) style='park';
  const s=signStyles[style],classic=['park','warning','blueprint'].includes(style);
  const titleLines=lines((title.trim()||d.heading).toUpperCase(),style==='diner'?16:18);
  const msgLines=lines(message.trim()||d.verb,35),nameLines=lines(comparisonName(r),31);
  const titleSize=style==='bureau'?26:style==='diner'?30:27;
  const titleY=classic?130:style==='postcard'?190:style==='drama'?209:165;
  const messageY=titleY+(titleLines.length-1)*(titleSize+5)+37;
  const countY=messageY+(msgLines.length-1)*19+64;
  const unitY=countY+34,tailY=unitY+(nameLines.length-1)*27+28;
  const captionY=tailY+(d.tail?31:10);
  const noticeLines=lines(r.signNote||d.signNote||'',65);
  const noticeY=classic?tailY+(d.tail?26:12):captionY+19;
  const usualBottom=classic?tailY+(d.tail?37:18):captionY+39;
  const bottomY=noticeLines.length?Math.max(usualBottom,noticeY+(noticeLines.length-1)*13+25):usualBottom;
  const height=bottomY+(classic?43:style==='diner'?64:style==='drama'?73:52);
  const iconY=classic?23:style==='diner'?45:style==='postcard'?50:style==='drama'?58:53;
  const iconSize=84;
  const icon=`${style==='postcard'?'<circle cx="270" cy="92" r="49" fill="#fff5dd" stroke="#fff" stroke-width="5"/>':classic?'<circle cx="270" cy="65" r="47" fill="#ffffff" opacity=".08"/>':''}<image data-object-icon="${escape(r.emoji)}" x="228" y="${iconY}" width="${iconSize}" height="${iconSize}" href="${emojiArt[r.emoji]}"/>`;
  const caption=style==='diner'?'THE MATH IS REAL. THE MENU IS NOT.':style==='postcard'?'WISH YOU WERE APPROXIMATELY HERE.':style==='drama'?'PLEASE OVERREACT ACCORDINGLY.':'CERTIFIED CLOSE-ISH. FILE UNDER: GOOD ENOUGH.';
  const font=style==='bureau'?'Courier New, monospace':'Arial, Helvetica, sans-serif';
  const numberSize=style==='diner'?58:52;
  // All decorations stay above or below the expanding data block.
  const body=`${icon}${!classic?text(s.caption,style==='drama'?172:style==='postcard'?152:34,{size:style==='postcard'?8:9,weight:700,spacing:1,color:s.fg,font}):''}${text(titleLines,titleY,{size:titleSize,weight:800,spacing:style==='bureau'?0.5:1.5,color:s.fg,font:style==='diner'?'Georgia, serif':font,italic:style==='diner'})}${text(msgLines,messageY,{size:14,color:s.fg,font})}${text(formatNumber(r.count),countY,{size:numberSize,weight:800,color:s.accent||s.fg,font:style==='diner'?'Georgia, serif':font,italic:style==='diner'})}${text(nameLines,unitY,{size:22,weight:700,color:s.fg,font})}${d.tail?text(d.tail,tailY,{size:16,color:s.fg,font}):''}${!classic?text(caption,captionY,{size:style==='bureau'?8:9,weight:700,color:s.accent,spacing:0.8,font}):''}${noticeLines.length?text(noticeLines,noticeY,{size:8,weight:600,color:s.fg,font}):''}<path d="M180 ${bottomY-17}h180" stroke="${s.fg}" opacity=".3"/>${text(`≈ ${measurement} · anythingbutmetric · novelty sign`,bottomY,{size:9,color:s.fg})}${text('Twemoji © Twitter & contributors · CC BY 4.0 · twemoji.twitter.com',bottomY+15,{size:7,color:s.fg})}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="${height*2}" viewBox="0 0 540 ${height}" role="img" aria-label="${escape(title+': '+message+' '+comparisonText(r)+' '+d.tail)}" data-sign-style="${style}">${frame(style,height)}${body}</svg>`;
}
