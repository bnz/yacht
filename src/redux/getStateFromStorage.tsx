import { gamePhaseDefaultState } from './reducers/gamePhase'
import { playersDefaultState } from './reducers/players'
import { dicesDefaultState } from './reducers/dices'
import { dicesSelectedDefaultState } from './reducers/dicesSelected'
import { getBooleanItem, getItem } from '../helpers/getItem'
import { loadingDefaultState } from './reducers/loading'
import { diceSizeDefaultState } from './reducers/diceSize'
import { combinationsDefaultState } from './reducers/combinations'
import { playerMoveDefaultState } from './reducers/playerMove'
import { tableSizeDefaultState } from './reducers/tableSize'
import { drawerOpenedDefaultState } from './reducers/drawerOpened'
import { playerPointsDefaultState } from './reducers/playerPoints'
import { languageDefaultState } from './reducers/language'
import { activeTabDefaultState } from './reducers/activeTab'
import { historyDefaultState } from './reducers/history'
import { historyFollowActivePlayerDefaultState } from './reducers/historyFollowActivePlayer'
import { activeFirstDefaultState } from './reducers/activeFirst'

export let gamePhase = gamePhaseDefaultState.gamePhase
export let players = playersDefaultState
export let dices = dicesDefaultState
export let dicesSelected = dicesSelectedDefaultState
export let diceSize = diceSizeDefaultState
export let combinations = combinationsDefaultState
export let playerMove = playerMoveDefaultState
export let tableSize = tableSizeDefaultState
export let playerPoints = playerPointsDefaultState
export let language = languageDefaultState
export let activeTab = activeTabDefaultState
export let history = historyDefaultState

export let loading: boolean
export let drawerOpened: boolean
export let historyFollowActivePlayer: boolean
export let activeFirst: boolean

try {
  gamePhase = getItem('gamePhase', false) || gamePhase
  players = getItem('players') || players
  dices = getItem('dices') || dices
  dicesSelected = getItem('dicesSelected') || dicesSelected
  diceSize = getItem('diceSize') || diceSize
  combinations = getItem('combinations') || combinations
  playerMove = getItem('playerMove') || playerMove
  tableSize = getItem('tableSize') || tableSize
  playerPoints = getItem('playerPoints') || playerPoints
  language = getItem('language') || language
  activeTab = getItem('activeTab') || activeTab
  history = getItem('history') || history

  loading = getBooleanItem('loading', loadingDefaultState)
  drawerOpened = getBooleanItem('drawerOpened', drawerOpenedDefaultState)
  historyFollowActivePlayer = getBooleanItem('historyFollowActivePlayer', historyFollowActivePlayerDefaultState)
  activeFirst = getBooleanItem('activeFirst', activeFirstDefaultState)

} catch (e) {
  console.error(e)
}
