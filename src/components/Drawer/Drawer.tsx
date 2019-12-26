import React, { FC } from 'react'
import { DrawerStyled } from './DrawerStyled'
import { RestartGameButtonConnected } from './RestartGameButton/RestartGameButtonConnected'
import { ChangeTableSizeButtonConnected } from './ChangeTableSizeButton/ChangeTableSizeButtonConnected'
import { ThemeToggler } from './ThemeToggler'
import { DiceSizeChangerConnected } from './DiceSizeChanger/DiceSizeChangerConnected'
import { DrawerProps } from './DrawerConnected'

export const Drawer: FC<DrawerProps> = ({ drawerOpened }) => (
  <DrawerStyled open={drawerOpened}>
    <ThemeToggler />
    <DiceSizeChangerConnected />
    <ChangeTableSizeButtonConnected />
    <RestartGameButtonConnected />
  </DrawerStyled>
)
