import decisions from './decisions.js'

let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

let resultsButtonAlternate = false
let resultsButton = document.getElementById('inputCalculate')
let resultsButtonArea = document.getElementsByClassName('results')

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

function resultsButtonDisplay() {
    resultsButtonAlternate = true
    if (resultsButtonAlternate == true) {
        resultsButtonArea[0].setAttribute("id", "resultsOn")
        let results = decisions()
        
    }

}

resultsButton.addEventListener("click", resultsButtonDisplay)
infoButton.addEventListener("click", infoButtonAreaDisplay)