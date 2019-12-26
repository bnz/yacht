import { uniq } from './uniq'

describe('uniq', () => {

  it('should return array of unique numbers', () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3])
    expect(uniq([1, 2, 2, 3, 2, 2])).toEqual([1, 2, 3])
    expect(uniq([9, 9, 9, 9, 9, 9, 9, 9])).toEqual([9])
  })

})
