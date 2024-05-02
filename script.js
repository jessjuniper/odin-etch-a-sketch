let grid = document.querySelector(".grid");

for (i=0;i<256;i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    grid.appendChild(gridSquare);
}

let allSquares = document.querySelectorAll(".gridSquare");
allSquares.forEach((square) => {
    square.addEventListener("mouseover", ()=> {
        square.classList.add("filledSquare");
    });
});