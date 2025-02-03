const title = document.querySelector("#title");
title.style.cssText = "color: red; text-align: center; margin-bottom: 80px;";

const container = document.querySelector("#container");
container.style.cssText = "width: 960px; display: flex; flex-wrap: wrap; margin: auto;";

const buttonDiv = document.createElement("div");
buttonDiv.style.cssText = "position: absolute; left: 42%; padding: 10px 10px; top: 60px;";
document.body.appendChild(buttonDiv);

const buttons = document.createElement("button");
buttons.textContent = "Change Grid Size";
buttons.style.cssText = "color: #2de35e; background-color: black; border: none; padding: 10px 40px;\
border-radius: 20px; font-weight: bold;"
buttonDiv.appendChild(buttons);

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

let input = 16;

buttons.addEventListener("click", newInput);

function newInput() {
    let inputNew = prompt("Change grid size (1-100):");
    inputNew = parseInt(inputNew);
        input = inputNew;
        gridCreate(input);
}

function gridCreate(size) {
    container.innerHTML = ""; 
    let cellSize = Math.floor(960 / size) - 2; 

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.style.cssText = `
            width: ${cellSize}px;
            height: ${cellSize}px;
            border: 1px solid black;
            box-sizing: border-box;
        `;
        gridItem.addEventListener("mouseover", changeColor);
        container.appendChild(gridItem);
    }
}

gridCreate(16);
