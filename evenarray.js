var readlineSync = require("readline-sync");
let size = readlineSync.question("Enter the size of an array: ")
console.log("Enter the values of array: ")

const array=[];
let even=0;

for(let i=0;i<size;i++){
    array[i]=readlineSync.question(" ");
    if (array[i]%2==0){
        even=even+1;
    }
}
console.log("Number of even numbers in the array is: "+even);