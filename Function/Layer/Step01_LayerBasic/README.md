# Step01_LayerBasic


## 実装した内容


Layer機能の実装を進める前に、既存コードの役割が混在していたため、ファイルを役割ごとに分離した。


### ファイル構成


```text
Step01_LayerBasic/
├── index.html
├── style.css
│
├── scripts.js
│
├── canvas.js
├── drawing.js
├── layer.js
├── history.js
├── keyboard.js
├── ui.js
└── storage.js
各ファイルの役割
canvas.js
Canvasの取得
Canvasの初期設定
Canvas Contextの取得
Canvas座標の取得
drawing.js
描画処理
Pointerイベント
Pointer Capture
描画中のスクロール制御
現在Layerへの描画
描画完了時の履歴追加
描画完了時の保存
layer.js
現在Layerの管理
Layer切り替え
Layerの表示 / 非表示
Layer表示の更新
history.js
描画履歴
Redo履歴
描画履歴への追加
履歴からの再描画
Undo
Redo
初期化
keyboard.js
1 / 2 / 3 によるLayer切り替え
Ctrl + Z によるUndo
Ctrl + Y によるRedo
V によるLayer表示 / 非表示
ui.js
Undoボタン
Redoボタン
初期化ボタン
storage.js
描画履歴の保存
保存データの読み込み
初期読み込み
scripts.js
各JavaScriptファイルを読み込む入口
実際に確認したこと
描画

PCのマウスによる描画を確認した。

DEBUG_MOUSE_DRAWING = true の状態で描画できることを確認した。

Layer切り替え

キーボード操作によるLayer切り替えを確認した。

1 → Layer 1
2 → Layer 2
3 → Layer 3

Layerを変更すると、画面上の現在Layer表示も変更されることを確認した。

Layer表示 / 非表示

V キーによる現在Layerの表示 / 非表示を確認した。

Undo / Redo

Undo / Redoが分離後も動作することを確認した。

初期化

初期化ボタンによって描画を消去できることを確認した。

AutoSave

描画後に保存され、ページを再読み込みした際に保存された描画が読み込まれることを確認した。

UI

以下のボタンが動作することを確認した。

Undo
Redo
初期化
ファイル分離後の依存関係
scripts.js
│
├── canvas.js
├── layer.js
├── history.js
├── storage.js
├── drawing.js
├── ui.js
└── keyboard.js

各機能を役割ごとに分離し、scripts.js を入口として読み込む構成にした。

確認結果

ファイル分離後も、以下の基本機能が動作することを確認した。

描画
Layer切り替え
Layer表示 / 非表示
Undo
Redo
初期化
AutoSave
保存データ読み込み
UIボタン
キーボード操作
未実装
Layerの追加 / 削除
Layer名の変更
Layer順序変更
Layerごとの個別操作UI
Layerごとの保存方式の詳細設計

これらは今回のStepでは実装していない。

未確認・保留
Apple Pencilでの最終確認
Notebookへ統合した場合の動作
Layer機能と他の機能を統合した場合の依存関係
Storageの保存方式の最終仕様
今後

今回のファイル分離を土台として、Layer機能を段階的に追加・検証する。

必要な機能のみを次のStepで追加し、各Stepで動作確認を行う。

## 次のStepの方針

Layer Step02では、Layerの表示と操作方法を検証する。

### Step02で確認する内容

・Layer一覧表示のON / OFF
・キーボードによるLayer操作
・Layer操作時の表示や挙動の確認

このStepでは、まだ操作用のボタンは追加しない。

まずキーボード操作と一覧表示によるLayer操作を確認し、
実際の操作方法として問題がないか検証する。

### 次のUI Step

Step02で操作方法を確認した後、
Layer操作用のボタンを追加する。

このボタン追加はLayer Stepではなく、
UIのStepとして分離して検証する。

Layer
├── Step01_LayerBasic
│
└── Step02_LayerControl
    ├── Layer一覧表示 ON / OFF
    └── キーボード操作
            ↓
        操作確認
            ↓
UI
└── Step01_LayerButton
    └── Layer操作をボタン化