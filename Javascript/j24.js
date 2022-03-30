const toCapital = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let capitalized = str[i].toUpperCase();
        result = result + capitalized;
    }
    return result;
};

console.log(toCapital("hello"));
