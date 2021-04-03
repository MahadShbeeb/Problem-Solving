const pashmakAndFlowers=(n,flowers)=>{
    let maxDifferent=0,obj={},ways=0
    for (let num of flowers){obj[num]===undefined?obj[num]=1:obj[num]+=1}
    for (let i=0;i<n;i++){
        for (let j=i+1;j<n;j++){
            if (maxDifferent <= Math.abs(flowers[i]-flowers[j])){
                maxDifferent = Math.abs(flowers[i]-flowers[j])
                ways=obj[flowers[i].toString()] * obj[flowers[j].toString()]
            }
        }
    } 
    console.log(maxDifferent,ways)
}
console.log(pashmakAndFlowers(2,[1,2]))
