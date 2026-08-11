# Step02_Undo

## 目的

既存のDrawing機能にUndoを追加する。

## 方針

描画履歴はCanvasごとに分けない。

すべてのCanvasの描画を1つの履歴で管理する。

各ストロークには、描画されたCanvasの番号を記録する。

## Undo

Ctrl + Zで最後のストロークを取り消す。

Undo後は描画履歴をもとに全Canvasを再描画する。

## 確認

PCでコードの動作を確認する。

Step02の最後に描画とUndoを確認する。

その後、iPadで描画とUndoを確認する。

## 結果

未確認