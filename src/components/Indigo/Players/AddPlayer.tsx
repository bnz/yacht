/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { PlayerWrapper } from './PlayerWrapper'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { observer } from 'mobx-react'
import { i18n } from '../../../helpers/i18n/i18n'
import { useStore } from '../Store/HexProvider'
import { ActionButton } from './ActionButton/ActionButton'
import { AspectRatio } from '../AspectRatio/AspectRatio'

export const AddPlayer: FC = observer(() => (
  <PlayerWrapper alt onClick={
    useCallback(useStore().playersStore.addPlayer, [])
  }>
    <AspectRatio>
      <ActionButton>
        <AddIcon fontSize="large" />
        <Typography component="div">
          {i18n('button.addPlayer')}
        </Typography>
      </ActionButton>
    </AspectRatio>
  </PlayerWrapper>
))
