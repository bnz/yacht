import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import { TableCellStyled } from './TablePartsStyled/TableCellStyled'
import { TableRow, TableHead } from './TablePartsStyled/Table'
import { useSelector } from 'react-redux'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'
import { makeTableSizeSelector } from '../../redux/selectors/makeTableSizeSelector'

const playersSelector = makePlayersSelector()
const playerMoveSelector = makePlayerMoveSelector()
const tableSizeSelector = makeTableSizeSelector()

export const TableHeader: FC = () => {
  const players = useSelector(playersSelector)
  const [activePlayerId] = useSelector(playerMoveSelector)
  const tableSize = useSelector(tableSizeSelector)
  const large = tableSize === 'medium'

  return (
    <TableHead>
      <TableRow>
        <TableCellStyled heading firstColumn large={large}>
          {i18n('combinations')}
        </TableCellStyled>
        {players.map(({ name, id }) => (
          <TableCellStyled
            key={id}
            heading
            centered
            active={activePlayerId === id}
            large={large}
          >
            {name}
          </TableCellStyled>
        ))}
        <TableCellStyled empty />
      </TableRow>
    </TableHead>
  )
}
