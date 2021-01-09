const wordCapitalization = (str) => {
    return str[0] !== str.toUpperCase()[0] ? str.toUpperCase()[0] + str.substring(1, str.length) : str
}
console.log(wordCapitalization('konjac'))