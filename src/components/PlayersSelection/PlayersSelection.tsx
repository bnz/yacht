import React, { FC } from 'react'
import { ButtonsWrapper } from './Buttons/ButtonsWrapper'
import { CancelStartGameButtonConnected } from './Buttons/CancelStartGameButtonConnected'
import { StartGameButtonConnected } from './Buttons/StartGameButtonConnected'
import { PlayersListConnected } from './PlayersList/PlayersListConnected'
import { AddPlayerConnected } from './AddPlayer/AddPlayerConnected'
import { ResetToDefaultPlayersButtonConnected } from './Buttons/ResetToDefaultPlayersButtonConnected'

export const PlayersSelection: FC = () => (
  <>
    <PlayersListConnected />
    <ButtonsWrapper>
      <StartGameButtonConnected />
      <AddPlayerConnected />
      <CancelStartGameButtonConnected />
      <ResetToDefaultPlayersButtonConnected />
    </ButtonsWrapper>
  </>
)
