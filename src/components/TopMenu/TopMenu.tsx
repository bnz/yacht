import React, { FC } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBarStyled } from './AppBarStyled'
import { MenuButtonStyled } from './MenuButton'
import { ChangeGameSelectStyled } from './ChangeGameSelect'

export const TopMenu: FC = () => (
  <AppBarStyled>
    <Toolbar>
      <MenuButtonStyled />
      <ChangeGameSelectStyled />
    </Toolbar>
  </AppBarStyled>
)
