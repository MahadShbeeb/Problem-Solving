const luxuriousHouses=(n,heights)=>{
    let max=0
    for(let i=0;i<n-1;i++){
        max=0
        for(let j=i+1;j<n;j++){
            if(max<heights[j]){max=heights[j]}
        }
        console.log(max-heights[i]+1)
    }
    console.log(0)
}
console.log(luxuriousHouses(4,[3 ,2 ,1 ,4]))