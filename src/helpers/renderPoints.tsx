import { i18n } from './i18n'
import React from 'react'
import { CheckMatch } from './checkMatch'

type RenderPoints = (
  points: ReturnType<CheckMatch>['points'],
  maxPoints: ReturnType<CheckMatch>['maxPoints'],
) => string | JSX.Element

export const renderPoints: RenderPoints = (points, maxPoints) =>
  (points !== undefined) && (maxPoints !== undefined) && (points < maxPoints)
    ? `${points} ${i18n('из макс.')} ${maxPoints}`
    : <span>{points}</span>

