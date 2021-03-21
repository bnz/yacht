import React, { FC, useCallback, useState } from 'react'
import { ThemeContext } from '../../../../../helpers/themeProviderHOC'
import { i18n } from '../../../../../helpers/i18n/i18n'
import { ListItem } from '../ListParts/ListItem'
import Switch from '@material-ui/core/Switch'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import { commonSettingsStorage } from '../../../../../index'

export const ThemeToggler: FC = () => {
  const [checked, setChecked] = useState(commonSettingsStorage.get('theme-auto', true))
  const cb = useCallback((fn) => {
    if (fn) {
      fn()
    }
    const auto = commonSettingsStorage.get('theme-auto', true)
    setChecked(!auto)
    commonSettingsStorage.set('theme-auto', !auto)
  }, [])

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme, setThemeByName }) => (
        <ListItem
          onClick={toggleTheme}
          disabled={checked}
          icon={
            <Switch
              checked={theme === 'dark'}
              color="default"
              disabled={checked}
            />
          }
          secondary={
            <Tooltip title={i18n('auto')}>
              <Checkbox
                color="default"
                edge="end"
                onChange={() => cb(setThemeByName)}
                checked={checked}
              />
            </Tooltip>
          }
        >
          {i18n('darkTheme')}
        </ListItem>
      )}
    </ThemeContext.Consumer>
  )
}
