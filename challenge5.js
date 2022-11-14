// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// Stated Goal: 
// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

//Restated goal: given a list of destinations, print interpolated strings that contain a full sentence and plan to vist each destination. The order should be sorted by destination. 

//Pseudocode
//define test array; sort array; loop through sorted array and print interpolated affirmations 


//Solution
var destinations = ["Paris", "Hamburg", "Goa", "Bali"]

var sorted = destinations.sort()
for (var i = 0; i< sorted.length; i++) {
     console.log(`Once I get my remote job, I'm heading to ${sorted[i]}!`)
}

//And another one... 
console.log(destinations.sort().forEach(x=>console.log(`Once I get my remote job, I'm heading to ${x}!`)))