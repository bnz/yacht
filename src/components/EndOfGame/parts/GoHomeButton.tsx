import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import { i18n } from '../../../helpers/i18n/i18n'
import { useDispatch } from 'react-redux'
import { ThunkAction2 } from '../../../helpers/types'
import { restartGameThunk } from '../../../redux/actions/restartGameThunk'
import HomeIcon from '@material-ui/icons/Home'

export const GoHomeButton: FC = () => {
  const dispatch = useDispatch<ThunkAction2>()
  const onClick = () => dispatch(restartGameThunk())

  return (
    <Button
      variant="contained"
      color="default"
      startIcon={<HomeIcon />}
      onClick={onClick}
    >
      {i18n('button.goHome')}
    </Button>
  )
}
