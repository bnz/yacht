import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import './Tile.css'
import './TileCoords.css'

interface TileProps {
  id: string
}

export const Tile: FC<TileProps> = observer(({ id }) => (
  <div
    data-qr={useStore().tiles[id].hex.id}
    style={useStore().getBackgroundUrlById(id)}
  />
))
