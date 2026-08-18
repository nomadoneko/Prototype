// ======================================================
// Canvas取得
// ======================================================

const canvases =
    document.querySelectorAll(".pageCanvas");

const canvasContainer =
    document.getElementById("canvasContainer");

const debug =
    document.getElementById("debug");


// ======================================================
// Canvas初期設定
// ======================================================

canvases.forEach((canvas) => {

    canvas.width = 1200;
    canvas.height = 4200;

});


// ======================================================
// Canvas情報を取得
// ======================================================

function getCanvasContext(canvas) {

    return canvas.getContext("2d");

}


// ======================================================
// CanvasごとのContext
// ======================================================

const contexts = [];

canvases.forEach((canvas) => {

    contexts.push(
        getCanvasContext(canvas)
    );

});


// ======================================================
// Canvasごとの描画設定
// ======================================================

contexts.forEach((ctx) => {

    ctx.lineWidth = 2;
    ctx.lineCap = "round";

});


// ======================================================
// Canvas座標を取得
// ======================================================

function getCanvasPosition(canvas, e) {

    const rect =
        canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

}


// ======================================================
// 外部へ公開
// ======================================================

export {
    canvases,
    canvasContainer,
    debug,
    contexts,
    getCanvasContext,
    getCanvasPosition
};