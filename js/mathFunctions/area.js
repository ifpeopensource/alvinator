export default function area(b,c,ar) { // Simple function to calculate the area of triangles and 
    
    if (b > 0 && c > 0 && ar == 0) {
        ar = (c*b) / 2
        return ar
    }
    if (area > 0) {
        return area
    } if (area == 0 || area < 0) {
        return `O resultado da Área foi ${area}, isto é altamente bizarro`
    }
}