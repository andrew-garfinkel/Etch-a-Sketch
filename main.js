

const gridContainer = document.getElementById('grid-container')
const changeSizeBtn = document.getElementById('change-size')
const gridItems = document.getElementsByClassName('grid-item')
const changeColorBtns = document.querySelectorAll('.change-color')
const resetBtn = document.getElementById('reset')

window.addEventListener('load', () =>
{
  createGridItems(16)
  drawOnGrid(gridItems, 'blue')
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
  if (size >= 65)
  {
    alert('Grid cannot be larger than 64 x 64')
    return
  }
  console.log(size);
  removeAllChildNodes(gridContainer)
  createGridItems(size)
  drawOnGrid(gridItems, 'blue')
}


changeSizeBtn.addEventListener('click', getGridSize)












changeColorBtns.forEach((button) => button.addEventListener('click', () =>
{
  const color = button.textContent.toLowerCase();
  console.log(color);
  drawOnGrid(gridItems, color)
}))


function colorGridItem(item, color)
{
  item.className = `grid-item ${color}`
}

function drawOnGrid(gridItems, color)   //something not right about this function
{
  Array.from(gridItems).forEach((item) => item.addEventListener('mouseover', () =>
  {
    colorGridItem(item, color)
    // item.style.backgroundColor = 'yellow'
  }))
}


function clearGrid(gridItems)
{
  for (let i = 0; i < gridItems.length; i++)
  {
    gridItems[i].className = 'grid-item'
  }
}

resetBtn.addEventListener('click', () => { clearGrid(gridItems) })
// resetBtn.addEventListener('click', clearGrid(gridItems))
