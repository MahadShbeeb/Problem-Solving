const sequentialNim=(n,stones)=>{
    let i = 0
    while (i < n){ 
        if (stones[i] === 1){
           i += 1
        }
    }
    if (i === n){
        if (n % 2 === 0)
            return "Second"
        else 
            return "First"
    }else{
        if (i % 2 !== 0)
            return "Second"
        else
            return "First"
    }
}
console.log(sequentialNim(3,[1 ,1 ,1 ,1, 1, 1, 1 ,1]))
