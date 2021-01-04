import { localStorageKeys } from './getItem'

export const setItem = (key: localStorageKeys, value: string) => (
  localStorage.setItem(key, value)
)
