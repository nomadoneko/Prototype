// ======================================================
// History
// ======================================================

import {
  drawingHistory,
  redrawAll
} from "./history.js";


// ======================================================
// AutoSave
// ======================================================

function saveDrawing() {

  localStorage.setItem(
    "drawingHistory",
    JSON.stringify(drawingHistory)
  );

}


// ======================================================
// 保存データ読み込み
// ======================================================

function loadDrawing() {

  const savedData =
    localStorage.getItem("drawingHistory");


  if (!savedData) {
    return;
  }


  const savedHistory =
    JSON.parse(savedData);


  drawingHistory.push(
    ...savedHistory
  );


  redrawAll();

}


// ======================================================
// 初期化時に保存データを読み込む
// ======================================================

loadDrawing();


// ======================================================
// 外部へ公開
// ======================================================

export {
  saveDrawing,
  loadDrawing
};