import React, { FC } from 'react'
import { RollDiceButtonStyled } from './RollDiceButtonStyled'
import { CasinoIconStyled } from './CasinoIconStyled'
import { i18n } from '../../../helpers/i18n/i18n'
import { RollDiceButtonTip } from './RollDiceButtonTip'
import { RollDiceButtonProps } from './RollDiceButtonConnected'
import { MAX_SHOT_COUNT } from '../../../redux/reducers/playerMove'

const defaultDelay = 300
let delay = 0

let timer: number | null = null

export const RollDiceButton: FC<RollDiceButtonProps> = ({ loading, shot, generateRandomDices, setLoading }) => {

  const shuffle = () => {
    delay = Date.now()
    setLoading(true)
    if (timer !== null) {
      window.clearTimeout(timer)
    }
  }

  const shuffleUp = () => {
    if (loading) {
      const d = Date.now() - delay
      timer = window.setTimeout(() => {
        generateRandomDices()
        setLoading(false)
      }, d < defaultDelay ? defaultDelay - d : 0)
    }
  }

  const disabled = shot >= MAX_SHOT_COUNT

  return (
    <RollDiceButtonStyled
      onMouseUp={shuffleUp}
      onMouseDown={shuffle}
      onMouseLeave={shuffleUp}
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
