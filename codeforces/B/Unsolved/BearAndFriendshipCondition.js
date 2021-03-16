const bearAndFriendshipCondition=(n,m,pairs)=>{
    let obj={},count=0
    for (let pair of pairs){ obj[pair[0]]=[]}
    for (let pair of pairs){obj[pair[0]].push(pair[1])}
    for(let arr of Object.values(obj)){
        for(let key of Object.keys(obj)){
            if(arr.includes(parseInt(key))){
               for (let item of obj[key]){if (arr.includes(item)){count+=1}}
               if(count === obj[key].length){return 'YES'} 
            }
        }
    }
    return obj
}
console.log(bearAndFriendshipCondition(10, 4,[[4 ,3],[5, 10],[8, 9],[1, 2]]))