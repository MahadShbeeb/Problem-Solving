const sinkingShip=(n,crew)=>{
    let res=''
    for (let member of crew){
       if (member.split(" ")[1]==='rat'){
         res+=` ${member.split(" ")[0] }`
       }
    }
    for (let member of crew){
       if (member.split(" ")[1]==='man'){
         res+=` ${member.split(" ")[0] }`
       }
    }
    for (let member of crew){
       if (member.split(" ")[1]==='woman' || member.split(" ")[1]==='child'){
         res+=` ${member.split(" ")[0] }`
       }
    }
    for (let member of crew){
       if (member.split(" ")[1]==='captain'){
         res+=` ${member.split(" ")[0] }`
       }
    }
     
   return res
}
console.log(sinkingShip(6,['Jack captain','Ali captain','Alice woman','Charlie man','sss man','sss man','RRR rat','Teddy rat','Bob child','Bob child','Julia woman']))

