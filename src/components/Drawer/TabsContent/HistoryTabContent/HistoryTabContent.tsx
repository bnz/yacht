import React, { FC, useEffect, useState } from 'react'
import { HistoryTabContentHeader } from './HistoryTabContentHeader'
import { HistoryTabContentData } from './HistoryTabContentData'
import { useSelector } from 'react-redux'
import { makePlayerMoveSelector } from '../../../../redux/selectors/makePlayerMoveSelector'
import { makeHistoryFollowActivePlayerSelector } from '../../../../redux/reducers/historyFollowActivePlayer'

const playerMoveSelector = makePlayerMoveSelector()
const historyFollowActivePlayerSelector = makeHistoryFollowActivePlayerSelector()

export const HistoryTabContent: FC = () => {
  const [activePlayerId] = useSelector(playerMoveSelector)
  const historyFollowActivePlayer = useSelector(historyFollowActivePlayerSelector)
  const [playerId, setPlayerId] = useState(activePlayerId)

  useEffect(
    () => {
      if (historyFollowActivePlayer) {
        setPlayerId(activePlayerId)
      }
    },
    [activePlayerId, historyFollowActivePlayer],
  )

  return (
    <>
      <HistoryTabContentHeader playerId={playerId} setPlayerId={setPlayerId} />
      <HistoryTabContentData playerId={playerId} />
    </>
  )
}
