const balancedTunnel=(n,enteredCars,exitedCars)=>{
    let obj={},obj1={},count=0
    for (let i=0;i<enteredCars.length;i++){
        obj[enteredCars[i]]=[]
        obj1[exitedCars[i]]=[]
    }
    enteredCars.reverse()
    for (let i=0;i<enteredCars.length;i++){
        for(let j=i+1;j<enteredCars.length;j++){
            obj[enteredCars[i].toString()].push(enteredCars[j])
        }
    }
    for (let i=0;i<exitedCars.length;i++){
        for(let j=i+1;j<exitedCars.length;j++){
            obj1[exitedCars[i].toString()].push(exitedCars[j])
        }
    }
    Object.entries(obj).map(ele=>{
        Object.entries(obj1).map(ele1=>{
            if (ele[0]===ele1[0]){
                let i=0
                while(i<ele[1].length){
                    if(ele1[1].includes(ele[1][i])){
                        count+=1
                        i+=ele[1].length
                    }
                    i+=1
                }
            }
        })
    })
    return count
}
console.log(balancedTunnel(2,[1, 2],[1, 2]))
