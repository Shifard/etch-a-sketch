const container = document.querySelector('#container');
container.style.cssText = `width:960px; height:960px; 
                          border: 1px solid black; display: flex; 
                          flex-wrap: wrap; margin: auto;`
let count = 16;
let size = 960;
const gridBtn = document.querySelector('#grid-change');
let bgColor = `black`;

gridBtn.addEventListener('click', ()=> {
  count = +(prompt('Enter a grid: (max 100)'));
  if (count > 100 || count < 0 || !Number.isInteger(count)) {
    alert('ERROR');
  } else {
  container.textContent = '';
  changeGrid(count)
  }
});

const color = document.querySelector('#color');
const colorBtn = document.querySelector('#color-change');

colorBtn.addEventListener('click', () => {
  alert('Color Changed!')
  bgColor = color.value;
})


function changeGrid(count) {
for(let i = 0; i < count**2; i++){
  let divs = document.createElement('div');
  divs.style.cssText = `border: 1px solid black; 
  width: ${size/count - 2}px; height: ${size/count -2}px;`
  container.appendChild(divs);
  divs.addEventListener('mouseover', ()=> {
    divs.style.background = `${bgColor}`;
  })
}
}
changeGrid(count);

