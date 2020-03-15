import { useSelector } from 'react-redux'
import { RestartGameButton } from './RestartGameButton'
import { visibilityHOC } from '../../../helpers/visibilityHOC'
import { GamePhases } from '../../../redux/reducers/gamePhase'
import React, { FC } from 'react'
import { makeGamePhaseSelector } from '../../../redux/selectors/makeGamePhaseSelector'

const RestartGameButtonWithHOC = visibilityHOC(RestartGameButton)
const gamePhaseSelector = makeGamePhaseSelector()

export const RestartGameButtonWithVisibilityHOC: FC = () => {
  const gamePhase = useSelector(gamePhaseSelector)

  return (
    <RestartGameButtonWithHOC
      hidden={gamePhase !== GamePhases.IN_PLAY}
    />
  )
}
