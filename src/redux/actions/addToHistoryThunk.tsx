import { ThunkAction } from '../../helpers/types'
import update from 'immutability-helper'
import { addToHistory } from '../reducers/history'

export const addToHistoryThunk: ThunkAction = () => (dispatch, getState) => {
  const { playerMove: [activePlayerId, shot], dices: stateDices, dicesSelected } = getState()
  let { history } = getState()
  let dices = [...stateDices]

  if (history[activePlayerId] === undefined) {
    history = update(history, {
      $merge: {
        [activePlayerId]: [],
      },
    })
  }

  if (shot === 1) {
    history = update(history, {
      [activePlayerId]: {
        $push: [
          {
            tries: [dices],
            result: {},
            dicesSelected: [],
          },
        ],
      },
    })
  } else {
    const lastElementIndex = history[activePlayerId].length - 1
    history = update(history, {
      [activePlayerId]: {
        [lastElementIndex]: {
          tries: { $push: [dices] },
          dicesSelected: { $push: [dicesSelected] },
        },
      },
    })
  }

  dispatch(addToHistory(history))
}
