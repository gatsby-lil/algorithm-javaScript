import ArrayStack from "./stack";

export default function decimalToBinary(num: number) {
    num = +num;
    if (isNaN(num)) throw new TypeError(`${num} It has to be a number`);
    const stack = new ArrayStack<number>();
    while (num > 0) {
        let remainNumber = num % 2;
        stack.push(remainNumber);
        num = Math.floor(num / 2);
    }
    console.log(stack.size(), 'sss');
    let bindry = '',
    size = stack.size()
    for (let i = 0; i < size; i++) {
        bindry += stack.pop()
    }
    return bindry;
}

const threeFive = decimalToBinary(35);
const sevenseven = decimalToBinary(77);
console.log(threeFive, 'five');
console.log(sevenseven, 'seven');