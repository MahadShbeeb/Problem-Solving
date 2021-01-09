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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let hh = parseInt(s.slice(0, 2)),
        f = s.slice(8, 10)
    s = s.slice(0, 8)

    if (f === 'PM') {
        hh += hh !== 12 ? 12 : 0
    } else if (hh === 12) {
        hh = 0
    }

    return (hh > 9 ? hh : '0' + hh) + s.slice(2, 8)
}

console.log(timeConversion('07:05:45PM'))


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
