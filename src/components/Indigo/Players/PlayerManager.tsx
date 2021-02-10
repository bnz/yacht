import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { Player } from './Player'
import { PlayersWrapper } from './PlayersWrapper'
import { AddPlayer } from './AddPlayer'

export const PlayerManager: FC = observer(() => {
  const store = useStore()

  return (
    <PlayersWrapper>
      {store.players.map(({ id }) => (
        <Player key={id} id={id} />
      ))}
      {store.players.length < 4 && (
        <AddPlayer />
      )}
    </PlayersWrapper>
  )
})
