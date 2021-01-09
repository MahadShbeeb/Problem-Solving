const valeraAndPlates=(n, plates, bowls,a)=>{
    let washPlateOrBowl=0
    for (let i of a){
        if(i===1){
            plates>=1?plates-=1:washPlateOrBowl+=1
        }else if (i===2){
            bowls>=1?bowls-=1:plates>=1?plates-=1:washPlateOrBowl+=1
        }
    }
    return washPlateOrBowl
}
console.log(valeraAndPlates(3 ,1, 1,[1 ,2 ,1]))