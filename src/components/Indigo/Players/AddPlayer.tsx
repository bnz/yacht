/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { PlayerWrapper } from './PlayerWrapper'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { i18n } from '../../../helpers/i18n/i18n'

export const AddPlayer: FC = observer(() => {
  const store = useStore()

  return (
    <PlayerWrapper alt onClick={
      useCallback(() => {
        store.addPlayer()
      }, [])
    }>
      <AddIcon fontSize="large" />
      <Typography component="div">
        {i18n('button.addPlayer')}
      </Typography>
    </PlayerWrapper>
  )
})
