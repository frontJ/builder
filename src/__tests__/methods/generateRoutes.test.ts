import { generateRoutes } from '../../index'

describe('generateRoutes', () => {
  it('valid', () => {
    expect(generateRoutes(
      ['path1', 'path2', 'path3'],
      (item, index) => [item, `page${index + 1}`]
    )).toEqual({
      path1: 'page1',
      path2: 'page2',
      path3: 'page3'
    })
  })

  it('empty array', () => {
    expect(generateRoutes(
      [],
      () => ['', '']
    )).toEqual({})
  })

  it('invalid array', () => {
    expect(() => {
      generateRoutes(
        (null as unknown as []),
        () => ['', '']
      )
    }).toThrowError(new Error('array is must be array.'))
  })

  it('invalid callback', () => {
    expect(() => {
      generateRoutes(
        [],
        (null as unknown as () => ['', ''])
      )
    }).toThrowError(new Error('callback is must be function.'))
  })
})
