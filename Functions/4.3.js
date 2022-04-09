/**
 * Method rand10 
 * @returns a random integer between 1 and 10.
 */
 function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    tab = new Array();
    for(let n = 0; n < Array.length; n++){
        tab[n] = rand10(); 
    }
    console.log(tab);
    return tab;
}
//prompt("un nombre", "");
console.log("A array with random numbers between 1 and 10 : " + multiRand());