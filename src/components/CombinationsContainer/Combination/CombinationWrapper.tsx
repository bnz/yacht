import React, { FC } from 'react'
import { TABLE_COLUMN_WIDTH, TableCellStyled, TableCellStyledProps } from '../TablePartsStyled/TableCellStyled'
import { useSelector } from 'react-redux'
import { Player } from '../../../redux/reducers/players'
import { makePlayerMoveSelector } from '../../../redux/selectors/makePlayerMoveSelector'

interface CombinationWrapperProps extends Pick<TableCellStyledProps, 'selected'> {
  playerId: Player['id']
}

export const CombinationWrapper: FC<CombinationWrapperProps> = ({
  children,
  selected,
  playerId,
}) => {
  const playerMoveSelector = makePlayerMoveSelector()
  const [activePlayerId] = useSelector(playerMoveSelector)

  return (
    <TableCellStyled
      selected={selected}
      width={TABLE_COLUMN_WIDTH}
      active={activePlayerId === playerId}
      noPadding
      centered
    >
      {children}
    </TableCellStyled>
  )
}
