const dreamoonAndWiFi=(s1,s2)=>{
    let add=0,minus=0,add1=0,minus1=0,unknow=0
    for(let i=0;i<s1.length;i++){s1[i]==='+'?add1+=1:minus1+=1}
    for(let i=0;i<s2.length;i++){s2[i]==='+'?add+=1:s2[i]==='-'?minus+=1:unknow+=1}
    if (unknow===0){add===add1?console.log(1.0.toFixed(10)):console.log(0.0.toFixed(10))}
    
}
    
console.log(dreamoonAndWiFi('+-+-','+-??'))


