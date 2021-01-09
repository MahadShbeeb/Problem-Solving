'use strict';

const fs = require('fs');

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) { // O(log n) solution
    let p = 0

    for (let i = n; i-- > 0;) {
        let c = ar[i]
        ar.splice(i, 1)
        let of = ar.indexOf(c)

        if (of != -1) {
            ar.splice(of, 1)
            --i
            ++p
        }
    }

    return p
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
