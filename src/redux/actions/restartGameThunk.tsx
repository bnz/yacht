import { ThunkAction } from '../../helpers/types'
import { resetDices } from '../reducers/dices'
import { unselectAllDices } from '../reducers/dicesSelected'
import { changeGamePhase, GamePhases } from '../reducers/gamePhase'
import { resetPlayerMove } from '../reducers/playerMove'
import { resetPlayerPoints } from '../reducers/playerPoints'

export const restartGameThunk: ThunkAction = () => (dispatch) => {
  dispatch(resetPlayerMove())
  dispatch(resetPlayerPoints())
  dispatch(resetDices())
  dispatch(unselectAllDices())
  dispatch(changeGamePhase(GamePhases.PRE_GAME))
}
