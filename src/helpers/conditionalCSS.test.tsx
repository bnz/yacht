import { conditionalCSS } from './conditionalCSS'

describe('conditionalCSS', () => {

  it('should return correct css', () => {
    const condition1 = true
    const condition2 = false
    const condition3 = false

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
      [condition3, {
        flexDirection: 'column',
      }, {
        flexDirection: 'row',
      }],
      {
        color: 'red',
      },
    ])).toEqual({
      backgroundColor: 'transparent',
      textAlign: 'right',
      color: 'red',
      borderBottom: '1px solid #f99',
      flexDirection: 'row',
    })
  })

})
