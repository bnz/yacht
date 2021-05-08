import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import styles from './TileHovered.module.css'

export const TileHovered: FC = observer(() => {
  const store = useStore()
  const ref = useRef(null)

  useEffect(() => {
    if (ref && ref.current) {
      // @ts-ignore
      ref.current.className = store.hoveredId ? styles.show : styles.hide
    }
  }, [store.hoveredId])

  return (
    <div data-qr={store.hoveredId} ref={ref}>
      <div style={store.getTmpCSS} />
    </div>
  )
})
