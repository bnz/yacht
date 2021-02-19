import { makeAutoObservable, runInAction, toJS } from 'mobx'
import { setItem } from './setItem'
import { getOrApply } from './getItem'
import { getRandomInt } from '../../../helpers/random'
import { PlayerId } from '../Players/Player'
import { abstractRouteTileIds, RouteTileIds, Uses, weirdMap } from '../SVG'
import { Ids } from '../Tiles/RouteTile'
import { gateways } from '../Ids'

export interface Player {
  id: PlayerId
}

export type PlayerSitIds = 1 | 13 | 79 | 91

export type Players = Record<PlayerSitIds, Player>

export enum GamePhase {
  PRE_GAME,
  PLAYERS_SELECTION,
  IN_PLAY,
}

export type PlayerMove = [PlayerId, Tiles | null, RouteTileIds | null]

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

export type PreSit = Ids | null

export interface RouteTile {
  tile: RouteTileIds | null,
  uses: Uses[]
  player: PlayerId | null
  preSit: boolean
}

export enum HexType {
  decorator,
  treasure,
  route,
  seat,
}

export interface iStore {
  dispose(): void

  startGame(): void

  colsAmount: number

  itemsCount: any[]

  getItemLocation(dataId: number): string

  helpingToolVisible: boolean

  gamePhase: GamePhase

  players: Players

  addPlayer(): void

  removePlayerById(playerId: PlayerId): void

  playerMove: PlayerMove

  nextMove(): void

  isGateway(dataId: number): boolean

  tiles: Record<Tiles, number>

  routeTiles: Record<Ids, RouteTile>

  idsToTypeMap: Record<number, HexType>

  preSit: PreSit

  applySit(): void

  setPreSit(id: Ids): void

  cancelPreSit(): void

  rotateLeft(): void

  rotateRight(): void

  sitMouseEnter(id: Ids): void

