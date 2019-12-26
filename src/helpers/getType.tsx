type ReturnedTypes = 'Object' | 'Array' | 'String' | 'Number' | 'Null' | 'Boolean' | 'Undefined' | 'Function'

type GetType = (obj: any) => ReturnedTypes

export const getType: GetType = (obj) => (
  // @ts-ignore FIXME typings!!!
  ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1] as ReturnedTypes
)
