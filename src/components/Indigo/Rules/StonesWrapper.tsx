/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'

export const StonesWrapper = styled('div')(() => {
  const s = 300

  return {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 3 * 8,
    ['--R' as string]: `${s / 2}px`,

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
