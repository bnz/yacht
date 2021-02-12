import { LocalStorageKeys } from './getItem'
import { BoardTile, GamePhase, Player, PlayerMove, PreSit, Tiles } from './Store'

export type Value =
  | GamePhase | Player[] | Record<Tiles, number>
  | PlayerMove | BoardTile[] | PreSit

export const setItem = (key: LocalStorageKeys, value: Value) => {
  const data = localStorage.getItem('indigo-data')

  if (data === null) {
    localStorage.setItem('indigo-data', JSON.stringify({
      [key]: value,
    }))
  } else {
    const d = JSON.parse(data)
    d[key] = value
    localStorage.setItem('indigo-data', JSON.stringify(d))
  }
}
