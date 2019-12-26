import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'

export const Heading: FC = ({ children }) => {
  const { spacing } = useTheme()

  return (
    <Typography variant="h5" component="h3" style={{ marginBottom: spacing(3) }}>
      {children}
    </Typography>
  )
}
