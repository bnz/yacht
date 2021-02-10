import React, { FC } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBarStyled } from './AppBarStyled'
import { MenuButtonStyled } from './MenuButton'
import { SmileButtonStyled } from './SmileButton'
import { ChangeGameSelectStyled } from './ChangeGameSelect'

export const TopMenu: FC = () => (
  <AppBarStyled>
    <Toolbar>
      <MenuButtonStyled />
      <ChangeGameSelectStyled />
      <SmileButtonStyled />
    </Toolbar>
  </AppBarStyled>
)
