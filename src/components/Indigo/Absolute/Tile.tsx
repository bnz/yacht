import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from './HexProvider'
import { HexType } from '../Store/Store'
import svg from '../hex.svg'
import './Tile.css'
import './TileCoords.css'
import { stretch } from '../../../helpers/css'

interface TileProps {
  index: number
}

const map: {
  [key in HexType]: string
} = {
  [HexType.route]: 'hex-tile-huji',
  [HexType.treasure]: 'hex-tile-hex-treasure-bg',
  [HexType.center]: 'hex-tile-hex-center',
  [HexType.decorator]: '',
  [HexType.seat]: '',
  [HexType.gateway]: '',
  [HexType.corner]: '',
}

export const Tile: FC<TileProps> = observer(({ index }) => {
  const store = useStore()
  const hex = store.tiles[index].hex
  const type = store.tiles[index].type

  return (
    <div
      data-q={hex.q}
      data-r={hex.r}
      style={{ backgroundImage: `url(${svg}#${map[type]})` }}
    >
      <div style={{
        ...stretch(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'transform',
        transitionDuration: '0.5s',
        transform: `rotate(${store.isPointy ? 30 : 0}deg)`,
      }}>
        {hex.q}, {hex.r}
      </div>
    </div>
  )
})

Tile.displayName = 'Tile'
