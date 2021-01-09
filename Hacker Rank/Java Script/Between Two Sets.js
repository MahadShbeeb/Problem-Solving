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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */
    function lcm(a, b) {
        return a * b / gcd(a, b)
    }

    function gcd(a, b) {
        // Euclid's division algorithm
        let t
        while (b !== 0) {
            t = b
            b = a % b
            a = t
        }
        return a
    }

    let l = a.reduce(lcm),
        g = b.reduce(gcd),
        c = 0

    for (let i = l; i < g + 1; i += l) {
        if (g % i === 0) {
            ++c
        }
    }

    return c
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}
