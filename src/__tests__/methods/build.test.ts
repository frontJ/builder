import { build } from '../../index'

describe('build', () => {
  it('invalid options', () => {
    expect(() => {
      build((null as unknown as { routes: {} }))
    }).toThrowError(new Error('options is must be object.'))
  })

  it('options without routes', () => {
    expect(() => {
      build(({} as unknown as { routes: {} }))
    }).toThrowError(new Error('options requires routes property.'))
  })

  it('invalid options.outDir', () => {
    expect(() => {
      build({ routes: {}, outDir: (null as unknown as '') })
    }).toThrowError(new Error('options.outDir is must be string or undefined.'))
  })

  it('invalid options.routes', () => {
    expect(() => {
      build({ routes: (null as unknown as {}) })
    }).toThrowError(new Error('options.routes is must be object.'))
  })

  it('invalid options.routes values', () => {
    expect(() => {
      build({ routes: { '/path': (null as unknown as '') } })
    }).toThrowError(new Error('values of options.routes are must be string.'))
  })
})
