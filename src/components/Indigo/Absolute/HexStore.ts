import { MouseEvent } from 'react'
import { makeAutoObservable } from 'mobx'
import { Layout } from '../Hexagons/Layout'
import { Point } from '../Hexagons/Point'
import { Orientation } from '../Hexagons/Orientation'
import { HexType } from '../Store/Store'
import { Hex } from '../Hexagons/Hex'
import { Tile } from '../Ids'
import { debounce } from '../../../helpers/debounce'

export interface iHexStore {
  layout: Layout
  orientation: Orientation
  hoveredTile: string
  arenaElement: HTMLDivElement | null
  R: number
  isPointy: boolean

  tiles: Tile[]

  dispose(): void

  onMouseMove(event: MouseEvent<HTMLDivElement>): void

  toggleOrientation(): void
}

export class HexStore implements iHexStore {

  private readonly ratio = 0.8660254

  constructor() {
    makeAutoObservable(this)

    // console.log(this.generateCoords('pointy'))
    // console.log(this.generateCoords('flat'))
  }

  private generateCoords(orientation: 'flat' | 'pointy'): string {
    const layout = new Layout(
      Layout[orientation],
      new Point(1, 1),
      new Point(
        0,
        orientation === 'flat' ? this.smallSide : this.largeSide,
      ),
    )

    const arr: string[] = []

    this.tiles.forEach(({ hex }) => {
      const { x, y } = layout.hexToPixel(hex)
      arr.push(
        `.${orientation} [data-q="${hex.q}"][data-r="${hex.r}"] {\n    transform: ${[
          `translate(${[
            `calc(${x - 1} * var(--R))`,
            `calc(${y - this.ratio} * var(--R))`,
          ].join(', ')})`,
          ...[orientation === 'pointy' ? 'rotate(-30deg)' : ''],
        ].join(' ')}\n}\n`,
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

  private onWindowResize() {
    const [width, height] = this.elSizes
    if (this.width !== width || this.height !== height) {
      this.recalc(width, height)
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

  private recalc(width: number, height: number) {
    this.width = width
    this.height = height
    const withSize = this.isPointy ? this.smallSide * 2 : this.largeSide * 2
    const heightSize = this.isPointy ? this.largeSide * 2 : this.smallSide * 2
    this.R = Math.min(width / withSize, height / heightSize)
    this.updateLayout()
  }

  private debounce = debounce(() => this.onWindowResize(), 400)

  private _hoveredTile = ''

  get hoveredTile() {
    return this._hoveredTile
  }

  set hoveredTile(hoveredTile) {
    this._hoveredTile = hoveredTile
  }

  private width = 0

  private height = 0

  private largeSide = 7

  private smallSide = 9 * this.ratio

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

  private _orientation = Layout.pointy

  get orientation() {
    return this._orientation
  }

  set orientation(orientation) {
    this._orientation = orientation
  }

  toggleOrientation() {
    this.orientation = this.isPointy ? Layout.flat : Layout.pointy
    const [width, height] = this.elSizes
    this.recalc(width, height)
  }

  private updateLayout() {
    this.layout = new Layout(
      this.orientation,
      new Point(this.R, this.R),
      new Point(
        this.width / 2,
        this.isPointy
          ? this.R * this.largeSide
          : this.R * this.smallSide,
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

  set layout(flat) {
    this._layout = flat
  }

  onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect() as DOMRect
    const hex = this.layout.pixelToHex({ x: e.pageX - rect.x, y: e.pageY - rect.y }).round()

    if (`${hex.q}|${hex.r}` !== this.hoveredTile) {
      this.hoveredTile = `${hex.q}|${hex.r}`

      // console.log(this.hoveredTile)
    }
  }

  private toHex = (q: number, r: number) => new Hex(q, r, (q + r) * -1)

  tiles: Tile[] = [
    { hex: this.toHex(-4, 0), type: HexType.treasure },
    { hex: this.toHex(-4, 1), type: HexType.route },
    { hex: this.toHex(-4, 2), type: HexType.route },
    { hex: this.toHex(-4, 3), type: HexType.route },
    { hex: this.toHex(-4, 4), type: HexType.treasure },

    { hex: this.toHex(-3, -1), type: HexType.route },
    { hex: this.toHex(-3, 0), type: HexType.route },
    { hex: this.toHex(-3, 1), type: HexType.route },
    { hex: this.toHex(-3, 2), type: HexType.route },
    { hex: this.toHex(-3, 3), type: HexType.route },
    { hex: this.toHex(-3, 4), type: HexType.route },

    { hex: this.toHex(-2, -2), type: HexType.route },
    { hex: this.toHex(-2, -1), type: HexType.route },
    { hex: this.toHex(-2, 0), type: HexType.route },
    { hex: this.toHex(-2, 1), type: HexType.route },
    { hex: this.toHex(-2, 2), type: HexType.route },
    { hex: this.toHex(-2, 3), type: HexType.route },
    { hex: this.toHex(-2, 4), type: HexType.route },

    { hex: this.toHex(-1, -3), type: HexType.route },
    { hex: this.toHex(-1, -2), type: HexType.route },
    { hex: this.toHex(-1, -1), type: HexType.route },
    { hex: this.toHex(-1, 0), type: HexType.route },
    { hex: this.toHex(-1, 1), type: HexType.route },
    { hex: this.toHex(-1, 2), type: HexType.route },
    { hex: this.toHex(-1, 3), type: HexType.route },
    { hex: this.toHex(-1, 4), type: HexType.route },

    { hex: this.toHex(0, -4), type: HexType.treasure },
    { hex: this.toHex(0, -3), type: HexType.route },
    { hex: this.toHex(0, -2), type: HexType.route },
    { hex: this.toHex(0, -1), type: HexType.route },
    { hex: this.toHex(0, 0), type: HexType.center },
    { hex: this.toHex(0, 1), type: HexType.route },
    { hex: this.toHex(0, 2), type: HexType.route },
    { hex: this.toHex(0, 3), type: HexType.route },
    { hex: this.toHex(0, 4), type: HexType.treasure },

    { hex: this.toHex(1, -4), type: HexType.route },
    { hex: this.toHex(1, -3), type: HexType.route },
    { hex: this.toHex(1, -2), type: HexType.route },
    { hex: this.toHex(1, -1), type: HexType.route },
    { hex: this.toHex(1, 0), type: HexType.route },
    { hex: this.toHex(1, 1), type: HexType.route },
    { hex: this.toHex(1, 2), type: HexType.route },
    { hex: this.toHex(1, 3), type: HexType.route },

    { hex: this.toHex(2, -4), type: HexType.route },
    { hex: this.toHex(2, -3), type: HexType.route },
    { hex: this.toHex(2, -2), type: HexType.route },
    { hex: this.toHex(2, -1), type: HexType.route },
    { hex: this.toHex(2, 0), type: HexType.route },
    { hex: this.toHex(2, 1), type: HexType.route },
    { hex: this.toHex(2, 2), type: HexType.route },

    { hex: this.toHex(3, -3), type: HexType.route },
    { hex: this.toHex(3, -4), type: HexType.route },
    { hex: this.toHex(3, -2), type: HexType.route },
    { hex: this.toHex(3, -1), type: HexType.route },
    { hex: this.toHex(3, 0), type: HexType.route },
    { hex: this.toHex(3, 1), type: HexType.route },

    { hex: this.toHex(4, -4), type: HexType.treasure },
    { hex: this.toHex(4, -3), type: HexType.route },
    { hex: this.toHex(4, -2), type: HexType.route },
    { hex: this.toHex(4, -1), type: HexType.route },
    { hex: this.toHex(4, 0), type: HexType.treasure },
  ]

}
