import React, { FC } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { TABLE_FIRST_COLUMN_WIDTH, TableCellStyled } from './TablePartsStyled/TableCellStyled'
import { CombinationConnected } from './Combination/CombinationConnected'
import { Combination, isBonus } from '../../redux/reducers/combinations'
import { Table, TableBody, TableRow } from './TablePartsStyled/Table'
import { TableHeader } from './TableHeader'
import { CombinationWrapper } from './Combination/CombinationWrapper'
import { TableFooter } from './TableFooter'
import { useSelector } from 'react-redux'
import { makeCombinationsSelector } from '../../redux/selectors/makeCombinationsSelector'
import { makeTableSizeSelector } from '../../redux/selectors/makeTableSizeSelector'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { makeIsMoveAvailableSelector } from '../../redux/selectors/makeIsMoveAvailableSelector'

const combinationsSelector = makeCombinationsSelector()
const playersSelector = makePlayersSelector()
const isMoveAvailableSelector = makeIsMoveAvailableSelector()
const tableSizeSelector = makeTableSizeSelector()

export const CombinationsContainer: FC = () => {
  const combinations = useSelector(combinationsSelector)
  const players = useSelector(playersSelector)
  const tableSize = useSelector(tableSizeSelector)
  const isMoveAvailable = useSelector(isMoveAvailableSelector)

  const large = tableSize === 'medium'

  return (
    <Table size={tableSize}>
      <TableHeader large={large} />
      <TableBody>
        {combinations.map(({ name, title, combination }) => (
          <TableRow key={name}>
            <TableCellStyled
              selected={combination === Combination.BONUS}
              width={TABLE_FIRST_COLUMN_WIDTH}
              large={large}
            >
              <Tooltip title={title} placement="top-start" enterDelay={300} disableFocusListener>
                <span>{name}</span>
              </Tooltip>
            </TableCellStyled>
            {players.map(({ id: playerId }) => (
              <CombinationWrapper
                key={playerId}
                selected={isBonus(combination)}
                playerId={playerId}
                large={large}
              >
                <CombinationConnected
                  playerId={playerId}
                  combination={combination}
                  isMoveAvailable={isMoveAvailable}
                />
              </CombinationWrapper>
            ))}
            <TableCellStyled
              selected={isBonus(combination)}
              large={large}
            />
          </TableRow>
        ))}
      </TableBody>
      <TableFooter large={large} />
    </Table>
  )
}
