const duffAndMeat=(n,meats)=>{
    let a=0,b=0,dollers=0,min=10000000000,findMinB=false
    var newB=0
    for(let meat of meats){
        [a,b]=meat
        if(min>b){
            findMinB?dollers+=a*newB:dollers+=a*b
            min=b
        }else{ 
            newB=min
            dollers+=a*newB
            findMinB=true
        }
    }
return dollers
}
console.log(duffAndMeat(3,[[1, 3],[2, 1],[3, 1]]))
