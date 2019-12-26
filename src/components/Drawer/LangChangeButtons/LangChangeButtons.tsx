import React, { FC } from 'react'
import { DrawerListDivider } from '../DrawerListDivider'
import { DrawerListItem } from '../DrawerListItem'
import { ButtonGroup } from '../DiceSizeChanger/ButtonGroup'
import Button from '@material-ui/core/Button'

interface LangChangeButtonsProps {

}

export const LangChangeButtons: FC<LangChangeButtonsProps> = ({  }) => {

  return (
    <>
      <DrawerListDivider />
      <DrawerListItem
        button={false}
        icon={
          <ButtonGroup size="large">
            <Button>русский</Button>
            <Button>english</Button>
          </ButtonGroup>
        }
      />
    </>
  )
}
