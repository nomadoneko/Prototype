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
// Layer一覧
// ======================================================

const layerList =
  document.getElementById("layerList");



// ======================================================
// 現在LayerのCanvasを取得
// ======================================================

function getCurrentCanvas() {
  return canvases[currentLayerIndex];
}



// ======================================================
// Layer表示を更新
// ======================================================

function updateLayerDisplay() {

  // ==================================================
  // 現在Layer表示
  // ==================================================

  layerDisplay.firstElementChild.textContent =
    "現在のLayer : Layer " +
    (currentLayerIndex + 1) +
    " / " +
    (layerVisibility[currentLayerIndex]
      ? "表示"
      : "非表示");


  // ==================================================
  // Layer一覧表示
  // ==================================================

  const layerItems =
    layerList.children;


  for (
    let i = 0;
    i < layerItems.length;
    i++
  ) {

    layerItems[i].textContent =
      "Layer " +
      (i + 1) +
      " : " +
      (layerVisibility[i]
        ? "表示"
        : "非表示");


    // ==================================================
    // 現在Layerを分かりやすく表示
    // ==================================================

    if (i === currentLayerIndex) {

      layerItems[i].textContent +=
        " ← 現在";

    }

  }

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


  currentLayerIndex =
    layerIndex;


  // ==================================================
  // 現在Layerだけ入力を受け付ける
  // ==================================================

  canvases.forEach((canvas, index) => {

    if (
      index === currentLayerIndex
    ) {

      canvas.style.pointerEvents =
        "auto";

    } else {

      canvas.style.pointerEvents =
        "none";

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


  canvases[currentLayerIndex]
    .style.visibility =
      layerVisibility[currentLayerIndex]
        ? "visible"
        : "hidden";


  updateLayerDisplay();

}

// ======================================================
// 全Layer表示 / 非表示
// ======================================================

function toggleAllLayerVisibility() {

  // ==================================================
  // 現在の状態を確認
  // ==================================================

  const allVisible =
    layerVisibility.every(
      (visible) => visible === true
    );


  // ==================================================
  // 全Layerを表示 / 非表示
  // ==================================================

  const newVisibility =
    !allVisible;


  layerVisibility.forEach(
    (visible, index) => {

      layerVisibility[index] =
        newVisibility;

      canvases[index].style.visibility =
        newVisibility
          ? "visible"
          : "hidden";

    }
  );


  // ==================================================
  // Layer表示を更新
  // ==================================================

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
  toggleLayerVisibility,
  toggleAllLayerVisibility
};