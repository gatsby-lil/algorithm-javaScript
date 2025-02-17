import ArrayStack from "./stack";

const stack = new ArrayStack<number>()
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop()
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.size());
