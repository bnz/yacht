import { PaletteType } from '@material-ui/core'
import { CommonColors } from '@material-ui/core/colors/common'
import { CSSProperties } from 'react'

declare module '@material-ui/core/styles/createMuiTheme' {

  interface Theme {
    drawerTabsCount: number
    drawerWidth: number // have to be used with theme.spacing()
    mainDarkBackgroundColor: CSSProperties['color']
  }

  interface ThemeOptions extends Partial<Theme> {
  }
}

export const myTheme = (theme: PaletteType, white: CommonColors['white']) => {
  const mainDarkBGColor = '#333'

  return {
    drawerTabsCount: 4,
    drawerWidth: 42,
    mainDarkBackgroundColor: mainDarkBGColor,
    palette: {
      type: theme,
    },
    transitions: {
      duration: {
        standard: 300,
      },
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: theme === 'dark' ? mainDarkBGColor : white,
        },
      },
    },
  }
}
