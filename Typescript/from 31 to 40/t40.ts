const rider = (limit: number, num: number, arr: number[]) => {
    let count: number = 0;
    let total: number = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
        if (total <= limit) {
            count = i + 1;
        }
    }
    console.log(count);
};

rider(80, 5, [20, 20, 20, 20, 20]);
