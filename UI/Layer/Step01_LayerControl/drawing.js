// ======================================================
// Canvas
// ======================================================

import {
  canvases,
  contexts,
  canvasContainer,
  getCanvasPosition,
} from "./canvas.js";

// ======================================================
// Layer
// ======================================================

import { currentLayerIndex } from "./layer.js";

// ======================================================
// History
// ======================================================

import { addStroke } from "./history.js";


// ======================================================
// Storage
// ======================================================

import { saveDrawing } from "./storage.js";

// ======================================================
// PC検証モード
// ======================================================
//
// true  : PCのマウスでも描画できる
// false : Apple Pencilのみ描画できる
//
// Notebookへ統合するときは false にする
// ======================================================

const DEBUG_MOUSE_DRAWING = true;

// ======================================================
// 描画状態
// ======================================================

let isDrawing = false;
let currentStroke = null;

// ======================================================
// Canvasごとに描画イベントを登録
// ======================================================

canvases.forEach((canvas, canvasIndex) => {
  // ==================================================
  // 描画開始
  // ==================================================

  canvas.addEventListener("pointerdown", (e) => {
    // ==================================================
    // 現在Layer以外では描画しない
    // ==================================================

    if (canvasIndex !== currentLayerIndex) {
      return;
    }

    // ==================================================
    // 描画対象の判定
    // ==================================================

    if (
      e.pointerType !== "pen" &&
      !(DEBUG_MOUSE_DRAWING && e.pointerType === "mouse")
    ) {
      return;
    }

    // ==================================================
    // Pointer Capture
    // ==================================================

    canvas.setPointerCapture(e.pointerId);

    // ==================================================
    // 描画中はスクロール停止
    // ==================================================

    canvasContainer.style.overflow = "hidden";

    isDrawing = true;

    // ==================================================
    // 現在のストロークを作成
    // ==================================================

    currentStroke = {
      layerIndex: currentLayerIndex,
      points: [],
    };

    // ==================================================
    // 描画開始位置
    // ==================================================

    const pos = getCanvasPosition(canvas, e);

    currentStroke.points.push({
      x: pos.x,
      y: pos.y,
    });

    const ctx = contexts[canvasIndex];

    ctx.beginPath();

    ctx.moveTo(pos.x, pos.y);
  });

  // ==================================================
  // 描画中
  // ==================================================

  canvas.addEventListener("pointermove", (e) => {
    if (!isDrawing) {
      return;
    }

    if (canvasIndex !== currentLayerIndex) {
      return;
    }

    const pos = getCanvasPosition(canvas, e);

    currentStroke.points.push({
      x: pos.x,
      y: pos.y,
    });

    const ctx = contexts[canvasIndex];

    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
  });

  // ======================================================
  // 描画終了
  // ======================================================

  canvas.addEventListener("pointerup", (e) => {
    if (!isDrawing) {
      return;
    }

    if (canvasIndex !== currentLayerIndex) {
      return;
    }

    isDrawing = false;

    canvasContainer.style.overflow = "auto";

    // ==================================================
    // Pointer Capture解除
    // ==================================================

    if (canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }

    // ==================================================
    // 描画履歴へ追加
    // ==================================================

    if (currentStroke) {
      addStroke(currentStroke);

      saveDrawing();

      currentStroke = null;
    }
  });

  // ======================================================
  // Pointerキャンセル
  // ======================================================

  canvas.addEventListener("pointercancel", (e) => {
    if (canvasIndex !== currentLayerIndex) {
      return;
    }

    isDrawing = false;

    canvasContainer.style.overflow = "auto";

    currentStroke = null;

    // ==================================================
    // Pointer Capture解除
    // ==================================================

    if (canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
  });
});
