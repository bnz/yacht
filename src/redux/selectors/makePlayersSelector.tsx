import { createSelector } from 'reselect'
import { reorderPlayersByIdCombiner } from '../combiners/reorderPlayersByIdCombiner'
import { players } from '../pureSelectors/players'
import { playerMove } from '../pureSelectors/playerMove'

export const makePlayersSelector = () => createSelector(players, playerMove, reorderPlayersByIdCombiner)
