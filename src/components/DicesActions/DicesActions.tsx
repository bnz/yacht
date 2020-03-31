import React, { FC } from 'react'
import { ResetDicesButtonConnected } from './ResetDicesButton/ResetDicesButtonConnected'
import { DicesActionsWrapper } from './DicesActionsWrapper'
import { RollDiceButton } from './RollDiceButton/RollDiceButton'

export const DicesActions: FC = () => (
  <DicesActionsWrapper>
    <RollDiceButton />
    <ResetDicesButtonConnected />
  </DicesActionsWrapper>
)
