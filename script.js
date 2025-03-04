const container = document.querySelector('#container');
container.style.cssText = "width:960px; height:960px; border: 1px solid black; display: flex; flex-wrap: wrap; margin: auto;"
let count = 16;
let size = 960;
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
  count = Number(prompt('Enter a grid: (max 100)', ''));
  container.textContent = '';
  grid(count)
})


function grid(count) {
for(let i = 0; i < count*count; i++){
  let divs = document.createElement('div');
  divs.style.cssText = `border: 1px solid black; width: ${size/count - 2}px; height: ${size/count -2}px;`
  container.appendChild(divs);
  divs.addEventListener('mouseover', ()=> {
    divs.style.background = 'black';
  })
}
}
grid(count)

