let selectMeasure1 = document.getElementById("measureTypes1")
let selectMeasure2 = document.getElementById("measureTypes2")

function identifySelect() { //A function to transform index of teh select box into more human-friendly variables
    switch (selectMeasure1.selectedIndex) {
        case 0:
            let measure1 = "a"
            break
        case 1:
            let mesuare1 = "b"
            break
        case 2:
            let measure1 = "c"
        case 3:
            let measure1 = "p1"
            break
    }

}