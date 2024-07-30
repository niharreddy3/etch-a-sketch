const divContainer = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 16; j++) {
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
