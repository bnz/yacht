import { cropStringBy } from './cropStringBy'

describe('cropStringBy', () => {

  it('should crop string and add three dots at the end of new string', () => {
    expect(cropStringBy('this is sparta', 10)).toEqual('this is sp...')
  })

  it('should return same string', () => {
    expect(cropStringBy('this is sparta', 100)).toEqual('this is sparta')
  })
})
