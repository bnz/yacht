import { ThunkAction } from '../../helpers/types'
import { nextTurnThunk } from './nextTurnThunk'
import { SaveCombinationParams as P, saveCombination } from '../reducers/playerPoints'
import { resetDices } from '../reducers/dices'
import { unselectAllDices } from '../reducers/dicesSelected'
import { saveResultToHistoryThunk } from './saveResultToHistoryThunk'

export type SaveCombinationThunk = (playerId: P[0], combination: P[1], points: P[2]) => ReturnType<ThunkAction>

export const saveCombinationThunk: SaveCombinationThunk = (playerId, combination, points) => (dispatch) => {
  dispatch(nextTurnThunk())
  dispatch(resetDices())
  dispatch(unselectAllDices())
  dispatch(saveCombination(playerId, combination, points))
  dispatch(saveResultToHistoryThunk(playerId, combination, points))
}
