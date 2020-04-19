import React, { FC } from 'react'
import List from '@material-ui/core/List'
import { ThemeToggler } from './ThemeToggler/ThemeToggler'
import { LangChangeButtons } from './LangChangeButtons/LangChangeButtons'
import { DiceSizeChanger as DiceSizeChangerComponent } from './DiceSizeChanger/DiceSizeChanger'
import { notInPlayVisibilityHOC } from '../../../../helpers/notInPlayVisibilityHOC'
import { RestartGameButton } from './RestartGameButton/RestartGameButton'
import { ChangeTableSizeButton } from './ChangeTableSizeButton/ChangeTableSizeButton'
import { ActiveFirstButton } from './ActiveFirstButton/ActiveFirstButton'

const RestartGame = notInPlayVisibilityHOC(RestartGameButton)
const ChangeTableSize = notInPlayVisibilityHOC(ChangeTableSizeButton)
const DiceSizeChanger = notInPlayVisibilityHOC(DiceSizeChangerComponent)
const ActiveFirst = notInPlayVisibilityHOC(ActiveFirstButton)

export const SettingsTabContent: FC = () => (
  <List>
    <ThemeToggler />
    <LangChangeButtons />
    <DiceSizeChanger />
    <ChangeTableSize />
    <ActiveFirst />
    <RestartGame />
  </List>
)

