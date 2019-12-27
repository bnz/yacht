import { i18n } from './i18n/i18n'
import React from 'react'
import { CheckMatch } from './checkMatch'
import styled from '@material-ui/styles/styled'
import { Themed } from './types'

type RenderPoints = (
  points: ReturnType<CheckMatch>['points'],
  maxPoints: ReturnType<CheckMatch>['maxPoints'],
) => string | JSX.Element

export const Tip = styled('span')(({ theme: { spacing, palette: { grey } } }: Themed) => ({
  marginLeft: spacing(.5),
  fontSize: '.85em',
  fontStyle: 'italic',
  color: grey[500],
}))

export const renderPoints: RenderPoints = (points, maxPoints) =>
  (points !== undefined) && (maxPoints !== undefined) && (points < maxPoints)
    ? (
      <>
        {points}
        <Tip>{`${i18n('ofMax')} ${maxPoints}`}</Tip>
      </>
    ) : (
      <span>{points}</span>
    )

