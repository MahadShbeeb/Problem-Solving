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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {

    let m = 9,
        d = 243,
        leap = year % 4 === 0 // Julian calendar leap year

    if (year === 1918) // transition between calendars
        d -= 13
    else if (year > 1918) // Gregorian calendar
        leap = year % 400 === 0 || leap && year % 100 !== 0 // Gregorian calendar leap year

    if (leap)
        d += 1

    return `${256 - d}.0${m}.${year}`
}

console.log(dayOfProgrammer(1918))



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
