export const getValueClass = (name:string|undefined|null) => {
  if(!name || name === '-') return ''
  return `-${name}`
}