import { setItem } from './setItem'

export type LocalStorageKeys =
  | 'phase'
  | 'players'
  | 'player-move'
  | 'route-tiles-count'
  | 'route-tiles'
  | 'history'
  | 'pre-sit'
  | 'orientation'
  | 'tiles'

export const getItem = (key: LocalStorageKeys) => {
  const data = localStorage.getItem('indigo-data')

  if (data !== null) {
    const d = JSON.parse(data)
    return d[key] === undefined ? null : d[key]
  }

  return null
}

export function getOrApply<T>(key: LocalStorageKeys, callback: () => T): T {
  if (getItem(key) !== null) {
    return getItem(key)
  }
  const res = callback()
  // @ts-ignore TODO
  setItem(key, res)
  return res
}
