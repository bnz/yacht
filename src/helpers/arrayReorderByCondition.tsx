import update from 'immutability-helper'

type Arr = any[]

type Condition = (...args: any[]) => boolean

type ArrayReorderByCondition = (array: Arr, condition: Condition) => Arr

export const arrayReorderByCondition: ArrayReorderByCondition = (array, condition) => {
  const activeIndex = array.findIndex(condition)
  const beforeArr = array.slice(0, activeIndex)
  const arr = update(array, { $splice: [[0, activeIndex]] })

  return ([] as Arr).concat(arr, beforeArr)
}
