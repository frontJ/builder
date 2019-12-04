import { FrontJRoutes } from '../types'

export function generateRoutes <T> (array: T[], callback: (item: T) => [string, string]): FrontJRoutes {
  const tmp: FrontJRoutes = {}
  for (const item of array) {
    const result = callback(item)
    tmp[result[0]] = result[1]
  }
  return tmp
}
