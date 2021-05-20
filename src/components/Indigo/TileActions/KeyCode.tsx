import React, { FC } from 'react'
import { useStore } from '../Store/HexProvider'
import { KeyboardActions } from '../../../helpers/KeyboardActions'

export const KeyCode: FC = () => {
  const store = useStore()

  return (
    <KeyboardActions
      actions={{
        ArrowLeft: store.rotateRight,
        ArrowRight: store.rotateLeft,
        Space: store.rotateLeft,
        Enter: store.applySit,
      }}
    />
  )
}
