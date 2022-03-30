const t5 = () => {
    var a: number = 10;
    var b: number = 2;

    for (var i = 1; i < 5; i += 2) {
        a += i;
    }

    return a + b;
};

console.log(t5());
// 16
