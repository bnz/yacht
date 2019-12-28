import { arrayReorderByCondition } from './arrayReorderByCondition'

describe('arrayReorderByCondition', () => {

  it('should return correct simple array', () => {
    expect(arrayReorderByCondition(
      ['one', 'two', 'three'],
      (arrayItem) => arrayItem === 'two',
    )).toEqual([
      'two',
      'three',
      'one',
    ])
  })

  it('should return correct array of objects', () => {
    expect(arrayReorderByCondition(
      [
        { id: 'one' },
        { id: 'two' },
        { id: 'three' },
      ],
      ({ id }) => id === 'two'
    )).toEqual([
      { id: 'two' },
      { id: 'three' },
      { id: 'one' },
    ])
  })

})
