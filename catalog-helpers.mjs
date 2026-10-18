// Reference models spell out their assumptions; the numbers are not product ratings.
export const SI_SOURCE='https://www.bipm.org/en/publications/si-brochure';
export function model(name,value,emoji,note,source='') {
  return {name,plural:name,value,emoji,note,source,ratio:true};
}
export function quantity(label,base,units,refs,options={}) {
  return {label,base,units,refs,group:'More measures',value:1,unit:units.find(([u])=>u===base)?.[0]||units[0][0],heading:'FOR SCALE ONLY',verb:'About',tail:'',hint:`${label}, measured in ${base}. Comparisons use the stated illustrative models.`,definitionSource:SI_SOURCE,...options};
}
