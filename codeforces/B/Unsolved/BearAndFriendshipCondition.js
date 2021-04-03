const bearAndFriendshipCondition=(n,m,pairs)=>{
   
    return pairs.sort((a,b)=>a[1]-b[1])
}
console.log(bearAndFriendshipCondition(10, 4,[[4 ,3],[5, 10],[8, 9],[1, 2]]))