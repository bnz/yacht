import React, { FC } from 'react'
import {
  TABLE_COLUMN_WIDTH,
  TABLE_FIRST_COLUMN_WIDTH,
  TableCellStyled,
  TableCellStyledProps,
} from './TablePartsStyled/TableCellStyled'
import { i18n } from '../../helpers/i18n/i18n'
import { TableRow, TableFooter as TableFoot } from './TablePartsStyled/Table'
import { useSelector } from 'react-redux'
import { makeGetTotalsSelector } from '../../redux/selectors/makeGetTotalsSelector'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'

const playersSelector = makePlayersSelector()
const getTotalsSelector = makeGetTotalsSelector()
const playerMoveSelector = makePlayerMoveSelector()

export const TableFooter: FC<Pick<TableCellStyledProps, 'large'>> = ({ large }) => {
  const players = useSelector(playersSelector)
  const totals = useSelector(getTotalsSelector)
  const [activePlayerId] = useSelector(playerMoveSelector)

  return (
    <TableFoot>
      <TableRow>
        <TableCellStyled large={large} width={TABLE_FIRST_COLUMN_WIDTH}>
          {i18n('total')}
        </TableCellStyled>
        {players.map(({ id: playerId }) => (
          <TableCellStyled
            key={playerId}
            width={TABLE_COLUMN_WIDTH}
            centered
            active={activePlayerId === playerId}
            noPadding
            large={large}
          >
            {totals[playerId]}
          </TableCellStyled>
        ))}
        <TableCellStyled />
      </TableRow>
    </TableFoot>
  )
}
