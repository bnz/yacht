import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import { DialogStyled } from './parts/DialogStyled'
import { DialogContentStyled } from './parts/DialogContentStyled'
import { DialogTitleStyled } from './parts/DialogTitleStyled'
import { DialogActionsStyled } from './parts/DialogActionsStyled'
import { EndOfGameStats } from './EndOfGameStats'
import { GoHomeButton } from './parts/GoHomeButton'
import { MAX_POSSIBLE_POINTS } from '../../redux/reducers/combinations'
import { DialogTipStyled } from './parts/DialogTipStyled'

export const EndOfGame: FC = () => (
  <DialogStyled>
    <DialogTitleStyled>
      {i18n('gameOver')}
    </DialogTitleStyled>
    <DialogContentStyled>
      <EndOfGameStats />
    </DialogContentStyled>
    <DialogTipStyled>
      {i18n('maximumPossibleNumberOfPoints')}: {MAX_POSSIBLE_POINTS}
    </DialogTipStyled>
    <DialogActionsStyled>
      <GoHomeButton />
    </DialogActionsStyled>
  </DialogStyled>
)
