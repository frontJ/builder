import { hasOwnProperty, isObject, isString, isUndefined } from './index'

export function validateBuildArguments (options: unknown) {
  if (!isObject(options)) {
    throw new Error('options is must be object.')
  }
  if (!hasOwnProperty(options, 'routes')) {
    throw new Error('options requires routes property.')
  }
  if (
    hasOwnProperty(options, 'outDir') &&
    !isString((options as { outDir: unknown }).outDir) &&
    !isUndefined((options as { outDir: unknown }).outDir)
  ) {
    throw new Error('options.outDir is must be string or undefined.')
  }
  if (!isObject((options as { routes: unknown }).routes)) {
    throw new Error('options.routes is must be object.')
  }
  // options.routesがオブジェクトで、文字列以外の値を持っている場合
  if (Object.values(((options as { routes: unknown }).routes) as object).filter((value) => !isString(value)).length) {
    throw new Error('values of options.routes are must be string.')
  }
}
