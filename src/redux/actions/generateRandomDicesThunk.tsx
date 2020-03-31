import { rand } from '../../helpers/random'
import { generateRandomDices } from '../reducers/dices'
import { ThunkAction } from '../../helpers/types'
import { increaseShot } from '../reducers/playerMove'
import { addToHistoryThunk } from './addToHistoryThunk'

export const generateRandomDicesThunk: ThunkAction = () => (dispatch, getState) => {
  const { dices, dicesSelected } = getState()
  let randDices = [...dices]

  dices.forEach((item, index) => {
    if (dicesSelected.indexOf(index) === -1) {
      randDices[index] = rand()
    }
  })

  dispatch(increaseShot())
  dispatch(generateRandomDices(randDices))
  dispatch(addToHistoryThunk())
}
