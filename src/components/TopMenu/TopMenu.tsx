import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import Toolbar from '@material-ui/core/Toolbar'
import { Heading } from './Heading'
import { AppBarStyled } from './AppBarStyled'
import { MenuButtonConnected } from './MenuButton/MenuButtonConnected'

export const TopMenu: FC = () => (
  <AppBarStyled>
    <Toolbar>
      <MenuButtonConnected />
      <Heading>
        {i18n('yacht')}
      </Heading>
    </Toolbar>
  </AppBarStyled>
)
