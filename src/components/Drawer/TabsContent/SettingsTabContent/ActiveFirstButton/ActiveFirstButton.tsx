import React, { FC } from 'react'
import { ListItem } from '../ListParts/ListItem'
import { CheckboxAsIcon } from './CheckboxAsIcon'
import { i18n } from '../../../../../helpers/i18n/i18n'
import { useDispatchedCallback } from '../../../../../helpers/useDispatchedCallback'
import { toggleActiveFirstThunk } from '../../../../../redux/reducers/activeFirst'
import { makePlayersSelector } from '../../../../../redux/selectors/makePlayersSelector'
import { useSelector } from 'react-redux'

const playersSelector = makePlayersSelector()

export const ActiveFirstButton: FC = () => {
  const onClick = useDispatchedCallback(toggleActiveFirstThunk())
  const players = useSelector(playersSelector)

  if (players.length <= 1) {
    return null
  }

  return (
    <ListItem onClick={onClick} icon={<CheckboxAsIcon />}>
      {i18n('activePlayerFirst')}
    </ListItem>
  )
}
