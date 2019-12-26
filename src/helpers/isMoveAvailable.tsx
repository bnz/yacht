// import { checkMatch, prepareCombination as pc } from './index'
import { Combination, CombinationInfo } from '../redux/reducers/combinations'
import { checkMatch } from './checkMatch'
import { Dices } from '../redux/reducers/dices'
import { PlayerPoints } from '../redux/reducers/playerPoints'

type IsMoveAvailable = (
  combinations: CombinationInfo[],
  dices: Dices,
  playerPoints: PlayerPoints,
  activePlayerId: string,
  noMoreShots: boolean,
) => boolean

/**
 * Return true if player have available moves
 */
export const isMoveAvailable: IsMoveAvailable = (
  combinations,
  dices,
  playerPoints,
  activePlayerId,
  noMoreShots,
) => {
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
    if (points === undefined && noMoreShots) {
      noMoves = true
    }
  })

  return !(matchesCount === 0 && noMoves)
}
