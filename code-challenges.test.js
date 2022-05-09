// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


describe("sentenceJawn", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(sentenceJawn(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ● sentenceJawn › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// ReferenceError: sentenceJawn is not defined


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// PSEUDO:
// input:array of objects
// output:array =["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
// use .map to iterate over the original array
// declare a variable inside the map method called splitArr that will split the name in the key:value pairs
// declare a new variable called capArr that will take the splitArr and use .toUpperCase to capitallize
// use index 0 to capitalize the first word and index 0 to capitalize the first letter
// use .subtring following each .toUpperCase to include the rest of the words in the string
// return a string interpolation with the capArr plus value.occupation to call on the object key:value. 



const sentenceJawn = (arr) => {
  return arr.map((value) => {
  let splitArr = value.name.split(' ')
  let capArr = splitArr[0][0].toUpperCase() + splitArr[0].substring(1) + " " + splitArr[1][0].toUpperCase() + splitArr[1].substring(1)
  return `${capArr} is ${value.occupation}.`  
})
}

// PASS  ./code-challenges.test.js
// sentenceJawn
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// __________________________________________________________________________________________________________________________________









// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.



describe("onlyRemainder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
expect(onlyRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// sentenceJawn
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// onlyRemainder
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ● onlyRemainder › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3


// b) Create the function that makes the test pass.

// PSEUDO:
// declare a variable called onlyRemainder
// input will be an array of mixed data
// use .filter becasue we need to iterate over the array
// use typeof to filter out just the numbers
// use .map to iterate over the array and only return the remainders 
// use the modulo3 since it will give us the remainders

const onlyRemainder = (arr) => {
  let remainders = arr.filter(value => typeof value === "number")
  return remainders.map(value => value%3)
}

// PASS  ./code-challenges.test.js
// sentenceJawn
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// onlyRemainder
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// ___________________________________________________________________________________________________________________________







// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe("cubedNums", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125
    expect(cubedNums(cubeAndSum1)).toEqual(99)
    expect(cubedNums(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// sentenceJawn
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// onlyRemainder
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// cubedNums
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// ● cubedNums › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: cubedNums is not defined

//     142 | const cubeAndSum2 = [0, 5, 10]
//     143 | // // Expected output: 1125
//   > 144 |     expect(cubedNums(cubeAndSum1)).toEqual(99)
//         |     ^
//     145 |     expect(cubedNums(cubeAndSum2)).toEqual(1125)
//     146 |   })
//     147 | })

//     at Object.expect (code-challenges.test.js:144:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total


// b) Create the function that makes the test pass.

//PSEUDO:
// input: array of numbers
// declare a variable called cubedNums that will take in an array as the parameter
// use .map toi iterate over the array
// return the values cubed using **3 
// then take those numbers that have been cubed and use .reduce 
// output: sum of all the numbers cubed


const cubedNums = (arr) => {
  let finalAnswer = arr.map(value => value**3)
return finalAnswer.reduce((a,b)=> a+b)
}



// PASS  ./code-challenges.test.js
// sentenceJawn
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// onlyRemainder
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// cubedNums
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total



