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

let sizeBtn = document.querySelector(".sizeBtn");
sizeBtn.addEventListener("click", () => {
    let gridSize = prompt("Please enter a custom number of squares per side for a new grid.", "0");
    gridSize = Number(gridSize);
    console.log(typeof(gridSize));
    while (gridSize < 0 || gridSize > 100) {
        gridSize =  prompt("Please enter a positive number of 100 or less.", "0");
    }

    allSquares = document.querySelectorAll(".gridSquare");
    allSquares.forEach((square) => {
        square.remove();
    });

    for (i=0;i<(gridSize*gridSize);i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        grid.appendChild(gridSquare);
    }

    allSquares = document.querySelectorAll(".gridSquare");
    allSquares.forEach((square) => {
    square.addEventListener("mouseover", ()=> {
        square.classList.add("filledSquare");
    });
});
})