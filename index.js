const btnNot = document.querySelector("#nao")
const btnYes = document.querySelector("#sim")
const span = document.querySelector("#recado")
const random = (min = 0, max = 1) => Math.round(Math.random() * (max - min) + min)
const x = window.innerWidth
const y = window.innerHeight


function moveElement() {
    btnNot.style.position = "absolute"
    btnNot.style.left = random((x / 4), (x * 0.75)) + "px"
    btnNot.style.top = random((y / 4), (y * 0.75)) + "px"
}

function showMessage(text) {
    span.innerText = text;
    span.style.display = "block";
}

btnNot.addEventListener("mouseover", moveElement)
btnYes.addEventListener("click", () => { showMessage("Idiota!") })
btnNot.addEventListener("click", () => { showMessage("Inteligente demais!") })

span.style.display = "none"