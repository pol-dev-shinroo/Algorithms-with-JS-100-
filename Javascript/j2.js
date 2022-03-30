var arr = [200, 100, 300];
//  output should be => [200, 100, 10000, 300]
// splice() is used to replace elements within a list

arr.splice(2, 0, 10000);
console.log(arr);

// splice() syntax:
// splice(index, howmany, item1,.,.,.,itemx)
// index: required; the position to add/ remove items
// howmany: optional; number of items to be removed
// item1...itemx: optional; new elements to be added
