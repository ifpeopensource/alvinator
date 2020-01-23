let selectMeasure1 = document.getElementById("measureTypes1")
let selectMeasure2 = document.getElementById("measureTypes2")

function identifySelect() { //A function to transform index of teh select box into more human-friendly variables
    let measure1 = ""
    let measure2 = ""

    switch (selectMeasure1.selectedIndex) {
        case 0:
            measure1 = "a"
            break
        case 1:
            measure1 = "b"
            break
        case 2:
            measure1 = "c"
            break
        case 3:
            measure1 = "p1"
            break
        case 4:
            measure1 = "p2"
            break
        case 5:
            measure1 = "h"
            break
        case 6:
            measure1 = "A"
            break 
        case 7:
            measure1 = "2p"
    }

    switch (selectMeasure2.selectedIndex) {
        case 0:
            measure2 = "a"
            break
        case 1:
            measure2 = "b"
            break
        case 2:
            measure2 = "c"
            break
        case 3:
            measure2 = "p1"
            break
        case 4:
            measure2 = "p2"
            break
        case 5:
            measure2 = "h"
            break
        case 6:
            measure2 = "A"
            break 
        case 7:
            measure2 = "2p"
    }
    console.log(measure1,measure2)

}