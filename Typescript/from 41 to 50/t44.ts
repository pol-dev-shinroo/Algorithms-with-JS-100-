let n: number = 3;
let sum: number = 0;

while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log(sum);
