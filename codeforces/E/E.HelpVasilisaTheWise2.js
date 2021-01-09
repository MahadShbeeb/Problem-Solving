const helpVasilisaTheWise2 = (r1, r2, c1, c2, d1, d2) => {
    let a = 0,
        b = 0,
        c = 0,
        d = 0;
    for (let i = 1; i < 10; i++) {
        a = i
        for (let j = 1; j < 10; j++) {
            b = j
            for (let k = 1; k < 10; k++) {
                c = k
                for (let l = 1; l < 10; l++) {
                    d = l
                    if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
                        if (a + b === r1 && c + d === r2 && a + c === c1 && b + d === c2 && a + d === d1 && b + c === d2) {
                            return [a, b, c, d]
                        }
                    }
                }
            }
        }
    }
    return -1
}
console.log(helpVasilisaTheWise2(11, 10, 13, 8, 5, 16))