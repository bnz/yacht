import { reorderPlayersByIdCombiner } from './reorderPlayersByIdCombiner'

describe('arrayReorderByCondition', () => {

  it('should return correct simple array', () => {
    expect(reorderPlayersByIdCombiner(
      [
        { id: 'one' },
        { id: 'two' },
        { id: 'three' },
      ],
      ['three', 1],
    )).toEqual([
      { id: 'three' },
      { id: 'one' },
      { id: 'two' },
    ])
  })

  it('should return correct array of objects', () => {
    expect(reorderPlayersByIdCombiner(
      [
        { id: 'one' },
        { id: 'two' },
        { id: 'three' },
      ],
      ['two', 1],
    )).toEqual([
      { id: 'two' },
      { id: 'three' },
      { id: 'one' },
    ])
  })

})
