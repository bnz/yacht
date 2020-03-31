import React, { FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { TableCellStyled } from './TablePartsStyled/TableCellStyled'
import { CombinationConnected } from './Combination/CombinationConnected'
import { isBonus } from '../../redux/reducers/combinations'
import { Table, TableBody, TableRow } from './TablePartsStyled/Table'
import { TableHeader } from './TableHeader'
import { TableFooter } from './TableFooter'
import { useSelector } from 'react-redux'
import { makeCombinationsSelector } from '../../redux/selectors/makeCombinationsSelector'
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
    <Table size={tableSize}>
      <TableHeader />
      <TableBody>
        {combinations.map(({ name, title, combination }) => {
          const selected = isBonus(combination)

          return (
            <TableRow key={name}>
              <TableCellStyled firstColumn selected={selected} large={large}>
                <Tooltip title={title} placement="top-start" enterDelay={300} disableFocusListener>
                  <span>{name}</span>
                </Tooltip>
              </TableCellStyled>
              {players.map(({ id: playerId }) => (
                <TableCellStyled
                  key={playerId}
                  large={large}
                  selected={selected}
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
                selected={selected}
                large={large}
                empty
              />
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter />
    </Table>
  )
}
