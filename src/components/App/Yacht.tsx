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
import { History } from '../../redux/reducers/history'
import { LocalStorageMgmnt } from '../Indigo/Store/LocalStorageMgmnt'
import { Player } from '../../redux/reducers/players'
import { Dices } from '../../redux/reducers/dices'
import { DiceSize } from '../../redux/reducers/diceSize'
import { Move } from '../../redux/reducers/playerMove'
import { TableSizes } from '../../redux/reducers/tableSize'
import { PlayerPoints } from '../../redux/reducers/playerPoints'
import { ActiveTab } from '../../redux/reducers/activeTab'
import { HistoryFollowActivePlayer } from '../../redux/reducers/historyFollowActivePlayer'
import { ActiveFirst } from '../../redux/reducers/activeFirst'

const gamePhaseSelector = makeGamePhaseSelector()

type Keys =
  | 'gamePhase'
  | 'history'
  | 'players'
  | 'dices'
  | 'dicesSelected'
  | 'diceSize'
  | 'playerMove'
  | 'tableSize'
  | 'playerPoints'
  | 'activeTab'
  | 'historyFollowActivePlayer'
  | 'activeFirst'

type Values =
  | GamePhases
  | History
  | Player[]
  | Dices
  | DiceSize
  | Move
  | TableSizes
  | PlayerPoints
  | ActiveTab
  | HistoryFollowActivePlayer
  | ActiveFirst

export const yachtStorage = new LocalStorageMgmnt<Keys, Values>('yacht')

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
