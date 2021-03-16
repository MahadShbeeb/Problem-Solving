const sorted=(arr)=>{
    let leftSort=0,rightSort=0
    for (let i=0;i<arr.length-1;i++){
        if (arr[i]>arr[i+1]){leftSort+=1}
        if (arr[i]<arr[i+1]){rightSort+=1}
    }
return rightSort===arr.length-1 || leftSort===arr.length-1?'YES':'NO'
}
const sortTheArray=(n,arr)=>{}
console.log(sortTheArray(4,[1,3 ,2 ,4]))

