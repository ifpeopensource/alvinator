var InputContainer = document.querySelector("section#addedMeasures")
var AddInputButton = document.querySelector("button#addButton")
function addInputContainer() {
    InputContainer.removeChild(AddInputButton) // Apagar o botão
    // Mudar o design de adicionar medidas
    InputContainer.appendChild(AddInputButton) //  Colocar obotão novamente
}