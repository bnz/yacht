import React, { FC, useCallback } from 'react'
import { RollDiceButtonStyled } from './RollDiceButtonStyled'
import { CasinoIconStyled } from './CasinoIconStyled'
import { i18n } from '../../../helpers/i18n/i18n'
import { RollDiceButtonTip } from './RollDiceButtonTip'
import { MAX_SHOT_COUNT } from '../../../redux/reducers/playerMove'
import { useDispatch, useSelector } from 'react-redux'
import { makeLoadingSelector, setLoading } from '../../../redux/reducers/loading'
import { makePlayerMoveSelector } from '../../../redux/selectors/makePlayerMoveSelector'
import { generateRandomDicesThunk } from '../../../redux/actions/generateRandomDicesThunk'

const defaultDelay = 300
let delay = 0

let timer: number | null = null

const loadingSelector = makeLoadingSelector()
const playerMoveSelector = makePlayerMoveSelector()

export const RollDiceButton: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(loadingSelector)
  const [, shot] = useSelector(playerMoveSelector)

  const shuffle = useCallback(
    () => {
      delay = Date.now()
      dispatch(setLoading(true))
      if (timer !== null) {
        window.clearTimeout(timer)
      }
    },
    [dispatch],
  )

  const shuffleUp = () => {
    if (loading) {
      const d = Date.now() - delay
      timer = window.setTimeout(
        () => {
          dispatch(generateRandomDicesThunk())
          dispatch(setLoading(false))
        },
        d < defaultDelay ? defaultDelay - d : 0,
      )
    }
  }

  const disabled = shot >= MAX_SHOT_COUNT

  return (
    <RollDiceButtonStyled
      onMouseUp={shuffleUp}
      onMouseDown={shuffle}
      // onMouseLeave={shuffleUp}
      disabled={disabled}
    >
      {disabled ? i18n('button.writeDownYourPoints') : (
        <>
          <CasinoIconStyled fontSize="large" />
          {i18n('button.dropDices')}
          <RollDiceButtonTip>
            {shot}
            <span> / {MAX_SHOT_COUNT}</span>
          </RollDiceButtonTip>
        </>
      )}
    </RollDiceButtonStyled>
  )
}
