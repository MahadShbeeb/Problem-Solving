const sale=(tvSets,bobSets,tvPrices)=>{
    return Math.abs(tvPrices.sort((a,b)=>a-b).splice(0,Math.min(tvSets,bobSets)).filter(ele=>ele<=0).reduce((ele,acc)=>ele+acc))
}
console.log(sale(5 ,3,[-6, 0 ,35 ,-2 ,4]))
