class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 非递归的方式实现反转链表:
 * 1. 先建立一个指针newHead
 * 2. 在循环的时候, 建立一个指针记录下一个节点(因为此时改变next会丢失指向)
 * 3. 改变newHead指向指向当前节点, 为下一次循环的节点next指向做准备
 * 4. head指针变为下一个节点
 */
function reverseLinkedList(head: ListNode | null) {
  if (head == null || head?.next == null) return head;
  let newHead: ListNode | null = null;
  while (head) {
    // 记录下一个节点
    const current: ListNode | null = head.next;
    head.next = newHead;
    // 为下次循环做准备
    newHead = head;
    head = current;
  }
  return newHead;
}

// 生成测试链表
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);

reverseLinkedList(node1);

export default reverseLinkedList;
