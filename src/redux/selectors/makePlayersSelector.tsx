import { createSelector } from 'reselect'
import { reorderPlayersByIdCombiner } from '../combiners/reorderPlayersByIdCombiner'
import { players } from '../pureSelectors/players'
import { playerMove } from '../pureSelectors/playerMove'
import { activeFirstSelector } from '../reducers/activeFirst'

export const makePlayersSelector = () => createSelector(players, playerMove, activeFirstSelector, reorderPlayersByIdCombiner)
