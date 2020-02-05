export default function quadraticLeg (p, a, c) { // Function to calculate the Leg of a right triangle and others values (hypotenuse, projections)
    // Leg of an right triangle: c1² = p1 * a  OR
    //                           c2² = p2 * a
    if (p > 0 && a > 0 && c == 0) {
        let c = Math.sqrt(p * a)

        if (c > 0) {
            return c
        } if (c == 0) { 
            return `O resultado do Cateto C foi ${c}, verifique seus dados Jovem!`
        }
    } if (p > 0 && a == 0 && c > 0) {
        let a = (c ** 2) / p

        if (a > 0) {
            return a
        } if (a == 0) { 
            return `O resultado da Hipotenusa foi ${a}, verifique seus dados Jovem!`
        }
    } if (p == 0 && a > 0 && c > 0) {
        let p = (c ** 2) / a
        
        if (p > 0) {
            return p
        } if (p == 0) { 
            return `O resultado da Projeção foi ${p}, verifique seus dados Jovem!`
        }
    }

}
