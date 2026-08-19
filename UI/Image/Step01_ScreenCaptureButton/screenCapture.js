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

  // ==================================================
  // Debug
  // ==================================================

  const debug =
    document.getElementById("debug");


  function showDebug(message) {

    if (debug) {

      debug.textContent =
        "Screen Capture : " +
        message;

    }

  }


  showDebug("開始");


  try {

    // ==================================================
    // getDisplayMedia確認
    // ==================================================

    if (
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getDisplayMedia
    ) {

      showDebug(
        "getDisplayMediaが使用できません"
      );

      return;

    }


    showDebug(
      "共有画面を選択してください"
    );


    // ==================================================
    // 画面キャプチャを開始
    // ==================================================

    const stream =
      await navigator.mediaDevices.getDisplayMedia({
        video: true
      });


    showDebug(
      "画面共有開始"
    );


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

        showDebug(
          "Video準備完了"
        );


        // ==================================================
        // キャプチャ画面サイズ
        // ==================================================

        const width =
          video.videoWidth;

        const height =
          video.videoHeight;


        showDebug(
          "画面サイズ : " +
          width +
          " × " +
          height
        );


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

        showDebug(
          "現在Layerへ貼り付け"
        );


        addImageToCurrentLayer(
          captureCanvas
        );


        // ==================================================
        // 完了
        // ==================================================

        showDebug(
          "キャプチャ完了"
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

          showDebug(
            "画面共有終了"
          );

          video.remove();

        }
      );


  } catch (error) {

    // ==================================================
    // エラー
    // ==================================================

    showDebug(
      "エラー : " +
      error.name +
      " / " +
      error.message
    );

  }

}


// ======================================================
// 外部へ公開
// ======================================================

export {
  startScreenCapture
};