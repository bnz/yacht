import { Store, Unsubscribe } from 'redux'
import { State } from './defaultState'
import { toString } from '../helpers/toString'
import { setItem } from '../helpers/setItem'

type Subscriptions = (store: Store<State>) => Unsubscribe

export const subscriptions: Subscriptions = ({ subscribe, getState }) => subscribe(() => {
  const {
    gamePhase, players, dices, dicesSelected, diceSize, playerMove,
    tableSize, drawerOpened, playerPoints, language, activeTab,
  } = getState()

  setItem('gamePhase', gamePhase)
  setItem('players', toString(players))
  setItem('dices', toString(dices))
  setItem('dicesSelected', toString(dicesSelected))
  setItem('diceSize', toString(diceSize))
  setItem('playerMove', toString(playerMove))
  setItem('tableSize', toString(tableSize))
  setItem('drawerOpened', toString(drawerOpened))
  setItem('playerPoints', toString(playerPoints))
  setItem('language', toString(language))
  setItem('activeTab', toString(activeTab))
})
