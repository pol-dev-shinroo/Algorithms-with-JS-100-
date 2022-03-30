const t9 = () => {
    var year: string = "2019";
    var month: string = "04";
    var day: string = "26";
    var hour: string = "11";
    var minute: string = "34";
    var second: string = "27";
    var result: string = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    return result;
};

console.log(t9());
// "2019/04/26 11:34:27"
