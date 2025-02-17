import ArrayQueue from "./queue";

/**
 * 击鼓传花
 * 进入队列, 出队列
 */
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
];

const names2 = [
  "Jack",
  "Kathy",
  "Liam",
  "Megan",
  "Noah",
  "Olivia",
  "Paul",
  "Quincy",
  "Rachel",
];

const names3 = [
  "Sophia",
  "Tom",
  "Uma",
  "Violet",
  "Will",
  "Xander",
  "Yara",
  "Zane",
];

export default function hotPotato(names: string[], num: number): number {
  if (!Array.isArray(names)) throw new TypeError(`names must be an array`);
  if (names.length === 0) return -1;
  if (names.length === 1) return 0;
  const queue = new ArrayQueue<string>();
  // 把数据添加到队列中
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }

  while (queue.size() > 1) {
    // 开始计数
    for (let i = 1; i < num; i++) {
      // 先出列, 再进去末尾排队
      let item = queue.dequeue()!;
      queue.enqueue(item);
    }
    // 计数到的要出列
    queue.dequeue();
  }
  // 循环结束后还剩下的人员
  const remainItem = queue.dequeue()!;
  console.log(remainItem, "remian");
  return names.indexOf(remainItem);
}

const r1 = hotPotato(names, 9);
console.log(r1);

const r2 = hotPotato(names2, 7);
console.log(r2);


const r3 = hotPotato(names3, 5);
console.log(r3);


