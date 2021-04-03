import { CSSProperties, MouseEvent } from 'react'
import { makeAutoObservable, toJS } from 'mobx'
import { Layout } from '../Hexagons/Layout'
import { Point } from '../Hexagons/Point'
import { Orientation } from '../Hexagons/Orientation'
import { Hex } from '../Hexagons/Hex'
import {
  AllT,
  AllTiles,
  Angle,
  CornersTiles,
  Edge,
  GatewayTiles,
  HexType,
  Keys,
  LineEmptyTiles,
  OrientationType,
  PlayerId,
  PlayerMove,
  RouteTiles,
  SavedTilesValue,
  Stone,
  StoneIds,
  Stones,
  StonesEntries,
  StoneType,
  Tile,
  TileItems,
  TileNames,
  Tiles,
  TreasureT,
  Values,
} from '../types'
import { debounce } from '../../../helpers/debounce'
import svg from '../hex.svg'
import { iLocalStorageMgmnt, LocalStorageMgmnt } from './LocalStorageMgmnt'
import { GamePhaseStore, iGamePhaseStore } from './GamePhase'
import { shuffle } from '../../../helpers/shuffle'
import { iPlayersStore, PlayersStore } from './PlayersStore'
import { getRandomInt as rand } from '../../../helpers/random'

export interface iHexStore {
  layout: Layout
  renderLayout: Layout
  orientation: Orientation
  hoveredTile: string
  arenaElement: HTMLDivElement | null
  R: number
  isPointy: boolean
  tiles: Tiles
  tileEntries: [string, Tile][]
  orientationType: OrientationType
  gamePhase: iGamePhaseStore
  playersStore: iPlayersStore
  playerMove: PlayerMove
  gates: Record<number, number>
  playerMoveRouteTile: CSSProperties | undefined
  hoveredPoints: { x: number; y: number }
  preSit: boolean
  stones: Stones
  stonesEntries: StonesEntries
  isRouteCrossroad: boolean

  dispose(): void

  restart(): void

  nextMove(): void

  onMouseMove(event: MouseEvent<HTMLDivElement>): void

  onClick(): void

  cancelPreSitButton(e: MouseEvent<HTMLButtonElement | HTMLDivElement>): void

  cancelPreSit(): void

  applySitButton(e: MouseEvent<HTMLButtonElement>): void

  applySit(): void

  rotateLeftButton(e: MouseEvent<HTMLButtonElement>): void

  rotateLeft(): void

  rotateRightButton(e: MouseEvent<HTMLButtonElement>): void

  rotateRight(): void

  toggleOrientation(): void

  getBackgroundUrl(id: string): CSSProperties

  startGame(): void

  getGateway(position: number): PlayerId

  getStoneCSS(id: StoneIds): CSSProperties
}

export class HexStore implements iHexStore {

  private readonly ratio = 0.8660254

  private width = 0

  private height = 0

  private largeSide = 9

  private smallSide = 9 * this.ratio

  constructor() {
    makeAutoObservable<HexStore,
      | 'ratio'
      | 'corners'
      | 'emptyLines'
      | 'largeSide'
      | 'smallSide'
      | 'treasures'
      | 'gateways'
      | 'routes'
      | '_leftTiles'
      | '_leftTilesInitialSet'
      | 'storage'
      | '_gates'
      | 'tileNameToAngle'
      | 'stoneAngleMap'
      | 'routeTileIdToEdgeMap'>(this, {
      ratio: false,
      corners: false,
      emptyLines: false,
      largeSide: false,
      smallSide: false,
      treasures: false,
      gateways: false,
      routes: false,
      _leftTiles: false,
      _leftTilesInitialSet: false,
      storage: false,
      _gates: false,
      tileNameToAngle: false,
      stoneAngleMap: false,
      routeTileIdToEdgeMap: false,
    })

    // if (process.env.NODE_ENV === 'development') {
    //   new __DEV__appendStyles(this.smallSide, this.largeSide, this.ratio, this.tiles)
    // }

    // Record<RouteTiles, Edge[]>

    // console.log(this.routeTileIdToEdgeMap)
  }

