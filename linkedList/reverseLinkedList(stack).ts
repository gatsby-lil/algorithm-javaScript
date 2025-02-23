class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 利用栈结构实现反转链表
function reverseLinkedList(head: ListNode | null) {
  if (head == null || head?.next == null) return head;
  // 生成一个栈结构
  let stack: ListNode[] = [],
    current: ListNode | null = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  // 进行反转
  let newHeadNode: ListNode = stack.pop()!;
  let currentNode = newHeadNode;
  while (stack.length > 0) {
    let endNode = stack.pop()!;
    currentNode.next = endNode;
    currentNode = endNode;
  }
  currentNode.next = null;
  console.log(newHeadNode);
  return newHeadNode;
}

// 生成测试链表
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);

reverseLinkedList(node1);

export default reverseLinkedList;
