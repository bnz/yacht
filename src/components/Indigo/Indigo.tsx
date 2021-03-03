/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { HelpingTools } from './HelpingTools'
import { observer } from 'mobx-react'
import { useStore } from './Store/Provider'
import { useStore as useHexStore } from './Absolute/HexProvider'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { PlayerManager } from './Players/PlayerManager'
import { GamePhase } from './Ids'
import { Arena } from './Absolute/Arena'

export const Indigo: FC = observer(() => {
  const store = useStore()
  const hexStore = useHexStore()

  return (
    <>
      <div style={{
        position: 'absolute',
        top: -90,
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 1000000,
        // display: 'none',
      }}>
        <StartGameButtonWrapper style={{
          // display: 'none'
        }}>
          <ButtonGroup
            variant="contained"
            size="large"
            color="primary"
          >
            <Button
              disabled={store.gamePhase === GamePhase.PRE_GAME}
              onClick={useCallback(() => store.goToPreGame(), [])}
            >
              1
            </Button>
            <Button
              disabled={store.gamePhase === GamePhase.PLAYERS_SELECTION}
              onClick={useCallback(() => store.goToPlayersSelection(), [])}
            >
              2
            </Button>
            <Button
              disabled={store.gamePhase === GamePhase.IN_PLAY}
              onClick={useCallback(() => store.startGame(), [])}
            >
              3
            </Button>
          </ButtonGroup>
          <Button
            style={{ marginLeft: 16 }}
            onClick={useCallback(() => hexStore.toggleOrientation(), [])}
          >
            rotate
          </Button>
        </StartGameButtonWrapper>
      </div>
      {{
        [GamePhase.PRE_GAME]: (
          <>PRE_GAME</>
        ),
        [GamePhase.PLAYERS_SELECTION]: (
          <PlayerManager />
        ),
        [GamePhase.IN_PLAY]: (
          <Arena />
        ),
      }[store.gamePhase]}
      <HelpingTools />
    </>
  )
})
