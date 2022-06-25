const btns = document.querySelectorAll("button")
const text = document.querySelector(".num")

console.log(btns);
let num = 0
btns.forEach(btn => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase")) {
      num++
      text.textContent = num
    }
    else if (btn.classList.contains("prev")) {
      num--
      text.textContent = num
    } else {
      num = 0
      text.textContent = num
    }
  })

});