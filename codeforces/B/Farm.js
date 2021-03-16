const farm=(n)=>{
    let res=''
    for (let i=0;i<10;i++){
        let a=Math.pow(i,n)
        for (let j=0;j<10;j++){
            let b=Math.pow(j,n)
            for (let k=0;k<10;k++){
                let c=Math.pow(k,n)
                if (a+b===c && a<b && b<c){
                    res=a+' '+b+' '+c
                    return res
                }
            }
        }
    }
    return -1
}
console.log(farm(1))
