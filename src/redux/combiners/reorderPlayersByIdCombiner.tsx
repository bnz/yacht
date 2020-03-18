import update from 'immutability-helper'
import { Move } from '../reducers/playerMove'
import { Player } from '../reducers/players'

type Players = Player[]

type Reorder = (array: Players, playerMove: Move) => Players

export const reorderPlayersByIdCombiner: Reorder = (players, { 0: playerId }) => {
  const activeIndex = players.findIndex(({ id }) => id === playerId)
  const beforeArr = players.slice(0, activeIndex)
  const arr = update(players, { $splice: [[0, activeIndex]] })

  return ([] as Players).concat(arr, beforeArr)
}
