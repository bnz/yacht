import { makeAutoObservable } from 'mobx'
import { setItem } from './setItem'
import { getOrApply } from './getItem'
import { getRandomInt } from '../../../helpers/random'
import { gateways } from '../Ids'
import { PlayerId } from '../Players/Player'
import { abstractRouteTileIds, RouteTileIds, Uses } from '../SVG'
import { Ids } from '../Tiles/RouteTile'

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
}

export interface iStore {
  dispose(): void

  startGame(): void

  colsAmount: number

  itemsCount: any[]

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

  routeTiles: Record<Ids, RouteTile>

  routeTileIds: Ids[][]

  idsToTypeMap: Record<number, HexType>

  preSit: PreSit

  applySit(): void

  setPreSit(id: Ids): void

  cancelPreSit(): void

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
    this.playerMove = [this.players[0].id, this.randomTile]
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

  private defaultRouteTileProps: RouteTile = {
    tile: null,
    uses: ['hex-default-bg'] as Uses[],
    preSit: false,
    player: null,
  }

  routeTileIds: Ids[][] = [
    [18, 19, 20, 21, 22],
    [30, 31, 32, 33, 34, 35, 36],
    [42, 43, 44, 45, 46, 47, 48, 49, 50],
    [55, 56, 57, 58],
    [60, 61, 62, 63],
    [68, 69, 70, 71, 72, 73, 74, 75, 76],
    [82, 83, 84, 85, 86, 87, 88],
    [95, 96, 97, 98, 99, 100, 101],
    [110],
    [112],
  ]

  private defaultRouteTiles: Record<Ids, RouteTile> = (() => {
    // @ts-ignore TODO
    const res: Record<Ids, RouteTile> = {}
    this.routeTileIds.flat().forEach((id) => res[id] = this.defaultRouteTileProps)
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
    ...this.fillWithIds([18, 19, 20, 21, 22, 30, 31, 32, 33, 34, 35, 36, 42, 43, 44, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 60, 61, 62, 63, 68, 69, 70, 71, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 87, 88, 95, 96, 97, 98, 99, 100, 101, 110, 112], HexType.route),
  }

  routeTiles = getOrApply<Record<Ids, RouteTile>>('route-tiles', () => this.defaultRouteTiles)
  // routeTiles = this.defaultRouteTiles

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
      // @ts-ignore
      tile: this.playerMove[1],
      // @ts-ignore
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

  sitMouseEnter(id: Ids) {
    this.routeTiles[id].uses = abstractRouteTileIds[this.playerMove[1] as NonNullable<Tiles>]
  }

  sitMouseLeave(id: Ids) {
    this.routeTiles[id].uses = ['hex-default-bg']
  }

}
