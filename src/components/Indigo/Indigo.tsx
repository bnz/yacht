/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { Wrapper } from './Wrapper'
import { HelpingTools } from './HelpingTools'
import { observer } from 'mobx-react'
import { useStore } from './Store/Provider'
import { GamePhase, HexType } from './Store/Store'
import Button from '@material-ui/core/Button'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { PlayerManager } from './Players/PlayerManager'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Ids, RouteTile } from './Tiles/RouteTile'
import { TileWrapper } from './Tiles/TileWrapper'
import { TreasureCenterTileIds, TreasureTile, TreasureTileIds } from './Tiles/TreasureTile'
import { Decorator } from './Tiles/Decorator'
import { DecoratorsIds } from './Ids'

export const Indigo: FC = observer(() => {
  const store = useStore()

  console.log(':::ROOT:::')

  return (
    <>
      <div style={{
        position: 'absolute',
        top: 60,
        left: '50%',
        transform: 'translate(-50%, 0)',
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
          <Wrapper amount={store.colsAmount} alt={store.preSit}>

            {store.itemsCount.map((_, index) => {
              const dataId = index + 1

              switch (store.idsToTypeMap[dataId]) {
                case HexType.decorator:
                  return (
                    <Decorator key={dataId} id={dataId as DecoratorsIds} />
                  )
                case HexType.treasure:
                  return (
                    <TreasureTile key={dataId} id={dataId as TreasureTileIds | TreasureCenterTileIds} />
                  )
                case HexType.route:
                  return (
                    <RouteTile key={dataId} id={dataId as Ids} />
                  )
                default:
                  return (
                    <TileWrapper key={dataId} dataId={dataId} />
                  )
              }
            })}

            {/*<Seat playerId={PlayerId.Player1} locationId={1} />*/}
            {/*<Seat playerId={PlayerId.Player2} locationId={1} />*/}
            {/*<Seat playerId={PlayerId.Player3} locationId={1} />*/}
            {/*<Seat playerId={PlayerId.Player4} locationId={1} />*/}
          </Wrapper>
        ),
      }[store.gamePhase]}
      <HelpingTools />
    </>
  )
})
