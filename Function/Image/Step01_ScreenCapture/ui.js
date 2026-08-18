// ======================================================
// Layer
// ======================================================

import {
  switchLayer,
  toggleLayerVisibility,
  toggleAllLayerVisibility
} from "./layer.js";


// ======================================================
// History
// ======================================================

import {
  undoDrawing,
  redoDrawing,
  initializeDrawing
} from "./history.js";


// ======================================================
// DOM取得
// ======================================================

// ======================================================
// Undo / Redo
// ======================================================

const undoButton =
  document.getElementById("undoButton");

const redoButton =
  document.getElementById("redoButton");


// ======================================================
// 初期化
// ======================================================

const initializeButton =
  document.getElementById("initializeButton");


// ======================================================
// Layer選択
// ======================================================

const layer1Button =
  document.getElementById("layer1Button");

const layer2Button =
  document.getElementById("layer2Button");

const layer3Button =
  document.getElementById("layer3Button");


// ======================================================
// Layer表示操作
// ======================================================

const layerVisibilityButton =
  document.getElementById("layerVisibilityButton");

const allLayerVisibilityButton =
  document.getElementById("allLayerVisibilityButton");


// ======================================================
// Undoボタン
// ======================================================

undoButton.addEventListener("click", () => {

  undoDrawing();

});


// ======================================================
// Redoボタン
// ======================================================

redoButton.addEventListener("click", () => {

  redoDrawing();

});


// ======================================================
// 初期化ボタン
// ======================================================

initializeButton.addEventListener("click", () => {

  initializeDrawing();

});


// ======================================================
// Layer 1ボタン
// ======================================================

layer1Button.addEventListener("click", () => {

  switchLayer(0);

});


// ======================================================
// Layer 2ボタン
// ======================================================

layer2Button.addEventListener("click", () => {

  switchLayer(1);

});


// ======================================================
// Layer 3ボタン
// ======================================================

layer3Button.addEventListener("click", () => {

  switchLayer(2);

});


// ======================================================
// Vボタン
// ======================================================
//
// 現在Layerの表示 / 非表示
// ======================================================

layerVisibilityButton.addEventListener("click", () => {

  toggleLayerVisibility();

});


// ======================================================
// Aボタン
// ======================================================
//
// 全Layerの表示 / 非表示
// ======================================================

allLayerVisibilityButton.addEventListener("click", () => {

  toggleAllLayerVisibility();

});