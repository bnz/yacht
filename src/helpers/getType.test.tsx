import { getType } from './getType'

describe('getType', () => {
  it('should return correct type', () => {
    expect(getType({})).toEqual('Object')
    expect(getType({ foo: [] })).toEqual('Object')
    expect(getType([])).toEqual('Array')
    expect(getType('asd')).toEqual('String')
    expect(getType(22)).toEqual('Number')
    expect(getType(null)).toEqual('Null')
    expect(getType(false)).toEqual('Boolean')
    expect(getType(undefined)).toEqual('Undefined')
    expect(getType(() => ({}))).toEqual('Function')
    expect(getType(function() {})).toEqual('Function')
  })
})
