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
import { combinationsSelector } from '../../redux/selectors/combinationsSelector'
import { tableSizeSelector } from '../../redux/selectors/tableSizeSelector'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { isMoveAvailableSelector } from '../../redux/selectors/noMovesSelector'

export const CombinationsContainer: FC = () => {
  const combinations = useSelector(combinationsSelector)
  const playersSelector = makePlayersSelector()
  const players = useSelector(playersSelector)
  const tableSize = useSelector(tableSizeSelector)
  const isMoveAvailable = useSelector(isMoveAvailableSelector)

  // console.log({
  //   isMoveAvailable,
  // })

  return (
    <Table size={tableSize}>
      <TableHeader />
      <TableBody>
        {combinations.map(({ name, title, combination }) => (
          <TableRow key={name}>
            <TableCellStyled
              selected={combination === Combination.BONUS}
              width={TABLE_FIRST_COLUMN_WIDTH}
            >
              <Tooltip title={title} placement="top-start" enterDelay={300}>
                <span>{name}</span>
              </Tooltip>
            </TableCellStyled>
            {players.map(({ id: playerId }) => (
              <CombinationWrapper
                key={playerId}
                selected={isBonus(combination)}
                playerId={playerId}
              >
                <CombinationConnected
                  playerId={playerId}
                  combination={combination}
                  isMoveAvailable={isMoveAvailable}
                />
              </CombinationWrapper>
            ))}
            <TableCellStyled selected={isBonus(combination)} />
          </TableRow>
        ))}
      </TableBody>
      <TableFooter />
    </Table>
  )
}
