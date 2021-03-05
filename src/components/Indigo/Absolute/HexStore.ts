import { MouseEvent } from 'react'
import { makeAutoObservable } from 'mobx'
import { Layout } from '../Hexagons/Layout'
import { Point } from '../Hexagons/Point'
import { Orientation } from '../Hexagons/Orientation'
import { HexType } from '../Store/Store'
import { Hex } from '../Hexagons/Hex'
import {
  AllT,
  AllTiles,
  CornersTiles,
  GatewayTiles,
  LineEmptyTiles,
  OrientationType,
  Tile,
  TileItems,
  TreasureT,
} from '../Ids'
import { debounce } from '../../../helpers/debounce'
import { getOrApply } from '../Store/getItem'
import { setItem } from '../Store/setItem'
import svg from '../hex.svg'

export interface iHexStore {
  layout: Layout
  orientation: Orientation
  hoveredTile: string
  arenaElement: HTMLDivElement | null
  R: number
  isPointy: boolean
  tiles: Record<string, Tile>
  orientationType: OrientationType

  dispose(): void

  onMouseMove(event: MouseEvent<HTMLDivElement>): void

  toggleOrientation(): void

  getBackgroundUrl(id: string): string
}

export class HexStore implements iHexStore {

  private readonly ratio = 0.8660254

  private width = 0

  private height = 0

  private largeSide = 9

  private smallSide = 9 * this.ratio

  constructor() {
    makeAutoObservable(this)
    this.appendStyles()
  }

  private appendStyles() {
    window.setTimeout(() => {
      const head = document.getElementsByTagName('head')[0]
      if (head) {
        const style = document.createElement('style')
        style.setAttribute('data-r-q', '')
        style.innerHTML = `${this.generateCoords('pointy')}\n${this.generateCoords('flat')}`
        head.appendChild(style)
      }
    }, 0)
  }

  private generateCoords(orientation: OrientationType): string {
    const isPointy = orientation === 'pointy'

    const layout = new Layout(
      Layout[orientation],
      new Point(1, 1),
      new Point(
        0,
        isPointy ? this.largeSide : this.smallSide,
      ),
    )

    const arr: string[] = []

    Object.entries(this.tiles).forEach(([, { hex }]) => {
      const { x, y } = layout.hexToPixel(hex)
      arr.push(
        `.${orientation} [data-q="${hex.q}"][data-r="${hex.r}"] { transform: ${[
          `translate(${[
            `calc(${x - 1} * var(--R))`,
            `calc(${y - this.ratio} * var(--R))`,
          ].join(', ')})`,
          ...[isPointy ? `rotate(-30deg)` : ''],
        ].join(' ')}}`,
      )
    })

    return arr.join('\n')
  }

