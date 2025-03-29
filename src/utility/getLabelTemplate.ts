export const getLabelTemplate = (lengthType:string) => {
  switch (lengthType) {
    case 'short':
      return 'サンプル'
    case 'long':
      return 'サンプルサンプルサンプルサンプルサンプル'
    case 'multiline':
      return 'サンプル<br />サンプル'
    default:
      return '文字数が選択されてないです'
  }
}