// ======================================================
// DOM取得
// ======================================================

const undoButton =
    document.getElementById("undoButton");

const redoButton =
    document.getElementById("redoButton");


// ======================================================
// Undoボタン
// ======================================================

undoButton.addEventListener("click", () => {

    undoDrawing();

});


// ======================================================
// Redoボタン
// ======================================================

redoButton.addEventListener("click", () => {

    redoDrawing();

});

// ======================================================
// 初期化ボタン
// ======================================================

const initializeButton =
    document.getElementById("initializeButton");


initializeButton.addEventListener("click", () => {

    initializeDrawing();

});