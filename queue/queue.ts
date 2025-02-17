/**
 * 先进先出
 */

import IQueue from "../types/IQueue";

class ArrayQueue<T> implements IQueue<T> {
    private data: T[] = []
    // 入队
    enqueue(element: T): void {
        this.data.push(element)
    }
    // 出队
    dequeue(): T | undefined {
        return this.data.shift()
    }
    front(): T | undefined {
        return this.data[0]
    }
    isEmpty(): boolean {
        return this.data.length === 0
    }
    size(): number {
        return this.data.length
    }
}

export default ArrayQueue