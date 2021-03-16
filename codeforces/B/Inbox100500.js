const inbox100500=(n,mailBox)=>{
    let prev = -1,count = 0
    for (let i=0;i<n;i++){
        if(mailBox[i]===1){
            i-prev<=2 && prev!=-1?count += i-prev:prev==-1?count += 1:count += 2
            prev = i
        }
    }
    return count
}
console.log(inbox100500(5,[1 ,1 ,0 ,0 ,1]))
