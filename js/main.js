import decisions from './decisions.js'

let infoButton = document.getElementById('infoButton')
let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

function infoButtonArea() {
    var infoButtonArea = document.createElement("div")
    body.appendChild(infoButtonArea)
    infoButtonArea.setAttribute("id", "infoButtonArea")
    console.log("test")
    //TODO Styles and animations
}

inputCalculate.addEventListener("click", decisions)
infoButton.addEventListener("click", infoButtonArea)

