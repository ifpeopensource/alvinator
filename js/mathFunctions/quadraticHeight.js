export default function quadraticHeight(p1, p2, h) { // Function that calculates the height of the right triangle and anoter values (projection 1 and projection 2)
    // Quadratic height formula:  h² = p1 * p2
    if (p1 > 0 && p2 > 0 && h == 0) {
        let hSolved = Math.sqrt(p1 * p2)
        
        if (hSolved == 0) {
            return `${hSolved}! Jovem, isto está altamente errado!`
        } if ((p1 * p2) < 0 || hSolved == 'undefined') {
            return `Jovem, isto está altamente errado!`
        } if (hSolved > 0) {
            return hSolved
        }
    } if (p1 > 0 && p2 == 0 && h > 0) {
        let p2Solved = (h ** 2) / p1
        
        if (p2Solved == 0 || p2Solved == 'undefined') {
            return `${p2Solved}! Jovem, isto está altamente errado!`
        } if (p2Solved > 0) {
            return p2Solved
        } 
    } if (p1 == 0 && p2 > 0 && h > 0) {
        let p1Solved = (h ** 2) / p2

        if (p1Solved == 0 || p1Solved == 'undefined') {
            return `${p1Solved}! Jovem, isto está altamente errado!`
        } if (p1Solved > 0) {
            return p1Solved
        } 
    }
}