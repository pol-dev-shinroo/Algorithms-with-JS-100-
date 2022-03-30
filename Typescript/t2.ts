const t2 = () => {
    let arr: number[] = [200, 100, 300];
    arr.splice(2, 0, 10000); /* start,delete,input */
    return arr;
};

console.log(t2());

// [200, 100, 10000, 300]