  sitMouseLeave(id: Ids): void
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
    this.playerMove = [this.players[1].id, this.nextTile[0], this.nextTile[1]]
    this.tiles = this.defaultTiles
    this.routeTiles = this.defaultRouteTiles
  }

  colsAmount = AM

  itemsCount = (new Array(this.colsAmount * 10)).fill(null)

  getItemLocation(dataId: number): string {
    const am = this.colsAmount
    return [
      (dataId % am) || am,
      Math.ceil(dataId / am),
    ].join('|')
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

  players = getOrApply<Players>('players', () => {
    const first = getRandomInt(1, 4)
    let second
    do {
      second = getRandomInt(1, 4)
    } while (second === first)

    return {
      1: {
        id: `p-${first}`,
      },
      13: {
        id: `p-${second}`,
      },
    } as Players
  })

  private get playersKeys(): PlayerSitIds[] {
    // @ts-ignore
    return Object.keys(this.players)
  }

  addPlayer() {
    const ids = Object.entries(this.players).map(([, { id }]) => parseInt(id.split('-')[1], 10))
    let index = 0
    for (let i = 1; i <= 4; i++) {
      if (ids.indexOf(i) === -1) {
        index = i
        break
      }
    }
    this.players[Object.keys(this.players).length === 2 ? 79 : 91] = {
      id: ({
        1: PlayerId.Player1,
        2: PlayerId.Player2,
        3: PlayerId.Player3,
        4: PlayerId.Player4,
      } as Record<number, PlayerId>)[index],
    }
    this.savePlayers()
    this.playerMove = [this.players[1].id, null, null]
    return this.players
  }

  removePlayerById(playerId: PlayerId) {
    const newPlayers = Object.entries(this.players).map(([, { id }]) => id).filter((id) => id !== playerId)
    runInAction(() => {
      delete this.players[this.playersKeys[this.playersKeys.length - 1]]
      this.playersKeys.forEach((id, i) => this.players[id].id = newPlayers[i])
      this.playerMove = [this.players[1].id, null, null]
      this.savePlayers()
    })
  }

  private _playerMove = getOrApply<PlayerMove>('player-move', () => [this.players[1].id, null, null])

  get playerMove() {
    return this._playerMove
  }

  set playerMove(move: PlayerMove) {
    this._playerMove = move
    setItem('player-move', this.playerMove)
  }

  nextMove() {
    const index = Object.entries(this.players).findIndex(([, { id }]) => id === this.playerMove[0])
    const keys = Object.keys(this.players)
    const nextKey = parseInt(keys[keys.length - 1 > index ? index + 1 : 0], 10) as PlayerSitIds

    const nextTile = this.randomTile as NonNullable<Tiles>
    this.playerMove = [this.players[nextKey].id, nextTile, weirdMap[nextTile]]
  }

  private savePlayers() {
    setItem('players', this.players)
  }

  private get gatewayKeys(): string[] {
    return Object.keys(gateways[this.playersKeys.length])
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

  private _tiles = getOrApply<Record<Tiles, number>>('route-tiles-count', () => this.defaultTiles)

  get tiles() {
    return this._tiles
  }

  set tiles(tiles) {
    this._tiles = tiles
    setItem('route-tiles-count', this.tiles)
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
    setItem('route-tiles-count', this.tiles)
    return randTileName
  }

  private get nextTile(): [Tiles, RouteTileIds] {
    const nextTile = this.randomTile as NonNullable<Tiles>
    return [nextTile, weirdMap[nextTile]]
  }

  private defaultRouteTileProps: RouteTile = {
    tile: null,
    uses: ['hex-default-bg'] as Uses[],
    preSit: false,
    player: null,
  }

  get routeTileIds(): Ids[] {
    return [
      18, 19, 20, 21, 22,
      30, 31, 32, 33, 34, 35, 36,
      42, 43, 44, 45, 46, 47, 48, 49, 50,
      55, 56, 57, 58, 60, 61, 62, 63,
      68, 69, 70, 71, 72, 73, 74, 75, 76,
      82, 83, 84, 85, 86, 87, 88,
      95, 96, 97, 98, 99, 100, 101,
      110, 112,
    ]
  }

  get playerSitIds(): PlayerSitIds[] {
    return [1, 13, 79, 91]
  }

  private defaultRouteTiles: Record<Ids, RouteTile> = (() => {
    const res = {} as Record<Ids, RouteTile>
    this.routeTileIds.forEach((id) => res[id] = this.defaultRouteTileProps)
    return res
  })()

  private fillWithIds<T>(ids: number[], type: HexType): Record<number, HexType> {
    const res: Record<number, HexType> = {}
    ids.forEach((id) => res[id] = type)
    return res
  }

  idsToTypeMap: Record<number, HexType> = {
    ...this.fillWithIds([4, 10, 53, 65, 121, 127], HexType.decorator),
    ...this.fillWithIds([6, 8, 16, 24, 41, 51, 80, 94, 90, 102, 123, 125], HexType.decorator),
    ...this.fillWithIds([7, 29, 37, 59, 81, 89, 111], HexType.treasure),
    ...this.fillWithIds(this.playerSitIds, HexType.seat),
    ...this.fillWithIds(this.routeTileIds, HexType.route),
  }

  routeTiles = getOrApply<Record<Ids, RouteTile>>('route-tiles', () => this.defaultRouteTiles)

  private _preSit = getOrApply<PreSit>('pre-sit', () => null)

  get preSit() {
    return this._preSit
  }

  set preSit(preSit) {
    this._preSit = preSit
    setItem('pre-sit', this.preSit)
  }

  applySit() {
    if (this.preSit !== null) {
      this.routeTiles[this.preSit].preSit = false
      this.routeTiles[this.preSit].uses[0] = 'hex-main-bg'
      this.preSit = null
    }
    setItem('route-tiles', this.routeTiles)
    this.nextMove()
  }

  setPreSit(id: Ids) {
    this.preSit = id
    this.routeTiles[id] = {
      tile: this.playerMove[1] as RouteTileIds,
      player: this.playerMove[0],
      preSit: true,
      uses: abstractRouteTileIds[this.playerMove[1] as NonNullable<Tiles>],
    }
    setItem('route-tiles', this.routeTiles)
  }

  cancelPreSit() {
    if (this.preSit !== null) {
      this.routeTiles[this.preSit] = {
        tile: null,
        uses: ['hex-default-bg'],
        player: null,
        preSit: false,
      }
      this.preSit = null
    }
    setItem('route-tiles', this.routeTiles)
  }

  rotateLeft() {
    console.log('rotateLeft')

    console.log(toJS(this.playerMove))

  }

  rotateRight() {
    console.log('rotateRight')
  }

  sitMouseEnter(id: Ids) {
    this.routeTiles[id].uses = abstractRouteTileIds[this.playerMove[1] as NonNullable<Tiles>]
  }

  sitMouseLeave(id: Ids) {
    this.routeTiles[id].uses = ['hex-default-bg']
  }
}
