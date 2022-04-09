function factorial(a){
    if(a < 0) return;
    if(a < 2) return 1;
    return a * factorial(a - 1);
}

console.log("La factoriel de 5 est " + factorial(5));