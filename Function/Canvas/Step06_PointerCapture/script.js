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
    y: e.clientY - rect.top,
  };
}

// ======================================================
// 描画
// ======================================================

let isDrawing = false;

canvas.addEventListener("pointerdown", (e) => {
  isDrawing = true;

  canvas.setPointerCapture(e.pointerId);

  ctx.beginPath();
  const pos = getCanvasPosition(e);

  ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("pointermove", (e) => {
  if (!isDrawing) return;

  const pos = getCanvasPosition(e);

  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
});

canvas.addEventListener("pointerup", (e) => {
  isDrawing = false;

  canvas.releasePointerCapture(e.pointerId);
});

canvas.addEventListener("pointerleave", () => {
  isDrawing = false;
});
