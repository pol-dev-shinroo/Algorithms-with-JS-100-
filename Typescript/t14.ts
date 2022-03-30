const n1: number = 3;
const n2: number = 2;

let multipleOfThree = (n: number) => {
    if (n % 3 === 0) {
        console.log("짝");
    } else {
        console.log(n);
    }
};

multipleOfThree(n1);
multipleOfThree(n2);
