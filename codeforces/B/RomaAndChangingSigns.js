const romaAndChangingSigns=(n,k,incomes)=>{
    for (let i=0;i<n;i++){
        if (k > 0){
           incomes[i]=incomes[i]*(-1)
           k-=1
        } 
    }
    return incomes.reduce((acc,ele)=>acc+ele,0)
}
console.log(romaAndChangingSigns(4,2,[-5,-4,1,3]))