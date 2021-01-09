const marcus = (raws, cols, grid) => {
    let path = "@IEHOVA#";
    let res = "";
    let list = {};
    path.split("").map((pathLetter) => {
        if (pathLetter !== '#') {
            list[pathLetter] = [];
        }
    });
    Object.keys(list).map((key) => {
        grid.map((row) => {
            row.map((letter) => {
                if (letter === key) {
                    list[letter] = [
                        grid[grid.indexOf(row)][row.indexOf(letter) - 1],
                        grid[grid.indexOf(row)][row.indexOf(letter) + 1],
                        grid[grid.indexOf(row) - 1 !== -1 ? grid.indexOf(row) - 1 : 0][row.indexOf(letter)],
                    ]
                }
            });
        });
    })
    path.split("").map((pathLetter) => {
        Object.keys(list).map((key) => {
            if (key === pathLetter) {
                list[key].map((letter) => {
                    if (letter === path.split("")[path.split("").indexOf(pathLetter) + 1] && list[key].indexOf(letter) === 0) {
                        res += ' left '
                    } else if (letter === path.split("")[path.split("").indexOf(pathLetter) + 1] && list[key].indexOf(letter) === 1) {
                        res += ' right '
                    } else if (letter === path.split("")[path.split("").indexOf(pathLetter) + 1] && list[key].indexOf(letter) === 2) {
                        res += ' forth '
                    }
                })
            }
        })
    })

    return res;
};
console.log(
    marcus(5, 4, [
        ["P", "S", "T", "#", "X"],
        ["B", "T", "J", "A", "S"],
        ["T", "Y", "C", "V", "M"],
        ["Y", "E", "H", "O", "F"],
        ["X", "I", "B", "K", "U"],
        ["N", "@", "R", "J", "B"]
    ])
);