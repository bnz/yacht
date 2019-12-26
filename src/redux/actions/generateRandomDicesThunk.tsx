import { rand } from '../../helpers/random'
import { generateRandomDices } from '../reducers/dices'
import { ThunkAction } from '../../helpers/types'
import { increaseShot } from '../reducers/playerMove'

export const generateRandomDicesThunk: ThunkAction = () => (dispatch, getState) => {
  const { dices, dicesSelected } = getState()
  let randDices = dices

  dices.forEach((item, index) => {
    if (dicesSelected.indexOf(index) === -1) {
      randDices[index] = rand()
    }
  })

  // TODO 2
  // dispatch({
  //   type: ConditionalCSS.HISTORY_PUSH,
  //   entry: {
  //     dices: List(randDices),
  //     playerId: state.getIn(['playerMove', 'playerId']),
  //     shot: state.getIn(['playerMove', 'shot']),
  //   }
  // })

  dispatch(increaseShot())
  dispatch(generateRandomDices(randDices))
}
