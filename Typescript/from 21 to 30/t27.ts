const makeDictionary = (nameArr: string[], numArr: number[]) => {
    let hashMap = {};
    for (let i = 0; i < numArr.length; i++) {
        hashMap[nameArr[i]] = numArr[i];
    }
    return hashMap;
};

console.log(makeDictionary(["Yujin", "Hyewon"], [70, 100]));
