import React, { FC } from 'react'
import { SVG, Uses } from '../SVG'

const tilesMap: { [id: number]: Uses[] } = {
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
  id: number
}

export const TreasureTile: FC<TreasureTileProps> = ({ id }) => (
  <SVG uses={tilesMap[id]} />
)
