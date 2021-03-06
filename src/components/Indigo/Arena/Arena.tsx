/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import './Arena.css'
import { Tile } from '../Tile/Tile'
import { Seats } from '../Seats/Seats'
import { GatewaySeats } from '../GatewaySeats/GatewaySeats'
import { TileActions } from '../TileActions/TileActions'
import { Stone } from '../Stone/Stone'
import { TileHovered } from '../Tile/TileHovered'

export const Arena: FC = observer(() => {
  const store = useStore()
  const arenaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    store.arenaElement = arenaRef.current
  }, [store.arenaElement])

  return (
    <div
      ref={arenaRef}
      className={store.orientationType}
      {...(store.arenaElement !== null ? {
        style: {
          ['--R' as string]: `${store.R}px`,
        },
        onClick: store.onClick,
        onMouseMove: store.onMouseMove,
      } : {})}
    >
      {store.arenaElement === null ? null : (
        <>
          {store.tileEntries.map(([id]) => (
            <Tile key={id} id={id} />
          ))}
          <Seats />
          <GatewaySeats />
          <TileHovered />
          {store.stonesEntries.map(([id]) => (
            <Stone id={id} key={id} />
          ))}
          {store.preSit && (
            <TileActions />
          )}
        </>
      )}
    </div>
  )
})
