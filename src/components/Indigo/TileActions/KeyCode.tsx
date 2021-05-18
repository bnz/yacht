/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { useStore } from '../Store/HexProvider'
import { KeyboardActions } from '../../../helpers/KeyboardActions'

export const KeyCode: FC = () => {
  const store = useStore()

  useEffect(() => {
    const fn = (e: any) => {
      // console.log(e)
      // switch (e.keyCode) {
      //   case 27: // esc
      //     store.cancelPreSit()
      //     break
      //   case 13: // enter
      //     store.applySit()
      //     break
      //   case 37: // left
      //     store.rotateRight()
      //     break
      //   case 32: // space
      //     if (e.shiftKey) {
      //       store.rotateRight()
      //     } else {
      //       store.rotateLeft()
      //     }
      //     break
      //   case 39: // right
      //     store.rotateLeft()
      //     break
      // }
    }

    fn({})

  }, [])

  return (
    <KeyboardActions
      actions={{
        ArrowLeft: store.rotateRight,
        ArrowRight: store.rotateLeft,
        Space: store.rotateLeft,
      }}
    />
  )
}
