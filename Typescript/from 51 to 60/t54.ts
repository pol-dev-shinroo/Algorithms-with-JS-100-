function sol(l: number[]) {
    l.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < l.length - 1; i++) {
        if (l[i] + 1 !== l[i + 1]) {
            return "NO";
        }
    }
    return "YES";
}

const n = "1 2 3 4 5".split(" ").map((n) => parseInt(n, 10));

console.log(sol(n));
