export const arrayDiff = (array1: any[], array2: any[]) => {
  return array1.filter((x) => !array2.includes(x))
}
