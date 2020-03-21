export default function area1(b,c,ar) { // Simple function to calculate the area and others values of the right triangle 
    // Area of the right triangle: A = (b * c) / 2  OR
    //                             A = (a * h) / 2
    if (b > 0 && c > 0 && ar == 0) {
        let arSolved = (c*b) / 2
        
        if (arSolved == 'undefined' || arSolved <= 0) {
            return `${arSolved}! Jovem, isto está altamente errado!`
        } if (arSolved > 0) {
            return arSolved
        }
    } if (b > 0 && c == 0 && ar > 0) {
        let cSolved = (2 * ar) / b

        if (cSolved == 'undefined' || cSolved <= 0) {
            return `${cSolved}! Jovem, isto está altamente errado!`
        } if (cSolved > 0) {
            return cSolved
        }
    } if (b == 0 && c > 0 && ar > 0) {
        let bSolved = (2 * ar) / c

        if (bSolved == 'undefined' || bSolved <= 0) {
            return `${bSolved}! Jovem, isto está altamente errado!`
        } if (bSolved > 0) {
            return bSolved
        }
    }

}