import React, { FC } from 'react'
import { Inner, Push } from './MainLayoutParts'
import CssBaseline from '@material-ui/core/CssBaseline'
import { TopMenu } from '../TopMenu/TopMenu'
import { DrawerConnected } from '../Drawer/DrawerConnected'
import { Wrapper, Footer } from './MainLayoutConnected'
import { useGlobalStyles } from './useGlobalStyles'

export const MainLayout: FC = ({ children }) => {
  useGlobalStyles()

  return (
    <>
      <CssBaseline />
      <TopMenu />
      <DrawerConnected />
      <Wrapper>
        <Inner>
          {children}
        </Inner>
        <Push />
      </Wrapper>
      <Footer>bonez &copy; 2019</Footer>
    </>
  )
}
