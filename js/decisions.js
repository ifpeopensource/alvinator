import pitag from './mathFunctions.js'

let selectMeasure1 = document.getElementById("measureTypes1")
let selectMeasure2 = document.getElementById("measureTypes2")
let inputMeasure1 = document.getElementById("inputMeasure1")
let inputMeasure2 = document.getElementById("inputMeasure2")


var measureType1 = ""
var measureType2 = ""

var results = {
    a: 0,
    b: 0,
    c: 0,
    p1: 0,
    p2: 0,
    h: 0,
    area: 0,
    per: 0,
}


export default function decisions() {
    
    function identifySelect() { //A function to transform index of the select measure into more human-friendly variables

        switch (selectMeasure1.selectedIndex) {
            case 0:
                measureType1 = "a"
                break
            case 1:
                measureType1 = "b"
                break
            case 2:
                measureType1 = "c"
                break
            case 3:
                measureType1 = "p1"
                break
            case 4:
                measureType1 = "p2"
                break
            case 5:
                measureType1 = "h"
                break
            case 6:
                measureType1 = "A"
                break
            case 7:
                measureType1 = "2p"
                break
            default:
                alert("Erro! Existe algo de errado jovem!")
        }

        switch (selectMeasure2.selectedIndex) {
            case 0:
                measureType2 = "a"
                break
            case 1:
                measureType2 = "b"
                break
            case 2:
                measureType2 = "c"
                break
            case 3:
                measureType2 = "p1"
                break
            case 4:
                measureType2 = "p2"
                break
            case 5:
                measureType2 = "h"
                break
            case 6:
                measureType2 = "A"
                break
            case 7:
                measureType2 = "2p"
                break
            default:
                window.alert("Erro! Existe algo de errado jovem!")
        }
        console.log(measureType1, measureType2)
    }
    function mainDecisions() {
        identifySelect() 
        let measure1 = Number(inputMeasure1.value)
        let measure2 = Number(inputMeasure2.value)

        if ((measureType1 == measureType2) || (measure1 == 0 || measure2 == 0)) { // Checagem inicial dos dados
            window.alert("Coloque algo direito nesta merda jovem!")
        }
        else { // Sorry for so many "if's", unfortunately, it's not an AI ;-;
        //Normal Pythagoras block (a,b,c)
            if (measureType1 == "b" && measureType2 == "c") {
                results.a = pitag(0, measure1, measure2)
                results.per =results.a + measure1 + measure2

                console.log(a)
            } else if (measureType1 == "c" && measureType2 == "b") {
                results.a = pitag(0, measure2, measure1)
                results.per = results.a + measure1 + measure2

                console.log(results)
            }
            
            if (measureType1 == "a" && measureType2 == "b") {
                results.c = pitag(measure1, measure2, 0)
                results.per = results.c + measure1 + measure2

                console.log(results)
            } else if (measureType1 == "b" && measureType2 == "a") {
                results.c = pitag(measure2, measure1, 0)
                results.per = results.c + measure1 + measure2

                console.log(results)
            }

            if (measureType1 == "a" && measureType2 == "c") {
                results.b = pitag(measure1, 0, measure2)
                results.per = results.b + measure1 + measure2
                console.log(results)
            } else if (measureType1 == "c" && measureType2 == "a") {
                results.b = pitag(measure2, 0, measure1)
                results.per = results.b + measure1 + measure2
                console.log(results)
            }
        }
    }
    mainDecisions()
}