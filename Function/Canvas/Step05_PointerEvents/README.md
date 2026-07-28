# Step05_PointerEvents

## 目的

マウスイベントを Pointer Events に変更し、既存機能への影響を確認する。

---

## 実装内容

- mousedown → pointerdown
- mousemove → pointermove
- mouseup → pointerup
- mouseleave → pointerleave

---

## 確認結果

### 成功

- 描画できた。
- スクロール後も描画位置はずれなかった。
- スクロールも正常に動作した。

### 問題点

- PC環境では問題なし。
- タッチ・Apple Pencilは未検証。

---

## 結論

Pointer Eventsへ変更しても既存機能に問題は確認されなかった。

---

## 採用可否

採用

理由：
今後、マウス・タッチ・ペンを同じ仕組みで扱えるため。