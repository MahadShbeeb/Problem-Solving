const Barrels=(testCases,arr)=>{
    let n=0,k=0
    for(let i=0;i<n*2;i++){
       if (i%2===0){
            [n,k]=arr[i]
       }else{
            while(k>=0){
                k-=1
            }
       }
    } 
}
console.log(Barrels(2,[[4 ,1],[5 ,5 ,5 ,5],[3 ,2],[0, 0 ,0]]))
