import { Uses } from './SVG'
import { PlayerId } from './Players/Player'

export type EmptyIds =
  | 1 | 2 | 3 | /* 4 */ 5 /* 6, 7, 8 */ | 9 /* 10 */ | 11 | 12 | 13
  | 14 | 15 | 16 | 17 /* 18...22 */ | 23 | 24 | 25 | 26
  | 27 | 28 /* 29...37 */ | 38 | 39
  | 40 | 41 /* 42...50 */ | 51 | 52
  | 53 | 54 /* 55...63 */ | 64 | 65
  | 66 | 67 /* 68...76 */ | 77 | 78
  | 79 | 80 /* 81...89 */ | 90 | 91
  | 92 | 93 | 94 /* 95...101 */ | 102 | 103 | 104
  | 105 | 106 | 107 | 108 | 109 /* 110...112 */ | 113 | 114 | 115 | 116 | 117
  | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130
  | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143

export const emptyIds: EmptyIds[] = [
  1, 2, 3, 5, 9, 11, 12, 13,
  14, 15, 16, 17, 23, 24, 25, 26,
  27, 28, 38, 39,
  40, 41, 51, 52,
  53, 54, 64, 65,
  66, 67, 77, 78,
  79, 80, 90, 91,
  92, 93, 94, 102, 103, 104,
  105, 106, 107, 108, 109, 113, 114, 115, 116, 117,
  118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
  131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
]

export type TreasureCenterTileIds = 59

export const treasureCenterTileIds: TreasureCenterTileIds[] = [
  59,
]

export type TreasureTilesIds =
  | 7 | 29 | 37 | 81 | 89 | 111

export const treasureTilesIds: TreasureTilesIds[] = [
  7,
  29, 37,
  81, 89,
  111,
]
export type GatewaysIds =
  | 5 | 17 | 9 | 23 | 64 | 77 | 113 | 114 | 54 | 67 | 108 | 109

export enum PlayerColors {
  Player1 = '#ffbe37',
  Player2 = '#5f87b9',
  Player3 = '#e6ebf0',
  Player4 = '#ff6955',
}

export const playerIdToColorMap: Record<string, PlayerColors> = {
  [PlayerId.Player1]: PlayerColors.Player1,
  [PlayerId.Player2]: PlayerColors.Player2,
  [PlayerId.Player3]: PlayerColors.Player3,
  [PlayerId.Player4]: PlayerColors.Player4,
}

export const gateways: Record<number, Record<GatewaysIds, PlayerColors>> = {
  2: {
    5: PlayerColors.Player1,
    17: PlayerColors.Player1,
    9: PlayerColors.Player2,
    23: PlayerColors.Player2,
    64: PlayerColors.Player1,
    77: PlayerColors.Player1,
    113: PlayerColors.Player2,
    114: PlayerColors.Player2,
    54: PlayerColors.Player1,
    67: PlayerColors.Player1,
    108: PlayerColors.Player2,
    109: PlayerColors.Player2,
  },
  3: {
    5: PlayerColors.Player1,
    17: PlayerColors.Player1,
    9: PlayerColors.Player1,
    23: PlayerColors.Player2,
    64: PlayerColors.Player3,
    77: PlayerColors.Player3,
    113: PlayerColors.Player3,
    114: PlayerColors.Player1,
    54: PlayerColors.Player2,
    67: PlayerColors.Player2,
    108: PlayerColors.Player2,
    109: PlayerColors.Player3,
  },
  4: {
    5: PlayerColors.Player1,
    17: PlayerColors.Player2,
    9: PlayerColors.Player2,
    23: PlayerColors.Player3,
    64: PlayerColors.Player1,
    77: PlayerColors.Player4,
    113: PlayerColors.Player4,
    114: PlayerColors.Player2,
    54: PlayerColors.Player3,
    67: PlayerColors.Player1,
    108: PlayerColors.Player3,
    109: PlayerColors.Player4,
  },
}

export type CornerIds = 4 | 10 | 53 | 65 | 121 | 127

export type EmptyLineIds = 6 | 8 | 24 | 51 | 80 | 94 | 90 | 102 | 123 | 125 | 16 | 41

export type DecoratorsIds = CornerIds | EmptyLineIds

export const decorators: Record<DecoratorsIds, Uses> = {
  /**
   * CORNERS
   */
  4: 'hex-decorator-corner-top-left',
  10: 'hex-decorator-corner-top-right',
  53: 'hex-decorator-corner-left',
  65: 'hex-decorator-corner-right',
  121: 'hex-decorator-corner-bottom-left',
  127: 'hex-decorator-corner-bottom-right',

  /**
   * EMPTY LINES
   */
  6: 'hex-decorator-line-empty-top',
  8: 'hex-decorator-line-empty-top',
  16: 'hex-decorator-line-empty-right-top',
  24: 'hex-decorator-line-empty-left-top',
  41: 'hex-decorator-line-empty-right-top',
  51: 'hex-decorator-line-empty-left-top',
  80: 'hex-decorator-line-empty-right-bottom',
  94: 'hex-decorator-line-empty-right-bottom',
  90: 'hex-decorator-line-empty-left-bottom',
  102: 'hex-decorator-line-empty-left-bottom',
  123: 'hex-decorator-line-empty-bottom',
  125: 'hex-decorator-line-empty-bottom',
}

export type GatewaysBgIds =
  | 5 | 9 | 17 | 23 | 54 | 67 | 64 | 77 | 113 | 114 | 108 | 109

export const withLine: Record<GatewaysBgIds, Uses> = {
  5: 'hex-decorator-gateway-top-left',
  17: 'hex-decorator-gateway-top-left',
  9: 'hex-decorator-gateway-top-right',
  23: 'hex-decorator-gateway-top-right',
  54: 'hex-decorator-gateway-left',
  67: 'hex-decorator-gateway-left',
  64: 'hex-decorator-gateway-right',
  77: 'hex-decorator-gateway-right',
  113: 'hex-decorator-gateway-bottom-right',
  114: 'hex-decorator-gateway-bottom-right',
  108: 'hex-decorator-gateway-bottom-left',
  109: 'hex-decorator-gateway-bottom-left',
}
