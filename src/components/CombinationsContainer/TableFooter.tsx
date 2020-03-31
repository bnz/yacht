import React, { FC } from 'react'
import { TableCellStyled } from './TablePartsStyled/TableCellStyled'
import { i18n } from '../../helpers/i18n/i18n'
import { TableRow, TableFooter as TableFoot } from './TablePartsStyled/Table'
import { useSelector } from 'react-redux'
import { makeGetTotalsSelector } from '../../redux/selectors/makeGetTotalsSelector'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'
import { makeTableSizeSelector } from '../../redux/selectors/makeTableSizeSelector'

const playersSelector = makePlayersSelector()
const getTotalsSelector = makeGetTotalsSelector()
const playerMoveSelector = makePlayerMoveSelector()
const tableSizeSelector = makeTableSizeSelector()

export const TableFooter: FC = () => {
  const players = useSelector(playersSelector)
  const totals = useSelector(getTotalsSelector)
  const [activePlayerId] = useSelector(playerMoveSelector)
  const tableSize = useSelector(tableSizeSelector)

  const large = tableSize === 'medium'

  return (
    <TableFoot>
      <TableRow>
        <TableCellStyled large={large} firstColumn>
          {i18n('total')}
        </TableCellStyled>
        {players.map(({ id: playerId }) => (
          <TableCellStyled
            key={playerId}
            active={activePlayerId === playerId}
            large={large}
            centered
            noPadding
          >
            {totals[playerId]}
          </TableCellStyled>
        ))}
        <TableCellStyled empty />
      </TableRow>
    </TableFoot>
  )
}
