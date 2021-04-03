const approximatingAConstantRange=(n,arr)=>{
    let constantRanges=[],range=[],j=0,i=0
    while (i<n){
        range=[]
        j=i+1
        while (j<n){
            if (checkDifferent([arr[j],...range])){
                if (Math.abs(arr[i]-arr[j])<=1 ){
                    range.push(arr[j])
                }else {
                    break
                }
            }else {
                break
            }   
            j+=1
        } 
        range.push(arr[i])
        constantRanges.push(range)
        i+=1
    }
    let max=0
    for (let seq of constantRanges) {
        max=Math.max(max,seq.length)
    }
    return max
}
const checkDifferent=(arr)=>{
    if (arr.length===0){ return true }
    let count=0
    for (let i=0;i<arr.length;i++){
        if (Math.abs(arr[i]-arr[i+1])<=1){
            count+=1
        }
    }
    return count === arr.length-1 ? true : false
}
console.log(approximatingAConstantRange(11,[1,2,3,3,2,8,8,8,8,8,9]))
