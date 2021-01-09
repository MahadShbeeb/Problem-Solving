const kseniaAndPanScales = (str, direction) => {
    return str.split("|")[0].length > str.split("|")[1].length ?
        `${str.split("|")[0]}|${str.split("|")[1]}${direction}` :
        `${str.split("|")[0]}${direction}|${str.split("|")[1]}`
}
console.log(kseniaAndPanScales('AC|T', 'L'))