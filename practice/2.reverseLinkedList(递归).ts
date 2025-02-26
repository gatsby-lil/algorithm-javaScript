class ListNode {
    val: number | string;
    next: ListNode | null;
    constructor(val?: number | string, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseListNode(head: ListNode | null) {
    if (head === null || head?.next === null) return head;
    // 递归的本质是把引用关系给缓存起来
    const newHead = reverseListNode(head.next);
    // 第一次能执行下面的代码, 此时head是倒数第二个节点, newHead是最后一个节点
    console.log(head, 'head');
    head.next.next = head
    head.next = null
    console.log(newHead);
    return newHead
}




const node1 = new ListNode('A')
node1.next = new ListNode('B')
node1.next.next = new ListNode('C')
node1.next.next.next = new ListNode('D')

const newHead = reverseListNode(node1);
let current = newHead
while (current) {
    console.log(current.val);
    current = current.next
}


export default reverseListNode
