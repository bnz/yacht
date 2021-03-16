import { GamePhase, OrientationType, PlayerMove, Players, Tiles } from '../types'

type Keys =
  | 'orientation'
  | 'phase'
  | 'player-move'
  | 'players'
  | 'tiles'

type Value =
  | OrientationType
  | GamePhase
  | PlayerMove
  | Players
  | Tiles

export interface iLocalStorageMgmnt {
  get(key: Keys): any | null

  set(key: Keys, value: Value): void

  getOrApply<T>(key: Keys, callback: () => T): T

  destroy(): void
}

export class LocalStorageMgmnt implements iLocalStorageMgmnt {

  constructor(
    private storageName: string,
  ) {
  }

  get(key: Keys) {
    const data = localStorage.getItem(this.storageName)

    if (data !== null) {
      const d = JSON.parse(data)
      return d[key] === undefined ? null : d[key]
    }

    return null
  }

  getOrApply<T>(key: Keys, callback: () => T): T {
    if (this.get(key) !== null) {
      return this.get(key)
    }
    const res = callback()
    // @ts-ignore TODO
    this.set(key, res)
    return res
  }

  set(key: Keys, value: Value) {
    const data = localStorage.getItem(this.storageName)

    if (data === null) {
      localStorage.setItem(this.storageName, JSON.stringify({
        [key]: value,
      }))
    } else {
      const d = JSON.parse(data)
      d[key] = value
      localStorage.setItem(this.storageName, JSON.stringify(d))
    }
  }

  destroy() {
    localStorage.removeItem(this.storageName)
  }

}
