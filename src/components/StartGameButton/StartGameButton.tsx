import { useDispatch } from 'react-redux'

import { changeGamePhase, GamePhases } from '../../redux/reducers/gamePhase'
import Button from '@material-ui/core/Button'
import { i18n } from '../../helpers/i18n/i18n'
import React, { FC, useCallback } from 'react'

export const StartGameButton: FC = () => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    () => dispatch(changeGamePhase(GamePhases.PLAYERS_SELECTION)),
    [dispatch],
  )

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={onClick}
    >
      {i18n('button.startNewGame')}
    </Button>
  )
}
