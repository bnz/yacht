/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import { i18n } from '../../../helpers/i18n/i18n'
import { useStore } from '../Store/HexProvider'

export const StartButton: FC = () => (
  <Button
    variant="contained"
    size="large"
    color="primary"
    onClick={useCallback(useStore().gamePhase.goToPlayersSelection, [])}
  >
    {i18n('button.startNewGame')}
  </Button>
)
