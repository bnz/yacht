/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect } from 'react'
import { styled } from '@material-ui/core'
import { StyledProps } from '@material-ui/core/styles'
import { Themed } from '../../../helpers/types'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { Ids } from './RouteTile'
import { RoundButton } from './TileActionsParts'

interface TileActionsProps extends StyledProps {
  id: Ids
}

const TileActions: FC<TileActionsProps> = observer(({ id, className }) => {
  const store = useStore()

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Escape':
          store.cancelPreSit()
          break
        case 'Enter':
        case 'NumpadEnter':
          store.applySit()
          break
      }
    }
    document.addEventListener('keydown', fn, false)
    return () => {
      document.removeEventListener('keydown', fn, false)
    }
  }, [])

  const crossroad = store.routeTiles[id].tile === 'crossroad'

  return (
    <div className={className}>
      <RoundButton
        disabled={crossroad}
        onClick={
          useCallback(() => store.rotateLeft(), [])
        }
      >
        <RotateLeftIcon {...(crossroad ? { color: 'disabled' } : {})} />
      </RoundButton>
      <RoundButton
        disabled={crossroad}
        onClick={
          useCallback(() => store.rotateRight(), [])
        }
      >
        <RotateRightIcon {...(crossroad ? { color: 'disabled' } : {})} />
      </RoundButton>
      <RoundButton
        onClick={
          useCallback(() => store.cancelPreSit(), [])
        }
      >
        <CloseIcon color="secondary" />
      </RoundButton>
      <RoundButton
        onClick={
          useCallback(() => store.applySit(), [])
        }
      >
        <CheckIcon color="primary" />
      </RoundButton>
    </div>
  )
})

export const TileActionsStyled = styled(TileActions)(({
  theme: {
    palette: { background: { paper: backgroundColor } },
    shadows: { 10: boxShadow },
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
    borderRadius: '25%',
    backgroundColor,
    boxShadow,
  }
})
