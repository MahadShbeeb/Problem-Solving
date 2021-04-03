const queueAtTheSchool=(n,seconds,queue)=>{
    let i=0
    queue=queue.split("")
    while (seconds>0) {
        i=0
        while (i<=n) {
            if (queue[i]==='B' && queue[i+1]==='G'){
                queue[i]='G'
                queue[i+1]='B'
                i+=1
            }
            i+=1
        }
        seconds-=1
    }
    return queue.join("")
}
console.log(queueAtTheSchool(5 ,1,'BGGBG'))
// GBGGB