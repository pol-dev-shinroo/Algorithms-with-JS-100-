const checkSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            if (i === arr.length - 1) {
                break;
            }
            continue;
        }
        if (arr[i] > arr[i + 1]) {
            return "No";
        }
    }
    return "Yes";
};

// console.log(checkSort([176, 156, 155, 165, 166, 169])); // No
console.log(checkSort([155, 156, 165, 166, 169, 176]));
