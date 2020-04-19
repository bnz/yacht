import React, { FC } from 'react'
import { makeHistorySelector, Move } from '../../../../redux/reducers/history'
import { useSelector } from 'react-redux'
import { State } from '../../../../redux/defaultState'
import { Move as PlayerMove } from '../../../../redux/reducers/playerMove'
import { HistoryItem } from './HistoryItem'
import { i18n } from '../../../../helpers/i18n/i18n'
import { NoHistoryYetStyled } from './NoHistoryYetStyled'

const historySelector = makeHistorySelector()

interface HistoryTabContentDataProps {
  playerId: PlayerMove[0]
}

export const HistoryTabContentData: FC<HistoryTabContentDataProps> = ({ playerId }) => {
  const playerHistory = useSelector<State, Move[]>(
    (state) => historySelector(state, { playerId }),
  )

  return (
    <>
      {playerHistory.length ? playerHistory.map(({ tries, result, dicesSelected }, index) => (
        <HistoryItem
          key={index}
          index={index}
          tries={tries}
          result={result}
          dicesSelected={dicesSelected}
        />
      )) : (
        <NoHistoryYetStyled>
          {i18n('history.noHistoryYet')}
        </NoHistoryYetStyled>
      )}
    </>
  )
}
