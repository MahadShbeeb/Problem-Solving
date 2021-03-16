const AandBandCompilationErrors=(n,compilerErrors)=>{
    // compilerErrors.map(e=>e.sort())
    // let i=0,j=0
    // while (i<compilerErrors.length-1){
    //     j=0
    //     while (j<n){
    //         if (compilerErrors[i][j]!==compilerErrors[i+1][j]){
    //             console.log(compilerErrors[i][j])
    //             break
    //         } 
    //         j+=1    
    //     }
    //     i+=1
    // }
    let sum1=0,sum2=0,sum3=0
    sum1=compilerErrors[0].reduce((ele,acc)=>ele+acc)
    sum2=compilerErrors[1].reduce((ele,acc)=>ele+acc)
    sum3=compilerErrors[2].reduce((ele,acc)=>ele+acc)
    console.log(sum1-sum2)
    console.log(sum2-sum3)

}
console.log(AandBandCompilationErrors(6,[[1, 4, 3, 3, 5 ,7],[3 ,7 ,5 ,4 ,3],[4, 3, 7 ,5]]))
