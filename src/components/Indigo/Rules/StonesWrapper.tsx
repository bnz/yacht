/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const StonesWrapper = styled('div')(({
  theme: {
    spacing,
    breakpoints: { down },
    mainLayout: { innerPaddingMobile },
  },
}: Themed) => {
  const s = 220

  return {
    ['--R' as string]: `${s / 2}px`,

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '80%',
    margin: `0 auto ${s / 5}px`,
    [down('xs')]: {
      width: `calc(100% + ${spacing(innerPaddingMobile * 2)}px)`,
      margin: `0 auto ${s / 20}px -${spacing(innerPaddingMobile)}px`,
    },

    overflow: 'hidden',

    '& > div': {
      position: 'relative',
      height: s,

      '& > div': {
        transform: 'translateX(-50%) !important',
        height: `calc(var(--R) * ${s / 100})`,

        '&::before': {
          width: '100%',
          height: '100%',
        },
      },
    },
  }
})
