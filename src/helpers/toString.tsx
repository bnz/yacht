export const toString = (obj: any): string => (
  JSON.stringify(obj.toJSON ? obj.toJSON() : obj)
)
