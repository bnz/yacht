import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { PlayerManager } from './Players/PlayerManager'
import { GamePhase } from './types'
import { Arena } from './Arena/Arena'
import { Actions } from './Actions'
import { useStore } from './Store/HexProvider'
import { Rules } from './Rules/Rules'
import { StartGameButtonWrapper } from '../StartGameButton/StartGameButtonWrapper'
import { StartButton } from './Rules/StartButton'

export const Indigo: FC = observer(() => (
  <>
    <Actions />
    {{
      [GamePhase.PRE_GAME]: (
        <>
          <StartGameButtonWrapper>
            <StartButton />
          </StartGameButtonWrapper>
        <Rules />
        </>
      ),
      [GamePhase.PLAYERS_SELECTION]: (
        <PlayerManager />
      ),
      [GamePhase.IN_PLAY]: (
        <Arena />
      ),
    }[useStore().gamePhase.phase]}
  </>
))
