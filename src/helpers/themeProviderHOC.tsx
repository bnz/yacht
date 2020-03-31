import React, { createContext, FC, useCallback, useMemo, useState } from 'react'
import { PaletteType, Theme } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { getItem } from './getItem'
import { setItem } from './setItem'
import useTheme from '@material-ui/core/styles/useTheme'
import { myTheme } from '../components/MainLayout/myTheme'

export interface ThemeProviderHOCProps {
  toggleTheme?(): void

  theme?: PaletteType
}

export const ThemeContext = createContext<ThemeProviderHOCProps>({})

export const themeProviderHOC = (Component: FC): FC => () => {
  const [theme, setTheme] = useState(getItem('theme', false) || 'dark')

  const toggleTheme = useCallback(
    () => {
      const newPaletteType: PaletteType = theme === 'light' ? 'dark' : 'light'
      setTheme(newPaletteType)
      setItem('theme', newPaletteType)

      document.body.style.background = newPaletteType === 'dark' ? '#303030' : '#fff'
    },
    [theme],
  )

  const { palette: { common: { white } } }: Theme = useTheme()

  const memoizedTheme = useMemo(
    () => createMuiTheme(myTheme(theme, white)),
    [theme, white],
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={memoizedTheme}>
        <Component />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
