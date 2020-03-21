import React, { FC } from 'react'
import List from '@material-ui/core/List'
import { ThemeToggler } from './ThemeToggler/ThemeToggler'
import { LangChangeButtons } from './LangChangeButtons/LangChangeButtons'
import { DiceSizeChanger as DiceSizeChangerComponent } from './DiceSizeChanger/DiceSizeChanger'
import { notInPlayVisibilityHOC } from '../../../../helpers/notInPlayVisibilityHOC'
import { RestartGameButton } from './RestartGameButton/RestartGameButton'
import { ChangeTableSizeButton } from './ChangeTableSizeButton/ChangeTableSizeButton'

const RestartGame = notInPlayVisibilityHOC(RestartGameButton)
const ChangeTableSize = notInPlayVisibilityHOC(ChangeTableSizeButton)
const DiceSizeChanger = notInPlayVisibilityHOC(DiceSizeChangerComponent)

export const SettingsTab: FC = () => (
  <List>
    <ThemeToggler />
    <LangChangeButtons />
    <DiceSizeChanger />
    <ChangeTableSize />
    <RestartGame />
  </List>
)

