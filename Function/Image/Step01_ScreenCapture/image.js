// ======================================================
// Image
// ======================================================
//
// キャプチャした画像を現在Layerへ配置する
// 画像はData URLとして履歴へ保存する
//
// ======================================================


// ======================================================
// Canvas
// ======================================================

import {
  canvases,
  contexts
} from "./canvas.js";


// ======================================================
// Layer
// ======================================================

import {
  currentLayerIndex
} from "./layer.js";


// ======================================================
// History
// ======================================================

import {
  addImage
} from "./history.js";


// ======================================================
// 画像を現在Layerへ追加
// ======================================================

function addImageToCurrentLayer(image) {

  if (!image) {
    return;
  }


  // ==================================================
  // 現在Layer
  // ==================================================

  const layerIndex =
    currentLayerIndex;


  const canvas =
    canvases[layerIndex];


  const ctx =
    contexts[layerIndex];


  // ==================================================
  // 画像をCanvasへ描画
  // ==================================================

  ctx.drawImage(

    image,

    0,
    0,

    canvas.width,
    canvas.height

  );


  // ==================================================
  // 画像をData URLへ変換
  // ==================================================

  const imageCanvas =
    document.createElement("canvas");


  imageCanvas.width =
    canvas.width;

  imageCanvas.height =
    canvas.height;


  const imageContext =
    imageCanvas.getContext("2d");


  imageContext.drawImage(

    image,

    0,
    0,

    canvas.width,
    canvas.height

  );


  const imageData =
    imageCanvas.toDataURL("image/png");


  // ==================================================
  // 履歴へ追加
  // ==================================================

  addImage({

    layerIndex:
      layerIndex,

    imageData:
      imageData

  });

}


// ======================================================
// 外部へ公開
// ======================================================

export {
  addImageToCurrentLayer
};