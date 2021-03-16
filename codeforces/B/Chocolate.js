const chocolate=(n,arr)=>{
    let indexes=[],res=1
    arr.filter(ele=>{
        if(ele===1){
            indexes.push(arr.indexOf(ele))
            arr[arr.indexOf(ele)]=0
        }
    })
    if (indexes.length<=1){return indexes.length}
    for (let i=1;i<indexes.length;i++){res*=indexes[i]-indexes[i-1]}
    return res
}
console.log(chocolate(5,[1, 1, 1, 0 ,1]))
