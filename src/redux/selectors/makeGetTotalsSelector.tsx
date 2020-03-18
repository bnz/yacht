import { createSelector } from 'reselect'
import { calcTotalsCombiner } from '../combiners/calcTotalsCombiner'
import { players } from '../pureSelectors/players'
import { playerPoints } from '../pureSelectors/playerPoints'

export const makeGetTotalsSelector = () => createSelector(players, playerPoints, calcTotalsCombiner)
