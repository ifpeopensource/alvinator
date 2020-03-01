import decisions from './decisions.js'

let inputMeasure2 = document.getElementById("inputMeasure2")
let inputMeasure1 = document.getElementById("inputMeasure1")

let bigContainer = document.getElementById('bigContainer')
var body = document.getElementsByTagName("body")[0]

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
    let results = decisions()
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("c")
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let h = document.getElementById("h")
    let per = document.getElementById("per")
    let area = document.getElementById("area")

    a.innerHTML = "O valor da Hipotenusa (a) é: "
    b.innerHTML = "O valor do Cateto b é: "
    c.innerHTML = "O valor do Cateto c é: "
    p1.innerHTML = "O valor da projeção p1 é: "
    p2.innerHTML = "O valor da projeção p2 é: "
    h.innerHTML = "O valor da altura (h) é: "
    area.innerHTML = "O valor da área (A) é: " 
    per.innerHTML = "O valor do perímetro (2p) é: "
    console.log(results)
    if (results.click == true && results.per != 0) {
        resultsButtonArea[0].setAttribute("id", "resultsOn")
        a.innerHTML += `<span class = "important">${results.a}</span>`
        b.innerHTML += `<span class = "important">${results.b}</span>`
        c.innerHTML += `<span class = "important">${results.c}</span>`
        p1.innerHTML += `<span class = "important">${results.p1}</span>`
        p2.innerHTML += `<span class = "important">${results.p2}</span>`
        h.innerHTML += `<span class = "important">${results.h}</span>`
        per.innerHTML += `<span class = "important">${results.per}</span>`
        area.innerHTML += `<span class = "important">${results.area}</span>`    
    }

}

infoButton.addEventListener("click", infoButtonAreaDisplay)
resultsButton.addEventListener("click", resultsButtonDisplay)
inputMeasure2.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
    event.preventDefault();
    resultsButton.click();
    }
})
inputMeasure1.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
    event.preventDefault();
    resultsButton.click();
    }
})