export const a = {}

// import { makeAutoObservable, runInAction } from 'mobx'
// import { setItem } from './setItem'
// import { getOrApply } from './getItem'
// import { getRandomInt } from '../../../helpers/random'
// import football from '../Players/assets/football.svg'
// import hockey from '../Players/assets/hockey.svg'
// import tennis from '../Players/assets/tennis.svg'
// import motorcyclist from '../Players/assets/motorcyclist.svg'
// import {
//   CornerIds,
//   EmptyLineIds,
//   GamePhase,
//   GatewaysBgIds,
//   GatewaysIds,
//   Types,
//   PlayerColors,
//   PlayerId,
//   PlayerMove,
//   Players,
//   PlayerSitIds,
//   RouteTileNames,
//   TreasureCenterTileIds,
//   TreasureTilesIds,
//   Uses,
// } from '../Types'
// import american from '../Players/assets/american.svg'
// import basketball from '../Players/assets/basketball.svg'
// import pilot from '../Players/assets/pilot.svg'
//
// export type Tiles =
//   | 'shuriken' // l r
//   | 'crossroad'
//   | 'turtle' // 0 60 120
//   | 'lizard' // 0 60 120
//   | 'human' // 1 2 3 4 5 6
//
// export type TileNames =
//   | 'shuriken'
//   | 'crossroad'
//   | 'turtle'
//   | 'lizard'
//   | 'human'
//
// export interface BoardTile {
//   location: number
//   playerId: PlayerId
//   name: Tiles | null
//   rotation?: string
// }
//
// export type PreSit = Types | null
//
// export interface RouteTile {
//   uses: Uses[]
//   player: PlayerId | null
//   preSit: boolean
//   usesName: RouteTileNames | null
// }
//
// export enum HexType {
//   decorator,
//   corner,
//   treasure,
//   route,
//   seat,
//   gateway,
//   center
// }
//
// type Gateways = Record<GatewaysIds | EmptyLineIds, PlayerColors>
//
// export interface iStore {
//   colsAmount: number
//   itemsCount: any[]
//   helpingToolVisible: boolean
//   gamePhase: GamePhase
//   players: Players
//   playerMove: PlayerMove
//   tiles: Record<Tiles, number>
//   routeTiles: Record<Types, RouteTile>
//   idsToTypeMap: Record<number, HexType>
//   preSit: PreSit
//   routeTileForSeat: Uses[]
//   gatewaysColors: Gateways
//   playersKeys: PlayerSitIds[]
//   preSitRouteTileUses: Uses[]
//   isCrossroad: boolean
//   decoratorGateway: Record<GatewaysBgIds, Uses>
//   playerIdToColorMap: Record<PlayerId, PlayerColors>
//   decoratorEmptyLine: Record<EmptyLineIds, Uses[]>
//   playerIdToSVGMap: Record<PlayerId, string>
//   hexDefaultBg: Uses
//
//   dispose(): void
//
//   goToPreGame(): void
//
//   goToPlayersSelection(): void
//
//   startGame(): void
//
//   getItemLocation(dataId: number): string
//
//   addPlayer(): void
//
//   removePlayerById(playerId: PlayerId): void
//
//   nextMove(): void
//
//   applySit(): void
//
//   setPreSit(id: Types): void
//
//   cancelPreSit(): void
//
//   rotateLeft(): void
//
//   rotateRight(): void
//
//   sitMouseEnter(id: Types): void
//
//   sitMouseLeave(id: Types): void
// }
//
// export const AM = 13
//
// export const hexRationDiff = 86.60254
//
// export class Store implements iStore {
//
//   dispose(): void {
//     console.log('Store::dispose')
//   }
//
//   constructor() {
//     makeAutoObservable(this)
//   }
//
//   goToPreGame() {
//     this.gamePhase = GamePhase.PRE_GAME
//     localStorage.removeItem('indigo-data')
//   }
//
//   goToPlayersSelection() {
//     this.gamePhase = GamePhase.PLAYERS_SELECTION
//   }
//
//   startGame() {
//     this.gamePhase = GamePhase.IN_PLAY
//     this.playerMove = [this.players[1].id, this.nextTile]
//     this.tiles = this.defaultTiles
//     this.routeTiles = this.defaultRouteTiles
//   }
//
//   colsAmount = AM
//
//   itemsCount = (new Array(this.colsAmount * 10)).fill(null)
//
//   getItemLocation(dataId: number): string {
//     const am = this.colsAmount
//     return [
//       (dataId % am) || am,
//       Math.ceil(dataId / am),
//     ].join('|')
//   }
//
//   helpingToolVisible = localStorage.getItem('indigo-helpingToolVisible') === 'true'
//
//   get hexDefaultBg(): Uses {
//     return 'hex-default-bg'
//   }
//
//   private _gamePhase = getOrApply<GamePhase>('phase', () => GamePhase.PRE_GAME)
//
//   // private _gamePhase: GamePhase = GamePhase.PRE_GAME
//
//   get gamePhase() {
//     return this._gamePhase
//   }
//
//   set gamePhase(phase: GamePhase) {
//     this._gamePhase = phase
//     setItem('phase', this._gamePhase)
//   }
//
//   players: Players = (() => {
//     const first = getRandomInt(1, 4)
//     let second
//     do {
//       second = getRandomInt(1, 4)
//     } while (second === first)
//
//     return {
//       1: {
//         id: `p-${first}`,
//       },
//       13: {
//         id: `p-${second}`,
//       },
//     } as Players
//   })()
//
//   // players = getOrApply<Players>('players', () => {
//   //   const first = getRandomInt(1, 4)
//   //   let second
//   //   do {
//   //     second = getRandomInt(1, 4)
//   //   } while (second === first)
//   //
//   //   return {
//   //     1: {
//   //       id: `p-${first}`,
//   //     },
//   //     13: {
//   //       id: `p-${second}`,
//   //     },
//   //   } as Players
//   // })
//
//   get playersKeys(): PlayerSitIds[] {
//     // @ts-ignore
//     return Object.keys(this.players)
//   }
//
//   addPlayer() {
//     const ids = Object.entries(this.players).map(([, { id }]) => parseInt(id.split('-')[1], 10))
//     let index = 0
//     for (let i = 1; i <= 4; i++) {
//       if (ids.indexOf(i) === -1) {
//         index = i
//         break
//       }
//     }
//     this.players[Object.keys(this.players).length === 2 ? 79 : 91] = {
//       id: ({
//         1: PlayerId.Player1,
//         2: PlayerId.Player2,
//         3: PlayerId.Player3,
//         4: PlayerId.Player4,
//       } as Record<number, PlayerId>)[index],
//     }
//     this.savePlayers()
//     this.playerMove = [this.players[1].id, null]
//     return this.players
//   }
//
//   removePlayerById(playerId: PlayerId) {
//     const newPlayers = Object.entries(this.players).map(([, { id }]) => id).filter((id) => id !== playerId)
//     runInAction(() => {
//       delete this.players[this.playersKeys[this.playersKeys.length - 1]]
//       this.playersKeys.forEach((id, i) => this.players[id].id = newPlayers[i])
//       this.playerMove = [this.players[1].id, null]
//       this.savePlayers()
//     })
//   }
//
//   // private _playerMove = getOrApply<PlayerMove>('player-move', () => [this.players[1].id, null])
//   private _playerMove: PlayerMove = [this.players[1].id, null]
//
//   get playerMove() {
//     return this._playerMove
//   }
//
//   set playerMove(move: PlayerMove) {
//     this._playerMove = move
//     // setItem('player-move', this.playerMove)
//   }
//
//   get playerIdToSVGMap(): Record<PlayerId, string> {
//     return {
//       [PlayerId.Player1]: football,
//       [PlayerId.Player2]: hockey,
//       [PlayerId.Player3]: tennis,
//       [PlayerId.Player4]: motorcyclist,
//       [PlayerId.Player5]: american,
//       [PlayerId.Player6]: basketball,
//       [PlayerId.Player7]: pilot,
//     }
//   }
//
//   private static get weirdMap(): Record<Tiles, RouteTileNames> {
//     return {
//       shuriken: 'shuriken-0',
//       crossroad: 'crossroad',
//       turtle: 'turtle-0',
//       lizard: 'lizard-0',
//       human: 'human-0',
//     }
//   }
//
//   nextMove() {
//     const index = Object.entries(this.players).findIndex(([, { id }]) => id === this.playerMove[0])
//     const keys = Object.keys(this.players)
//     const nextKey = parseInt(keys[keys.length - 1 > index ? index + 1 : 0], 10) as PlayerSitIds
//     const nextTile = this.randomTile as NonNullable<Tiles>
//     this.playerMove = [this.players[nextKey].id, Store.weirdMap[nextTile]]
//   }
//
//   private savePlayers() {
//     setItem('players', this.players)
//   }
//
//   private saveRouteTiles() {
//     // setItem('route-tiles', this.routeTiles)
//   }
//
//   get playerIdToColorMap(): Record<PlayerId, PlayerColors> {
//     return {
//       [PlayerId.Player1]: PlayerColors.Player1,
//       [PlayerId.Player2]: PlayerColors.Player2,
//       [PlayerId.Player3]: PlayerColors.Player3,
//       [PlayerId.Player4]: PlayerColors.Player4,
//       [PlayerId.Player5]: PlayerColors.Player5,
//       [PlayerId.Player6]: PlayerColors.Player6,
//       [PlayerId.Player7]: PlayerColors.Player7,
//     }
//   }
//
//   get gatewaysColors(): Gateways {
//     const ids = Object.entries(this.players).map(([, { id }]) => id) as PlayerId[]
//     const p1 = this.playerIdToColorMap[ids[0]]
//     const p2 = this.playerIdToColorMap[ids[1]]
//
//     switch (ids.length) {
//       case 2:
//       default:
//         return {
//           // decorators
//           6: p1,
//           16: p1,
//           51: p1,
//           90: p1,
//           94: p1,
//           8: p2,
//           24: p2,
//           41: p2,
//           80: p2,
//           102: p2,
//           123: p1,
//           125: p2,
//
//           // gateways
//           5: p1,
//           17: p1,
//           9: p2,
//           23: p2,
//           64: p1,
//           77: p1,
//           113: p2,
//           114: p2,
//           54: p2,
//           67: p2,
//           108: p1,
//           109: p1,
//         }
//       case 3: {
//         const p3 = this.playerIdToColorMap[ids[2]]
//         return {
//           // decorators
//           6: p1,
//           8: p1,
//           16: p1,
//           102: p1,
//           24: p2,
//           80: p2,
//           94: p2,
//           41: p2,
//           51: p3,
//           90: p3,
//           123: p3,
//           125: p3,
//
//           // gateways
//           5: p1,
//           17: p1,
//           9: p1,
//           23: p2,
//           64: p3,
//           77: p3,
//           113: p3,
//           114: p1,
//           54: p2,
//           67: p2,
//           108: p2,
//           109: p3,
//         }
//       }
//       case 4: {
//         const p3 = this.playerIdToColorMap[ids[2]]
//         const p4 = this.playerIdToColorMap[ids[3]]
//         return {
//           // decorators
//           6: p1,
//           51: p1,
//           80: p1,
//           8: p2,
//           16: p2,
//           102: p2,
//           24: p3,
//           41: p3,
//           94: p3,
//           90: p4,
//           123: p4,
//           125: p4,
//
//           // gateways
//           5: p1,
//           17: p2,
//           9: p2,
//           23: p3,
//           64: p1,
//           77: p4,
//           113: p4,
//           114: p2,
//           54: p3,
//           67: p1,
//           108: p3,
//           109: p4,
//         }
//       }
//     }
//   }
//
//   get decoratorGateway(): Record<GatewaysBgIds, Uses> {
//     return {
//       5: 'hex-decorator-gateway-top-left',
//       17: 'hex-decorator-gateway-top-left',
//       9: 'hex-decorator-gateway-top-right',
//       23: 'hex-decorator-gateway-top-right',
//       54: 'hex-decorator-gateway-left',
//       67: 'hex-decorator-gateway-left',
//       64: 'hex-decorator-gateway-right',
//       77: 'hex-decorator-gateway-right',
//       113: 'hex-decorator-gateway-bottom-right',
//       114: 'hex-decorator-gateway-bottom-right',
//       108: 'hex-decorator-gateway-bottom-left',
//       109: 'hex-decorator-gateway-bottom-left',
//     }
//   }
//
//   get decoratorEmptyLine(): Record<EmptyLineIds, Uses[]> {
//     return {
//       6: ['hex-decorator-line-empty-top'],
//       8: ['hex-decorator-line-empty-top'],
//       16: ['hex-decorator-line-empty-right-top'],
//       24: ['hex-decorator-line-empty-left-top'],
//       41: ['hex-decorator-line-empty-right-top'],
//       51: ['hex-decorator-line-empty-left-top'],
//       80: ['hex-decorator-line-empty-right-bottom'],
//       94: ['hex-decorator-line-empty-right-bottom'],
//       90: ['hex-decorator-line-empty-left-bottom'],
//       102: ['hex-decorator-line-empty-left-bottom'],
//       123: ['hex-decorator-line-empty-bottom'],
//       125: ['hex-decorator-line-empty-bottom'],
//     }
//   }
//
//   private defaultTiles: Record<Tiles, number> = {
//     shuriken: 6,
//     crossroad: 6,
//     turtle: 14,
//     lizard: 14,
//     human: 14,
//   }
//
//   // private _tiles = getOrApply<Record<Tiles, number>>('route-tiles-count', () => this.defaultTiles)
//   private _tiles = this.defaultTiles
//
//   get tiles() {
//     return this._tiles
//   }
//
//   set tiles(tiles) {
//     this._tiles = tiles
//     // setItem('route-tiles-count', this.tiles)
//   }
//
//   get tileNames() {
//     return Object.keys(this.tiles) as Tiles[]
//   }
//
//   private get randomTile(): Tiles | null {
//     const randTileName = this.tileNames[getRandomInt(0, this.tileNames.length - 1)]
//     if (randTileName === undefined) {
//       return null
//     }
//     this.tiles[randTileName]--
//     if (this.tiles[randTileName] === 0) {
//       delete this.tiles[randTileName]
//     }
//     // setItem('route-tiles-count', this.tiles)
//     return randTileName
//   }
//
//   private get nextTile(): RouteTileNames {
//     const nextTile = this.randomTile as NonNullable<Tiles>
//     return Store.weirdMap[nextTile]
//   }
//
//   private get defaultRouteTileProps(): RouteTile {
//     return {
//       uses: [this.hexDefaultBg],
//       preSit: false,
//       player: null,
//       usesName: null,
//     }
//   }
//
//   private static get routeTileNames(): Record<RouteTileNames, Uses[]> {
//     return {
//       'crossroad': ['hex-main-bg', 'hex-line-0', 'hex-line-60', 'hex-line-120'],
//       'shuriken-0': ['hex-main-bg', 'hex-circle-top-right', 'hex-circle-bottom-right', 'hex-circle-center-left'],
//       'shuriken-60': ['hex-main-bg', 'hex-circle-top-left', 'hex-circle-bottom-left', 'hex-circle-center-right'],
//       'turtle-0': ['hex-main-bg', 'hex-line-0', 'hex-circle-center-left', 'hex-circle-center-right'],
//       'turtle-60': ['hex-main-bg', 'hex-line-60', 'hex-circle-top-left', 'hex-circle-bottom-right'],
//       'turtle-120': ['hex-main-bg', 'hex-line-120', 'hex-circle-bottom-left', 'hex-circle-top-right'],
//       'lizard-0': ['hex-main-bg', 'hex-line-0', 'hex-arc-top', 'hex-arc-bottom'],
//       'lizard-60': ['hex-main-bg', 'hex-line-60', 'hex-arc-top-right', 'hex-arc-bottom-left'],
//       'lizard-120': ['hex-main-bg', 'hex-line-120', 'hex-arc-bottom-right', 'hex-arc-top-left'],
//       'human-0': ['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-right', 'hex-circle-top-left'],
//       'human-60': ['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-left', 'hex-circle-top-right'],
//       'human-120': ['hex-main-bg', 'hex-arc-bottom-left', 'hex-arc-top-left', 'hex-circle-center-right'],
//       'human-180': ['hex-main-bg', 'hex-arc-top-left', 'hex-arc-top', 'hex-circle-bottom-right'],
//       'human-240': ['hex-main-bg', 'hex-arc-top', 'hex-arc-top-right', 'hex-circle-bottom-left'],
//       'human-300': ['hex-main-bg', 'hex-arc-top-right', 'hex-arc-bottom-right', 'hex-circle-center-left'],
//     }
//   }
//
//   get routeTileIds(): Types[] {
//     return [
//       18, 19, 20, 21, 22,
//       30, 31, 32, 33, 34, 35, 36,
//       42, 43, 44, 45, 46, 47, 48, 49, 50,
//       55, 56, 57, 58, 60, 61, 62, 63,
//       68, 69, 70, 71, 72, 73, 74, 75, 76,
//       82, 83, 84, 85, 86, 87, 88,
//       95, 96, 97, 98, 99, 100, 101,
//       110, 112,
//     ]
//   }
//
//   get playerSitIds(): PlayerSitIds[] {
//     return [1, 13, 79, 91]
//   }
//
//   get gatewayIds(): GatewaysIds[] {
//     return [5, 17, 9, 23, 64, 77, 113, 114, 54, 67, 108, 109]
//   }
//
//   get treasureIds(): Array<TreasureTilesIds | TreasureCenterTileIds> {
//     return [7, 29, 37, 59, 81, 89, 111]
//   }
//
//   get cornerIds(): CornerIds[] {
//     return [4, 10, 53, 65, 121, 127]
//   }
//
//   get decoratorEmptyIds(): EmptyLineIds[] {
//     return [6, 8, 16, 24, 41, 51, 80, 94, 90, 102, 123, 125]
//   }
//
//   private defaultRouteTiles: Record<Types, RouteTile> = (() => {
//     const res = {} as Record<Types, RouteTile>
//     this.routeTileIds.forEach((id) => res[id] = this.defaultRouteTileProps)
//     return res
//   })()
//
//
//   idsToTypeMap: Record<number, HexType> = {
//     // ...this.fillWithIds(this.cornerIds, HexType.corner),
//     // ...this.fillWithIds(this.decoratorEmptyIds, HexType.decorator),
//     // ...this.fillWithIds(this.treasureIds, HexType.treasure),
//     // ...this.fillWithIds(this.playerSitIds, HexType.seat),
//     // ...this.fillWithIds(this.routeTileIds, HexType.route),
//     // ...this.fillWithIds(this.gatewayIds, HexType.gateway),
//   }
//
//   // routeTiles = getOrApply<Record<Types, RouteTile>>('route-tiles', () => this.defaultRouteTiles)
//   routeTiles: Record<Types, RouteTile> = this.defaultRouteTiles
//
//   // private _preSit = getOrApply<PreSit>('pre-sit', () => null)
//   private _preSit: PreSit = null
//
//   get preSit() {
//     return this._preSit
//   }
//
//   set preSit(preSit) {
//     this._preSit = preSit
//     setItem('pre-sit', this.preSit)
//   }
//
//   applySit() {
//     if (this.preSit !== null) {
//       this.routeTiles[this.preSit].preSit = false
//       this.routeTiles[this.preSit].uses[0] = 'hex-main-bg'
//       this.preSit = null
//     }
//     this.saveRouteTiles()
//     this.nextMove()
//   }
//
//   setPreSit(id: Types) {
//     this.preSit = id
//     this.routeTiles[this.preSit] = {
//       player: this.playerMove[0],
//       preSit: true,
//       uses: this.routeTileForSeat,
//       usesName: this.playerMove[1],
//     }
//     this.saveRouteTiles()
//   }
//
//   cancelPreSit() {
//     if (this.preSit !== null) {
//       this.routeTiles[this.preSit] = {
//         uses: [this.hexDefaultBg],
//         player: null,
//         preSit: false,
//         usesName: null,
//       }
//       this.preSit = null
//     }
//     this.saveRouteTiles()
//   }
//
//   private static get routeTileKeys(): RouteTileNames[] {
//     return Object.keys(Store.routeTileNames) as RouteTileNames[]
//   }
//
//   private static getPrefix(arg: NonNullable<RouteTileNames>): string {
//     return arg.split('-')[0]
//   }
//
//   private get toRight(): RouteTileNames {
//     const curr = this.playerMove[1] as NonNullable<RouteTileNames>
//     const prefix = Store.getPrefix(curr)
//     const index = Store.routeTileKeys.findIndex((id) => id === curr)
//     const nextId = Store.routeTileKeys[index + 1]
//     if (nextId && Store.getPrefix(nextId) === prefix) {
//       return nextId
//     }
//     return `${prefix}-0` as RouteTileNames
//   }
//
//   private get toLeft(): RouteTileNames {
//     const curr = this.playerMove[1] as NonNullable<RouteTileNames>
//     const prefix = Store.getPrefix(curr)
//     const index = Store.routeTileKeys.findIndex((id) => id === curr)
//     const prevId = Store.routeTileKeys[index - 1]
//     if (prevId && Store.getPrefix(prevId) === prefix) {
//       return prevId
//     }
//     const availableKeys = Store.routeTileKeys.filter((id) => Store.getPrefix(id) === prefix)
//     return availableKeys[availableKeys.length - 1]
//   }
//
//   private rotateRouteTile(nextTile: RouteTileNames) {
//     this.playerMove = [this.playerMove[0], nextTile]
//     const nextUses = Store.routeTileNames[nextTile]
//     nextUses[0] = this.hexDefaultBg
//     this.routeTiles[this.preSit as NonNullable<PreSit>].uses = nextUses
//     this.saveRouteTiles()
//   }
//
//   rotateLeft() {
//     this.rotateRouteTile(this.toLeft)
//   }
//
//   rotateRight() {
//     this.rotateRouteTile(this.toRight)
//   }
//
//   sitMouseEnter(id: Types) {
//     this.routeTiles[id].uses = this.routeTileForSeat
//     this.routeTiles[id].usesName = this.playerMove[1]
//   }
//
//   sitMouseLeave(id: Types) {
//     this.routeTiles[id].uses = [this.hexDefaultBg]
//     this.routeTiles[id].usesName = null
//   }
//
//   get routeTileForSeat(): Uses[] {
//     const uses = Store.routeTileNames[this.playerMove[1] as NonNullable<RouteTileNames>]
//     uses[0] = this.hexDefaultBg
//     return uses
//   }
//
//   get preSitRouteTileUses(): Uses[] {
//     return this.routeTiles[this.preSit as NonNullable<Types>].uses
//   }
//
//   get isCrossroad(): boolean {
//     return this.preSitRouteTileUses.join('_') === `${this.hexDefaultBg}_hex-line-0_hex-line-60_hex-line-120`
//   }
// }
