const from = document.querySelector("#from")

from.addEventListener("submit", function (e) {
  e.preventDefault()
  const textInput = document.querySelector(".text")
  const message = document.querySelector(".message")
  const inputError = document.querySelector(".error")
  console.log(textInput.value);
  if (textInput.value == '') {
    inputError.classList.add("show")
  } else {
    message.textContent = textInput.value
    inputError.classList.remove("show")
    textInput.value = ''

  }
})