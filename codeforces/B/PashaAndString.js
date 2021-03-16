const pashaAndString=(str,m,a)=>{
    for (let i=0;i<m;i++){
    let s=str.substring(a[i]-1,str.length-a[i]+1)
    str=str.replace(s,s.split("").reverse().join(""))
    }
    return str
}
console.log(pashaAndString('abcdef',3,[1,2,3]))

