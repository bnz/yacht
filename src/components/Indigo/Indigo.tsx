/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { Wrapper } from './Wrapper'
import { Item } from './Item'
import { HelpingTools } from './HelpingTools'
import { observer } from 'mobx-react'
import { useStore } from './Store/Provider'
import { GamePhase } from './Store/Store'
import Button from '@material-ui/core/Button'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { PlayerManager } from './Players/PlayerManager'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export const Indigo: FC = observer(() => {
  const store = useStore()

  return (
    <>
      <div style={{
        position: 'absolute',
        top: 60,
        left: 8,
        zIndex: 1,
      }}>
        <StartGameButtonWrapper>
          <ButtonGroup
            variant="contained"
            size="large"
            color="primary"
          >
            <Button
              disabled={store.gamePhase === GamePhase.PRE_GAME}
              onClick={
                useCallback(() => {
                  store.gamePhase = GamePhase.PRE_GAME
                }, [])
              }
            >
              start
            </Button>
            <Button
              disabled={store.gamePhase === GamePhase.PLAYERS_SELECTION}
              onClick={
                useCallback(() => {
                  store.gamePhase = GamePhase.PLAYERS_SELECTION
                }, [])
              }
            >
              player
            </Button>
            <Button
              disabled={store.gamePhase === GamePhase.IN_PLAY}
              onClick={
                useCallback(() => {
                  store.startGame()
                }, [])
              }
            >
              game
            </Button>
          </ButtonGroup>
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
          <Wrapper amount={store.colsAmount}>
            {store.itemsCount.map((_, i) => (
              <Item key={i} dataId={i + 1} />
            ))}
            {store.bottomCount.map((_, i) => (
              <Item key={i} dataId={store.itemsCount.length + i + 1} />
            ))}
          </Wrapper>
        ),
      }[store.gamePhase]}
      <HelpingTools />
    </>
  )
})
