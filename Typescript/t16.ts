function reverseTring(string: string) {
    var splitString: string[] = string.split("");
    // ["h", "e", "l", "l", "o"]
    var reverseArr: string[] = splitString.reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArr: string = reverseArr.join("");
    return joinArr;
}

console.log(reverseTring("hello"));
