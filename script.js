let grid = document.querySelector(".grid");

for (i=0;i<256;i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    grid.appendChild(gridSquare);
}

let allSquares = document.querySelectorAll(".gridSquare");
allSquares.forEach((square) => {
    let opacity=0.1;
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    square.addEventListener("mouseover", ()=> {
        while(opacity < 0.9) {
            opacity+=0.1;
            break;
        }
        square.setAttribute("style", "background-color: rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")");
        square.style.opacity = opacity;
        //square.classList.add("filledSquare");
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
        gridSquare.setAttribute("style", "height: " + (500/gridSize - 2) + "px; width: " + (500/gridSize - 2) + "px;")
        grid.appendChild(gridSquare);
    }

    allSquares = document.querySelectorAll(".gridSquare");
    allSquares.forEach((square) => {
    let opacity=0.1;
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    square.addEventListener("mouseover", ()=> {
        while(opacity < 0.9) {
            opacity+=0.1;
            break;
        }
        square.style.backgroundColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
        square.style.opacity = opacity;
        //square.classList.add("filledSquare");
    });
});
})