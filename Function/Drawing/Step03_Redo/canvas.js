// ======================================================
// Canvas取得
// ======================================================

const canvases = document.querySelectorAll(".pageCanvas");

const canvasContainer =
    document.getElementById("canvasContainer");

const debug =
    document.getElementById("debug");


// ======================================================
// Canvas初期設定
// ======================================================

canvases.forEach((canvas) => {

    canvas.width = 1000;
    canvas.height = 1400;

});


// ======================================================
// Canvas情報を取得
// ======================================================

function getCanvasContext(canvas) {

    return canvas.getContext("2d");

}


// ======================================================
// Canvas座標を取得
// ======================================================

function getCanvasPosition(canvas, e) {

    const rect = canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

}