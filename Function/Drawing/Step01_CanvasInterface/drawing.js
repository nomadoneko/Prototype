// ======================================================
// Canvasごとに描画機能を登録
// ======================================================

canvases.forEach((canvas) => {

    const ctx = getCanvasContext(canvas);

    let isDrawing = false;


    // ==================================================
    // 描画開始
    // ==================================================

    canvas.addEventListener("pointerdown", (e) => {

        debug.textContent =
            "pointerType : " + e.pointerType;


        // Apple Pencil以外は描画しない
        if (e.pointerType !== "pen") {
            return;
        }


        // 描画中はスクロール停止
        canvasContainer.style.overflow = "hidden";


        isDrawing = true;

        ctx.beginPath();


        const pos =
            getCanvasPosition(canvas, e);

        ctx.moveTo(pos.x, pos.y);

    });


    // ==================================================
    // 描画中
    // ==================================================

    canvas.addEventListener("pointermove", (e) => {

        if (!isDrawing) return;


        const pos =
            getCanvasPosition(canvas, e);

        ctx.lineTo(pos.x, pos.y);

        ctx.stroke();

    });


    // ==================================================
    // 描画終了
    // ==================================================

    canvas.addEventListener("pointerup", () => {

        canvasContainer.style.overflow = "auto";

        isDrawing = false;

    });


    // ==================================================
    // Canvasから離れた場合
    // ==================================================

    canvas.addEventListener("pointerleave", () => {

        canvasContainer.style.overflow = "auto";

        isDrawing = false;

    });

});