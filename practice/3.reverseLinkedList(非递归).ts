class ListNode {
    val: number | string;
    next: ListNode | null;
    constructor(val?: number | string, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseListNode(head: ListNode | null) {
    if (head === null || head?.next === null) return head
    let newHead = null
    while (head) {
        let nextNode = head.next
        head.next = newHead
        newHead = head
        head = nextNode
    }
    return newHead
}




const node1 = new ListNode('A')
node1.next = new ListNode('B')
node1.next.next = new ListNode('C')
node1.next.next.next = new ListNode('D')

let newNode = reverseListNode(node1);

let current = newNode
while(current) {
    console.log(current.val);
    current = current.next
}


export default reverseListNode
