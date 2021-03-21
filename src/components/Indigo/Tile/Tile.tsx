import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import './Tile.css'

// import './TileCoords.css'

interface TileProps {
  id: string
}

export const Tile: FC<TileProps> = observer(({ id }) => {
  const store = useStore()
  const hex = store.tiles[id].hex

  // console.log('Tile:::render')

  return (
    <div
      data-q={hex.q}
      data-r={hex.r}
      style={store.getBackgroundUrl(id)}
    />
  )
})
