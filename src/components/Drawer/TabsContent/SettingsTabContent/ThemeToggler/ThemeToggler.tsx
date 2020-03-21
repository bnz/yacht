import React, { FC } from 'react'
import { ThemeContext } from '../../../../../helpers/themeProviderHOC'
import Switch from '@material-ui/core/Switch'
import { i18n } from '../../../../../helpers/i18n/i18n'
import { ListItem } from '../ListParts/ListItem'

export const ThemeToggler: FC = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <ListItem
        onClick={toggleTheme}
        icon={
          <Switch
            checked={theme === 'dark'}
            color="default"
          />
        }
      >
        {i18n('darkTheme')}
      </ListItem>
    )}
  </ThemeContext.Consumer>
)
