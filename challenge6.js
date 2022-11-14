// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

//Overall Goal
// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

//Restated 
//Take a lowercase string that comprises a sentence and log the string, but with the first letter of each word capitalized. 

//Pseudocode
//create a test string that has multiple individual lowercase words.
//split the string on whitespace into an array. replace the first letter of each array element with the capitalized version and the use join to transform it back to an array. (this didn't work, I had to create a new string because strings don't like to change in JS)

//Solution
var allLower = "annie ate an apple"

var words = allLower.split(" ")
var solution=[]; 
console.log(words)
for (var i = 0; i< words.length;i++) {
    solution.push(words[i][0].toUpperCase()+words[i].slice(1,));
}
console.log(solution.join(" "))

//Strings are immutable primtives in JS (I keep forgetting this), so I wasn't able to update the original string (took me a minute), hence pushing the new words into the solution array. 
//and since I'm on a one-liner kick... definitely had some help from stackoverflow 
console.log(allLower.replace(/\b[a-z]/g,x=>x[0].toUpperCase()))
