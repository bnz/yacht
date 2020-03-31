import React, { FC } from 'react'
import Popover from '@material-ui/core/Popover'
import { Dice } from '../../../Dices/Dice/Dice'
import { PopoverProps } from '@material-ui/core/Popover/Popover'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core'
import { Move } from '../../../../redux/reducers/history'

interface HistoryItemPopoverProps extends Pick<PopoverProps, 'open' | 'anchorEl'>, Pick<Move, 'tries'> {
  onClose(): void
}

const useStyles = makeStyles<Theme>(({ spacing }) => ({
  paper: {
    padding: `${1 / 3}em 0 0 ${1 / 3}em`,
    fontSize: spacing(3),
    '& > div': {
      display: 'flex',
    },
  },
}))


const popoverProps: Partial<PopoverProps> = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
}

export const HistoryItemPopover: FC<HistoryItemPopoverProps> = ({
  onClose, open, anchorEl, tries,
}) => {
  const { paper } = useStyles()

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      {...popoverProps}
      classes={{ paper }}
    >
      {tries.map((items, index) => (
        <div key={index}>
          {items.map(((item, index) => (
            <Dice key={index} value={item} />
          )))}
        </div>
      ))}
    </Popover>
  )
}

