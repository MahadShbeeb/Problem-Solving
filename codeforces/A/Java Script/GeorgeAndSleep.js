const georgeAndSleep=(s,t)=>{
    let firstPart=((s.split(':')[0]==='00'?24:parseInt(s.split(':')[0]))-(t.split(':')[0]==='00'?24:parseInt(t.split(':')[0]))).toString()
    let secondPart=(parseInt(s.split(':')[1])-parseInt(t.split(':')[1])).toString()
    if(firstPart.length===1){firstPart='0'+firstPart}
    if(secondPart.length===1) {secondPart='0'+secondPart}
    return firstPart+':'+secondPart
}
console.log(georgeAndSleep('05:50','05:44'))

