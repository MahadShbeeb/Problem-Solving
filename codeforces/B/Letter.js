const letter=(s1,s2)=>{
    let count=0
    s2=s2.toLowerCase().split(" ").join("").split("")
    s1=s1.toLowerCase().split(" ").join("").split("")
    s2.map(item=>{if(s1.includes(item)){count+=1}})
    return s2.length===count?'YES':'NO'
}
console.log(letter('abcdefg hijk'
,'k j i h g f e d c b a'))

