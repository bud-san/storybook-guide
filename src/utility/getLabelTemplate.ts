export const getLabelTemplate = (val:string) => {
  switch (val) {
    case 'short':
      return 'サンプル'
    case 'long':
      return 'サンプルサンプルサンプルサンプルサンプル'
    case 'multiline':
      return 'サンプルサンプル<br />サンプル'
    default:
      return val
  }
}