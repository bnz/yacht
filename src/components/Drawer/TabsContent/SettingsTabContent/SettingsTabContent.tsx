import React, { FC } from 'react'
import List from '@material-ui/core/List'
import { DiceSizeChanger as DiceSizeChangerComponent } from './DiceSizeChanger/DiceSizeChanger'
import { notInPlayVisibilityHOC } from '../../../../helpers/notInPlayVisibilityHOC'
import { ChangeTableSizeButton } from './ChangeTableSizeButton/ChangeTableSizeButton'
import { ActiveFirstButton } from './ActiveFirstButton/ActiveFirstButton'

const ChangeTableSize = notInPlayVisibilityHOC(ChangeTableSizeButton)
const DiceSizeChanger = notInPlayVisibilityHOC(DiceSizeChangerComponent)
const ActiveFirst = notInPlayVisibilityHOC(ActiveFirstButton)

export const SettingsTabContent: FC = () => (
  <List>
    <DiceSizeChanger />
    <ChangeTableSize />
    <ActiveFirst />
  </List>
)

