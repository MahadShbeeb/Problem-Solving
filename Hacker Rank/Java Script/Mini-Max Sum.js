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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let newarr = [...arr];
    let newarr1 = [...arr];
    let maxElement = 0, miniSum = 0, miniElement = 0, maxSum = 0;
    maxElement = newarr.sort().shift();
    maxSum = newarr.reduce((a, b) => (a + b), 0);
    miniElement = newarr1.sort().pop();
    miniSum = newarr1.reduce((a, b) => (a + b), 0);
    console.log(miniSum + ' ' + maxSum);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
