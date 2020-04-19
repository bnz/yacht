import { createSelector } from 'reselect'
import { isMoveAvailableCombiner } from '../combiners/isMoveAvailableCombiner'
import { playerPoints } from '../pureSelectors/playerPoints'
import { playerMove } from '../pureSelectors/playerMove'
import { combinationsSelector } from '../reducers/combinations'
import { dicesSelector } from '../reducers/dices'

export const makeIsMoveAvailableSelector = () => createSelector(
  combinationsSelector,
  dicesSelector,
  playerPoints,
  playerMove,
  isMoveAvailableCombiner,
)
