import styled from '@material-ui/styles/styled'
import { doneHexColor, routeColor, routeThick } from '../css'
import React from 'react'
import { stretch } from '../../../helpers/css'

const CircleInner = styled('div')({
  ...stretch(routeThick),
  backgroundColor: doneHexColor,
  borderRadius: '50%',
})

export const Circle = styled(
  (props) => (
    <div {...props}>
      <CircleInner />

      {/*<div style={{*/}
      {/*  ...stretch(0, '50%', 0, 0),*/}
      {/*  backgroundColor: '#f00',*/}
      {/*}} />*/}

    </div>
  ),
)({
  backgroundColor: routeColor,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // transform: 'translate(-50%, -50%) rotate(330deg)',
  transformOrigin: 'left center',
  width: 'calc(10% * 5.773502691896258)',
  height: 'calc(10% * 5.773502691896258)',
  borderRadius: '50%',
})
