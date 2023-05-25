var readlineSync = require("readline-sync");
console.log("enter 1 for addition \n enter 2 for subtraction \n enter 3 for multiplication \n enter 4 for division");
let select = readlineSync.question("enter operation :");
let num1 = readlineSync.question("enter number 1:");
let num2 = readlineSync.question("enter number 2:");
select = parseInt(select);
num1 = parseInt(num1);
num2 = parseInt(num2);

switch (select) {
    case 1:
    a= add(num1,num2);
    console.log(num1,"+",num2,"=",a);
        break;
    case 2:
    b= sub(num1,num2);
    console.log(num1,"-",num2,"=",b);
        break;
     case 3:
    c= multi(num1,num2);
    console.log(num1,"X",num2,"=",c);
         break;
    case 4:
    d= division(num1,num2);
    console.log(num1,"/",num2,"=",d);
         break;
    default:
        console.log("select valid operation");
        break;
}

function add(a,b) {
    let sum = a + b;
    return sum;
    
}

function sub(a,b) {
    let sum = a - b;
    return sum;
    
}

function multi(a,b) {
    let sum = a * b;
    return sum;
    
}

function division(a,b) {
    let sum = a / b;
    return sum;
}






