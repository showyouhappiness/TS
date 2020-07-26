#!/usr/bin/env ts-node
{
    console.log('process.argv', process.argv)
let e: number = parseInt(process.argv[2]);
let f: number = parseInt(process.argv[3]);

if (Number.isNaN(e) || Number.isNaN(f)) {
    console.log('输入不合法');
    process.exit(1);
}
if(f === 0){
    console.log('除数不能为0');
    process.exit(2);
}
console.log(e*f);
process.exit(0);
}