import styled from '@material-ui/styles/styled'

export const Wrapper = styled('div')(({ amount }: { amount: number }) => ({
  '--amount': amount,
  '--counter': 1,
  position: 'relative',
  // width: 4000,
  // marginTop: '-4rem',
  // marginLeft: '-40rem',
  // width: '100%',
  // minWidth: 1000,
  listStyleType: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--amount), 1fr 2fr) 1fr',
  gridGap: 'max(0.1%, 1px) max(0.2%, 2px)',
}))
