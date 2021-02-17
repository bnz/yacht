import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import { stretch } from '../../helpers/css'
import React from 'react'
import { PreSit } from './Store/Store'
import { conditionalCSS } from '../../helpers/conditionalCSS'

interface WrapperProps {
  amount?: number
  alt?: PreSit
}

export const Wrapper = styled(({ alt, amount, ...props }: WrapperProps) => {

  // console.log(alt)

  return (
    <ul {...props} />
  )
})(({
  theme: { shape: { borderRadius } },
  amount,
  alt,
}: Themed<WrapperProps>) => conditionalCSS([
  {
    '--amount': amount,
    '--counter': 1,
    position: 'relative',
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--amount), 1fr 2fr) 1fr',
    gridGap: 'max(0.1%, 1px) max(0.2%, 2px)',
    border: '1px solid #f99',
    padding: '1em',
    marginTop: '3em',
    borderRadius,
  },
  [alt, {
    '&::before': {
      content: '""',
      ...stretch(0, 0, 0, 0),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
  }],
]))
