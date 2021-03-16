/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { i18n } from '../../../helpers/i18n/i18n'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'

export const PlayersActions: FC = observer(() => {
  const store = useStore()
  const back = useCallback(store.gamePhase.goToPreGame, [])
  const start = useCallback(store.gamePhase.startGame, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <Button
        size="large"
        startIcon={<ArrowBackIosIcon />}
        style={{ marginRight: 16 }}
        onClick={back}
      >
        {i18n('button.cancel')}
      </Button>
      <Button
        size="large"
        variant="contained"
        color="primary"
        endIcon={<PlayCircleFilledWhiteIcon />}
        onClick={start}
      >
        {i18n('button.startGame')}
      </Button>
    </div>
  )
})
