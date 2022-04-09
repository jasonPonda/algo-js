/**
 * function calcSurface qui calculer la surface d'un rectangle.
 * @param {la longueur du rectangle} length 
 * @param {la largeur du rectangle} width 
 * @returns la surface du rectangle.
 */
function calcSurface(length, width) {
    return length * width;
}

let surface1 = Number(prompt("Enter a length", ""));
let surface2 = Number(prompt("Enter a width", ""));
console.log("La surface du rectangle est " + calcSurface(surface1, surface2));


