import { inArray } from './inArray'

describe('inArray', () => {

  it('should find in array', () => {
    expect(inArray([2, 1, 299, 'asd'], 1)).toBeTruthy()
    expect(inArray(['asd', 'one', 'foo'], 'foo')).toBeTruthy()
  })

  it('should not find in array', () => {
    expect(inArray([1, 2, 3, 'asd'], 5)).toBeFalsy()
  })

})
