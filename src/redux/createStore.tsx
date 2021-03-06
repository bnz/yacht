import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, createStore, Reducer, Store } from 'redux'
import { defaultState, State } from './defaultState'
import { gamePhase } from './reducers/gamePhase'
import { subscriptions } from './subscriptions'
import { players } from './reducers/players'
import { dices } from './reducers/dices'
import { dicesSelected } from './reducers/dicesSelected'
import { loading } from './reducers/loading'
import { diceSize } from './reducers/diceSize'
import { combinations } from './reducers/combinations'
import { playerMove } from './reducers/playerMove'
import { tableSize } from './reducers/tableSize'
import { drawerOpened } from './reducers/drawerOpened'
import { playerPoints } from './reducers/playerPoints'
import { language } from './reducers/language'
import { activeTab } from './reducers/activeTab'
import { history } from './reducers/history'
import { historyFollowActivePlayer } from './reducers/historyFollowActivePlayer'
import { activeFirst } from './reducers/activeFirst'

const middleware = [thunk]

const reducers: Reducer<State> = combineReducers<State>({
  players,
  gamePhase,
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
})

declare global {
  interface Window {
    isDarkTheme: boolean
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

export const store: Store<State> = createStore(reducers, defaultState, enhancer)

subscriptions(store)
