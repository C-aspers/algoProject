//Correct terminal command : sujet2.js sujet2.txt

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

console.log("");
console.log("----");
console.log("O(n²) algorithm.");


let firstAlgorithm = (inputArr) => {
  let length = inputArr.length;
  reversedArr = inputArr.reverse()
  //console.log("Reversed:", reversedArr);
  let operations = 0
  let sunnyAppartments = 1
  let highestBuilding = 0
  for (let i = 0; i < length; i++) {
    if(reversedArr[i] >= highestBuilding){
    const filteredArray = reversedArr.filter(item => item !== reversedArr[i]);
    //console.log("filtered Array:", filteredArray);
    filterdLength = filteredArray.length;
      for (let j = 0; j < filterdLength; j++) {

        operations += 1
        if ( filteredArray[j] > reversedArr[i]) {
          //console.log("");
          //console.log("First appartment:", reversedArr[i]);
          //console.log("Second appartment:", filteredArray[j]);
          //console.log("number of operations: ",operations);
          sunnyAppartments += 1
          highestBuilding = filteredArray[j]
          i = reversedArr.findIndex(building => building == filteredArray[j]);
        }
      }
    }
  }
  console.log("number of sunny appartments: ",sunnyAppartments);
  console.log("number of operations: ",operations);
  inputArr.reverse()
  return sunnyAppartments;
};

firstAlgorithm(values_array)


console.log("");
console.log("----");
console.log("O(n) algorithm.");

let secondAlgorithm = (inputArr) => {
  reversedArr = inputArr.reverse()
  //console.log("Reversed:", reversedArr);
  let operations = 0
  let sunnyAppartments = 1
  var tester = reversedArr[0]
  let highestBuilding = tester
  var filteredArray = inputArr.filter(item => item !== inputArr[0]);
  filterdLength = filteredArray.length;
  //console.log("filterdLength:", filterdLength);
    for (let i = 0; i < filterdLength; i++) {
      if(filteredArray[i] >= highestBuilding){
        operations += 1
          //console.log("");
          //console.log("First appartment:", tester);
          //console.log("Second appartment:", filteredArray[i]);
          //console.log("number of operations: ",operations);
          sunnyAppartments += 1
          highestBuilding = filteredArray[i]
          //console.log("");
      }
      tester = filteredArray[0]
      filteredArray = filteredArray.filter(item => item !== tester);
      filterdLength = filteredArray.length;
    }
  console.log("number of sunny appartments: ",sunnyAppartments);
  console.log("number of operations: ",operations);
  inputArr.reverse()
  return sunnyAppartments;
};

secondAlgorithm(values_array)





console.log("");
console.log("----");
console.log("O algorithm.");

let thirdAlgorithm = (inputArr) => {
  let length = inputArr.length;
  reversedArr = inputArr.reverse()
  //console.log("Reversed:", reversedArr);
  let operations = 0
  let sunnyAppartments = 1
  let highestBuilding = 0
  for (let i = 0; i < length; i++) {
    const filteredArray = reversedArr.filter(item => item !== reversedArr[i]);
    //console.log("filtered Array:", filteredArray);
    if(filteredArray[i] >= highestBuilding){
      operations += 1
      //console.log("");
      //console.log("First appartment:", filteredArray[i]);
      //console.log("highestBuilding:", highestBuilding);
      //console.log("number of operations: ",operations);
      sunnyAppartments += 1
      highestBuilding = filteredArray[i]
      i = (reversedArr.findIndex(building => building == filteredArray[i]));
      //console.log("New highest appartment:", reversedArr[i]);
      //console.log("new i:", i);
    }
  }
  console.log("number of sunny appartments: ",sunnyAppartments);
  console.log("number of operations: ",operations);
  inputArr.reverse()
  return sunnyAppartments;
};

thirdAlgorithm(values_array)