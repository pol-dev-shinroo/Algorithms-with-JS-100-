const findSubstring = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        let checkString = str1.substring(i, i + str2.length);
        if (checkString === str2) {
            return i;
        }
    }
};

console.log(findSubstring("pineapple is yummy", "apple"));
