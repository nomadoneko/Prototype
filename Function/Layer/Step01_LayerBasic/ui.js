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

const undoButton =
  document.getElementById("undoButton");

const redoButton =
  document.getElementById("redoButton");

const initializeButton =
  document.getElementById("initializeButton");


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