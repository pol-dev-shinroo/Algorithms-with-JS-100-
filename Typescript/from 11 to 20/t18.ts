const findAverage = (num: number[]) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    let result = sum / num.length;
    console.log(Math.floor(result));
};

findAverage([20, 30, 40]);
