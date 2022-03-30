let num: number = 5;
let star: string = "*";
console.log(" ".repeat(num + 1) + star);
for (let i = 5; i > 0; i--) {
    star += "**";
    console.log(" ".repeat(i) + star);
}
