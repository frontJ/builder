# @frontj/builder

[frontJ](https://github.com/frontJ/frontJ)でHTMLファイルを書き出す際に有用なパッケージです。

## Install

```bash
npm install -D @frontj/builder
```

## Example

```javascript
import { div } from '@frontj/elements'
import { build, generateRoutes } from '@frontj/builder'

const posts = [
  {
    id: 1,
    content: 'post1'
  },
  {
    id: 2,
    content: 'post2'
  },
  {
    id: 3,
    content: 'post3'
  }
]

build({
  outDir: 'public',
  routes: {
    '/': div('top'),
    ...generateRoutes(posts, (post) => {
      return [`/posts/${post.id}/`, div(post.content)]
    })
  }
})
```

## Documentation

### Methods

#### `build`

ファイルを書き出します。

```typescript
build(options: FrontJBuildOptions): void
```

| 引数 | 説明 |
| --- | --- |
| options | 各種オプション設定用オブジェクト。設定項目は[`FrontJBuildOptions`](#frontjbuildoptions)型の項目に記載しています。 |

#### `generateRoutes`

配列から[`FrontJRoutes`](#frontjroutes)型のオブジェクトを生成するメソッドです。<br>[`FrontJBuildOptions`](#frontjbuildoptions)型の`routes`プロパティに値を設定する際に有用です。

```typescript
generateRoutes<T>(array: T[], callback: (item: T, index: number) => [string, string]): FrontJRoutes
```

| 引数 | 説明 |
| --- | --- |
| array | オブジェクトを生成する元となる配列。 |
| callback | `array`の各要素とそのインデックスを引数に受け取る関数。`` [`出力先のパス`, `ファイルの内容`] ``の形をした配列を返す必要があります。 |

### Types

#### `FrontJBuildOptions`

[`build`](#build)メソッドの`options`引数の型として使用されます。

```typescript
FrontJBuildOptions {
  outDir?: string;
  routes: FrontJRoutes;
}
```

| 引数 | 説明 |
| --- | --- |
| outDir | 出力先ディレクトリ名。省略すると`'dist'`になります。出力の際、`outDir`以下のHTMLファイルは削除されます(HTML以外のファイルは残されます)。 |
| routes | ルート設定用オブジェクト。詳細は[`FrontJRoutes`](#frontjroutes)型の項目に記載しています。 |

#### `FrontJRoutes`

[`FrontJBuildOptions`](#frontjbuildoptions)型の`routes`プロパティの型として使用されます。

```typescript
FrontJRoutes {
  [route: string]: string;
}
```

| 引数 | 説明 |
| --- | --- |
| route | 出力先のパス。`/foo/bar/`(または`/foo/bar`)とすると`/foo/bar/index.html`が出力されます。`/foo/bar.html`とするとHTMLファイルを作成することができます。このプロパティの値がHTMLファイルに書き込まれます。 |

## License

[MIT](https://github.com/frontJ/builder/blob/master/LICENSE)