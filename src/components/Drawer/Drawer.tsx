import React, { FC } from 'react'
import { DrawerStyled } from './DrawerStyled'
import { RestartGameButtonConnected } from './RestartGameButton/RestartGameButtonConnected'
import { ChangeTableSizeButtonConnected } from './ChangeTableSizeButton/ChangeTableSizeButtonConnected'
import { ThemeToggler } from './ThemeToggler'
import { DiceSizeChangerConnected } from './DiceSizeChanger/DiceSizeChangerConnected'
import { DrawerProps } from './DrawerConnected'
import { LangChangeButtons } from './LangChangeButtons/LangChangeButtons'

export const Drawer: FC<DrawerProps> = ({ drawerOpened }) => (
  <DrawerStyled open={drawerOpened}>
    <ThemeToggler />
    <LangChangeButtons />
    <DiceSizeChangerConnected />
    <ChangeTableSizeButtonConnected />
    <RestartGameButtonConnected />
  </DrawerStyled>
)
