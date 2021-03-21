/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import { PlayerManager } from './Players/PlayerManager'
import { GamePhase } from './types'
import { Arena } from './Arena/Arena'
import { Actions } from './Actions'
import { useStore } from './Store/HexProvider'
import { Rules } from './Rules/Rules'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { StartButton } from './Rules/StartButton'
import Button from '@material-ui/core/Button'

export const Indigo: FC = observer(() => {
  const nextMove = useCallback(useStore().nextMove, [])

  return (
    <>
      <Actions />
      {{
        [GamePhase.PRE_GAME]: (
          <>
            <StartGameButtonWrapper>
              <StartButton />
            </StartGameButtonWrapper>
            <Rules />
          </>
        ),
        [GamePhase.PLAYERS_SELECTION]: (
          <PlayerManager />
        ),
        [GamePhase.IN_PLAY]: (
          <>
            <Arena />
            <Button onClick={nextMove} variant="outlined" style={{
              position: 'absolute',
              top: -80,
              left: '50%',
              zIndex: 10000,
            }}>
              next move
            </Button>
          </>
        ),
      }[useStore().gamePhase.phase]}
    </>
  )
})
