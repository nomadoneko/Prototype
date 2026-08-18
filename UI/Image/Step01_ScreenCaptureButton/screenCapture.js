// ======================================================
// Screen Capture
// ======================================================
//
// 画面キャプチャ
// ↓
// 右半分を取得
// ↓
// 現在Layerへ貼り付け
//
// ======================================================


// ======================================================
// Image
// ======================================================

import {
  addImageToCurrentLayer
} from "./image.js";


// ======================================================
// 画面キャプチャ開始
// ======================================================

async function startScreenCapture() {

  try {

    // ==================================================
    // 画面キャプチャを開始
    // ==================================================

    const stream =
      await navigator.mediaDevices.getDisplayMedia({
        video: true
      });


    // ==================================================
    // Video要素
    // ==================================================

    const video =
      document.createElement("video");

    video.srcObject =
      stream;

    video.autoplay =
      true;


    // ==================================================
    // Videoを非表示
    // ==================================================

    video.style.position =
      "fixed";

    video.style.width =
      "1px";

    video.style.height =
      "1px";

    video.style.opacity =
      "0";

    video.style.pointerEvents =
      "none";

    document.body.appendChild(
      video
    );


    // ==================================================
    // キャプチャCanvas
    // ==================================================

    const captureCanvas =
      document.createElement("canvas");

    const captureContext =
      captureCanvas.getContext("2d");


    // ==================================================
    // Video準備完了
    // ==================================================

    video.addEventListener(
      "loadedmetadata",
      () => {

        // ==================================================
        // キャプチャ画面サイズ
        // ==================================================

        const width =
          video.videoWidth;

        const height =
          video.videoHeight;


        // ==================================================
        // 右半分
        // ==================================================

        const halfWidth =
          Math.floor(width / 2);


        // ==================================================
        // キャプチャCanvasサイズ
        // ==================================================

        captureCanvas.width =
          halfWidth;

        captureCanvas.height =
          height;


        // ==================================================
        // 右半分を取得
        // ==================================================

        captureContext.drawImage(

          video,

          halfWidth,
          0,
          halfWidth,
          height,

          0,
          0,
          halfWidth,
          height

        );


        // ==================================================
        // 現在Layerへ貼り付け
        // ==================================================

        addImageToCurrentLayer(
          captureCanvas
        );

      }
    );


    // ==================================================
    // キャプチャ終了
    // ==================================================

    stream
      .getVideoTracks()[0]
      .addEventListener(
        "ended",
        () => {

          video.remove();

        }
      );

  } catch (error) {

    console.error(
      "画面キャプチャに失敗しました:",
      error
    );

  }

}


// ======================================================
// 外部へ公開
// ======================================================

export {
  startScreenCapture
};