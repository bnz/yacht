import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import {
  TABLE_FIRST_COLUMN_WIDTH,
  TableCellStyled,
  TABLE_COLUMN_WIDTH,
  TableCellStyledProps,
} from './TablePartsStyled/TableCellStyled'
import { TableRow, TableHead } from './TablePartsStyled/Table'
import { useSelector } from 'react-redux'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'

const playersSelector = makePlayersSelector()
const playerMoveSelector = makePlayerMoveSelector()

export const TableHeader: FC<Pick<TableCellStyledProps, 'large'>> = ({ large }) => {
  const players = useSelector(playersSelector)
  const [activePlayerId] = useSelector(playerMoveSelector)

  return (
    <TableHead>
      <TableRow>
        <TableCellStyled
          heading
          width={TABLE_FIRST_COLUMN_WIDTH}
          large={large}
        >
          {i18n('combinations')}
        </TableCellStyled>
        {players.map(({ name, id }) => (
          <TableCellStyled
            key={id}
            width={TABLE_COLUMN_WIDTH}
            heading
            centered
            active={activePlayerId === id}
            large={large}
          >
            {name}
          </TableCellStyled>
        ))}
        <TableCellStyled />
      </TableRow>
    </TableHead>
  )
}
