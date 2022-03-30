console.log(Boolean(NaN)); //false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false

let a: number = NaN;
console.log(typeof a); //number
let b: number = 1;
console.log(typeof b); //number
let c: string = "";
console.log(typeof c); //string
let d: number = 0;
console.log(typeof d); // number
let e: undefined = undefined;
console.log(typeof e); // undefined
