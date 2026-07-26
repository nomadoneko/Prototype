// ======================================================
// Canvas取得
// ======================================================

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ======================================================
// Canvasサイズ
// ======================================================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// ======================================================
// 描画
// ======================================================

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
});