export default function quadraticHeight(p1, p2, h) { // Function that calculates the height of the right triangle and anoter values (projection 1 and projection 2)
    // Quadratic height formula:  h² = p1 * p2
    if (p1 > 0 && p2 > 0 && h == 0) {
        let hSolved = Math.sqrt(p1 * p2)
        
        if (hSolved > 0) {
            return hSolved
        } if (hSolved == 0) {
            return `Jovem, o resultado da Altura foi ${hSolved}, verifique os dados`
        } if ((p1 * p2) < 0) {
            return `Jovem, verifique os dados!`
        }
    } if (p1 > 0 && p2 == 0 && h > 0) {
        let p2Solved = (h ** 2) / p1
        
        if (p2Solved > 0) {
            return p2Solved
        } if (p2Solved == 0) {
            return `Jovem, o resultado da Projeção 2 foi ${p2Solved}, verifique os dados`
        }
    } if (p1 == 0 && p2 > 0 && h > 0) {
        let p1Solved = (h ** 2) / p2
        
        if (p1Solved > 0) {
            return p1Solved
        } if (p1Solved == 0) {
            return `Jovem, o resultado da Projeção 2 foi ${p1Solved}, verifique os dados`
        }
    }
}