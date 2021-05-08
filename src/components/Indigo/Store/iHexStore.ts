import { Layout } from '../Hexagons/Layout'
import { Orientation } from '../Hexagons/Orientation'
import { OrientationType, PlayerId, PlayerMove, StoneIds, Stones, StonesEntries, Tile, Tiles } from '../types'
import { iGamePhaseStore } from './GamePhase'
import { iPlayersStore } from './PlayersStore'
import { CSSProperties, MouseEvent } from 'react'

export interface iHexStore {
  layout: Layout
  renderLayout: Layout
  orientation: Orientation
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
  tileActionsPositionCSS: CSSProperties
  preSit: boolean
  stones: Stones
  stonesEntries: StonesEntries
  isRouteCrossroad: boolean

  hoveredId: string | null

  getTmpCSS: CSSProperties

  dispose(): void

  restart(): void

  nextMove(): void

  onMouseMove(event: MouseEvent<HTMLDivElement>): void

  debounce(...args: any[]): void

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

  getBackgroundUrlById(id: string): CSSProperties

  startGame(): void

  getGateway(position: number): PlayerId

  getStoneStyle(id: StoneIds): CSSProperties
}
