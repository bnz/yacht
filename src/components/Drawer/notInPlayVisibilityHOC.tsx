import { visibilityHOC_2 } from '../../helpers/visibilityHOC'
import { makeGamePhaseSelector } from '../../redux/selectors/makeGamePhaseSelector'
import React, { ComponentType, FC } from 'react'
import { useSelector } from 'react-redux'
import { GamePhases } from '../../redux/reducers/gamePhase'

export const notInPlayVisibilityHOC = <T extends {}>(Component: ComponentType): FC<T> => {
  const gamePhaseSelector = makeGamePhaseSelector()

  return () => {
    const ComponentWithHOC = visibilityHOC_2(Component)
    const gamePhase = useSelector(gamePhaseSelector)

    return (
      <ComponentWithHOC
        hidden={gamePhase !== GamePhases.IN_PLAY}
      />
    )
  }
}
