function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const x = new Date("2020-" + a + "-" + b);
    return day[x.getDay()];
}
console.log(solution(3, 2));
