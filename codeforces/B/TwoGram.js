const twoGram = (n,str) => {
    let pairs=[],i=0
    let curr={}
    while (i<n){
        pairs.push(str.substring(i,i+2))
        i+=1
    }
    for (let pair of pairs){
        curr[pair] === undefined ? curr[pair] = 1 : curr[pair] += 1 
    }
    return Object.entries(curr).sort((a,b)=>b[1]-a[1])[0][0]
}
console.log(twoGram(5,'ZZZAA'))
