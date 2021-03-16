const studentsAndShoelaces=(n,m,groups)=>{
    let obj={}
    for (let group of groups){
        Object.keys(obj).includes(group[0])? obj[group[0]]+=1:obj[group[0]]=1
    }
    for (let group of groups){
        Object.keys(obj).includes(group[1].toString())? obj[group[1]]+=1:obj[group[1]]=1
    }
    console.log(obj)
    return Object.values(obj).filter(ele=>ele<2).length
}
console.log(studentsAndShoelaces(6,3,[[1,2],[2,3],[3,4]]))
