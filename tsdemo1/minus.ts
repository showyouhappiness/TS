#!/usr/bin/env ts-node
console.log('process.argv', process.argv)
let c: number = parseInt(process.argv[2]);
let d: number = parseInt(process.argv[3]);

if (Number.isNaN(c) || Number.isNaN(d)) {
    console.log('输入不合法');
    process.exit(1);
}

console.log(c + d);
process.exit(0);

//可以修改成块级作用域 就不用一直改动声明了 可看最后一个devide.ts（除法）