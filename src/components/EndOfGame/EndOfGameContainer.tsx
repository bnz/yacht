import { useSelector } from 'react-redux'

import { EndOfGame } from './EndOfGame'
import { visibilityHOC_2 } from '../../helpers/visibilityHOC'
import React, { FC } from 'react'
import { makeIsEndOfGameSelector } from '../../redux/selectors/makeIsEndOfGameSelector'

const EndOfGameWithHOC = visibilityHOC_2(EndOfGame)
const isEndOfGameSelector = makeIsEndOfGameSelector()

export const EndOfGameContainer: FC = () => {
  const hidden = useSelector(isEndOfGameSelector)

  return (
    <EndOfGameWithHOC hidden={hidden} />
  )
}
