let tilesWrapper = document.getElementById('tiles-wrapper')

let columns = Math.floor(tilesWrapper.clientWidth / 50)
let rows = Math.floor(tilesWrapper.clientHeight / 50)

const colors = [
  '#ffd000',
  '#bc2a6c',
  '#374BFE',
  '#2abc82',
  '#9f47e3',
  '#2AB6BC'
]

let countClicks = -1
const animateGrid = index => {
  countClicks += 1

  anime({
    targets: '.tile',
    backgroundColor: colors[countClicks % (colors.length)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  })

}

const createTile = index => {
  const tile = document.createElement("div")
  tile.classList.add("tile")
  return tile
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    tilesWrapper.appendChild(createTile(index))
  })
}

const createGrid = () => {
  tilesWrapper.innerHTML = ''
  columns = Math.floor(tilesWrapper.clientWidth / 50)
  rows = Math.floor(tilesWrapper.clientHeight / 50)

  tilesWrapper.style.setProperty('--columns', columns)
  tilesWrapper.style.setProperty('--rows', rows)

  createTiles(columns * rows)
}

window.onresize = () => createGrid()
createGrid()

const animateOnInterval = () => {
  const randomIndex = Math.floor(Math.random() * rows * columns)
  animateGrid(randomIndex)

  setTimeout(animateOnInterval, 5000)
}

animateOnInterval()