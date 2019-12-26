// @ts-ignore
import { getType } from './getType'

type ReplaceKeysInObject = (obj: any, what: any, withWhat: any, modifyValue?: any) => any

export const replaceKeysInObject: ReplaceKeysInObject = (obj, what, withWhat, modifyValue?) => {
  const resObject = {}
  Object.keys(obj).map((key) =>
    // @ts-ignore
    resObject[key === what ? withWhat : key] = getType(obj[key]) === 'Object'
      ? replaceKeysInObject(obj[key], what, withWhat, modifyValue)
      : modifyValue ? modifyValue(obj[key]) : obj[key],
  )

  return resObject
}
