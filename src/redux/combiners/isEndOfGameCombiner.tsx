import { CombinationInfo } from '../reducers/combinations'
import { PlayerPoints } from '../reducers/playerPoints'

type IsEndOfGameCombiner = (combinations: CombinationInfo[], playerPoints: PlayerPoints) => boolean

export const isEndOfGameCombiner: IsEndOfGameCombiner = (
  combinations,
  playerPoints,
) =>
  // OH fcuk, this is cool
  !(
    Object.keys(combinations).length === Object.keys(
      playerPoints[Object.keys(playerPoints)[Object.keys(playerPoints).length - 1]] || {},
    ).length
  ) // is hidden or not ;(
