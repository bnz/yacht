import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBarStyled } from './AppBarStyled'
import { MenuButtonStyled } from './MenuButton'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { setItem } from '../../helpers/setItem'
import { getItem } from '../../helpers/getItem'

export const TopMenu: FC = () => {
  const [age, setAge] = useState(getItem('game', false) || 'yacht')
  const handleChange = useCallback(({ target: { value } }: ChangeEvent<{ name?: string; value: unknown }>) => {
    setAge(value)
    setItem('game', value as 'yacht' | 'indigo')
    // eslint-disable-next-line no-self-assign
    window.location = window.location
  }, [])
  return (
    <AppBarStyled>
      <Toolbar>
        <MenuButtonStyled />
        <Select
          value={age}
          onChange={handleChange}
          disableUnderline
        >
          <MenuItem value="yacht">{i18n('yacht')}</MenuItem>
          <MenuItem value="indigo">{i18n('indigo')}</MenuItem>
        </Select>
      </Toolbar>
    </AppBarStyled>
  )
}
