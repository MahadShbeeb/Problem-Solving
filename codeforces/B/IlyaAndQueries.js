const ilyaAndQueries=(str,n,queries)=>{
    let sum=0,dp=[]
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){sum+=1}
        dp[i]=sum
    }
    dp.unshift(0)
    for(let query of queries){
        console.log(dp[query[1]-1] - dp[query[0]-1])
    }
}
console.log(ilyaAndQueries('......',4,[[3 ,4],[2, 3],[1, 6],[2 ,6]]))
//1 1 5 4