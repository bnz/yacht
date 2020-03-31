import React, { FC } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { Tooltip } from '@material-ui/core'
import { makePlayersSelector } from '../../../../redux/selectors/makePlayersSelector'
import { useSelector } from 'react-redux'
import {
  makeHistoryFollowActivePlayerSelector, toggleHistoryFollowActivePlayerThunk,
} from '../../../../redux/reducers/historyFollowActivePlayer'
import { i18n } from '../../../../helpers/i18n/i18n'
import { useDispatchedCallback } from '../../../../helpers/useDispatchedCallback'

const playersSelector = makePlayersSelector()
const historyFollowActivePlayerSelector = makeHistoryFollowActivePlayerSelector()

export const FollowActivePlayerCheckbox: FC = () => {
  const players = useSelector(playersSelector)
  const historyFollowActivePlayer = useSelector(historyFollowActivePlayerSelector)
  const onChange = useDispatchedCallback(toggleHistoryFollowActivePlayerThunk())

  if (players.length < 2) {
    return null
  }

  return (
    <Tooltip placement="top" title={i18n('history.checkbox.followActivePlayer')}>
      <Checkbox
        color="default"
        checked={historyFollowActivePlayer}
        onChange={onChange}
      />
    </Tooltip>
  )
}
