// ======================================================
// Canvas
// ======================================================

import { canvases } from "./canvas.js";


// ======================================================
// 現在のLayer
// ======================================================
//
// 0 = Layer 1
// 1 = Layer 2
// 2 = Layer 3
// ======================================================

let currentLayerIndex = 0;


// ======================================================
// Layer表示状態
// ======================================================

const layerVisibility = [true, true, true];


// ======================================================
// Layer表示
// ======================================================

const layerDisplay =
  document.getElementById("layerDisplay");


// ======================================================
// 現在LayerのCanvasを取得
// ======================================================

function getCurrentCanvas() {
  return canvases[currentLayerIndex];
}


// ======================================================
// 現在Layerの表示
// ======================================================

function updateLayerDisplay() {
  layerDisplay.textContent =
    "現在のLayer : Layer " +
    (currentLayerIndex + 1) +
    " / " +
    (layerVisibility[currentLayerIndex]
      ? "表示"
      : "非表示");
}


// ======================================================
// Layer切り替え
// ======================================================

function switchLayer(layerIndex) {
  if (
    layerIndex < 0 ||
    layerIndex >= canvases.length
  ) {
    return;
  }

  currentLayerIndex = layerIndex;

  // ==================================================
  // 現在Layerだけ入力を受け付ける
  // ==================================================

  canvases.forEach((canvas, index) => {
    if (index === currentLayerIndex) {
      canvas.style.pointerEvents = "auto";
    } else {
      canvas.style.pointerEvents = "none";
    }
  });

  // ==================================================
  // 現在Layerの表示を更新
  // ==================================================

  updateLayerDisplay();
}


// ======================================================
// Layer表示 / 非表示
// ======================================================

function toggleLayerVisibility() {
  layerVisibility[currentLayerIndex] =
    !layerVisibility[currentLayerIndex];

  canvases[currentLayerIndex].style.visibility =
    layerVisibility[currentLayerIndex]
      ? "visible"
      : "hidden";

  updateLayerDisplay();
}


// ======================================================
// 初期Layer設定
// ======================================================

switchLayer(0);


// ======================================================
// 外部へ公開
// ======================================================

export {
  currentLayerIndex,
  getCurrentCanvas,
  switchLayer,
  toggleLayerVisibility
};