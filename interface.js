let InputContainer = document.querySelector("section#addedMeasures")
let measureTypes = [
    "a",
    "b",
    "c",
    "p1",
    "p2",
    "h",
    "A",
    "2p",
]

function addMeasureTypes() {
    var measureTypesTag = document.getElementsByClassName("measureTypes")
    for (let type in measureTypes) {
        
        var typeList = document.createElement('option')
        typeList.innerHTML = type
        
        document.body.measureTypesTag.appendChild(typeList)

        console.log(type)
    }
}