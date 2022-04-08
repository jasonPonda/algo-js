let first = [1, 2, 3, 4, 5];
let seconde = [100, 101, 102];
let sum = 0;
for(let elem in seconde){
    sum += seconde[elem];
}

let average = sum / seconde.length;

console.log("La moyenne du tableau est " + average);
