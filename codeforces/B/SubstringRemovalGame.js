const substringRemovalGame=(str)=>{
    let seqOfOnes=0,sequances=[]
    for (let i=0;i<str.length;i++){
        if(str[i] === '1'){
            seqOfOnes+=1
        }else {
           sequances.push(seqOfOnes)
           seqOfOnes=0
        }
    }
    let alicePoints=0
    sequances.push(seqOfOnes)
    sequances.sort((a,b)=>b-a).filter(ele=>ele>0)
    for (let i=0;i<sequances.length;i++){
        if (i%2===0){
            alicePoints+=sequances[i]
        } 
    }
    return alicePoints
}
console.log(substringRemovalGame('01111001'))
