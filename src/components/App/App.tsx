import React, { FC } from 'react'
import { MainLayout } from '../MainLayout/MainLayout'
import { GamePhases } from '../../redux/reducers/gamePhase'
import { StartGameButton } from '../StartGameButton/StartGameButton'
import { PlayersSelection } from '../PlayersSelection/PlayersSelection'
import { DicesConnected } from '../Dices/DicesConnected'
import { DicesActions } from '../DicesActions/DicesActions'
import { Rules } from '../Rules/Rules'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { CombinationsContainer } from '../CombinationsContainer/CombinationsContainer'
import { EndOfGameContainer } from '../EndOfGame/EndOfGameContainer'
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
              <StartGameButton />
            </StartGameButtonWrapper>
            <Rules />
          </>
        ),
        [GamePhases.PLAYERS_SELECTION]: (
          <PlayersSelection />
        ),
        [GamePhases.IN_PLAY]: (
          <>
            <EndOfGameContainer />
            <DicesConnected />
            <DicesActions />
            <CombinationsContainer />
          </>
        ),
      }[gamePhase]}
    </MainLayout>
  )
}
