import fs from 'fs';

import { Stack, Node } from "./stack.js";

const data = fs.readFileSync('./day05.test', 'utf-8');

console.log(data);

const stacks = [new Stack, new Stack, new Stack];

stacks[0].push('Z');
stacks[0].push('N');
stacks[0].pop();
console.log(stacks);
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2