import React, { FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { TableCellStyled } from './TablePartsStyled/TableCellStyled'
import { CombinationConnected } from './Combination/CombinationConnected'
import { isBonus, makeCombinationsSelector } from '../../redux/reducers/combinations'
import { Table, TableRow } from './TablePartsStyled/Table'
import { TableHeader } from './TableHeader'
import { TableFooter } from './TableFooter'
import { useSelector } from 'react-redux'
import { makeTableSizeSelector } from '../../redux/selectors/makeTableSizeSelector'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makeIsMoveAvailableSelector } from '../../redux/selectors/makeIsMoveAvailableSelector'
import { makePlayerMoveSelector } from '../../redux/selectors/makePlayerMoveSelector'

const combinationsSelector = makeCombinationsSelector()
const playersSelector = makePlayersSelector()
const isMoveAvailableSelector = makeIsMoveAvailableSelector()
const tableSizeSelector = makeTableSizeSelector()
const playerMoveSelector = makePlayerMoveSelector()

export const CombinationsContainer: FC = () => {
  const combinations = useSelector(combinationsSelector)
  const players = useSelector(playersSelector)
  const isMoveAvailable = useSelector(isMoveAvailableSelector)
  const [activePlayerId] = useSelector(playerMoveSelector)
  const tableSize = useSelector(tableSizeSelector)

  const large = tableSize === 'medium'

  return (
    <div style={{ display: 'flex' }}>
      <Table size={tableSize}>
        <TableHeader />
        {combinations.map(({ name, title, combination }) => (
          <TableRow key={name}>
            <TableCellStyled firstColumn selected={isBonus(combination)} large={large}>
              <Tooltip title={title} placement='top-start' enterDelay={300} disableFocusListener>
                <span>{name}</span>
              </Tooltip>
            </TableCellStyled>
            {players.map(({ id: playerId }) => (
              <TableCellStyled
                key={playerId}
                large={large}
                selected={isBonus(combination)}
                active={activePlayerId === playerId}
                noPadding
                centered
              >
                <CombinationConnected
                  playerId={playerId}
                  combination={combination}
                  isMoveAvailable={isMoveAvailable}
                />
              </TableCellStyled>
            ))}
            <TableCellStyled
              selected={isBonus(combination)}
              large={large}
              empty
            />
          </TableRow>
        ))}
        <TableFooter />
      </Table>
    </div>
  )
}
