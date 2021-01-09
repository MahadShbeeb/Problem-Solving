const vanyaAndCards=(n,x,cards)=>{
    let sum=0,a=[]
    cards=cards.filter(card=> card!==0)
    for (let i of cards){
        sum+=i
        a.push(i)
        if (sum===0){
            cards=cards.filter(card=> card!==a[0] && card!==a[1])
        }
    }
    return cards.map(card=>{if(Math.abs(card)<=x) {return Math.abs(card)}}).filter(card=>card).length
}
console.log(vanyaAndCards(3,2,[-1 ,1 ,2]))