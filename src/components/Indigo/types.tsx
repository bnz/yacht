import { Hex } from './Hexagons/Hex'

export enum PlayerId {
  Player1 = 'p-1',
  Player2 = 'p-2',
  Player3 = 'p-3',
  Player4 = 'p-4',
}

export interface Player {
  id: PlayerId
}

export type Players = Player[]

export enum PlayerColors {
  Player1 = '#ffbe37',
  Player2 = '#388e3c',
  Player3 = '#e6ebf0',
  Player4 = '#ff6955',
}

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

export type OrientationType = 'flat' | 'pointy'

export enum TreasureT {
  'hexTileHexCenter',
  'hexTileTreasureBottom',
  'hexTileTreasureBottomLeft',
  'hexTileTreasureBottomRight',
  'hexTileTreasureTop',
  'hexTileTreasureTopLeft',
  'hexTileTreasureTopRight',
}

export enum CornersTiles {
  'hexTileDecoratorCornerRight' = 7,
  'hexTileDecoratorCornerLeft',
  'hexTileDecoratorCornerTopLeft',
  'hexTileDecoratorCornerTopRight',
  'hexTileDecoratorCornerBottomLeft',
  'hexTileDecoratorCornerBottomRight',
}

export enum LineEmptyTiles {
  'hexTileDecoratorLineEmptyTop' = 13,
  'hexTileDecoratorLineEmptyBottom',
  'hexTileDecoratorLineEmptyLeftTop',
  'hexTileDecoratorLineEmptyLeftBottom',
  'hexTileDecoratorLineEmptyRightBottom',
  'hexTileDecoratorLineEmptyRightTop',
}

export enum GatewayTiles {
  'hexTileDecoratorGatewayLeft' = 19,
  'hexTileDecoratorGatewayTopLeft',
  'hexTileDecoratorGatewayTopRight',
  'hexTileDecoratorGatewayRight',
  'hexTileDecoratorGatewayBottomRight',
  'hexTileDecoratorGatewayBottomLeft',
}

export type Tiles = Record<string, Tile>

export type TileNames =
  | 'shuriken'
  | 'crossroad'
  | 'turtle'
  | 'lizard'
  | 'human'

export enum HexType {
  decorator,
  corner,
  treasure,
  route,
  seat,
  gateway,
  center
}


// export type RouteTiles =
//   | 'hex-tile-lizard-0'
//   | 'hex-tile-lizard-60'
//   | 'hex-tile-lizard-120'

export enum RouteTiles {
  hexTileCrossroad = 25,
  hexTileCrossroadHovered
}

export const AllTiles = {
  ...CornersTiles,
  ...TreasureT,
  ...LineEmptyTiles,
  ...GatewayTiles,
  ...RouteTiles,
}

export type AllT = CornersTiles | TreasureT | LineEmptyTiles | GatewayTiles | RouteTiles

export type TileItems<T> = [number, number, T][]

export interface Tile {
  hex: Hex
  type: HexType
  tile?: AllT
  hovered?: boolean
  preSit?: boolean
}
