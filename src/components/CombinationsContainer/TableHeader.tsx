import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import { TABLE_FIRST_COLUMN_WIDTH, TableCellStyled, TABLE_COLUMN_WIDTH } from './TablePartsStyled/TableCellStyled'
import { TableRow, TableHead } from './TablePartsStyled/Table'
import { useSelector } from 'react-redux'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'

export const TableHeader: FC = () => {
  const playersSelector = makePlayersSelector()
  const players = useSelector(playersSelector)
  const playerMoveSelector = makePlayerMoveSelector()
  const [activePlayerId] = useSelector(playerMoveSelector)

  return (
    <TableHead>
      <TableRow>
        <TableCellStyled heading width={TABLE_FIRST_COLUMN_WIDTH}>
          {i18n('combinations')}
        </TableCellStyled>
        {players.map(({ name, id }) => (
          <TableCellStyled
            key={id}
            width={TABLE_COLUMN_WIDTH}
            heading
            centered
            active={activePlayerId === id}
          >
            {name}
          </TableCellStyled>
        ))}
        <TableCellStyled />
      </TableRow>
    </TableHead>
  )
}
