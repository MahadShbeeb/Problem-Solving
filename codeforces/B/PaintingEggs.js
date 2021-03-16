const paintingEggs=(n,pays)=>{
    let SumA=0,SumG=0,i=0,res=''
    while (i<n){
        if (SumG+pays[i][0]-SumA<=500){
            SumG+=pays[i][0]
            res+='A'
        }else{
            SumA+=pays[i][1]
            res+='G'
        }
        i+=1
    }
    return res
}
console.log(paintingEggs(3,[[400 ,600],[400 ,600],[400 ,600]]))
