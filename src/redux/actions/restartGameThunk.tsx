import { ThunkAction } from '../../helpers/types'
import { resetDices } from '../reducers/dices'
import { unselectAllDices } from '../reducers/dicesSelected'
import { changeGamePhase, GamePhases } from '../reducers/gamePhase'
import { resetPlayerMove } from '../reducers/playerMove'
import { resetPlayerPoints } from '../reducers/playerPoints'
import { resetHistory } from '../reducers/history'
import { ActiveTab, changeActiveTab } from '../reducers/activeTab'

export const restartGameThunk: ThunkAction = () => (dispatch) => {
  dispatch(resetPlayerMove())
  dispatch(resetPlayerPoints())
  dispatch(resetDices())
  dispatch(resetHistory())
  dispatch(unselectAllDices())
  dispatch(changeGamePhase(GamePhases.PRE_GAME))
  dispatch(changeActiveTab(ActiveTab.SETTINGS))
}
