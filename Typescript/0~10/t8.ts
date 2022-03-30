const t8 = (key) => {
    var d: { [key: string]: number } = {
        height: 180,
        weight: 78,
        weight: 84,
        temperature: 36,
        eyesight: 1,
    };
    return d[key];
};

console.log(t8("weight"));
// error is shown "cannot have multiple props with the same name"
