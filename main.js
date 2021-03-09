

const gridContainer = document.getElementById('grid-container')
const changeSizeBtn = document.getElementById('change-size')
const gridItems = document.getElementsByClassName('grid-item')
const changeColorBtns = document.querySelectorAll('.change-color')
const resetBtn = document.getElementById('reset')
const colorChangerInput = document.getElementById('color-changer-input')
const colorChangerBtn = document.getElementById('color-changer-button')
const currentColorDescription = document.getElementById('current-color-description')
const rangeSlider = document.getElementById('range-slider')
const sizeLabel = document.getElementById('size-label')
const toggleBorders = document.getElementById('toggle-borders')
// const gridItemNodes = document.querySelectorAll('.grid-item')

window.addEventListener('load', () =>
{
  createGridItems(3)
  drawOnGrid(gridItems, 'blue')
  gridItems[0].style.backgroundColor = 'red'
})





function createGridItems(size)
{
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  for (let i = 0; i < (size * size); i++)
  {
    const div = document.createElement('div')
    div.classList.add('grid-item', 'grid-item-border')
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
  // bug if they dont enter a number at all!
  let size = Number(prompt('please enter a desired grid size'))
  // console.log(size);
  if (size === 0)
  {
    alert('must enter a grid size')
    return
  }
  if (size >= 65)
  {
    alert('Grid cannot be larger than 64 x 64')
    return
  }
  // clear out the current nodes in the grid container and create a new grid of the requested size. Also, call drawOnGrid so we can draw on the current grid we have
  removeAllChildNodes(gridContainer)
  createGridItems(size)
  drawOnGrid(gridItems, 'blue')
  currentColorDescription.textContent = 'PICK A COLOR!'
  currentColorDescription.style.cssText = `
  background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px linear-gradient(red, yellow, green) solid`
  // border not working
}


changeSizeBtn.addEventListener('click', getGridSize)












// how we change color with the click of a button

// not using this though!

changeColorBtns.forEach((button) => button.addEventListener('click', () =>
{
  // every time we click a color button, we wanna call drawOnGrid with the color we just selected
  const color = button.textContent.toLowerCase();
  drawOnGrid(gridItems, color)
}))


function colorGridItem(item, color)
{
  item.className = `grid-item ${color}`
}

//end how we change color with the click of a button




// how we change color with the input value

// check for valid color

function isColor(strColor)
{
  let s = new Option().style;
  s.color = strColor
  console.log(s.color == strColor)
  return s.color == strColor
}

// clear color out of paragraph pop up
function clearCurrentColor()
{
  setTimeout(() =>
  {
    colorChangerInput.value = ''
    console.log('done');
  }, 1000);
}


// this gets the color we typed in, and calls drawOnGrid with the current color
function getTypedInColor()
{
  const color = colorChangerInput.value.toLowerCase()
  clearCurrentColor()
  if (!isColor(color))
  {
    alert('That\'s not a valid color')
    return
  }
  currentColorDescription.textContent = `You are coloring in ${color}!`
  currentColorDescription.style.cssText = `color : ${color}; border: 4px ${color} solid`
  drawOnGrid(gridItems, color)
}


colorChangerBtn.addEventListener('click', () =>
{
  getTypedInColor()
})

//end how we change color with the input value




function drawOnGrid(gridItems, color)   //something not right about this function
{
  //taking the current HTML collection of grid items, making in array out of it. Giving each grid item the ability to be moused over...and have that colors classlist added to it
  Array.from(gridItems).forEach((item, idx) => item.addEventListener('mouseover', () =>
  {
    // colorGridItem(item, color)
    item.style.backgroundColor = `${color}`
  }))
}








// playing w opactiy





rangeSlider.addEventListener('change', () =>
{
  sizeLabel.textContent = `Grid Items Opacity : ${rangeSlider.value}`
  Array.from(gridItems).forEach((item, idx) =>
  {
    item.style.opacity = `${rangeSlider.value}`
    console.log(item.style.opacity);
  })
})





// toggle borders


toggleBorders.addEventListener('click', () =>
{
  Array.from(gridItems).forEach((item, idx) =>
  {
    // item.style.border = 'none'
    // gridContainer.style.border = '2px black solid'
    item.classList.toggle('grid-item-border')
  })
})







// colors all grid items white (resets the grid)

function clearGrid(gridItems)
{
  // console.log('clicked');
  rangeSlider.value = 1
  sizeLabel.textContent = `Grid Items Opacity : ${rangeSlider.value}`
  // removes all the possible color classes associated w a grid item
  for (let i = 0; i < gridItems.length; i++)
  {
    gridItems[i].style.backgroundColor = 'white'
    gridItems[i].style.cssText = 'backgroundColor : white; opacity : 1'
  }
}

resetBtn.addEventListener('click', () => { clearGrid(gridItems) })
// resetBtn.addEventListener('click', clearGrid(gridItems))
