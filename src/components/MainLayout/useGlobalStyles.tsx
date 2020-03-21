import makeStyles from '@material-ui/core/styles/makeStyles'

export const useGlobalStyles = makeStyles(({ palette: { grey, type, background: { paper } } }) => {
  const backgroundColor = type === 'dark' ? paper : grey['300']

  return {
    '@global': {
      'html, body': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      },
      'html, body, #root': {
        height: '100%',
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
