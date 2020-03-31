export const cropStringBy = (str: string, newStringLength: number): string => (
  `${str.substring(0, newStringLength)}${str.length > newStringLength ? '...' : ''}`
)
