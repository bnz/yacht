import { Hex } from './Hexagons/Hex'
import { HexType } from './Store/Store'

export type Ids =
  | 18 | 19 | 20 | 21 | 22
  | 30 | 31 | 32 | 33 | 34 | 35 | 36
  | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
  | 55 | 56 | 57 | 58 /* center*/ | 60 | 61 | 62 | 63
  | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76
  | 82 | 83 | 84 | 85 | 86 | 87 | 88
  | 95 | 96 | 97 | 98 | 99 | 100 | 101
  | 110 | 112

export type PlayerSitIds = 1 | 13 | 79 | 91

export enum PlayerId {
  Player1 = 'p-1',
  Player2 = 'p-2',
  Player3 = 'p-3',
  Player4 = 'p-4',
}

export interface Player {
  id: PlayerId
}

export type Players = Record<PlayerSitIds, Player>

export type TreasureCenterTileIds = 59

export type TreasureTilesIds =
  | 7 | 29 | 37 | 81 | 89 | 111

export type GatewaysIds =
  | 5 | 17 | 9 | 23 | 64 | 77 | 113 | 114 | 54 | 67 | 108 | 109

export enum PlayerColors {
  Player1 = '#ffbe37',
  Player2 = '#5f87b9',
  Player3 = '#e6ebf0',
  Player4 = '#ff6955',
}

export type CornerIds =
  | 4 | 10 | 53 | 65 | 121 | 127

export type EmptyLineIds =
  | 6 | 8 | 24 | 51 | 80 | 94 | 90 | 102 | 123 | 125 | 16 | 41

export type GatewaysBgIds =
  | 5 | 9 | 17 | 23 | 54 | 67 | 64 | 77 | 113 | 114 | 108 | 109

export enum GamePhase {
  PRE_GAME,
  PLAYERS_SELECTION,
  IN_PLAY,
}

export type RouteTileNames =
  | 'shuriken-0'
  | 'shuriken-60'
  | 'crossroad'
  | 'turtle-0'
  | 'turtle-60'
  | 'turtle-120'
  | 'lizard-0'
  | 'lizard-60'
  | 'lizard-120'
  | 'human-0'
  | 'human-60'
  | 'human-120'
  | 'human-180'
  | 'human-240'
  | 'human-300'

export type PlayerMove = [PlayerId, RouteTileNames | null]

export type Uses =
  | 'hex-main-bg'
  | 'hex-treasure-bg'
  | 'hex-default-bg'

  | 'hex-circle-top-left'
  | 'hex-circle-top-right'
  | 'hex-circle-center-left'
  | 'hex-circle-center-right'
  | 'hex-circle-bottom-left'
  | 'hex-circle-bottom-right'

  | 'hex-line-0'
  | 'hex-line-60'
  | 'hex-line-120'

  | 'hex-arc-top'
  | 'hex-arc-top-right'
  | 'hex-arc-top-left'
  | 'hex-arc-bottom-right'
  | 'hex-arc-bottom-left'
  | 'hex-arc-bottom'

  | 'hex-center'

  | 'hex-treasure-bottom'
  | 'hex-treasure-bottom-left'
  | 'hex-treasure-bottom-right'
  | 'hex-treasure-top'
  | 'hex-treasure-top-left'
  | 'hex-treasure-top-right'

  | 'token-place'

  | 'hex-decorator-corner-left'
  | 'hex-decorator-corner-right'
  | 'hex-decorator-corner-top-left'
  | 'hex-decorator-corner-top-right'
  | 'hex-decorator-corner-bottom-left'
  | 'hex-decorator-corner-bottom-right'


  /**
   * EMPTY LINES
   */
  | 'hex-decorator-line-empty-top'
  | 'hex-decorator-line-empty-left-top'
  | 'hex-decorator-line-empty-left-bottom'
  | 'hex-decorator-line-empty-bottom'
  | 'hex-decorator-line-empty-right-bottom'
  | 'hex-decorator-line-empty-right-top'

  /**
   * GATEWAYS
   */
  | 'hex-decorator-gateway-top-left'
  | 'hex-decorator-gateway-top-right'
  | 'hex-decorator-gateway-right'
  | 'hex-decorator-gateway-bottom-right'
  | 'hex-decorator-gateway-bottom-left'
  | 'hex-decorator-gateway-left'


export interface Tile {
  hex: Hex
  type: HexType
  rotate?: 0 | 30 | 60 | 90 | 120
}
