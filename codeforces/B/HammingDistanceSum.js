const hammingDistanceSum=(a,b)=>{
    let sum=0,i=0
    let shortest=a.length>b.length?b:a
    let longest=a.length>b.length?a:b
    if (a.length===b.length){
        shortest=a
        longest=b
    }
    while(i<longest.length){
        for(let j=0;j<shortest.length;j++){
            sum+=(parseInt(longest[j])+parseInt(shortest[j]))%2==0?0:1
        }
        i+=shortest.length
    } 
    return sum
}
console.log(hammingDistanceSum('01','00111'))
