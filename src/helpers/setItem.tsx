import { State } from '../redux/defaultState'

export const setItem = (key: keyof State | 'theme', value: string) => (
  localStorage.setItem(key, value)
)
