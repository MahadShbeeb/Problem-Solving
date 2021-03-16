const beautifulPaintings=(n,arr)=>{
    let obj={},res=0
    for(let i=0;i<n;i++){
       obj[arr[i]]===undefined?obj[arr[i]]=1:obj[arr[i]]+=1
       res=Math.max(res,obj[arr[i]])
    }
    return n-res
}
console.log(beautifulPaintings(4,[200 ,100 ,100 ,200]))

