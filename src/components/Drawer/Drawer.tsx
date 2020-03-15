import React, { FC } from 'react'
import { DrawerStyled } from './DrawerStyled'
import { RestartGameButtonWithVisibilityHOC } from './RestartGameButton/RestartGameButtonWithVisibilityHOC'
import { ChangeTableSizeButtonConnected } from './ChangeTableSizeButton/ChangeTableSizeButtonConnected'
import { ThemeToggler } from './ThemeToggler'
import { DiceSizeChangerConnected } from './DiceSizeChanger/DiceSizeChangerConnected'
import { LangChangeButtons } from './LangChangeButtons/LangChangeButtons'
import { makeDrawerOpenedSelector } from '../../redux/selectors/makeDrawerOpenedSelector'
import { useSelector } from 'react-redux'

const drawerOpenedSelector = makeDrawerOpenedSelector()

export const Drawer: FC = () => {
  const drawerOpened = useSelector(drawerOpenedSelector)

  return (
    <DrawerStyled open={drawerOpened}>
      <ThemeToggler />
      <LangChangeButtons />
      <DiceSizeChangerConnected />
      <ChangeTableSizeButtonConnected />
      <RestartGameButtonWithVisibilityHOC />
    </DrawerStyled>
  )
}
