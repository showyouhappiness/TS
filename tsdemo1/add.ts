#!/usr/bin/env ts-node
console.log('process.argv',process.argv)
let a:number = parseInt(process.argv[2]);
let b:number = parseInt(process.argv[3]);

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('输入不合法');
    process.exit(1);
  }
  
  console.log(a + b);
  process.exit(0);