import { gamePhaseDefaultState } from './reducers/gamePhase'
import { playersDefaultState } from './reducers/players'
import { dicesDefaultState } from './reducers/dices'
import { dicesSelectedDefaultState } from './reducers/dicesSelected'
import { getBooleanItem } from '../helpers/getItem'
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
  const commonSettings = JSON.parse(localStorage.getItem('common-settings') || JSON.stringify({
    language,
    drawerOpened: drawerOpenedDefaultState,
  }))

  language = commonSettings.language || language
  drawerOpened = commonSettings.drawerOpened || drawerOpenedDefaultState

  const yacht = JSON.parse(localStorage.getItem('yacht') || JSON.stringify({
    gamePhase,
    history,
    players,
    dices,
    dicesSelected,
    diceSize,
    playerMove,
    combinations,
    tableSize,
    playerPoints,
    activeTab,
  }))

  gamePhase = yacht.gamePhase || gamePhase
  players = yacht.players || players
  dices = yacht.dices || dices
  dicesSelected = yacht.dicesSelected || dicesSelected
  diceSize = yacht.diceSize || diceSize
  combinations = yacht.combinations || combinations
  playerMove = yacht.playerMove || playerMove
  tableSize = yacht.tableSize || tableSize
  playerPoints = yacht.playerPoints || playerPoints
  activeTab = yacht.activeTab || activeTab
  history = yacht.history || history
  historyFollowActivePlayer = yacht.historyFollowActivePlayer || historyFollowActivePlayerDefaultState
  activeFirst = yacht.activeFirst || activeFirstDefaultState
  loading = getBooleanItem('loading', loadingDefaultState)
} catch (e) {
  console.error(e)
}
