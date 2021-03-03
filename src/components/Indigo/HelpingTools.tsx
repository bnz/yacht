import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import { stretch } from '../../helpers/css'
import { SVG } from './SVG'
import { observer } from 'mobx-react'
import { useStore } from './Store/Provider'
import Typography from '@material-ui/core/Typography'
import { Themed } from '../../helpers/types'
import { hexRationDiff } from './Store/Store'

const w = 100

const Column = styled('div')({
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '1em',
})

const Wrap = styled('div')({
  width: w,
  height: `${w * hexRationDiff / 100}px`,
})

const Label = styled('div')({
  color: '#fff',
  textAlign: 'center',
  fontSize: '0.8em',
  padding: '.1em 0 .5em',
  whiteSpace: 'nowrap',
})

const Heading = styled(
  (props) => <Typography align="center" {...props} />,
)(({ theme: { spacing } }: Themed) => ({
  margin: spacing(0, 0, 1, 0),
  fontWeight: 'bold',
}))

export const HelpingTools: FC = observer(() => {
  const store = useStore()

  if (!store.helpingToolVisible) {
    return null
  }

  return (
    <div
      style={{
        ...stretch('30%', '1em', '1em', '1em'),
        backgroundColor: 'rgba(0, 0, 0, .7)',
        borderRadius: '1em',
      }}
    >
      <div style={{
        height: '100%',
        padding: '1em',
        overflow: 'auto',
        display: 'flex',
      }}>
        <Column>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur doloribus hic illo neque, officiis
          perspiciatis provident quia quis quod reiciendis rerum sed sunt tempore tenetur ullam vero voluptas,
          voluptatem.
        </Column>
        <Column>
          <Heading>6</Heading>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-circle-top-right', 'hex-circle-bottom-right', 'hex-circle-center-left']} />
            <Label>shuriken-0</Label>
            <SVG uses={['hex-main-bg', 'hex-circle-top-left', 'hex-circle-bottom-left', 'hex-circle-center-right']} />
            <Label>shuriken-60</Label>
          </Wrap>
        </Column>
        <Column>
          <Heading>6</Heading>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-line-0', 'hex-line-60', 'hex-line-120']} />
            <Label>crossroad</Label>
          </Wrap>
        </Column>
        <Column>
          <Heading>14</Heading>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-line-0', 'hex-circle-center-left', 'hex-circle-center-right']} />
            <Label>turtle-0</Label>
            <SVG uses={['hex-main-bg', 'hex-line-60', 'hex-circle-top-left', 'hex-circle-bottom-right']} />
            <Label>turtle-60</Label>
            <SVG uses={['hex-main-bg', 'hex-line-120', 'hex-circle-bottom-left', 'hex-circle-top-right']} />
            <Label>turtle-120</Label>
          </Wrap>
        </Column>
        <Column>
          <Heading>14</Heading>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-line-0', 'hex-arc-top', 'hex-arc-bottom']} />
            <Label>lizard-0</Label>
            <SVG uses={['hex-main-bg', 'hex-line-60', 'hex-arc-top-right', 'hex-arc-bottom-left']} />
            <Label>lizard-60</Label>
            <SVG uses={['hex-main-bg', 'hex-line-120', 'hex-arc-bottom-right', 'hex-arc-top-left']} />
            <Label>lizard-120</Label>
          </Wrap>
        </Column>
        <Column>
          <Heading>14</Heading>
          <Wrap>
            <SVG uses={['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-right', 'hex-circle-top-left']} />
            <Label>human-0</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-left', 'hex-circle-top-right']} />
            <Label>human-60</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-bottom-left', 'hex-arc-top-left', 'hex-circle-center-right']} />
            <Label>human-120</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-top-left', 'hex-arc-top', 'hex-circle-bottom-right']} />
            <Label>human-180</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-top', 'hex-arc-top-right', 'hex-circle-bottom-left']} />
            <Label>human-240</Label>
            <SVG uses={['hex-main-bg', 'hex-arc-top-right', 'hex-arc-bottom-right', 'hex-circle-center-left']} />
            <Label>human-300</Label>
          </Wrap>
        </Column>
      </div>
    </div>
  )
})
