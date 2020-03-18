import { connect } from 'react-redux'
import cx from 'classnames'

import { State } from '../../../redux/defaultState'
import { CombinationInfo, EMPTY_CELL, isBonus as _isBonus } from '../../../redux/reducers/combinations'
import { Player } from '../../../redux/reducers/players'
import { DicesState } from '../../../redux/reducers/dices'
import { Move } from '../../../redux/reducers/playerMove'
import { CheckMatch, checkMatch } from '../../../helpers/checkMatch'
import { saveCombinationThunk, SaveCombinationThunk } from '../../../redux/actions/saveCombinationThunk'
import { Combination } from './Combination'

type Combination = Pick<CombinationInfo, 'combination'>;

interface MapStateToProps extends DicesState, Combination {
  activePlayerId: Move[0]
  existingCombination: number | EMPTY_CELL
}

interface MapDispatchToProps {
  saveCombinationThunk: SaveCombinationThunk
}

interface OwnProps extends Combination {
  playerId: Player['id']
  isMoveAvailable: boolean
}

export interface CombinationProps extends Pick<MapStateToProps, 'existingCombination'>, ReturnType<CheckMatch> {
  type: string | 'matching' | 'bonus' | 'matched' | 'strike'

  save(): void

  strikeOut(): void
}

export const CombinationConnected = connect<MapStateToProps, MapDispatchToProps, OwnProps, CombinationProps, State>(
  (
    { playerPoints, dices, playerMove: { 0: activePlayerId } },
    { playerId, combination },
  ) => {
    const existingCombination = (playerPoints[playerId] || [])[combination]

    return {
      dices,
      activePlayerId,
      combination,
      existingCombination: existingCombination === undefined ? EMPTY_CELL : existingCombination,
    }
  },
  { saveCombinationThunk },
  (
    { dices, combination, activePlayerId, existingCombination },
    { saveCombinationThunk },
    { playerId, isMoveAvailable },
  ): CombinationProps => {
    const { points, maxPoints } = checkMatch(combination, dices)
    const active = activePlayerId === playerId
    const isBonus = _isBonus(combination)
    const matched = existingCombination !== EMPTY_CELL && !isBonus

    return {
      type: cx({
        matched,
        matching: active && !matched && points !== undefined && points > 0,
        bonus: isBonus && existingCombination !== EMPTY_CELL,
        strike: active && !matched && !isBonus && !isMoveAvailable,
      }),

      existingCombination,

      points,
      maxPoints,
      save() {
        saveCombinationThunk(playerId, combination, points)
      },
      strikeOut() {
        saveCombinationThunk(playerId, combination, 0)
      },
    }
  },
)(Combination)
