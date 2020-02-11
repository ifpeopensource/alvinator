import pythagoras from './mathFunctions/pythagoras.js'
import area from './mathFunctions/area.js'
import quadraticLeg from './mathFunctions/quadraticLeg.js'
import quadraticHeight from './mathFunctions/quadraticHeight.js'


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
            // Starting on index "1" because there's one disabled option before
            case 1:
                measureType1 = "a"
                results.a = Number(inputMeasure1.value)
                break
            case 2:
                measureType1 = "b"
                results.b = Number(inputMeasure1.value)
                break
            case 3:
                measureType1 = "c"
                results.c = Number(inputMeasure1.value)
                break
            case 4:
                measureType1 = "p1"
                results.p1 = Number(inputMeasure1.value)
                break
            case 5:
                measureType1 = "p2"
                results.p2 = Number(inputMeasure1.value)
                break
            case 6:
                measureType1 = "h"
                results.h = Number(inputMeasure1.value)
                break
            case 7:
                measureType1 = "area"
                results.area = Number(inputMeasure1.value)
                break
            case 8:
                measureType1 = "per"
                results.per = Number(inputMeasure1.value)
                break
            default:
                window.alert("Erro! Existe algo de errado jovem!")
        }

        switch (selectMeasure2.selectedIndex) {
            case 1:
                measureType2 = "a"
                results.a = Number(inputMeasure2.value)
                break
            case 2:
                measureType2 = "b"
                results.b = Number(inputMeasure2.value)
                break
            case 3:
                measureType2 = "c"
                results.c = Number(inputMeasure2.value)
                break
            case 4:
                measureType2 = "p1"
                results.p1 = Number(inputMeasure2.value)
                break
            case 5:
                measureType2 = "p2"
                results.p2 = Number(inputMeasure2.value)
                break
            case 6:
                measureType2 = "h"
                results.h = Number(inputMeasure2.value)
                break
            case 7:
                measureType2 = "area"
                results.area = Number(inputMeasure2.value)
                break
            case 8:
                measureType2 = "per"
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

            //Normal Pythagoras block (a,b,c possible combinations)
            if ((measureType1 == "b" && measureType2 == "c") || (measureType1 == "c" && measureType2 == "b")) {
                results.a = pythagoras(0, results.b, results.c)
                results.p1 = quadraticLeg(0, results.a, results.c)
                results.p2 = quadraticLeg(0, results.a, results.b)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "b") || (measureType1 == "b" && measureType2 == "a")) {
                results.c = pythagoras(results.a, results.b, 0)
                results.p1 = quadraticLeg(0, results.a, results.c)
                results.p2 = quadraticLeg(0, results.a, results.b)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "c") || (measureType1 == "c" && measureType2 == "a")) {
                results.b = pythagoras(results.a, 0, results.c)
                results.p1 = quadraticLeg(0, results.a, results.c)
                results.p2 = quadraticLeg(0, results.a, results.b)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            }
            // Normal hypotenuse and projections (p1, p2, a possible combinations)
            if ((measureType1 == "p1" && measureType2 == "p2") || (measureType1 == "p2" & measureType2 == "p1")) {
                results.a = results.p1 + results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.h = quadraticHeight(results.p1, results.p2, 0).area = area(results.c, results.b, 0)
            } if ((measureType1 == "a" && measureType2 == "p1") || (measureType1 == "p1" & measureType2 == "a")) {
                results.p2 = results.a - results.p1
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.h = quadraticHeight(results.p1, results.p2, 0).area = area(results.c, results.b, 0)
            } if ((measureType1 == "a" && measureType2 == "p2") || (measureType1 == "p2" & measureType2 == "a")) {
                results.p1 = results.a - results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            }
            // Normal height and projections (p1, p2, h possible combinations)
            if ((measureType1 == "h" && measureType2 == "p1") || (measureType1 == "p1" & measureType2 == "h")) {
                results.p2 = quadraticHeight(results.p1, 0, results.h)
                results.a = results.p1 + results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
            } if ((measureType1 == "h" && measureType2 == "p2") || (measureType1 == "p2" & measureType2 == "h")) {
                results.p1 = quadraticHeight(0, results.p2, results.h)
                results.a = results.p1 + results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
            }
            // a + all options possible combinations
            if ((measureType1 == "a" && measureType2 == "p1") || (measureType1 == "p1" & measureType2 == "a")) {
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.c = pythagoras(results.a, results.b, 0)
                results.p2 = results.a - results.p1
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "p2") || (measureType1 == "p2" & measureType2 == "a")) {
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = pythagoras(results.a, 0, results.c)
                results.p1 = results.a - results.p2
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "h") || (measureType1 == "h" & measureType2 == "a")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO a/h)")
            }


            results.area = area(results.b, results.c, 0)
            results.per = results.a + results.b + results.c
            console.log(results)
        }
    }
    mainDecisions()
}