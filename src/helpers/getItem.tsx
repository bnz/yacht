import { State } from '../redux/defaultState'

/**
 * Get item from localStorage
 */
export const getItem = (key: keyof State | 'theme', parse = true) => {
  const item = localStorage.getItem(key)

  return parse ? JSON.parse(item!) : item
}

export const getBooleanItem = (key: keyof State | 'theme', fallback: boolean): boolean => {
  let tmp: boolean | null

  tmp = getItem(key)

  return tmp !== null ? getItem(key) : fallback
}
