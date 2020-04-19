import { reorderPlayersByIdCombiner } from './reorderPlayersByIdCombiner'
import { Player } from '../reducers/players'

const initialData: Player[] = [
  { id: 'one' },
  { id: 'two' },
  { id: 'three' },
]

describe('arrayReorderByCondition', () => {

  it('should return correct simple array', () => {
    expect(reorderPlayersByIdCombiner(
      initialData,
      ['three', 1],
      true,
    )).toEqual([
      { id: 'three' },
      { id: 'one' },
      { id: 'two' },
    ])
  })

  it('should return correct array of objects', () => {
    expect(reorderPlayersByIdCombiner(
      initialData,
      ['two', 1],
      true,
    )).toEqual([
      { id: 'two' },
      { id: 'three' },
      { id: 'one' },
    ])
  })

  it('should return initial array of objects', () => {
    expect(reorderPlayersByIdCombiner(
      initialData,
      ['three', 1],
      false,
    )).toEqual([
      { id: 'one' },
      { id: 'two' },
      { id: 'three' },
    ])
  })

})
