const bearAndStrings=(str)=>{
    let regex=/bear/g,match='',matches=[],sum=0
    while(match=regex.exec(str)){matches.push(match.index)}
    for (let i of matches){
        sum+=(str.length-(i+4))+i+((str.length-(i+4))*i)
    } 
    return sum+1
}
console.log(bearAndStrings('cxdbearef'))
