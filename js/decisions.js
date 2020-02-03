import pitag from './mathFunctions/pythagoras.js'
import area from './mathFunctions/area.js'

let selectMeasure1 = document.getElementById("measureTypes1")
let selectMeasure2 = document.getElementById("measureTypes2")
let inputMeasure1 = document.getElementById("inputMeasure1")
let inputMeasure2 = document.getElementById("inputMeasure2")


var measureType1 = ""
var measureType2 = ""

var results = {}


export default function decisions() {
    
    function identifySelect() { //A function to transform index of the select measure into more human-friendly variables

        switch (selectMeasure1.selectedIndex) {
            case 0:
                measureType1 = "a"
                results.a = Number(inputMeasure1.value)
                break
            case 1:
                measureType1 = "b"
                results.b = Number(inputMeasure1.value)
                break
            case 2:
                measureType1 = "c"
                results.c = Number(inputMeasure1.value)
                break
            case 3:
                measureType1 = "p1"
                results.p1 = Number(inputMeasure1.value) 
                break
            case 4:
                measureType1 = "p2"
                results.p2 = Number(inputMeasure1.value)
                break
            case 5:
                measureType1 = "h"
                results.h = Number(inputMeasure1.value)
                break
            case 6:
                measureType1 = "A"
                results.area = Number(inputMeasure1.value) 
                break
            case 7:
                measureType1 = "2p"
                results.per = Number(inputMeasure1.value)
                break
            default:
                window.alert("Erro! Existe algo de errado jovem!")
        }

        switch (selectMeasure2.selectedIndex) {
            case 0:
                measureType2 = "a"
                results.a = Number(inputMeasure2.value) 
                break
            case 1:
                measureType2 = "b"
                results.b = Number(inputMeasure2.value)
                break
            case 2:
                measureType2 = "c"
                results.c = Number(inputMeasure2.value)
                break
            case 3:
                measureType2 = "p1"
                results.p1 = Number(inputMeasure2.value)
                break
            case 4:
                measureType2 = "p2"
                results.p2 = Number(inputMeasure2.value) 
                break
            case 5:
                measureType2 = "h"
                results.h = Number(inputMeasure2.value)
                break
            case 6:
                measureType2 = "A"
                results.area = Number(inputMeasure2.value)
                break
            case 7:
                measureType2 = "2p"
                results.per = Number(inputMeasure2.value)
                break
            default:
                window.alert("Erro! Existe algo de errado jovem!")
        }
        console.log(measureType1, measureType2)
    }
    function mainDecisions() {
        identifySelect() 

        if ((measureType1 == measureType2) || (Number(inputMeasure1.value) == 0 || Number(inputMeasure1.value) == 0)) { // Checagem inicial dos dados
            window.alert("Coloque algo direito nesta merda jovem!")
        }
        else { // Sorry for so many "if's", unfortunately, it's not an AI ;-;
        //Normal Pythagoras block (a,b,c)
            if ((measureType1 == "b" && measureType2 == "c") || (measureType1 == "c" && measureType2 == "b")) {
                results.a = pitag(0, results.b, results.c)

            } if ((measureType1 == "a" && measureType2 == "b") || (measureType1 == "b" && measureType2 == "a")) {
                results.c = pitag(results.a, results.b, 0)

            } if ((measureType1 == "a" && measureType2 == "c") || (measureType1 == "c" && measureType2 == "a")) {
                results.b = pitag(results.a, 0, results.c)

            }

            results.per = results.a + results.b + results.c
            results.area = area(results.c, results.b)
            console.log(results)
        }
    }
    mainDecisions()
}