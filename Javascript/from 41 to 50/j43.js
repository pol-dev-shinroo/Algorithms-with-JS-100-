let a = 11;
let b = [1, 2, 3, 4];
let result = "";

while (a) {
    b.push(a % 2);
    a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
    result += n;
});

console.log(result);
