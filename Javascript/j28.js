const twoGram = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (i != string.length - 1) {
            console.log(string[i], string[i + 1]);
        } else {
            break;
        }
    }
};

twoGram("Javascript");
