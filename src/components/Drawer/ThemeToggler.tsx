import React, { FC } from 'react'
import { ThemeContext } from '../../helpers/themeProviderHOC'
import Switch from '@material-ui/core/Switch'
import { i18n } from '../../helpers/i18n'
import { DrawerListItem } from './DrawerListItem'

export const ThemeToggler: FC = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <DrawerListItem
        onClick={toggleTheme}
        icon={
          <Switch
            checked={theme === 'dark'}
            color="default"
          />
        }
      >
        {i18n('Темная тема')}
      </DrawerListItem>
    )}
  </ThemeContext.Consumer>
)
