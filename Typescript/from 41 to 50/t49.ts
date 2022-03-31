let numbers: number = "10 9 8 7 6 5 4 3 2 1".split(" ").map((n) => {
    return parseInt(n, 10);
});

numbers.sort((a, b) => {
    return b - a;
});

console.log(numbers[0]);
