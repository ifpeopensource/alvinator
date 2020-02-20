import decisions from './decisions.js'


infoButtonArea.setAttribute("id", "infoButtonArea")

var i = 0

let infoButton = document.getElementById('infoButton')
let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

function test() {
    i++
}

function infoButtonAreaOn() {
    if (i % 2 != 0) {
        var infoButtonArea = document.createElement("div")
        body.appendChild(infoButtonArea)
        console.log("true")
    } if (i%2 == 0) {
        document.getElementById("infoButtonArea").remove()
        console.log("false")
    }
    //TODO Styles and animations
}
inputCalculate.addEventListener("click", decisions)
infoButton.addEventListener("click", infoButtonAreaOn, test)
