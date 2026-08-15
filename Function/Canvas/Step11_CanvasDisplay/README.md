Step11_CanvasDisplay

目的
3つに分かれていたCanvasを、1ページ＝1Canvasとして扱える表示構成に変更する。

変更内容
- Canvasを3枚から1枚に変更
- Canvasサイズを1200 × 4200pxに変更
- 縦方向のスクロールを維持
- 1枚のCanvas内で3ページ分相当の縦領域を扱えるようにした
- 複数Canvasを前提としていた描画処理を1Canvas対応に変更
- Canvas間をまたいで連続して描画できる構成に変更
- Undo / Redoを1Canvas構成で維持
- 初期化を1Canvas構成で維持
- Apple Pencil描画を維持
- 描画中のスクロール停止を維持

Canvas
1200 × 4200px

未実装・後回し
- UIをCanvas上部の専用領域へ移動
- UIのデザイン・配置の詳細調整
- Layer機能
- ページ追加・削除などのページ管理