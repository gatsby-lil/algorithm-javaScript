class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 1. 递归的方式本质是缓存其引用, 防止改变指向时内存的变量丢失
 * 2. 任何递归都需要有终止条件, 否则会无限递归下去
 * 3. 递归会有一个从后往前, 从内到外执行的特性
 * 4.
 */
function reverseLinkedList(head: ListNode | null) {
  // 终止条件
  if (head == null || head.next == null) return head;
  // 依次取出节点进行处理
  const newHead = reverseLinkedList(head.next);
  /*
  * 第一次执行倒这个位置时, 是倒数第二个节点, 因为倒数第一个节点的next是null, 此时不会再向栈中压入要执行函数
  * 此时newHead是最后一个节点的引用
  */
  // 错误做法: newHead.next = head, 会执行到最后被覆盖 
  head.next.next = head
  // 这一步是为了当最后一个节点时也置为null
  head.next = null
  return newHead
}

// 生成测试链表
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);

const newHead = reverseLinkedList(node1);

let current = newHead
while (current) {
  // console.log(current.val)
  current = current.next
}

export default reverseLinkedList;
