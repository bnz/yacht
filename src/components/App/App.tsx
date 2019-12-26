import React, { FC } from 'react'
import { AppProps } from './AppConnected'
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

export const App: FC<AppProps> = ({ gamePhase }) => (
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
