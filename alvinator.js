// All the functions works as equations that we use in the problem solving with right triangles
// Probably (I can't predict the future), in most cases, each function represents one equation, but sometimes a function is just another form of that same equation
// Let's go!

// NORMAL PYTHAGORAS
function pitag(a, b, c) {
    // a**2 = b**2 + c**2 --> The pythagoream theorem
    
    if (a == 0 && b > 0 && c > 0) { // Those first-level "if's" recognize the input of the user
        var aSolved = Math.sqrt(b ** 2 + c ** 2) // Math for finding the value of this variable with pythagorean theorem

        if (aSolved > 0) { // For positive values only (hehe it's geometry)
            return aSolved
        }
        if (aSolved == 0) { // If the value is 0, that triangle doesn't exist
            return `O resultado foi ${aSolved}! Jovem, isto está altamente errado!`
        }
        if ((b ** 2 + c ** 2) < 0) { // In case of the value being negative
            return `O resultado foi ${b ** 2 + c ** 2}! Jovem, isto está altamente errado!`
        } // The subsequent functions work on the same way
    } if (a > 0 && b == 0 && c > 0) { 
        var bSolved = Math.sqrt(a ** 2 - c ** 2)

        if (bSolved > 0) {
            return bSolved
        } 
        if (bSolved == 0) {
            return `O resultado foi ${bSolved}! Jovem, isto está altamente errado!`
        } 
        if ((a ** 2 - c ** 2) < 0) {
            return `O resultado foi ${a ** 2 - c ** 2}! Jovem, isto está altamente errado!`
        }    
    } if (a > 0 && b > 0 && c == 0) { 
        var cSolved = Math.sqrt(a ** 2 - b ** 2)

        if (cSolved > 0) {
            return cSolved
        }
        if (cSolved == 0) {
            return `O resultado foi ${cSolved}, Jovem, isto está altamente errado!`
        }
        if ((a ** 2 - b ** 2) < 0) {
            return `O resultado foi ${a ** 2 - b ** 2}, Jovem, isto está altamente errado!`
        }
    } if ((a == 0 && b == 0) || (b == 0 && c == 0) || (a == 0 && c == 0) || (a == 0 && b == 0 && c == 0)) { // This one identifies if it has just one input
        return 'PENSE JOVEM! Dados insuficientes'
    }
}
console.log(pitag(2,0,0))