const divContainer = document.querySelector(".container");

const gridSizeButton = document.querySelector(".grid-size-button");

gridSizeButton.addEventListener("click", () => {
  let sideSize = prompt("Num sq for new grid?");

  // Clear previous grid if present
  if (divContainer.hasChildNodes() && sideSize <= 100) {
    divContainer.innerHTML = "";
  }

  createGrid(sideSize, divContainer);
});

function createGrid(sideSize = 16, divContainer) {
  if (sideSize <= 100) {
    for (let i = 0; i < sideSize; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < sideSize; j++) {
        const squareDiv = document.createElement("div");

        squareDiv.style.backgroundColor = "red";
        squareDiv.style.height = "50px";
        squareDiv.style.width = "50px";
        squareDiv.classList.add("square-div");
        squareDiv.addEventListener("mouseenter", () => {
          squareDiv.style.backgroundColor = "blue";
        });

        row.appendChild(squareDiv);
      }
      divContainer.appendChild(row);
    }
  } else {
    alert("Cannot exceed 100 sq on a side!");
  }
}
