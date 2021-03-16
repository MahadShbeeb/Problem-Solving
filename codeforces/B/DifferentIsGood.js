const differentIsGood=(n,str)=>{
    return str.length-[... new Set(str.split(""))].length
}
console.log(differentIsGood(4,'koko'))
