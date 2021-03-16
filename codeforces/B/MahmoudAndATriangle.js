const mahmoudAndATriangle=(n,lengths)=>{
    let i=0
    while (i<lengths.length){
        if(lengths[i]+lengths[i+1]>lengths[i+2]&&lengths[i]+lengths[i+2]>lengths[i+1]&&lengths[i+1]+lengths[i+2]>lengths[i]){
            return 'YES'
        }
        i+=2
    }
    return 'NO'
}
console.log(mahmoudAndATriangle(3,[4 ,1 ,2]))
