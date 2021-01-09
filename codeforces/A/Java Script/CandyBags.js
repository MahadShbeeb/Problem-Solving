const candyBags=(brothers)=>{
    let count=0
    for (let j=1;j<=Math.pow(brothers,2);j++){
        if (count <brothers){
            console.log(j,Math.pow(brothers,2)-j+1)
            count+=1
        }
    }
}
console.log(candyBags(3))
