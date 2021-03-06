import update from 'immutability-helper'
import { Move } from '../reducers/playerMove'
import { Player } from '../reducers/players'
import { ActiveFirst } from '../reducers/activeFirst'

type Players = Player[]

type Reorder = (array: Players, playerMove: Move, activeFirst: ActiveFirst) => Players

export const reorderPlayersByIdCombiner: Reorder = (players, { 0: playerId }, activeFirst) => {

  if (!activeFirst) {
    return players
  }

  const activeIndex = players.findIndex(({ id }) => id === playerId)
  const beforeArr = players.slice(0, activeIndex)
  const arr = update(players, { $splice: [[0, activeIndex]] })

  return ([] as Players).concat(arr, beforeArr)
}
