const findOneTwoThree = (arr: number[], ranking: number) => {
    let hashMap: { [key: string]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.hasOwnProperty(arr[i])) {
            hashMap[arr[i]] += 1;
        } else {
            hashMap[arr[i]] = 1;
        }
    }
    let keys: string[] = Object.keys(hashMap);
    keys.reverse();

    let counter = 0;
    for (let i = 0; i < ranking; i++) {
        counter += hashMap[keys[i]];
    }
    console.log(counter);
};

findOneTwoThree([97, 86, 75, 66, 55, 97, 85, 97, 97, 95], 3);
