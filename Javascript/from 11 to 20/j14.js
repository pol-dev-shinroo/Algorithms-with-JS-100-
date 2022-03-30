const n1 = 3;
const n2 = 2;

let multipleOfThree = (n) => {
    if (n % 3 === 0) {
        console.log("짝");
    } else {
        console.log(n);
    }
};

multipleOfThree(n1);
multipleOfThree(n2);
