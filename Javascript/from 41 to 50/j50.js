function bubble(arr) {
    let result = arr.slice(); // 원본 배열 복사

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

const items = "1 2 3 4 5".split(" ").map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));
