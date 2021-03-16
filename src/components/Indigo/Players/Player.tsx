/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { ActionButton } from './ActionButton/ActionButton'
import { useStore } from '../Store/HexProvider'
import { PlayerId } from '../types'
import ClearIcon from '@material-ui/icons/Clear'
import { Sphere } from '../Sphere/Sphere'
import { PlayerWrapper } from './PlayerWrapper'

interface PlayerProps {
  id: PlayerId
}

export const Player: FC<PlayerProps> = ({ id }) => {
  const store = useStore()
  const onClick = useCallback(store.playersStore.removePlayerById(id), [id])
  const hasButton = store.playersStore.entries.length > 2

  return (
    <PlayerWrapper {...(hasButton ? { onClick } : {})}>
      <Sphere color={id} />
      {hasButton && (
        <ActionButton hidden>
          <ClearIcon fontSize="inherit" />
        </ActionButton>
      )}
    </PlayerWrapper>
  )
}
