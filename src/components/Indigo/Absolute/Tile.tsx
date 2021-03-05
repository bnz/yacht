import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from './HexProvider'
import './Tile.css'
// import './TileCoords.css'
import { stretch } from '../../../helpers/css'

interface TileProps {
  id: string
}

export const Tile: FC<TileProps> = observer(({ id }) => {
  const store = useStore()
  const hex = store.tiles[id].hex
  const hovered = store.tiles[id].hovered

  // console.log('Tile:::RENDER')

  return (
    <div
      data-q={hex.q}
      data-r={hex.r}
      style={{
        ...(hovered ? {} : {
          backgroundImage: hovered ? '' : `url(${store.getBackgroundUrl(id)})`,
        }),
      }}
    >
      <div style={{
        ...stretch(),
        // display: 'flex',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {hex.q}, {hex.r}
      </div>
    </div>
  )
})
