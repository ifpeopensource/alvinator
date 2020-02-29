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

let results = {
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

    function identifySelect() { //A function to transform index of the select measure into more human-friendly properties and stores it's values

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
            if ((measureType1 == "p1" && measureType2 == "p2") || (measureType1 == "p2" && measureType2 == "p1")) {
                results.a = results.p1 + results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "p1") || (measureType1 == "p1" && measureType2 == "a")) {
                results.p2 = results.a - results.p1
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "p2") || (measureType1 == "p2" && measureType2 == "a")) {
                results.p1 = results.a - results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.h = quadraticHeight(results.p1, results.p2, 0)
            }
            // Normal height and projections (p1, p2, h possible combinations)
            if ((measureType1 == "h" && measureType2 == "p1") || (measureType1 == "p1" && measureType2 == "h")) {
                results.p2 = quadraticHeight(results.p1, 0, results.h)
                results.a = results.p1 + results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
            } if ((measureType1 == "h" && measureType2 == "p2") || (measureType1 == "p2" && measureType2 == "h")) {
                results.p1 = quadraticHeight(0, results.p2, results.h)
                results.a = results.p1 + results.p2
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = quadraticLeg(results.p1, results.a, 0)
            }
            // a + all options possible combinations
            if ((measureType1 == "a" && measureType2 == "p1") || (measureType1 == "p1" && measureType2 == "a")) {
                results.b = quadraticLeg(results.p1, results.a, 0)
                results.c = pythagoras(results.a, results.b, 0)
                results.p2 = results.a - results.p1
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "p2") || (measureType1 == "p2" && measureType2 == "a")) {
                results.c = quadraticLeg(results.p2, results.a, 0)
                results.b = pythagoras(results.a, 0, results.c)
                results.p1 = results.a - results.p2
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "a" && measureType2 == "h") || (measureType1 == "h" && measureType2 == "a")) {
                results.area = area(results.a, results.h, 0)
                window.alert(`Jovem, ainda não sabemos a resposta completa para essa questão... Só obtivemos a área: ${results.area}. (ERRO a/h)`) // TODO: Mensagens de erro e sugestões de resposta
                return ''
            } if ((measureType1 == "a" && measureType2 == "area") || (measureType1 == "area" && measureType2 == "a")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO a/area)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            } if ((measureType1 == "a" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "a")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO a/per)") // TODO: Mensagens de erro e sugestões de resposta e valores achados
                return ''
            }
            // b + all options possible combinations
            if ((measureType1 == "b" && measureType2 == "p1") || (measureType1 == "p1" && measureType2 == "b")) {
                // p1 can be a leg and b a hypotenuse
                results.h = pythagoras(results.p1, 0, results.b)
                results.p2 = quadraticHeight(results.p1, 0, results.h)
                results.a = results.p1 + results.p2
                results.c = pythagoras(results.b, 0, results.a)
            } if ((measureType1 == "b" && measureType2 == "p2") || (measureType1 == "p2" && measureType2 == "b")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO b/p2)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
            } if ((measureType1 == "b" && measureType2 == "h") || (measureType1 == "h" && measureType2 == "b")) {
                results.p1 = pythagoras(results.h, 0, results.b)
                results.a = quadraticLeg(results.p1, 0, results.b)
                results.c = pythagoras(results.b, 0, results.a)
                results.p2 = results.a - results.p1
            } if ((measureType1 == "b" && measureType2 == "area") || (measureType1 == "area" && measureType2 == "b")) {
                results.c = area(results.b, 0, results.area)
                results.a = pythagoras(results.b, results.c, 0)
                results.p1 = quadraticLeg(0, results.a, results.b)
                results.p2 = results.a - results.p1
                results.per = results.a + results.b + results.c
                return ''
            } if ((measureType1 == "b" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "b")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO b/per)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                //TODO TENTAR ACHAR RESPOSTA
            }
            // c + all options possible combinations
            if ((measureType1 == "c" && measureType2 == "p1") || (measureType1 == "p1" && measureType2 == "c")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO c/p1)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
            } if ((measureType1 == "c" && measureType2 == "p2") || (measureType1 == "p2" && measureType2 == "c")) {
                results.a = quadraticLeg(results.p2, 0, results.c)
                results.b = pythagoras(0, results.c, results.a)
                results.p1 = quadraticLeg(0, results.a, results.b)
                results.h = quadraticLeg(results.p1, results.p2, 0)
            } if ((measureType1 == "c" && measureType2 == "h") || (measureType1 == "h" && measureType2 == "c")) {
                results.p2 = pythagoras(results.h, 0, results.c)
                results.a = quadraticLeg(results.p2, 0, results.c)
                results.b = pythagoras(0, results.c, results.a)
                results.p1 = results.a - results.p2
            } if ((measureType1 == "c" && measureType2 == "area") || (measureType1 == "area" && measureType2 == "c")) {
                results.b = area(0, results.c, results.area)
                results.a = pythagoras(results.b, results.c, 0)
                results.p1 = quadraticLeg(0, results.a, results.c)
                results.p2 = results.a - results.p1
                results.h = quadraticHeight(results.p1, results.p2, 0)
            } if ((measureType1 == "c" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "c")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO c/per)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                //TODO TENTAR ACHAR RESPOSTA
                return ''
            }
            // p1 + all possible combinations
            if ((measureType1 == "p1" && measureType2 == "area") || (measureType1 == "area" && measureType2 == "p1")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO p1/area)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            } if ((measureType1 == "p1" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "p1")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO p1/per)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            } 
            // p2 + all possible combinations
            if ((measureType1 == "p2" && measureType2 == "area") || (measureType1 == "area" && measureType2 == "p2")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO p2/area)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            } if ((measureType1 == "p2" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "p2")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO p2/per)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            }
            // h + all possible combinations
            if ((measureType1 == "h" && measureType2 == "area") || (measureType1 == "area" && measureType2 == "h")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO h/area)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            } if ((measureType1 == "h" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "h")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO h/per)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            }
            // A + all possible combinations
            if ((measureType1 == "area" && measureType2 == "per") || (measureType1 == "per" && measureType2 == "area")) {
                window.alert("Jovem, ainda não sabemos a resposta para essa questão... (ERRO area/per)") // TODO: Mensagens de erro, sugestões de resposta e valores achados
                return ''
            }
            results.area = area(results.b, results.c, 0)
            results.per = results.a + results.b + results.c
            }
    }
    mainDecisions()
    //console.log(results)
    return results
}