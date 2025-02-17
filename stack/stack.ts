import { IStack } from "../types/IStack";
/**
 * 栈结构: 后进先出
 */
class ArrayStack<T> implements IStack<T> {
    private data: T[] = []
    push(element: T) {
        this.data.push(element);
    }
    pop(): T | undefined {
        return this.data.pop()
    }
    peek(): T | undefined {
        return this.data[this.data.length - 1]
    }
    isEmpty(): boolean {
        return this.data.length === 0
    }
    size(): number {
        return this.data.length
    }
}

export default ArrayStack