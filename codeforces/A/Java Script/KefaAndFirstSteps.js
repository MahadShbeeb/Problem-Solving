const kefaAndFirstSteps=(n,a)=>{
    a=a.split(" ")
    let min=[...a].sort()[0],max=[...a].sort()[a.length-1]
    return (a.indexOf(max)-a.indexOf(min))+1
}

console.log(kefaAndFirstSteps(3,'2 2 9'))
