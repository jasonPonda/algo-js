/**
 * Methode qui calcule la distance d'un point à un autre.
 * @param {Coordonnees du point A} A 
 * @param {COordonneees du point B} B 
 */
function calcDistance(xA, yA, xB, yB) {
    let x = xB - xA;
    let y = yB - yA;
    
    return Math.sqrt(x * x + y * y);
}

console.log(calcDistance(1, 1, 2, 2).toFixed(2));
//Expect 1.41

console.log(calcDistance(1, 1, 3, 1));
//Expect 2

console.log(calcDistance(4, 1, 1, 1));
//Expect 3

console.log(calcDistance(-2, 2, 2, -2).toFixed(2));
//Expect 5.65