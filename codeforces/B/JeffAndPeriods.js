const jeffAndPeriods=(n,arr)=>{
    let obj={},different=0,differentCounter=0,count=0
    for (let i of [...new Set(arr)]){obj[i]=[]}
    for (let i of arr){
        obj[i].push(arr.indexOf(i))
        arr[arr.indexOf(i)]=0
    }
    let entries=Object.entries(obj)
    for (let j=0;j<entries.length;j++){
        if(entries[j][1].length===1){
            console.log(entries[j][0],0)
            count+=1
        }else if (entries[j][1].length===2){
            console.log(entries[j][0],entries[j][1][1]-entries[j][1][0])
            count+=1
        }else{
            different=entries[j][1][1]-entries[j][1][0]
            for (let k=0;k<entries[j][1].length;k++){
                if (different===(entries[j][1][k+1]-entries[j][1][k])){differentCounter+=1}    
            }
            if(differentCounter===entries[j][1].length-1){
                console.log(entries[j][0],different)
                count+=1
            }
        }
    }
    console.log(count)
}
console.log(jeffAndPeriods(11,[4,1,1,1,1,4,1,2,2,1,5]))