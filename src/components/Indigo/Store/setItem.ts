import { LocalStorageKeys } from './getItem'
import { BoardTile, GamePhase, Player, PlayerMove, PreSit, RouteTile, Tiles } from './Store'
import { Ids } from '../Tiles/RouteTile'

export type Value =
  | GamePhase | Player[] | Record<Tiles, number>
  | PlayerMove | BoardTile[] | PreSit
  | Record<Ids, RouteTile>

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
