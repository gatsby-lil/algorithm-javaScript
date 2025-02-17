import ArrayQueue from "./queue";

function joseph(n: number, m: number):number {
    const queue = new ArrayQueue<number>();
    for (let i = 0; i < n; i++) {
        queue.enqueue(i);
    }
    // 开始轮流计算
    while (queue.size() > 1) {
        for (let i = 1; i < m; i++) {
            let cur = queue.dequeue()!
            queue.enqueue(cur)
        }
        queue.dequeue();
    }
    return queue.dequeue()!;
}

let r = joseph(5, 3);
console.log(r, 'r1');

let r2 = joseph(10, 17);
console.log(r2, 'r2');

export default joseph;