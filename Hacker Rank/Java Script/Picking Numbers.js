'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {

    let c = [],
        m = 0

    for (let i = a.length; i-- > 0;) {
        let v = a[i]
        if (isNaN(c[v]))
            c[v] = 1
        else
            ++c[v]
    }

    for (let i = c.length; i-- > 1;) {
        let v = c[i - 1]
        v = !isNaN(v) ? v + c[i] : c[i]

        if (v > m)
            m = v
    }

    return m
}

// console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
// console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
// console.log(pickingNumbers([3, 3, 4, 4, 9, 9, 9, 9, 9, 14, 14, 14])

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
