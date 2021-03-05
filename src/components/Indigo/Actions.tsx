/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { GamePhase } from './Ids'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { useStore as useHexStore } from './Absolute/HexProvider'
import { useStore } from './Store/Provider'
import { observer } from 'mobx-react'

export const Actions: FC = observer(() => {
  const store = useStore()
  const hexStore = useHexStore()
  const rotate = useCallback(() => hexStore.toggleOrientation(), [])

  return (
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
          {store.gamePhase === GamePhase.IN_PLAY && (
            <Button onClick={rotate}>
              {hexStore.isPointy ? <RotateRightIcon /> : <RotateLeftIcon />}
            </Button>
          )}
        </ButtonGroup>
      </StartGameButtonWrapper>
    </div>
  )
})
