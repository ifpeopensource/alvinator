import decisions from './decisions.js'

var infCount = 0

let infoButton = document.getElementById('infoButton')
let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

function infoButtonArea() {
    infCount++
    if (infCount%2 != 0) {
        var infoButtonArea = document.createElement("div")
        body.appendChild(infoButtonArea)
        infoButtonArea.setAttribute("id", "infoButtonAreaOn")
        console.log("test")    
    }
    else {
        infoButtonArea.removeAttribute("id")
        infoButtonArea.setAttribute("id", "infoButtonAreaOff")
    }
    //TODO Styles and animations
}

inputCalculate.addEventListener("click", decisions)
infoButton.addEventListener("click", infoButtonArea)

