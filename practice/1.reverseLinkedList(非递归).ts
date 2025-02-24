class ListNode {
    val: number | string;
    next: ListNode | null;
    constructor(val?: number | string, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseListNode(head: ListNode | null) {
    if (head == null || head?.next == null) return head;
    let newHead:ListNode | null = null;
    while(head) {
        const currentNode: ListNode | null = head.next
        head.next = newHead
        newHead = head
        head = currentNode
    }
}




const node1 = new ListNode('A')
node1.next = new ListNode('B')
node1.next.next = new ListNode('C')
node1.next.next.next = new ListNode('D')


export default reverseListNode
