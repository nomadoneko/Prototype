// ======================================================
// PC検証モード
// ======================================================
//
// true  : PCのマウスでも描画できる
// false : Apple Pencilのみ描画できる
//
// Notebookへ統合するときは false にする
// ======================================================

const DEBUG_MOUSE_DRAWING = true;


// ======================================================
// 描画履歴
// ======================================================

const drawingHistory = [];


// ======================================================
// Redo履歴
// ======================================================

const redoHistory = [];


// ======================================================
// Canvas
// ======================================================

const ctx = getCanvasContext(canvas);


// ======================================================
// 描画状態
// ======================================================

let isDrawing = false;
let currentStroke = null;


// ======================================================
// 描画設定
// ======================================================

ctx.lineWidth = 2;
ctx.lineCap = "round";


// ======================================================
// 描画開始
// ======================================================

canvas.addEventListener("pointerdown", (e) => {

    debug.textContent =
        "pointerType : " + e.pointerType;


    // ==================================================
    // 描画対象の判定
    // ==================================================

    if (
        e.pointerType !== "pen" &&
        !(
            DEBUG_MOUSE_DRAWING &&
            e.pointerType === "mouse"
        )
    ) {
        return;
    }


    // ==================================================
    // 新しい描画を開始したらRedo履歴を消去
    // ==================================================

    redoHistory.length = 0;


    // ==================================================
    // Pointer Capture
    // ==================================================

    canvas.setPointerCapture(e.pointerId);


    // ==================================================
    // 描画中はスクロール停止
    // ==================================================

    canvasContainer.style.overflow = "hidden";

    isDrawing = true;


    // ==================================================
    // 現在のストロークを作成
    // ==================================================

    currentStroke = {
        points: []
    };


    // ==================================================
    // 描画開始位置
    // ==================================================

    const pos =
        getCanvasPosition(canvas, e);


    currentStroke.points.push({
        x: pos.x,
        y: pos.y
    });


    ctx.beginPath();

    ctx.moveTo(
        pos.x,
        pos.y
    );

});


// ======================================================
// 描画中
// ======================================================

canvas.addEventListener("pointermove", (e) => {

    if (!isDrawing) {
        return;
    }


    const pos =
        getCanvasPosition(canvas, e);


    currentStroke.points.push({
        x: pos.x,
        y: pos.y
    });


    ctx.lineTo(
        pos.x,
        pos.y
    );

    ctx.stroke();

});


// ======================================================
// 描画終了
// ======================================================

canvas.addEventListener("pointerup", (e) => {

    if (!isDrawing) {
        return;
    }


    isDrawing = false;

    canvasContainer.style.overflow = "auto";


    // ==================================================
    // 描画履歴へ追加
    // ==================================================

    if (currentStroke) {

        drawingHistory.push(currentStroke);

        saveDrawing();

        currentStroke = null;

    }


    // ==================================================
    // Pointer Capture解除
    // ==================================================

    if (
        canvas.hasPointerCapture(e.pointerId)
    ) {

        canvas.releasePointerCapture(
            e.pointerId
        );

    }

});


// ======================================================
// Pointerキャンセル
// ======================================================

canvas.addEventListener("pointercancel", (e) => {

    isDrawing = false;

    canvasContainer.style.overflow = "auto";

    currentStroke = null;


    // ==================================================
    // Pointer Capture解除
    // ==================================================

    if (
        canvas.hasPointerCapture(e.pointerId)
    ) {

        canvas.releasePointerCapture(
            e.pointerId
        );

    }

});


// ======================================================
// Canvasを履歴から再描画
// ======================================================

function redrawAll() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    drawingHistory.forEach((stroke) => {

        if (stroke.points.length === 0) {
            return;
        }


        ctx.beginPath();

        ctx.moveTo(
            stroke.points[0].x,
            stroke.points[0].y
        );


        for (
            let i = 1;
            i < stroke.points.length;
            i++
        ) {

            ctx.lineTo(
                stroke.points[i].x,
                stroke.points[i].y
            );

        }


        ctx.stroke();

    });

}


// ======================================================
// 初期化
// ======================================================

function initializeDrawing() {

    // 描画履歴を消去
    drawingHistory.length = 0;


    // Redo履歴を消去
    redoHistory.length = 0;


    // Canvasを履歴から再描画
    // 履歴が空なのでCanvasも空になる
    redrawAll();

}


// ======================================================
// Undo
// ======================================================

function undoDrawing() {

    if (drawingHistory.length === 0) {
        return;
    }


    // ==================================================
    // 最後の描画を取り出す
    // ==================================================

    const stroke =
        drawingHistory.pop();


    // ==================================================
    // Redo履歴へ移動
    // ==================================================

    redoHistory.push(stroke);


    // ==================================================
    // 履歴から再描画
    // ==================================================

    redrawAll();

}


// ======================================================
// Redo
// ======================================================

function redoDrawing() {

    if (redoHistory.length === 0) {
        return;
    }


    // ==================================================
    // Redo履歴から取り出す
    // ==================================================

    const stroke =
        redoHistory.pop();


    // ==================================================
    // 描画履歴へ戻す
    // ==================================================

    drawingHistory.push(stroke);


    // ==================================================
    // 履歴から再描画
    // ==================================================

    redrawAll();

}


// ======================================================
// キーボード操作
// ======================================================

document.addEventListener("keydown", (e) => {

    // ==================================================
    // Ctrl + Z
    // ==================================================

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "z"
    ) {

        e.preventDefault();

        undoDrawing();

        return;
    }


    // ==================================================
    // Ctrl + Y
    // ==================================================

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "y"
    ) {

        e.preventDefault();

        redoDrawing();

    }

});