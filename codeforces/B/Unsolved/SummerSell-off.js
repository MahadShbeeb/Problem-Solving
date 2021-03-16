const summerSellOff=(n,f,products)=>{
    let k=0,l=0,productsCounter=0,max=[]
    for (let i=0;i<n;i++){
        if (f>0){
            [k,l]=products[i]
            max.push([2*k,l])
        }
    }
    console.log(max)
    for (let i of max){i[0]>i[1]?productsCounter+=i[1]:productsCounter+=i[0]}
    return productsCounter
} 
console.log(summerSellOff(4, 2,[[2,1],[3 ,5],[2 ,3],[1, 5]]))
