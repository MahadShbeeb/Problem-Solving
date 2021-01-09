const toyCars=(n,cars)=>{
    let goodCarsCount=0,res=[]
    for (let i=0;i<cars.length;i++){
        if (!cars[i].includes(1) && !cars[i].includes(3)){
            goodCarsCount+=1
            res.push(i+1)
        }
    }
    console.log(goodCarsCount)
    console.log(...res)
}
console.log(toyCars(4,[[-1 ,3 ,3 ,3], [3 ,-1 ,3 ,3], [3 ,3 ,-1 ,3],[3 ,3 ,3 ,-1]]))