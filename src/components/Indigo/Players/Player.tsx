/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import football from './assets/football.svg'
import hockey from './assets/hockey.svg'
import tennis from './assets/tennis.svg'
import motorcyclist from './assets/motorcyclist.svg'
import { PlayerWrapper } from './PlayerWrapper'
import { RemoveButton } from './RemoveButton'
import { useStore } from '../Store/Provider'

interface PlayerProps {
  id: string
}

export enum PlayerId {
  Player1 = 'p-1',
  Player2 = 'p-2',
  Player3 = 'p-3',
  Player4 = 'p-4',
}

export const playerIdToSVGMap: Record<string, string> = {
  [PlayerId.Player1]: football,
  [PlayerId.Player2]: hockey,
  [PlayerId.Player3]: tennis,
  [PlayerId.Player4]: motorcyclist,
}

export const Player: FC<PlayerProps> = ({ id }) => {
  const store = useStore()
  const onRemove = useCallback(() => {
    store.removePlayerById(id)
  }, [])

  return (
    <PlayerWrapper>
      {store.players.length > 2 && (
        <RemoveButton onClick={onRemove} />
      )}
      <img src={playerIdToSVGMap[id]} alt="" />
    </PlayerWrapper>
  )
}
