const ostapAndGrasshopper=(n,k,way)=>{
    let empty=false
    let initalIndex=way.split("").indexOf('G')+1
    let targetIndex=way.split("").indexOf('T')+1
    if(initalIndex>targetIndex){[targetIndex,initalIndex]=[initalIndex,targetIndex]}
    for (let i=initalIndex;i<targetIndex-1;i++){
        if(way[i]!=='.'){
            empty=true
            break
        }
    }
    return empty===false && targetIndex-initalIndex>0||targetIndex-initalIndex===k?'YES':'NO'
}
console.log(ostapAndGrasshopper(6 ,2,'..G.T..'))
