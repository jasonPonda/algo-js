/**
 * Method rand10 
 * @returns a random integer between 1 and 10.
 */
 function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    tab = new Array();
    for(let i = 0; i < n; i++){
        tab[i] = rand10(); 
    }
    
    return tab;
}
//prompt("un nombre", "");
console.log("A array with random numbers between 1 and 10 : " + multiRand(5));