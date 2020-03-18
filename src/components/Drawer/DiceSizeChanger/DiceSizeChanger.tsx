import React, { FC } from 'react'
import { i18n } from '../../../helpers/i18n/i18n'
import { DrawerListItem } from '../DrawerListItem'
import { DrawerListDivider } from '../DrawerListDivider'
import { ButtonGroup } from './ButtonGroup'
import { makeDiceSizeSelector } from '../../../redux/selectors/makeDiceSizeSelector'
import { useSelector } from 'react-redux'
import { useDispatchedCallback } from '../../../helpers/useDispatchedCallback'
import Button from '@material-ui/core/Button'
import { decreaseDiceSize, increaseDiceSize, maxDiceSize, minDiceSize } from '../../../redux/reducers/diceSize'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const diceSizeSelector = makeDiceSizeSelector()

export const DiceSizeChanger: FC = () => {
  const diceSize = useSelector(diceSizeSelector)
  const increase = useDispatchedCallback(increaseDiceSize())
  const decrease = useDispatchedCallback(decreaseDiceSize())

  return (
    <>
      <DrawerListDivider />
      <DrawerListItem
        button={false}
        icon={
          <ButtonGroup>
            <Button onClick={increase} disabled={diceSize === maxDiceSize}>
              <AddIcon />
            </Button>
            <Button onClick={decrease} disabled={diceSize === minDiceSize}>
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        }
      >
        {i18n('diceSize')}
      </DrawerListItem>
    </>
  )
}
