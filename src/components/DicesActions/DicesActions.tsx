import React, { FC } from 'react'
import { RollDiceButtonConnected } from './RollDiceButton/RollDiceButtonConnected'
import { ResetDicesButtonConnected } from './ResetDicesButton/ResetDicesButtonConnected'
import { DicesActionsWrapper } from './DicesActionsWrapper'

export const DicesActions: FC = () => (
  <DicesActionsWrapper>
    <RollDiceButtonConnected />
    <ResetDicesButtonConnected />
  </DicesActionsWrapper>
)