  private storage: iLocalStorageMgmnt<Keys, Values> = new LocalStorageMgmnt<Keys, Values>('indigo')

  playersStore: iPlayersStore = new PlayersStore(this.storage)

  gamePhase: iGamePhaseStore = new GamePhaseStore(this.storage)

  startGame = () => {
    this.gamePhase.startGame()
  }

  dispose(): void {
    window.removeEventListener('resize', this.debounce)
  }

  private generateLeftTiles = (): TileNames[] => {
    return shuffle<TileNames>(
      [].concat.apply(
        [] as any,
        Object.entries<6 | 14>(this.leftTilesInitialSet).map(
          ([name, count]) => (new Array(count)).fill(name),
        ) as any,
      ),
    )
  }

  private leftTilesInitialSet: Record<TileNames, 6 | 14> = {
    s: 6,
    c: 6,
    t: 14,
    l: 14,
    h: 14,
  }

  private tileNameToAngle: Record<TileNames, Angle[]> = {
    s: [0, 60],
    c: [],
    t: [0, 60, 120],
    l: [0, 60, 120],
    h: [0, 60, 120, 180, 240, 300],
  }

  private randAngle(tile: TileNames): number {
    return rand(0, this.tileNameToAngle[tile].length - 1)
  }

  private leftTiles = this.storage.getOrApply<TileNames[]>('tiles-left', this.generateLeftTiles)

  get randomTile(): string | undefined {
    const tile = this.leftTiles.pop()
    this.storage.set('tiles-left', this.leftTiles)

    if (tile) {
      if (this.tileNameToAngle[tile].length) {
        return [
          tile,
          this.tileNameToAngle[tile][this.randAngle(tile)],
        ].join('-')
      }
      return tile
    }

    return undefined
  }

  private _playerMove = this.storage.getOrApply<PlayerMove>(
    'player-move',
    () => [this.playersStore.players[0].id, this.randomTile],
  )

  get playerMove() {
    return this._playerMove
  }

  set playerMove(move: PlayerMove) {
    this._playerMove = move
    this.storage.set('player-move', this.playerMove)
  }

  private get playerMoveTile() {
    return this.playerMove[1] ? this.playerMove[1] : undefined
  }

  private _arenaElement: HTMLDivElement | null = null

  get arenaElement() {
    return this._arenaElement
  }

  set arenaElement(el) {
    this._arenaElement = el
    this.onWindowResize()
    window.addEventListener('resize', this.debounce, false)
  }

  restart = () => {
    this.tiles = this._tiles
    this.saveTiles()

    this.leftTiles = this.generateLeftTiles()

    console.log(toJS(this.tiles))
  }

  private onWindowResize = () => {
    const [width, height] = this.elSizes
    if (this.width !== width || this.height !== height) {
      this.width = width
      this.height = height
      this.recalc()
    }
  }

  get elSizes() {
    if (this.arenaElement) {
      return [
        this.arenaElement.offsetWidth,
        this.arenaElement.offsetHeight,
      ]
    }
    return [0, 0]
  }

  private recalc() {
    const withSize = this.isPointy ? this.smallSide * 2 : this.largeSide * 2
    const heightSize = this.isPointy ? this.largeSide * 2 : this.smallSide * 2
    this.R = Math.min(this.width / withSize, this.height / heightSize)
    this.updateLayout()
  }

  private debounce = debounce(this.onWindowResize, 400)

  private _hoveredTile = ''

  get hoveredTile() {
    return this._hoveredTile
  }

  set hoveredTile(hoveredTile) {
    this._hoveredTile = hoveredTile
  }

  get hoveredPoints() {
    const [_q, _r] = this.hoveredTile.split(',')
    return this.layout.hexToPixel(this.toHex(parseInt(_q, 10) || 0, parseInt(_r, 10) || 0))
  }

  private _R = 0

  get R() {
    return this._R
  }

  set R(R) {
    this._R = R
  }

  private _preSit = false

  get preSit() {
    return this._preSit
  }

  set preSit(preSit) {
    this._preSit = preSit
  }

  get isPointy() {
    return this.orientation.start_angle === 0.5
  }

  private _orientation = Layout[this.storage.getOrApply<OrientationType>('orientation', () => 'flat')]

