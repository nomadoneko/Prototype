// ======================================================
// Canvas取得
// ======================================================

const canvases = document.querySelectorAll(".pageCanvas");
const canvasContainer = document.getElementById("canvasContainer");
const debug = document.getElementById("debug");

// ======================================================
// 各Canvasへ描画機能を登録
// ======================================================

canvases.forEach((canvas) => {

    const ctx = canvas.getContext("2d");

    // Canvasサイズ
    canvas.width = 1000;
    canvas.height = 1400;

    let isDrawing = false;

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
    // 描画開始
    // ======================================================

    canvas.addEventListener("pointerdown", (e) => {

        debug.textContent = "pointerType : " + e.pointerType;

        // Apple Pencil以外は描画しない
        if (e.pointerType !== "pen") {
            return;
        }

        // 描画中だけスクロールを停止
        canvasContainer.style.overflow = "hidden";

        isDrawing = true;

        ctx.beginPath();

        const pos = getCanvasPosition(e);

        ctx.moveTo(pos.x, pos.y);

    });

    // ======================================================
    // 描画中
    // ======================================================

    canvas.addEventListener("pointermove", (e) => {

        if (!isDrawing) return;

        const pos = getCanvasPosition(e);

        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

    });

    // ======================================================
    // 描画終了
    // ======================================================

    canvas.addEventListener("pointerup", () => {

        canvasContainer.style.overflow = "auto";

        isDrawing = false;

    });

    canvas.addEventListener("pointerleave", () => {

        canvasContainer.style.overflow = "auto";

        isDrawing = false;

    });

});