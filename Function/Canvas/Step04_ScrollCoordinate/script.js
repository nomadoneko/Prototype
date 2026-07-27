// ======================================================
// Canvas取得
// ======================================================

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ======================================================
// Canvasサイズ
// ======================================================

function resizeCanvas() {
    canvas.width = 2000;
    canvas.height = 3000;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// ======================================================
// 座標取得
// ======================================================

function getCanvasPosition(e) {

    const rect = canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

}

// ======================================================
// 描画
// ======================================================

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;

    ctx.beginPath();
    const pos = getCanvasPosition(e);

ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    const pos = getCanvasPosition(e);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
});