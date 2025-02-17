export default interface IQueue<T> {
    // 入列
    enqueue(element: T): void
    // 出列
    dequeue(): T | undefined
    front():T | undefined
    isEmpty(): boolean
    size(): number
}