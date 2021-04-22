import React, { FC } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Wrapper } from './MainLayoutConnected'
import { useGlobalStyles } from './useGlobalStyles'
import { Drawer } from '../Drawer/Drawer'
import { MenuButtonStyled } from '../TopMenu/MenuButton'

export const MainLayout: FC = ({ children }) => {
  useGlobalStyles()

  return (
    <>
      <CssBaseline />
      <Drawer />
      <Wrapper>
        {children}
      </Wrapper>
      <MenuButtonStyled />
    </>
  )
}
