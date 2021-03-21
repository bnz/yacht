import { Store, Unsubscribe } from 'redux'
import { State } from './defaultState'
import { commonSettingsStorage } from '../index'
import { yachtStorage } from '../components/App/Yacht'

type Subscriptions = (store: Store<State>) => Unsubscribe

export const subscriptions: Subscriptions = ({ subscribe, getState }) => subscribe(() => {
  const {
    gamePhase, players, dices, dicesSelected, diceSize, playerMove,
    tableSize, drawerOpened, playerPoints, language, activeTab, history,
    historyFollowActivePlayer, activeFirst,
  } = getState()

  yachtStorage.set('gamePhase', gamePhase)
  yachtStorage.set('players', players)
  yachtStorage.set('dices', dices)
  yachtStorage.set('dicesSelected', dicesSelected)
  yachtStorage.set('diceSize', diceSize)
  yachtStorage.set('playerMove', playerMove)
  yachtStorage.set('history', history)
  yachtStorage.set('tableSize', tableSize)
  yachtStorage.set('playerPoints', playerPoints)
  yachtStorage.set('activeTab', activeTab)
  yachtStorage.set('historyFollowActivePlayer', historyFollowActivePlayer)
  yachtStorage.set('activeFirst', activeFirst)
  commonSettingsStorage.set('drawerOpened', drawerOpened)
  commonSettingsStorage.set('language', language)
})
