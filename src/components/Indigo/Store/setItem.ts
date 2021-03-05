import { LocalStorageKeys } from './getItem'
import { BoardTile, PreSit, RouteTile, Tiles } from './Store'
import { GamePhase, Ids, OrientationType, PlayerMove, Players, Tile } from '../Ids'

export type Value =
  | GamePhase
  | Players
  | Record<Tiles, number>
  | PlayerMove
  | BoardTile[]
  | PreSit
  | Record<Ids, RouteTile>
  | OrientationType
  | Record<string, Tile>

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
