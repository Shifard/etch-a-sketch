const title = document.querySelector("#title");
title.style.cssText = "color: red; text-align: center"


const container = document.querySelector("#container");
container.style.cssText = "width: 960px; display: flex; \
flex-wrap: wrap; max-width: fit-content; margin: auto;";

const grid = document.createElement('div');
grid.style.cssText = "height:54px; width:54px; border: 3px solid black"
const fragment = new DocumentFragment();

function changeColor (e) {
    e.target.style.backgroundColor = "black";
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const clone = grid.cloneNode(true);
        clone.addEventListener("mouseover", changeColor)
        fragment.appendChild(clone);
    }
}
container.appendChild(fragment);







