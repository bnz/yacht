import { gamePhaseDefaultState } from './reducers/gamePhase'
import { playersDefaultState } from './reducers/players'
import { dicesDefaultState } from './reducers/dices'
import { dicesSelectedDefaultState } from './reducers/dicesSelected'
import { getItem } from '../helpers/getItem'
import { loadingDefaultState } from './reducers/loading'
import { diceSizeDefaultState } from './reducers/diceSize'
import { combinationsDefaultState } from './reducers/combinations'
import { playerMoveDefaultState } from './reducers/playerMove'
import { tableSizeDefaultState } from './reducers/tableSize'
import { drawerOpenedDefaultState } from './reducers/drawerOpened'
import { playerPointsDefaultState } from './reducers/playerPoints'

export let gamePhase = gamePhaseDefaultState.gamePhase
export let players = playersDefaultState
export let dices = dicesDefaultState
export let dicesSelected = dicesSelectedDefaultState
export let loading = loadingDefaultState
export let diceSize = diceSizeDefaultState
export let combinations = combinationsDefaultState
export let playerMove = playerMoveDefaultState
export let tableSize = tableSizeDefaultState
export let drawerOpened = drawerOpenedDefaultState
export let playerPoints = playerPointsDefaultState

try {
  gamePhase = getItem('gamePhase', false) || gamePhase
  players = getItem('players') || players
  dices = getItem('dices') || dices
  dicesSelected = getItem('dicesSelected') || dicesSelected
  loading = getItem('loading') || loading
  diceSize = getItem('diceSize') || diceSize
  combinations = getItem('combinations') || combinations
  playerMove = getItem('playerMove') || playerMove
  tableSize = getItem('tableSize') || tableSize
  drawerOpened = getItem('drawerOpened') || drawerOpened
  playerPoints = getItem('playerPoints') || playerPoints
} catch (e) {
  console.error(e)
}
