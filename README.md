# 原神 育成ガイド（React + TypeScript）

ヴェスナのページを最初のサンプルにしたWebサイトの土台です。

## 起動方法

Node.js（推奨: 20以上）をインストールした後、このフォルダでターミナルを開きます。

```bash
npm install
npm run dev
```

表示されたURL（通常は `http://localhost:5173`）をブラウザで開きます。

公開用ファイルを作る場合:

```bash
npm run build
```

## 画像フォルダのルール

画像はキャラクターごとに分けます。

```text
public/images/characters/
├── vesna/
│   ├── header.webp
│   └── icon.webp
├── character-id/
│   ├── header.webp
│   └── icon.webp
└── _template/
    └── icon.svg
```

- `header.webp`: ページ上部の横長画像。縦横比を維持し、切り取りません。
- `icon.webp`: 編成欄などで使うアイコン。

## キャラクターを追加する方法

1. `src/data/characters/_template/guide.ts` をコピーします。
2. `src/data/characters/<キャラクターID>/guide.ts` として保存します。
3. `public/images/characters/<キャラクターID>/` を作り、画像を入れます。
4. `src/data/characters/index.ts` に import と登録を追加します。
5. `guide.ts` の各項目を入力します。

## 編成・ローテーションの編集

各編成は `src/data/characters/vesna/guide.ts` の `teams` にあります。

- `members`: キャラクターID、表示名、聖遺物セット、アイコン画像のパス
- `notes`: 編成の特徴や注意点
- `rotation`: 表示ボタンで開くローテーション表。`characterName` と `actions` を入力します。

`actions` は文字列なので、改行を含めて記入できます。例:

```ts
rotation: [
  { characterName: 'ヴェスナ', actions: 'E → N1C → sE\nN1C → sE → Q' },
  { characterName: 'キャラクター名', actions: 'スキル → 元素爆発' },
],
```

## 現在のサンプルについて

- ヴェスナのヘッダー画像は、提供されたPDFの1ページ目を縦横比を保ってWebP化したものです。
- 元資料の編成メンバーのキャラクター名・聖遺物セット名は画像アイコンのみで文字情報が確認できなかったため、編成欄の該当箇所は入力用の仮表示にしています。
- 編成ごとのローテーションは元資料に記載がなかったため、空欄にしています。
- ステータスの4列は資料の順番を保ち、条件名は「条件A〜D」としています。元資料の列見出しにある装備画像の名称は掲載していません。
