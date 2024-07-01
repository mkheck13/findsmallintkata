// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// Math.min() is the way to go here
// we will use the spred operator (...arr) this spreds the elements into an array
// then Math.min() gives us the smallest integer 
function findSmallestInt(arr){
    return Math.min(...arr)
}
