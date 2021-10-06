//Correct terminal command : sujet1.js sujet1.txt 10
// 10 = k


console.clear()
const fs = require('fs');
const { getSystemErrorMap } = require('util');

const fileName = process.argv[2];
const k = process.argv[3];

var values_array = []

try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log("Values extracted from text file: ", data);
    values_array = data.split(" ").map(Number);
    console.log("Number of values : ", values_array.length);
} catch (error) {
    console.error(error.message);
}

console.log("k:", k);

console.log("");
console.log("----");
console.log("O(n²) algorithm.");

let firstAlgorithm = (inputArr) => {
  let length = inputArr.length;
  let operations = 0
  for (let i = 0; i < length; i++) {
      const filteredArray = inputArr.filter(item => item !== inputArr[i]);
      filterdLength = filteredArray.length;
      for (let j = 0; j < filterdLength; j++) {
        let tmp = inputArr[i] + filteredArray[j]
        operations += 1
        if (tmp == k) {
          console.log("First Value:", inputArr[i]);
          console.log("Second Value:", filteredArray[j]);
          console.log("Result:", tmp);
          console.log("number of operations: ",operations);
          return true
        }
      }
  }
  console.log(`No addition of values is equal to : ${k}`);
  console.log("number of operations: ",operations);
  return false;
};

firstAlgorithm(values_array)


console.log("");
console.log("----");
console.log("O(n) algorithm.");

let secondAlgorithm = (inputArr) => {
  let operations = 0
  let answer = false
  var tester = inputArr[0]
  var filteredArray = inputArr.filter(item => item !== inputArr[0]);
  filterdLength = filteredArray.length;
  while(answer === false){

    for (let i = 0; i < filterdLength; i++) {

      operations += 1
      value = tester + filteredArray[i]
      if (value == k) {
        console.log("First Value:", filteredArray[i]);
        console.log("Second Value:", tester);
        console.log("Result:", (value));
        console.log("number of operations: ",operations);
        return answer = true;
      }
    }
    tester = filteredArray[0]
    filteredArray = filteredArray.filter(item => item !== filteredArray[0]);
    filterdLength = filteredArray.length;
  }
  console.log(`No addition of values is equal to : ${k}`);
  console.log("number of operations: ",operations);
  return answer = false;
};

secondAlgorithm(values_array)

console.log("");
console.log("----");
console.log("O algorithm.");

let thirdAlgorithm = (inputArr) => {
  let length = inputArr.length;
  let operations = 0
  for (let i = 0; i < length; i++) {
    const filteredArray = inputArr.filter(item => item !== inputArr[i]);
    filterdLength = filteredArray.length;
    value = k - inputArr[i]
    operations += 1
    if (filteredArray.includes(value)) {
      console.log("First Value:", inputArr[i]);
      console.log("Second Value:", filteredArray.find(element => element == value));
      console.log("Result:", (inputArr[i] + value));
      console.log("number of operations: ",operations);
      return true
    }
  }
  console.log(`No addition of values is equal to : ${k}`);
  console.log("number of operations: ",operations);
  return false;
};

thirdAlgorithm(values_array)