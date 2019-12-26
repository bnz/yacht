import React, { FC } from 'react'
import { DialogContentColumn } from './parts/DialogContentColumn'
import { DialogContentNameRow } from './parts/DialogContentNameRow'
import { DialogContentTotalRow } from './parts/DialogContentTotalRow'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { useSelector } from 'react-redux'
import { makeGetTotalsSelector } from '../../redux/selectors/makeGetTotalsSelector'

export const EndOfGameStats: FC = () => {
  const playersSelector = makePlayersSelector()
  const players = useSelector(playersSelector)
  const getTotalsSelector = makeGetTotalsSelector()
  const totals = useSelector(getTotalsSelector)

  return (
    <>
      {players.map(({ id, name }) => (
        <DialogContentColumn key={id}>
          <DialogContentNameRow>
            {name}
          </DialogContentNameRow>
          <DialogContentTotalRow>
            {totals[id]}
          </DialogContentTotalRow>
        </DialogContentColumn>
      ))}
    </>
  )
}
