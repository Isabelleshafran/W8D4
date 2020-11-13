// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//     Example 1:
// Input: "()"
// Output: true
// Example 2:
// Input: "()[]{}"
// Output: true
// Example 3:
// Input: "(]"
// Output: false
// Example 4:
// Input: "([)]"
// Output: false
// Example 5:
// Input: "{[]}"
// Output: true


function string_container(str){
    let container = [];

    for(let i = 0; i <str.length; i++){
        for(let j = (i + 1); j < str.length; j++){
            if(str[i] == str[j]){
                container.push(str[i] + str[j])
            };
        };

    };
};





// You are a product manager and currently leading a team to develop a new product.Unfortunately, the latest version of your product fails the quality check.Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions[1, 2, ..., n]and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which will return whether version is bad.Implement a function to find the first bad version.You should minimize the number of calls to the API.
//     Example:
// Given n = 5, and version = 4 is the first bad version.
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version. 

function versions(n) {
    versionsArray = []

    for(let i = 1; i <= n; i++){
        versionsArray.push(i);
    }

    versionsArray // [1, 2, 3, 4, 5]
    let final = []

    for(let i = 0; i < versionsArray.length; i++){
        if(isBadVersion(versionsArray[i]) === true) {
            // final.push(versionsArray.slice(versionsArray[i]))
            final.push(versionsArray[i]); // 4
            break;
        }   
    }

    return final; 
}