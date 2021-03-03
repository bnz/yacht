import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import svg from './hex.svg'
import { Themed } from '../../helpers/types'
import { conditionalCSS } from '../../helpers/conditionalCSS'
import { Uses } from './Ids'
import { useStore } from './Store/Provider'

interface SvgComponentProps {
  fill?: string
  uses?: Uses[]

  onClick?(): void

  onMouseEnter?(): void

  onMouseLeave?(): void
}

const SVGComponent: FC<SvgComponentProps> = ({ uses = [], ...props }) => {
  const store = useStore()

  if (uses.length === 1 && uses[0] === store.hexDefaultBg) {
    return (
      <img src={`${svg}#huji`} alt="" {...props} style={{ width: '100%' }} />
    )
  }

  return (
    <svg viewBox="0 0 101 87" {...props}>
      {uses.map((use) => (
        <use key={use} href={`${svg}#${use}`} />
      ))}
    </svg>
  )
}

SVGComponent.displayName = 'SVG'

export const SVG = styled(SVGComponent)(({
  onClick,
}: Themed<SvgComponentProps>) => conditionalCSS([
  [onClick !== undefined, {
    cursor: 'pointer',
  }],
]))
