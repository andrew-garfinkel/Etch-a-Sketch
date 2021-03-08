

const gridContainer = document.getElementById('grid-container')
const changeSizeBtn = document.getElementById('change-size')
const gridItems = document.getElementsByClassName('grid-item')

window.addEventListener('load', () =>
{
  createGridItems(3)
  drawOnGrid(gridItems)
})


// const gridItemNodes = document.querySelectorAll('.grid-item')


function createGridItems(size)
{
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  for (let i = 0; i < (size * size); i++)
  {
    const div = document.createElement('div')
    div.classList.add('grid-item')
    gridContainer.appendChild(div)
  }
}



function removeAllChildNodes(parent)
{
  while (parent.firstChild)
  {
    parent.removeChild(parent.firstChild)
  }
}

function getGridSize()
{
  let size = Number(prompt('please enter a desired grid size'))
  // return size
  removeAllChildNodes(gridContainer)
  createGridItems(size)
  drawOnGrid(gridItems)
}


changeSizeBtn.addEventListener('click', getGridSize)

function drawOnGrid(gridItems)
{
  Array.from(gridItems).forEach((item, idx, array) => item.addEventListener('mouseover', () => { item.classList.add('red')}))
  console.log('hello');
}


// Array.from(gridItems).forEach((item, idx, array) => item.addEventListener('mouseover', () => {console.log(item, idx, array);}))