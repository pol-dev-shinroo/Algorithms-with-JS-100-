function reverseTring(string) {
    var splitString = string.split("");
    // ["h", "e", "l", "l", "o"]
    var reverseArr = splitString.reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArr = reverseArr.join("");
    return joinArr;
}

console.log(reverseTring("hello"));

function secondMethod(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i]; // or newString = newString + str[i];
    }
    return newString;
}

console.log(secondMethod("hello"));
