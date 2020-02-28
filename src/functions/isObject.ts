import { isArray, isNull } from './index'

export function isObject (arg: unknown): arg is object {
  return (!isArray(arg) && !isNull(arg) && typeof arg === 'object')
}
