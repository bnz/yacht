/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { conditionalCSS } from '../../../../helpers/conditionalCSS'
import { Themed } from '../../../../helpers/types'
import { ModalProps } from '@material-ui/core/Modal'

interface GridContainerProps extends Partial<Pick<ModalProps, 'open'>> {
}

export const GridContainer = styled(
  (props) => (
    <Grid
      container
      alignItems="flex-start"
      justify="space-around"
      {...props}
    />
  ),
)(({ theme: { palette: { action: { hover } } }, open }: Themed<GridContainerProps>) => conditionalCSS([
  [open, {
    background: hover,
  }],
  {
    cursor: 'pointer',
    '&:hover': {
      background: hover,
    },
  },
]))
