import { isArray, isFunction } from './index'

export function validateGenerateRoutesArguments (array: unknown, callback: unknown) {
  if (!isArray(array)) {
    throw new Error('array is must be array.')
  }
  if (!isFunction(callback)) {
    throw new Error('callback is must be function.')
  }
}
