import makeStyles from '@material-ui/core/styles/makeStyles'
import { Themed } from '../../helpers/types'

export const useGlobalStyles = makeStyles(({ game, spacing, breakpoints: { down } }: Themed['theme']) => ({
  '@global': {

    ':root': {
      '--ratio': 0.8660254,
      '--duration': '.1s',
    },

    'html, body, #root': {
      height: '100%',
    },

    ...(game === 'indigo' ? {
      '#root': {
        padding: spacing(2),
        [down('xs')]: {
          padding: spacing(0),
        },
      },
    } : {}),

    body: {
      'touch-action': 'manipulation',
    },

    '*, *::before, *::after': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
    },
  },
}))
