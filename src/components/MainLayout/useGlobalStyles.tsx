import makeStyles from '@material-ui/core/styles/makeStyles'
import { AM as amount } from '../Indigo/Indigo'

export const useGlobalStyles = makeStyles(({ palette: { grey, type, background: { paper } } }) => {
  const backgroundColor = type === 'dark' ? paper : grey['300']

  const result: Record<string, Record<string, string | number>> = {}

  for (let i = 1; i <= amount; i++) {
    result[`.hexagon-item:nth-of-type(${amount}n+${i})`] = {
      'grid-column': `${i + i - 1} / span 3`,
    }
    if (i % 2 === 0) {
      result[`.hexagon-item:nth-of-type(${amount}n+${i})`]['grid-row'] = `calc(var(--counter) + var(--counter) - 1) / span 2;`
    }
  }

  for (let i = 1; i <= 20; i++) {
    result[`.hexagon-item:nth-of-type(n+${i * amount + 1})`] = {
      '--counter': i + 1,
    }
  }

  return {
    '@global': {
      'html, body, #root': {
        height: '100%',
      },

      ...result,

      '*, *::before, *::after': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      },

      '@keyframes backgroundAnimation': {
        '0%, 100%': {
          backgroundColor,
        },
        '50%': {
          backgroundColor: 'transparent',
        },
      },
    },
  }
})
