// console.log(" ".repeat(5) + "*");
// console.log(" ".repeat(4) + "***");
// console.log(" ".repeat(3) + "*****");
// console.log(" ".repeat(2) + "*******");
// console.log(" ".repeat(1) + "*********");

let num = 5;
let star = "*";
console.log(" ".repeat(num + 1) + star);
for (let i = 5; i > 0; i--) {
    star += "**";
    console.log(" ".repeat(i) + star);
}
