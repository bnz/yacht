import { Player, PlayersTotals } from '../redux/reducers/players'
import { PlayerPoints } from '../redux/reducers/playerPoints'
import { Combination } from '../redux/reducers/combinations'

type CalcTotals = (players: Player[], playerPoints: PlayerPoints) => PlayersTotals

export const calcTotals: CalcTotals = (players, playerPoints) => {
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
