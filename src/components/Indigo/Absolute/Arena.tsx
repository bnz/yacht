/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useStore } from './HexProvider'
import { Tile } from './Tile'
import './Arena.css'

export const Arena: FC = observer(() => {
  const store = useStore()
  const arenaRef = useRef<HTMLDivElement | null>(null)
  const onMouseMove = useCallback((e) => store.onMouseMove(e), [])

  useEffect(() => {
    store.arenaElement = arenaRef.current
  }, [])

  return (
    <div
      ref={arenaRef}
      className={store.orientationType}
      onMouseMove={onMouseMove}
      // @ts-ignore
      style={{ '--R': `${store.R}px` }}
    >
      {store.arenaElement === null ? null : store.tiles.map((_, i) => (
        <Tile key={i} index={i} />
      ))}
    </div>
  )
})
