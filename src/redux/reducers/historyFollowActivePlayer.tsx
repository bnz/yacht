import { Reducer } from 'redux'
import { ActionWithEntry, Selector, ThunkAction } from '../../helpers/types'
import { createSelector } from 'reselect'
import { simpleCombiner } from '../combiners/simpleCombiner'

enum Constants {
  TOGGLE_HISTORY_FOLLOW_ACTIVE_PLAYER = 'TOGGLE_HISTORY_FOLLOW_ACTIVE_PLAYER',
}

type HistoryFollowActivePlayer = boolean

export interface HistoryFollowActivePlayerState {
  historyFollowActivePlayer: HistoryFollowActivePlayer
}

type HistoryFollowActivePlayerActionReturn = ActionWithEntry<Constants, HistoryFollowActivePlayer>

export const historyFollowActivePlayerDefaultState: HistoryFollowActivePlayer = true

export const historyFollowActivePlayerSelector: Selector<HistoryFollowActivePlayer> = ({
  historyFollowActivePlayer,
}) => historyFollowActivePlayer

export const makeHistoryFollowActivePlayerSelector = () => createSelector(
  historyFollowActivePlayerSelector,
  simpleCombiner,
)

type SetHistoryFollowActivePlayer = (flag: HistoryFollowActivePlayer) => HistoryFollowActivePlayerActionReturn

export const setHistoryFollowActivePlayer: SetHistoryFollowActivePlayer = (entry) => ({
  type: Constants.TOGGLE_HISTORY_FOLLOW_ACTIVE_PLAYER,
  entry,
})

export const toggleHistoryFollowActivePlayerThunk: ThunkAction = () => (dispatch, getState) => {
  const { historyFollowActivePlayer } = getState()
  dispatch(setHistoryFollowActivePlayer(!historyFollowActivePlayer))
}

export const historyFollowActivePlayer: Reducer<HistoryFollowActivePlayer, HistoryFollowActivePlayerActionReturn> = (
  state = historyFollowActivePlayerDefaultState,
  { type, entry },
) => {
  switch (type) {
    case Constants.TOGGLE_HISTORY_FOLLOW_ACTIVE_PLAYER: {
      return entry
    }
    default:
      return state
  }
}
