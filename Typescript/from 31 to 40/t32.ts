const lengthOfLetters = (str: string) => {
    let arr = str.split(" ");
    return arr.length;
};

console.log(
    lengthOfLetters("안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.")
);
