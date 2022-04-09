/**
 * Method rand10 
 * @returns a random integer between 1 and 10.
 */
function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}

console.log("A random integer between 1 and 10 : " + rand10());