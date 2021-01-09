const theNumberOfPositions=(n,a,b)=>{
    let postions=[]
    for (let i=0;i<n;i++){
        if (i+a<n){
           postions.push(i+a+1)
        }
    }
return postions.length
}
console.log(theNumberOfPositions(3 ,1 ,1))