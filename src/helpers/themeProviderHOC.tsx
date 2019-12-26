import React, { createContext, FC, useState } from 'react'
import { PaletteType, Theme } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { getItem } from './getItem'
import { setItem } from './setItem'
import useTheme from '@material-ui/core/styles/useTheme'

export interface ThemeProviderHOCProps {
  toggleTheme?(): void

  theme?: PaletteType
}

// TODO: get this color from theme
export const mainDarkBGColor = '#333'

export const ThemeContext = createContext<ThemeProviderHOCProps>({})

export const themeProviderHOC = (Component: FC) => () => {
  const [theme, setTheme] = useState(getItem('theme', false) || 'dark')

  const toggleTheme = () => {
    const newPaletteType: PaletteType = theme === 'light' ? 'dark' : 'light'
    setTheme(newPaletteType)
    setItem('theme', newPaletteType)

    document.body.style.background = newPaletteType === 'dark' ? '#303030' : '#fff'
  }

  const { palette: { common: { white } } }: Theme = useTheme()

  const myTheme = createMuiTheme({
    palette: {
      type: theme,
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: theme === 'dark' ? mainDarkBGColor : white,
        },
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={myTheme}>
        <Component />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
