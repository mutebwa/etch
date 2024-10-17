const container = document.querySelector(".container");

for (let i = 0; i < 15; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < 15; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener(
        "mouseover",
        (event) => {
            event.target.style.backgroundColor = "black";
           }     
    );
    row.appendChild(cell);
  }
  container.appendChild(row);
}

const button = document.querySelector("button");
const cells = document.querySelectorAll(".cell");
const cellsArray = Array.from(cells);

button.onclick = () => {
    cellsArray.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}