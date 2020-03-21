import { GamePhaseState } from './reducers/gamePhase'
import { PlayersState } from './reducers/players'
import { DicesState } from './reducers/dices'
import { DicesSelectedState } from './reducers/dicesSelected'
import {
  gamePhase,
  players,
  dices,
  dicesSelected,
  loading,
  diceSize,
  combinations,
  playerMove,
  tableSize,
  drawerOpened,
  playerPoints,
  language, activeTab,
} from './getStateFromStorage'
import { LoadingState } from './reducers/loading'
import { DiceSizeState } from './reducers/diceSize'
import { CombinationsState } from './reducers/combinations'
import { PlayerMoveState } from './reducers/playerMove'
import { TableSizeState } from './reducers/tableSize'
import { DrawerOpenedState } from './reducers/drawerOpened'
import { PlayerPointsState } from './reducers/playerPoints'
import { LanguageState } from './reducers/language'
import { ActiveTabState } from './reducers/activeTab'

export interface State
  extends GamePhaseState, PlayersState, DicesState, DicesSelectedState,
    LoadingState, DiceSizeState, CombinationsState,
    PlayerMoveState, TableSizeState, DrawerOpenedState, PlayerPointsState,
    LanguageState, ActiveTabState {
}

export const defaultState: State = {
  gamePhase,
  players,
  dices,
  dicesSelected,
  loading,
  diceSize,
  combinations,
  playerMove,
  tableSize,
  drawerOpened,
  playerPoints,
  language,
  activeTab,
}
