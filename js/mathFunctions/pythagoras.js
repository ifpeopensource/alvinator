export default function pythagoras(b, c, a) {
    // a**2 = b**2 + c**2 --> The pythagoream theorem
    
    if (a == 0 && b > 0 && c > 0) { // Those first-level "if's" recognize the input of the user
        var aSolved = Math.sqrt(b ** 2 + c ** 2) // Math for finding the value of this variable with pythagorean theorem

        if (aSolved == 0 || aSolved == 'undefined') { // If the value is 0, that triangle doesn't exist
            return `${aSolved}! Jovem, isto está altamente errado!`
        }
        if ((b ** 2 + c ** 2) < 0) { // In case of the value being negative
            return `${b ** 2 + c ** 2}! Jovem, isto está altamente errado!`
        } // The subsequent "if's" work in the same way
        if (aSolved > 0) { // For positive values only (hehe it's geometry)
            return aSolved
        }
    } if (a > 0 && b == 0 && c > 0) { 
        var bSolved = Math.sqrt(a ** 2 - c ** 2)

        if (bSolved == 0 || bSolved == 'undefined') {
            return `${bSolved}! Jovem, isto está altamente errado!`
        } 
        if ((a ** 2 - c ** 2) < 0) {
            return `${a ** 2 - c ** 2}! Jovem, isto está altamente errado!`
        }    
        if (bSolved > 0) {
            return bSolved
        } 
    } if (a > 0 && b > 0 && c == 0) { 
        var cSolved = Math.sqrt(a ** 2 - b ** 2)

        if (cSolved == 0 || cSolved == 'undefined') {
            return `${cSolved}! Jovem, isto está altamente errado!`
        }
        if ((a ** 2 - b ** 2) < 0) {
            return `${a ** 2 - b ** 2}! Jovem, isto está altamente errado!`
        }
        if (cSolved > 0) {
            return cSolved
        }
    }
}
