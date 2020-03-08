import React, { FC } from 'react'
import { DialogContentColumn } from './parts/DialogContentColumn'
import { DialogContentNameRow } from './parts/DialogContentNameRow'
import { DialogContentTotalRow } from './parts/DialogContentTotalRow'
import { makePlayersSelector } from '../../redux/selectors/makePlayersSelector'
import { useSelector } from 'react-redux'
import { makeGetTotalsSelector } from '../../redux/selectors/makeGetTotalsSelector'

const playersSelector = makePlayersSelector()
const getTotalsSelector = makeGetTotalsSelector()

export const EndOfGameStats: FC = () => {
  const players = useSelector(playersSelector)
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
