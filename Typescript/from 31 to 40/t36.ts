const getGuGu = (num: number) => {
    let result = "";
    for (let i = 1; i < 10; i++) {
        let temp = num * i;
        result += temp + " ";
    }
    return result;
};

console.log(getGuGu(2));
