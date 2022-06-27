const btns = document.querySelectorAll("button")
const text = document.querySelector(".num")

console.log(btns);
let num = 0
btns.forEach(btn => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase")) {
      num++
      text.textContent = num
      console.log(num);
    }
    else if (btn.classList.contains("prev")) {
      num--
      text.textContent = num
      console.log(num);
    } else {
      num = 0
      text.textContent = num
    }
  })

});

function numColor(num) {
  if (num > 0) {
    text.style.color = "green"
    // console.log();
  } else if (num < 0) {
    text.style.color = "red"
  }

}