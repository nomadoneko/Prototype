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