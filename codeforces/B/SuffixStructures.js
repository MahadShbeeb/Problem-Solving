const suffixStructures=(s,t)=>{
    let count=0,j=0
    for (let i of t.split("").sort()){
        if (s.split("").sort().join("").substring(j).includes(i)){count+=1}
        j+=1
    }
    if(count===t.length){return s}
    return s+' '+t
}
console.log(suffixStructures('automaton','tamot'))