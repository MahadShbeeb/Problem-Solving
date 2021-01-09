'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
"use strict";

function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0, result = [];
    for (let a of arr) { 
        (a > 0) ? pos += 1 : pos += 0;
        (a < 0) ? neg += 1 : neg += 0;
        (a == 0) ? zero += 1 : zero += 0;
    }
    console.log(result[0] = pos/arr.length);
    console.log(result[1] = neg / arr.length);
    console.log(result[2] = zero / arr.length);
    
}
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
