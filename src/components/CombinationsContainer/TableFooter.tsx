import React, { FC } from 'react'
import { TABLE_COLUMN_WIDTH, TABLE_FIRST_COLUMN_WIDTH, TableCellStyled } from './TablePartsStyled/TableCellStyled'
import { i18n } from '../../helpers/i18n/i18n'
import { TableRow, TableFooter as TableFoot } from './TablePartsStyled/Table'
import { useSelector } from 'react-redux'
import { makeGetTotalsSelector } from '../../redux/selectors/makeGetTotalsSelector'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'

export const TableFooter: FC = () => {
  const playersSelector = makePlayersSelector()
  const players = useSelector(playersSelector)
  const getTotalsSelector = makeGetTotalsSelector()
  const totals = useSelector(getTotalsSelector)
  const playerMoveSelector = makePlayerMoveSelector()
  const [activePlayerId] = useSelector(playerMoveSelector)

  return (
    <TableFoot>
      <TableRow>
        <TableCellStyled width={TABLE_FIRST_COLUMN_WIDTH}>
          {i18n('total')}
        </TableCellStyled>
        {players.map(({ id: playerId }) => (
          <TableCellStyled
            key={playerId}
            width={TABLE_COLUMN_WIDTH}
            centered
            active={activePlayerId === playerId}
            noPadding
          >
            {totals[playerId]}
          </TableCellStyled>
        ))}
        <TableCellStyled />
      </TableRow>
    </TableFoot>
  )
}
