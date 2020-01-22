const input   = document.getElementById("message")
const eleBlue = document.getElementById("out1")
const eleRed  = document.getElementById("out2")

input.addEventListener("keyup", function (event) {
    eleBlue.textContent = event.target.value
    eleRed.textContent  = event.target.value
})