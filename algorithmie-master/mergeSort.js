console.clear()
const fs = require('fs');
const { getSystemErrorMap } = require('util');

const fileName = process.argv[2];

var values_array = []

try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log("Values extracted from text file: ", data);
    values_array = data.split(" ").map(Number);
    console.log("Number of values : ", values_array.length);
} catch (error) {
    console.error(error.message);
}

console.log("----");
console.log("Merge Sort sorting.");

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}
let operations = 0
function mergeSort(inputArr) {
    const half = inputArr.length / 2
    if(inputArr.length < 2){
      return inputArr 
    }
    const left = inputArr.splice(0, half)
    operations += 1   
    return merge(mergeSort(left),mergeSort(inputArr))
  }


console.log(mergeSort(values_array));
console.log("number of operations: ", operations);