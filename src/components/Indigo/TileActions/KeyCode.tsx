/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { useStore } from '../Store/HexProvider'

export const KeyCode: FC = () => {
  const store = useStore()

  useEffect(() => {
    const fn = (e: any) => {
      switch (e.keyCode) {
        case 27: // esc
          store.cancelPreSit()
          break
        case 13: // enter
          store.applySit()
          break
        case 37: // left
          store.rotateRight()
          break
        case 32: // space
          if (e.shiftKey) {
            store.rotateRight()
          } else {
            store.rotateLeft()
          }
          break
        case 39: // right
          store.rotateLeft()
          break
      }
    }

    document.addEventListener('keydown', fn, false)

    return () => document.removeEventListener('keydown', fn, false)
  }, [])

  return null
}
