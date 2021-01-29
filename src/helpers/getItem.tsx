import { State } from '../redux/defaultState'

export type localStorageKeys = keyof State | 'theme' | 'theme-auto' | 'game'

/**
 * Get item from localStorage
 */
export const getItem = (key: localStorageKeys, parse = true) => {
  const item = localStorage.getItem(key)

  return parse ? JSON.parse(item!) : item
}

export const getBooleanItem = (key: localStorageKeys, fallback: boolean): boolean => {
  let tmp: boolean | null

  tmp = getItem(key)

  return tmp !== null ? getItem(key) : fallback
}
