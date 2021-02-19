import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { PlayersWrapper } from './PlayersWrapper'
import { Player } from './Player'
import { AddPlayer } from './AddPlayer'

export const PlayerManager: FC = observer(() => {
  const store = useStore()

  return (
    <PlayersWrapper>
      {Object.entries(store.players).map(([dataId, { id }]) => (
        <Player key={dataId} id={id} />
      ))}
      {Object.keys(store.players).length < 4 && (
        <AddPlayer />
      )}
    </PlayersWrapper>
  )
})
