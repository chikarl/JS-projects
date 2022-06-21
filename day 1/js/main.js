const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let btn = document.querySelector(".btn")
let container = document.querySelector(".container")
let color = document.querySelector(".color")

btn.addEventListener("click", function () {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getColor()]

  }

  container.style.backgroundColor = hexColor;
  color.innerHTML = hexColor
})

function getColor() {
  return Math.floor(Math.random() * 16)
}