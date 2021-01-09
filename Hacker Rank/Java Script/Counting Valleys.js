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

function countingValleys(n, s) {

    let l = 0,
        v = 0

    for (let i = n; i-- > 0;) {
        if (s.charAt(i) === 'U') {
            if (l++ == 0)
                ++v
        } else {
            --l
        }
    }

    return v
}

console.log(countingValleys(8, 'UDDDUDUU'))
console.log(countingValleys(12, 'DDUUDDUDUUUD'))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
