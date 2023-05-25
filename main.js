var readlineSync = require('readline-sync');
let number = readlineSync.question("enter number:")
number = parseInt(number)


for(let i=1;i<=12;i++){
    console.log(number,"x",i,"=",number*i)
}







































// switch(day){

//     case 1 : 
//     console.log("Sunday")
//     break;
//     case 2 : 
//     console.log("Monday");
//     break;
//     case 3 : 
//     console.log("Tuesday");
//     break;
//     case 4 : 
//     console.log("Wednesday")
//     break;
//     case 5 : 
//     console.log("Thursday");
//     break;
//     case 6 : 
//     console.log("Friday");
//     break;
//     case 7 : 
//     console.log("Saturday");
//     break;
//     default :
//     console.log("invalid entry")
// }










