export default function quadraticLeg (p, a, c) { // Function to calculate the Leg of a right triangle and others values (hypotenuse, projections)
    // Leg of an right triangle: b² = p1 * a  OR
    //                           c² = p2 * a
    if (p > 0 && a > 0 && c == 0) {
        let cSolved = Math.sqrt(p * a)

        if (cSolved > 0) {
            return cSolved
        } if (cSolved == 0) { 
            return `O resultado do Cateto C foi ${cSolved}, verifique seus dados Jovem!`
        }
    } if (p > 0 && a == 0 && c > 0) {
        let aSolved = (c ** 2) / p

        if (aSolved > 0) {
            return aSolved
        } if (aSolved == 0) { 
            return `O resultado da Hipotenusa foi ${aSolved}, verifique seus dados Jovem!`
        }
    } if (p == 0 && a > 0 && c > 0) {
        let pSolved = (c ** 2) / a
        
        if (pSolved > 0) {
            return pSolved
        } if (pSolved == 0) { 
            return `O resultado da Projeção foi ${pSolved}, verifique seus dados Jovem!`
        }
    }

}
