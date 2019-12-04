import rimraf from 'rimraf'
import fs from 'fs-extra'
import path from 'path'
import { FrontJBuildOptions } from '../types'

function write (filePath: string, content: string): void {
  // 拡張子がなければディレクトリとみなし、そのディレクトリ以下にindex.htmlとして書き出す
  if (path.extname(filePath) === '') {
    fs.outputFile(path.join(filePath, 'index.html'), content)
      .catch((err) => {
        throw err
      })
  } else {
    fs.outputFile(filePath, content)
      .catch((err) => {
        throw err
      })
  }
}

export function build (options: FrontJBuildOptions): void {
  const outDir = options.outDir ?? 'dist'
  const routes = options.routes

  const outDirPath = path.resolve('', outDir)

  rimraf(`${outDirPath}/**/*.html`, (err) => {
    if (err) throw err
    for (const route of Object.keys(routes)) {
      write(path.join(outDirPath, route), routes[route])
    }
  })
}
