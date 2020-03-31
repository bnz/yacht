import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { FollowActivePlayerCheckbox } from './FollowActivePlayerCheckbox'
import { cropString } from '../../../../helpers/css'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../../helpers/types'

const SelectWrapper: FC = ({
  children,
  ...rest
}) => (
  <Typography component="div" {...rest}>
    <Grid
      component="div"
      alignItems="center"
      justify="space-between"
      wrap="nowrap"
      container
      spacing={1}
    >
      <Grid item style={{ ...cropString, flex: 1 }}>
        {children}
      </Grid>
      <Grid item>
        <FollowActivePlayerCheckbox />
      </Grid>
    </Grid>
  </Typography>
)

export const SelectWrapperStyled = styled(SelectWrapper)(({ theme: { spacing } }: Themed) => ({
  margin: spacing(2),
}))
