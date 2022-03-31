const people: {[id:string] : phone:string} = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903",
};

let result = new Set();
for (let key in people) {
    result.add(people[key]);
}
console.log(result.size); //size 는 set 객체 내 값의 개수를 반환합니다.
