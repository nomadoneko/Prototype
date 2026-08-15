# UI / Layer / Step01

## 目的

キーボード操作に依存していたLayer操作を、iPadでも操作できるようにボタン化する。

## 実装した内容

Layer選択ボタンを追加。

- Layer 1
- Layer 2
- Layer 3

Layer表示操作ボタンを追加。

- V
  - 現在Layerの表示 / 非表示
- A
  - 全Layerの表示 / 非表示

既存の操作も維持。

- Undo
- Redo
- 初期化

## 操作

Layer 1 / Layer 2 / Layer 3

→ 現在Layerを変更する。

V

→ 現在Layerの表示 / 非表示を切り替える。

A

→ 全Layerを表示 / 非表示に切り替える。

## 確認

- Layer 1 / 2 / 3のボタン操作を確認
- 現在Layerの変更を確認
- Vボタンによる表示 / 非表示を確認
- Aボタンによる全Layer表示 / 非表示を確認
- Undo / Redoを確認
- 初期化を確認

## Step01の結果

iPadでキーボードを使わずにLayerの基本操作を行うためのボタンを設置できた。

## 次のStepの方針

UI / Layer / Step02では、Layer操作UIを実際のNotebookで使いやすくするための表示・操作方法を検討する。

候補：

- 現在Layerの強調表示
- Layer選択ボタンの状態表示
- Layer表示 / 非表示状態の表示
- Layer一覧との連動
- ボタン配置の改善

必要なものだけを選択して実装・確認する。