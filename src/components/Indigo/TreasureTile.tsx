import React, { FC } from 'react'
import { SVG, tilesMap } from './SVG'

interface TreasureTileProps {
  id: number
}

export const TreasureTile: FC<TreasureTileProps> = ({ id }) => {
  return (
    <SVG uses={tilesMap[id]} />
  )
}
