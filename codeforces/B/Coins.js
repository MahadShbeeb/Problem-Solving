const coins=(str)=>{
    let obj={'A':0,'B':0,'C':0}
    for (let s of str){
        s.split("")[1]==='>'?obj[s.split("")[0]]+=1:obj[s.split("")[2]]+=1
    }
    return Object.entries(obj).sort((a,b)=>a[1]-b[1]).map(ele=>ele[0]).join("")
}
console.log(coins(['A>B','C<B','A>C']))

