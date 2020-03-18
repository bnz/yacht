import { Combination, CombinationInfo } from '../reducers/combinations'
import { checkMatch } from '../../helpers/checkMatch'
import { Dices } from '../reducers/dices'
import { PlayerPoints } from '../reducers/playerPoints'
import { MAX_SHOT_COUNT, Move } from '../reducers/playerMove'

type IsMoveAvailable = (
  combinations: CombinationInfo[],
  dices: Dices,
  playerPoints: PlayerPoints,
  playerMove: Move,
) => boolean

/**
 * Return true if player have available moves
 */
export const isMoveAvailableCombiner: IsMoveAvailable = (
  combinations,
  dices,
  playerPoints,
  playerMove,
) => {
  const [activePlayerId, shot] = playerMove
  const player = playerPoints[activePlayerId]

  let matchesCount = 0
  let noMoves = false

  combinations.forEach(({ combination }) => {
    const { points } = checkMatch(combination, dices)
    const isInPlayerPoints = combination !== Combination.BONUS && player && !!player[combination]

    /**
     * Combination matched AND player hasn't this combination
     */
    if (points !== undefined && !isInPlayerPoints) {
      matchesCount = matchesCount + 1
    }

    /**
     * If no matches, no more shots and player already have this combination
     */
    if (points === undefined && shot === MAX_SHOT_COUNT) {
      noMoves = true
    }
  })

  return !(matchesCount === 0 && noMoves)
}
