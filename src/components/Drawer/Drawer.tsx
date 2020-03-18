import React, { FC } from 'react'
import { DrawerStyled } from './DrawerStyled'
import { ThemeToggler } from './ThemeToggler'
import { LangChangeButtons } from './LangChangeButtons/LangChangeButtons'
import { notInPlayVisibilityHOC } from './notInPlayVisibilityHOC'
import { RestartGameButton } from './RestartGameButton/RestartGameButton'
import { ChangeTableSizeButton } from './ChangeTableSizeButton/ChangeTableSizeButton'
import { DiceSizeChanger as DiceSizeChangerComponent } from './DiceSizeChanger/DiceSizeChanger'

const RestartGame = notInPlayVisibilityHOC(RestartGameButton)
const ChangeTableSize = notInPlayVisibilityHOC(ChangeTableSizeButton)
const DiceSizeChanger = notInPlayVisibilityHOC(DiceSizeChangerComponent)

export const Drawer: FC = () => (
  <DrawerStyled>
    <ThemeToggler />
    <LangChangeButtons />
    <DiceSizeChanger />
    <ChangeTableSize />
    <RestartGame />
  </DrawerStyled>
)
