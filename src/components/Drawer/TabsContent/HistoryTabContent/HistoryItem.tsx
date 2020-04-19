import React, { FC, useCallback, useState } from 'react'
import { Move } from '../../../../redux/reducers/history'
import { GridContainer } from './GridContainer'
import { GridItem } from './GridItem'
import { Combination } from '../../../../redux/reducers/combinations'
import { HistoryItemPopover } from './HistoryItemPopover'
import { MAX_SHOT_COUNT } from '../../../../redux/reducers/playerMove'
import { historyCombinationText, Tries } from '../../../../helpers/historyCombinationText'

interface HistoryItemProps extends Move {
  index: number
}

export const HistoryItem: FC<HistoryItemProps> = ({ tries, result, dicesSelected, index }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const handleClick = useCallback((e) => setAnchorEl(e.currentTarget), [])
  const handleClose = useCallback(() => setAnchorEl(null), [])

  const open = Boolean(anchorEl)
  const combination = Object.keys(result)[0] as Combination
  const points = result[combination]
  const strikeOut = points === 0
  const triesLeft = MAX_SHOT_COUNT - tries.length

  return (
    <>
      <GridContainer open={open} onClick={handleClick}>
        <GridItem item xs={1} strikeOut={strikeOut} altColor>
          {++index}
        </GridItem>
        <GridItem item xs={8} strikeOut={strikeOut} active={combination === undefined}>
          {historyCombinationText(combination, triesLeft as Tries)}
        </GridItem>
        <GridItem item xs={1} strikeOut={strikeOut} altAlign>
          {points}
        </GridItem>
      </GridContainer>
      {open && (
        <HistoryItemPopover
          open
          tries={tries}
          onClose={handleClose}
          anchorEl={anchorEl}
          dicesSelected={dicesSelected}
        />
      )}
    </>
  )
}
