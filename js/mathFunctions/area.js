export default function area(c,b) {
    let area = (c*b) / 2

    if (area > 0) {
        return area
    } if (area == 0 || area < 0) {
        return `O resultado da Área foi ${area}, isto é altamente bizarro`
    }
}