  get orientation() {
    return this._orientation
  }

  set orientation(orientation) {
    this._orientation = orientation
    this.storage.set('orientation', this.orientationType)
  }

  get orientationType(): OrientationType {
    return this.isPointy ? 'pointy' : 'flat'
  }

  toggleOrientation = () => {
    this.orientation = this.isPointy ? Layout.flat : Layout.pointy
    const [width, height] = this.elSizes
    this.width = width
    this.height = height
    this.recalc()
  }

  private updateLayout() {
    this.layout = new Layout(
      this.orientation,
      new Point(this.R, this.R),
      new Point(
        this.width / 2,
        this.R * (this.isPointy ? this.largeSide : this.smallSide),
      ),
    )
  }

  private _layout: Layout = new Layout(
    this.orientation,
    new Point(0, 0),
    new Point(0, 0),
  )

  get layout() {
    return this._layout
  }

  set layout(layout) {
    this._layout = layout
  }

  get renderLayout(): Layout {
    return new Layout(
      Layout[this.orientationType],
      new Point(1, 1),
      new Point(
        0,
        this.orientationType === 'pointy' ? this.largeSide : this.smallSide,
      ),
    )
  }

  private readonly stoneAngleMap: Record<OrientationType, Record<StoneType, [number?, number?, number?, number?, number?, number?]>> = {
    pointy: {
      [StoneType.sapphire]: [],
      [StoneType.emerald]: [undefined, -30, 30, undefined, -30, 30],
      [StoneType.amber]: [90, -30, 30, 90, -30, 30],
    },
    flat: {
      [StoneType.sapphire]: [30],
      [StoneType.emerald]: [30, undefined, 60, 30, undefined, 60],
      [StoneType.amber]: [120, undefined, 60, 120, undefined, 60],
    },
  }

  private routeTileIdToEdgeMap: Record<keyof typeof RouteTiles, [Edge, Edge, Edge, Edge, Edge, Edge]> = {
    'l-0': [4, 3, 5, 1, 0, 2],
    'l-60': [2, 4, 0, 5, 1, 3],
    'l-120': [3, 5, 4, 0, 2, 1],
    'h-0': [4, 5, 3, 2, 0, 1],
    'h-60': [4, 2, 1, 5, 0, 3],
    'h-120': [1, 0, 4, 5, 2, 3],
    'h-180': [5, 3, 4, 1, 2, 0],
    'h-240': [2, 3, 0, 1, 5, 4],
    'h-300': [2, 5, 0, 4, 3, 1],
    't-0': [1, 0, 5, 4, 3, 2],
    't-60': [5, 4, 3, 2, 1, 0],
    't-120': [3, 2, 1, 0, 5, 4],
    's-0': [5, 2, 1, 4, 3, 0],
    's-60': [1, 0, 3, 2, 5, 4],
    c: [3, 4, 5, 0, 1, 2],

    'l-0_': [0, 0, 0, 0, 0, 0],
    'l-60_': [0, 0, 0, 0, 0, 0],
    'l-120_': [0, 0, 0, 0, 0, 0],
    'h-0_': [0, 0, 0, 0, 0, 0],
    'h-60_': [0, 0, 0, 0, 0, 0],
    'h-120_': [0, 0, 0, 0, 0, 0],
    'h-180_': [0, 0, 0, 0, 0, 0],
    'h-240_': [0, 0, 0, 0, 0, 0],
    'h-300_': [0, 0, 0, 0, 0, 0],
    't-0_': [0, 0, 0, 0, 0, 0],
    't-60_': [0, 0, 0, 0, 0, 0],
    't-120_': [0, 0, 0, 0, 0, 0],
    's-0_': [0, 0, 0, 0, 0, 0],
    's-60_': [0, 0, 0, 0, 0, 0],
    c_: [0, 0, 0, 0, 0, 0],
  }


  private getRotate = (type: StoneType) => (edge: Edge): string | undefined => {
    const rotate = this.stoneAngleMap[this.orientationType][type]
    return rotate[edge] !== undefined ? ` rotate(${rotate[edge]}deg)` : undefined
  }

