
let seconds = 00;
let tens = 00;
let min = 00;
let hours = 00;
const appendTens = document.querySelector(".min-sec")
const appendSeconds = document.querySelector(".sec")
const appendMin = document.querySelector(".min")
const appendHours = document.querySelector(".hours")
const buttonStart = document.querySelector('.start');
const buttonStop = document.querySelector('.stop');
const buttonReset = document.querySelector('.reset');
let Interval;
let interval;

buttonStart.addEventListener('click', function () {
  clearInterval(interval)
  interval = setInterval(startTimer, 10)
})
buttonStop.addEventListener('click', function () {
  clearInterval(interval)
})

buttonReset.addEventListener("click", function () {
  tens = 00
  seconds = 00
  hours = 00
  min = 00
  clearInterval(interval)
  appendSeconds.innerHTML = '00'
  appendTens.innerHTML = '00'
  appendHours.innerHTML = '00'
  appendMin.innerHTML = '00'

})

function startTimer() {
  tens++

  appendTens.innerHTML = numTo(tens)

  if (tens > 99) {
    seconds++
    tens = 00
    appendSeconds.innerHTML = numTo(seconds)
  }

  if (seconds > 59) {
    min++
    seconds = 00
    appendMin.innerHTML = numTo(min)
  }

  if (min > 59) {
    hours++
    min = 00
    appendHours.innerHTML = numTo(hours)
  }
}

function numTo(num) {
  if (num <= 9) {
    return ("0" + num)
  } else {
    return num
  }
}

// buttonStart.onclick = function () {

//   clearInterval(Interval);
//   Interval = setInterval(startTimer, 10);
// }