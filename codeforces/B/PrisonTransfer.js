const prisonTransfer=(n,t,c,prisons)=>{
    let i=0,count=0,counter=0
    while (i<=(n-c)){
        count=0
        for (let j=i;j<c+i;j++){
            if (prisons[j]<=t){count+=1}
        }
        if (count===c){counter+=1}
        i+=1
    }
    return counter
}
console.log(prisonTransfer(11 ,4, 2,[2 ,2, 0, 7, 3, 2 ,2 ,4 ,9 ,1 ,4]))