  private edgeToShiftMap(type: StoneType): Record<Edge, [string, string, string?]> {
    const x = this.isPointy ? 1.5 : 1.8
    const y = this.isPointy ? 2.75 : 3
    const r = this.getRotate(type)

    return this.isPointy ? {
      0: [` + var(--R) / ${x}`, /*--->*/ '' /*<---*/, r(0)],
      5: [` + var(--R) / ${y}`, ` + var(--R) / ${x}`, r(1)],
      4: [` + var(--R) / ${-y}`, ` + var(--R) / ${x}`, r(2)],
      3: [` + var(--R) / ${-x}`, /*--->*/ '' /*<---*/, r(3)],
      2: [` + var(--R) / ${-y}`, ` + var(--R) / ${-x}`, r(4)],
      1: [` + var(--R) / ${y}`, ` + var(--R) / ${-x}`, r(5)],
    } : {
      0: [` + var(--R) / ${x}`, ` + var(--R) / ${y}`, r(0)],
      5: [ /* ---------> */ '', ` + var(--R) / ${x * this.ratio}`, r(1)],
      4: [` + var(--R) / ${-x}`, ` + var(--R) / ${y}`, r(2)],
      3: [` + var(--R) / ${-x}`, ` + var(--R) / ${-y}`, r(3)],
      2: [ /* ---------> */ '', ` + var(--R) / ${-x * this.ratio}`, r(4)],
      1: [` + var(--R) / ${x}`, ` + var(--R) / ${-y}`, r(5)],
    }
  }

  private getTransformCSS(q: number, r: number, [x1 = '', y1 = '', r1 = ''] = []): CSSProperties {
    const { x, y } = this.renderLayout.hexToPixel(this.toHex(q, r))
    return {
      transform: `translate(${[
        `calc(${x - 1} * var(--R)${x1})`,
        `calc(${y - this.ratio} * var(--R)${y1})`,
      ].join(', ')})${r1}`,
    }
  }

  getStoneCSS = (id: StoneIds): CSSProperties => {
    const [type, q, r, edge] = this.stones[id]
    return this.getTransformCSS(q, r, this.edgeToShiftMap(type)[edge])
  }

  private cssBgUrl = (url: string): CSSProperties => ({
    backgroundImage: `url(${url})`,
  })

  getBackgroundUrl(id: string): CSSProperties {
    const tile = this.tiles[id].tile

    return {
      // ...this.getTransformCSS(this.tiles[id].hex.q, this.tiles[id].hex.r),
      ...this.cssBgUrl([
        svg,
        '#',
        (tile !== undefined && AllTiles[tile] && AllTiles[tile]) || '_',
      ].join('')),
    }
  }

  get playerMoveRouteTile(): CSSProperties | undefined {
    if (this.playerMove[1]) {
      return this.cssBgUrl([svg, '#', this.playerMoveTile].join(''))
    }
    return undefined
  }

  private unHover() {
    delete this.tiles[this.hoveredTile].hovered
    delete this.tiles[this.hoveredTile].tile
  }

  private hover() {
    this.tiles[this.hoveredTile].hovered = true
    // @ts-ignore FIXME
    this.tiles[this.hoveredTile].tile = RouteTiles[[this.playerMoveTile, '_'].join('')]
  }

  private get isRouteTile(): boolean {
    return this.tiles[this.hoveredTile] && this.tiles[this.hoveredTile].type === HexType.route
  }

  nextMove = () => {
    const index = this.playersStore.entries.findIndex(([, { id }]) => id === this.playerMove[0])
    const keys = Object.keys(this.playersStore.players)
    const nextKey = parseInt(keys[keys.length - 1 > index ? index + 1 : 0], 10)
    this.playerMove = [this.playersStore.players[nextKey].id, this.randomTile]
  }

  onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (this.preSit) {
      return
    }
    const rect = e.currentTarget.getBoundingClientRect() as DOMRect
    const hex = this.layout.pixelToHex({ x: e.pageX - rect.x, y: e.pageY - rect.y }).round()
    if (hex.id !== this.hoveredTile) {
      if (this.tiles[this.hoveredTile] && this.tiles[this.hoveredTile].hovered) {
        this.unHover()
      }
      this.hoveredTile = hex.id
      if (this.isRouteTile && this.tiles[this.hoveredTile].tile === undefined) {
        this.hover()
      }
    }
  }

  onClick = () => {
    const tile = this.tiles[this.hoveredTile]

    if (this.preSit || !this.isRouteTile || !tile.hovered) {
      return
    }

    const hex = tile.hex
    const directions = [...Array(6).keys()]
    const directionsWithStones = directions.filter((direction) => {
      const { type, tile, stones } = this.tiles[hex.neighbor(direction).id]
      return [HexType.route, HexType.treasure].indexOf(type) !== -1
        && tile !== undefined
        && stones !== undefined
        && stones.length
        && stones.some(([, e]) => (direction + 3) % 6 === e)
    })

    directionsWithStones.forEach((direction) => {
      const neighbor = this.tiles[hex.neighbor(direction).id]

      console.log(toJS(neighbor))

      if (neighbor.stones !== undefined && neighbor.stones.length) {
        const index = neighbor.stones.findIndex(([, e]) => (direction + 3) % 6 === e)
        const stone = neighbor.stones[index]
        const stoneId = stone[0]
        const stoneEdge = stone[1]

        if (tile.tile) {
          const routeTile = RouteTiles[tile.tile].slice(0, -1) as keyof typeof RouteTiles
          const newEdge = this.routeTileIdToEdgeMap[routeTile][(stoneEdge + 3) % 6]

          if (tile.stones === undefined) {
            tile.stones = []
          }

          tile.stones.push([stoneId, newEdge])

          this.stones[stoneId][1] = hex.q
          this.stones[stoneId][2] = hex.r
          this.stones[stoneId][3] = newEdge

          neighbor.stones.splice(index, 1)
          if (neighbor.stones.length === 0) {
            delete neighbor.stones
          }
        }
      }
    })

    this.saveTiles()
    this.storage.set('stones', this.stones)

    this.preSit = true
  }

  cancelPreSitButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.cancelPreSit()
  }

  cancelPreSit = () => {
    this.preSit = false
    this.unHover()
    this.hoveredTile = ''
  }

  applySitButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.applySit()
  }

  applySit = () => {
    this.preSit = false
    // @ts-ignore FIXME
    this.tiles[this.hoveredTile].tile = RouteTiles[this.playerMoveTile]
    delete this.tiles[this.hoveredTile].hovered
    this.saveTiles()
    this.nextMove()
  }

  rotateLeftButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.rotateLeft()
  }

  rotateLeft = () => {
    if (this.playerMove[1] && !this.isRouteCrossroad) {
      const [tile, angle] = this.playerMove[1].split('-') as [TileNames, string]
      const angles = this.tileNameToAngle[tile]
      const index = this.tileNameToAngle[tile].findIndex((a) => a === parseInt(angle, 10) as Angle)
      const nextAngle = angles[index === angles.length - 1 ? 0 : index + 1]
      const nextTile = [tile, nextAngle].join('-')
      this.playerMove = [this.playerMove[0], nextTile]
      // @ts-ignore FIXME
      this.tiles[this.hoveredTile].tile = RouteTiles[[this.playerMoveTile, '_'].join('')]
    }
  }

  rotateRightButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.rotateRight()
  }

  rotateRight = () => {
    if (this.playerMove[1] && !this.isRouteCrossroad) {
      const [tile, angle] = this.playerMove[1].split('-') as [TileNames, string]
      const angles = this.tileNameToAngle[tile]
      const index = this.tileNameToAngle[tile].findIndex((a) => a === parseInt(angle, 10) as Angle)
      const nextAngle = angles[index === 0 ? angles.length - 1 : index - 1]
      const nextTile = [tile, nextAngle].join('-')
      this.playerMove = [this.playerMove[0], nextTile]
      if (this.tiles[this.hoveredTile]) {
        // @ts-ignore FIXME
        this.tiles[this.hoveredTile].tile = RouteTiles[[this.playerMoveTile, '_'].join('')]
      }
    }
  }

  get isRouteCrossroad() {
    return this.playerMove[1] === 'c'
  }

  private toHex = (q: number, r: number) => new Hex(q, r, (q + r) * -1)

  private objToHex = ({ q, r }: { q: number; r: number }) => this.toHex(q, r)

  private generateTiles(data: TileItems<AllT>, type: HexType): Tiles {
    const res: Tiles = {}
    data.forEach(([q, r, tile, stones]) => {
      const hex = this.toHex(q, r)
      res[hex.id] = {
        hex,
        type,
        ...(tile !== undefined ? { tile } : {}),
        ...(stones !== undefined && stones.length ? { stones } : {}),
      }
    })
    return res
  }

  private readonly corners: TileItems<CornersTiles> = [
    [6, -3, CornersTiles['c-r']],
    [-6, 3, CornersTiles['c-l']],
    [-3, -3, CornersTiles['c-t-l']],
    [3, -6, CornersTiles['c-t-r']],
    [3, 3, CornersTiles['c-b-r']],
    [-3, 6, CornersTiles['c-b-l']],
  ]

  private readonly emptyLines: TileItems<LineEmptyTiles> = [
    [-1, -4, LineEmptyTiles['le-t']],
    [1, -5, LineEmptyTiles['le-t']],
    [4, -5, LineEmptyTiles['le-l-t']],
    [5, -4, LineEmptyTiles['le-l-t']],
    [5, -1, LineEmptyTiles['le-l-b']],
    [4, 1, LineEmptyTiles['le-l-b']],
    [1, 4, LineEmptyTiles['le-b']],
    [-1, 5, LineEmptyTiles['le-b']],
    [-4, 5, LineEmptyTiles['le-r-b']],
    [-5, 4, LineEmptyTiles['le-r-b']],
    [-5, 1, LineEmptyTiles['le-r-t']],
    [-4, -1, LineEmptyTiles['le-r-t']],
  ]

  private readonly treasures: TileItems<TreasureT> = [
    /* 0 */ [4, 0, TreasureT['tr-t-l'], [[StoneIds.amber0, 3]]],
    /* 1 */ [-4, 0, TreasureT['tr-b-r'], [[StoneIds.amber1, 0]]],
    /* 2 */ [-4, 4, TreasureT['tr-t-r'], [[StoneIds.amber2, 1]]],
    /* 3 */ [0, -4, TreasureT['tr-b'], [[StoneIds.amber3, 5]]],
    /* 4 */ [0, 4, TreasureT['tr-t'], [[StoneIds.amber4, 2]]],
    /* 5 */ [4, -4, TreasureT['tr-b-l'], [[StoneIds.amber5, 4]]],

    [0, 0, TreasureT.center, []],
  ]

  private readonly gateways: TileItems<GatewayTiles> = [
    [-5, 2, GatewayTiles['g-l']],
    [-5, 3, GatewayTiles['g-l']],
    [-2, -3, GatewayTiles['g-t-l']],
    [-3, -2, GatewayTiles['g-t-l']],
    [2, -5, GatewayTiles['g-t-r']],
    [3, -5, GatewayTiles['g-t-r']],
    [5, -3, GatewayTiles['g-r']],
    [5, -2, GatewayTiles['g-r']],
    [3, 2, GatewayTiles['g-b-r']],
    [2, 3, GatewayTiles['g-b-r']],
    [-3, 5, GatewayTiles['g-b-l']],
    [-2, 5, GatewayTiles['g-b-l']],
  ]

  private readonly routes: TileItems<RouteTiles> = [
    [-4, 1], [-4, 2], [-4, 3],
    [-3, -1], [-3, 0], [-3, 1], [-3, 2], [-3, 3], [-3, 4],
    [-2, -2], [-2, -1], [-2, 0], [-2, 1], [-2, 2], [-2, 3], [-2, 4],
    [-1, -3], [-1, -2], [-1, -1], [-1, 0], [-1, 1], [-1, 2], [-1, 3], [-1, 4],
    [0, -3], [0, -2], [0, -1], [0, 1], [0, 2], [0, 3],
    [1, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3],
    [2, -4], [2, -3], [2, -2], [2, -1], [2, 0], [2, 1], [2, 2],
    [3, -3], [3, -4], [3, -2], [3, -1], [3, 0], [3, 1],
    [4, -3], [4, -2], [4, -1],
  ]

  private readonly _tiles: Tiles = {
    ...this.generateTiles(this.corners, HexType.corner),
    ...this.generateTiles(this.emptyLines, HexType.decorator),
    ...this.generateTiles(this.gateways, HexType.gateway),
    ...this.generateTiles(this.treasures, HexType.treasure),
    ...this.generateTiles(this.routes, HexType.route),
  }

  tiles: Tiles = {
    ...this.generateTiles(this.corners, HexType.corner),
    ...this.generateTiles(this.emptyLines, HexType.decorator),
    ...this.generateTiles(this.gateways, HexType.gateway),
    ...this.generateTiles(
      // this.storage.getOrApply<TileItems<TreasureT>>('treasure-tiles', () => this.treasures),
      this.treasures,
      HexType.treasure,
    ),
    ...this.generateTiles(
      this.storage.getOrApply<TileItems<RouteTiles>>('route-tiles', () => this.routes),
      HexType.route,
    ),
  }

  get tileEntries(): [string, Tile][] {
    return Object.entries(this.tiles)
  }

  private saveTiles() {
    const routeTiles: SavedTilesValue[] = []
    const treasureTiles: SavedTilesValue[] = []
    this.tileEntries.forEach(([, { hex: { q, r }, tile, type, stones }]) => {
      if (type === HexType.route) {
        const arr: SavedTilesValue = [q, r]
        if (tile !== undefined) {
          arr.push(tile)
        }
        routeTiles.push(arr)
      }
      if (type === HexType.treasure) {
        const arr: SavedTilesValue = [q, r, tile]
        if (stones !== undefined) {
          arr.push(stones)
        }
        treasureTiles.push(arr)
      }
    })
    this.storage.set('route-tiles', routeTiles)
    this.storage.set('treasure-tiles', treasureTiles)
  }

  private _gates: Record<number, Record<number, number>> = {
    2: { 1: 0, 2: 0, 3: 1, 4: 1, 5: 0, 6: 0, 7: 1, 8: 1, 9: 0, 10: 0, 11: 1, 12: 1 },
    3: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 2, 6: 2, 7: 2, 8: 0, 9: 1, 10: 1, 11: 1, 12: 2 },
    4: { 1: 0, 2: 1, 3: 1, 4: 2, 5: 0, 6: 3, 7: 3, 8: 1, 9: 2, 10: 0, 11: 2, 12: 3 },
  }

  get gates(): Record<number, number> {
    return this._gates[this.playersStore.players.length]
  }

  getGateway(position: number): PlayerId {
    return this.playersStore.players[this.gates[position]].id
  }

  // *- Stones - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  private getStoneProps(treasureIndex: number, type: StoneType): Stone {
    const [q, r, , [[, edge]]] = this.treasures[treasureIndex]
    return [type, q, r, edge]
  }

  private _stones: Stones = {
    [StoneIds.sapphire]: [StoneType.sapphire, 0, 0, 0],
    [StoneIds.emerald0]: [StoneType.emerald, 0, 0, 5],
    [StoneIds.emerald1]: [StoneType.emerald, 0, 0, 1],
    [StoneIds.emerald2]: [StoneType.emerald, 0, 0, 2],
    [StoneIds.emerald3]: [StoneType.emerald, 0, 0, 3],
    [StoneIds.emerald4]: [StoneType.emerald, 0, 0, 4],

    [StoneIds.amber0]: this.getStoneProps(0, StoneType.amber),
    [StoneIds.amber1]: this.getStoneProps(1, StoneType.amber),
    [StoneIds.amber2]: this.getStoneProps(2, StoneType.amber),
    [StoneIds.amber3]: this.getStoneProps(3, StoneType.amber),
    [StoneIds.amber4]: this.getStoneProps(4, StoneType.amber),
    [StoneIds.amber5]: this.getStoneProps(5, StoneType.amber),
  }

  stones: Stones = this.storage.getOrApply<Stones>('stones', () => this._stones)

  get stonesEntries(): StonesEntries {
    // @ts-ignore FIXME
    return Object.entries(this._stones) as StonesEntries
  }

}
