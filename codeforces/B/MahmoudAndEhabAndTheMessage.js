const mahmoudAndEhabAndTheMessage=(words,costs,replaces, mahmoudMessage)=>{
    let finalCost=0,min=0
    for (let replace of replaces){
        min=1000000
        for (let index of replace){
            min=Math.min(min,costs[index-1])
        }
        finalCost+=min
    } 
    return finalCost
}
console.log(mahmoudAndEhabAndTheMessage('i loser am the second',[100 ,1, 1, 5 ,10],
[[1 ,1],[1 ,3],[2, 2,5],[1 ,4]], 'i am the second'))