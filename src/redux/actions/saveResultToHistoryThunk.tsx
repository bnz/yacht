import { ThunkActionP3 } from '../../helpers/types'
import { Player } from '../reducers/players'
import { Combination } from '../reducers/combinations'
import { CheckMatch } from '../../helpers/checkMatch'
import { addToHistory } from '../reducers/history'
import update from 'immutability-helper'

export const saveResultToHistoryThunk: ThunkActionP3<Player['id'], Combination, ReturnType<CheckMatch>['points']> = (
  playerId, combination, points,
) => (dispatch, getState) => {
  let { history } = getState()

  const lastElementIndex = history[playerId].length - 1
  history = update(history, {
    [playerId]: {
      [lastElementIndex]: {
        result: {
          $merge: {
            [combination]: points,
          },
        },
      },
    },
  })

  dispatch(addToHistory(history))
}
