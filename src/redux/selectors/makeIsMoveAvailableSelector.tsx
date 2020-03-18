import { createSelector } from 'reselect'
import { isMoveAvailableCombiner } from '../combiners/isMoveAvailableCombiner'
import { combinations } from '../pureSelectors/combinations'
import { dices } from '../pureSelectors/dices'
import { playerPoints } from '../pureSelectors/playerPoints'
import { playerMove } from '../pureSelectors/playerMove'

export const makeIsMoveAvailableSelector = () => createSelector(
  combinations,
  dices,
  playerPoints,
  playerMove,
  isMoveAvailableCombiner,
)
