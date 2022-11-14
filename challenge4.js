// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// Stated goal: Start with an array of strings. Print only the words that include the letter combination "ing".

//Overall Goal
//Given an array of strings, print those that contain the string "ing"

//Pseudocode
// Define test array. Loop through array and test individual strings to see if they contain the string "ing", if yes, log that string!

//Solution

var someGerunds = ["walking", "running", "staid", "pop"]
for (var i = 0; i < someGerunds.length; i++) {
    if (someGerunds[i].includes("ing")) {
        console.log(someGerunds[i])
    }
}

//alternatively, we could use filter
console.log(someGerunds.filter(x=>x.includes("ing")))