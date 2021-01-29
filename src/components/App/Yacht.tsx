import React, { FC } from 'react'
import { GamePhases } from '../../redux/reducers/gamePhase'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { StartGameButton } from '../StartGameButton/StartGameButton'
import { Rules } from '../Rules/Rules'
import { PlayersSelection } from '../PlayersSelection/PlayersSelection'
import { EndOfGameContainer } from '../EndOfGame/EndOfGameContainer'
import { DicesConnected } from '../Dices/DicesConnected'
import { DicesActions } from '../DicesActions/DicesActions'
import { CombinationsContainer } from '../CombinationsContainer/CombinationsContainer'
import { useSelector } from 'react-redux'
import { makeGamePhaseSelector } from '../../redux/selectors/makeGamePhaseSelector'

const gamePhaseSelector = makeGamePhaseSelector()

export const Yacht: FC = () => (
  <>
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
    }[useSelector(gamePhaseSelector)]}
  </>
)
