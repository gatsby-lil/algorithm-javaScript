/**
"()" ==> true
"()[]{}" ==> true
"(]" ==> false
"([])" ==> true
*/

import ArrayStack from "./stack";

/**
 * 适用于成对出现的场景
 * 例如解析html: <div><p><span></span></p></div>
 */
export function validateBracket(bracket: string): boolean {
    if (!bracket) return false;
    if (typeof bracket !== 'string') return false
    const stack = new ArrayStack<string>(),
    bracketReverseMap: Record<string, string> = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    for(let i = 0; i < bracket.length; i++) {
        let str = bracket[i]
        let strReverse = bracketReverseMap[str]
        if(strReverse) {
            stack.push(strReverse)
        } else {
            // 取出栈中当前的第一个
            const firstStr = stack.pop()
            if(firstStr !== str) return false;
        }
    }
    return stack.isEmpty();
}

let r1 = validateBracket('()')
console.log(r1)
let r2 = validateBracket('()[]{}')
console.log(r2)
let r3 = validateBracket('(]')
console.log(r3)
let r4 = validateBracket('([])')
console.log(r4)
let r5 = validateBracket('([]))')
console.log(r5)
let r6 = validateBracket('([][])')
console.log(r6)