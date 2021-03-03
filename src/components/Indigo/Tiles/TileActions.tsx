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
import { RoundButton } from './TileActionsParts'
import { hexRationDiff } from '../Store/Store'

const TileActions: FC<StyledProps> = observer(({ className }) => {
  const store = useStore()

  useEffect(() => {
    function fn(e: KeyboardEvent) {
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

  return (
    <div className={className}>
      {store.isCrossroad ? (
        <>
          <div />
          <div />
          <div />
        </>
      ) : (
        <>
          <RoundButton onClick={useCallback(() => store.rotateLeft(), [])}>
            <RotateLeftIcon />
          </RoundButton>
          <div />
          <RoundButton onClick={useCallback(() => store.rotateRight(), [])}>
            <RotateRightIcon />
          </RoundButton>
        </>
      )}
      <div />
      <div />
      <div />
      <RoundButton onClick={useCallback(() => store.cancelPreSit(), [])}>
        <CloseIcon color="secondary" />
      </RoundButton>
      <div />
      <RoundButton onClick={useCallback(() => store.applySit(), [])}>
        <CheckIcon color="primary" />
      </RoundButton>
    </div>
  )
})

TileActions.displayName = 'TileActions'

export const TileActionsStyled = styled(TileActions)(({
  theme: {
    palette: { background: { paper: borderColor } },
    shadows: { 24: boxShadow },
    breakpoints: { down },
    shape: { borderRadius },
  },
}: Themed) => {
  let size = window.matchMedia(down('xs').split(' ')[1]).matches ? 500 : 200

  return {
    position: 'absolute',
    left: `-${(size - 100) / 2}%`,
    top: `-${(size / hexRationDiff * 100) / 3.5}%`,
    width: `${size}%`,
    height: `${size / hexRationDiff * 100}%`,
    display: 'grid',
    gridTemplateColumns: '35% 1fr 35%',
    gridTemplateRows: '35% 1fr 35%',
    justifyItems: 'center',
    borderRadius,
    boxShadow,
    border: `1px solid ${borderColor}`,

    '& + svg': {
      position: 'relative',
    },

    '&:hover button': {
      visibility: 'visible',
      opacity: 1,
    },
  }
})
