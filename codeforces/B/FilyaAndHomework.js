const filyaAndHomework=(n,arr)=>{
    let set=[...new Set([...arr])]
    if(set.length<3){return 'YES'}
    else if (set.length>3){return 'NO'}
    else{ return set[2]-set[1]===set[1]-set[0]?'YES':'NO'}
}
console.log(filyaAndHomework(5,[1 ,2 ,3 ,2, 1]))

