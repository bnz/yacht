import styled from '@material-ui/styles/styled'

export const Wrapper = styled('ul')(({ amount }: { amount: number }) => ({
  '--amount': amount,
  '--counter': 1,
  position: 'relative',
  listStyleType: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--amount), 1fr 2fr) 1fr',
  gridGap: 'max(0.1%, 1px) max(0.2%, 2px)',
  marginBottom: '15%',
}))
