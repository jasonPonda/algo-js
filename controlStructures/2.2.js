let current = prompt("Enter a number current:");
let min = prompt("Enter a number min:");
let  max = prompt("Enter a number max:");

if(min > max){
    alert("sorry you don't understand the question !");
}else if(current >= min && current <= max){
    alert("The current number is " + current);
}