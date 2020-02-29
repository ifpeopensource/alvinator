import decisions from './decisions.js'

let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

let infoButtonAlternate = 0 
let infoButton = document.getElementById('infoButton')
let infoButtonArea = document.getElementsByClassName('infoButtonArea')

function infoButtonAreaDisplay() {
    infoButtonAlternate++
    if (infoButtonAlternate % 2 != 0) {
        infoButtonArea[0].setAttribute("id", "infoButtonAreaOn")
        console.log("infoButtonOn")
    } if (infoButtonAlternate%2 == 0) {
        infoButtonArea[0].setAttribute("id", "infoButtonAreaOff")
        console.log("infoButtonOff")
    }
}
inputCalculate.addEventListener("click", decisions)
infoButton.addEventListener("click", infoButtonAreaDisplay)