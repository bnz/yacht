/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { PlayerWrapper } from './PlayerWrapper'
import { RemoveButton } from './RemoveButton'
import { useStore } from '../Store/Provider'
import { PlayerId } from '../Ids'

interface PlayerProps {
  id: PlayerId
}

export const Player: FC<PlayerProps> = ({ id }) => {
  const store = useStore()
  const onRemove = useCallback(() => store.removePlayerById(id), [id])

  return (
    <PlayerWrapper>
      {Object.keys(store.players).length > 2 && (
        <RemoveButton onClick={onRemove} />
      )}
      <img src={store.playerIdToSVGMap[id]} alt="" />
    </PlayerWrapper>
  )
}
