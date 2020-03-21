import useTheme from '@material-ui/core/styles/useTheme'
import { Theme } from '@material-ui/core'

export const useThemeType = <T extends string>(ifDark?: T, ifLight?: T) => {
  const { palette: { type } } = useTheme<Theme>()
  const isDark = type === 'dark'

  if (ifDark && ifLight) {
    return isDark ? ifDark : ifLight
  }

  return isDark
}
