const innaAndNewMatrixOfCandies=(n,m,arr)=>{
    let dif=[]
    for(let i=0;i<arr.length;i++){
        if (arr[i].indexOf('G')>arr[i].indexOf('S')){
            return -1
        }else {
            dif.push(arr[i].indexOf('S')-arr[i].indexOf('G'))
        }     
    }
    return [...new Set([...dif])].length
}
console.log(innaAndNewMatrixOfCandies(3,4,['*G*S','G**S','*G*S']))