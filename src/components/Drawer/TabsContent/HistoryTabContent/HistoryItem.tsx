import React, { FC, useCallback, useState } from 'react'
import { Move } from '../../../../redux/reducers/history'
import { GridContainer } from './GridContainer'
import { GridItem } from './GridItem'
import { Combination } from '../../../../redux/reducers/combinations'
import { i18n } from '../../../../helpers/i18n/i18n'
import { HistoryItemPopover } from './HistoryItemPopover'

interface HistoryItemProps extends Move {
  index: number
}

export const HistoryItem: FC<HistoryItemProps> = ({ tries, result, index }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const handleClick = useCallback((e) => setAnchorEl(e.currentTarget), [])
  const handleClose = useCallback(() => setAnchorEl(null), [])

  const open = Boolean(anchorEl)
  const combination = Object.keys(result)[0] as Combination
  const points = result[combination]
  const strikeOut = points === 0

  return (
    <>
      <GridContainer open={open} onClick={handleClick}>
        <GridItem item xs={1} strikeOut={strikeOut} altColor>
          {++index}
        </GridItem>
        <GridItem item xs={8} strikeOut={strikeOut}>
          {i18n(`combination.${combination}`)}
        </GridItem>
        <GridItem item xs={1} strikeOut={strikeOut} altAlign>
          {points}
        </GridItem>
      </GridContainer>
      <HistoryItemPopover
        open={open}
        tries={tries}
        onClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  )
}
