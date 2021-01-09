const drazilAndDate=(a,b,s)=>{
    let distance=Math.abs(a)+Math.abs(b)
    return s>=distance&&(s-distance)%2===0?'YES':'NO'
}

console.log(drazilAndDate(0 ,5 ,1)) 