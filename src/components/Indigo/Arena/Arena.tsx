/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import './Arena.css'
import { Tile } from '../Tile/Tile'
import { Seats } from '../Seats/Seats'
import { GatewaySeats } from '../GatewaySeats/GatewaySeats'
import { TileActions } from '../TileActions/TileActions'
import { Stone } from '../Stone/Stone'

export const Arena: FC = observer(() => {
  const store = useStore()
  const arenaRef = useRef<HTMLDivElement | null>(null)
  const onMouseMove = useCallback(store.onMouseMove, [])
  const onClick = useCallback(store.onClick, [])

  useEffect(() => {
    store.arenaElement = arenaRef.current
  }, [store.arenaElement])

  return (
    <div
      ref={arenaRef}
      className={store.orientationType}
      onMouseMove={onMouseMove}
      onClick={onClick}
      style={{ ['--R' as string]: `${store.R}px` }}
    >
      {store.arenaElement === null ? null : (
        <>
          {store.tileEntries.map(([id]) => (
            <Tile key={id} id={id} />
          ))}
          <Seats />
          <GatewaySeats />
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
