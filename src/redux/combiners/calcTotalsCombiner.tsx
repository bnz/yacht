import { Player, PlayersTotals } from '../reducers/players'
import { PlayerPoints } from '../reducers/playerPoints'
import { Combination } from '../reducers/combinations'

type CalcTotals = (players: Player[], playerPoints: PlayerPoints) => PlayersTotals

export const calcTotalsCombiner: CalcTotals = (players, playerPoints) => {
  let totals: PlayersTotals = {}

  players.forEach(({ id: playerId }) => {
    const points = playerPoints[playerId] || {}

    totals[playerId] = Object.keys(points).reduce((prev, key) => {
      const curr = points[key as Combination]! // this points should exists!

      if (key === Combination.BONUS && Math.sign(curr) === -1) {
        return prev
      }

      return prev + curr
    }, 0)
  })

  return totals
}
