import React, { FC, ReactNode } from 'react'
import { routeColor, routeThick } from './css'
import styled from '@material-ui/styles/styled'
import { stretch } from '../../helpers/css'
import { Circle } from './RouleTileParts/Circle'
import { conditionalCSS } from '../../helpers/conditionalCSS'
import { Themed } from '../../helpers/types'

interface RouteTileProps {
  variant:
    | 'v-1.1' | 'v-1.2'
    | 'v-2'
}

interface WrapProps {
  className?: string
  left?: number | string
  right?: number | string
  top?: number | string
  bottom?: number | string
  transLeft?: number | string
  transTop?: number | string

  alt?: boolean
  alt2?: boolean

  children?: ReactNode
}

export const Wrap = styled(({
  alt, alt2, left, top, right, bottom, transLeft, transTop, className,
  children,
}: WrapProps) => (
  <div className={className}>
    <svg
      height="100"
      width="100"
      style={{ height: '100%', width: 'auto' }}
    />
    <div style={{ ...stretch() }}>
      {(!alt && !alt2) && (
        <Circle />
      )}
      {children}
    </div>
  </div>
))(({ left, top, right, bottom, transLeft = 0, transTop = 0, alt, alt2 }: Themed<WrapProps>) => {
  return conditionalCSS([
    [alt, {
      backgroundColor: '#99f',
    }],

    [alt2, {
      backgroundColor: '#00f',
    }],

    {
      position: 'absolute',
      height: '100%',
      width: 'auto',
    },
    [transLeft || transTop, {
      transform: `translate(${transLeft}, ${transTop})`,
    }],
    [left !== undefined, { left }],
    [right !== undefined, { right }],
    [top !== undefined, { top }],
    [bottom !== undefined, { bottom }],
  ])
})

export const RouteTile: FC<RouteTileProps> = ({
  variant,
}) => {

  switch (variant) {
    case 'v-1.1':
      return (
        <>
          {/*<Wrap left="50%" transLeft="-50%" alt />*/}

          <Wrap left="50%" transLeft="-50%" alt>
            <div style={{
              ...stretch(0, '50%', 0, 0),
              backgroundColor: '#333',
            }} />
            <div style={{
              ...stretch('25%', 0, '25%', 0),
              backgroundColor: '#ccc',
            }} />
          </Wrap>

          {/*<Wrap left={`calc(50% - ${routeThick / 2}px)`} transLeft="0" top={`calc(-50% + ${routeThick / 2}px)`} transTop="0" />*/}

          <Wrap left="50%" top="-50%" transLeft="calc(-75% - 5px)" transTop="calc(5px)" />

          {/*<Wrap left="50%" transLeft="-50%" />*/}

          {/*<Wrap*/}
          {/*  left={`calc(50% - ${routeThick / 2}px)`}*/}
          {/*  transLeft="-50%"*/}
          {/*  bottom="0"*/}
          {/*  transTop="50%"*/}
          {/*/>*/}
        </>
      )
    case 'v-1.2':
      return (
        <>
          {/*<Wrap left="50%" top="0" transTop="-50%" />*/}
          {/*<Wrap left={h2} transLeft="-50%" top={v} />*/}
          {/*<Wrap right={h} transLeft="50%" bottom={v} transTop="50%" />*/}
        </>
      )
    case 'v-2':
      return (
        <>
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            transform: 'translate(-50%, 0) rotate(59.25deg)',
            backgroundColor: routeColor,
            width: routeThick,
          }} />

          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            transform: 'translate(-50%, 0) rotate(-59.25deg)',
            backgroundColor: routeColor,
            width: routeThick,
          }} />

          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            transform: 'translate(-50%, 0)',
            backgroundColor: routeColor,
            width: routeThick,
          }} />
        </>
      )
  }
}
