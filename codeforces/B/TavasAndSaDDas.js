const tavasAndSaDDas=(n)=>{
    let count=0
    for (let i=4;i<=n;i++){
        if (i.toString().split("").every(ele=>ele==='4'||ele==='7')){count+=1}
    } 
    return count     
}
console.log(tavasAndSaDDas(77))
