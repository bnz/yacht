import React, { FC } from 'react'
import { SVG} from '../SVG'
import { Uses } from '../Ids'

export type TreasureCenterTileIds = 59

export type TreasureTileIds = | 7 | 29 | 37 | 81 | 89 | 111

const tilesMap: Record<TreasureTileIds | TreasureCenterTileIds, Uses[]> = {
  /**
   * CENTER
   */
  59: ['hex-treasure-bg', 'hex-center'],

  /**
   * TREASURES
   */
  7: ['hex-treasure-bg', 'hex-treasure-bottom'],
  29: ['hex-treasure-bg', 'hex-treasure-bottom-right'],
  37: ['hex-treasure-bg', 'hex-treasure-bottom-left'],
  81: ['hex-treasure-bg', 'hex-treasure-top-right'],
  89: ['hex-treasure-bg', 'hex-treasure-top-left'],
  111: ['hex-treasure-bg', 'hex-treasure-top'],
}

interface TreasureTileProps {
  id: TreasureTileIds | TreasureCenterTileIds
}

export const TreasureTile: FC<TreasureTileProps> = ({ id }) => {
  // console.log('TreasureTile:::render')

  return (
    <SVG uses={tilesMap[id]} />
  )
}
