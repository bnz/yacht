import React, { createContext, FC, useCallback, useMemo, useState } from 'react'
import { PaletteType, Theme } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import useTheme from '@material-ui/core/styles/useTheme'
import { myTheme } from '../components/MainLayout/myTheme'
import { commonSettingsStorage } from '../index'

export interface ThemeProviderHOCProps {
  toggleTheme?(): void

  setThemeByName?(themeName?: PaletteType): void

  theme?: PaletteType
}

export const ThemeContext = createContext<ThemeProviderHOCProps>({})

export const themeProviderHOC = (Component: FC): FC => () => {
  let themeFromLocalStorage = commonSettingsStorage.get('theme')
  if (commonSettingsStorage.get('theme-auto', true)) {
    themeFromLocalStorage = window.isDarkTheme ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(themeFromLocalStorage || 'dark')

  const setThemeByName = (themeName: PaletteType = window.isDarkTheme ? 'dark' : 'light') => {
    setTheme(themeName)
    commonSettingsStorage.set('theme', themeName)
    document.body.style.background = themeName === 'dark' ? '#303030' : '#fafafa'
  }

  const toggleTheme = useCallback(() => setThemeByName(
    theme === 'light' ? 'dark' : 'light',
  ), [theme])

  const { palette: { common: { white } } }: Theme = useTheme()

  const memoizedTheme = useMemo(
    () => createMuiTheme(myTheme(theme, white)),
    [theme, white],
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeByName }}>
      <ThemeProvider theme={memoizedTheme}>
        <Component />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
