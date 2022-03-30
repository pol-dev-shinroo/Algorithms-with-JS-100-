function reverseTring(string: string) {
    var splitString: string[] = string.split("");
    // ["h", "e", "l", "l", "o"]
    var reverseArr: string[] = splitString.reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArr: string = reverseArr.join("");
    return joinArr;
}

console.log(reverseTring("hello"));

function secondMethod(string: string) {
    var newString: string = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i]; // or newString = newString + str[i];
    }
    return newString;
}

console.log(secondMethod("hello"));
