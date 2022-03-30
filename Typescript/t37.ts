const votingResult = (arr: string[]) => {
    let hashMap: { [key: string]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.hasOwnProperty(arr[i])) {
            hashMap[arr[i]] += 1;
        } else {
            hashMap[arr[i]] = 1;
        }
    }
    // find dict key with most value
    let winner: string = Object.keys(hashMap).reduce(function (a, b) {
        return hashMap[a] > hashMap[b] ? a : b;
    });
    console.log(winner);
};

votingResult(["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"]);
