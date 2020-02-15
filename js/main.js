import decisions from './decisions.js'

let infoButton = document.getElementById('infoButton')
let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

function main() {
    decisions()
}

function infoButtonArea() {
    var infoButtonArea = document.createElement("div")
    body.appendChild(infoButtonArea)
    infoButtonArea.setAttribute("id", "infoButtonArea")
    console.log("test")
    console.log("test")
    //infoButtonArea.style.padding = "20px"
    //infoButtonArea.style.backgroundColor = "white"
    //TODO Styles and animations
}

inputCalculate.addEventListener("click", main)
infoButton.addEventListener("click", infoButtonArea)
