import { PaletteType } from '@material-ui/core'
import { CommonColors } from '@material-ui/core/styles/createPalette'
import { CSSProperties } from 'react'

declare module '@material-ui/core/styles/createMuiTheme' {

  interface Theme {
    /**
     * Drawer
     */
    drawerTabsCount: number
    drawerWidth: number // have to be used with theme.spacing()

    /**
     * Main layout
     */
    mainLayout: {
      darkBackgroundColor: CSSProperties['color']
      footerHeight: number
      innerPadding: number
      innerPaddingMobile: number
    }

    /**
     * Combinations Table
     */
    combinationsTable: {
      firstColumnWidth: number
      columnWidth: number
    }
  }

  interface ThemeOptions extends Partial<Theme> {
  }
}

export const myTheme = (theme: PaletteType, white: CommonColors['white']) => {
  const mainDarkBGColor = '#333'

  return {
    drawerTabsCount: 4,
    drawerWidth: 42,
    mainLayout: {
      darkBackgroundColor: mainDarkBGColor,
      footerHeight: 10,
      innerPadding: 5,
      innerPaddingMobile: 2,
    },
    combinationsTable: {
      firstColumnWidth: 165,
      columnWidth: 170,
    },
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
