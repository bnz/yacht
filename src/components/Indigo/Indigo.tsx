import React, { FC } from 'react'
import { HelpingTools } from './HelpingTools'
import { observer } from 'mobx-react'
import { useStore } from './Store/Provider'
import { PlayerManager } from './Players/PlayerManager'
import { GamePhase } from './Ids'
import { Arena } from './Absolute/Arena'
import { Actions } from './Actions'

export const Indigo: FC = observer(() => (
  <>
    <Actions />
    {{
      [GamePhase.PRE_GAME]: (
        <>PRE_GAME</>
      ),
      [GamePhase.PLAYERS_SELECTION]: (
        <PlayerManager />
      ),
      [GamePhase.IN_PLAY]: (
        <Arena />
      ),
    }[useStore().gamePhase]}
    <HelpingTools />
  </>
))
