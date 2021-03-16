import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import { PlayersWrapper } from './PlayersWrapper'
import { Player } from './Player'
import { AddPlayer } from './AddPlayer'
import { rulesStyles } from '../rulesStyles'
import { PlayerWrapper } from './PlayerWrapper'
import Paper from '@material-ui/core/Paper'
import { PlayersActions } from './PlayersActions'

export const PlayerManager: FC = observer(() => {
  const store = useStore()

  useEffect(rulesStyles, [])

  return (
    <>
      <Paper style={{
        padding: 16,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab ad aliquam asperiores, atque autem beatae eaque
        esse excepturi illo inventore nam nobis odio quas quia quod veniam voluptatem voluptates!
      </Paper>
      <PlayersWrapper>
        {store.playersStore.entries.map(([dataId, { id }]) => (
          <Player key={dataId} id={id} />
        ))}
        {store.playersStore.entries.length < 4 && (
          <AddPlayer />
        )}
        {store.playersStore.entries.length === 2 && (
          <PlayerWrapper />
        )}
      </PlayersWrapper>
      <PlayersActions />
    </>
  )
})
