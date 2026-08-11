# Step03_Redo

## 目的

既存のDrawing機能にRedoを追加する。

## 方針

描画履歴はCanvasごとに分けない。

すべてのCanvasの描画を1つの履歴で管理する。

UndoしたストロークはRedo履歴で管理する。

各ストロークには、描画されたCanvasの番号を記録する。

## Redo

Ctrl + YでUndoした最後のストロークを戻す。

Redo後は描画履歴をもとに全Canvasを再描画する。

新しい描画を開始した場合、Redo履歴を消去する。

## 確認

PCでコードの動作を確認する。

Step03の最後に描画、Undo、Redoを確認する。

その後、iPadで描画、Undo、Redoを確認する。

## 結果

PCで描画、Undo、Redoを確認済み。

iPadでの確認は未確認。
