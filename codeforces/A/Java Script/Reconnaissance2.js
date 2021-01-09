const reconnaissance2=(n,soldiersheight)=>{
    soldiersheight=soldiersheight.split(" ")
    let min=[...soldiersheight].sort()[0]
    let min1=[...soldiersheight].sort()[1]
    console.log(soldiersheight.indexOf(min)+1)
    soldiersheight[soldiersheight.indexOf(min)]=0
    console.log(soldiersheight.indexOf(min1)+1)
    // let min=1000000,idx1 = 1,idx2 = n,d=0   
    // for(let i=0; i<n; i++){
    //     if(min > Math.abs(parseInt(soldiersheight[i]) - parseInt(soldiersheight[i+1]))){
    //         min = Math.abs(parseInt(soldiersheight[i]) - parseInt(soldiersheight[i+1]))
    //         idx1 = i+1
    //         idx2 = i+2
    //     }
    // }
    // console.log(idx1,idx2)
}
console.log(reconnaissance2(5,'10 12 13 15 10'))