export default function area1(b,c,ar) { // Simple function to calculate the area and others values of the right triangle 
    // Area of the right triangle: A = (b * c) / 2  OR
    //                             A = (a * h) / 2
    if (b > 0 && c > 0 && ar == 0) {
        let arSolved = (c*b) / 2
        
        if (arSolved > 0) {
            return arSolved
        } if (arSolved == 0 || arSolved < 0) {
            return `O resultado da Área foi ${arSolved}, isto é altamente estranho jovem`
        }
    } if (b > 0 && c == 0 && ar > 0) {
        let cSolved = (2 * ar) / b

        if (cSolved > 0) {
            return cSolved
        } if (cSolved == 0 || cSolved < 0) {
            return `O resultado do Cateto C foi ${cSolved}, isto é altamente estranho jovem`
        }
    } if (b == 0 && c > 0 && ar > 0) {
        let bSolved = (2 * ar) / c

        if (bSolved > 0) {
            return bSolved
        } if (bSolved == 0 || bSolved < 0) {
            return `O resultado do Cateto B foi ${bSolved}, isto é altamente estranho jovem`
        }
    }

}