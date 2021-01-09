const collectingBeatsIsFun=(k,panels)=>{
    let occur={}
    panels.map((panel)=>{
        panel.split("").map((num)=>{
            Object.keys(occur).includes(num)?occur[num]+=1:occur[num]=1
        })
    })
    return Object.values(occur).filter(value=>value>2*k).length===0?'YES':'NO'
}
console.log(collectingBeatsIsFun(1,['....','12.1','.2..','.2..']))
