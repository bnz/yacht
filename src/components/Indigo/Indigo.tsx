import React, { FC } from 'react'
import { stretch } from '../../helpers/css'
import { SVG } from './SVG'
import styled from '@material-ui/styles/styled'
import { Wrapper } from './Wrapper'
import { Item } from './Item'

export const AM = 9

const itemsCount = (new Array(AM * AM)).fill(null)

const w = 100

const Column = styled('div')({
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '1em',
})

const Wrap = styled('div')({
  width: w,
  height: `${w * 86.60254 / 100}px`,
})

const Label = styled('div')({
  color: '#fff',
  textAlign: 'center',
  fontSize: '1.4em',
  padding: '.1em 0 .5em',
})

export const Indigo: FC = () => {
  return (
    <>

      <Wrapper amount={AM}>
        {itemsCount.map((_, i) => (
          <Item key={i} dataId={i + 1} />
        ))}
      </Wrapper>

      <div
        style={{
          ...stretch('40%', '1em', '1em', 'auto'),
          backgroundColor: 'rgba(0, 0, 0, .7)',
          padding: '1em',
          // display: 'flex',
          display: 'none',
          maxWidth: '100%',
          overflow: 'auto',
        }}
      >
        <Column>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-circle-top-right', 'hex-circle-bottom-right', 'hex-circle-center-left']} />
            <Label>shuriken-l</Label>
            <SVG uses={['hex-main-bg', 'hex-circle-top-left', 'hex-circle-bottom-left', 'hex-circle-center-right']} />
            <Label>shuriken-r</Label>
          </Wrap>
        </Column>
        <Column>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-line-0deg', 'hex-line-60deg', 'hex-line-120deg']} />
            <Label>crossroad</Label>
          </Wrap>
        </Column>
        <Column>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-line-0deg', 'hex-circle-center-left', 'hex-circle-center-right']} />
            <Label>turtle-0</Label>
            <SVG uses={['hex-main-bg', 'hex-line-60deg', 'hex-circle-top-left', 'hex-circle-bottom-right']} />
            <Label>turtle-60</Label>
            <SVG uses={['hex-main-bg', 'hex-line-120deg', 'hex-circle-bottom-left', 'hex-circle-top-right']} />
            <Label>turtle-120</Label>
          </Wrap>
        </Column>
        <Column>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-line-0deg', 'hex-arc-top', 'hex-arc-bottom']} />
            <Label>lizard-0</Label>
            <SVG uses={['hex-main-bg', 'hex-line-60deg', 'hex-arc-top-right', 'hex-arc-bottom-left']} />
            <Label>lizard-60</Label>
            <SVG uses={['hex-main-bg', 'hex-line-120deg', 'hex-arc-bottom-right', 'hex-arc-top-left']} />
            <Label>lizard-120</Label>
          </Wrap>
        </Column>
        <Column>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-right', 'hex-circle-top-left']} />
            <Label>human-1</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-left', 'hex-circle-top-right']} />
            <Label>human-2</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-bottom-left', 'hex-arc-top-left', 'hex-circle-center-right']} />
            <Label>human-3</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-top-left', 'hex-arc-top', 'hex-circle-bottom-right']} />
            <Label>human-4</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-top', 'hex-arc-top-right', 'hex-circle-bottom-left']} />
            <Label>human-5</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-top-right', 'hex-arc-bottom-right', 'hex-circle-center-left']} />
            <Label>human-6</Label>
          </Wrap>
        </Column>
        {/*
        <Column>
          <Wrap>
            <SVG uses={['hex-treasure-bg', 'hex-treasure-bottom']} />
            <SVG uses={['hex-treasure-bg', 'hex-treasure-bottom-left']} />
            <SVG uses={['hex-treasure-bg', 'hex-treasure-top-left']} />
            <SVG uses={['hex-treasure-bg', 'hex-treasure-top']} />
            <SVG uses={['hex-treasure-bg', 'hex-treasure-top-right']} />
            <SVG uses={['hex-treasure-bg', 'hex-treasure-bottom-right']} />
          </Wrap>
        </Column>
        <Column>
          <Wrap>
            <SVG uses={['hex-treasure-bg', 'hex-center']} />
          </Wrap>
        </Column>
        */}
      </div>
    </>
  )
}
