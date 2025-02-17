/**
 * 栈结构: 先进先出
 */
export interface IStack<T> {
    push(element: T): void
    pop():T | undefined
    peek():T | undefined
    isEmpty():boolean
    size():number
}