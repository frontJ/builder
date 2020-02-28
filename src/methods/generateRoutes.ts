import { validateGenerateRoutesArguments } from '../functions'
import { FrontJRoutes } from '../types'

export function generateRoutes <T> (array: T[], callback: (item: T, index: number) => [string, string]): FrontJRoutes {
  validateGenerateRoutesArguments(array, callback)

  const tmp: FrontJRoutes = {}
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i)
    tmp[result[0]] = result[1]
  }
  return tmp
}
