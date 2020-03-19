import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import { i18n } from '../../../helpers/i18n/i18n'
import { restartGameThunk } from '../../../redux/actions/restartGameThunk'
import HomeIcon from '@material-ui/icons/Home'
import { useDispatchedCallback } from '../../../helpers/useDispatchedCallback'

export const GoHomeButton: FC = () => {
  const onClick = useDispatchedCallback(restartGameThunk())

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
