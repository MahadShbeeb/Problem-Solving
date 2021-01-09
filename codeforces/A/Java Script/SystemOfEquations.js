const systemOfEquations=(n,m)=>{
    let count=0
    for (let i=0;i<=10;i++){
        for (let j=0;j<=10;j++){
            let a=i,b=j
            if (Math.pow(a,2)+b===n && a+Math.pow(b,2)===m){
                console.log(a,b)
                count+=1
            }
        }
    }
return count
}
console.log(systemOfEquations(4 ,20))