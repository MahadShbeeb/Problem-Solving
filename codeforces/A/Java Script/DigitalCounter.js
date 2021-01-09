const digitalCounter=(num)=>{
    let numbers={'0':[0,8],'3':[3,8,9],'5':[5,6],'6':[5,6],'7':[0,3,7,8,9],'8':[8],'9' :[8,9]}
    let firstProp=1,secondProp=1
    let firstNum=num[0].toString(),secondNum=num[1].toString()
    Object.keys(numbers).map(key=>{
        if(firstNum===key){firstProp=numbers[key].length}
        if(secondNum===key){secondProp=numbers[key].length}
    })
    return firstProp*secondProp
} 
console.log(digitalCounter('73'))