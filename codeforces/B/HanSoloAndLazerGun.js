const hanSoloAndLazerGun=(n,x0,y0,coords)=>{
    let mainDignaolshots=0,secondDignaolshots=0,shots=0
    let max=[],rows={},cols={}
    for (let i=0;i<n;i++){
        [x,y]=coords[i]
        if (x===y){mainDignaolshots+=1}
        if (x===n-x){secondDignaolshots+=1}
    }
    for (let i=0;i<n;i++){
        [x,y]=coords[i]
        rows[x]=[]
        cols[y]=[]
    }
    for (let i=0;i<n;i++){
        [x,y]=coords[i]
        rows[x.toString()].push(y)
        cols[y.toString()].push(x)
    }
    let r=Object.values(rows).map(ele=>ele.length)
    let c=Object.values(cols).map(ele=>ele.length)
    while(n>0){
        max=[mainDignaolshots,secondDignaolshots,...r,...c].sort((a,b)=>b-a)
        shots+=1
        n-=max[0]
        max[0]=0
    }
    return shots
}
console.log(hanSoloAndLazerGun(2 ,1 ,2,[[1 ,1],[1 ,0]]))

