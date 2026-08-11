# Prototype

## 1. プロジェクトの目的

このプロジェクトは、将来的に1つの大型アプリを最初から完成させることを目的としない。

小さなプロトタイプを作成し、実際に動かして検証することで、

* 必要な機能
* 技術的な実現方法
* UIや操作方法
* 各機能の問題点

を確認することを目的とする。

1つのプロトタイプで完成品を目指さず、設定した検証目的を達成した時点で終了する。

---

# 2. 基本方針

機能を最初から1つのアプリにまとめて開発しない。

まず機能や技術を**部品単位で独立して試作する**。

```text
部品を決める
    ↓
Functionに専用フォルダを作る
    ↓
Step01から段階的に検証する
    ↓
必要な機能を追加する
    ↓
部品として完成させる
    ↓
Notebookへ統合する
```

これにより、1つの機能の問題が他の機能の開発に影響することをできるだけ防ぐ。

---

# 3. フォルダ構成

```text
Prototype/
│
├── Function/
│   │
│   ├── Canvas/
│   │   ├── Step01_BaseCanvas/
│   │   ├── Step02_DrawCanvas/
│   │   ├── Step03_ScrollCanvas/
│   │   ├── Step04_ScrollCoordinate/
│   │   ├── Step05_PointerEvents/
│   │   ├── Step06_PointerCapture/
│   │   ├── Step07_MultiPageCanvas/
│   │   ├── Step08_MultiCanvasDrawing/
│   │   └── Step10_PenScrollControl/
│   │
│   ├── Page/
│   │   └── Step01_...
│   │
│   ├── Save/
│   │   └── Step01_...
│   │
│   ├── Undo/
│   │   └── Step01_...
│   │
│   ├── Eraser/
│   │   └── Step01_...
│   │
│   └── ...
│
├── Notebook/
│   └── ...
│
├── UI/
│   └── ...
│
├── docs/
│   └── INDEX.md
│
└── 開発ルール
```

---

# 4. 各フォルダの役割

## Function

機能・技術を部品単位で試作する場所。

例えば、

```text
Function/
├── Canvas/
├── Page/
├── Save/
├── Undo/
└── Eraser/
```

のように、独立した要素ごとにフォルダを作成する。

---

## Function内のStep

各要素の検証をStepごとに分ける。

例えばCanvasの場合、

```text
Canvas/
├── Step01_BaseCanvas/
├── Step02_DrawCanvas/
├── Step03_ScrollCanvas/
└── ...
```

とする。

1つのStepでは、目的を限定する。

前のStepで確認した内容を基礎として、次のStepで必要な機能を追加・検証する。

---

## Notebook

完成した部品を統合する場所。

Notebookの中で各機能を一から開発するのではなく、

```text
Canvas
Page
Save
Undo
Eraser
```

など、Functionで完成した部品を組み合わせる。

Notebookは、部品を組み合わせた状態でアプリとして成立するかを確認するために使用する。

---

## UI

見た目や操作方法を独立して検証する場所。

Functionとは役割を分ける。

Functionでは主に、

> 「その機能が実現できるか」

を検証する。

UIでは主に、

> 「どのような表示・操作が使いやすいか」

を検証する。

---

## docs

プロジェクト全体の情報を管理する。

### INDEX.md

以下を記録する。

* プロジェクトの目的
* 基本方針
* フォルダ構成
* 各フォルダの役割
* プロトタイプの進行状況
* 部品の完成状況

---

# 5. なぜこの構成にするのか

## 5.1 大型アプリを最初から作らないため

最初から、

```text
Notebook
├── Canvas
├── Page
├── Save
├── Undo
└── Eraser
```

をすべて組み込んで開発すると、問題が発生したときに原因を特定しにくくなる。

そのため、まず各機能を独立して検証する。

---

## 5.2 プロトタイプの目的を明確にするため

1つのプロトタイプには、明確な検証目的を設定する。

例えばCanvasでは、

> Canvasで描画できるか

から始め、

> スクロールできるか

> スクロール後も座標がずれないか

> Apple Pencilで描画できるか

などを段階的に確認する。

目的を達成したら、そのプロトタイプを終了する。

---

## 5.3 機能ごとの完成状態を確認できるため

例えば、

```text
Function/Canvas/
```

が完成したら、

> Canvasという部品は使用できる

と判断できる。

その後、

```text
Function/Page/
```

を独立して完成させる。

このように部品ごとに完成状態を判断する。

---

## 5.4 部品を再利用できるため

完成した部品は、必要に応じてNotebookへ統合する。

例えば、

```text
Canvas → 完成
Page   → 完成
Save   → 完成
```

となった場合、

```text
Notebook
```

でこれらを組み合わせる。

そのため、Notebookを開発の出発点にしない。

---

## 5.5 試作を途中で終了しやすくするため

すべての機能を完成させる必要はない。

検証して、

```text
採用
不採用
保留
```

を判断する。

不採用になった機能があっても、他の機能の試作には影響させない。

---

# 6. Canvas試作

Canvasは最初に検証した部品の1つ。

現在までに以下を検証した。

```text
Step01  BaseCanvas
Step02  DrawCanvas
Step03  ScrollCanvas
Step04  ScrollCoordinate
Step05  PointerEvents
Step06  PointerCapture
Step07  MultiPageCanvas
Step08  MultiCanvasDrawing
Step10  PenScrollControl
```

### 検証結果

* PCで描画できる
* スクロールできる
* スクロール後も描画位置がずれない
* Pointer Eventsを使用できる
* 複数Canvasを使用できる
* 各Canvasを独立して描画できる
* Apple Pencilで描画できる
* 指でスクロールできる
* Apple Pencilで描画中だけスクロールを停止できる
* 指による描画を防止できる
* 画面のテキスト選択を防止できる

### 結論

**Canvasを部品として採用する。**

Canvas自体の検証はここで終了し、今後必要になった場合は完成した部品として別のプロトタイプで利用する。

---

# 7. 開発の流れ

```text
新しい要素を決める
        ↓
Functionにフォルダを作る
        ↓
Step01を作成
        ↓
実際に動かして確認
        ↓
問題があれば同じStepで修正
        ↓
次のStepへ
        ↓
部品として完成
        ↓
採用・不採用・保留を判断
        ↓
必要に応じてNotebookへ統合
```

この流れを基本とする。

---

# 8. 重要な考え方

**Prototypeは完成品を作る場所ではない。**

「作る → 試す → 判断する」を繰り返し、必要な部品を少しずつ完成させる。

Notebookはその部品を統合する場所であり、最初からNotebookを大型アプリとして作り込まない。
