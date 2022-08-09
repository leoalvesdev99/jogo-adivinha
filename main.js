//Variáveis

const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener("keydown", function(e) {
    if(e.key == 'Enter') {
        handleAgainClick()
    }
})

//Função callback
function handleTryClick (event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText =  (`Você acertou em ${xAttempts} tentativas`)
}
    inputNumber.value = ""

    xAttempts++
}

function handleAgainClick (){
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

