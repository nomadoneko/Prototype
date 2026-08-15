// ======================================================
// AutoSave
// ======================================================

function saveDrawing() {

    localStorage.setItem(
        "drawingHistory",
        JSON.stringify(drawingHistory)
    );

}

// ======================================================
// 保存データ読み込み
// ======================================================

function loadDrawing() {

    const savedData =
        localStorage.getItem("drawingHistory");


    if (!savedData) {
        return;
    }


    const savedHistory =
        JSON.parse(savedData);


    drawingHistory.push(
        ...savedHistory
    );


    redrawAll();

}

// ======================================================
// 初期化
// ======================================================

loadDrawing();