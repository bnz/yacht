/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { styled } from '@material-ui/core'
import { StyledProps } from '@material-ui/core/styles'
import { Themed } from '../../../helpers/types'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import ButtonBase from '@material-ui/core/ButtonBase'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { runInAction } from 'mobx'

interface TileActionsProps extends StyledProps {
  id: number
}

const TileActions: FC<TileActionsProps> = observer(({ id, className }) => {
  const store = useStore()

  return (
    <div className={className}>
      <ButtonBase style={{ width: '100%', borderRadius: '50%' }}>
        <RotateLeftIcon style={{ fontSize: '100%', width: '50%', height: '50%' }} />
      </ButtonBase>
      <ButtonBase style={{ width: '100%', borderRadius: '50%' }}>
        <RotateRightIcon style={{ fontSize: '100%', width: '50%', height: '50%' }} />
      </ButtonBase>
      <ButtonBase
        style={{ width: '100%', borderRadius: '50%' }}
        onClick={
          useCallback(() => {
            runInAction(() => {
              store.preSit = null
            })
          }, [])
        }
      >
        <CloseIcon style={{ fontSize: '100%', width: '50%', height: '50%', color: 'red' }} />
      </ButtonBase>
      <ButtonBase
        style={{ width: '100%', borderRadius: '50%' }}
        onClick={
          useCallback(() => {
            store.setHistory(id)
          }, [])
        }
      >
        <CheckIcon style={{ fontSize: '100%', width: '50%', height: '50%', color: 'green' }} />
      </ButtonBase>
    </div>
  )
})

export const TileActionsStyled = styled(TileActions)(({
  theme: {
    palette: { background: { paper: backgroundColor } },
    shadows: { 10: boxShadow },
    shape: { borderRadius },
    breakpoints: { down },
  },
}: Themed) => {
  let size = window.matchMedia(down('xs').split(' ')[1]).matches ? 500 : 150

  return {
    position: 'absolute',
    left: `-${(size - 100) / 2}%`,
    width: `${size}%`,
    top: '110%',
    height: `${size / 86.60254 * 100}%`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    justifyItems: 'center',
    borderRadius,
    backgroundColor,
    boxShadow,
  }
})
