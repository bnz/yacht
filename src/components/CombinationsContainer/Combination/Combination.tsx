import React, { FC } from 'react'
import { Empty } from './CellContent/Empty'
import { Button } from './CellContent/Button'
import { Matched } from './CellContent/Matched'
import { Bonus } from './CellContent/Bonus'
import { i18n } from '../../../helpers/i18n'
import { CombinationProps } from './CombinationConnected'
import { renderPoints } from '../../../helpers/renderPoints'
import { renderBonus } from '../../../helpers/renderBonus'

export const Combination: FC<CombinationProps> = ({
  type,

  save,
  strikeOut,

  points,
  maxPoints,
  existingCombination,
}) => {

  switch (type) {
    case 'matching':
      return (
        <Button color="primary" onClick={save}>
          {renderPoints(points, maxPoints)}
        </Button>
      )
    case 'matched': {
      return (
        <Matched>
          {existingCombination}
        </Matched>
      )
    }
    case 'bonus': {
      const { bonus, isNegative } = renderBonus(existingCombination as number)

      return (
        <Bonus alt={isNegative}>
          {bonus}
        </Bonus>
      )
    }
    case 'strike': {
      return (
        <Button color="secondary" onClick={strikeOut}>
          {i18n('Вычеркнуть')}
        </Button>
      )
    }
    default:
      return (
        <Empty />
      )
  }
}
