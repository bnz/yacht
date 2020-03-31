import React, { ChangeEvent, FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { makePlayersSelector } from '../../../../redux/selectors/makePlayersSelector'
import { cropStringBy } from '../../../../helpers/cropStringBy'
import { i18n } from '../../../../helpers/i18n/i18n'
import { SelectWrapperStyled } from './SelectWrapperStyled'
import { Typography } from '@material-ui/core'
import { Move } from '../../../../redux/reducers/playerMove'

const playersSelector = makePlayersSelector()

interface HistoryTabContentHeaderProps {
  playerId: Move[0]
  setPlayerId(value: Move[0]): void
}

export const HistoryTabContentHeader: FC<HistoryTabContentHeaderProps> = ({ playerId, setPlayerId }) => {
  const players = useSelector(playersSelector)

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<{ value: unknown }>) => setPlayerId(value as Move[0]),
    [setPlayerId],
  )

  return players.length > 1 ? (
    <SelectWrapperStyled>
      <FormControl>
        <InputLabel>
          {i18n('history.user.label')}
        </InputLabel>
        <Select value={playerId} onChange={handleChange}>
          {players.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {cropStringBy((name || ''), 30)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectWrapperStyled>
  ) : (
    <Typography variant="h5" align="center" style={{ margin: '16px 0' }}>
      {i18n('history.header')}
    </Typography>
  )
}

