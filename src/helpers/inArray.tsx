type Value = string | number

type InArray = (arr: Array<Value>, value: Value) => boolean

export const inArray: InArray = (arr, value) => (
  arr.indexOf(value) !== -1
)
