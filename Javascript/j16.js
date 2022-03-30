function reverseTring(string) {
    var splitString = string.split("");
    // ["h", "e", "l", "l", "o"]
    var reverseArr = splitString.reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArr = reverseArr.join("");
    return joinArr;
}

console.log(reverseTring("hello"));
