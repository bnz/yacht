import React, { FC } from 'react'
import { MainLayout } from '../MainLayout/MainLayout'
import { GamePhases } from '../../redux/reducers/gamePhase'
import { StartGameButtonConnected } from '../StartGameButton/StartGameButtonConnected'
import { PlayersSelection } from '../PlayersSelection/PlayersSelection'
import { DicesConnected } from '../Dices/DicesConnected'
import { DicesActions } from '../DicesActions/DicesActions'
import { Rules } from '../Rules/Rules'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { CombinationsContainer } from '../CombinationsContainer/CombinationsContainer'
import { EndOfGameConnected } from '../EndOfGame/EndOfGameConnected'
import { makeGamePhaseSelector } from '../../redux/selectors/makeGamePhaseSelector'
import { useSelector } from 'react-redux'

const gamePhaseSelector = makeGamePhaseSelector()

export const App: FC = () => {
  const gamePhase = useSelector(gamePhaseSelector)

  return (
    <MainLayout>
      {{
        [GamePhases.PRE_GAME]: (
          <>
            <StartGameButtonWrapper>
              <StartGameButtonConnected />
            </StartGameButtonWrapper>
            <Rules />
          </>
        ),
        [GamePhases.PLAYERS_SELECTION]: (
          <PlayersSelection />
        ),
        [GamePhases.IN_PLAY]: (
          <>
            <EndOfGameConnected />
            <DicesConnected />
            <DicesActions />
            <CombinationsContainer />
          </>
        ),
      }[gamePhase]}
    </MainLayout>
  )
}
