import { conditionalCSS } from './conditionalCSS'

describe('conditionalCSS', () => {

  it('should return correct css', () => {
    const condition1 = true
    const condition2 = false

    expect(conditionalCSS([
      {
        borderBottom: '1px solid #f99',
      },
      [condition1, {
        backgroundColor: 'transparent',
        textAlign: 'right',
      }],
      [condition2, {
        display: 'none',
      }],
      {
        color: 'red',
      },
    ])).toEqual({
      backgroundColor: 'transparent',
      textAlign: 'right',
      color: 'red',
      borderBottom: '1px solid #f99',
    })
  })

})
