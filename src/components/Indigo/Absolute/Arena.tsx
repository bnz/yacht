/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useStore } from './HexProvider'
import { Tile } from './Tile'
import './Arena.css'

export const Arena: FC = observer(() => {
  const store = useStore()
  const arenaRef = useRef<HTMLDivElement | null>(null)
  const onMouseMove = useCallback(store.onMouseMove, [])

  useEffect(() => {
    store.arenaElement = arenaRef.current
  }, [store.arenaElement])

  return (
    <div
      ref={arenaRef}
      className={store.orientationType}
      onMouseMove={onMouseMove}
      style={{ ['--R' as string]: `${store.R}px` }}
    >
      {store.arenaElement === null ? null : Object.entries(store.tiles).map(([id]) => (
        <Tile key={id} id={id} />
      ))}
    </div>
  )
})
