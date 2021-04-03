const giftsFixing=(n,firstGifts,secondGifts)=>{
    let minOfFirstGift=[...firstGifts].sort((a,b)=>a-b)[0]
    let minOfSecondGift=[...secondGifts].sort((a,b)=>a-b)[0]
    let count=0
    for (let i=0;i<n;i++){
        if (firstGifts[i]!==minOfFirstGift && secondGifts[i]!==minOfSecondGift){
           count+=(firstGifts[i]===secondGifts[i])?
           Math.max(firstGifts[i],secondGifts[i])-Math.min(minOfFirstGift,minOfSecondGift)
           :Math.max((firstGifts[i]-minOfFirstGift),(secondGifts[i]-minOfSecondGift))
        }else if (firstGifts[i]!==minOfFirstGift){
           count+=firstGifts[i]-minOfFirstGift
        }else if (secondGifts[i]!==minOfSecondGift){
           count+=secondGifts[i]-minOfSecondGift
        }
    }
    return count
}
console.log(giftsFixing(5,[1,2,3,4 ,5],[5,4,3, 2 ,1]))

