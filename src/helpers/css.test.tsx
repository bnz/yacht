import { align, stretch } from './css'


describe('css', () => {

  it('stretch ::: should return correct css without params provided', () => {
    expect(stretch()).toEqual({
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    })
  })

  it('stretch ::: should return correct css with one param', () => {
    expect(stretch(5)).toEqual({
      position: 'absolute',
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    })
  })

  it('stretch ::: should return correct css with two params', () => {
    expect(stretch(3, 10)).toEqual({
      position: 'absolute',
      top: 3,
      right: 10,
      bottom: 3,
      left: 10,
    })
  })

  it('stretch ::: should return correct css with three params', () => {
    expect(stretch(3, 10, 7)).toEqual({
      position: 'absolute',
      top: 3,
      right: 10,
      bottom: 7,
      left: 10,
    })
  })

  it('align ::: should return correct css without params', () => {
    expect(align()).toEqual({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })
  })

  it('align ::: should return correct css with one param', () => {
    expect(align('flex-end')).toEqual({
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    })
  })

  it('align ::: should return correct css with two params', () => {
    expect(align('flex-end', 'flex-start')).toEqual({
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    })
  })

})
