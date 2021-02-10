/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { i18n } from '../../helpers/i18n/i18n'
import Select from '@material-ui/core/Select'
import { StyledProps } from '@material-ui/core/styles'
import { getItem } from '../../helpers/getItem'
import { setItem } from '../../helpers/setItem'
import { Themed } from '../../helpers/types'

const ChangeGameSelect: FC<StyledProps> = ({ className }) => {
  const [age, setAge] = useState(getItem('game', false) || 'yacht')
  const handleChange = useCallback(({ target: { value } }: ChangeEvent<{ name?: string; value: unknown }>) => {
    setAge(value)
    setItem('game', value as 'yacht' | 'indigo')
    // eslint-disable-next-line no-self-assign
    window.location = window.location
  }, [])

  return (
    <div className={className}>
      <Select
        value={age}
        onChange={handleChange}
        disableUnderline
      >
        <MenuItem value="yacht">{i18n('yacht')}</MenuItem>
        <MenuItem value="indigo">{i18n('indigo')}</MenuItem>
      </Select>
    </div>
  )
}

export const ChangeGameSelectStyled = styled(ChangeGameSelect)(({
  theme: { breakpoints: { down } },
}: Themed) => ({
  flex: 1,
  [down('xs')]: {
    textAlign: 'center',
  },
}))
