import { makeAutoObservable } from 'mobx'
import { setItem } from './setItem'
import { getOrApply } from './getItem'
import { getRandomInt } from '../../../helpers/random'
import { gateways } from '../Ids'
import { PlayerId } from '../Players/Player'
import { routeTileIds, Uses } from '../SVG'

export interface Player {
  id: PlayerId
}

export enum GamePhase {
  PRE_GAME,
  PLAYERS_SELECTION,
  IN_PLAY,
}

export type PlayerMove = [PlayerId, Tiles | null]

export type Tiles =
  | 'shuriken' // l r
  | 'crossroad'
  | 'turtle' // 0 60 120
  | 'lizard' // 0 60 120
  | 'human' // 1 2 3 4 5 6

export interface BoardTile {
  location: number
  playerId: PlayerId
  name: Tiles | null
  rotation?: string
}

export type PreSit = BoardTile | null

export interface iStore {
  dispose(): void

  startGame(): void

  colsAmount: number
  itemsCount: any[]
  bottomCount: any[]

  getItemLocation(dataId: number): string

  helpingToolVisible: boolean

  gamePhase: GamePhase

  players: Player[]

  getPlayerById(playerId: string): Player | undefined

  addPlayer(): void

  removePlayerById(playerId: string): void

  playerMove: PlayerMove

  nextMove(): void

  isGateway(dataId: number): boolean

  tiles: Record<Tiles, number>

  history: BoardTile[]

  preSit: PreSit

  setPreSitById(id: number): void

  setHistory(id: number): void

  getUsesFromHistoryById(id: number): Uses[] | undefined
}

export const AM = 13

export class Store implements iStore {

  dispose(): void {
    console.log('Store::dispose')
  }

  constructor() {
    makeAutoObservable(this)
  }

  startGame() {
    this.gamePhase = GamePhase.IN_PLAY
    this.playerMove = [this.players[0].id, this.randomTile]
    this.history = []
    this.tiles = this.defaultTiles
    this.preSit = null
  }

  colsAmount = AM

  itemsCount = (new Array(this.colsAmount * 10)).fill(null)

  bottomCount = (new Array(this.colsAmount)).fill(null)

  getItemLocation(dataId: number): string {
    const am = this.colsAmount
    return [(dataId % am) || am, Math.ceil(dataId / am)].join('|')
  }

  helpingToolVisible = localStorage.getItem('indigo-helpingToolVisible') === 'true'

  private _gamePhase = getOrApply<GamePhase>('phase', () => GamePhase.PRE_GAME)

  get gamePhase() {
    return this._gamePhase
  }

  set gamePhase(phase: GamePhase) {
    this._gamePhase = phase
    setItem('phase', this._gamePhase)
  }

  players = getOrApply<Player[]>('players', () => {
    const first = getRandomInt(1, 4)
    let second
    do {
      second = getRandomInt(1, 4)
    } while (second === first)
    return [
      { id: `p-${first}` as PlayerId },
      { id: `p-${second}` as PlayerId },
    ]
  })

  getPlayerById(playerId: string) {
    return this.players.find(({ id }) => id === playerId)
  }

  addPlayer() {
    const ids = this.players.map(({ id }) => parseInt(id.split('-')[1], 10))
    let index = 0
    for (let i = 1; i <= 4; i++) {
      if (ids.indexOf(i) === -1) {
        index = i
        break
      }
    }
    this.players.push({ id: `p-${index}` as PlayerId })
    this.savePlayers()
    this.playerMove = [this.players[0].id, null]
    return this.players
  }

  removePlayerById(playerId: string) {
    this.players.splice(
      this.players.findIndex(({ id }) => id === playerId),
      1,
    )
    this.savePlayers()
    this.playerMove = [this.players[0].id, null]
    return this.players
  }

  private _playerMove = getOrApply<PlayerMove>('player-move', () => [this.players[0].id, null])

  get playerMove() {
    return this._playerMove
  }

  set playerMove(move: PlayerMove) {
    this._playerMove = move
    setItem('player-move', this._playerMove)
  }

  nextMove() {
    const index = this.players.findIndex(({ id }) => id === this.playerMove[0])
    this.playerMove = [
      this.players[this.players.length - 1 > index ? index + 1 : 0].id,
      this.randomTile,
    ]
  }

  private savePlayers() {
    setItem('players', this.players)
  }

  private get gatewayKeys(): string[] {
    return Object.keys(gateways[this.players.length])
  }

  isGateway(dataId: number) {
    return this.gatewayKeys.indexOf(`${dataId}`) !== -1
  }

  private defaultTiles: Record<Tiles, number> = {
    shuriken: 6,
    crossroad: 6,
    turtle: 14,
    lizard: 14,
    human: 14,
  }

  private _tiles = getOrApply<Record<Tiles, number>>('route-tiles', () => this.defaultTiles)

  get tiles() {
    return this._tiles
  }

  set tiles(tiles) {
    this._tiles = tiles
    setItem('route-tiles', this.tiles)
  }

  get tileNames() {
    return Object.keys(this.tiles) as Tiles[]
  }

  private get randomTile(): Tiles | null {
    const randTileName = this.tileNames[getRandomInt(0, this.tileNames.length - 1)]
    if (randTileName === undefined) {
      return null
    }
    this.tiles[randTileName]--
    if (this.tiles[randTileName] === 0) {
      delete this.tiles[randTileName]
    }
    setItem('route-tiles', this.tiles)
    return randTileName
  }

  private _history = getOrApply<BoardTile[]>('history', () => [])

  get history(): BoardTile[] {
    return this._history
  }

  set history(history) {
    if (history[0]) {
      this._history.push(history[0])
    } else {
      this._history = []
    }
    setItem('history', this.history)
  }

  private _preSit = getOrApply<PreSit>('pre-sit', () => null)

  get preSit() {
    return this._preSit
  }

  set preSit(preSit) {
    this._preSit = preSit
    setItem('pre-sit', this.preSit)
  }

  setPreSitById(id: number) {
    this.preSit = {
      playerId: this.playerMove[0],
      name: this.playerMove[1],
      location: id,
    }
  }

  setHistory(id: number) {
    this.history = [{
      location: id,
      playerId: this.playerMove[0],
      name: this.playerMove[1],
    }]
    this.nextMove()
    this.preSit = null
  }

  getUsesFromHistoryById(id: number): Uses[] | undefined {
    const tile = this.history.find(({ location }) => location === id)

    if (tile !== undefined) {
      for (let i = 0; i <= Object.keys(routeTileIds).length - 1; i++) {
        if (Object.keys(routeTileIds)[i].split('-')[0] === tile.name) {
          // @ts-ignore
          return routeTileIds[Object.keys(routeTileIds)[i]]
        }
      }
    }
  }

}
