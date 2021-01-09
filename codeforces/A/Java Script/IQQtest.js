const IQQtest=(n,numbers)=>{
    let oddIndex=evenIndex=evenCounter=oddCounter=0
    for (let num of numbers.split(" ")){
        if(parseInt(num)%2===0){
            evenCounter+=1
            evenIndex=numbers.split(" ").indexOf(num)
        }else{
            oddCounter+=1
            oddIndex=numbers.split(" ").indexOf(num)
        }
    }
    return evenCounter===1?evenIndex+1:oddIndex+1
}
console.log(IQQtest(4,'1 2 1 1'))