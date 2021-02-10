import React, { FC } from 'react'
import { Inner, Push } from './MainLayoutParts'
import CssBaseline from '@material-ui/core/CssBaseline'
import { TopMenu } from '../TopMenu/TopMenu'
import { Footer, Wrapper } from './MainLayoutConnected'
import { useGlobalStyles } from './useGlobalStyles'
import { Drawer } from '../Drawer/Drawer'

export const MainLayout: FC = ({ children }) => {
  useGlobalStyles({ foo: 'bar' })

  return (
    <>
      <CssBaseline />
      <TopMenu />
      <Drawer />
      <Wrapper>
        <Inner>
          {children}
        </Inner>
        <Push />
      </Wrapper>
      <Footer>bonez &copy; 2019 - {new Date().getFullYear()}</Footer>
    </>
  )
}
