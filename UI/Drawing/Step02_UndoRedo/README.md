# Step02_UndoRedo

## 目的

DrawingのUndo・Redo機能をUIから操作できるようにする。

## 構成

Canvas・Drawing・UIを分離して管理する。

- `canvas.js`：Canvas関連
- `drawing.js`：描画・描画履歴・Undo・Redo
- `ui.js`：Undo・Redoボタンの操作
- `style.css`：CanvasとUIの表示

## UI

画面右上にUndo・Redoボタンを追加する。

- Undo：↶
- Redo：↷

UIの見た目は最小限とする。

## 変更

Step03_RedoのDrawing機能をベースにUI版を作成。

Undo・Redoの処理は`drawing.js`に残し、`ui.js`から呼び出す構成に変更。

`index.html`では以下の順番で読み込む。

1. `canvas.js`
2. `drawing.js`
3. `ui.js`

## CSS

既存のCanvas表示を維持したうえで、右上にUndo・Redoボタンを追加。

UI追加によってCanvasの描画領域とUIの入力領域が干渉しないよう調整した。

## 確認

PCで描画、Undo、Redo、Undo・Redoボタンの動作を確認。

Canvasの下部について、UI追加による表示上の問題を確認した。

## 未対応

Undo・Redoボタンの位置やUI全体の細かな配置は未調整。

UIは今後のUIステップで調整する。