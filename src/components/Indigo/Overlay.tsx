/* eslint-disable react-hooks/exhaustive-deps */
import styled from '@material-ui/styles/styled'
import React, { FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import { StyledProps } from '@material-ui/core/styles'
import { useStore } from './Store/Provider'
import { stretch } from '../../helpers/css'

const OverlayComponent: FC<StyledProps> = observer(({ className }) => {
  const store = useStore()
  const onClick = useCallback(() => store.cancelPreSit(), [])

  return (
    <div
      className={className}
      onClick={onClick}
      {...(store.preSit !== null ? {
        style: {
          display: 'block',
        },
      } : {})}
    />
  )
})

export const Overlay = styled(OverlayComponent)({
  ...stretch(0, 0, 0, 0),
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 1,
  display: 'none',
})