  dispose(): void {
    window.removeEventListener('resize', this.debounce)
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

  private _R = 0

  get R() {
    return this._R
  }

  set R(R) {
    this._R = R
  }

  get isPointy() {
    return this.orientation.start_angle === 0.5
  }

  private _orientation = Layout[getOrApply<OrientationType>('orientation', () => 'flat')]

  get orientation() {
    return this._orientation
  }

  set orientation(orientation) {
    this._orientation = orientation
    setItem('orientation', this.orientationType)
  }

  get orientationType(): OrientationType {
    return this.isPointy ? 'pointy' : 'flat'
  }

  toggleOrientation() {
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

  getBackgroundUrl(id: string): string {
    const tile = this.tiles[id].tile
    return `${svg}#${(tile !== undefined && AllTiles[tile] && AllTiles[tile]) || 'hex-tile-default-bg'}`
  }

  onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect() as DOMRect
    const hex = this.layout.pixelToHex({ x: e.pageX - rect.x, y: e.pageY - rect.y }).round()

    if (`${hex.q},${hex.r}` !== this.hoveredTile) {
      if (this.tiles[this.hoveredTile] && this.tiles[this.hoveredTile].hovered) {
        delete this.tiles[this.hoveredTile].hovered
      }
      this.hoveredTile = `${hex.q},${hex.r}`
      if (this.tiles[this.hoveredTile] && this.tiles[this.hoveredTile].tile === undefined) {
        this.tiles[this.hoveredTile].hovered = true
        // console.log(this.hoveredTile, toJS(this.tiles[this.hoveredTile]))

        // console.log(toJS(this.tiles))
      }
    }
  }

  private toHex = (q: number, r: number) => new Hex(q, r, (q + r) * -1)

  private generateTiles(data: [number, number, AllT?][], type: HexType): Record<string, Tile> {
    const res: Record<string, Tile> = {}
    data.forEach(([q, r, tile]) => {
      res[`${q},${r}`] = { hex: this.toHex(q, r), type, tile }
    })
    return res
  }

  private corners: TileItems<CornersTiles> = [
    [6, -3, CornersTiles['hex-tile-decorator-corner-right']],
    [-6, 3, CornersTiles['hex-tile-decorator-corner-left']],
    [-3, -3, CornersTiles['hex-tile-decorator-corner-top-left']],
    [3, -6, CornersTiles['hex-tile-decorator-corner-top-right']],
    [3, 3, CornersTiles['hex-tile-decorator-corner-bottom-right']],
    [-3, 6, CornersTiles['hex-tile-decorator-corner-bottom-left']],
  ]

  private emptyLines: TileItems<LineEmptyTiles> = [
    [-1, -4, LineEmptyTiles['hex-tile-decorator-line-empty-top']],
    [1, -5, LineEmptyTiles['hex-tile-decorator-line-empty-top']],
    [4, -5, LineEmptyTiles['hex-tile-decorator-line-empty-left-top']],
    [5, -4, LineEmptyTiles['hex-tile-decorator-line-empty-left-top']],
    [5, -1, LineEmptyTiles['hex-tile-decorator-line-empty-left-bottom']],
    [4, 1, LineEmptyTiles['hex-tile-decorator-line-empty-left-bottom']],
    [1, 4, LineEmptyTiles['hex-tile-decorator-line-empty-bottom']],
    [-1, 5, LineEmptyTiles['hex-tile-decorator-line-empty-bottom']],
    [-4, 5, LineEmptyTiles['hex-tile-decorator-line-empty-right-bottom']],
    [-5, 4, LineEmptyTiles['hex-tile-decorator-line-empty-right-bottom']],
    [-5, 1, LineEmptyTiles['hex-tile-decorator-line-empty-right-top']],
    [-4, -1, LineEmptyTiles['hex-tile-decorator-line-empty-right-top']],
  ]

  private treasures: TileItems<TreasureT> = [
    [-4, 0, TreasureT['hex-tile-treasure-bottom-right']],
    [-4, 4, TreasureT['hex-tile-treasure-top-right']],
    [0, -4, TreasureT['hex-tile-treasure-bottom']],
    [0, 0, TreasureT['hex-tile-hex-center']],
    [0, 4, TreasureT['hex-tile-treasure-top']],
    [4, -4, TreasureT['hex-tile-treasure-bottom-left']],
    [4, 0, TreasureT['hex-tile-treasure-top-left']],
  ]

  private gateways: TileItems<GatewayTiles> = [
    [-5, 2, GatewayTiles['hex-tile-decorator-gateway-left']],
    [-5, 3, GatewayTiles['hex-tile-decorator-gateway-left']],
    [-2, -3, GatewayTiles['hex-tile-decorator-gateway-top-left']],
    [-3, -2, GatewayTiles['hex-tile-decorator-gateway-top-left']],
    [2, -5, GatewayTiles['hex-tile-decorator-gateway-top-right']],
    [3, -5, GatewayTiles['hex-tile-decorator-gateway-top-right']],
    [5, -3, GatewayTiles['hex-tile-decorator-gateway-right']],
    [5, -2, GatewayTiles['hex-tile-decorator-gateway-right']],
    [3, 2, GatewayTiles['hex-tile-decorator-gateway-bottom-right']],
    [2, 3, GatewayTiles['hex-tile-decorator-gateway-bottom-right']],
    [-3, 5, GatewayTiles['hex-tile-decorator-gateway-bottom-left']],
    [-2, 5, GatewayTiles['hex-tile-decorator-gateway-bottom-left']],
  ]

  private routes: [number, number][] = [
    [-4, 1],
    [-4, 2],
    [-4, 3],
    [-3, -1],
    [-3, 0],
    [-3, 1],
    [-3, 2],
    [-3, 3],
    [-3, 4],
    [-2, -2],
    [-2, -1],
    [-2, 0],
    [-2, 1],
    [-2, 2],
    [-2, 3],
    [-2, 4],
    [-1, -3],
    [-1, -2],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [-1, 2],
    [-1, 3],
    [-1, 4],
    [0, -3],
    [0, -2],
    [0, -1],
    [0, 1],
    [0, 2],
    [0, 3],
    [1, -4],
    [1, -3],
    [1, -2],
    [1, -1],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [2, -4],
    [2, -3],
    [2, -2],
    [2, -1],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, -3],
    [3, -4],
    [3, -2],
    [3, -1],
    [3, 0],
    [3, 1],
    [4, -3],
    [4, -2],
    [4, -1],
  ]

  private readonly _tiles: Record<string, Tile> = {
    ...this.generateTiles(this.corners, HexType.corner),
    ...this.generateTiles(this.emptyLines, HexType.decorator),
    ...this.generateTiles(this.treasures, HexType.treasure),
    ...this.generateTiles(this.routes, HexType.route),
    ...this.generateTiles(this.gateways, HexType.gateway),
  }

  tiles: Record<string, Tile> = getOrApply<Record<string, Tile>>('tiles', () => this._tiles)
  // tiles: Record<string, Tile> = this._tiles
}
