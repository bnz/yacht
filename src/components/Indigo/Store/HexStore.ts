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
  GatewayTiles,
  HexType,
  Keys,
  LineEmptyTiles,
  OrientationType,
  PlayerId,
  PlayerMove,
  RouteTiles,
  SavedTilesValue,
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

  dispose(): void

  restart(): void

  nextMove(): void

  onMouseMove(event: MouseEvent<HTMLDivElement>): void

  onClick(): void

  cancelPreSitButton(e: MouseEvent<HTMLButtonElement>): void

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
      | 'tileNameToAngle'>(this, {
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
    })

    // if (process.env.NODE_ENV === 'development') {
    //   new __DEV__appendStyles(this.smallSide, this.largeSide, this.ratio, this.tiles)
    // }
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
    Shuriken: 6,
    Crossroad: 6,
    Turtle: 14,
    Lizard: 14,
    Human: 14,
  }

  private tileNameToAngle: Record<TileNames, Angle[]> = {
    Shuriken: [0, 60],
    Crossroad: [],
    Turtle: [0, 60, 120],
    Lizard: [0, 60, 120],
    Human: [0, 60, 120, 180, 240, 300],
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
    return this.playerMove[1] ? ['hexTile', this.playerMove[1].replace('-', '')].join('') : undefined
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
    const { x, y } = this.layout.hexToPixel(this.toHex(parseInt(_q, 10) || 0, parseInt(_r, 10) || 0))
    return { x, y }
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

  private cssBgUrl = (url: string): CSSProperties => ({
    backgroundImage: `url(${url})`,
  })

  getBackgroundUrl(id: string): CSSProperties {
    const tile = this.tiles[id].tile
    return this.cssBgUrl([
      svg,
      '#',
      (tile !== undefined && AllTiles[tile] && AllTiles[tile]) || 'hex-tile-default-bg',
    ].join(''))
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
    this.tiles[this.hoveredTile].tile = RouteTiles[[this.playerMoveTile, 'Hovered'].join('')]
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
    if (this.preSit || !this.isRouteTile || !this.tiles[this.hoveredTile].hovered) {
      return
    }

    const { hex } = this.tiles[this.hoveredTile]
    const h = this.objToHex(hex)

    const a = [...Array(6).keys()]
    .filter((i) => {
      const { type, tile } = this.tiles[h.neighbor(i).id]
      return type === HexType.route && tile !== undefined
    })
    .map((i) => {
      const n = h.neighbor(i)
      return [
        toJS(this.tiles[n.id]),
        document.querySelector(`[data-q="${n.q}"][data-r="${n.r}"]`),
      ]
    })

    console.log(a)

    this.preSit = true
  }

  cancelPreSitButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.cancelPreSit()
  }

  cancelPreSit = () => {
    this.preSit = false
    this.unHover()
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
    if (this.playerMove[1]) {
      const [tile, angle] = this.playerMove[1].split('-') as [TileNames, string]
      const angles = this.tileNameToAngle[tile]
      const index = this.tileNameToAngle[tile].findIndex((a) => a === parseInt(angle, 10) as Angle)
      const nextAngle = angles[index === angles.length - 1 ? 0 : index + 1]
      const nextTile = [tile, nextAngle].join('-')
      this.playerMove = [this.playerMove[0], nextTile]
      // @ts-ignore FIXME
      this.tiles[this.hoveredTile].tile = RouteTiles[[this.playerMoveTile, 'Hovered'].join('')]
    }
  }

  rotateRightButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.rotateRight()
  }

  rotateRight = () => {
    if (this.playerMove[1]) {
      const [tile, angle] = this.playerMove[1].split('-') as [TileNames, string]
      const angles = this.tileNameToAngle[tile]
      const index = this.tileNameToAngle[tile].findIndex((a) => a === parseInt(angle, 10) as Angle)
      const nextAngle = angles[index === 0 ? angles.length - 1 : index - 1]
      const nextTile = [tile, nextAngle].join('-')
      this.playerMove = [this.playerMove[0], nextTile]
      if (this.tiles[this.hoveredTile]) {
        // @ts-ignore FIXME
        this.tiles[this.hoveredTile].tile = RouteTiles[[this.playerMoveTile, 'Hovered'].join('')]
      }
    }
  }

  private toHex = (q: number, r: number) => new Hex(q, r, (q + r) * -1)

  private objToHex = ({ q, r }: { q: number; r: number }) => this.toHex(q, r)

  private generateTiles(data: TileItems<AllT>, type: HexType): Tiles {
    const res: Tiles = {}
    data.forEach(([q, r, tile]) => {
      const hex = this.toHex(q, r)
      res[hex.id] = {
        hex,
        type,
        ...(tile !== undefined ? { tile } : {}),
      }
    })
    return res
  }

  private readonly corners: TileItems<CornersTiles> = [
    [6, -3, CornersTiles.hexTileDecoratorCornerRight],
    [-6, 3, CornersTiles.hexTileDecoratorCornerLeft],
    [-3, -3, CornersTiles.hexTileDecoratorCornerTopLeft],
    [3, -6, CornersTiles.hexTileDecoratorCornerTopRight],
    [3, 3, CornersTiles.hexTileDecoratorCornerBottomRight],
    [-3, 6, CornersTiles.hexTileDecoratorCornerBottomLeft],
  ]

  private readonly emptyLines: TileItems<LineEmptyTiles> = [
    [-1, -4, LineEmptyTiles.hexTileDecoratorLineEmptyTop],
    [1, -5, LineEmptyTiles.hexTileDecoratorLineEmptyTop],
    [4, -5, LineEmptyTiles.hexTileDecoratorLineEmptyLeftTop],
    [5, -4, LineEmptyTiles.hexTileDecoratorLineEmptyLeftTop],
    [5, -1, LineEmptyTiles.hexTileDecoratorLineEmptyLeftBottom],
    [4, 1, LineEmptyTiles.hexTileDecoratorLineEmptyLeftBottom],
    [1, 4, LineEmptyTiles.hexTileDecoratorLineEmptyBottom],
    [-1, 5, LineEmptyTiles.hexTileDecoratorLineEmptyBottom],
    [-4, 5, LineEmptyTiles.hexTileDecoratorLineEmptyRightBottom],
    [-5, 4, LineEmptyTiles.hexTileDecoratorLineEmptyRightBottom],
    [-5, 1, LineEmptyTiles.hexTileDecoratorLineEmptyRightTop],
    [-4, -1, LineEmptyTiles.hexTileDecoratorLineEmptyRightTop],
  ]

  private readonly treasures: TileItems<TreasureT> = [
    [-4, 0, TreasureT.hexTileTreasureBottomRight],
    [-4, 4, TreasureT.hexTileTreasureTopRight],
    [0, -4, TreasureT.hexTileTreasureBottom],
    [0, 0, TreasureT.hexTileHexCenter],
    [0, 4, TreasureT.hexTileTreasureTop],
    [4, -4, TreasureT.hexTileTreasureBottomLeft],
    [4, 0, TreasureT.hexTileTreasureTopLeft],
  ]

  private readonly gateways: TileItems<GatewayTiles> = [
    [-5, 2, GatewayTiles.hexTileDecoratorGatewayLeft],
    [-5, 3, GatewayTiles.hexTileDecoratorGatewayLeft],
    [-2, -3, GatewayTiles.hexTileDecoratorGatewayTopLeft],
    [-3, -2, GatewayTiles.hexTileDecoratorGatewayTopLeft],
    [2, -5, GatewayTiles.hexTileDecoratorGatewayTopRight],
    [3, -5, GatewayTiles.hexTileDecoratorGatewayTopRight],
    [5, -3, GatewayTiles.hexTileDecoratorGatewayRight],
    [5, -2, GatewayTiles.hexTileDecoratorGatewayRight],
    [3, 2, GatewayTiles.hexTileDecoratorGatewayBottomRight],
    [2, 3, GatewayTiles.hexTileDecoratorGatewayBottomRight],
    [-3, 5, GatewayTiles.hexTileDecoratorGatewayBottomLeft],
    [-2, 5, GatewayTiles.hexTileDecoratorGatewayBottomLeft],
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
    ...this.generateTiles(this.treasures, HexType.treasure),
    ...this.generateTiles(this.gateways, HexType.gateway),
    ...this.generateTiles(this.routes, HexType.route),
  }

  tiles: Tiles = {
    ...this.generateTiles(this.corners, HexType.corner),
    ...this.generateTiles(this.emptyLines, HexType.decorator),
    ...this.generateTiles(this.treasures, HexType.treasure),
    ...this.generateTiles(this.gateways, HexType.gateway),
    ...((): Tiles => this.generateTiles(
      this.storage.getOrApply<TileItems<RouteTiles>>('tiles', () => this.routes),
      HexType.route,
    ))(),
  }

  get tileEntries(): [string, Tile][] {
    return Object.entries(this.tiles)
  }

  private saveTiles() {
    const tilesToSave: SavedTilesValue[] = []
    this.tileEntries.forEach(([id, { hex, tile, type }]) => {
      if (type === HexType.route) {
        const arr: SavedTilesValue = [hex.q, hex.r]
        if (tile !== undefined) {
          arr.push(tile)
        }
        tilesToSave.push(arr)
      }
    })
    this.storage.set('tiles', tilesToSave)
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

}
