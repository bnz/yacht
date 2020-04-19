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
  language,
  activeTab,
  history,
  historyFollowActivePlayer,
  activeFirst,
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
import { HistoryState } from './reducers/history'
import { HistoryFollowActivePlayerState } from './reducers/historyFollowActivePlayer'
import { ActiveFirstState } from './reducers/activeFirst'

export interface State
  extends GamePhaseState, PlayersState, DicesState, DicesSelectedState,
    LoadingState, DiceSizeState, CombinationsState,
    PlayerMoveState, TableSizeState, DrawerOpenedState, PlayerPointsState,
    LanguageState, ActiveTabState, HistoryState, HistoryFollowActivePlayerState,
    ActiveFirstState {
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
  history,
  historyFollowActivePlayer,
  activeFirst,
}
