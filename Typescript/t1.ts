// First Method: pop

// const t1 = () => {
//     var nums = [100, 200, 300, 400, 500];
//     nums.pop();
//     nums.pop();
//     return nums;
// };

// console.log(t1());

//  [100, 200, 300]

// Second Method: slice

const t1 = () => {
    var result: number[] = [];
    var nums = [100, 200, 300, 400, 500];
    result = nums.slice(0, 3);
    return result;
};

console.log(t1());
// [100, 200, 300]
