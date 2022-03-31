let a: number = 11;
let b: number[] = [1, 2, 3, 4];
let result: string = "";

while (a:number) {
    b.push(a % 2);
    a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
    result += n;
});

console.log(result);
