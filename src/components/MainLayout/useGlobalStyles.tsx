import makeStyles from '@material-ui/core/styles/makeStyles'

export const useGlobalStyles = makeStyles({
  '@global': {

    ':root': {
      '--ratio': 0.8660254,
    },

    'html, body, #root': {
      height: '100%',
    },

    body: {
      'touch-action': 'manipulation',
    },

    '*, *::before, *::after': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
    },
  },
})
