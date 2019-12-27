import React, { FC } from 'react'
import { i18n } from '../../../helpers/i18n/i18n'
import { DrawerListItem } from '../DrawerListItem'
import { DrawerListDivider } from '../DrawerListDivider'
import { ButtonGroup } from './ButtonGroup'
import Button from '@material-ui/core/Button'
import { maxDiceSize, minDiceSize } from '../../../redux/reducers/diceSize'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { DiceSizeChangerConnectedProps } from './DiceSizeChangerConnected'

export const DiceSizeChanger: FC<DiceSizeChangerConnectedProps> = ({ diceSize, increaseDiceSize, decreaseDiceSize }) => (
  <>
    <DrawerListDivider />
    <DrawerListItem
      button={false}
      icon={
        <ButtonGroup>
          <Button onClick={increaseDiceSize} disabled={diceSize === maxDiceSize}>
            <AddIcon />
          </Button>
          <Button onClick={decreaseDiceSize} disabled={diceSize === minDiceSize}>
            <RemoveIcon />
          </Button>
        </ButtonGroup>
      }
    >
      {i18n('diceSize')}
    </DrawerListItem>
  </>
)
