/**
 * 1) 链表内存空间不连续可以，充分利用计算机的内存，实现灵活的内存动态管理
 * 2) 链表不必在创建时就确定大小，并且大小可以无限的延伸下去
 * 3) 插入和删除效率高
 * 4) 链表访问任何一个位置的元素时，都需要从头开始访问
 */

// 节点
class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null;
    private size: number = 0;
    // 根据索引位置获取节点
    private getNode(position: number): Node<T> | null {
        let current = this.head,
            index = 0;
        while (index++ < position && current) {
            current = current.next
        }
        return current
    }


    get length(): number {
        return this.size;
    }

    // 追加节点
    append(value: T) {
        const newNode = new Node<T>(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // 遍历链表
    traverse() {
        const values: T[] = [];
        let current = this.head;
        if (!current) {
            return values;
        }
        while (current) {
            values.push(current.value);
            current = current?.next;
        }
        console.log(values.join("->"));
        return values;
    }

    // 插入节点
    insert(value: T, position: number): boolean {
        // 边界判断
        if (position < 0 || position > this.size) return false;
        // 创造一个节点
        const newNode = new Node(value);
        // 插入头部
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else { // 插入其他位置
            // 双指针解法
            // let current = this.head,
            //     previousNode = null,
            //     index = 0;
            // while (index++ < position && current) {
            //     previousNode = current;
            //     current = current.next;
            // }
            // 前后节点获取到: current是需要删除的节点
            // newNode.next = current;
            // previousNode!.next = newNode;

            // 优化单指针解法
            // 获取当前位置的前一个节点
            const previousNode = this.getNode(position - 1);
            newNode.next = previousNode?.next || null
            previousNode!.next = newNode
        }
        this.size++;
        return true;
    }

    // 删除节点
    removeAt(position: number): T | null {
        if (position < 0 || position > this.size) return null
        // 删除头部
        let current = this.head
        if (position === 0) {
            this.head = current?.next || null
        } else {
            // 双指针解法
            // let previous: Node<T> | null = null,
            //     index = 0;
            // while (index++ < position && current) {
            //     previous = current
            //     current = current.next
            // }
            // previous!.next = current?.next ?? null

            // 单指针优化
            let previous = this.getNode(position - 1);
            previous!.next = previous?.next?.next || null
        }
        this.size--;
        return current?.value ?? null
    }

    // 获取节点
    get(position: number): T | null {
        if (position < 0 || position > this.size) return null
        let findNode = this.getNode(position);
        return findNode?.value || null
    }

    // 更新节点
    update(value: T, position: number): boolean {
        if (position < 0 || position >= this.size) return false;
        const current = this.getNode(position)
        current!.value = value;
        return true
    }

    // 根据值获取索引
    indexOf(value: T): number {
        let current = this.head,
            index = 0;
        while (current) {
            if (current.value === value) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    // 删除方法: 根据value删除节点
    remove(value: T): T | null {
        let index = this.indexOf(value);
        return this.removeAt(index);
    }

    // 判断链表是否为空
    isEmpty() {
        return this.size === 0;
    }
}

const linkedList = new LinkedList<string>();
linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");
linkedList.append("e");
linkedList.append("f");
linkedList.traverse();
console.log("------------测试insert--------------");
linkedList.insert("嘿嘿", 2);
linkedList.traverse();
linkedList.insert("哈哈", 7);
linkedList.traverse();
console.log("------------测试removeAt--------------");
linkedList.removeAt(7);
linkedList.traverse();
linkedList.removeAt(2);
linkedList.traverse();




export default LinkedList;
