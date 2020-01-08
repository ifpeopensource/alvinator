function pitag(a, b, c) {
    // a**2 = b**2 + c**2 --> The pythagoream theorem
    
    if (a == 0 && b > 0 && c > 0) {
        var aSolved = Math.sqrt(b ** 2 + c ** 2)

        if (aSolved > 0) {
            return aSolved
        }
        if (aSolved == 0) {
            return `O resultado foi ${aSolved}! Jovem, isto está altamente errado!`
        }
        if ((b ** 2 + c ** 2) < 0) {
            return `O resultado foi ${b ** 2 + c ** 2}! Jovem, isto está altamente errado!`
        }
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
    } if ((a == 0 && b == 0) || (b == 0 && c == 0) || (a == 0 && c == 0)) {
        return 'Para descobrir um terceiro valor do triângulo, devemos ter pelo menos 2 valores'
    }
}
console.log(pitag(2,0,0))
