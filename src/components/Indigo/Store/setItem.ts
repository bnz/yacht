import { LocalStorageKeys } from './getItem'
import { GamePhase, Player } from './Store'
import { PlayerId } from '../Players/Player'

type Value = GamePhase | Player[] | PlayerId

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
