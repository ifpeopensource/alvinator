export default function area(b,c,ar) { // Simple function to calculate the area and others values of the right triangle 
    // Area of the right triangle: A = (b * c) / 2
    if (b > 0 && c > 0 && ar == 0) {
        ar = (c*b) / 2
        
        if (ar > 0) {
            return ar
        } if (ar == 0 || ar < 0) {
            return `O resultado da Área foi ${ar}, isto é altamente estranho jovem`
        }
    } if (b > 0 && c == 0 && ar > 0) {
        c = (2 * ar) / b

        if (c > 0) {
            return c
        } if (c == 0 || c < 0) {
            return `O resultado do Cateto C foi ${c}, isto é altamente estranho jovem`
        }
    } if (b == 0 && c > 0 && ar > 0) {
        b = (2 * ar) / c

        if (b > 0) {
            return b
        } if (b == 0 || b < 0) {
            return `O resultado do Cateto B foi ${b}, isto é altamente estranho jovem`
        }
    }

}