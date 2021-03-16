const cowsAndPokerGame=(n,str)=>{
    let obj={},I=0,A=0
    for(let i=0;i<n;i++){
       obj[str[i]]===undefined?obj[str[i]]=1:obj[str[i]]+=1
    }
    Object.entries(obj).map(entrie=>{
        entrie[0]==='I'?I=entrie[1]:entrie[0]==='A'?A=entrie[1]:''
    })
    return I!==0?I:A
}
console.log(cowsAndPokerGame(6,'AFFAAA'))